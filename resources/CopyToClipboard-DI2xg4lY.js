import{s as r}from"./service-DfnCLkIR.js";import{_ as c,G as m,r as p,o as l,c as d,w as f,a as t,n as _}from"./index-CRoISors.js";const u={name:"CopyToClipboard",mixins:[r],props:{item:Object},components:{Generic:m},data:()=>({animate:!1}),methods:{copy(){navigator.clipboard.writeText(this.item.clipboard),this.animate=!0}}},C={class:"status"};function v(a,e,o,b,x,s){const n=p("Generic");return l(),d(n,{item:o.item},{indicator:f(()=>[t("div",C,[t("i",{class:_(["fa-regular fa-copy fa-xl",{scale:a.animate}]),onClick:e[0]||(e[0]=i=>s.copy()),onAnimationend:e[1]||(e[1]=i=>a.animate=!1)},null,34)])]),_:1},8,["item"])}const $=c(u,[["render",v],["__scopeId","data-v-3bcef209"]]);export{$ as default};
