import{r as b,c as w,j as a,L as S,a as y,u as N,b as F}from"./index-Cma20K4D.js";import{S as k,j as L,F as A,a as C}from"./FilterErrorMessage-DJzjGPtp.js";import{u as T,a as _,b as I,c as E,F as M}from"./Footer-DCsKLbhk.js";import{u as $,a as q}from"./CollapsingPanel-CX2giZiU.js";import{P as z}from"./PokemonTypesDisplay-OwjCgf-g.js";const D=e=>{const{getUrlParam:s}=$(),p=s("generation")??"",t=s("type")??"",c=!!s("onlyStarred"),g=s("q")??"",{data:o,isLoading:j}=T(p),{data:r,isLoading:h}=_(t),{starredPokemonIds:f}=q(),l=b.useMemo(()=>{if(e)return o!=null&&o.length&&(r!=null&&r.length)?o.filter(i=>new Set(r.map(d=>d.id)).has(i.id)):o!=null&&o.length?o:r!=null&&r.length?e.filter(i=>new Set(r.map(d=>d.id)).has(i.id)):e},[e,o,r]),n=b.useMemo(()=>{if(l)return c?l==null?void 0:l.filter(i=>f.includes(i.id)):l},[l,c,f]);return{pokemonList:b.useMemo(()=>{if(n)return g.trim().length?n==null?void 0:n.filter(i=>i.name.includes(g.toLowerCase().trim())):n},[n,g]),isLoading:j||h,isFiltered:!!(p||t||c||g)}},v=b.memo(e=>{const s=w.c(20),{pokemon:p}=e,{id:t,name:c}=p,{data:g}=I(t),[o,j]=b.useState(!0),r=`/pokedex/pokemon/${t}`,h=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${t}.png`;let f;s[0]===Symbol.for("react.memo_cache_sentinel")?(f=()=>j(!1),s[0]=f):f=s[0];let l;s[1]!==c||s[2]!==h?(l=a.jsx("img",{src:h,alt:c,onLoad:f,className:"aspect-square w-full object-contain text-transparent"}),s[1]=c,s[2]=h,s[3]=l):l=s[3];let n;s[4]!==o?(n=o?a.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-sm bg-slate-200 transition-colors group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700",children:a.jsx(S,{size:8})}):null,s[4]=o,s[5]=n):n=s[5];let m;s[6]!==c?(m=a.jsx("h1",{className:"mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1",children:c}),s[6]=c,s[7]=m):m=s[7];const i=g==null?void 0:g.types;let d;s[8]!==i?(d=a.jsx(z,{types:i,className:"-mx-6 scale-75 gap-1 @min-[180px]/card:-mx-7 @min-[200px]/card:-mx-3 @min-[200px]/card:scale-90 @min-[200px]/card:gap-2 @min-[235px]/card:mx-0 @min-[235px]/card:scale-100"}),s[8]=i,s[9]=d):d=s[9];let u;s[10]!==m||s[11]!==d?(u=a.jsxs("div",{className:"p-2 md:p-4",children:[m,d]}),s[10]=m,s[11]=d,s[12]=u):u=s[12];let x;s[13]!==u||s[14]!==l||s[15]!==n?(x=a.jsxs("article",{className:"group @container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none",children:[l,n,u]}),s[13]=u,s[14]=l,s[15]=n,s[16]=x):x=s[16];let P;return s[17]!==x||s[18]!==r?(P=a.jsx(y,{to:r,children:x}),s[17]=x,s[18]=r,s[19]=P):P=s[19],P});v.displayName="PokemonCard";const B=()=>{const e=w.c(20),{data:s,isLoading:p}=E(),{pokemonList:t,isLoading:c,isFiltered:g}=D(s),o=N(R);let j,r;e[0]!==o?(j=()=>o(),r=[o],e[0]=o,e[1]=j,e[2]=r):(j=e[1],r=e[2]),b.useEffect(j,r);const[h,f]=b.useState(!1);F(h);let l,n;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=a.jsxs(k,{children:[a.jsx(k.Search,{itemType:"Pokémon"}),a.jsx(k.GenerationFilter,{}),a.jsx(k.TypeFilter,{}),a.jsx(k.OnlyStarredToggle,{}),a.jsx(k.ClearFilter,{})]}),n=a.jsx(C,{}),e[3]=l,e[4]=n):(l=e[3],n=e[4]);let m;e[5]!==c||e[6]!==p||e[7]!==t?(m=!p&&!c&&(t!=null&&t.length)?a.jsx(L,{totalCount:t.length,itemContent:x=>a.jsx(v,{pokemon:t[x]},t[x].name),useWindowScroll:!0,increaseViewportBy:{top:1e3,bottom:1e3},components:{Footer:G},readyStateChanged:x=>f(x),className:"w-full",listClassName:"grid grid-cols-2 gap-2 @min-[500px]/grid:gap-4 @min-[600px]/grid:grid-cols-3 @min-[800px]/grid:grid-cols-4 @min-[1000px]/grid:grid-cols-5 @min-[1200px]/grid:grid-cols-6"}):null,e[5]=c,e[6]=p,e[7]=t,e[8]=m):m=e[8];let i;e[9]!==h||e[10]!==c||e[11]!==p?(i=(p||c||!h)&&a.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900",children:a.jsx(S,{size:24,displaysText:!0})}),e[9]=h,e[10]=c,e[11]=p,e[12]=i):i=e[12];let d;e[13]!==g||e[14]!==(t==null?void 0:t.length)?(d=!(t!=null&&t.length)&&g&&a.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:a.jsx(A,{itemType:"Pokémon"})}),e[13]=g,e[14]=t==null?void 0:t.length,e[15]=d):d=e[15];let u;return e[16]!==m||e[17]!==i||e[18]!==d?(u=a.jsxs("div",{className:"relative pt-18 sm:pt-24",children:[l,n,a.jsxs("section",{className:"@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:pl-0",children:[m,i,d]})]}),e[16]=m,e[17]=i,e[18]=d,e[19]=u):u=e[19],u};function R(e){return e.resetPokemonDetailsPanels}function G(){return a.jsx(M,{className:"pb-4"})}export{B as default};
