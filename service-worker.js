if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let l={};const o=e=>i(e,r),c={module:{uri:r},exports:l,require:o};t[r]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"timetable-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/timetable-app/css/chunk-vendors.b41f526a.css",revision:null},{url:"/timetable-app/index.html",revision:"7ce6991ba2d0d03c11db8c32af93371f"},{url:"/timetable-app/js/app.9066c6ed.js",revision:null},{url:"/timetable-app/js/chunk-vendors.00c1e73b.js",revision:null},{url:"/timetable-app/manifest.json",revision:"53996f7116ca127c7a208ee809474403"},{url:"/timetable-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/timetable-app/screenshot_timetable_app.png",revision:"5d024311a12e66009b72d7d937cbcd14"}],{})}));
//# sourceMappingURL=service-worker.js.map
