import{r as M,c as y,j as a,L as B,d as O,E as U}from"./index-C6ruQNyi.js";import{C as q,g as S,d as H,F as J}from"./Footer-p-6thXzT.js";import{c as w,v as P,B as K,G as Q}from"./versionGroups-B8szkBBU.js";import{t as z,a as V,M as X}from"./MoveInfoDisplay-JrcWonRZ.js";import"./MoveCategoryDisplay-C2ORXpR3.js";const G=M.memo(e=>{const t=y.c(2),{type:s}=e;let l;return t[0]!==s?(l=s?a.jsx("div",{className:"my-2 inline-block h-34.25 min-w-33",style:{backgroundImage:`url(${V})`,backgroundPosition:`${z[s].sprite.x}px ${z[s].sprite.y}px`}}):a.jsx("div",{className:"my-2 inline-block h-34.25 w-33",children:a.jsx(B,{size:12})}),t[0]=s,t[1]=l):l=t[1],l});G.displayName="MoveDiscImage";const W=M.memo(e=>{const t=y.c(2),{move:s}=e;let l;return t[0]!==s?(l=a.jsx("div",{className:"mt-2 h-20 w-34 rounded-lg bg-slate-200 py-1 pl-2 shadow transition-[background-color] dark:bg-slate-800 dark:shadow-none",children:s?a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["Power:"," "]}),s.power??"-"]}),a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["Accuracy:"," "]}),s.accuracy?`${s.accuracy}%`:"-"]}),a.jsxs("p",{children:[a.jsxs("span",{className:"font-bold text-slate-600 dark:text-slate-400",children:["PP:"," "]}),s.pp]})]}):a.jsx("p",{children:"Loading..."})}),t[0]=s,t[1]=l):l=t[1],l});W.displayName="MoveStats";const C=M.memo(e=>{var n;const t=y.c(2),{effect:s}=e,l=s===void 0?"Loading...":((n=s[0])==null?void 0:n.short_effect)??"There seems to be no additional information available about this move.";let r;return t[0]!==l?(r=a.jsx("p",{className:"mb-2",children:l}),t[0]=l,t[1]=r):r=t[1],r});C.displayName="MoveEffect";const R=M.memo(e=>{const t=y.c(4),{target:s}=e;let l;t[0]!==s?(l=s?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"font-bold text-slate-700 transition-[color] dark:text-slate-300",children:"Target:"}),` ${w(s.replace("pokemon","pokémon"))}`]}):"Loading...",t[0]=s,t[1]=l):l=t[1];let r;return t[2]!==l?(r=a.jsx("p",{className:"my-2",children:l}),t[2]=l,t[3]=r):r=t[3],r});R.displayName="MoveTarget";const Y=new Set(["gold-silver","crystal"]),Z=new Set(["pound","karate-chop","vice-grip","swords-dance","hydro-pump","surf","drill-peck","submission","strength","growth","razor-leaf","double-team","minimize","focus-energy","crabhammer","slash","aeroblast","encore","cross-chop","mirror-coat","extreme-speed"]),ee=(e,t)=>{var s;return Y.has(((s=e.version_group)==null?void 0:s.name)??"")&&Z.has(t)?e.flavor_text.replace(/\n/g,""):e.flavor_text},A=M.memo(e=>{var d,u,x;const t=y.c(12),{textEntries:s,moveName:l}=e;let r,n,i;if(t[0]!==l||t[1]!==s){const o=s==null?void 0:s.filter(se).filter(te).sort(ae);t[5]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx("h2",{className:"mb-1 text-lg font-semibold",children:"Descriptions:"}),t[5]=i):i=t[5],r="rounded-xl bg-slate-200 transition-[background] dark:bg-slate-800",n=o!=null&&o.length&&l?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:`px-2 pt-2 sm:px-4 ${o.length>1?"-mb-2":"pb-2"}`,children:[a.jsxs("span",{className:"font-bold text-slate-600 transition-[color] dark:text-slate-400",children:[((u=P[((d=o[0].version_group)==null?void 0:d.name)??""])==null?void 0:u.label)??w(((x=o[0].version_group)==null?void 0:x.name)??""),": "]}),o[0].flavor_text]}),o.length>1&&a.jsx(q,{label:"More Descriptions",children:a.jsx("ul",{children:o.slice(1).map(m=>{var p,f,h,j;return a.jsxs("li",{className:"p-2 even:bg-slate-500/15 sm:px-4",children:[a.jsxs("span",{className:"font-bold text-slate-600 transition-[color] dark:text-slate-400",children:[((f=P[((p=m.version_group)==null?void 0:p.name)??""])==null?void 0:f.label)??w(((h=m.version_group)==null?void 0:h.name)??""),": "]}),ee(m,l)]},(j=m.version_group)==null?void 0:j.name)})})})]}):a.jsx("div",{className:"h-27",children:a.jsx(B,{size:16})}),t[0]=l,t[1]=s,t[2]=r,t[3]=n,t[4]=i}else r=t[2],n=t[3],i=t[4];let c;t[6]!==r||t[7]!==n?(c=a.jsx("div",{className:r,children:n}),t[6]=r,t[7]=n,t[8]=c):c=t[8];let g;return t[9]!==i||t[10]!==c?(g=a.jsxs(a.Fragment,{children:[i,c]}),t[9]=i,t[10]=c,t[11]=g):g=t[11],g});A.displayName="FlavorTextEntries";function se(e){return e.language.name==="en"}function te(e){return e.flavor_text!==`This move can’t be used.
It’s recommended that this move is forgotten.
Once forgotten, this move can’t be remembered.`}function ae(e,t){var s,l;return(S((s=t.version_group)==null?void 0:s.url)??0)-(S((l=e.version_group)==null?void 0:l.url)??0)}const ce=()=>{const e=y.c(41),{id:t}=O(),{data:s,error:l}=H(Number(t));if(l){let T;return e[0]!==l.message?(T=a.jsx(U,{errors:[l.message]}),e[0]=l.message,e[1]=T):T=e[1],T}const r=`Pokédex - ${w((s==null?void 0:s.name)??"Loading")}`;let n;e[2]!==r?(n=a.jsx("title",{children:r}),e[2]=r,e[3]=n):n=e[3];let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx("div",{className:"pointer-events-none sticky top-4 z-20 px-2 sm:fixed sm:top-28 sm:px-4",children:a.jsx(K,{})}),e[4]=i):i=e[4];let c;e[5]===Symbol.for("react.memo_cache_sentinel")?(c=a.jsx("p",{className:"mb-4 text-center text-xl font-semibold",children:"This page is currently under construction"}),e[5]=c):c=e[5];const g=s==null?void 0:s.type.name;let d;e[6]!==g?(d=a.jsx(G,{type:g}),e[6]=g,e[7]=d):d=e[7];const u=(s==null?void 0:s.name)??"Loading...";let x;e[8]!==u?(x=w(u),e[8]=u,e[9]=x):x=e[9];let o;e[10]!==x?(o=a.jsx("h1",{className:"overflow-scroll pb-1 text-2xl font-bold text-nowrap",children:x}),e[10]=x,e[11]=o):o=e[11];let m,p;e[12]!==s?(p=a.jsx(X,{move:s}),m=a.jsx(W,{move:s}),e[12]=s,e[13]=m,e[14]=p):(m=e[13],p=e[14]);let f;e[15]!==m||e[16]!==o||e[17]!==p?(f=a.jsxs("div",{className:"max-w-[calc(100vw-148px)]",children:[o,p,m]}),e[15]=m,e[16]=o,e[17]=p,e[18]=f):f=e[18];let h;e[19]!==f||e[20]!==d?(h=a.jsxs("div",{className:"mb-4 flex gap-2",children:[d,f]}),e[19]=f,e[20]=d,e[21]=h):h=e[21];const j=s==null?void 0:s.effect_entries;let b;e[22]!==j?(b=a.jsx(C,{effect:j}),e[22]=j,e[23]=b):b=e[23];const D=s==null?void 0:s.target.name;let v;e[24]!==D?(v=a.jsx(R,{target:D}),e[24]=D,e[25]=v):v=e[25];const E=s==null?void 0:s.generation.name;let N;e[26]!==E?(N=a.jsx(Q,{generation:E,itemType:"move"}),e[26]=E,e[27]=N):N=e[27];const I=s==null?void 0:s.flavor_text_entries,L=s==null?void 0:s.name;let k;e[28]!==I||e[29]!==L?(k=a.jsx(A,{textEntries:I,moveName:L}),e[28]=I,e[29]=L,e[30]=k):k=e[30];let $;e[31]===Symbol.for("react.memo_cache_sentinel")?($=a.jsx(J,{}),e[31]=$):$=e[31];let _;e[32]!==h||e[33]!==b||e[34]!==v||e[35]!==N||e[36]!==k?(_=a.jsxs("div",{className:"mx-auto max-w-3xl p-4 max-sm:px-2 sm:pt-42 md:px-0 lg:pt-28",children:[c,h,b,v,N,k,$]}),e[32]=h,e[33]=b,e[34]=v,e[35]=N,e[36]=k,e[37]=_):_=e[37];let F;return e[38]!==n||e[39]!==_?(F=a.jsxs(a.Fragment,{children:[n,i,_]}),e[38]=n,e[39]=_,e[40]=F):F=e[40],F};export{ce as default};
