"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messages = _interopRequireDefault(require("./messages"));

var _allowedLanguages = _interopRequireDefault(require("./allowedLanguages"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SomethingNice = function SomethingNice(_ref) {
  var className = _ref.className,
      lang = _ref.lang,
      style = _ref.style;

  var _useState = (0, _react.useState)((0, _messages["default"])(lang)),
      _useState2 = _slicedToArray(_useState, 1),
      message = _useState2[0];

  return _react["default"].createElement("span", {
    style: style,
    className: className
  }, message);
};

SomethingNice.defaultProps = {
  lang: "en"
};
SomethingNice.propTypes = {
  className: _propTypes["default"].string,
  lang: _propTypes["default"].oneOf(_allowedLanguages["default"]),
  style: _propTypes["default"].object
};
var _default = SomethingNice;
exports["default"] = _default;