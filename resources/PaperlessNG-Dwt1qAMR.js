import{s as l}from"./service-DfnCLkIR.js";import{_ as p,G as u,r as h,o as s,c as d,w as f,a as n,t as i,b as o,F as c,d as r,e as _}from"./index-CRoISors.js";const y={name:"Paperless",mixins:[l],props:{item:Object},components:{Generic:u},data:()=>({api:null}),created(){this.fetchStatus()},methods:{fetchStatus:async function(){if(this.item.subtitle!=null)return;if(!this.item.apikey){console.error("apikey is not present in config.yml for the paperless entry!");return}this.api=await this.fetch("/api/documents/",{headers:{Authorization:"Token "+this.item.apikey}}).catch(a=>console.log(a))}}},k={class:"title is-4"},b={class:"subtitle is-6"};function g(t,a,e,G,x,B){const m=h("Generic");return s(),d(m,{item:e.item},{content:f(()=>[n("p",k,i(e.item.name),1),n("p",b,[e.item.subtitle?(s(),o(c,{key:0},[r(i(e.item.subtitle),1)],64)):t.api?(s(),o(c,{key:1},[r(" happily storing "+i(t.api.count)+" documents ",1)],64)):_("",!0)])]),_:1},8,["item"])}const C=p(y,[["render",g]]);export{C as default};
