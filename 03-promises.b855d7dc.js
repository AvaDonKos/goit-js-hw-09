var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");function i(e,t){return new Promise(((n,o)=>{setInterval((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:n,step:o}=e.target.elements;let l=+n.value;for(let e=0;e<+t.value;e+=1)i(e+1,l).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),l+=+o.value;e.target.reset()}));
//# sourceMappingURL=03-promises.b855d7dc.js.map
