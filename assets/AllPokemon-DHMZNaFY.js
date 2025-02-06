import{r as d,u as J,j as n,m as L,s as X,A as K,a as N,b as U,L as Q,c as R}from"./index-4kyrKxAx.js";import{a as P,u as z,b as A,B as v,c as V}from"./useSpecificPokemon-K5I4A__Y.js";function Y({title:e,titleId:r,...t},l){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},t),e?d.createElement("title",{id:r},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"}))}const Z=d.forwardRef(Y);function ee({title:e,titleId:r,...t},l){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},t),e?d.createElement("title",{id:r},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"}))}const te=d.forwardRef(ee);function re({title:e,titleId:r,...t},l){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},t),e?d.createElement("title",{id:r},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"}))}const ne=d.forwardRef(re),se=()=>{const e=d.useCallback(()=>P.getPokemonSpeciesList(),[]),{data:r,isLoading:t,error:l}=z(e);return{data:d.useMemo(()=>r==null?void 0:r.results.map(o=>({id:Number(o.url.split("https://pokeapi.co/api/v2/pokemon-species/")[1].split("/")[0]),name:o.name})),[r]),isLoading:t,error:l}},j=()=>{const[e,r]=J(),t=i=>e.get(i);return{getUrl:t,setUrl:(i,o)=>{t(i)===o||o===""?e.delete(i):e.set(i,o),i!=="page"&&e.get("page")&&e.delete("page");const c=new URLSearchParams;["page","generation","type","onlyStarred","q"].map(u=>{const a=e.get(u);a&&c.set(u,a)}),r(c)}}},oe=e=>{const r=d.useCallback(()=>{if(e)return P.getGenerationByName(`generation-${e}`)},[e]),{data:t,isLoading:l,error:i}=z(r);return{data:d.useMemo(()=>e?(t==null?void 0:t.pokemon_species.map(c=>({id:Number(c.url.split("https://pokeapi.co/api/v2/pokemon-species/")[1].split("/")[0]),name:c.name})).filter(c=>c.id<1e4).sort((c,s)=>c.id-s.id))??[]:[],[t==null?void 0:t.pokemon_species,e]),isLoading:l,error:i}},ae=e=>{const r=d.useCallback(()=>{if(e)return P.getTypeByName(e)},[e]),{data:t,isLoading:l,error:i}=z(r);return{data:d.useMemo(()=>e?(t==null?void 0:t.pokemon.map(c=>({id:Number(c.pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0]),name:c.pokemon.name})).filter(c=>c.id<1e4))??[]:[],[t==null?void 0:t.pokemon,e]),isLoading:l,error:i}},le=e=>{const{getUrl:r}=j(),t=r("generation")??"",l=r("type")??"",i=!!r("onlyStarred"),o=r("q")??"",{data:c,isLoading:s}=oe(t),{data:u,isLoading:a}=ae(l),{starredPokemon:p}=A(),b=d.useMemo(()=>{if(e)return c!=null&&c.length&&(u!=null&&u.length)?c.filter(h=>new Set(u.map(k=>k.id)).has(h.id)):c!=null&&c.length?c:u!=null&&u.length?e.filter(h=>new Set(u.map(k=>k.id)).has(h.id)):e},[e,c,u]),f=d.useMemo(()=>{if(b)return i?b==null?void 0:b.filter(h=>p.includes(h.name)):b},[b,i,p]);return{pokemonList:d.useMemo(()=>{if(f)return o.trim().length?f==null?void 0:f.filter(h=>h.name.includes(o.toLowerCase().trim())):f},[f,o]),isLoading:s||a,isFiltered:!!(t||l||i||o)}},x="https://pokeapi.co/api/v2/generation",E=[{name:"generation-i",url:`${x}/1/`},{name:"generation-ii",url:`${x}/2/`},{name:"generation-iii",url:`${x}/3/`},{name:"generation-iv",url:`${x}/4/`},{name:"generation-v",url:`${x}/5/`},{name:"generation-vi",url:`${x}/6/`},{name:"generation-vii",url:`${x}/7/`},{name:"generation-viii",url:`${x}/8/`},{name:"generation-ix",url:`${x}/9/`}],m="https://pokeapi.co/api/v2/type",$=[{name:"normal",url:`${m}/1/`},{name:"fighting",url:`${m}/2/`},{name:"flying",url:`${m}/3/`},{name:"poison",url:`${m}/4/`},{name:"ground",url:`${m}/5/`},{name:"rock",url:`${m}/6/`},{name:"bug",url:`${m}/7/`},{name:"ghost",url:`${m}/8/`},{name:"steel",url:`${m}/9/`},{name:"fire",url:`${m}/10/`},{name:"water",url:`${m}/11/`},{name:"grass",url:`${m}/12/`},{name:"electric",url:`${m}/13/`},{name:"psychic",url:`${m}/14/`},{name:"ice",url:`${m}/15/`},{name:"dragon",url:`${m}/16/`},{name:"dark",url:`${m}/17/`},{name:"fairy",url:`${m}/18/`}],ie=()=>{const[e,r]=d.useState(""),{getUrl:t,setUrl:l}=j();d.useEffect(()=>r(t("q")??""),[t]);const i=o=>{r(o),l("q",o)};return n.jsx("input",{type:"text",placeholder:"Search by Pokémon name",value:e,onChange:o=>i(o.target.value),className:"w-full rounded-xl border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors hover:bg-slate-200/75 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none dark:focus:shadow-none"})};function F(e,r){let t;return(...l)=>{window.clearTimeout(t),t=window.setTimeout(()=>e(...l),r)}}function ce({debounce:e,scroll:r,polyfill:t,offsetSize:l}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,c]=d.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=d.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o,orientationHandler:null}),u=e?typeof e=="number"?e:e.scroll:null,a=e?typeof e=="number"?e:e.resize:null,p=d.useRef(!1);d.useEffect(()=>(p.current=!0,()=>void(p.current=!1)));const[b,f,w]=d.useMemo(()=>{const g=()=>{if(!s.current.element)return;const{left:M,top:T,width:H,height:q,bottom:G,right:I,x:W,y:_}=s.current.element.getBoundingClientRect(),y={left:M,top:T,width:H,height:q,bottom:G,right:I,x:W,y:_};s.current.element instanceof HTMLElement&&l&&(y.height=s.current.element.offsetHeight,y.width=s.current.element.offsetWidth),Object.freeze(y),p.current&&!ge(s.current.lastBounds,y)&&c(s.current.lastBounds=y)};return[g,a?F(g,a):g,u?F(g,u):g]},[c,l,u,a]);function h(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(g=>g.removeEventListener("scroll",w,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null),s.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",s.current.orientationHandler))}function k(){s.current.element&&(s.current.resizeObserver=new i(w),s.current.resizeObserver.observe(s.current.element),r&&s.current.scrollContainers&&s.current.scrollContainers.forEach(g=>g.addEventListener("scroll",w,{capture:!0,passive:!0})),s.current.orientationHandler=()=>{w()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",s.current.orientationHandler))}const B=g=>{!g||g===s.current.element||(h(),s.current.element=g,s.current.scrollContainers=D(g),k())};return ue(w,!!r),de(f),d.useEffect(()=>{h(),k()},[r,w,f]),d.useEffect(()=>h,[]),[B,o,b]}function de(e){d.useEffect(()=>{const r=e;return window.addEventListener("resize",r),()=>void window.removeEventListener("resize",r)},[e])}function ue(e,r){d.useEffect(()=>{if(r){const t=e;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[e,r])}function D(e){const r=[];if(!e||e===document.body)return r;const{overflow:t,overflowX:l,overflowY:i}=window.getComputedStyle(e);return[t,l,i].some(o=>o==="auto"||o==="scroll")&&r.push(e),[...r,...D(e.parentElement)]}const me=["x","y","top","bottom","left","right","width","height"],ge=(e,r)=>me.every(t=>e[t]===r[t]),he={height:({isOpen:e,height:r})=>({height:e?r||"auto":0})},O=({name:e,values:r,renderLabel:t,isOpen:l,toggleOpen:i})=>{const{getUrl:o,setUrl:c}=j(),[s,{height:u}]=ce();return n.jsxs("div",{className:"my-4 overflow-hidden rounded-xl border-2 border-slate-400/30 bg-slate-50 shadow-sm transition-colors dark:bg-slate-900 dark:shadow-none",children:[n.jsxs("div",{onClick:i,className:"flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-slate-400/10",children:[n.jsxs("h2",{className:"text-lg font-bold capitalize",children:[e," Filtering"]}),n.jsx(L.div,{initial:{rotate:l?180:0},animate:{rotate:l?180:0},transition:{type:X,bounce:0,duration:.5},children:n.jsx(Z,{className:"size-4"})})]}),n.jsx(L.div,{variants:he,custom:{isOpen:l,height:u},initial:"height",animate:"height",className:"overflow-hidden",children:n.jsx(K,{children:l&&n.jsx(L.div,{ref:s,exit:{opacity:2},className:"grid grid-cols-3 gap-2 border-t-2 border-t-slate-400/30 p-2 lg:grid-cols-2 xl:grid-cols-3",children:r==null?void 0:r.map(a=>n.jsx(v,{onClick:()=>c(e,a),style:o(e)===a?"indigo":"normal",className:"capitalize",children:t(a)},a))})})})]})},pe=()=>{const e=N(a=>a.isGenFilterOpen),r=N(a=>a.toggleGenFilterOpen),t=N(a=>a.isTypeFilterOpen),l=N(a=>a.toggleTypeFilterOpen),i=U(),{getUrl:o,setUrl:c}=j(),s=!o("generation")&&!o("type")&&!o("onlyStarred")&&!o("q"),{length:u}=A();return n.jsxs("aside",{className:"p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600",children:[n.jsx(ie,{}),n.jsx(O,{name:"generation",values:E==null?void 0:E.map(a=>a.name.split("-")[1]),renderLabel:a=>`Gen. ${a.toUpperCase()}`,isOpen:e,toggleOpen:r}),n.jsx(O,{name:"type",values:$==null?void 0:$.map(a=>a.name),renderLabel:a=>a,isOpen:t,toggleOpen:l}),n.jsxs(v,{onClick:()=>c("onlyStarred","true"),style:o("onlyStarred")?"gold":"normal",className:`mb-4 w-full ${o("onlyStarred")&&"py-[9.5px]"}`,children:["Show",o("onlyStarred")?`ing ${u}`:" only"," starred Pokémon"]}),n.jsx(v,{onClick:()=>void i("/pokedex/pokemon"),disabled:s,style:s?"normal":"indigo",className:"w-full enabled:py-[9.5px] disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4",children:"Clear Filtering"})]})},fe=({noOfPages:e,noOfSideButtons:r})=>{const{getUrl:t,setUrl:l}=j(),i=Number(t("page"))||1,o=s=>l("page",s.toString()),c=()=>{const s=[];let u=0;for(let a=i-r;a<=i+r;a++)u--,s.push(a>0&&a<=e?a:u);return s};return n.jsxs("div",{className:"flex gap-2 sm:gap-4",children:[n.jsx(v,{onClick:()=>o(1),disabled:i===1,className:"flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12",children:n.jsx(te,{className:"size-4"})}),c().map(s=>s>0?n.jsx(v,{onClick:()=>o(s),disabled:s===i,style:s===i?"indigo":"normal",className:"flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-default sm:h-12 sm:w-12",children:s},s):n.jsx("div",{className:"h-8 w-8 sm:h-12 sm:w-12"},s)),n.jsx(v,{onClick:()=>o(e),disabled:i===e,className:"flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12",children:n.jsx(ne,{className:"size-4"})})]})},xe=({type:e})=>{const r=U();return n.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 py-8 text-center lg:h-screen",children:[n.jsxs("h2",{className:"text-3xl font-bold",children:["No ",e," Found"]}),n.jsx("p",{className:"mb-2 font-semibold text-slate-600 dark:text-slate-400",children:"Try other filtering options or another search query"}),n.jsx(v,{onClick:()=>void r("/pokedex/pokemon"),style:"indigo",className:"w-full max-lg:hidden",children:"Clear Filtering"})]})},be=({id:e,name:r})=>{const{data:t}=V(e),[l,i]=d.useState(!0);return n.jsx(Q,{to:`/pokedex/pokemon/${r}`,state:{pokemon:t},children:n.jsxs("article",{className:"relative rounded-sm border border-slate-400/40 bg-slate-100 shadow-lg transition-colors hover:bg-slate-200/75 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none",children:[n.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${e}.png`,alt:r,onLoad:()=>i(!1),className:"aspect-square w-full object-contain text-transparent dark:brightness-90"}),l?n.jsx("div",{className:"absolute top-0 aspect-square w-full bg-slate-100 dark:bg-slate-800",children:n.jsx(R,{size:8})}):"",n.jsxs("div",{className:"px-3 py-2 md:p-4",children:[n.jsxs("h1",{className:"text-base font-bold text-nowrap capitalize sm:text-lg md:text-xl",children:[e,". ",r]}),n.jsx("p",{className:"text-sm font-semibold text-nowrap text-slate-500 md:text-base dark:text-slate-400",children:t?n.jsxs(n.Fragment,{children:[(t==null?void 0:t.types.length)===1?"Type: ":"Types: ",t==null?void 0:t.types.map(o=>n.jsx("span",{className:"capitalize",children:` ${o.type.name}`},o.type.name))]}):"Loading..."})]})]})})},C=({children:e,to:r})=>n.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"transition-all hover:border-b hover:text-gray-600 dark:hover:text-gray-300",children:e}),we=()=>n.jsxs("footer",{className:"mt-4 text-center text-sm text-gray-500 transition-colors dark:text-gray-400",children:["Made by"," ",n.jsx(C,{to:"https://github.com/AndreiJoroveanu",children:"Andrei Joroveanu"})," (",n.jsx(C,{to:"https://github.com/AndreiJoroveanu/pokedex",children:"Github repo"}),"). Data from ",n.jsx(C,{to:"https://pokeapi.co",children:"PokéAPI"}),"."]}),S=20,je=()=>{const{data:e,isLoading:r}=se(),{pokemonList:t,isLoading:l,isFiltered:i}=le(e),o=(t==null?void 0:t.length)??0,c=Math.ceil(o/S),{getUrl:s}=j(),u=Number(s("page"))||1,a=d.useMemo(()=>t==null?void 0:t.slice((u-1)*S,u*S),[u,t]);return n.jsxs("div",{className:"relative pt-18 sm:pt-24",children:[n.jsx(pe,{}),n.jsxs("section",{className:"flex w-full flex-col items-center p-4 lg:absolute lg:right-0 lg:w-4/5",children:[!r&&!l?n.jsxs(n.Fragment,{children:[c>1&&n.jsx(fe,{noOfPages:c,noOfSideButtons:3}),a!=null&&a.length?n.jsxs(n.Fragment,{children:[n.jsx("main",{className:"mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5",children:a.map(p=>n.jsx(be,{id:p.id,name:p.name},p.name))}),n.jsx(we,{})]}):null]}):n.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-50 lg:-z-10 dark:bg-slate-900",children:n.jsx(R,{size:24,displaysText:!0})}),!(t!=null&&t.length)&&i&&n.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:n.jsx(xe,{type:"Pokémon"})})]})]})};export{je as default};
