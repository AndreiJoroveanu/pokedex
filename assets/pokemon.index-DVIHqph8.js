import{r as P,c as y,j as a,L as v,a as N,u as C}from"./index-BMHQaSW-.js";import{u as I,S,Y as T,F as A,a as L}from"./FilterErrorMessage-DgWlLGZm.js";import{u as _,a as E,b as q,c as z,F as M}from"./Footer-B4NJqy3a.js";import{u as $,a as D}from"./useStarredPokemon-CYqeFnLI.js";import{P as R}from"./PokemonTypesDisplay-BgeOZrv0.js";const G=s=>{const{getUrlParam:e}=$(),p=e("generation")??"",t=e("type")??"",i=e("onlyStarred")??!1,x=e("q")??"",{data:l,isLoading:h}=_(p),{data:o,isLoading:c}=E(t),{starredPokemonIds:f}=D(),m=P.useMemo(()=>{if(s)return l!=null&&l.length&&(o!=null&&o.length)?l.filter(r=>new Set(o.map(n=>n.id)).has(r.id)):l!=null&&l.length?l:o!=null&&o.length?s.filter(r=>new Set(o.map(n=>n.id)).has(r.id)):s},[s,l,o]),d=P.useMemo(()=>m&&i?m.filter(r=>f.includes(r.id)):m,[m,i,f]);return{pokemonList:P.useMemo(()=>{const r=x.replace(/[^0-9a-z]/gi,"").trim();return d&&r.length?d.filter(n=>n.name.replace("-","").includes(r.toLowerCase())):d},[d,x]),isLoading:h||c,isFiltered:!!(p||t||i||x)}},F=P.memo(s=>{const e=y.c(24),{pokemon:p}=s,{id:t,name:i}=p,{data:x}=q(t),[l,h]=P.useState(!0),o=String(t);let c;e[0]!==o?(c={pokemonId:o},e[0]=o,e[1]=c):c=e[1];const f=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${t}.png`;let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m=()=>h(!1),e[2]=m):m=e[2];let d;e[3]!==i||e[4]!==f?(d=a.jsx("img",{src:f,alt:i,decoding:"async",onLoad:m,className:"aspect-square w-full object-contain text-transparent"}),e[3]=i,e[4]=f,e[5]=d):d=e[5];let g;e[6]!==l?(g=l?a.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-xl bg-slate-200 transition-[background-color] group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700",children:a.jsx(v,{size:8})}):null,e[6]=l,e[7]=g):g=e[7];let r;e[8]!==i?(r=i.replace("-"," "),e[8]=i,e[9]=r):r=e[9];let n;e[10]!==r?(n=a.jsx("h1",{className:"mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1",children:r}),e[10]=r,e[11]=n):n=e[11];const j=x==null?void 0:x.types;let u;e[12]!==j?(u=a.jsx(R,{types:j,className:"-mx-6 scale-75 gap-1 @min-[180px]/card:-mx-7 @min-[200px]/card:-mx-3 @min-[200px]/card:scale-90 @min-[200px]/card:gap-2 @min-[235px]/card:mx-0 @min-[235px]/card:scale-100"}),e[12]=j,e[13]=u):u=e[13];let b;e[14]!==u||e[15]!==n?(b=a.jsxs("div",{className:"p-2 md:p-4",children:[n,u]}),e[14]=u,e[15]=n,e[16]=b):b=e[16];let w;e[17]!==b||e[18]!==d||e[19]!==g?(w=a.jsxs("article",{className:"group @container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none",children:[d,g,b]}),e[17]=b,e[18]=d,e[19]=g,e[20]=w):w=e[20];let k;return e[21]!==w||e[22]!==c?(k=a.jsx(N,{to:"/pokemon/$pokemonId",params:c,children:w}),e[21]=w,e[22]=c,e[23]=k):k=e[23],k});F.displayName="PokemonCard";const H=()=>{const s=y.c(22),{data:e,isLoading:p}=z(),{pokemonList:t,isLoading:i,isFiltered:x}=G(e),l=C(Y);let h,o;s[0]!==l?(h=()=>l(),o=[l],s[0]=l,s[1]=h,s[2]=o):(h=s[1],o=s[2]),P.useEffect(h,o);const[c,f]=P.useState(!1);I(c);let m,d;s[3]===Symbol.for("react.memo_cache_sentinel")?(m=a.jsxs(S,{children:[a.jsx(S.Search,{itemType:"Pokémon"}),a.jsx(S.GenerationFilter,{}),a.jsx(S.TypeFilter,{}),a.jsx(S.OnlyStarredToggle,{}),a.jsx(S.ClearFilter,{})]}),d=a.jsx(L,{}),s[3]=m,s[4]=d):(m=s[3],d=s[4]);let g;s[5]!==c||s[6]!==p||s[7]!==i||s[8]!==t?(g=!p&&!i&&(t!=null&&t.length)?a.jsxs(a.Fragment,{children:[a.jsx(T,{totalCount:t.length,itemContent:u=>a.jsx(F,{pokemon:t[u]},t[u].name),useWindowScroll:!0,increaseViewportBy:{top:1e3,bottom:1e3},readyStateChanged:u=>f(u),className:"w-full",listClassName:`grid grid-cols-2 gap-2 @min-[475px]/grid:gap-4\r
                @min-[580px]/grid:grid-cols-3 @min-[580px]/grid:gap-2 @min-[680px]/grid:gap-4\r
                @min-[800px]/grid:grid-cols-4 @min-[800px]/grid:gap-2 @min-[900px]/grid:gap-4\r
                @min-[1000px]/grid:grid-cols-5 @min-[1000px]/grid:gap-2 @min-[1080px]/grid:gap-4\r
                @min-[1250px]/grid:grid-cols-6 @min-[1250px]/grid:gap-2 @min-[1300px]/grid:gap-4\r
                @min-[1400px]/grid:grid-cols-7 @min-[1400px]/grid:gap-2 @min-[1500px]/grid:gap-4`}),c&&a.jsx(M,{})]}):null,s[5]=c,s[6]=p,s[7]=i,s[8]=t,s[9]=g):g=s[9];let r;s[10]!==c||s[11]!==p||s[12]!==i||s[13]!==(t==null?void 0:t.length)?(r=p||i||!c&&(t!=null&&t.length)?a.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900",children:a.jsx(v,{size:24,displaysText:!0})}):null,s[10]=c,s[11]=p,s[12]=i,s[13]=t==null?void 0:t.length,s[14]=r):r=s[14];let n;s[15]!==x||s[16]!==(t==null?void 0:t.length)?(n=!(t!=null&&t.length)&&x&&a.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:a.jsx(A,{itemType:"Pokémon"})}),s[15]=x,s[16]=t==null?void 0:t.length,s[17]=n):n=s[17];let j;return s[18]!==g||s[19]!==r||s[20]!==n?(j=a.jsxs("div",{className:"relative sm:pt-24",children:[m,d,a.jsxs("section",{className:"@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:min-w-[calc(100vw-320px)] lg:pl-0",children:[g,r,n]})]}),s[18]=g,s[19]=r,s[20]=n,s[21]=j):j=s[21],j};function Y(s){return s.resetPokemonDetailsPanels}export{H as component};
