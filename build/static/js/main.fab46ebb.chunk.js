(this["webpackJsonpcalc-app"]=this["webpackJsonpcalc-app"]||[]).push([[0],[,function(_,e,t){"use strict";var a=t(0),n=t.n(a);t(18);e.a=function(_){var e=_.type,t=_.text,a=_.clickHandler;return n.a.createElement("button",{className:e,onClick:function(){return a(t)}},n.a.createElement("span",null,t))}},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_chris_workspace_Cursos_React_Js_Redux_ES6_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),lodash_words__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),lodash_words__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_words__WEBPACK_IMPORTED_MODULE_2__),_components_Functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_components_MathOperations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),_components_Numbers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_components_Result__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_chris_workspace_Cursos_React_Js_Redux_ES6_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),stack=_useState2[0],setStack=_useState2[1],items=lodash_words__WEBPACK_IMPORTED_MODULE_2___default()(stack,/[^-^+^*^/]+/g),value=items.length>0?items[items.length-1]:"0";return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main",{className:"react-calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_6__.a,{value:value}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Functions__WEBPACK_IMPORTED_MODULE_3__.a,{onContentClear:function(_){return setStack("")},onDelete:function(){if(stack.length>0){var _=stack.substring(0,stack.length-1);setStack(_)}},onPercent:function(){stack.length>1&&console.log("No me sali\xf3 como hacer el porcentaje")}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Numbers__WEBPACK_IMPORTED_MODULE_5__.a,{onClickNumber:function(_){return setStack("".concat(stack).concat(_))}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MathOperations__WEBPACK_IMPORTED_MODULE_4__.a,{onClickOperation:function(_){return setStack("".concat(stack).concat(_))},onClickEqual:function onClickEqual(equal){return setStack(eval(stack.toString()))}}))};__webpack_exports__.a=App},,function(_,e,t){"use strict";var a=t(0),n=t.n(a),c=t(1);e.a=function(_){var e=_.onContentClear,t=_.onDelete,a=_.onPercent;return n.a.createElement("section",{className:"functions"},n.a.createElement(c.a,{type:"button-long-text",text:"AC",clickHandler:e}),n.a.createElement(c.a,{type:"button-long-text",text:"C",clickHandler:t}),n.a.createElement(c.a,{type:"button-long-text",text:"%",clickHandler:a}))}},function(_,e,t){"use strict";var a=t(0),n=t.n(a),c=t(1);e.a=function(_){var e=_.onClickOperation,t=_.onClickEqual;return n.a.createElement("section",{className:"math-operations"},n.a.createElement(c.a,{text:"/",clickHandler:e}),n.a.createElement(c.a,{text:"*",clickHandler:e}),n.a.createElement(c.a,{text:"-",clickHandler:e}),n.a.createElement(c.a,{text:"+",clickHandler:e}),n.a.createElement(c.a,{text:"=",clickHandler:t}))}},function(_,e,t){"use strict";var a=t(0),n=t.n(a),c=t(1),r=["7","8","9","4","5","6","1","2","3","0",","];e.a=function(_){var e=_.onClickNumber;return n.a.createElement("section",{className:"numbers"},function(_){return r.map((function(e){return n.a.createElement(c.a,{key:e,text:e,clickHandler:_})}))}(e))}},function(_,e,t){"use strict";var a=t(0),n=t.n(a),c=function(_){var e=_.value;return n.a.createElement("div",{className:"result"},n.a.createElement("span",null,e))};c.defaultProps={value:"0"},e.a=c},,function(_,e,t){_.exports=t(12)},function(_,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),c=t(3),r=t.n(c),l=t(4);r.a.render(n.a.createElement(l.a,null),document.getElementById("root"))},,,,,,function(_,e,t){},function(_,e,t){}],[[11,1,2]]]);
//# sourceMappingURL=main.fab46ebb.chunk.js.map