var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r={form:document.querySelector(".form"),inputDelay:document.querySelector("input[name=delay]"),inputDelayStep:document.querySelector("input[name=step]"),inputAmountPromises:document.querySelector("input[name=amount]"),submitButton:document.querySelector("button")};function u(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(r.inputDelay.value),n=Number(r.inputDelayStep.value),o=Number(r.inputAmountPromises.value),l=0;t-=n,r.form.reset();for(let e=0;e<o;e+=1)l=e+1,t+=n,u(l,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.79dbcc65.js.map
