if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const a=e=>l(e,n),t={module:{uri:n},exports:o,require:a};s[n]=Promise.all(i.map((e=>t[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"53b437de2bfa5517230cc79a37058952"},{url:"assets/404.8e8ce5d6.js",revision:null},{url:"assets/404.html.265028f6.js",revision:null},{url:"assets/404.html.aedd429f.js",revision:null},{url:"assets/app.12c0105e.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/biology.html.71a8ca2f.js",revision:null},{url:"assets/biology.html.86981714.js",revision:null},{url:"assets/commonweal.html.68e5dc1b.js",revision:null},{url:"assets/commonweal.html.c3a2f004.js",revision:null},{url:"assets/computer.html.1164b9a2.js",revision:null},{url:"assets/computer.html.cde504fe.js",revision:null},{url:"assets/debate.html.2dae2311.js",revision:null},{url:"assets/debate.html.b6031465.js",revision:null},{url:"assets/earth.html.9647450c.js",revision:null},{url:"assets/earth.html.decedd14.js",revision:null},{url:"assets/economics.html.3225f834.js",revision:null},{url:"assets/economics.html.fb91740e.js",revision:null},{url:"assets/entrepreneurship.html.74b16ce6.js",revision:null},{url:"assets/entrepreneurship.html.ed2f6743.js",revision:null},{url:"assets/game.html.977c5c22.js",revision:null},{url:"assets/game.html.c5ab6f97.js",revision:null},{url:"assets/image-card.9338b352.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.001d0e81.js",revision:null},{url:"assets/index.html.1e95d695.js",revision:null},{url:"assets/index.html.24a2b26f.js",revision:null},{url:"assets/index.html.4f65ce36.js",revision:null},{url:"assets/index.html.551b82c5.js",revision:null},{url:"assets/index.html.e91f3844.js",revision:null},{url:"assets/korean.html.0afb4769.js",revision:null},{url:"assets/korean.html.6092c34c.js",revision:null},{url:"assets/Layout.550cf166.js",revision:null},{url:"assets/math.html.c2d81325.js",revision:null},{url:"assets/math.html.ebd6cc50.js",revision:null},{url:"assets/physics.html.0a0ed334.js",revision:null},{url:"assets/physics.html.6db1a4bd.js",revision:null},{url:"assets/practicality.html.43529c65.js",revision:null},{url:"assets/practicality.html.6612016e.js",revision:null},{url:"assets/read-and-write.html.b17c7be5.js",revision:null},{url:"assets/read-and-write.html.c6a8f076.js",revision:null},{url:"assets/russia.html.2fb527c6.js",revision:null},{url:"assets/russia.html.443c1423.js",revision:null},{url:"assets/science-fiction.html.1918cd85.js",revision:null},{url:"assets/science-fiction.html.7448640c.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.bee28ec3.css",revision:null},{url:"assets/summary.html.00b17676.js",revision:null},{url:"assets/summary.html.8607676c.js",revision:null},{url:"assets/team.html.8f6c4b53.js",revision:null},{url:"assets/team.html.cf5798cc.js",revision:null},{url:"courses/biology.html",revision:"7fc8b319a1ec5a3bed186772d54bfdb2"},{url:"courses/computer.html",revision:"0d530b544ef926466f7012e55f78bae6"},{url:"courses/debate.html",revision:"b0774affe44b507cb2c11d07f998cacd"},{url:"courses/earth.html",revision:"42a5fee4f75eeaa4a53f47689fcc3083"},{url:"courses/economics.html",revision:"599b453fb3ab4fd4bfa173da6dc4612b"},{url:"courses/game.html",revision:"0ae9aebd2f692146071068ee2014a988"},{url:"courses/index.html",revision:"3be35e9470aa384940d4be35012e390c"},{url:"courses/korean.html",revision:"ef453d7c826e90acb216c44f9e14ea27"},{url:"courses/math.html",revision:"6901e9fadd34de286a6b40a6e2caf4a7"},{url:"courses/physics.html",revision:"6c267769b4ad6bf157e96d5572e3b038"},{url:"courses/read-and-write.html",revision:"e373266e7b48822f556080448b253c8e"},{url:"courses/russia.html",revision:"036e7904fc471a965e783182d8c4d168"},{url:"courses/science-fiction.html",revision:"41725523ada32a059970969e33a40e97"},{url:"details/commonweal.html",revision:"ee6a04200a5835a752ff1d75caa8fdf3"},{url:"details/entrepreneurship.html",revision:"0d10ba793b27512428b697966f45fdec"},{url:"details/practicality.html",revision:"dd9cd4825def9af5619da0fc27038acd"},{url:"details/summary.html",revision:"d240d9a5dbb1fb4604873d46903091f9"},{url:"details/team.html",revision:"786849c8b57ce87c459c873fa99d173d"},{url:"glimpses/index.html",revision:"89ea3999e2918272ebfb0673a86836a8"},{url:"img/answer.jpg",revision:"4a348464dadfc3c4c7bc20b5aca25eed"},{url:"img/architecture.png",revision:"929dbd5d7acc6d518d1f7300050ca515"},{url:"img/ceremony.jpg",revision:"8a915ddf4ab1fbc2cafbe45d23b6992c"},{url:"img/class.jpg",revision:"435182d05d77dd9541ef94cb68d297af"},{url:"img/internet.png",revision:"5492edc586df83d45d7f0ded115246b4"},{url:"img/logo/logo-with-name-128.png",revision:"f51df6afb6040cb66720c40027772c24"},{url:"img/logo/logo-with-name-192.png",revision:"2a2d44cae35901147498ad1a53ed5b4d"},{url:"img/logo/logo-with-name-256.png",revision:"407bef1e34d9379d1f9d1cf29ddbe2c9"},{url:"img/logo/logo-with-name-32.png",revision:"d94b7d1525af2d1be610abf5f39237a0"},{url:"img/logo/logo-with-name-48.png",revision:"8a7bb9a3e94b00ce73345e34e2e39817"},{url:"img/logo/logo-with-name-64.png",revision:"cc1d6d09ffdc5cc13fce4122ee0d42a5"},{url:"img/logo/logo-with-name-96.png",revision:"0d0ae94a593c02d62ff43206654cfb29"},{url:"img/logo/logo-with-name.png",revision:"7fcb70f4b73d9069e2fada263785b4ae"},{url:"img/logo/logo-without-name-128.png",revision:"2707831a73e473ec01e6bb27cec5bab6"},{url:"img/logo/logo-without-name-192.png",revision:"6413ba6149daf6ddfba693fb1b322229"},{url:"img/logo/logo-without-name-256.png",revision:"cdde4b14e0922ed6326cbe7369235011"},{url:"img/logo/logo-without-name-32.png",revision:"1020d51d8d49884404b9d5b4c8582955"},{url:"img/logo/logo-without-name-48.png",revision:"7f63bd1d30c7160be0b22a292df78e22"},{url:"img/logo/logo-without-name-64.png",revision:"2a4ca117a30503d80cc30ddc597e5286"},{url:"img/logo/logo-without-name-96.png",revision:"edd45cfac4b9b6385e0dee578345e0a5"},{url:"img/logo/logo-without-name.png",revision:"d20f4a3e1b75ad6a25f41c3995704e9d"},{url:"img/mode.png",revision:"6408a5257d3c427dd1807396bdf251be"},{url:"img/operation.png",revision:"d84f2fe2745a5f5c06e9ef8d0fe6d682"},{url:"img/teaching.png",revision:"723a5f615595c14668943e76c53968a3"},{url:"img/website.png",revision:"f1f95c20506cd26685f9ca3a8c00c33f"},{url:"index.html",revision:"4caf1af68529444260e59f1c0de30c63"}],{})}));
