!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=57)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(30))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(4),o=r(9),u=r(6);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(32),o=r(14);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(4),o=r(15),u=r(16),i=r(8),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(19),u=r(3),i=r(20),c=r(26),f=r(52),a=o("wks"),p=e.Symbol,s=f?p:p&&p.withoutSetter||i;t.exports=function(t){return u(a,t)||(c&&u(p,t)?a[t]=p[t]:a[t]=s("Symbol."+t)),a[t]}},function(t,n,r){var e=r(4),o=r(31),u=r(6),i=r(7),c=r(8),f=r(3),a=r(15),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=i(t),n=c(n,!0),a)try{return p(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(4),o=r(1),u=r(33);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(18),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(10),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(38),o=r(18);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){var e=r(41),o=r(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(24),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o,u=r(0),i=r(54),c=u.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){"use strict";var e=r(29),o=r(1),u=r(25),i=r(2),c=r(49),f=r(23),a=r(50),p=r(51),s=r(53),l=r(11),v=r(27),y=l("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),x=s("concat"),g=function(t){if(!i(t))return!1;var n=t[y];return void 0!==n?!!n:u(t)};e({target:"Array",proto:!0,forced:!d||!x},{concat:function(t){var n,r,e,o,u,i=c(this),s=p(i,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(u=-1===n?i:arguments[n],g(u)){if(l+(o=f(u.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in u&&a(s,l,u[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(s,l++,u)}return s.length=l,s}})},function(t,n,r){var e=r(0),o=r(12).f,u=r(5),i=r(34),c=r(10),f=r(39),a=r(48);t.exports=function(t,n){var r,p,s,l,v,y=t.target,d=t.global,x=t.stat;if(r=d?e:x?e[y]||c(y,{}):(e[y]||{}).prototype)for(p in n){if(l=n[p],s=t.noTargetGet?(v=o(r,p))&&v.value:r[p],!a(d?p:y+(x?".":"#")+p,t.forced)&&void 0!==s){if(typeof l==typeof s)continue;f(l,s)}(t.sham||s&&s.sham)&&u(l,"sham",!0),i(r,p,l,t)}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(13),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(2),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(5),u=r(3),i=r(10),c=r(17),f=r(35),a=f.get,p=f.enforce,s=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||o(r,"name",n),p(r).source=s.join("string"==typeof n?n:"")),t!==e?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e,o,u,i=r(36),c=r(0),f=r(2),a=r(5),p=r(3),s=r(37),l=r(21),v=c.WeakMap;if(i){var y=new v,d=y.get,x=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},u=function(t){return x.call(y,t)}}else{var h=s("state");l[h]=!0,e=function(t,n){return a(t,h,n),n},o=function(t){return p(t,h)?t[h]:{}},u=function(t){return p(t,h)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(17),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n,r){var e=r(19),o=r(20),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(3),o=r(40),u=r(12),i=r(9);t.exports=function(t,n){for(var r=o(n),c=i.f,f=u.f,a=0;a<r.length;a++){var p=r[a];e(t,p)||c(t,p,f(n,p))}}},function(t,n,r){var e=r(22),o=r(42),u=r(47),i=r(16);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(43),o=r(46).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(3),o=r(7),u=r(44).indexOf,i=r(21);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(i,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n,r){var e=r(7),o=r(23),u=r(45),i=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),p=u(i,a);if(t&&r!=r){for(;a>p;)if((c=f[p++])!=c)return!0}else for(;a>p;p++)if((t||p in f)&&f[p]===r)return t||p||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n,r){var e=r(24),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,n,r){var e=r(14);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(8),o=r(9),u=r(6);t.exports=function(t,n,r){var i=e(n);i in t?o.f(t,i,u(0,r)):t[i]=r}},function(t,n,r){var e=r(2),o=r(25),u=r(11)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[u])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(26);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(1),o=r(11),u=r(27),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(22);t.exports=e("navigator","userAgent")||""},function(t,n,r){},function(t,n,r){},function(t,n,r){"use strict";r.r(n);r(28),r(55),r(56),r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p;var e=document.querySelector(".configuration__core-value"),o=document.querySelector(".configuration__slider");o.addEventListener("input",(function(t){var n=t.target.value,r="";r=n<=4?"ядра":"ядер",e.textContent="".concat(n," ").concat(r)})),o.addEventListener("input",(function(){var t=o.value;2==t?t=0:4==t?t=20:6==t?t=40:8==t?t=60:10==t?t=80:12==t&&(t=100);var n="linear-gradient(90deg, #2f93fe "+t+"%, #e5e5e5 "+t+"%)";o.style.background=n}))}]);