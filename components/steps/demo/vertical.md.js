webpackJsonp([38,158],{10:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function p(n,t){for(var e=Object.getOwnPropertyNames(t),s=0;s<e.length;s++){var a=e[s],p=Object.getOwnPropertyDescriptor(t,a);p&&p.configurable&&void 0===n[a]&&Object.defineProperty(n,a,p)}return n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),u=a(l),f=e(2),d=s(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return i(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,s=t.size,a=t.className,p=t.style,r=t.onClick,c=(0,d["default"])((n={},o(n,""+e,!0),o(n,a,!!a),o(n,e+"-ws"+s,!0),n));return u.createElement("div",{className:c,style:p,onClick:r})},t}(u.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,e){"use strict";e(5),e(12)},12:function(n,t){},14:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function p(n,t){for(var e=Object.getOwnPropertyNames(t),s=0;s<e.length;s++){var a=e[s],p=Object.getOwnPropertyDescriptor(t,a);p&&p.configurable&&void 0===n[a]&&Object.defineProperty(n,a,p)}return n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),u=a(l),f=e(2),d=s(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return i(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,s=t.size,a=t.className,p=t.children,r=t.style,c=(0,d["default"])((n={},o(n,""+e,!0),o(n,a,!!a),o(n,e+"-wb"+s,!0),n));return u.createElement("div",{className:c,style:r},p)},t}(u.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},15:function(n,t,e){"use strict";e(5),e(16)},16:function(n,t){},178:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function p(n,t){for(var e=Object.getOwnPropertyNames(t),s=0;s<e.length;s++){var a=e[s],p=Object.getOwnPropertyDescriptor(t,a);p&&p.configurable&&void 0===n[a]&&Object.defineProperty(n,a,p)}return n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),l=a(i),u=e(205),f=s(u),d=function(n){function t(){return o(this,t),r(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){return l.createElement(f["default"],this.props)},t}(l.Component);t["default"]=d,d.Step=f["default"].Step,d.defaultProps={prefixCls:"am-steps",iconPrefix:"ant",labelPlacement:"vertical",current:0},n.exports=t["default"]},179:function(n,t,e){"use strict";e(5),e(196)},196:function(n,t){},203:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){var e={};for(var s in n)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}function o(n){var t,e,s=n.className,o=n.prefixCls,c=n.style,l=n.tailWidth,f=n.status,d=void 0===f?"wait":f,k=n.iconPrefix,y=n.icon,m=n.wrapperStyle,b=n.adjustMarginRight,h=n.stepLast,g=n.stepNumber,v=n.description,O=n.title,P=p(n,["className","prefixCls","style","tailWidth","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepLast","stepNumber","description","title"]),w=(0,u["default"])((t={},a(t,o+"-icon",!0),a(t,k+"icon",!0),a(t,k+"icon-"+y,y),a(t,k+"icon-check",!y&&"finish"===d),a(t,k+"icon-cross",!y&&"error"===d),t)),j=y||"finish"===d||"error"===d?i["default"].createElement("span",{className:w}):i["default"].createElement("span",{className:o+"-icon"},g),T=(0,u["default"])((e={},a(e,o+"-item",!0),a(e,o+"-item-last",h),a(e,o+"-status-"+d,!0),a(e,o+"-custom",y),a(e,s,!!s),e));return i["default"].createElement("div",r({},P,{className:T,style:r({width:l,marginRight:b},c)}),h?"":i["default"].createElement("div",{className:o+"-tail"},i["default"].createElement("i",null)),i["default"].createElement("div",{className:o+"-step"},i["default"].createElement("div",{className:o+"-head",style:{background:m.background||m.backgroundColor}},i["default"].createElement("div",{className:o+"-head-inner"},j)),i["default"].createElement("div",{className:o+"-main"},i["default"].createElement("div",{className:o+"-title",style:{background:m.background||m.backgroundColor}},O),v?i["default"].createElement("div",{className:o+"-description"},v):"")))}var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},c=e(1),i=s(c),l=e(2),u=s(l);o.propTypes={className:c.PropTypes.string,prefixCls:c.PropTypes.string,style:c.PropTypes.object,wrapperStyle:c.PropTypes.object,tailWidth:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),status:c.PropTypes.string,iconPrefix:c.PropTypes.string,icon:c.PropTypes.string,adjustMarginRight:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),stepLast:c.PropTypes.bool,stepNumber:c.PropTypes.string,description:c.PropTypes.any,title:c.PropTypes.any},n.exports=o},204:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n,t){for(var e=Object.getOwnPropertyNames(t),s=0;s<e.length;s++){var a=e[s],p=Object.getOwnPropertyDescriptor(t,a);p&&p.configurable&&void 0===n[a]&&Object.defineProperty(n,a,p)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e={};for(var s in n)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},u=e(1),f=s(u),d=e(4),k=s(d),y=e(2),m=s(y),b=function(n){function t(e){r(this,t);var s=c(this,n.call(this,e));return s.culcLastStepOffsetWidth=function(){var n=k["default"].findDOMNode(s);n.children.length>0&&(s.culcTimeout=setTimeout(function(){var t=n.lastChild.offsetWidth+1;s.state.lastStepOffsetWidth!==t&&s.setState({lastStepOffsetWidth:t})}))},s.state={lastStepOffsetWidth:0},s}return i(t,n),t.prototype.componentDidMount=function(){this.culcLastStepOffsetWidth()},t.prototype.componentDidUpdate=function(){this.culcLastStepOffsetWidth()},t.prototype.componentWillUnmount=function(){this.culcTimeout&&clearTimeout(this.culcTimeout)},t.prototype.render=function(){var n,t=this,e=this.props,s=e.prefixCls,a=e.style,r=void 0===a?{}:a,c=e.className,i=e.children,u=e.direction,d=e.labelPlacement,k=e.iconPrefix,y=e.status,b=e.size,h=e.current,g=o(e,["prefixCls","style","className","children","direction","labelPlacement","iconPrefix","status","size","current"]),v=i.length-1,O=this.state.lastStepOffsetWidth>0,P=(0,m["default"])((n={},p(n,s,!0),p(n,s+"-"+b,b),p(n,s+"-"+u,!0),p(n,s+"-label-"+d,"horizontal"===u),p(n,s+"-hidden",!O),p(n,c,c),n));return f["default"].createElement("div",l({className:P,style:r},g),f["default"].Children.map(i,function(n,a){var p="vertical"!==u&&a!==v&&O?100/v+"%":null,o="vertical"===u||a===v?null:-(t.state.lastStepOffsetWidth/v+1),c={stepNumber:(a+1).toString(),stepLast:a===v,tailWidth:p,adjustMarginRight:o,prefixCls:s,iconPrefix:k,wrapperStyle:r};return"error"===y&&a===h-1&&(c.className=e.prefixCls+"-next-error"),n.props.status||(a===h?c.status=y:a<h?c.status="finish":c.status="wait"),f["default"].cloneElement(n,c)},this))},t}(f["default"].Component);t["default"]=b,b.propTypes={prefixCls:u.PropTypes.string,iconPrefix:u.PropTypes.string,direction:u.PropTypes.string,labelPlacement:u.PropTypes.string,children:u.PropTypes.any,status:u.PropTypes.string,size:u.PropTypes.string},b.defaultProps={prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",current:0,status:"process",size:""},n.exports=t["default"]},205:function(n,t,e){"use strict";var s=e(204);s.Step=e(203),n.exports=s},785:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var a=(e(15),e(14)),p=s(a),o=(e(11),e(10)),r=s(o),c=(e(179),e(178)),i=s(c),l=e(1),u=s(l),f=e(4);s(f);n.exports={content:[["p","\u7b80\u5355\u7684\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761\u3002"]],meta:{order:2,title:"\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761",filename:"components/steps/demo/vertical.md",id:"components-steps-demo-vertical"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> steps <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5df2\u5b8c\u6210\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fdb\u884c\u4e2d\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u53c8\u4e00\u4e2a\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>s<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span> <span class="token attr-name" >description</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>stepsExample<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >direction</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>vertical<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>steps<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].Step,t=[{title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"},{title:"\u8fdb\u884c\u4e2d",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"},{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"},{title:"\u53c8\u4e00\u4e2a\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}].map(function(t,e){return u["default"].createElement(n,{key:e,title:t.title,description:t.description})});return u["default"].createElement("div",{className:"stepsExample"},u["default"].createElement(r["default"],{size:20}),u["default"].createElement(p["default"],{size:20},u["default"].createElement(i["default"],{direction:"vertical",current:1},t)))}}}});