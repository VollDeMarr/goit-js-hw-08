var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(t,e,n){var o,r,i,f,u,a,c=0,v=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(T,e),v?m(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||b&&t-c>=i}function T(){var t=d();if(h(t))return w(t);u=setTimeout(T,function(t){var n=e-(t-a);return b?s(n,i-(t-c)):n}(t))}function w(t){return u=void 0,g&&o?m(t):(o=r=void 0,f)}function O(){var t=d(),n=h(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(b)return u=setTimeout(T,e),m(a)}return void 0===u&&(u=setTimeout(T,e)),f}return e=y(e)||0,p(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},O.flush=function(){return void 0===u?f:w(d())},O}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=p(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}const b=document.querySelector(".feedback-form");console.log(b),b.addEventListener("input",(function(t){for(let t=0;t<array.length;t++){array[t]}console.log(t.target.value)}));
//# sourceMappingURL=03-feedback.35b3ddff.js.map
