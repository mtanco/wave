(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return A})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(314)),o=r(316),p={title:"Graphics / Path",keywords:["graphics"]},c={unversionedId:"examples/graphics-path",id:"examples/graphics-path",isDocsHomePage:!1,title:"Graphics / Path",description:"Use the graphics API to draw a red square.",source:"@site/docs/examples/graphics-path.md",slug:"/examples/graphics-path",permalink:"/wave/docs/examples/graphics-path",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/graphics-path.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics / Clock",permalink:"/wave/docs/examples/graphics-clock"},next:{title:"Graphics / Turtle",permalink:"/wave/docs/examples/graphics-turtle"}},A=[],l={rightToc:A};function s(e){var t=e.components,p=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,p,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the graphics API to draw a red square."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(418).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui, graphics as g\n\n# Use relative coords to draw a square, sort of like Python's turtle package.\nred_square = g.p().m(25, 25).h(50).v(50).h(-50).z().path(fill='red')\n\npage = site['/demo']\npage['example'] = ui.graphics_card(\n    box='1 1 2 3', view_box='0 0 100 100', width='100%', height='100%',\n    scene=g.scene(foo=red_square),\n)\n\npage.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#graphics")},"graphics")))}s.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return S}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=a.a.createContext({}),l=function(e){var t=a.a.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),s=l(r),g=n,S=s["".concat(o,".").concat(g)]||s[g]||u[g]||i;return r?a.a.createElement(S,p(p({ref:t},A),{},{components:r})):a.a.createElement(S,p({ref:t},A))}));function S(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var A=2;A<i;A++)o[A]=r[A];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},315:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(315),a=r(317);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},317:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},418:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAD8CAYAAABZ0jAcAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDAyOjA3OjQ5IFBNIFBEVCumBS8AAANUSURBVHic7daxDcJQFARBY1GxY4ggpmQ/imClL6yZCi5a3W1mZgOI7KsHANciKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAKn76gFXcL4/2/n6rJ7Bj/bnse2PY/WMv+epAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAqdvMzOoRwHV4KkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVJfkOkP8d6gjyUAAAAASUVORK5CYII="}}]);