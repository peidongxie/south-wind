import{f as _,t as g,g as m,h as f,o as h,c as v,a as t,i}from"./app.b2f5983c.js";import{_ as y}from"./plugin-vue_export-helper.5a098b48.js";const w=_({props:{img:{type:String,default:"/img/logo/logo-with-name.png"},text:{type:String,default:"\u6D3B\u52A8\u63A0\u5F71"},date:{type:String,default:""}},setup(n){const{img:s,text:o}=g(n),a=m(()=>{const u=s.value.lastIndexOf("."),p=s.value.substr(u);return o.value+p}),e=new Date,c=e.getFullYear(),l=e.getMonth()+1,r=e.getDate(),d=f(`${c}\u5E74${l}\u6708${r}\u65E5`);return{file:a,today:d}}}),x={class:"card"},$=["src","alt"],b={class:"info"},B={class:"info-top"},z={class:"info-bottom"},C=["href","download"],D=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:`
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
                `})],-1),S=[D];function E(n,s,o,a,e,c){return h(),v("div",x,[t("img",{class:"image",src:n.img,alt:n.text},null,8,$),t("div",b,[t("span",B,i(n.text),1),t("span",z,[t("time",null,i(n.date||n.today),1),t("button",null,[t("a",{href:n.img,download:n.file},S,8,C)])])])])}var j=y(w,[["render",E]]);export{j as default};
