!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(h,t),s?p(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?p(e):(i=o=void 0,u)}function S(){var e=b(),n=T(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:w(b())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){T={email:w.value,message:S.value},localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:w.value,message:S.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),T={}}));var T=JSON.parse(localStorage.getItem("feedback-form-state"))||{},h=O.elements,w=h.email,S=h.message;T&&(w.value=T.email||"",S.value=T.message||"")}();
//# sourceMappingURL=03-feedback.3fc797aa.js.map
