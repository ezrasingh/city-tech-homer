import{s as l}from"./service-DfnCLkIR.js";import{_ as p,G as h,r as f,o as a,c as y,w as o,a as r,t as s,b as i,F as d,d as m,e as u,n as g}from"./index-CRoISors.js";const k={name:"PiHole",mixins:[l],props:{item:Object},components:{Generic:h},data:()=>({status:"",ads_percentage_today:0}),computed:{percentage:function(){return this.ads_percentage_today?this.ads_percentage_today.toFixed(1):""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){const t=this.item.apikey?`?summaryRaw&auth=${this.item.apikey}`:"",c=await this.fetch(`/api.php${t}`).catch(e=>console.log(e));this.status=c.status,this.ads_percentage_today=c.ads_percentage_today}}},b={class:"title is-4"},v={class:"subtitle is-6"};function w(t,c,e,x,B,n){const _=f("Generic");return a(),y(_,{item:e.item},{content:o(()=>[r("p",b,s(e.item.name),1),r("p",v,[e.item.subtitle?(a(),i(d,{key:0},[m(s(e.item.subtitle),1)],64)):n.percentage?(a(),i(d,{key:1},[m(s(n.percentage)+"% blocked ",1)],64)):u("",!0)])]),indicator:o(()=>[t.status?(a(),i("div",{key:0,class:g(["status",t.status])},s(t.status),3)):u("",!0)]),_:1},8,["item"])}const F=p(k,[["render",w],["__scopeId","data-v-60368cfc"]]);export{F as default};
