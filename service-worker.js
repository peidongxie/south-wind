if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>l(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4b57513996a32e1360f287cd18210d5a"},{url:"assets/404.37ab2562.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.b9bcf930.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/biology.html.d7c4ecdb.js",revision:null},{url:"assets/biology.html.d844b966.js",revision:null},{url:"assets/commonweal.html.4bc40034.js",revision:null},{url:"assets/commonweal.html.6776f7f9.js",revision:null},{url:"assets/computer.html.02c73729.js",revision:null},{url:"assets/computer.html.e9740593.js",revision:null},{url:"assets/debate.html.2e838a75.js",revision:null},{url:"assets/debate.html.8e903a35.js",revision:null},{url:"assets/earth.html.666c3d43.js",revision:null},{url:"assets/earth.html.c5ffdaeb.js",revision:null},{url:"assets/economics.html.f49366ad.js",revision:null},{url:"assets/economics.html.f5fbedf6.js",revision:null},{url:"assets/entrepreneurship.html.18aa2b0c.js",revision:null},{url:"assets/entrepreneurship.html.c1246c18.js",revision:null},{url:"assets/game.html.25ae70e5.js",revision:null},{url:"assets/game.html.c6ab81b6.js",revision:null},{url:"assets/image-card.5815ee53.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.242e0ba4.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.70c0e54a.js",revision:null},{url:"assets/index.html.9b6696ac.js",revision:null},{url:"assets/index.html.b92ed15b.js",revision:null},{url:"assets/index.html.fc8e2d05.js",revision:null},{url:"assets/korean.html.02d7536a.js",revision:null},{url:"assets/korean.html.6fe09ed3.js",revision:null},{url:"assets/Layout.8a9733e1.js",revision:null},{url:"assets/math.html.0b28d1fc.js",revision:null},{url:"assets/math.html.b9f26365.js",revision:null},{url:"assets/physics.html.237da51a.js",revision:null},{url:"assets/physics.html.6107c826.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/practicality.html.6910d2aa.js",revision:null},{url:"assets/practicality.html.94da23c8.js",revision:null},{url:"assets/read-and-write.html.08b645fb.js",revision:null},{url:"assets/read-and-write.html.8925c7b7.js",revision:null},{url:"assets/russia.html.08dd5dc2.js",revision:null},{url:"assets/russia.html.1227d654.js",revision:null},{url:"assets/science-fiction.html.29bfaaa6.js",revision:null},{url:"assets/science-fiction.html.c85dbab5.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.f1bbecb3.css",revision:null},{url:"assets/summary.html.08fb736e.js",revision:null},{url:"assets/summary.html.49e6f8f6.js",revision:null},{url:"assets/team.html.31f7af36.js",revision:null},{url:"assets/team.html.5bc6546a.js",revision:null},{url:"courses/biology.html",revision:"7a70999eda07e15c9958f6df16deafd0"},{url:"courses/computer.html",revision:"dde47905eb11af3604e80527f5914ac6"},{url:"courses/debate.html",revision:"cfa1ae64c85bf42128066c5e2ca127aa"},{url:"courses/earth.html",revision:"28e370119c80e70e9f36110e5b9bada5"},{url:"courses/economics.html",revision:"69c68a9c098e0e1793457163cf906419"},{url:"courses/game.html",revision:"ad46ac049802b7c9f7206253f2732b11"},{url:"courses/index.html",revision:"8fc3c1c7a1674190c09697ed54aa5923"},{url:"courses/korean.html",revision:"801cee7fa92f01467b7db2ed3039c9eb"},{url:"courses/math.html",revision:"8034212e1ea5240bb31303a3707ca732"},{url:"courses/physics.html",revision:"11fa44e25ee126fd363a4c44581471ec"},{url:"courses/read-and-write.html",revision:"02747f23b14c055990f3f2110011c961"},{url:"courses/russia.html",revision:"926b13ba4e43c41023c6cbc73cff7b70"},{url:"courses/science-fiction.html",revision:"7eeadf22520e5273fcf4dd326a947d64"},{url:"details/commonweal.html",revision:"acb494e12e769470364359f9e1c389f4"},{url:"details/entrepreneurship.html",revision:"dd1308eb5f3889733e80891afe908f1d"},{url:"details/practicality.html",revision:"83f580cff3bd094c4b0d8606fdd237c9"},{url:"details/summary.html",revision:"a5fb157cffc418f30578eef0eb71caaf"},{url:"details/team.html",revision:"8e2ce889613edd3f5b1f264627546362"},{url:"glimpses/index.html",revision:"526623d40f6dd953430c60aa5ed9af52"},{url:"img/answer.jpg",revision:"619025c6bb73fe1fb4bd490d2101b8f7"},{url:"img/architecture.png",revision:"620d009fcead556914d64640adf7580e"},{url:"img/ceremony.jpg",revision:"269b0154d264349947c6c7d422683c2d"},{url:"img/class.jpg",revision:"7b23b5e3976f035efab90fda6687e4d2"},{url:"img/internet.png",revision:"d3a54d7a2506ff890737b5685a64563c"},{url:"img/logo/logo-with-name-128.png",revision:"f8ae6273c87ab9abf5bcb6edb511fad2"},{url:"img/logo/logo-with-name-192.png",revision:"64102547c61ff7f8b040ff8a7c5efd5e"},{url:"img/logo/logo-with-name-256.png",revision:"ccb0ac0e309d89d98d415753e9affe2d"},{url:"img/logo/logo-with-name-32.png",revision:"c6426761e9024b91397591c3d0a7c90a"},{url:"img/logo/logo-with-name-48.png",revision:"78e77a759e3ff5c7d03a2679d7ca7a20"},{url:"img/logo/logo-with-name-64.png",revision:"98ca2745aa8c7ec00aad9b59c2672a89"},{url:"img/logo/logo-with-name-96.png",revision:"ca2ff1304f165c2df17fb50428fd005b"},{url:"img/logo/logo-with-name.png",revision:"d4300dd8106566579e79e6e44ab8fb3f"},{url:"img/logo/logo-without-name-128.png",revision:"18533bb6617b02ae32c47ee27a1e09fb"},{url:"img/logo/logo-without-name-192.png",revision:"2495bef175d2a74a863e56edd0eb9a53"},{url:"img/logo/logo-without-name-256.png",revision:"049d2f52149b716c5ad8b8c309769539"},{url:"img/logo/logo-without-name-32.png",revision:"49de81f745097a8260468f7ef2f3a422"},{url:"img/logo/logo-without-name-48.png",revision:"f7c48fc131d89968c6188644acd7af8c"},{url:"img/logo/logo-without-name-64.png",revision:"2cfb40fb6b811673d88023888194adc1"},{url:"img/logo/logo-without-name-96.png",revision:"09a5f0bdea418a8b87614e7080b78a2a"},{url:"img/logo/logo-without-name.png",revision:"d19b42cc849b4891ee7d412ac929c4b2"},{url:"img/mode.png",revision:"22c2a91061876e0cad9f006652ab1830"},{url:"img/operation.png",revision:"f79fc2715818d203b2f1e8fd52eeda57"},{url:"img/teaching.png",revision:"eed163eb6ad57c5eb7488e115e1b442b"},{url:"img/website.png",revision:"ae8cfb790e3faa53bd72f052debf26a7"},{url:"index.html",revision:"12dcb29e8c7283ce8d9b51e1f375cdb8"}],{})}));
