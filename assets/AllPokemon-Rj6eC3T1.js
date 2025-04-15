import{r as P,c as S,j as a,L as y,a as F,u as N,b as A}from"./index-ChmApjzE.js";import{S as w,Y as C,F as T,a as I}from"./FilterErrorMessage-CrrQn_lF.js";import{u as L,a as _,b as E,c as q,F as z}from"./Footer-ClTCb-__.js";import{u as M,a as $}from"./useStarredPokemon-D8e5ET5K.js";import{P as D}from"./PokemonTypesDisplay-Dhlu3Ddz.js";const R=e=>{const{getUrlParam:s}=M(),p=s("generation")??"",t=s("type")??"",o=!!s("onlyStarred"),x=s("q")??"",{data:n,isLoading:j}=L(p),{data:l,isLoading:g}=_(t),{starredPokemonIds:f}=$(),i=P.useMemo(()=>{if(e)return n!=null&&n.length&&(l!=null&&l.length)?n.filter(r=>new Set(l.map(d=>d.id)).has(r.id)):n!=null&&n.length?n:l!=null&&l.length?e.filter(r=>new Set(l.map(d=>d.id)).has(r.id)):e},[e,n,l]),c=P.useMemo(()=>i&&o?i.filter(r=>f.includes(r.id)):i,[i,o,f]);return{pokemonList:P.useMemo(()=>{const r=x.replace(/[^0-9a-z]/gi,"").trim();return c&&r.length?c.filter(d=>d.name.replace("-","").includes(r.toLowerCase())):c},[c,x]),isLoading:j||g,isFiltered:!!(p||t||o||x)}},v=P.memo(e=>{const s=S.c(22),{pokemon:p}=e,{id:t,name:o}=p,{data:x}=E(t),[n,j]=P.useState(!0),l=`/pokedex/pokemon/${t}`,g=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${t}.png`;let f;s[0]===Symbol.for("react.memo_cache_sentinel")?(f=()=>j(!1),s[0]=f):f=s[0];let i;s[1]!==o||s[2]!==g?(i=a.jsx("img",{src:g,alt:o,decoding:"async",onLoad:f,className:"aspect-square w-full object-contain text-transparent"}),s[1]=o,s[2]=g,s[3]=i):i=s[3];let c;s[4]!==n?(c=n?a.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-sm bg-slate-200 transition-[background-color] group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700",children:a.jsx(y,{size:8})}):null,s[4]=n,s[5]=c):c=s[5];let m;s[6]!==o?(m=o.replace("-"," "),s[6]=o,s[7]=m):m=s[7];let r;s[8]!==m?(r=a.jsx("h1",{className:"mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1",children:m}),s[8]=m,s[9]=r):r=s[9];const d=x==null?void 0:x.types;let u;s[10]!==d?(u=a.jsx(D,{types:d,className:"-mx-6 scale-75 gap-1 @min-[180px]/card:-mx-7 @min-[200px]/card:-mx-3 @min-[200px]/card:scale-90 @min-[200px]/card:gap-2 @min-[235px]/card:mx-0 @min-[235px]/card:scale-100"}),s[10]=d,s[11]=u):u=s[11];let h;s[12]!==u||s[13]!==r?(h=a.jsxs("div",{className:"p-2 md:p-4",children:[r,u]}),s[12]=u,s[13]=r,s[14]=h):h=s[14];let b;s[15]!==h||s[16]!==i||s[17]!==c?(b=a.jsxs("article",{className:"group @container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none",children:[i,c,h]}),s[15]=h,s[16]=i,s[17]=c,s[18]=b):b=s[18];let k;return s[19]!==b||s[20]!==l?(k=a.jsx(F,{to:l,children:b}),s[19]=b,s[20]=l,s[21]=k):k=s[21],k});v.displayName="PokemonCard";const W=()=>{const e=S.c(22),{data:s,isLoading:p}=q(),{pokemonList:t,isLoading:o,isFiltered:x}=R(s),n=N(G);let j,l;e[0]!==n?(j=()=>n(),l=[n],e[0]=n,e[1]=j,e[2]=l):(j=e[1],l=e[2]),P.useEffect(j,l);const[g,f]=P.useState(!1);A(g);let i,c;e[3]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsxs(w,{children:[a.jsx(w.Search,{itemType:"Pokémon"}),a.jsx(w.GenerationFilter,{}),a.jsx(w.TypeFilter,{}),a.jsx(w.OnlyStarredToggle,{}),a.jsx(w.ClearFilter,{})]}),c=a.jsx(I,{}),e[3]=i,e[4]=c):(i=e[3],c=e[4]);let m;e[5]!==g||e[6]!==p||e[7]!==o||e[8]!==t?(m=!p&&!o&&(t!=null&&t.length)?a.jsxs(a.Fragment,{children:[a.jsx(C,{totalCount:t.length,itemContent:h=>a.jsx(v,{pokemon:t[h]},t[h].name),useWindowScroll:!0,increaseViewportBy:{top:1e3,bottom:1e3},readyStateChanged:h=>f(h),className:"w-full",listClassName:`grid grid-cols-2 gap-2 @min-[475px]/grid:gap-4\r
                @min-[580px]/grid:grid-cols-3 @min-[580px]/grid:gap-2 @min-[680px]/grid:gap-4\r
                @min-[800px]/grid:grid-cols-4 @min-[800px]/grid:gap-2 @min-[900px]/grid:gap-4\r
                @min-[1000px]/grid:grid-cols-5 @min-[1000px]/grid:gap-2 @min-[1080px]/grid:gap-4\r
                @min-[1250px]/grid:grid-cols-6 @min-[1250px]/grid:gap-2 @min-[1300px]/grid:gap-4\r
                @min-[1400px]/grid:grid-cols-7 @min-[1400px]/grid:gap-2 @min-[1500px]/grid:gap-4`}),g&&a.jsx(z,{})]}):null,e[5]=g,e[6]=p,e[7]=o,e[8]=t,e[9]=m):m=e[9];let r;e[10]!==g||e[11]!==p||e[12]!==o||e[13]!==(t==null?void 0:t.length)?(r=p||o||!g&&(t!=null&&t.length)?a.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900",children:a.jsx(y,{size:24,displaysText:!0})}):null,e[10]=g,e[11]=p,e[12]=o,e[13]=t==null?void 0:t.length,e[14]=r):r=e[14];let d;e[15]!==x||e[16]!==(t==null?void 0:t.length)?(d=!(t!=null&&t.length)&&x&&a.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:a.jsx(T,{itemType:"Pokémon"})}),e[15]=x,e[16]=t==null?void 0:t.length,e[17]=d):d=e[17];let u;return e[18]!==m||e[19]!==r||e[20]!==d?(u=a.jsxs("div",{className:"relative sm:pt-24",children:[i,c,a.jsxs("section",{className:"@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:min-w-[calc(100vw-320px)] lg:pl-0",children:[m,r,d]})]}),e[18]=m,e[19]=r,e[20]=d,e[21]=u):u=e[21],u};function G(e){return e.resetPokemonDetailsPanels}export{W as default};
