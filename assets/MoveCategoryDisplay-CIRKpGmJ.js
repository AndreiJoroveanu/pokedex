import{c as b,j as r}from"./index-B7rC9mMS.js";const d={physical:{label:"Physical",color:"#eb5628",sprite:{x:0}},special:{label:"Special",color:"#4a68d3",sprite:{x:-50}},status:{label:"Status",color:"#828282",sprite:{x:-100}}},g="/pokedex/move-categories.webp",y=f=>{var x;const e=b.c(16),{category:s,className:u}=f,n=(x=d[s])==null?void 0:x.color;let t;e[0]!==n?(t={background:n},e[0]=n,e[1]=t):t=e[1];const m=`flex h-6 w-26 items-center rounded-full ${u}`;let l;e[2]!==m?(l=m.trim(),e[2]=m,e[3]=l):l=e[3];const p=`${d[s].sprite.x}px 0`;let o;e[4]!==p?(o=r.jsx("div",{className:"-ml-2.5 inline-block h-10 min-w-12.5 scale-40",style:{backgroundImage:`url(${g})`,backgroundPosition:p}}),e[4]=p,e[5]=o):o=e[5];let c;e[6]!==s?(c=s.toUpperCase(),e[6]=s,e[7]=c):c=e[7];let i;e[8]!==c?(i=r.jsx("div",{className:"-ml-5 flex w-full justify-center",children:r.jsx("p",{className:"scale-x-90 font-semibold text-white",children:c})}),e[8]=c,e[9]=i):i=e[9];let a;return e[10]!==s||e[11]!==t||e[12]!==l||e[13]!==o||e[14]!==i?(a=r.jsxs("div",{style:t,className:l,children:[o,i]},s),e[10]=s,e[11]=t,e[12]=l,e[13]=o,e[14]=i,e[15]=a):a=e[15],a};export{y as M};
