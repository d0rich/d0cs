import{a as u,b as i,e as d,f,r,o as p,h as m,i as k,u as l,t as _}from"./entry.7809e8f0.js";const h=(o,a,n=500)=>{{let e=n/100;const t=()=>{var s;(s=o.value)!=null&&s.isConnected?a():e>0&&(setTimeout(t,100),e--)};u(()=>{t()})}},v=["textContent"],y=i({__name:"MermaidDiagram",props:{code:null},setup(o){const a=o,{$mermaid:n}=d(),c=f(()=>atob(a.code)),e=r(null),t=r(!0);async function s(){t.value=!0,e.value&&n&&(await n.run({nodes:[e.value],suppressErrors:!1}),t.value=!1)}return h(e,()=>{s()}),(C,x)=>(p(),m("figure",{ref_key:"codeBlock",ref:e,class:k({"opacity-0":l(t)}),textContent:_(l(c))},null,10,v))}});export{y as default};
