(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  fieldSet: function fieldSet(theme) {
    return {
      root: {
        display: 'flex'
      },
      listItem: {
        'border': '1px dotted ' + theme.palette.primary.main,
        'margin': theme.spacing.unit,
        'padding': theme.spacing.unit
      }
    };
  },
  fieldSetObject: {
    'root': {
      'display': 'flex',
      'flexDirection': 'column',
      '&$row': {
        flexDirection: 'row'
      }
    },
    'row': {},
    'listItem': {}
  },
  fieldSetArray: function fieldSetArray(theme) {
    return {
      'root': {
        display: 'flex',
        flexDirection: 'column'
      },
      'listItem': {},
      'addItemBtn': {
        'display': 'flex',
        'justifyContent': 'flex-end',
        '&>button': {
          'background': theme.palette.primary.main,
          'width': '3.75em',
          'color': theme.palette.common.white,
          'height': '1.25em',
          'borderRadius': 5
        }
      }
    };
  },
  reorderable: {
    'root': {
      'display': 'flex',
      'alignItems': 'baseline',
      'justifyContent': 'space-between',
      '& >fieldset': {
        width: '100%'
      }
    },
    'listItem': {}
  },
  reorderControls: function reorderControls(theme) {
    return {
      root: {
        'display': 'flex',
        'border': '1px solid ' + theme.palette.grey[400],
        'borderRadius': 5,
        '& >button': {
          'borderRadius': 0,
          'width': '1.25em',
          'height': '1.25em',
          '&:not(:last-child)': {
            borderRight: '1px solid ' + theme.palette.grey[400]
          }
        }
      },
      remove: {
        background: theme.palette.error.main,
        color: theme.palette.grey[800]
      }
    };
  },
  fieldSetContent: {
    'root': {},
    'listItem': {}
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/field-set-styles.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawFormField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isEqual = __webpack_require__(8);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _styles = __webpack_require__(1);

var _FieldSet = __webpack_require__(19);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _fields = __webpack_require__(33);

var _fields2 = _interopRequireDefault(_fields);

var _formFieldStyles = __webpack_require__(57);

var _formFieldStyles2 = _interopRequireDefault(_formFieldStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// exported for unit testing
var RawFormField = exports.RawFormField = function (_React$Component) {
  _inherits(RawFormField, _React$Component);

  function RawFormField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RawFormField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawFormField.__proto__ || Object.getPrototypeOf(RawFormField)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
      var _this2;

      return (_this2 = _this).__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RawFormField, [{
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__() {
      return this.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__(nextProps) {
      return !(0, _isEqual2.default)(this.props.data, nextProps.data);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          schema = _props.schema,
          data = _props.data,
          _props$uiSchema = _props.uiSchema,
          uiSchema = _props$uiSchema === undefined ? {} : _props$uiSchema,
          onChange = _props.onChange,
          path = _props.path,
          rest = _objectWithoutProperties(_props, ['classes', 'schema', 'data', 'uiSchema', 'onChange', 'path']);

      var type = schema.type;

      if (type === 'object' || type === 'array') {
        return _react2.default.createElement(_FieldSet2.default, _extends({ path: path, schema: schema, data: data, uiSchema: uiSchema, onChange: onChange }, rest));
      }
      return _react2.default.createElement(_fields2.default, _extends({
        className: classes.field,
        path: path,
        schema: schema,
        data: data,
        uiSchema: uiSchema,
        onChange: onChange && onChange(path)
      }, rest));
    }
  }]);

  return RawFormField;
}(_react2.default.Component);

var _default = (0, _styles.withStyles)(_formFieldStyles2.default)(RawFormField);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawFormField, 'RawFormField', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FormField.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FormField.jsx');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/size");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash/includes");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash/mapValues");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(15);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isEqual = __webpack_require__(8);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _shortid = __webpack_require__(16);

var _styles = __webpack_require__(1);

var _Paper = __webpack_require__(17);

var _Paper2 = _interopRequireDefault(_Paper);

var _formStyles = __webpack_require__(18);

var _formStyles2 = _interopRequireDefault(_formStyles);

var _FormField = __webpack_require__(4);

var _FormField2 = _interopRequireDefault(_FormField);

var _updateFormData = __webpack_require__(58);

var _updateFormData2 = _interopRequireDefault(_updateFormData);

var _validation = __webpack_require__(59);

var _validation2 = _interopRequireDefault(_validation);

var _ValidationMessages = __webpack_require__(68);

var _ValidationMessages2 = _interopRequireDefault(_ValidationMessages);

var _FormButtons = __webpack_require__(70);

var _FormButtons2 = _interopRequireDefault(_FormButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: _this.props.formData,
      validation: (0, _validation2.default)(_this.props.schema, _this.props.formData),
      id: (0, _shortid.generate)()
    }, _this.componentWillReceiveProps = function () {
      var _this2;

      return (_this2 = _this).__componentWillReceiveProps__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.onChange = function () {
      var _this3;

      return (_this3 = _this).__onChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.onMoveItemUp = function () {
      var _this4;

      return (_this4 = _this).__onMoveItemUp__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.onMoveItemDown = function () {
      var _this5;

      return (_this5 = _this).__onMoveItemDown__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.onDeleteItem = function () {
      var _this6;

      return (_this6 = _this).__onDeleteItem__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.onAddItem = function () {
      var _this7;

      return (_this7 = _this).__onAddItem__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.onSubmit = function () {
      var _this8;

      return (_this8 = _this).__onSubmit__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.notifyChange = function () {
      var _this9;

      return (_this9 = _this).__notifyChange__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: '__notifyChange__REACT_HOT_LOADER__',
    value: function __notifyChange__REACT_HOT_LOADER__() {
      return this.__notifyChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onSubmit__REACT_HOT_LOADER__',
    value: function __onSubmit__REACT_HOT_LOADER__() {
      return this.__onSubmit__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onAddItem__REACT_HOT_LOADER__',
    value: function __onAddItem__REACT_HOT_LOADER__() {
      return this.__onAddItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onDeleteItem__REACT_HOT_LOADER__',
    value: function __onDeleteItem__REACT_HOT_LOADER__() {
      return this.__onDeleteItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onMoveItemDown__REACT_HOT_LOADER__',
    value: function __onMoveItemDown__REACT_HOT_LOADER__() {
      return this.__onMoveItemDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onMoveItemUp__REACT_HOT_LOADER__',
    value: function __onMoveItemUp__REACT_HOT_LOADER__() {
      return this.__onMoveItemUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__() {
      return this.__onChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentWillReceiveProps__REACT_HOT_LOADER__',
    value: function __componentWillReceiveProps__REACT_HOT_LOADER__() {
      return this.__componentWillReceiveProps__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentWillReceiveProps__REACT_HOT_LOADER__',
    value: function __componentWillReceiveProps__REACT_HOT_LOADER__(nextProps) {
      var validation = void 0;
      if (!(0, _isEqual2.default)(nextProps.schema, this.props.schema)) {
        validation = {};
      } else {
        validation = (0, _validation2.default)(this.props.schema, nextProps.formData);
      }
      this.setState({
        validation: validation,
        data: nextProps.formData
      });
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(field) {
      var _this10 = this;

      return function (value) {
        var data = (0, _updateFormData2.default)(_this10.state.data, field, value);
        _this10.setState({
          data: data,
          validation: (0, _validation2.default)(_this10.props.schema, data)
        }, _this10.notifyChange);
      };
    }
  }, {
    key: '__onMoveItemUp__REACT_HOT_LOADER__',
    value: function __onMoveItemUp__REACT_HOT_LOADER__(path, idx) {
      var _this11 = this;

      return function () {
        _this11.setState({ data: (0, _updateFormData.moveListItem)(_this11.state.data, path, idx, -1) }, _this11.notifyChange);
      };
    }
  }, {
    key: '__onMoveItemDown__REACT_HOT_LOADER__',
    value: function __onMoveItemDown__REACT_HOT_LOADER__(path, idx) {
      var _this12 = this;

      return function () {
        _this12.setState({ data: (0, _updateFormData.moveListItem)(_this12.state.data, path, idx, 1) }, _this12.notifyChange);
      };
    }
  }, {
    key: '__onDeleteItem__REACT_HOT_LOADER__',
    value: function __onDeleteItem__REACT_HOT_LOADER__(path, idx) {
      var _this13 = this;

      return function () {
        _this13.setState({ data: (0, _updateFormData.removeListItem)(_this13.state.data, path, idx) }, _this13.notifyChange);
      };
    }
  }, {
    key: '__onAddItem__REACT_HOT_LOADER__',
    value: function __onAddItem__REACT_HOT_LOADER__(path, defaultValue) {
      var _this14 = this;

      return function () {
        _this14.setState({ data: (0, _updateFormData.addListItem)(_this14.state.data, path, defaultValue || '') }, _this14.notifyChange);
      };
    }
  }, {
    key: '__onSubmit__REACT_HOT_LOADER__',
    value: function __onSubmit__REACT_HOT_LOADER__() {
      this.props.onSubmit({ formData: this.state.data });
    }
  }, {
    key: '__notifyChange__REACT_HOT_LOADER__',
    value: function __notifyChange__REACT_HOT_LOADER__() {
      var onChange = this.props.onChange;
      var data = this.state.data;

      if (onChange) {
        onChange({ formData: data });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          formData = _props.formData,
          onSubmit = _props.onSubmit,
          onChange = _props.onChange,
          onCancel = _props.onCancel,
          rest = _objectWithoutProperties(_props, ['classes', 'formData', 'onSubmit', 'onChange', 'onCancel']);

      var _state = this.state,
          validation = _state.validation,
          id = _state.id;

      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root },
        _react2.default.createElement(_ValidationMessages2.default, { validation: validation }),
        _react2.default.createElement(_FormField2.default, _extends({
          path: '',
          data: this.state.data,
          id: id,
          onChange: this.onChange,
          onSubmit: this.onSubmit,
          validation: validation,
          onMoveItemUp: this.onMoveItemUp,
          onMoveItemDown: this.onMoveItemDown,
          onDeleteItem: this.onDeleteItem,
          onAddItem: this.onAddItem
        }, rest)),
        _react2.default.createElement(_FormButtons2.default, { onSubmit: this.onSubmit, onCancel: onCancel, classes: classes })
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

var _default = (0, _styles.withStyles)(_formStyles2.default)(Form);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/Form.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/Form.jsx');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2
    },
    formButtons: {
      marginTop: theme.spacing.unit * 2,
      justifyContent: 'flex-end'
    },
    submit: {
      fontSize: '100%'
    },
    cancel: {
      fontSize: '100%'
    },
    button: {
      fontSize: '100%'
    }
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/form-styles.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldSet = __webpack_require__(20);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FieldSet).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawFieldSet = exports.FieldSetContent = exports.RawFieldSetContent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _endsWith = __webpack_require__(21);

var _endsWith2 = _interopRequireDefault(_endsWith);

var _isEqual = __webpack_require__(8);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _styles = __webpack_require__(1);

var _Input = __webpack_require__(5);

var _fieldSetStyles = __webpack_require__(3);

var _fieldSetStyles2 = _interopRequireDefault(_fieldSetStyles);

var _FieldSetArray = __webpack_require__(22);

var _FieldSetArray2 = _interopRequireDefault(_FieldSetArray);

var _FieldSetObject = __webpack_require__(32);

var _FieldSetObject2 = _interopRequireDefault(_FieldSetObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RawFieldSetContent = exports.RawFieldSetContent = function RawFieldSetContent(props) {
  var _props$schema = props.schema,
      schema = _props$schema === undefined ? {} : _props$schema;
  var type = schema.type;

  if (type === 'array') {
    return _react2.default.createElement(_FieldSetArray2.default, props);
  } else if (type === 'object') {
    return _react2.default.createElement(_FieldSetObject2.default, props);
  }
  return null;
};
var FieldSetContent = exports.FieldSetContent = (0, _styles.withStyles)(_fieldSetStyles2.default.fieldSetContent)(RawFieldSetContent);

// for unit testing

var RawFieldSet = exports.RawFieldSet = function (_React$Component) {
  _inherits(RawFieldSet, _React$Component);

  function RawFieldSet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RawFieldSet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawFieldSet.__proto__ || Object.getPrototypeOf(RawFieldSet)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
      var _this2;

      return (_this2 = _this).__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RawFieldSet, [{
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__() {
      return this.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__(nextProps) {
      return !(0, _isEqual2.default)(this.props.data, nextProps.data);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          path = _props.path,
          classes = _props.classes,
          _props$schema2 = _props.schema,
          schema = _props$schema2 === undefined ? {} : _props$schema2;

      return _react2.default.createElement(
        'fieldset',
        { className: (0, _classnames2.default)(className, classes.root, _defineProperty({}, classes.listItem, (0, _endsWith2.default)(path, ']'))) },
        schema.title && _react2.default.createElement(
          _Input.InputLabel,
          null,
          schema.title
        ),
        _react2.default.createElement(FieldSetContent, _extends({ path: path }, this.props))
      );
    }
  }]);

  return RawFieldSet;
}(_react2.default.Component);

var _default = (0, _styles.withStyles)(_fieldSetStyles2.default.fieldSet)(RawFieldSet);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawFieldSetContent, 'RawFieldSetContent', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSet.jsx');

  __REACT_HOT_LOADER__.register(FieldSetContent, 'FieldSetContent', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSet.jsx');

  __REACT_HOT_LOADER__.register(RawFieldSet, 'RawFieldSet', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSet.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSet.jsx');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lodash/endsWith");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawFieldSetArray = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _includes = __webpack_require__(10);

var _includes2 = _interopRequireDefault(_includes);

var _slice = __webpack_require__(23);

var _slice2 = _interopRequireDefault(_slice);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _AddCircle = __webpack_require__(24);

var _AddCircle2 = _interopRequireDefault(_AddCircle);

var _isArray = __webpack_require__(25);

var _isArray2 = _interopRequireDefault(_isArray);

var _styles = __webpack_require__(1);

var _FormField = __webpack_require__(4);

var _FormField2 = _interopRequireDefault(_FormField);

var _fieldSetStyles = __webpack_require__(3);

var _fieldSetStyles2 = _interopRequireDefault(_fieldSetStyles);

var _getDefaultValue = __webpack_require__(26);

var _getDefaultValue2 = _interopRequireDefault(_getDefaultValue);

var _ReorderableFormField = __webpack_require__(27);

var _ReorderableFormField2 = _interopRequireDefault(_ReorderableFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RawFieldSetArray = function RawFieldSetArray(props) {
  var _props$startIdx = props.startIdx,
      startIdx = _props$startIdx === undefined ? 0 : _props$startIdx,
      className = props.className,
      classes = props.classes,
      _props$schema = props.schema,
      schema = _props$schema === undefined ? {} : _props$schema,
      _props$uiSchema = props.uiSchema,
      uiSchema = _props$uiSchema === undefined ? {} : _props$uiSchema,
      data = props.data,
      path = props.path,
      onMoveItemUp = props.onMoveItemUp,
      onMoveItemDown = props.onMoveItemDown,
      onDeleteItem = props.onDeleteItem,
      rest = _objectWithoutProperties(props, ['startIdx', 'className', 'classes', 'schema', 'uiSchema', 'data', 'path', 'onMoveItemUp', 'onMoveItemDown', 'onDeleteItem']);

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    !(0, _isArray2.default)(schema.items) && !schema.uniqueItems && _react2.default.createElement(
      'div',
      null,
      (data || []).map(function (d, idx) {
        return _react2.default.createElement(_ReorderableFormField2.default, _extends({
          key: path + '[' + idx + ']' // eslint-disable-line react/no-array-index-key
          ,
          path: path + '[' + (startIdx + idx) + ']',
          required: schema.required,
          schema: schema.items,
          data: d,
          onMoveItemUp: onMoveItemUp && onMoveItemUp(path, startIdx + idx),
          onMoveItemDown: onMoveItemDown && onMoveItemDown(path, startIdx + idx),
          onDeleteItem: onDeleteItem && onDeleteItem(path, startIdx + idx),
          uiSchema: uiSchema.items,
          first: idx === 0,
          last: idx === data.length - 1
        }, rest));
      }),
      _react2.default.createElement(
        'div',
        { className: classes.addItemBtn },
        _react2.default.createElement(
          _IconButton2.default,
          { onClick: rest.onAddItem && rest.onAddItem(path, (0, _getDefaultValue2.default)(schema.items)) },
          _react2.default.createElement(_AddCircle2.default, null)
        )
      )
    ),
    (0, _isArray2.default)(schema.items) && (data || []).map(function (d, idx) {
      if (idx < schema.items.length) {
        return _react2.default.createElement(_FormField2.default, _extends({
          key: path + '[' + idx + ']' // eslint-disable-line react/no-array-index-key
          ,
          path: path + '[' + (startIdx + idx) + ']',
          required: schema.required,
          schema: schema.items[idx],
          data: d,
          uiSchema: (uiSchema.items || [])[idx]
        }, rest));
      }
      return null;
    }),
    !(0, _isArray2.default)(schema.items) && schema.uniqueItems && schema.items.enum && schema.items.enum.map(function (d) {
      return _react2.default.createElement(_FormField2.default, _extends({
        key: path + '[' + d + ']' // eslint-disable-line react/no-array-index-key
        ,
        path: '' + path,
        required: schema.required,
        schema: _extends({}, schema.items, { title: d }),
        data: (0, _includes2.default)(data, d),
        uiSchema: uiSchema
      }, rest));
    }),
    schema.additionalItems && _react2.default.createElement(RawFieldSetArray, _extends({
      classes: classes,
      path: path,
      startIdx: 2,
      required: schema.required,
      schema: { type: 'array', items: schema.additionalItems },
      data: (0, _slice2.default)(data, schema.items.length),
      uiSchema: uiSchema.additionalItems,
      onMoveItemUp: onMoveItemUp,
      onMoveItemDown: onMoveItemDown,
      onDeleteItem: onDeleteItem
    }, rest))
  );
};
exports.RawFieldSetArray = RawFieldSetArray;

var _default = (0, _styles.withStyles)(_fieldSetStyles2.default.fieldSetArray)(RawFieldSetArray);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawFieldSetArray, 'RawFieldSetArray', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSetArray.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSetArray.jsx');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash/slice");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircle");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapValues = __webpack_require__(12);

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDefaultValue = function getDefaultValue(schema) {
  if (schema.default) return schema.default;
  switch (schema.type) {
    case 'object':
      return (0, _mapValues2.default)(schema.properties, getDefaultValue);
    case 'string':
    case 'number':
    default:
      return '';
  }
};

var _default = getDefaultValue;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getDefaultValue, 'getDefaultValue', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/get-default-value.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/get-default-value.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawReorderableFormField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(1);

var _FormField = __webpack_require__(4);

var _FormField2 = _interopRequireDefault(_FormField);

var _fieldSetStyles = __webpack_require__(3);

var _fieldSetStyles2 = _interopRequireDefault(_fieldSetStyles);

var _ReorderControls = __webpack_require__(28);

var _ReorderControls2 = _interopRequireDefault(_ReorderControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RawReorderableFormField = function RawReorderableFormField(_ref) {
  var first = _ref.first,
      last = _ref.last,
      className = _ref.className,
      classes = _ref.classes,
      path = _ref.path,
      onMoveItemUp = _ref.onMoveItemUp,
      onMoveItemDown = _ref.onMoveItemDown,
      onDeleteItem = _ref.onDeleteItem,
      rest = _objectWithoutProperties(_ref, ['first', 'last', 'className', 'classes', 'path', 'onMoveItemUp', 'onMoveItemDown', 'onDeleteItem']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes.root) },
    _react2.default.createElement(_FormField2.default, _extends({
      path: path
    }, rest)),
    _react2.default.createElement(_ReorderControls2.default, {
      first: first,
      last: last,
      onMoveItemUp: onMoveItemUp,
      onMoveItemDown: onMoveItemDown,
      onDeleteItem: onDeleteItem
    })
  );
};
exports.RawReorderableFormField = RawReorderableFormField;

var _default = (0, _styles.withStyles)(_fieldSetStyles2.default.reorderable)(RawReorderableFormField);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawReorderableFormField, 'RawReorderableFormField', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/ReorderableFormField.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/ReorderableFormField.jsx');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawReorderControls = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowUpward = __webpack_require__(29);

var _ArrowUpward2 = _interopRequireDefault(_ArrowUpward);

var _ArrowDownward = __webpack_require__(30);

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

var _RemoveCircle = __webpack_require__(31);

var _RemoveCircle2 = _interopRequireDefault(_RemoveCircle);

var _styles = __webpack_require__(1);

var _fieldSetStyles = __webpack_require__(3);

var _fieldSetStyles2 = _interopRequireDefault(_fieldSetStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RawReorderControls = exports.RawReorderControls = function RawReorderControls(_ref) {
  var first = _ref.first,
      last = _ref.last,
      classes = _ref.classes,
      onMoveItemUp = _ref.onMoveItemUp,
      onMoveItemDown = _ref.onMoveItemDown,
      onDeleteItem = _ref.onDeleteItem;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _IconButton2.default,
      { className: classes.up, onClick: onMoveItemUp, disabled: first },
      _react2.default.createElement(_ArrowUpward2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { className: classes.down, onClick: onMoveItemDown, disabled: last },
      _react2.default.createElement(_ArrowDownward2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { className: classes.remove, onClick: onDeleteItem },
      _react2.default.createElement(_RemoveCircle2.default, null)
    )
  );
};

var _default = (0, _styles.withStyles)(_fieldSetStyles2.default.reorderControls)(RawReorderControls);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawReorderControls, 'RawReorderControls', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/ReorderControls.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/ReorderControls.jsx');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircle");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawFieldSetObject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _keys = __webpack_require__(9);

var _keys2 = _interopRequireDefault(_keys);

var _styles = __webpack_require__(1);

var _FormField = __webpack_require__(4);

var _FormField2 = _interopRequireDefault(_FormField);

var _fieldSetStyles = __webpack_require__(3);

var _fieldSetStyles2 = _interopRequireDefault(_fieldSetStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RawFieldSetObject = function RawFieldSetObject(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? {} : _ref$schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === undefined ? {} : _ref$uiSchema,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      path = _ref.path,
      rest = _objectWithoutProperties(_ref, ['className', 'classes', 'schema', 'uiSchema', 'data', 'path']);

  var orientation = uiSchema['ui:orientation'] === 'row' ? classes.row : null;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.root, orientation) },
    (0, _keys2.default)(schema.properties).map(function (p) {
      var newPath = path ? path + '.' + p : p;
      return _react2.default.createElement(_FormField2.default, _extends({
        key: p,
        objectData: data,
        path: newPath,
        required: schema.required,
        schema: schema.properties[p],
        data: data[p],
        uiSchema: uiSchema[p] || {}
      }, rest));
    })
  );
};
exports.RawFieldSetObject = RawFieldSetObject;

var _default = (0, _styles.withStyles)(_fieldSetStyles2.default.fieldSetObject)(RawFieldSetObject);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawFieldSetObject, 'RawFieldSetObject', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSetObject.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FieldSet/FieldSetObject.jsx');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Field = __webpack_require__(34);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Field).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _configure = __webpack_require__(35);

var _configure2 = _interopRequireDefault(_configure);

var _ConfiguredField = __webpack_require__(55);

var _ConfiguredField2 = _interopRequireDefault(_ConfiguredField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var path = props.path,
      id = props.id,
      schema = props.schema,
      data = props.data,
      uiSchema = props.uiSchema;
  var type = schema.type;

  var htmlId = id + '_' + path;

  var _configureComponent = (0, _configure2.default)(_extends({}, props, { htmlId: htmlId })),
      Component = _configureComponent.Component,
      LabelComponent = _configureComponent.LabelComponent,
      componentProps = _configureComponent.componentProps,
      labelComponentProps = _configureComponent.labelComponentProps,
      className = _configureComponent.className,
      title = _configureComponent.title;

  var descriptionText = uiSchema['ui:description'];
  var helpText = uiSchema['ui:help'];
  return _react2.default.createElement(_ConfiguredField2.default, {
    id: id,
    className: className,
    data: data,
    type: type,
    Component: Component,
    componentProps: componentProps,
    LabelComponent: LabelComponent,
    labelComponentProps: labelComponentProps,
    title: title,
    descriptionText: descriptionText,
    helpText: helpText
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/Field.jsx');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configureComponent = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_configureComponent).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getComponentProps = __webpack_require__(37);

var _getComponentProps2 = _interopRequireDefault(_getComponentProps);

var _getLabelComponentProps = __webpack_require__(44);

var _getLabelComponentProps2 = _interopRequireDefault(_getLabelComponentProps);

var _getLabelComponent = __webpack_require__(45);

var _getLabelComponent2 = _interopRequireDefault(_getLabelComponent);

var _getComponent = __webpack_require__(46);

var _getComponent2 = _interopRequireDefault(_getComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
var getClassName = function getClassName(_ref) {
  var _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === undefined ? {} : _ref$uiSchema;

  var widget = uiSchema['ui:widget'];
  return widget === 'textarea' ? 'textarea' : null;
};

var _default = function _default(props) {
  var schema = props.schema,
      _props$uiSchema = props.uiSchema,
      uiSchema = _props$uiSchema === undefined ? {} : _props$uiSchema;

  var title = uiSchema['ui:title'] || schema.title;
  return {
    title: title,
    className: getClassName(props),
    Component: (0, _getComponent2.default)(props),
    componentProps: (0, _getComponentProps2.default)(props),
    LabelComponent: title && (0, _getLabelComponent2.default)(props),
    labelComponentProps: (0, _getLabelComponentProps2.default)(props)
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getClassName, 'getClassName', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/configure-component.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/configure-component.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _without = __webpack_require__(38);

var _without2 = _interopRequireDefault(_without);

var _getMuiProps = __webpack_require__(39);

var _getMuiProps2 = _interopRequireDefault(_getMuiProps);

var _getInputType = __webpack_require__(42);

var _getInputType2 = _interopRequireDefault(_getInputType);

var _valuesToOptions = __webpack_require__(43);

var _valuesToOptions2 = _interopRequireDefault(_valuesToOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toNumber = function toNumber(v) {
  if (v === '' || v === undefined) return v;
  var n = Number(v);
  return !Number.isNaN(n) ? n : v;
};
var coerceValue = function coerceValue(type, value) {
  switch (type) {
    case 'string':
      return typeof value === 'string' ? value : String(value);
    case 'number':
    case 'integer':
    case 'double':
    case 'float':
    case 'decimal':
      return toNumber(value);
    default:
      return value;
  }
};
var onChangeHandler = function onChangeHandler(onChange, type) {
  return function (e) {
    var value = coerceValue(type, e.target.value);
    if (value !== undefined) onChange(value);
  };
};
var onCheckboxChangeHandler = function onCheckboxChangeHandler(onChange, title) {
  return function (e) {
    var spec = {};
    if (e) {
      spec.$push = [title];
    } else {
      spec.$apply = function (arr) {
        return (0, _without2.default)(arr, title);
      };
    }
    return onChange(spec);
  };
};

var _default = function _default(_ref) {
  var _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? {} : _ref$schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === undefined ? {} : _ref$uiSchema,
      onChange = _ref.onChange,
      htmlId = _ref.htmlId,
      data = _ref.data,
      objectData = _ref.objectData;

  var widget = uiSchema['ui:widget'];
  var options = uiSchema['ui:options'] || {};
  var type = schema.type;

  var rv = _extends({
    type: (0, _getInputType2.default)(type, uiSchema),
    onChange: onChange && onChangeHandler(onChange, type)
  }, (0, _getMuiProps2.default)(uiSchema));
  if (schema.enum) {
    if (widget === 'radio') {
      if (options.inline) {
        rv.row = true;
      }
    } else if (widget === 'checkboxes') {
      rv.onChange = onChange && onCheckboxChangeHandler(onChange, schema.title);
      rv.label = schema.title;
    } else {
      rv.nullOption = 'Please select...';
    }
    rv.options = (0, _valuesToOptions2.default)(schema.enum);
  } else if (type === 'boolean') {
    rv.label = schema.title;
    rv.onChange = onChange;
  } else {
    rv.inputProps = {
      id: htmlId
    };
  }
  if (widget === 'textarea') {
    rv.multiline = true;
    rv.rows = 5;
  }
  if (options.disabled) {
    if (typeof options.disabled === 'boolean') {
      rv.disabled = options.disabled;
    } else if (typeof options.disabled === 'function') {
      rv.disabled = options.disabled.call(null, data, objectData);
    }
  }
  return rv;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toNumber, 'toNumber', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component-props.js');

  __REACT_HOT_LOADER__.register(coerceValue, 'coerceValue', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component-props.js');

  __REACT_HOT_LOADER__.register(onChangeHandler, 'onChangeHandler', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component-props.js');

  __REACT_HOT_LOADER__.register(onCheckboxChangeHandler, 'onCheckboxChangeHandler', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component-props.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component-props.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("lodash/without");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapKeys = __webpack_require__(40);

var _mapKeys2 = _interopRequireDefault(_mapKeys);

var _pickBy = __webpack_require__(41);

var _pickBy2 = _interopRequireDefault(_pickBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return (0, _mapKeys2.default)((0, _pickBy2.default)(props, function (v, k) {
    return k.startsWith('mui:');
  }), function (v, k) {
    return k.substring(4);
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-mui-props.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("lodash/mapKeys");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash/pickBy");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(type, uiSchema) {
  var widget = uiSchema['ui:widget'];
  if (type === 'number' || type === 'integer') {
    if (widget === 'updown' || widget === 'radio') {
      return 'number';
    }
    return 'text';
  }
  if (widget === 'password') {
    return 'password';
  }
  return type;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-input-type.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _keys = __webpack_require__(9);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(values) {
  if (values instanceof Array) {
    return values.map(function (e) {
      return { key: e, value: e };
    });
  }
  if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object') {
    return (0, _keys2.default)(values).map(function (e) {
      return { key: e, value: values[e] };
    });
  }
  return [{}];
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/values-to-options.js');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _includes = __webpack_require__(10);

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var htmlId = _ref.htmlId,
      required = _ref.required,
      path = _ref.path;

  var rv = {
    htmlFor: htmlId,
    required: (0, _includes2.default)(required, path)
  };
  return rv;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-label-component-props.js');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(6);

var _require = __webpack_require__(5),
    InputLabel = _require.InputLabel; // import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default


var _default = function _default(_ref) {
  var schema = _ref.schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === undefined ? {} : _ref$uiSchema;

  var widget = uiSchema['ui:widget'];
  var type = schema.type;


  if (schema.enum && widget === 'radio') {
    return _Form.FormLabel;
  }
  // boolean
  if (type === 'boolean' || widget === 'checkboxes') return null;
  return InputLabel;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-label-component.js');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
var _require = __webpack_require__(47),
    RadioGroup = _require.RadioGroup,
    Select = _require.Select,
    Checkbox = _require.Checkbox;

var Input = __webpack_require__(5).default;

var _default = function _default(_ref) {
  var schema = _ref.schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === undefined ? {} : _ref$uiSchema;

  // console.log('getComponent schema: %o, uiSchema: %o', schema, uiSchema);
  var widget = uiSchema['ui:widget'];
  var type = schema.type;


  if (schema.enum) {
    if (widget === 'radio') {
      return RadioGroup;
    } else if (widget === 'checkboxes') {
      return Checkbox;
    }
    return Select;
  } else if (type === 'boolean') {
    return Checkbox;
  }
  return Input;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Input, 'Input', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/configure/get-component.js');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Select = __webpack_require__(48);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _RadioGroup = __webpack_require__(51);

Object.defineProperty(exports, 'RadioGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadioGroup).default;
  }
});

var _Checkbox = __webpack_require__(53);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(49);

var _Select2 = _interopRequireDefault(_Select);

var _Menu = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _default = function _default(_ref) {
  var type = _ref.type,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      options = _ref.options,
      nullOption = _ref.nullOption,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['type', 'value', 'options', 'nullOption', 'onChange']);

  return _react2.default.createElement(
    _Select2.default,
    _extends({}, rest, {
      value: String(value),
      onChange: onChange
    }),
    value === null && _react2.default.createElement(
      _Menu.MenuItem,
      { value: '' },
      nullOption
    ),
    options.map(function (o) {
      return _react2.default.createElement(
        _Menu.MenuItem,
        { key: o.key, value: String(o.key) },
        String(o.value)
      );
    })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/components/Select.jsx');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Radio = __webpack_require__(52);

var _Radio2 = _interopRequireDefault(_Radio);

var _Form = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _default = function _default(_ref) {
  var path = _ref.path,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      value = _ref.value,
      onChange = _ref.onChange,
      inputProps = _ref.inputProps,
      nullOption = _ref.nullOption,
      rest = _objectWithoutProperties(_ref, ['path', 'options', 'value', 'onChange', 'inputProps', 'nullOption']);

  return _react2.default.createElement(
    _Radio.RadioGroup,
    _extends({}, rest, {
      'aria-label': path,
      name: path,
      value: String(value),
      onChange: onChange
    }),
    options.map(function (o) {
      return _react2.default.createElement(_Form.FormControlLabel, { key: o.key, value: String(o.key), control: _react2.default.createElement(_Radio2.default, null), label: o.value });
    })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/components/RadioGroup.jsx');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Checkbox = __webpack_require__(54);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Form = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var doOnChange = function doOnChange(onChange) {
  return function (e, checked) {
    return onChange(checked);
  };
};

var _default = function _default(_ref) {
  var path = _ref.path,
      label = _ref.label,
      value = _ref.value,
      type = _ref.type,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['path', 'label', 'value', 'type', 'onChange']);

  return _react2.default.createElement(_Form.FormControlLabel, {
    control: _react2.default.createElement(_Checkbox2.default, _extends({
      checked: value,
      value: path,
      onChange: doOnChange(onChange)
    }, rest)),
    label: label
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(doOnChange, 'doOnChange', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/components/Checkbox.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/components/Checkbox.jsx');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Checkbox");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawConfiguredField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(1);

var _Form = __webpack_require__(6);

var _Input = __webpack_require__(5);

var _Input2 = _interopRequireDefault(_Input);

var _fieldStyles = __webpack_require__(56);

var _fieldStyles2 = _interopRequireDefault(_fieldStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// for unit testing only
var RawConfiguredField = exports.RawConfiguredField = function (_React$Component) {
  _inherits(RawConfiguredField, _React$Component);

  function RawConfiguredField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RawConfiguredField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawConfiguredField.__proto__ || Object.getPrototypeOf(RawConfiguredField)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
      var _this2;

      return (_this2 = _this).__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RawConfiguredField, [{
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__() {
      return this.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__(nextProps) {
      return this.props.data !== nextProps.data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$classes = _props.classes,
          classes = _props$classes === undefined ? {} : _props$classes,
          data = _props.data,
          type = _props.type,
          descriptionText = _props.descriptionText,
          helpText = _props.helpText,
          _props$Component = _props.Component,
          Component = _props$Component === undefined ? _Input2.default : _props$Component,
          LabelComponent = _props.LabelComponent,
          _props$labelComponent = _props.labelComponentProps,
          labelComponentProps = _props$labelComponent === undefined ? {} : _props$labelComponent,
          title = _props.title,
          className = _props.className,
          _props$componentProps = _props.componentProps,
          componentProps = _props$componentProps === undefined ? {} : _props$componentProps,
          id = _props.id;

      return _react2.default.createElement(
        _Form.FormControl,
        { className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.withLabel, LabelComponent)) },
        LabelComponent && title && _react2.default.createElement(
          LabelComponent,
          labelComponentProps,
          title
        ),
        descriptionText && _react2.default.createElement(
          'p',
          { className: classes.description },
          descriptionText
        ),
        _react2.default.createElement(Component, _extends({
          className: className && classes[className],
          value: data,
          type: type
        }, componentProps)),
        helpText && _react2.default.createElement(
          _Form.FormHelperText,
          { id: id + '-help' },
          helpText
        )
      );
    }
  }]);

  return RawConfiguredField;
}(_react2.default.Component);

var _default = (0, _styles.withStyles)(_fieldStyles2.default)(RawConfiguredField);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawConfiguredField, 'RawConfiguredField', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/ConfiguredField.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/ConfiguredField.jsx');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(theme) {
  return {
    root: {
      'padding': theme.spacing.unit,
      '&$withLabel': {
        marginTop: theme.spacing.unit * 3
      }
    },
    textarea: {
      '& textarea': {
        height: 'initial'
      }
    },
    description: {
      transform: 'translateX(-' + theme.spacing.unit * 2 + 'px)',
      fontSize: '80%',
      color: theme.palette.grey[500]
    },
    withLabel: {}
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/fields/field-styles.js');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() {
  return {
    root: {
      display: 'flex'
    }
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/form-field-styles.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveListItem = exports.removeListItem = exports.addListItem = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _immutabilityHelper = __webpack_require__(13);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _size = __webpack_require__(7);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrRegex = /^([^.]+)\[([0-9]+)\](\.(.*))?/;
var dotRegex = /^([^[]+)\.(.*$)/;

var applyAtPath = function applyAtPath(path, data, spec) {
  if (!path) return spec(data);
  var dotMatch = path.match(dotRegex);
  var arrMatch = path.match(arrRegex);
  if (!dotMatch && !arrMatch) {
    return _defineProperty({}, path, spec(data[path]));
  }
  if (dotMatch) {
    var subPath = dotMatch[1];
    var prop = dotMatch[2];
    return _defineProperty({}, subPath, applyAtPath(prop, data[subPath], spec));
  }
  if (arrMatch) {
    var _subPath = arrMatch[1];
    var index = Number(arrMatch[2]);
    return _defineProperty({}, _subPath, _defineProperty({}, index, applyAtPath(arrMatch[4], data[_subPath][index], spec)));
  }
  return {};
};

var setValueSpec = function setValueSpec(value) {
  return function () {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (0, _size2.default)(value) === 1) return value;
    return { $set: value };
  };
};
var pushItemSpec = function pushItemSpec(value) {
  return function (data) {
    if (data) return { $push: [value] };
    return { $set: [value] };
  };
};
var removeItemSpec = function removeItemSpec(idx) {
  return function () {
    return { $splice: [[idx, 1]] };
  };
};
var moveItemSpec = function moveItemSpec(idx, direction) {
  return function (value) {
    var _ref4;

    return _ref4 = {}, _defineProperty(_ref4, idx, { $set: value[idx + direction] }), _defineProperty(_ref4, idx + direction, { $set: value[idx] }), _ref4;
  };
};

var _default = function _default(data, path, value) {
  var s = setValueSpec(value);
  var spec = applyAtPath(path, data, s);
  return (0, _immutabilityHelper2.default)(data, spec);
};

exports.default = _default;
var addListItem = exports.addListItem = function addListItem(data, path, value) {
  var spec = applyAtPath(path, data, pushItemSpec(value));
  return (0, _immutabilityHelper2.default)(data, spec);
};

var removeListItem = exports.removeListItem = function removeListItem(data, path, index) {
  var spec = applyAtPath(path, data, removeItemSpec(index));
  return (0, _immutabilityHelper2.default)(data, spec);
};

var moveListItem = exports.moveListItem = function moveListItem(data, path, index, direction) {
  var spec = applyAtPath(path, data, moveItemSpec(index, direction));
  return (0, _immutabilityHelper2.default)(data, spec);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(arrRegex, 'arrRegex', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(dotRegex, 'dotRegex', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(applyAtPath, 'applyAtPath', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(setValueSpec, 'setValueSpec', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(pushItemSpec, 'pushItemSpec', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(removeItemSpec, 'removeItemSpec', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(moveItemSpec, 'moveItemSpec', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(addListItem, 'addListItem', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(removeListItem, 'removeListItem', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(moveListItem, 'moveListItem', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/update-form-data.js');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getValidationResult = __webpack_require__(60);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getValidationResult).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _immutabilityHelper = __webpack_require__(13);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _forOwn = __webpack_require__(61);

var _forOwn2 = _interopRequireDefault(_forOwn);

var _mapValues = __webpack_require__(12);

var _mapValues2 = _interopRequireDefault(_mapValues);

var _rules = __webpack_require__(62);

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validationResult = function validationResult(schema, value) {
  var rv = [];
  (0, _forOwn2.default)(_rules2.default, function (rule, ruleId) {
    var result = rule(schema, value);
    if (result) {
      rv.push(_extends({
        rule: ruleId
      }, result));
    }
  });
  return rv;
};

var getFieldSpec = function getFieldSpec(schema, value) {
  if (value === null) {
    return { $set: [] };
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
    return { $set: validationResult(schema, value) };
  }
  return (0, _mapValues2.default)(schema.properties, function (s, p) {
    return getFieldSpec(s, value[p]);
  });
};

var _default = function _default(schema, data) {
  var spec = getFieldSpec(schema, data);
  return (0, _immutabilityHelper2.default)({}, spec);
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(validationResult, 'validationResult', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/get-validation-result.js');

  __REACT_HOT_LOADER__.register(getFieldSpec, 'getFieldSpec', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/get-validation-result.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/get-validation-result.js');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("lodash/forOwn");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  maxLength: __webpack_require__(63).default,
  minLength: __webpack_require__(64).default,
  pattern: __webpack_require__(65).default,
  minimum: __webpack_require__(66).default,
  maximum: __webpack_require__(67).default
};
/* eslint-disable global-require */
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/index.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _size = __webpack_require__(7);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(schema, value) {
  if (schema.maxLength && (0, _size2.default)(value) > schema.maxLength) {
    return { message: '\'' + value + '\' exceeds the maximum length of ' + schema.maxLength + ' for field \'' + schema.title + '\'' };
  }
  return null;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/max-length.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _size = __webpack_require__(7);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(schema, value) {
  if (schema.minLength !== undefined && (0, _size2.default)(value) < schema.minLength) {
    return { message: '\'' + schema.title + '\' must be at least ' + schema.minLength };
  }
  return null;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/min-length.js');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _size = __webpack_require__(7);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(schema, value) {
  if (schema.pattern && value && !RegExp(schema.pattern).test(value)) {
    return { message: '\'' + schema.title + '\' must ma tch pattern ' + schema.pattern };
  }
  return null;
}; /* eslint-disable */


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/pattern.js');
}();

;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(schema, value) {
  if (schema.minimum && typeof value === 'number' && value < schema.minimum) {
    return { message: '\'' + schema.title + '\' should be >= ' + schema.minimum };
  }
  return null;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/minimum.js');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(schema, value) {
  if (schema.maximum && typeof value === 'number' && value > schema.maximum) {
    return { message: '\'' + schema.title + '\' should be <= ' + schema.maximum };
  }
  return null;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/helpers/validation/rules/maximum.js');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _keys = __webpack_require__(9);

var _keys2 = _interopRequireDefault(_keys);

var _filter = __webpack_require__(69);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validationStyles = {};

var Validation = function Validation(_ref) {
  var validation = _ref.validation;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      validation.message
    )
  );
};

var Validations = function Validations(_ref2) {
  var validation = _ref2.validation;
  return _react2.default.createElement(
    'div',
    null,
    validation.map(function (v, idx) {
      return _react2.default.createElement(Validation, { key: idx, validation: v });
    }) // eslint-disable-line react/no-array-index-key,max-len

  );
};
var ValidationMessages = function ValidationMessages(_ref3) {
  var validation = _ref3.validation;
  return _react2.default.createElement(
    'div',
    null,
    validation && (0, _filter2.default)((0, _keys2.default)(validation), function (k) {
      var v = validation[k];
      return v && v.length > 0;
    }).map(function (v) {
      return _react2.default.createElement(Validations, { key: v, validation: validation[v] });
    })
  );
};

var _default = (0, _styles.withStyles)(validationStyles)(ValidationMessages);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(validationStyles, 'validationStyles', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/ValidationMessages.jsx');

  __REACT_HOT_LOADER__.register(Validation, 'Validation', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/ValidationMessages.jsx');

  __REACT_HOT_LOADER__.register(Validations, 'Validations', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/ValidationMessages.jsx');

  __REACT_HOT_LOADER__.register(ValidationMessages, 'ValidationMessages', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/ValidationMessages.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/ValidationMessages.jsx');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawFormButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RawFormButtons = exports.RawFormButtons = function (_React$Component) {
  _inherits(RawFormButtons, _React$Component);

  function RawFormButtons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RawFormButtons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawFormButtons.__proto__ || Object.getPrototypeOf(RawFormButtons)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
      var _this2;

      return (_this2 = _this).__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RawFormButtons, [{
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__() {
      return this.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__shouldComponentUpdate__REACT_HOT_LOADER__',
    value: function __shouldComponentUpdate__REACT_HOT_LOADER__() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onCancel = _props.onCancel,
          onSubmit = _props.onSubmit;

      return (onCancel || onSubmit) && _react2.default.createElement(
        'div',
        { className: classes.formButtons },
        onCancel && _react2.default.createElement(
          _Button2.default,
          {
            className: (0, _classnames2.default)(classes.cancel, classes.button),
            variant: 'flat',
            onClick: onCancel
          },
          'Cancel'
        ),
        onSubmit && _react2.default.createElement(
          _Button2.default,
          {
            className: (0, _classnames2.default)(classes.submit, classes.button),
            variant: 'raised',
            color: 'primary',
            onClick: onSubmit
          },
          'Submit'
        )
      );
    }
  }]);

  return RawFormButtons;
}(_react2.default.Component);

var _default = RawFormButtons;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RawFormButtons, 'RawFormButtons', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FormButtons.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/michaeliglesias/Fuzzier/misc/material-ui-jsonschema-form/src/FormButtons.jsx');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ })
/******/ ])));