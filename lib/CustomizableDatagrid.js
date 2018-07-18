'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAdmin = require('react-admin');

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _ViewColumn = require('@material-ui/icons/ViewColumn');

var _ViewColumn2 = _interopRequireDefault(_ViewColumn);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* utils */


/* icons */


/* material-ui */


var LS = 'raColumnsConfig';

// CustomizableDatagrid allows to show/hide columns dynamically
// the preferences are stored in local storage

var CustomizableDatagrid = function (_Component) {
  _inherits(CustomizableDatagrid, _Component);

  function CustomizableDatagrid(props) {
    _classCallCheck(this, CustomizableDatagrid);

    var _this = _possibleConstructorReturn(this, (CustomizableDatagrid.__proto__ || Object.getPrototypeOf(CustomizableDatagrid)).call(this, props));

    _this.updateLocalStorage = function () {
      var resource = _this.props.resource;
      var selection = _this.state.selection;

      // maybe there isnt an old value

      var oldValue = {};
      try {
        oldValue = JSON.parse(window.localStorage.getItem(LS));
      } catch (e) {};

      var value = JSON.stringify(_extends({}, oldValue, _defineProperty({}, resource, selection)));

      try {
        window.localStorage.setItem(LS, value);
      } catch (e) {};
    };

    _this.toggleColumn = function (event) {
      _this.setState({
        selection: _extends({}, _this.state.selection, _defineProperty({}, event.target.value, !_this.state.selection[event.target.value]))
      }, _this.updateLocalStorage);
    };

    _this.handleOpen = function () {
      return _this.setState({ open: true });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = {
      open: false,
      selection: {}
    };

    // default behaviour: display all columns
    _react2.default.Children.forEach(props.children, function (field) {
      _this.state.selection[field.props.source] = true;
    });

    // we try to apply the local storage state to our internal state
    try {
      var localStorageValue = JSON.parse((0, _isEmpty2.default)(window.localStorage.getItem(LS)) ? '{}' : window.localStorage.getItem(LS));
      var localStorageValueForResource = localStorageValue[props.resource] || {};

      Object.keys(localStorageValueForResource).forEach(function (key) {
        _this.state.selection[key] = localStorageValueForResource[key];
      });
    } catch (e) {} // ignore - window.localStorage is unreliable

    _this.updateLocalStorage();
    return _this;
  }

  // updates the local storage with the internal state value


  _createClass(CustomizableDatagrid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;


      var columns = _react2.default.Children.map(children, function (field) {
        return field.props.source;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { float: 'right', marginRight: '1rem' } },
          _react2.default.createElement(
            _Button2.default,
            { variant: 'outlined', mini: true, color: 'secondary', 'aria-label': 'add', onClick: this.handleOpen },
            _react2.default.createElement(_ViewColumn2.default, null)
          ),
          this.state.open && _react2.default.createElement(
            _Dialog2.default,
            {
              maxWidth: 'xs',
              'aria-labelledby': 'confirmation-dialog-title',
              open: this.state.open,
              onEscapeKeyDown: this.handleClose,
              onBackdropClick: this.handleClose
            },
            _react2.default.createElement(
              _DialogTitle2.default,
              { id: 'confirmation-dialog-title' },
              'Configuration'
            ),
            _react2.default.createElement(
              _DialogContent2.default,
              null,
              _react2.default.createElement(
                _FormGroup2.default,
                null,
                columns.map(function (column) {
                  return _react2.default.createElement(_FormControlLabel2.default, {
                    key: column,
                    control: _react2.default.createElement(_Checkbox2.default, {
                      checked: !!_this2.state.selection[column],
                      onChange: _this2.toggleColumn,
                      value: column
                    }),
                    label: column
                  });
                })
              )
            ),
            _react2.default.createElement(
              _DialogActions2.default,
              null,
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.handleClose, color: 'primary' },
                _react2.default.createElement(_Close2.default, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactAdmin.Datagrid,
          this.props,
          _react2.default.Children.map(children, function (child) {
            return child && !!_this2.state.selection[child.props.source] ? _react2.default.cloneElement(child, {}) : null;
          })
        )
      );
    }
  }]);

  return CustomizableDatagrid;
}(_react.Component);

exports.default = CustomizableDatagrid;