if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>l(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"ca161843c36645a7d9a9e446fa5cd6ea"},{url:"assets/404.ad5e42b0.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.f0cd7775.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/biology.html.2d025d2b.js",revision:null},{url:"assets/biology.html.d7c4ecdb.js",revision:null},{url:"assets/commonweal.html.4bc40034.js",revision:null},{url:"assets/commonweal.html.b3cc8294.js",revision:null},{url:"assets/computer.html.17529333.js",revision:null},{url:"assets/computer.html.e9740593.js",revision:null},{url:"assets/debate.html.41f0911c.js",revision:null},{url:"assets/debate.html.8e903a35.js",revision:null},{url:"assets/earth.html.92f92615.js",revision:null},{url:"assets/earth.html.c5ffdaeb.js",revision:null},{url:"assets/economics.html.ce844768.js",revision:null},{url:"assets/economics.html.f5fbedf6.js",revision:null},{url:"assets/entrepreneurship.html.0b11032d.js",revision:null},{url:"assets/entrepreneurship.html.c1246c18.js",revision:null},{url:"assets/game.html.25ae70e5.js",revision:null},{url:"assets/game.html.b7e6322e.js",revision:null},{url:"assets/image-card.f2c92105.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1f3bea30.js",revision:null},{url:"assets/index.html.242e0ba4.js",revision:null},{url:"assets/index.html.4be1ffbb.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.b92ed15b.js",revision:null},{url:"assets/index.html.fc8e2d05.js",revision:null},{url:"assets/korean.html.02d7536a.js",revision:null},{url:"assets/korean.html.48c46345.js",revision:null},{url:"assets/Layout.15668956.js",revision:null},{url:"assets/math.html.0b28d1fc.js",revision:null},{url:"assets/math.html.6e8ee0cc.js",revision:null},{url:"assets/physics.html.5550e0e2.js",revision:null},{url:"assets/physics.html.6107c826.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/practicality.html.3c3e69c1.js",revision:null},{url:"assets/practicality.html.6910d2aa.js",revision:null},{url:"assets/read-and-write.html.08b645fb.js",revision:null},{url:"assets/read-and-write.html.b51066d4.js",revision:null},{url:"assets/russia.html.1227d654.js",revision:null},{url:"assets/russia.html.4eefb249.js",revision:null},{url:"assets/science-fiction.html.29bfaaa6.js",revision:null},{url:"assets/science-fiction.html.3945aa23.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.260c1ffb.css",revision:null},{url:"assets/summary.html.08fb736e.js",revision:null},{url:"assets/summary.html.f5e3c28d.js",revision:null},{url:"assets/team.html.4803b78b.js",revision:null},{url:"assets/team.html.5bc6546a.js",revision:null},{url:"courses/biology.html",revision:"b111ef310556c65e45b2947dd46713a7"},{url:"courses/computer.html",revision:"9bdda535ad3e5f295c422e15f1ee3ab1"},{url:"courses/debate.html",revision:"3b427247ed094d5cd1af7499f78a7297"},{url:"courses/earth.html",revision:"680ea5561be6dafd13433590a6eb2bf4"},{url:"courses/economics.html",revision:"ff2ce55ccbdfabaafae1f071ba3ce3f1"},{url:"courses/game.html",revision:"cc3a499d1358ab2ea25210180512a7f9"},{url:"courses/index.html",revision:"890a04f7310143fdc9eecff5dc88953e"},{url:"courses/korean.html",revision:"7f564541d49150eb8c71e2acc0ab23f6"},{url:"courses/math.html",revision:"4b202ad1c4263d3f4922d6a8f7d68cdb"},{url:"courses/physics.html",revision:"73986884959c357fb98ef6fdfda0cc8b"},{url:"courses/read-and-write.html",revision:"7fe2cfcc3cd37bce2ac2750e53a172ad"},{url:"courses/russia.html",revision:"0ee273e6d5085b83258eb1100c6202b5"},{url:"courses/science-fiction.html",revision:"92cd89b93d1a204725bcf8d683b7abd7"},{url:"details/commonweal.html",revision:"4715cbdd3c54845010a6ac47e739f01c"},{url:"details/entrepreneurship.html",revision:"f68e36b0f2ae32053d17ed2c17c4f744"},{url:"details/practicality.html",revision:"2fc540b365eb7334957416ddf56d07f8"},{url:"details/summary.html",revision:"98311ca1df510233c45cf21128c8c72a"},{url:"details/team.html",revision:"7624ffa64f9be48c3e5b79c3d16adc08"},{url:"glimpses/index.html",revision:"76a47b5646af71350cdc8c6573ff6e78"},{url:"img/answer.jpg",revision:"619025c6bb73fe1fb4bd490d2101b8f7"},{url:"img/architecture.png",revision:"620d009fcead556914d64640adf7580e"},{url:"img/ceremony.jpg",revision:"269b0154d264349947c6c7d422683c2d"},{url:"img/class.jpg",revision:"7b23b5e3976f035efab90fda6687e4d2"},{url:"img/internet.png",revision:"d3a54d7a2506ff890737b5685a64563c"},{url:"img/logo/logo-with-name-128.png",revision:"f8ae6273c87ab9abf5bcb6edb511fad2"},{url:"img/logo/logo-with-name-192.png",revision:"64102547c61ff7f8b040ff8a7c5efd5e"},{url:"img/logo/logo-with-name-256.png",revision:"ccb0ac0e309d89d98d415753e9affe2d"},{url:"img/logo/logo-with-name-32.png",revision:"c6426761e9024b91397591c3d0a7c90a"},{url:"img/logo/logo-with-name-48.png",revision:"78e77a759e3ff5c7d03a2679d7ca7a20"},{url:"img/logo/logo-with-name-64.png",revision:"98ca2745aa8c7ec00aad9b59c2672a89"},{url:"img/logo/logo-with-name-96.png",revision:"ca2ff1304f165c2df17fb50428fd005b"},{url:"img/logo/logo-with-name.png",revision:"d4300dd8106566579e79e6e44ab8fb3f"},{url:"img/logo/logo-without-name-128.png",revision:"18533bb6617b02ae32c47ee27a1e09fb"},{url:"img/logo/logo-without-name-192.png",revision:"2495bef175d2a74a863e56edd0eb9a53"},{url:"img/logo/logo-without-name-256.png",revision:"049d2f52149b716c5ad8b8c309769539"},{url:"img/logo/logo-without-name-32.png",revision:"49de81f745097a8260468f7ef2f3a422"},{url:"img/logo/logo-without-name-48.png",revision:"f7c48fc131d89968c6188644acd7af8c"},{url:"img/logo/logo-without-name-64.png",revision:"2cfb40fb6b811673d88023888194adc1"},{url:"img/logo/logo-without-name-96.png",revision:"09a5f0bdea418a8b87614e7080b78a2a"},{url:"img/logo/logo-without-name.png",revision:"d19b42cc849b4891ee7d412ac929c4b2"},{url:"img/mode.png",revision:"22c2a91061876e0cad9f006652ab1830"},{url:"img/operation.png",revision:"f79fc2715818d203b2f1e8fd52eeda57"},{url:"img/teaching.png",revision:"eed163eb6ad57c5eb7488e115e1b442b"},{url:"img/website.png",revision:"ae8cfb790e3faa53bd72f052debf26a7"},{url:"index.html",revision:"2855d98326e43f87447db08a36b1a846"}],{})}));
