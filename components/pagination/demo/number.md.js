webpackJsonp([48,158],{10:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(1),i=s(u),f=a(2),d=e(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.style,r=t.onClick,c=(0,d["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-ws"+e,!0),n));return i.createElement("div",{className:c,style:o,onClick:r})},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,a){"use strict";a(5),a(12)},12:function(n,t){},13:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(n){return"string"==typeof n}function i(n){return u(n.type)&&P(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):u(n)?(P(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},d=function(){function n(n,t){var a=[],e=!0,s=!1,o=void 0;try{for(var p,r=n[Symbol.iterator]();!(e=(p=r.next()).done)&&(a.push(p.value),!t||a.length!==t);e=!0);}catch(c){s=!0,o=c}finally{try{!e&&r["return"]&&r["return"]()}finally{if(s)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=a(1),m=s(k),b=a(2),y=e(b),g=a(20),h=e(g),v=a(22),w=e(v),O=/^[\u4e00-\u9fa5]{2}$/,P=O.test.bind(O),j=function(n){function t(){r(this,t);for(var a=arguments.length,e=Array(a),s=0;s<a;s++)e[s]=arguments[s];var o=c(this,n.call.apply(n,[this].concat(e)));return o.onClick=function(){o.props.onClick(o)},o}return l(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=d(t,2),e=a[0],s=e.children,o=e.className,r=e.prefixCls,c=e.type,l=e.size,u=e.ghost,k=e.inline,b=e.disabled,g=e.htmlType,v=e.icon,O=e.loading,P=a[1],j=(0,y["default"])((n={},p(n,o,o),p(n,r,!0),p(n,r+"-primary","primary"===c),p(n,r+"-ghost",u),p(n,r+"-warning","warning"===c),p(n,r+"-small","small"===l&&k),p(n,r+"-loading",O),p(n,r+"-inline",k),p(n,r+"-disabled",b),n)),E=O?"loading":v,x=m.Children.map(s,i);return m.createElement("button",f({},P,{type:g||"button",className:j,disabled:b,onClick:this.onClick}),E?m.createElement(h["default"],{type:E}):null,x)},t}(m.Component);t["default"]=j,j.propTypes={prefixCls:k.PropTypes.string,type:k.PropTypes.string,size:k.PropTypes.oneOf(["large","small"]),htmlType:k.PropTypes.oneOf(["submit","button","reset"]),ghost:k.PropTypes.bool,inline:k.PropTypes.bool,disabled:k.PropTypes.bool,loading:k.PropTypes.bool,icon:k.PropTypes.bool,onClick:k.PropTypes.func},j.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},14:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(1),i=s(u),f=a(2),d=e(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.children,r=t.style,c=(0,d["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-wb"+e,!0),n));return i.createElement("div",{className:c,style:r},o)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},15:function(n,t,a){"use strict";a(5),a(16)},16:function(n,t){},237:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(1),f=s(i),d=a(2),k=e(d),m=a(13),b=e(m),y=a(62),g=e(y),h=function(n){function t(a){r(this,t);var e=c(this,n.call(this,a));return e.state={current:a.current},e.onPrev=e.onPrev.bind(e),e.onNext=e.onNext.bind(e),e}return l(t,n),t.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},t.prototype._hasPrev=function(){return this.state.current>0},t.prototype._hasNext=function(){return this.state.current<this.props.total},t.prototype._handleChange=function(n){return this.setState({current:n}),this.props.onChange(n),n},t.prototype.onPrev=function(){this._handleChange(this.state.current-1)},t.prototype.onNext=function(){this._handleChange(this.state.current+1)},t.prototype.getIndexes=function(n){for(var t=[],a=0;a<n;a++)t.push(a);return t},t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.mode,o=t.total,r=t.size,c=t.simple,l=t.prevText,u=t.nextText,i=this.state.current,d=(0,k["default"])((n={className:e},p(n,a+"-wrap",!0),p(n,a+"-wrap-lg","large"===r),p(n,a+"-wrap-sm","small"===r),n)),m=void 0;switch(s){case"button":m=f.createElement(g["default"],null,f.createElement(g["default"].Item,{className:a+"-wrap-btn"},f.createElement(b["default"],{size:r,inline:!0,disabled:i<=0,onClick:this.onPrev},l)),this.props.children?f.createElement(g["default"].Item,null,this.props.children):!c&&f.createElement(g["default"].Item,{className:d},f.createElement("span",{className:"active"},i+1),"/",f.createElement("span",null,o)),f.createElement(g["default"].Item,null,f.createElement(b["default"],{size:r,disabled:i>=o-1,inline:!0,onClick:this.onNext},u)));break;case"number":m=f.createElement("div",{className:d},f.createElement("span",{className:"active"},i+1),"/",f.createElement("span",null,o));break;case"pointer":var y=this.getIndexes(o);m=f.createElement("div",{className:d},y.map(function(n){var t,e=(0,k["default"])((t={},p(t,a+"-wrap-dot",!0),p(t,a+"-wrap-dot-active",n===i),t));return f.createElement("div",{className:e,key:"dot-"+n},f.createElement("span",null))}));break;default:m=!1}return f.createElement("div",{className:a},m)},t}(f.Component);t["default"]=h,h.defaultProps={prefixCls:"am-pagination",mode:"button",size:"large",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:u},n.exports=t["default"]},238:function(n,t,a){"use strict";a(5),a(253)},253:function(n,t){},760:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=(a(15),a(14)),o=e(s),p=(a(238),a(237)),r=e(p),c=(a(11),a(10)),l=e(c),u=a(1),i=e(u),f=a(4);e(f);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:1,title:"\u6570\u5b57\u5f62\u6001",filename:"components/pagination/demo/number.md",id:"components-pagination-demo-number"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >activeIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >activeIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"App",render:function(){return i["default"].createElement("div",null,i["default"].createElement("div",{className:"pagination-container"},i["default"].createElement(l["default"],{size:20}),i["default"].createElement(o["default"],null,i["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),i["default"].createElement(r["default"],{mode:"number",total:5,activeIndex:2})),i["default"].createElement(l["default"],{size:20}),i["default"].createElement(o["default"],null,i["default"].createElement(r["default"],{mode:"number",size:"small",total:5,activeIndex:-1}))))}});return i["default"].createElement(n,null)},style:".loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});