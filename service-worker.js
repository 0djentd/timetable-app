if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"timetable-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.b7e5906a.css",revision:null},{url:"/index.html",revision:"8bfe5786afc8ded905f337b916416ca5"},{url:"/js/app.2027d9a5.js",revision:null},{url:"/js/chunk-vendors.16a2231a.js",revision:null},{url:"/manifest.json",revision:"53996f7116ca127c7a208ee809474403"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
