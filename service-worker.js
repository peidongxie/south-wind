if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const o=e=>a(e,d),f={module:{uri:d},exports:r,require:o};s[d]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f23b4400cc3f8c21e810ab608ef82cba"},{url:"assets/404.html-2a3af7f6.js",revision:"75a701bf73b8a921354cf14865c43696"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-323d59c9.js",revision:"908600850c730c2b6ae37364d26d9969"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/biology.html-4ede5ad8.js",revision:"8d323c0f45a8f4cca3e7004b61768c94"},{url:"assets/biology.html-c75ddfd0.js",revision:"9ef40f4898785dfc046b3053e7938775"},{url:"assets/commonweal.html-3bdc9588.js",revision:"f34be81b8d4f6f48865876b8452ef735"},{url:"assets/commonweal.html-c23dbe6b.js",revision:"9963e3ede16446c0eef9331d231fd0cb"},{url:"assets/computer.html-0deb4233.js",revision:"76d45db957f14962b670190428390919"},{url:"assets/computer.html-e6f642e8.js",revision:"3ae4e42d91727e5c6cbf8416c500c885"},{url:"assets/debate.html-34ad2947.js",revision:"90fcb4eba3a79d5316d3809ffc72bfad"},{url:"assets/debate.html-f01e4285.js",revision:"416b6feca2085d8c26d1d4825c4d2adb"},{url:"assets/earth.html-09c572fa.js",revision:"0c32ef6391bd769bd61fdbaf514a5c44"},{url:"assets/earth.html-27837b9d.js",revision:"c6cf8a52f83447dde33c557b8cffce0a"},{url:"assets/economics.html-2e3e3f73.js",revision:"d88481ad03d921263823b07771e6dd66"},{url:"assets/economics.html-bdb4edaf.js",revision:"f14bfdfcbfdde25076fde3c818d339e1"},{url:"assets/entrepreneurship.html-6ff35ccc.js",revision:"07aa1ff6e793cc6e8665e863fa4db57a"},{url:"assets/entrepreneurship.html-bbf46a0c.js",revision:"459ef42f0a80cc067de5ff68cc33cca3"},{url:"assets/framework-b8f9ba87.js",revision:"7d5e3ba38563f0786b03e7b48e1a8751"},{url:"assets/game.html-439cb28a.js",revision:"ba67ea3c9a86a37f81275e1b65779c9b"},{url:"assets/game.html-44eb3824.js",revision:"b8c2581dfb091276969d69473755f48a"},{url:"assets/image-card-3c4ccba2.js",revision:"1b7d73f24dbffd962731acef9c8e4b56"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-55b1f745.js",revision:"378a88b09d28c66d77aff968823d58f1"},{url:"assets/index.html-85377814.js",revision:"d00c9ffcd5b3faf404f2ea3027720c63"},{url:"assets/index.html-a3a8bd75.js",revision:"e449d8edaa40e54624f92c67d0f06c5f"},{url:"assets/index.html-aa04edc5.js",revision:"01788d5c32d8cb444123c47b438f71c6"},{url:"assets/index.html-d50f32bb.js",revision:"1cd868ef3e5058952b493b543313de4d"},{url:"assets/index.html-e9f07130.js",revision:"2019062d0e476273cf50638bde10057d"},{url:"assets/korean.html-c425afa0.js",revision:"1cf2106f6c2820847ee30da081585ab0"},{url:"assets/korean.html-c56144c3.js",revision:"0a0bb46059a6b2da45bddb29fa8b9da4"},{url:"assets/math.html-3ee355c9.js",revision:"d9f44f2df5cd874d7b8214b38843329e"},{url:"assets/math.html-b66ee695.js",revision:"0d3a46bdfa5ba0e4bf17e12b01fa9039"},{url:"assets/physics.html-9f7ac21c.js",revision:"17d28781e6205015d88b2f4c41a91966"},{url:"assets/physics.html-d84199a4.js",revision:"53edec3184e057f5b80ed33bbb0ca6c2"},{url:"assets/practicality.html-4ae5f24f.js",revision:"8b4105d86b1b2e057dab1459d4eab998"},{url:"assets/practicality.html-9cff7097.js",revision:"f3960620d241262a53db6fad925b98e3"},{url:"assets/read-and-write.html-c4dcde02.js",revision:"52caa7eb062452260e8736850a2dfc38"},{url:"assets/read-and-write.html-ea1e23ec.js",revision:"4031667a093294cb4786fc32a6aa0d78"},{url:"assets/russia.html-32732de0.js",revision:"66c48630f99ee32b30e7ae4f965116f8"},{url:"assets/russia.html-bb4f97d2.js",revision:"f4aef8939c6327d40fcbd936eb29c5e9"},{url:"assets/science-fiction.html-0f1e6216.js",revision:"f8e695ceeacad260f27dc855095591e1"},{url:"assets/science-fiction.html-caeb9831.js",revision:"2c3102a382d27897401192df36be72b5"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style-b0a07712.css",revision:"acaefc2aef95337169832d1e3f8d1f32"},{url:"assets/summary.html-19c0fcd1.js",revision:"c9b1dde8b4be389532cf70eaa60e6e0a"},{url:"assets/summary.html-25047d10.js",revision:"f99bbc13b82f5541a3ac82880f0f4341"},{url:"assets/team.html-2cac3713.js",revision:"5186bb8b1847934e34d187f21df5e9d2"},{url:"assets/team.html-dfca1252.js",revision:"cbd6eb0eb8f9b03f7dbc3b34dfc211de"},{url:"courses/biology.html",revision:"0d953520c692d119a06ee135022c7b9e"},{url:"courses/computer.html",revision:"2fc1d38855260fd44a98e625b508f001"},{url:"courses/debate.html",revision:"0d740c755331458b7e0ff43e3b439417"},{url:"courses/earth.html",revision:"e91ac67caf0b131025ff96115652d3b1"},{url:"courses/economics.html",revision:"bcb2a36a0eae40fb317405f959da9c31"},{url:"courses/game.html",revision:"ceb0b65e38dc8fc052ea66a63600e20c"},{url:"courses/index.html",revision:"f3013c615b631ba694cd11b6b4a8c1c3"},{url:"courses/korean.html",revision:"c2fc6bcc0033a7ad173ae22424a65181"},{url:"courses/math.html",revision:"e7a60b04ecd1c4374c19049d335d706f"},{url:"courses/physics.html",revision:"7bc899496b618682d48a5f357f0262e2"},{url:"courses/read-and-write.html",revision:"6e66e399b5a6f2fdbc54cdc1e941c9a2"},{url:"courses/russia.html",revision:"2724642e98fb1df90193b0f6e370c7c3"},{url:"courses/science-fiction.html",revision:"084b225d2009f86768a0d082152b44d7"},{url:"details/commonweal.html",revision:"f7b488ee5895549399e581942d720fa3"},{url:"details/entrepreneurship.html",revision:"ac4663ebb3a55f30a1cec193eeb14689"},{url:"details/practicality.html",revision:"8d7e859671b0d6f77ee4f7e477a39dfd"},{url:"details/summary.html",revision:"b60de14ab59f3a32b7b6178a565dd423"},{url:"details/team.html",revision:"6bfb37a8a38cd36e7d86a980c862ad6b"},{url:"glimpses/index.html",revision:"b7278278e7103b508b02855071c81dfa"},{url:"img/answer.jpg",revision:"4a348464dadfc3c4c7bc20b5aca25eed"},{url:"img/architecture.png",revision:"929dbd5d7acc6d518d1f7300050ca515"},{url:"img/ceremony.jpg",revision:"8a915ddf4ab1fbc2cafbe45d23b6992c"},{url:"img/class.jpg",revision:"435182d05d77dd9541ef94cb68d297af"},{url:"img/internet.png",revision:"5492edc586df83d45d7f0ded115246b4"},{url:"img/logo/logo-with-name-128.png",revision:"f51df6afb6040cb66720c40027772c24"},{url:"img/logo/logo-with-name-192.png",revision:"2a2d44cae35901147498ad1a53ed5b4d"},{url:"img/logo/logo-with-name-256.png",revision:"407bef1e34d9379d1f9d1cf29ddbe2c9"},{url:"img/logo/logo-with-name-32.png",revision:"d94b7d1525af2d1be610abf5f39237a0"},{url:"img/logo/logo-with-name-48.png",revision:"8a7bb9a3e94b00ce73345e34e2e39817"},{url:"img/logo/logo-with-name-64.png",revision:"cc1d6d09ffdc5cc13fce4122ee0d42a5"},{url:"img/logo/logo-with-name-96.png",revision:"0d0ae94a593c02d62ff43206654cfb29"},{url:"img/logo/logo-with-name.png",revision:"7fcb70f4b73d9069e2fada263785b4ae"},{url:"img/logo/logo-without-name-128.png",revision:"2707831a73e473ec01e6bb27cec5bab6"},{url:"img/logo/logo-without-name-192.png",revision:"6413ba6149daf6ddfba693fb1b322229"},{url:"img/logo/logo-without-name-256.png",revision:"cdde4b14e0922ed6326cbe7369235011"},{url:"img/logo/logo-without-name-32.png",revision:"1020d51d8d49884404b9d5b4c8582955"},{url:"img/logo/logo-without-name-48.png",revision:"7f63bd1d30c7160be0b22a292df78e22"},{url:"img/logo/logo-without-name-64.png",revision:"2a4ca117a30503d80cc30ddc597e5286"},{url:"img/logo/logo-without-name-96.png",revision:"edd45cfac4b9b6385e0dee578345e0a5"},{url:"img/logo/logo-without-name.png",revision:"d20f4a3e1b75ad6a25f41c3995704e9d"},{url:"img/mode.png",revision:"6408a5257d3c427dd1807396bdf251be"},{url:"img/operation.png",revision:"d84f2fe2745a5f5c06e9ef8d0fe6d682"},{url:"img/teaching.png",revision:"723a5f615595c14668943e76c53968a3"},{url:"img/website.png",revision:"f1f95c20506cd26685f9ca3a8c00c33f"},{url:"index.html",revision:"f0a07ea3d5013240609164684bf6e11e"}],{})}));
