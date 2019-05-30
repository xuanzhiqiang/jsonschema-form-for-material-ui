import update from 'immutability-helper';
import forOwn from 'lodash/forOwn';
import mapValues from 'lodash/mapValues';
import rules from './rules';

const validationResult = (schema, value) => {
  const rv = [];
  forOwn(rules, (rule, ruleId) => {
    const result = rule(schema, value);
    if (result) {
      rv.push({
        rule: ruleId,
        ...result
      });
    }
  });
  return rv;
};

const getFieldSpec = (schema, value) => {
  if (value === null) {
    return { $set: [] };
  }
  if (typeof value !== 'object') {
    return { $set: validationResult(schema, value) };
  }
  if (schema.type === 'array') {
    const rv = [];
    forOwn(value, item => {
      rv.push(getFieldSpec(schema.items, item));
    });
    return rv;
  }
  return mapValues(schema.properties, (s, p) => getFieldSpec(s, value[p]));
};

export default (schema, data) => {
  const spec = getFieldSpec(schema, data);
  return update(data, spec);
};
