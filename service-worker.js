if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>a(e,r),o={module:{uri:r},exports:c,require:b};s[r]=Promise.all(i.map((e=>o[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"09ff227dc6e40446bcc9096e4b987ebb"},{url:"assets/404.html-b2958a9a.js",revision:"6bb173fe29555ac2f5d1885e46a8c319"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-0b36d7b4.js",revision:"29549dd7a22232a332a21bb1d3dbcf41"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/biology.html-ba799162.js",revision:"fb11d3b0292cfed5ee6d961b3c499e94"},{url:"assets/biology.html-c75ddfd0.js",revision:"9ef40f4898785dfc046b3053e7938775"},{url:"assets/commonweal.html-3bdc9588.js",revision:"f34be81b8d4f6f48865876b8452ef735"},{url:"assets/commonweal.html-cc0dd871.js",revision:"a8b52937baf49356eb3b108cbb0e5170"},{url:"assets/computer.html-0deb4233.js",revision:"76d45db957f14962b670190428390919"},{url:"assets/computer.html-b609732f.js",revision:"2b5b106ffb4fa74cb059312d0efd9031"},{url:"assets/debate.html-34ad2947.js",revision:"90fcb4eba3a79d5316d3809ffc72bfad"},{url:"assets/debate.html-b26519a6.js",revision:"e8e418ea5be2ee8ade99d1eff61f2db6"},{url:"assets/earth.html-057b66be.js",revision:"94e2fa021a96e32adc97692c5266f43a"},{url:"assets/earth.html-09c572fa.js",revision:"0c32ef6391bd769bd61fdbaf514a5c44"},{url:"assets/economics.html-07ab9af6.js",revision:"196a0db839aa7b9cde9bed6ef4146d3d"},{url:"assets/economics.html-bdb4edaf.js",revision:"f14bfdfcbfdde25076fde3c818d339e1"},{url:"assets/entrepreneurship.html-19e2529c.js",revision:"d00a3a3a815853d944436561193e24c0"},{url:"assets/entrepreneurship.html-6ff35ccc.js",revision:"07aa1ff6e793cc6e8665e863fa4db57a"},{url:"assets/game.html-439cb28a.js",revision:"ba67ea3c9a86a37f81275e1b65779c9b"},{url:"assets/game.html-ebc989c7.js",revision:"f3205deee1baab86d3b91c38444b97da"},{url:"assets/image-card-eaf48a13.js",revision:"58ce9d514c9c982851d8339b38ad825b"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-85377814.js",revision:"d00c9ffcd5b3faf404f2ea3027720c63"},{url:"assets/index.html-88291fcf.js",revision:"05fd443ba73a40186d5bef310cd84b71"},{url:"assets/index.html-b533398b.js",revision:"12b15d2a3fc60c4b1131103f8f74aff8"},{url:"assets/index.html-d3f6cef1.js",revision:"667bb43db4233f4bf0260038a619b780"},{url:"assets/index.html-d50f32bb.js",revision:"1cd868ef3e5058952b493b543313de4d"},{url:"assets/index.html-d5d1a442.js",revision:"9df6a672248cf871dfe2dd1e49745f6b"},{url:"assets/korean.html-b394cc8b.js",revision:"b1d0e294f4394f004c6657f9df345657"},{url:"assets/korean.html-c425afa0.js",revision:"1cf2106f6c2820847ee30da081585ab0"},{url:"assets/math.html-94055feb.js",revision:"a32619cb58ae7f7f9e771a0941c3f029"},{url:"assets/math.html-b66ee695.js",revision:"0d3a46bdfa5ba0e4bf17e12b01fa9039"},{url:"assets/physics.html-9f7ac21c.js",revision:"17d28781e6205015d88b2f4c41a91966"},{url:"assets/physics.html-edcff6b1.js",revision:"b202a86adb5f07ae44c419398195c9ee"},{url:"assets/practicality.html-4ae5f24f.js",revision:"8b4105d86b1b2e057dab1459d4eab998"},{url:"assets/practicality.html-701e169a.js",revision:"cc6f7ba8bf7661c482073b3186d3c38f"},{url:"assets/read-and-write.html-de7a996c.js",revision:"7406eda6c0a756b818ca773c487bf12c"},{url:"assets/read-and-write.html-ea1e23ec.js",revision:"4031667a093294cb4786fc32a6aa0d78"},{url:"assets/russia.html-32732de0.js",revision:"66c48630f99ee32b30e7ae4f965116f8"},{url:"assets/russia.html-43b07758.js",revision:"36d3f9c63eb727f7a58b40534dfe28d1"},{url:"assets/science-fiction.html-7b8b5ece.js",revision:"2f219cda2badfd3d8e999b39222b590e"},{url:"assets/science-fiction.html-caeb9831.js",revision:"2c3102a382d27897401192df36be72b5"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style-54a24144.css",revision:"81306d30b59e51565bc5fbfb7b5487c9"},{url:"assets/summary.html-19c0fcd1.js",revision:"c9b1dde8b4be389532cf70eaa60e6e0a"},{url:"assets/summary.html-8a6a0306.js",revision:"68fa06003b6a35c987d58fae66f5c69b"},{url:"assets/team.html-d5bef7fd.js",revision:"b1365b77d2754d886b2c8d755867d645"},{url:"assets/team.html-dfca1252.js",revision:"cbd6eb0eb8f9b03f7dbc3b34dfc211de"},{url:"courses/biology.html",revision:"d7410d666511ec06e6c7fb779b206c7a"},{url:"courses/computer.html",revision:"9098e219df140f2412b663970f6d7d36"},{url:"courses/debate.html",revision:"d97070507d905bc946c770ac0386754a"},{url:"courses/earth.html",revision:"5e53eccae5e640b86c5ae4cfcae78db9"},{url:"courses/economics.html",revision:"8891c9db33f673859eb1eda3cd7091c8"},{url:"courses/game.html",revision:"021f295b5af1c494d3bea7fb86099841"},{url:"courses/index.html",revision:"50998782fbe46036bb89f2176c8eb2f5"},{url:"courses/korean.html",revision:"078870e2274b71102ae113b68e02e8d8"},{url:"courses/math.html",revision:"54d417b46dab6e31a198e930c58380fb"},{url:"courses/physics.html",revision:"1effdd40cef570d27abe400e0f22309c"},{url:"courses/read-and-write.html",revision:"cf33a2bf8c9b9a868e97459bcff7f1fc"},{url:"courses/russia.html",revision:"a1b13b2a61114941950c2e4467f23b72"},{url:"courses/science-fiction.html",revision:"6cfddab8e8c704b42d9f9e687a643ee4"},{url:"details/commonweal.html",revision:"548100939b284a16ad6b1ed2675c980c"},{url:"details/entrepreneurship.html",revision:"5e8a069afe31181b95300d8587226c6a"},{url:"details/practicality.html",revision:"d3657f690a33ad307692f89e9754be81"},{url:"details/summary.html",revision:"16b622021db854c7e727a1754aba42eb"},{url:"details/team.html",revision:"953856912105562d717040a94a5d3c1e"},{url:"glimpses/index.html",revision:"7652a4bc0b32037be4dc4586bef7eafe"},{url:"img/answer.jpg",revision:"4a348464dadfc3c4c7bc20b5aca25eed"},{url:"img/architecture.png",revision:"929dbd5d7acc6d518d1f7300050ca515"},{url:"img/ceremony.jpg",revision:"8a915ddf4ab1fbc2cafbe45d23b6992c"},{url:"img/class.jpg",revision:"435182d05d77dd9541ef94cb68d297af"},{url:"img/internet.png",revision:"5492edc586df83d45d7f0ded115246b4"},{url:"img/logo/logo-with-name-128.png",revision:"f51df6afb6040cb66720c40027772c24"},{url:"img/logo/logo-with-name-192.png",revision:"2a2d44cae35901147498ad1a53ed5b4d"},{url:"img/logo/logo-with-name-256.png",revision:"407bef1e34d9379d1f9d1cf29ddbe2c9"},{url:"img/logo/logo-with-name-32.png",revision:"d94b7d1525af2d1be610abf5f39237a0"},{url:"img/logo/logo-with-name-48.png",revision:"8a7bb9a3e94b00ce73345e34e2e39817"},{url:"img/logo/logo-with-name-64.png",revision:"cc1d6d09ffdc5cc13fce4122ee0d42a5"},{url:"img/logo/logo-with-name-96.png",revision:"0d0ae94a593c02d62ff43206654cfb29"},{url:"img/logo/logo-with-name.png",revision:"7fcb70f4b73d9069e2fada263785b4ae"},{url:"img/logo/logo-without-name-128.png",revision:"2707831a73e473ec01e6bb27cec5bab6"},{url:"img/logo/logo-without-name-192.png",revision:"6413ba6149daf6ddfba693fb1b322229"},{url:"img/logo/logo-without-name-256.png",revision:"cdde4b14e0922ed6326cbe7369235011"},{url:"img/logo/logo-without-name-32.png",revision:"1020d51d8d49884404b9d5b4c8582955"},{url:"img/logo/logo-without-name-48.png",revision:"7f63bd1d30c7160be0b22a292df78e22"},{url:"img/logo/logo-without-name-64.png",revision:"2a4ca117a30503d80cc30ddc597e5286"},{url:"img/logo/logo-without-name-96.png",revision:"edd45cfac4b9b6385e0dee578345e0a5"},{url:"img/logo/logo-without-name.png",revision:"d20f4a3e1b75ad6a25f41c3995704e9d"},{url:"img/mode.png",revision:"6408a5257d3c427dd1807396bdf251be"},{url:"img/operation.png",revision:"d84f2fe2745a5f5c06e9ef8d0fe6d682"},{url:"img/teaching.png",revision:"723a5f615595c14668943e76c53968a3"},{url:"img/website.png",revision:"f1f95c20506cd26685f9ca3a8c00c33f"},{url:"index.html",revision:"ae90953da1ff6d8d973adefbc54c1f4e"}],{})}));
