if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>a(e,r),o={module:{uri:r},exports:c,require:b};s[r]=Promise.all(i.map((e=>o[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6c6c6ba8d6e70b303ac445890c7182cb"},{url:"assets/404.html-de109a68.js",revision:"3e083f0c0b1b1f54c35da8dadf18b55a"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-2cd4b898.js",revision:"da2ad50dd533288d1fb867b9e3912b13"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/biology.html-1f69007e.js",revision:"ed3ff71b0608def2ce9a899a9e78183d"},{url:"assets/biology.html-c75ddfd0.js",revision:"9ef40f4898785dfc046b3053e7938775"},{url:"assets/commonweal.html-3bdc9588.js",revision:"f34be81b8d4f6f48865876b8452ef735"},{url:"assets/commonweal.html-fc311afc.js",revision:"239bc5792ef233696edb87d5fb80d92e"},{url:"assets/computer.html-0deb4233.js",revision:"76d45db957f14962b670190428390919"},{url:"assets/computer.html-f04895fc.js",revision:"a33491174a4d357e83cd546f50e37e30"},{url:"assets/debate.html-34ad2947.js",revision:"90fcb4eba3a79d5316d3809ffc72bfad"},{url:"assets/debate.html-39bb0047.js",revision:"e995de519de73b65db00be839d927b84"},{url:"assets/earth.html-09c572fa.js",revision:"0c32ef6391bd769bd61fdbaf514a5c44"},{url:"assets/earth.html-b6de77a8.js",revision:"998c366f67b8c676e2d5d1efb8fbd8c7"},{url:"assets/economics.html-bdb4edaf.js",revision:"f14bfdfcbfdde25076fde3c818d339e1"},{url:"assets/economics.html-f363a59f.js",revision:"36ab256c5671ef2e1cd305fdd4796ff3"},{url:"assets/entrepreneurship.html-6ff35ccc.js",revision:"07aa1ff6e793cc6e8665e863fa4db57a"},{url:"assets/entrepreneurship.html-e4dd3c2f.js",revision:"7009e168ae0423b8edb779fcd1bef0cc"},{url:"assets/framework-e93b08cb.js",revision:"b7423dc95dd1aec4a9885512a78aa962"},{url:"assets/game.html-439cb28a.js",revision:"ba67ea3c9a86a37f81275e1b65779c9b"},{url:"assets/game.html-e3e03897.js",revision:"034b7e9cac75bdbd4ba4a58f3984fbec"},{url:"assets/image-card-cdff3055.js",revision:"e1d909cf12219860d206a485ae680617"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-477aae6c.js",revision:"0149755a41b5623d7cc52b922240a404"},{url:"assets/index.html-85377814.js",revision:"d00c9ffcd5b3faf404f2ea3027720c63"},{url:"assets/index.html-9c79b74c.js",revision:"5d044db0a56022ecba4d00e2769f2a28"},{url:"assets/index.html-b38eed80.js",revision:"bdfc4fdcf81700517268a6c62a10f850"},{url:"assets/index.html-b533398b.js",revision:"12b15d2a3fc60c4b1131103f8f74aff8"},{url:"assets/index.html-d50f32bb.js",revision:"1cd868ef3e5058952b493b543313de4d"},{url:"assets/korean.html-7e3f30af.js",revision:"10afbf0e6cf08572cf536a13dea13ac0"},{url:"assets/korean.html-c425afa0.js",revision:"1cf2106f6c2820847ee30da081585ab0"},{url:"assets/math.html-125e9cd7.js",revision:"5dd88374edaf90ef9c0b7b8b0a6bb859"},{url:"assets/math.html-b66ee695.js",revision:"0d3a46bdfa5ba0e4bf17e12b01fa9039"},{url:"assets/physics.html-5ab37e52.js",revision:"100ba9cd265c823b96e68be42224b6f1"},{url:"assets/physics.html-9f7ac21c.js",revision:"17d28781e6205015d88b2f4c41a91966"},{url:"assets/practicality.html-4ae5f24f.js",revision:"8b4105d86b1b2e057dab1459d4eab998"},{url:"assets/practicality.html-9137dcdc.js",revision:"d84050b98d674f085b03b622fc0c986c"},{url:"assets/read-and-write.html-47c7c9a4.js",revision:"3738fe1ede6bc54495ca1045091a6eb1"},{url:"assets/read-and-write.html-ea1e23ec.js",revision:"4031667a093294cb4786fc32a6aa0d78"},{url:"assets/russia.html-32732de0.js",revision:"66c48630f99ee32b30e7ae4f965116f8"},{url:"assets/russia.html-c6910398.js",revision:"271c849089f3e38953f78952e7f97cf6"},{url:"assets/science-fiction.html-b1cb55e3.js",revision:"f6fda899841972e123909b273000e6b5"},{url:"assets/science-fiction.html-caeb9831.js",revision:"2c3102a382d27897401192df36be72b5"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style-46b398ae.css",revision:"9de68d3248f4fe0eb6801e0f068930d8"},{url:"assets/summary.html-19c0fcd1.js",revision:"c9b1dde8b4be389532cf70eaa60e6e0a"},{url:"assets/summary.html-a76808a7.js",revision:"d311e3356e719d34db8b22eeb95782db"},{url:"assets/team.html-ca87fbbb.js",revision:"07fdb9b2dcb508e1c88033ceb5fa0b45"},{url:"assets/team.html-dfca1252.js",revision:"cbd6eb0eb8f9b03f7dbc3b34dfc211de"},{url:"courses/biology.html",revision:"529047e9a91dd6dc0e204c4ceb818e4e"},{url:"courses/computer.html",revision:"30d0880c6a02f6bc7c5b87b78b85ee32"},{url:"courses/debate.html",revision:"be12170e22b35895de7f3535140db78b"},{url:"courses/earth.html",revision:"12704e32b78e899010c514325a2c1f5b"},{url:"courses/economics.html",revision:"2bb10f338036484584d8563c4b79f3a4"},{url:"courses/game.html",revision:"a59714520d5337ca96f6c926678a648a"},{url:"courses/index.html",revision:"7746a8a6234b6b3c148874fe1b872f18"},{url:"courses/korean.html",revision:"4839a8de768a83910b192d137b2f3521"},{url:"courses/math.html",revision:"7e3ab572a972811640f08e06b61e047c"},{url:"courses/physics.html",revision:"1056ffceb2c81b791882ef785ec80b6b"},{url:"courses/read-and-write.html",revision:"31ceb742763940d937d6712a57402ca1"},{url:"courses/russia.html",revision:"79b201a424e17ae67709ab0f9a8e227f"},{url:"courses/science-fiction.html",revision:"4f1aef90b3d0196759004d07b634056f"},{url:"details/commonweal.html",revision:"98766a41bb1a02a296f309ee66a78369"},{url:"details/entrepreneurship.html",revision:"cabea77cbaf504dd557677afa48728d9"},{url:"details/practicality.html",revision:"81ff1b55a6e0206de15982669f4763bb"},{url:"details/summary.html",revision:"4212babdbe8a66dc5f95692221566cec"},{url:"details/team.html",revision:"27492ff08a1530cf643a44fbbc2599b2"},{url:"glimpses/index.html",revision:"a2bc872cb407df8482884d1aa346b136"},{url:"img/answer.jpg",revision:"4a348464dadfc3c4c7bc20b5aca25eed"},{url:"img/architecture.png",revision:"929dbd5d7acc6d518d1f7300050ca515"},{url:"img/ceremony.jpg",revision:"8a915ddf4ab1fbc2cafbe45d23b6992c"},{url:"img/class.jpg",revision:"435182d05d77dd9541ef94cb68d297af"},{url:"img/internet.png",revision:"5492edc586df83d45d7f0ded115246b4"},{url:"img/logo/logo-with-name-128.png",revision:"f51df6afb6040cb66720c40027772c24"},{url:"img/logo/logo-with-name-192.png",revision:"2a2d44cae35901147498ad1a53ed5b4d"},{url:"img/logo/logo-with-name-256.png",revision:"407bef1e34d9379d1f9d1cf29ddbe2c9"},{url:"img/logo/logo-with-name-32.png",revision:"d94b7d1525af2d1be610abf5f39237a0"},{url:"img/logo/logo-with-name-48.png",revision:"8a7bb9a3e94b00ce73345e34e2e39817"},{url:"img/logo/logo-with-name-64.png",revision:"cc1d6d09ffdc5cc13fce4122ee0d42a5"},{url:"img/logo/logo-with-name-96.png",revision:"0d0ae94a593c02d62ff43206654cfb29"},{url:"img/logo/logo-with-name.png",revision:"7fcb70f4b73d9069e2fada263785b4ae"},{url:"img/logo/logo-without-name-128.png",revision:"2707831a73e473ec01e6bb27cec5bab6"},{url:"img/logo/logo-without-name-192.png",revision:"6413ba6149daf6ddfba693fb1b322229"},{url:"img/logo/logo-without-name-256.png",revision:"cdde4b14e0922ed6326cbe7369235011"},{url:"img/logo/logo-without-name-32.png",revision:"1020d51d8d49884404b9d5b4c8582955"},{url:"img/logo/logo-without-name-48.png",revision:"7f63bd1d30c7160be0b22a292df78e22"},{url:"img/logo/logo-without-name-64.png",revision:"2a4ca117a30503d80cc30ddc597e5286"},{url:"img/logo/logo-without-name-96.png",revision:"edd45cfac4b9b6385e0dee578345e0a5"},{url:"img/logo/logo-without-name.png",revision:"d20f4a3e1b75ad6a25f41c3995704e9d"},{url:"img/mode.png",revision:"6408a5257d3c427dd1807396bdf251be"},{url:"img/operation.png",revision:"d84f2fe2745a5f5c06e9ef8d0fe6d682"},{url:"img/teaching.png",revision:"723a5f615595c14668943e76c53968a3"},{url:"img/website.png",revision:"f1f95c20506cd26685f9ca3a8c00c33f"},{url:"index.html",revision:"952d06901dcc6bd225dc03a48fb350bb"}],{})}));
