function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire4c75;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire4c75=i);var r=i("eWCmQ");const u=document.querySelector(".form");function l(t,o,n){for(let i=0;i<t;i+=1)s(i+1,o*i).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o+n}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o+n}ms`)}))}function s(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(u),o=Number(t.get("amount")),n=Number(t.get("delay")),i=Number(t.get("step"));setTimeout(l,n,o,i,n)}));
//# sourceMappingURL=03-promises.6a2ee20b.js.map
