# jsonschema-form-for-material-ui

A [Material UI](http://www.material-ui.com/) port of [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form).

[Project](https://github.com/alphaeadevelopment/material-ui-jsonschema-form) forked from [Graham King](https://github.com/alphaeadevelopment).

The initial project had lots of stuff in it, including a strict node version and demo server.

This package:

* Updated packages
* Not pre-bundled
* Better layout
* Will be supported and updated

# Installation
```
npm install --save jsonschema-form-for-material-ui
```

# Usage

```js
import SchemaForm from 'jsonschema-form-for-material-ui';

const styles = theme => ({
  field: {},
  formButtons: {},
  root: {},
});

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    }
  }
}

const uiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "This description will be in a Popover"
  }
}

const initialFormData = {
  "firstName": "Chuck",
  "lastName": "Norris",
  "age": 75,
}

<SchemaForm
  classes={classes}
  schema={schema}
  uiSchema={uiSchema}
  formData={initialFormData}
  onCancel={this.onCancel}
  onSubmit={this.onSubmit}
  onChange={this.onFormChanged}
/>
```

# API

Prop | Description
-|-
schema | The JSON Schema that will be the base of the form
classes | `withStyles()` classes that get passed to root components for better styling of the form
uiSchema| Extra styling for fields. </br> Each key references one schema key </br>
formData | The initial data with which to populate the form
onCancel | Called when the `Cancel` button is pressed
onSubmit | Called when the `Submit` button is pressed
onChange | Called when form data is changed
cancelText | Text for the `Cancel` button (`Cancel` by default)
submitText | Text for the `Submit` button (`Submit` by default)

## Classes

name | element
-|-
root | The surrounding `Paper` element  
field | Fields container
formButtons | Button div
button | Cancel/Submit form button
cancel | Cancel form button
submit | Submit form button

## In-depth prop descriptions

### uiSchema

#### ui:widget - `string`

This setting handles the input type that will be shown.

Default - `textarea`

* radio
* updown
* password
* textarea
* checkboxes
* ~~alt-datetime (~~`todo`~~)~~

#### ui:title - `string`

Title of field that will be shown

#### ui:description - `string`

The description text that will be shown when hovering on the info icon

#### ui:options - `object`

inline - `boolean`

disabled - `boolean`

disabled - `function(data, objectData)` should return boolean

~~inputType (~~`todo`~~) - Format the input to a specific type (e.g. Phone, Credit Card, Date, etc)~~

#### ui:help - `string`

Help text that will be shown below the input

#### ui:orientation - `string`

row

default


# Contributing

Issues and pull requests welcome!

Give the initial author credit, too.
