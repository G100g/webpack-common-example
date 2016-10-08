webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	var _menudata = __webpack_require__(1);

	var _menudata2 = _interopRequireDefault(_menudata);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {

	  // Render footer menu entries
	  var footerMenu = new _menu2.default($('#footerMenu'), // DOM element
	  _menudata2.default.getEntries() // Main menu's entries
	  );
	});

/***/ }
]);