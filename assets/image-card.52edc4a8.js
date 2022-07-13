import{_ as p,f as g,p as m,j as f,I as h,o as v,c as y,a as t,t as i}from"./app.261fa341.js";const w=g({props:{img:{type:String,default:"/img/logo/logo-with-name.png"},text:{type:String,default:"\u6D3B\u52A8\u63A0\u5F71"},date:{type:String,default:""}},setup(n){const{img:s,text:o}=m(n),a=f(()=>{const u=s.value.lastIndexOf("."),_=s.value.substr(u);return o.value+_}),e=new Date,c=e.getFullYear(),l=e.getMonth()+1,r=e.getDate(),d=h(`${c}\u5E74${l}\u6708${r}\u65E5`);return{file:a,today:d}}}),$={class:"card"},x=["src","alt"],B={class:"info"},z={class:"info-top"},C={class:"info-bottom"},D=["href","download"],S=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:`
                  M 216 0
                  h 80
                  c 13.3 0 24 10.7 24 24
                  v 168
                  h 87.7
                  c 17.8 0 26.7 21.5 14.1 34.1
                  L 269.7 378.3
                  c -7.5 7.5 -19.8 7.5 -27.3 0
                  L 90.1 226.1
                  c -12.6 -12.6 -3.7 -34.1 14.1 -34.1
                  H 192
                  V 24
                  c 0 -13.3 10.7 -24 24 -24
                  z
                  m 296 376
                  v 112
                  c 0 13.3 -10.7 24 -24 24
                  H 24
                  c -13.3 0 -24 -10.7 -24 -24
                  V 376
                  c 0 -13.3 10.7 -24 24 -24
                  h 146.7
                  l 49 49
                  c 20.1 20.1 52.5 20.1 72.6 0
                  l 49 -49
                  H 488
                  c 13.3 0 24 10.7 24 24
                  z
                  m -124 88
                  c 0 -11 -9 -20 -20 -20
                  s -20 9 -20 20
                  s 9 20 20 20
                  s 20 -9 20 -20
                  z
                  m 64 0
                  c 0 -11 -9 -20 -20 -20
                  s -20 9 -20 20
                  s 9 20 20 20
                  s 20 -9 20 -20
                  z
                `})],-1),b=[S];function E(n,s,o,a,e,c){return v(),y("div",$,[t("img",{class:"image",src:n.img,alt:n.text},null,8,x),t("div",B,[t("span",z,i(n.text),1),t("span",C,[t("time",null,i(n.date||n.today),1),t("button",null,[t("a",{href:n.img,download:n.file},b,8,D)])])])])}var V=p(w,[["render",E],["__file","image-card.vue"]]);export{V as default};
