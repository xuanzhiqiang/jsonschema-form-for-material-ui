import fill from 'core-js/library/fn/array/fill';

export function isObject(thing) {
  if (typeof File !== 'undefined' && thing instanceof File) {
    return false;
  }
  return typeof thing === 'object' && thing !== null && !Array.isArray(thing);
}

export function mergeObjects(obj1, obj2, concatArrays = false) {
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
  return Object.keys(obj2).reduce((acc, key) => {
    const left = obj1 ? obj1[key] : {},
      right = obj2[key];
    if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right);
    } else {
      acc[key] = right;
    }
    return acc;
  }, acc);
}

export function isSelect(schema) {
  const altSchemas = schema.oneOf || schema.anyOf;
  if (Array.isArray(schema.enum)) {
    return true;
  } else if (Array.isArray(altSchemas)) {
    return altSchemas.every(altSchemas => isConstant(altSchemas));
  }
  return false;
}

export function isMultiSelect(schema) {
  if (!schema.uniqueItems || !schema.items) {
    return false;
  }
  return isSelect(schema.items);
}

export function isFixedItems(schema) {
  return (
    Array.isArray(schema.items) &&
    schema.items.length > 0 &&
    schema.items.every(item => isObject(item))
  );
}

function computeDefaults(schema, parentDefaults) {
  // Compute the defaults recursively: give highest priority to deepest nodes.
  let defaults = parentDefaults;
  if (isObject(defaults) && isObject(schema.default)) {
    defaults = mergeObjects(defaults, schema.default);
  } else if ('default' in schema) {
    defaults = schema.default;
  } else if (isFixedItems(schema)) {
    defaults = schema.items.map(itemSchema =>
      computeDefaults(itemSchema, undefined)
    );
  }
  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof defaults === 'undefined') {
    defaults = schema.default;
  }

  switch (schema.type) {
    // We need to recur for object schema inner default values.
    case 'object':
      return Object.keys(schema.properties || {}).reduce((acc, key) => {
        // Compute the defaults for this node, with the parent defaults we might
        // have from a previous run: defaults[key].
        let value = computeDefaults(
          schema.properties[key],
          (defaults || {})[key]
        );
        if (value === undefined) {
          value = '';
        }
        acc[key] = value;
        return acc;
      }, {});
    case 'array':
      if (schema.minItems) {
        if (!isMultiSelect(schema)) {
          const defaultsLength = defaults ? defaults.length : 0;
          if (schema.minItems > defaultsLength) {
            const defaultEntries = defaults || [];
            // populate the array with the defaults
            const fillerSchema = Array.isArray(schema.items)
              ? schema.additionalItems
              : schema.items;
            const fillerEntries = fill(
              new Array(schema.minItems - defaultsLength),
              computeDefaults(fillerSchema, fillerSchema.defaults)
            );
            // then fill up the rest with either the item default or empty, up to minItems

            return defaultEntries.concat(fillerEntries);
          }
        } else {
          return [];
        }
      }
      break;
    default:
  }
  return defaults;
}

export function getDefaultFormState(schema, formData) {
  if (!isObject(schema)) {
    throw new Error('Invalid schema: ', schema);
  }
  const defaults = computeDefaults(schema, schema.default);
  if (typeof formData === 'undefined') {
    return defaults;
  }
  if (typeof formData === 'string') {
    return defaults;
  }
  if (isObject(formData)) {
    return mergeObjects(defaults, formData);
  }
  return formData || defaults;
}
