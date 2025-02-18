import{r as m,u as S,j as a,a as f,b as N,L as I,c as F}from"./index-BPvreLyy.js";import{a as j,u as w,g as y,b as C,C as L,B as g,c as G,P as O,F as U}from"./Footer-D-ghvUtr.js";function z({title:e,titleId:r,...s},i){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},s),e?m.createElement("title",{id:r},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"}))}const E=m.forwardRef(z);function D({title:e,titleId:r,...s},i){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},s),e?m.createElement("title",{id:r},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"}))}const M=m.forwardRef(D),T=()=>{const e=m.useCallback(()=>j.getPokemonSpeciesList(),[]),{data:r,isLoading:s,error:i}=w(e);return{data:m.useMemo(()=>r==null?void 0:r.results.map(l=>({id:Number(y(l.url)),name:l.name})),[r]),isLoading:s,error:i}},b=()=>{const[e,r]=S(),s=n=>e.get(n);return{getUrlParam:s,setUrlParam:(n,l)=>{s(n)===l||l===""?e.delete(n):e.set(n,l),n!=="page"&&e.get("page")&&e.delete("page");const t=new URLSearchParams;["page","generation","type","onlyStarred","q"].map(o=>{const d=e.get(o);d&&t.set(o,d)}),r(t)}}},R=e=>{const r=m.useCallback(()=>{if(e)return j.getGenerationByName(`generation-${e}`)},[e]),{data:s,isLoading:i,error:n}=w(r);return{data:m.useMemo(()=>e?(s==null?void 0:s.pokemon_species.map(t=>({id:Number(y(t.url)),name:t.name})).filter(t=>t.id<1e4).sort((t,c)=>t.id-c.id))??[]:[],[s==null?void 0:s.pokemon_species,e]),isLoading:i,error:n}},q=e=>{const r=m.useCallback(()=>{if(e)return j.getTypeByName(e)},[e]),{data:s,isLoading:i,error:n}=w(r);return{data:m.useMemo(()=>e?(s==null?void 0:s.pokemon.map(t=>({id:Number(y(t.pokemon.url)),name:t.pokemon.name})).filter(t=>t.id<1e4))??[]:[],[s==null?void 0:s.pokemon,e]),isLoading:i,error:n}},A=e=>{const{getUrlParam:r}=b(),s=r("generation")??"",i=r("type")??"",n=!!r("onlyStarred"),l=r("q")??"",{data:t,isLoading:c}=R(s),{data:o,isLoading:d}=q(i),{starredPokemonIds:h}=C(),p=m.useMemo(()=>{if(e)return t!=null&&t.length&&(o!=null&&o.length)?t.filter(u=>new Set(o.map(v=>v.id)).has(u.id)):t!=null&&t.length?t:o!=null&&o.length?e.filter(u=>new Set(o.map(v=>v.id)).has(u.id)):e},[e,t,o]),x=m.useMemo(()=>{if(p)return n?p==null?void 0:p.filter(u=>h.includes(u.id)):p},[p,n,h]);return{pokemonList:m.useMemo(()=>{if(x)return l.trim().length?x==null?void 0:x.filter(u=>u.name.includes(l.toLowerCase().trim())):x},[x,l]),isLoading:c||d,isFiltered:!!(s||i||n||l)}},$=[{value:"i",label:"Gen. I"},{value:"ii",label:"Gen. II"},{value:"iii",label:"Gen. III"},{value:"iv",label:"Gen. IV"},{value:"v",label:"Gen. V"},{value:"vi",label:"Gen. VI"},{value:"vii",label:"Gen. VII"},{value:"viii",label:"Gen. VIII"},{value:"ix",label:"Gen. IX"}],B=[{value:"normal",label:"Normal"},{value:"fighting",label:"Fighting"},{value:"flying",label:"Flying"},{value:"poison",label:"Poison"},{value:"ground",label:"Ground"},{value:"rock",label:"Rock"},{value:"bug",label:"Bug"},{value:"ghost",label:"Ghost"},{value:"steel",label:"Steel"},{value:"fire",label:"Fire"},{value:"water",label:"Water"},{value:"grass",label:"Grass"},{value:"electric",label:"Electric"},{value:"psychic",label:"Psychic"},{value:"ice",label:"Ice"},{value:"dragon",label:"Dragon"},{value:"dark",label:"Dark"},{value:"fairy",label:"Fairy"}],V=()=>{const[e,r]=m.useState(""),{getUrlParam:s,setUrlParam:i}=b();m.useEffect(()=>r(s("q")??""),[s]);const n=l=>{r(l),i("q",l)};return a.jsx("input",{type:"text",placeholder:"Search by Pokémon name",value:e,onChange:l=>n(l.target.value),className:"w-full rounded-xl border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors hover:bg-slate-200/75 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none dark:focus:shadow-none"})},P=({name:e,values:r,isOpen:s,toggleOpen:i})=>{const{getUrlParam:n,setUrlParam:l}=b();return a.jsx(L,{label:`${e} Filtering`,initialIsOpen:s,toggleOpen:i,className:"grid grid-cols-3 gap-2 p-2 lg:grid-cols-2 xl:grid-cols-3",children:r==null?void 0:r.map(({value:t,label:c})=>a.jsx(g,{onClick:()=>l(e,t),style:n(e)===t?"indigo":"normal",className:"capitalize",children:c},t))})},_=()=>{const e=f(d=>d.isGenFilterOpen),r=f(d=>d.toggleGenFilterOpen),s=f(d=>d.isTypeFilterOpen),i=f(d=>d.toggleTypeFilterOpen),n=N(),{getUrlParam:l,setUrlParam:t}=b(),c=!l("generation")&&!l("type")&&!l("onlyStarred")&&!l("q"),{length:o}=C();return a.jsxs("aside",{className:"p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600",children:[a.jsx(V,{}),a.jsx(P,{name:"generation",values:$,isOpen:e,toggleOpen:r}),a.jsx(P,{name:"type",values:B,isOpen:s,toggleOpen:i}),a.jsxs(g,{onClick:()=>t("onlyStarred","true"),style:l("onlyStarred")?"gold":"normal",className:"mb-4 w-full",children:["Show",l("onlyStarred")?`ing ${o}`:" only"," starred Pokémon"]}),a.jsx(g,{onClick:()=>void n("/pokedex/pokemon"),disabled:c,style:c?"normal":"indigo",className:"w-full disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4",children:"Clear Filtering"})]})},W=({noOfPages:e,noOfSideButtons:r})=>{const{getUrlParam:s,setUrlParam:i}=b(),n=Number(s("page"))||1,l=c=>i("page",c.toString()),t=()=>{const c=[];let o=0;for(let d=n-r;d<=n+r;d++)o--,c.push(d>0&&d<=e?d:o);return c};return a.jsxs("div",{className:"flex gap-2 sm:gap-4",children:[a.jsx(g,{onClick:()=>l(1),disabled:n===1,className:"xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25",children:a.jsx(E,{className:"size-4"})}),t().map((c,o)=>c>0?a.jsx(g,{onClick:()=>l(c),disabled:c===n,style:c===n?"indigo":"normal",className:`xs:size-12 ${o===0||o===r*2?"max-sm:hidden":""} flex size-8 items-center justify-center rounded-full disabled:cursor-default`,children:c},c):a.jsx("div",{className:`xs:size-12 ${o===0||o===r*2?"max-sm:hidden":""} size-8`},c)),a.jsx(g,{onClick:()=>l(e),disabled:n===e,className:"xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25",children:a.jsx(M,{className:"size-4"})})]})},K=({type:e})=>{const r=N();return a.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 py-8 text-center lg:h-screen",children:[a.jsxs("h2",{className:"text-3xl font-bold",children:["No ",e," Found"]}),a.jsx("p",{className:"mb-2 font-semibold text-slate-600 dark:text-slate-400",children:"Try other filtering options or another search query"}),a.jsx(g,{onClick:()=>void r("/pokedex/pokemon"),style:"indigo",className:"w-full max-lg:hidden",children:"Clear Filtering"})]})},Q=({id:e,name:r})=>{const{data:s}=G(e),[i,n]=m.useState(!0);return a.jsx(I,{to:`/pokedex/pokemon/${e}`,state:{initialPokemon:s},children:a.jsxs("article",{className:"relative rounded-sm border border-slate-400/40 bg-slate-100 shadow-lg transition-colors hover:bg-slate-200/75 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none",children:[a.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${e}.png`,alt:r,onLoad:()=>n(!1),className:"aspect-square w-full object-contain text-transparent dark:brightness-90"}),i?a.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-sm bg-slate-100 dark:bg-slate-800",children:a.jsx(F,{size:8})}):"",a.jsxs("div",{className:"px-3 py-2 md:p-4",children:[a.jsxs("h1",{className:"text-base font-bold text-nowrap capitalize sm:text-lg md:text-xl",children:[e,". ",r]}),a.jsx(O,{types:s==null?void 0:s.types,className:"text-sm font-semibold text-nowrap text-slate-500 md:text-base dark:text-slate-400"})]})]})})},k=20,Y=()=>{const{data:e,isLoading:r}=T(),{pokemonList:s,isLoading:i,isFiltered:n}=A(e),l=(s==null?void 0:s.length)??0,t=Math.ceil(l/k),{getUrlParam:c}=b(),o=Number(c("page"))||1,d=m.useMemo(()=>s==null?void 0:s.slice((o-1)*k,o*k),[o,s]);return a.jsxs("div",{className:"relative pt-18 sm:pt-24",children:[a.jsx(_,{}),a.jsxs("section",{className:"flex w-full flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5",children:[!r&&!i?a.jsxs(a.Fragment,{children:[t>1&&a.jsx(W,{noOfPages:t,noOfSideButtons:3}),d!=null&&d.length?a.jsxs(a.Fragment,{children:[a.jsx("main",{className:"mt-4 grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 xl:grid-cols-5",children:d.map(h=>a.jsx(Q,{id:h.id,name:h.name},h.name))}),a.jsx(U,{})]}):null]}):a.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-50 lg:-z-10 dark:bg-slate-900",children:a.jsx(F,{size:24,displaysText:!0})}),!(s!=null&&s.length)&&n&&a.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:a.jsx(K,{type:"Pokémon"})})]})]})};export{Y as default};
