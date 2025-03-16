import{r as b,c as S,j as a,L as k,a as y,u as F,b as N}from"./index-Bn6Ucw-_.js";import{S as P,j as A,F as C,a as T}from"./FilterErrorMessage-BsJSv0tE.js";import{u as _,a as I,b as L,c as E,F as M}from"./Footer-tp7wbaa2.js";import{u as $,a as q}from"./CollapsingPanel-DX5mlpro.js";import{P as z}from"./PokemonTypesDisplay-sgxKy4UN.js";const D=e=>{const{getUrlParam:s}=$(),u=s("generation")??"",t=s("type")??"",c=!!s("onlyStarred"),g=s("q")??"",{data:r,isLoading:j}=_(u),{data:l,isLoading:h}=I(t),{starredPokemonIds:f}=q(),o=b.useMemo(()=>{if(e)return r!=null&&r.length&&(l!=null&&l.length)?r.filter(i=>new Set(l.map(d=>d.id)).has(i.id)):r!=null&&r.length?r:l!=null&&l.length?e.filter(i=>new Set(l.map(d=>d.id)).has(i.id)):e},[e,r,l]),n=b.useMemo(()=>{if(o)return c?o==null?void 0:o.filter(i=>f.includes(i.id)):o},[o,c,f]);return{pokemonList:b.useMemo(()=>{if(n)return g.trim().length?n==null?void 0:n.filter(i=>i.name.includes(g.toLowerCase().trim())):n},[n,g]),isLoading:j||h,isFiltered:!!(u||t||c||g)}},v=b.memo(e=>{const s=S.c(20),{pokemon:u}=e,{id:t,name:c}=u,{data:g}=L(t),[r,j]=b.useState(!0),l=`/pokedex/pokemon/${t}`,h=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${t}.png`;let f;s[0]===Symbol.for("react.memo_cache_sentinel")?(f=()=>j(!1),s[0]=f):f=s[0];let o;s[1]!==c||s[2]!==h?(o=a.jsx("img",{src:h,alt:c,onLoad:f,className:"aspect-square w-full object-contain text-transparent"}),s[1]=c,s[2]=h,s[3]=o):o=s[3];let n;s[4]!==r?(n=r?a.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-sm bg-slate-200 transition-colors group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700",children:a.jsx(k,{size:8})}):null,s[4]=r,s[5]=n):n=s[5];let m;s[6]!==c?(m=a.jsx("h1",{className:"mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1",children:c}),s[6]=c,s[7]=m):m=s[7];const i=g==null?void 0:g.types;let d;s[8]!==i?(d=a.jsx(z,{types:i,className:"-mx-6 scale-75 gap-1 @min-[180px]/card:-mx-7 @min-[200px]/card:-mx-3 @min-[200px]/card:scale-90 @min-[200px]/card:gap-2 @min-[235px]/card:mx-0 @min-[235px]/card:scale-100"}),s[8]=i,s[9]=d):d=s[9];let p;s[10]!==m||s[11]!==d?(p=a.jsxs("div",{className:"p-2 md:p-4",children:[m,d]}),s[10]=m,s[11]=d,s[12]=p):p=s[12];let x;s[13]!==p||s[14]!==o||s[15]!==n?(x=a.jsxs("article",{className:"group @container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none",children:[o,n,p]}),s[13]=p,s[14]=o,s[15]=n,s[16]=x):x=s[16];let w;return s[17]!==x||s[18]!==l?(w=a.jsx(y,{to:l,children:x}),s[17]=x,s[18]=l,s[19]=w):w=s[19],w});v.displayName="PokemonCard";const B=()=>{const e=S.c(21),{data:s,isLoading:u}=E(),{pokemonList:t,isLoading:c,isFiltered:g}=D(s),r=F(R);let j,l;e[0]!==r?(j=()=>r(),l=[r],e[0]=r,e[1]=j,e[2]=l):(j=e[1],l=e[2]),b.useEffect(j,l);const[h,f]=b.useState(!1);N(h);let o,n;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=a.jsxs(P,{children:[a.jsx(P.Search,{itemType:"Pokémon"}),a.jsx(P.GenerationFilter,{}),a.jsx(P.TypeFilter,{}),a.jsx(P.OnlyStarredToggle,{}),a.jsx(P.ClearFilter,{})]}),n=a.jsx(T,{}),e[3]=o,e[4]=n):(o=e[3],n=e[4]);let m;e[5]!==u||e[6]!==c||e[7]!==t?(m=!u&&!c&&(t!=null&&t.length)?a.jsx(A,{totalCount:t.length,itemContent:x=>a.jsx(v,{pokemon:t[x]},t[x].name),useWindowScroll:!0,increaseViewportBy:{top:1e3,bottom:1e3},components:{Footer:G},readyStateChanged:x=>f(x),className:"w-full",listClassName:"grid grid-cols-2 gap-2 @min-[500px]/grid:gap-4 @min-[600px]/grid:grid-cols-3 @min-[800px]/grid:grid-cols-4 @min-[1000px]/grid:grid-cols-5 @min-[1200px]/grid:grid-cols-6"}):null,e[5]=u,e[6]=c,e[7]=t,e[8]=m):m=e[8];let i;e[9]!==h||e[10]!==u||e[11]!==c||e[12]!==(t==null?void 0:t.length)?(i=u||c||!h&&(t!=null&&t.length)?a.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900",children:a.jsx(k,{size:24,displaysText:!0})}):null,e[9]=h,e[10]=u,e[11]=c,e[12]=t==null?void 0:t.length,e[13]=i):i=e[13];let d;e[14]!==g||e[15]!==(t==null?void 0:t.length)?(d=!(t!=null&&t.length)&&g&&a.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:a.jsx(C,{itemType:"Pokémon"})}),e[14]=g,e[15]=t==null?void 0:t.length,e[16]=d):d=e[16];let p;return e[17]!==m||e[18]!==i||e[19]!==d?(p=a.jsxs("div",{className:"relative pt-18 sm:pt-24",children:[o,n,a.jsxs("section",{className:"@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:pl-0",children:[m,i,d]})]}),e[17]=m,e[18]=i,e[19]=d,e[20]=p):p=e[20],p};function R(e){return e.resetPokemonDetailsPanels}function G(){return a.jsx(M,{className:"pb-4"})}export{B as default};
