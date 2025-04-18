import{r as w,c as k,j as a,L as P,i as O,E as U}from"./index-D_n5TqB3.js";import{h as E,C as q,f as H,F as J}from"./Footer-BFASdXxl.js";import{c as y,v as B,B as K,G as Q}from"./versionGroups-BItAa00C.js";import{t as z,a as V,M as X}from"./MoveInfoDisplay-B5trh3ri.js";import"./MoveCategoryDisplay-36lbI5LV.js";const G=w.memo(e=>{const t=k.c(2),{type:s}=e;let o;return t[0]!==s?(o=s?a.jsx("div",{className:"my-2 inline-block h-34.25 min-w-33",style:{backgroundImage:`url(${V})`,backgroundPosition:`${z[s].sprite.x}px ${z[s].sprite.y}px`}}):a.jsx("div",{className:"my-2 inline-block h-34.25 w-33",children:a.jsx(P,{size:12})}),t[0]=s,t[1]=o):o=t[1],o});G.displayName="MoveDiscImage";const W=w.memo(e=>{const t=k.c(2),{move:s}=e;let o;return t[0]!==s?(o=a.jsx("div",{className:"mt-2 h-20 w-34 rounded-lg bg-slate-200 py-1 pl-2 shadow transition-[background-color] dark:bg-slate-800 dark:shadow-none",children:s?a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["Power:"," "]}),s.power??"-"]}),a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["Accuracy:"," "]}),s.accuracy?`${s.accuracy}%`:"-"]}),a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["PP:"," "]}),s.pp]})]}):a.jsx("p",{children:"Loading..."})}),t[0]=s,t[1]=o):o=t[1],o});W.displayName="MoveStats";const C=w.memo(e=>{var r;const t=k.c(2),{effect:s}=e,o=s===void 0?"Loading...":((r=s[0])==null?void 0:r.short_effect)??"There seems to be no additional information available about this move.";let l;return t[0]!==o?(l=a.jsx("p",{className:"mb-2",children:o}),t[0]=o,t[1]=l):l=t[1],l});C.displayName="MoveEffect";const R=w.memo(e=>{const t=k.c(4),{target:s}=e;let o;t[0]!==s?(o=s?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"font-bold text-slate-700 transition-[color] dark:text-slate-300",children:"Target:"}),` ${y(s.replace("pokemon","pokémon"))}`]}):"Loading...",t[0]=s,t[1]=o):o=t[1];let l;return t[2]!==o?(l=a.jsx("p",{className:"my-2",children:o}),t[2]=o,t[3]=l):l=t[3],l});R.displayName="MoveTarget";const Y=new Set(["gold-silver","crystal"]),Z=new Set(["pound","karate-chop","vice-grip","swords-dance","hydro-pump","surf","drill-peck","submission","strength","growth","razor-leaf","double-team","minimize","focus-energy","crabhammer","slash","aeroblast","encore","cross-chop","mirror-coat","extreme-speed"]),ee=(e,t)=>e==null?void 0:e.filter(s=>s.language.name==="en").filter(s=>s.flavor_text!==`This move can’t be used.
It’s recommended that this move is forgotten.
Once forgotten, this move can’t be remembered.`).sort((s,o)=>{var l,r;return(E((l=o.version_group)==null?void 0:l.url)??0)-(E((r=s.version_group)==null?void 0:r.url)??0)}).map(s=>{var o;return{...s,flavor_text:Y.has(((o=s.version_group)==null?void 0:o.name)??"")&&t&&Z.has(t)?s.flavor_text.replace(/\n/g,""):s.flavor_text}}),A=w.memo(e=>{var m,p,d;const t=k.c(12),{textEntries:s,moveName:o}=e;let l,r,i;if(t[0]!==o||t[1]!==s){const n=ee(s,o);t[5]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx("h2",{className:"mb-1 text-lg font-semibold",children:"Descriptions:"}),t[5]=i):i=t[5],l="rounded-xl bg-slate-200 transition-[background] dark:bg-slate-800",r=n!=null&&n.length&&o?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:`px-2 pt-2 sm:px-4 ${n.length>1?"-mb-2":"pb-2"}`,children:[a.jsxs("span",{className:"font-bold text-slate-600 transition-[color] dark:text-slate-400",children:[((p=B[((m=n[0].version_group)==null?void 0:m.name)??""])==null?void 0:p.label)??y(((d=n[0].version_group)==null?void 0:d.name)??""),": "]}),n[0].flavor_text]}),n.length>1&&a.jsx(q,{label:"More Descriptions",children:a.jsx("ul",{children:n.slice(1).map(se)})})]}):s===void 0?a.jsx("div",{className:"h-27",children:a.jsx(P,{size:16})}):a.jsx("p",{className:"p-2 sm:px-4",children:"This move doesn't seem to have any descriptions."}),t[0]=o,t[1]=s,t[2]=l,t[3]=r,t[4]=i}else l=t[2],r=t[3],i=t[4];let c;t[6]!==l||t[7]!==r?(c=a.jsx("div",{className:l,children:r}),t[6]=l,t[7]=r,t[8]=c):c=t[8];let x;return t[9]!==i||t[10]!==c?(x=a.jsxs(a.Fragment,{children:[i,c]}),t[9]=i,t[10]=c,t[11]=x):x=t[11],x});A.displayName="FlavorTextEntries";function se(e){var t,s,o,l;return a.jsxs("li",{className:"p-2 even:bg-slate-500/15 sm:px-4",children:[a.jsxs("span",{className:"font-bold text-slate-600 transition-[color] dark:text-slate-400",children:[((s=B[((t=e.version_group)==null?void 0:t.name)??""])==null?void 0:s.label)??y(((o=e.version_group)==null?void 0:o.name)??""),": "]}),e.flavor_text]},(l=e.version_group)==null?void 0:l.name)}const ne=()=>{const e=k.c(41),t=Number(O.useLoaderData().moveId),{data:s,error:o}=H(t);if(o){let T;return e[0]!==o.message?(T=a.jsx(U,{errors:[o.message]}),e[0]=o.message,e[1]=T):T=e[1],T}const l=`Pokédex - ${y((s==null?void 0:s.name)??"Loading")}`;let r;e[2]!==l?(r=a.jsx("title",{children:l}),e[2]=l,e[3]=r):r=e[3];let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx("div",{className:"pointer-events-none sticky top-4 z-20 px-2 sm:fixed sm:top-28 sm:px-4",children:a.jsx(K,{})}),e[4]=i):i=e[4];let c;e[5]===Symbol.for("react.memo_cache_sentinel")?(c=a.jsx("p",{className:"mb-4 text-center text-xl font-semibold",children:"This page is currently under construction"}),e[5]=c):c=e[5];const x=s==null?void 0:s.type.name;let m;e[6]!==x?(m=a.jsx(G,{type:x}),e[6]=x,e[7]=m):m=e[7];const p=(s==null?void 0:s.name)??"Loading...";let d;e[8]!==p?(d=y(p),e[8]=p,e[9]=d):d=e[9];let n;e[10]!==d?(n=a.jsx("h1",{className:"overflow-scroll pb-1 text-2xl font-bold text-nowrap",children:d}),e[10]=d,e[11]=n):n=e[11];let f,h;e[12]!==s?(h=a.jsx(X,{move:s}),f=a.jsx(W,{move:s}),e[12]=s,e[13]=f,e[14]=h):(f=e[13],h=e[14]);let g;e[15]!==f||e[16]!==n||e[17]!==h?(g=a.jsxs("div",{className:"max-w-[calc(100vw-148px)]",children:[n,h,f]}),e[15]=f,e[16]=n,e[17]=h,e[18]=g):g=e[18];let u;e[19]!==g||e[20]!==m?(u=a.jsxs("div",{className:"mb-4 flex gap-2",children:[m,g]}),e[19]=g,e[20]=m,e[21]=u):u=e[21];const F=s==null?void 0:s.effect_entries;let j;e[22]!==F?(j=a.jsx(C,{effect:F}),e[22]=F,e[23]=j):j=e[23];const I=s==null?void 0:s.target.name;let v;e[24]!==I?(v=a.jsx(R,{target:I}),e[24]=I,e[25]=v):v=e[25];const S=s==null?void 0:s.generation.name;let b;e[26]!==S?(b=a.jsx(Q,{generation:S,itemType:"move"}),e[26]=S,e[27]=b):b=e[27];const D=s==null?void 0:s.flavor_text_entries,L=s==null?void 0:s.name;let N;e[28]!==D||e[29]!==L?(N=a.jsx(A,{textEntries:D,moveName:L}),e[28]=D,e[29]=L,e[30]=N):N=e[30];let M;e[31]===Symbol.for("react.memo_cache_sentinel")?(M=a.jsx(J,{}),e[31]=M):M=e[31];let _;e[32]!==u||e[33]!==j||e[34]!==v||e[35]!==b||e[36]!==N?(_=a.jsxs("div",{className:"mx-auto max-w-3xl p-4 max-sm:px-2 sm:pt-42 md:px-0 lg:pt-28",children:[c,u,j,v,b,N,M]}),e[32]=u,e[33]=j,e[34]=v,e[35]=b,e[36]=N,e[37]=_):_=e[37];let $;return e[38]!==r||e[39]!==_?($=a.jsxs(a.Fragment,{children:[r,i,_]}),e[38]=r,e[39]=_,e[40]=$):$=e[40],$};export{ne as component};
