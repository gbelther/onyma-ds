var j=Object.defineProperty;var f=(r,e)=>j(r,"name",{value:e,configurable:!0});function $(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}f($,"_assertThisInitialized");function b(r,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():f(function(a,t){return a.__proto__=t,a},"_setPrototypeOf"),b(r,e)}f(b,"_setPrototypeOf");function q(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,b(r,e)}f(q,"_inheritsLoose");function k(r){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():f(function(n){return n.__proto__||Object.getPrototypeOf(n)},"_getPrototypeOf"),k(r)}f(k,"_getPrototypeOf");function T(r){return Function.toString.call(r).indexOf("[native code]")!==-1}f(T,"_isNativeFunction");function M(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}f(M,"_isNativeReflectConstruct");function m(r,e,n){return M()?m=Reflect.construct.bind():m=f(function(t,o,i){var d=[null];d.push.apply(d,o);var u=Function.bind.apply(t,d),l=new u;return i&&b(l,i.prototype),l},"_construct"),m.apply(null,arguments)}f(m,"_construct");function I(r){var e=typeof Map=="function"?new Map:void 0;return I=f(function(a){if(a===null||!T(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(a))return e.get(a);e.set(a,t)}function t(){return m(a,arguments,k(this).constructor)}return f(t,"Wrapper"),t.prototype=Object.create(a.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),b(t,a)},"_wrapNativeSuper"),I(r)}f(I,"_wrapNativeSuper");var h=function(r){q(e,r);function e(n){var a;return a=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,$(a)}return f(e,"PolishedError"),e}(I(Error));function y(r){return Math.round(r*255)}f(y,"colorToInt");function A(r,e,n){return y(r)+","+y(e)+","+y(n)}f(A,"convertToInt");function F(r,e,n,a){if(a===void 0&&(a=A),e===0)return a(n,n,n);var t=(r%360+360)%360/60,o=(1-Math.abs(2*n-1))*e,i=o*(1-Math.abs(t%2-1)),d=0,u=0,l=0;t>=0&&t<1?(d=o,u=i):t>=1&&t<2?(d=i,u=o):t>=2&&t<3?(u=o,l=i):t>=3&&t<4?(u=i,l=o):t>=4&&t<5?(d=i,l=o):t>=5&&t<6&&(d=o,l=i);var s=n-o/2,p=d+s,c=u+s,v=l+s;return a(p,c,v)}f(F,"hslToRgb");var O={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function N(r){if(typeof r!="string")return r;var e=r.toLowerCase();return O[e]?"#"+O[e]:r}f(N,"nameToHex");var z=/^#[a-fA-F0-9]{6}$/,E=/^#[a-fA-F0-9]{8}$/,H=/^#[a-fA-F0-9]{3}$/,B=/^#[a-fA-F0-9]{4}$/,w=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,L=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,S=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,G=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function W(r){if(typeof r!="string")throw new h(3);var e=N(r);if(e.match(z))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(E)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(H))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(B)){var a=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:a}}var t=w.exec(e);if(t)return{red:parseInt(""+t[1],10),green:parseInt(""+t[2],10),blue:parseInt(""+t[3],10)};var o=L.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=S.exec(e);if(i){var d=parseInt(""+i[1],10),u=parseInt(""+i[2],10)/100,l=parseInt(""+i[3],10)/100,s="rgb("+F(d,u,l)+")",p=w.exec(s);if(!p)throw new h(4,e,s);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10)}}var c=G.exec(e.substring(0,50));if(c){var v=parseInt(""+c[1],10),P=parseInt(""+c[2],10)/100,R=parseInt(""+c[3],10)/100,x="rgb("+F(v,P,R)+")",g=w.exec(x);if(!g)throw new h(4,e,x);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new h(5)}f(W,"parseToRgb");function _(r){if(r==="transparent")return 0;var e=W(r),n=Object.keys(e).map(function(i){var d=e[i]/255;return d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4)}),a=n[0],t=n[1],o=n[2];return parseFloat((.2126*a+.7152*t+.0722*o).toFixed(3))}f(_,"getLuminance");function J(r,e){var n=_(r),a=_(e);return parseFloat((n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)).toFixed(2))}f(J,"getContrast");export{J as g};
//# sourceMappingURL=polished.esm.6f945778.js.map
