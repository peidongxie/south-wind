if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),o={module:{uri:c},exports:r,require:b};s[c]=Promise.all(i.map((e=>o[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a6799fbe8363f2909ff9c927b12279ec"},{url:"assets/404.html-de109a68.js",revision:"3e083f0c0b1b1f54c35da8dadf18b55a"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-044a35f2.js",revision:"ee14495d0393b9ed4a057971f6a25351"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/biology.html-1f69007e.js",revision:"ed3ff71b0608def2ce9a899a9e78183d"},{url:"assets/biology.html-c75ddfd0.js",revision:"9ef40f4898785dfc046b3053e7938775"},{url:"assets/commonweal.html-3bdc9588.js",revision:"f34be81b8d4f6f48865876b8452ef735"},{url:"assets/commonweal.html-fc311afc.js",revision:"239bc5792ef233696edb87d5fb80d92e"},{url:"assets/computer.html-0deb4233.js",revision:"76d45db957f14962b670190428390919"},{url:"assets/computer.html-f04895fc.js",revision:"a33491174a4d357e83cd546f50e37e30"},{url:"assets/debate.html-34ad2947.js",revision:"90fcb4eba3a79d5316d3809ffc72bfad"},{url:"assets/debate.html-39bb0047.js",revision:"e995de519de73b65db00be839d927b84"},{url:"assets/earth.html-09c572fa.js",revision:"0c32ef6391bd769bd61fdbaf514a5c44"},{url:"assets/earth.html-b6de77a8.js",revision:"998c366f67b8c676e2d5d1efb8fbd8c7"},{url:"assets/economics.html-bdb4edaf.js",revision:"f14bfdfcbfdde25076fde3c818d339e1"},{url:"assets/economics.html-f363a59f.js",revision:"36ab256c5671ef2e1cd305fdd4796ff3"},{url:"assets/entrepreneurship.html-6ff35ccc.js",revision:"07aa1ff6e793cc6e8665e863fa4db57a"},{url:"assets/entrepreneurship.html-e4dd3c2f.js",revision:"7009e168ae0423b8edb779fcd1bef0cc"},{url:"assets/framework-e93b08cb.js",revision:"b7423dc95dd1aec4a9885512a78aa962"},{url:"assets/game.html-439cb28a.js",revision:"ba67ea3c9a86a37f81275e1b65779c9b"},{url:"assets/game.html-e3e03897.js",revision:"034b7e9cac75bdbd4ba4a58f3984fbec"},{url:"assets/image-card-cdff3055.js",revision:"e1d909cf12219860d206a485ae680617"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-477aae6c.js",revision:"0149755a41b5623d7cc52b922240a404"},{url:"assets/index.html-85377814.js",revision:"d00c9ffcd5b3faf404f2ea3027720c63"},{url:"assets/index.html-9c79b74c.js",revision:"5d044db0a56022ecba4d00e2769f2a28"},{url:"assets/index.html-a3a8bd75.js",revision:"e449d8edaa40e54624f92c67d0f06c5f"},{url:"assets/index.html-b38eed80.js",revision:"bdfc4fdcf81700517268a6c62a10f850"},{url:"assets/index.html-d50f32bb.js",revision:"1cd868ef3e5058952b493b543313de4d"},{url:"assets/korean.html-7e3f30af.js",revision:"10afbf0e6cf08572cf536a13dea13ac0"},{url:"assets/korean.html-c425afa0.js",revision:"1cf2106f6c2820847ee30da081585ab0"},{url:"assets/math.html-125e9cd7.js",revision:"5dd88374edaf90ef9c0b7b8b0a6bb859"},{url:"assets/math.html-b66ee695.js",revision:"0d3a46bdfa5ba0e4bf17e12b01fa9039"},{url:"assets/physics.html-5ab37e52.js",revision:"100ba9cd265c823b96e68be42224b6f1"},{url:"assets/physics.html-9f7ac21c.js",revision:"17d28781e6205015d88b2f4c41a91966"},{url:"assets/practicality.html-4ae5f24f.js",revision:"8b4105d86b1b2e057dab1459d4eab998"},{url:"assets/practicality.html-9137dcdc.js",revision:"d84050b98d674f085b03b622fc0c986c"},{url:"assets/read-and-write.html-47c7c9a4.js",revision:"3738fe1ede6bc54495ca1045091a6eb1"},{url:"assets/read-and-write.html-ea1e23ec.js",revision:"4031667a093294cb4786fc32a6aa0d78"},{url:"assets/russia.html-32732de0.js",revision:"66c48630f99ee32b30e7ae4f965116f8"},{url:"assets/russia.html-c6910398.js",revision:"271c849089f3e38953f78952e7f97cf6"},{url:"assets/science-fiction.html-b1cb55e3.js",revision:"f6fda899841972e123909b273000e6b5"},{url:"assets/science-fiction.html-caeb9831.js",revision:"2c3102a382d27897401192df36be72b5"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style-21728da6.css",revision:"0ff9b2eac379f041b582f57d373555ed"},{url:"assets/summary.html-19c0fcd1.js",revision:"c9b1dde8b4be389532cf70eaa60e6e0a"},{url:"assets/summary.html-a76808a7.js",revision:"d311e3356e719d34db8b22eeb95782db"},{url:"assets/team.html-ca87fbbb.js",revision:"07fdb9b2dcb508e1c88033ceb5fa0b45"},{url:"assets/team.html-dfca1252.js",revision:"cbd6eb0eb8f9b03f7dbc3b34dfc211de"},{url:"courses/biology.html",revision:"cefa8809bb82bb47e49df43e3022c510"},{url:"courses/computer.html",revision:"8b86a293d08483249c8048a65e70ef1d"},{url:"courses/debate.html",revision:"cf566de84120be90c4d827bc12a305f9"},{url:"courses/earth.html",revision:"a520aa8d1125056699958bc8c81c596b"},{url:"courses/economics.html",revision:"78727d5c5565950fa54490acb1c0d6a9"},{url:"courses/game.html",revision:"4f3d28ab9f6e5d34beeda43095e6ba56"},{url:"courses/index.html",revision:"1a7b3de347b069023fee99febb756999"},{url:"courses/korean.html",revision:"8c42941d6f9bbd401d5446c4b5fe3e5b"},{url:"courses/math.html",revision:"2b621f18b247f1ebc3e99ad68d63a953"},{url:"courses/physics.html",revision:"d3b94f938ded401dc89c45e46c721639"},{url:"courses/read-and-write.html",revision:"f958aae20f2342af5fde3c4124b2dbe5"},{url:"courses/russia.html",revision:"5831d3422529ac671752244f00a419cc"},{url:"courses/science-fiction.html",revision:"1339a8771d211899c776f9c3580cf118"},{url:"details/commonweal.html",revision:"96339d596a98ee6a6c963956b874befc"},{url:"details/entrepreneurship.html",revision:"160b5793f4e6afe9780d4e97b3fbcca6"},{url:"details/practicality.html",revision:"174a2ed45abf5556d9573c1ecce788ef"},{url:"details/summary.html",revision:"7959e4ab0c060ad79a09361dedec75cd"},{url:"details/team.html",revision:"1777f39d4e54eac1b7d390dd4550d8ec"},{url:"glimpses/index.html",revision:"bb20e760db79de17174d740905a68dd4"},{url:"img/answer.jpg",revision:"4a348464dadfc3c4c7bc20b5aca25eed"},{url:"img/architecture.png",revision:"929dbd5d7acc6d518d1f7300050ca515"},{url:"img/ceremony.jpg",revision:"8a915ddf4ab1fbc2cafbe45d23b6992c"},{url:"img/class.jpg",revision:"435182d05d77dd9541ef94cb68d297af"},{url:"img/internet.png",revision:"5492edc586df83d45d7f0ded115246b4"},{url:"img/logo/logo-with-name-128.png",revision:"f51df6afb6040cb66720c40027772c24"},{url:"img/logo/logo-with-name-192.png",revision:"2a2d44cae35901147498ad1a53ed5b4d"},{url:"img/logo/logo-with-name-256.png",revision:"407bef1e34d9379d1f9d1cf29ddbe2c9"},{url:"img/logo/logo-with-name-32.png",revision:"d94b7d1525af2d1be610abf5f39237a0"},{url:"img/logo/logo-with-name-48.png",revision:"8a7bb9a3e94b00ce73345e34e2e39817"},{url:"img/logo/logo-with-name-64.png",revision:"cc1d6d09ffdc5cc13fce4122ee0d42a5"},{url:"img/logo/logo-with-name-96.png",revision:"0d0ae94a593c02d62ff43206654cfb29"},{url:"img/logo/logo-with-name.png",revision:"7fcb70f4b73d9069e2fada263785b4ae"},{url:"img/logo/logo-without-name-128.png",revision:"2707831a73e473ec01e6bb27cec5bab6"},{url:"img/logo/logo-without-name-192.png",revision:"6413ba6149daf6ddfba693fb1b322229"},{url:"img/logo/logo-without-name-256.png",revision:"cdde4b14e0922ed6326cbe7369235011"},{url:"img/logo/logo-without-name-32.png",revision:"1020d51d8d49884404b9d5b4c8582955"},{url:"img/logo/logo-without-name-48.png",revision:"7f63bd1d30c7160be0b22a292df78e22"},{url:"img/logo/logo-without-name-64.png",revision:"2a4ca117a30503d80cc30ddc597e5286"},{url:"img/logo/logo-without-name-96.png",revision:"edd45cfac4b9b6385e0dee578345e0a5"},{url:"img/logo/logo-without-name.png",revision:"d20f4a3e1b75ad6a25f41c3995704e9d"},{url:"img/mode.png",revision:"6408a5257d3c427dd1807396bdf251be"},{url:"img/operation.png",revision:"d84f2fe2745a5f5c06e9ef8d0fe6d682"},{url:"img/teaching.png",revision:"723a5f615595c14668943e76c53968a3"},{url:"img/website.png",revision:"f1f95c20506cd26685f9ca3a8c00c33f"},{url:"index.html",revision:"8b665f4293f67bd1f5f7b415631b50e6"}],{})}));
