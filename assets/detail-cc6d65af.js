import{_ as p,a as d,c as _,d as t,r as o,o as v,u as f,l as g,i as y,t as x,j as u,k as m}from"./index-4bb37b70.js";import{i as D}from"./index-dde69195.js";const M="/assets/youku-e65ba4f0.mp4",w={name:"VideoPlayer"},$=t("video",{src:M,autoplay:"",loop:"",muted:"",controls:"",style:{width:"100%",height:"auto"}},null,-1),k=[$];function b(h,i,n,c,l,e){return d(),_("div",null,k)}const B=p(w,[["render",b]]),A={__name:"YKBJ",setup(h){const i=o(null);let n=null;const c=()=>{o(l()),o([11,4,7,8,13]),o([9,7,7,13,15]);const e=[];for(let s=0;s<5;++s)e.push(Math.round(Math.random()*200));const a={xAxis:{max:"dataMax"},yAxis:{type:"category",data:["A","B","C","D","E"],inverse:!0,animationDuration:300,animationDurationUpdate:300,max:2},series:[{realtimeSort:!0,name:"X",type:"bar",data:e,label:{show:!0,position:"right",valueAnimation:!0}}],legend:{show:!0},animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"};function r(){for(var s=0;s<e.length;++s)Math.random()>.9?e[s]+=Math.round(Math.random()*2e3):e[s]+=Math.round(Math.random()*200);n.setOption({series:[{type:"bar",data:e}]})}setTimeout(function(){r()},0),setInterval(function(){r()},3e3),n=D(i.value),n.setOption(a)},l=()=>{let e=new Date,a=[],r=5;for(;r--;)a.unshift(e.toLocaleTimeString().replace(/^\D*/,"")),e=new Date(+e-2e3);return a};return v(()=>{c()}),(e,a)=>(d(),_("div",{id:"main",style:{width:"100%",height:"100%"},ref_key:"main",ref:i},null,512))}};const C={class:"home-page"},E={class:"title"},S={class:"main-container"},U={class:"left-container fl"},V=m('<div class="chart left-1"><div class="title title-2">公路油量</div><div class="content left-1-content"></div></div><div class="chart left-2"><div class="title title-2">损耗管理 </div><div class="content left-2-content"></div></div>',2),I={class:"chart left-3"},N=t("div",{class:"title title-2"},"油库报警",-1),T={class:"content left-3-content"},O=t("div",{class:"chart left-4"},[t("div",{class:"title title-2"},"智能巡检机器人"),t("div",{class:"content left-4-content"})],-1),R=t("div",{class:"title title-2"},"一次物流调度监控",-1),Y=t("div",{class:"content center-container-bg"},null,-1),j={class:"right-container fl"},J=m('<div class="chart right-1"><div class="title title-2">液位监控</div><div class="content right-1-content"></div></div><div class="chart right-2"><div class="title title-2">库存管理</div><div class="content right-2-content"></div></div>',2),K={class:"chart right-3"},L=t("div",{class:"title title-2"},"视频监控",-1),P={class:"content right-3-content"},z={__name:"detail",setup(h){const i=f(),n=g();console.log(i.params.id,"detail-route");const c=o(i.params.id);v(()=>{}),y(()=>{});const l=()=>{n.replace("/")};return(e,a)=>(d(),_("div",C,[t("div",E,x(c.value)+"号油库详情页面 ",1),t("div",S,[t("div",U,[V,t("div",I,[N,t("div",T,[u(A)])]),O]),t("div",{class:"center-container fl"},[R,Y,t("div",{class:"return-bg title",onClick:l},"返回")]),t("div",j,[J,t("div",K,[L,t("div",P,[u(B)])])])])]))}};export{z as default};
