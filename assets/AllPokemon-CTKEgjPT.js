import{r as d,u as J,j as n,m as L,s as X,A as K,a as N,b as U,L as Q,c as R}from"./index-Cs_puiGd.js";import{a as P,u as S,b as D,B as w,c as V,P as Y}from"./PokemonTypesDisplayText-BwqQwSHe.js";function Z({title:e,titleId:t,...r},i){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},r),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"}))}const ee=d.forwardRef(Z);function te({title:e,titleId:t,...r},i){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},r),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"}))}const re=d.forwardRef(te);function ne({title:e,titleId:t,...r},i){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},r),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"}))}const se=d.forwardRef(ne),oe=()=>{const e=d.useCallback(()=>P.getPokemonSpeciesList(),[]),{data:t,isLoading:r,error:i}=S(e);return{data:d.useMemo(()=>t==null?void 0:t.results.map(o=>({id:Number(o.url.split("https://pokeapi.co/api/v2/pokemon-species/")[1].split("/")[0]),name:o.name})),[t]),isLoading:r,error:i}},j=()=>{const[e,t]=J(),r=l=>e.get(l);return{getUrl:r,setUrl:(l,o)=>{r(l)===o||o===""?e.delete(l):e.set(l,o),l!=="page"&&e.get("page")&&e.delete("page");const c=new URLSearchParams;["page","generation","type","onlyStarred","q"].map(u=>{const a=e.get(u);a&&c.set(u,a)}),t(c)}}},ae=e=>{const t=d.useCallback(()=>{if(e)return P.getGenerationByName(`generation-${e}`)},[e]),{data:r,isLoading:i,error:l}=S(t);return{data:d.useMemo(()=>e?(r==null?void 0:r.pokemon_species.map(c=>({id:Number(c.url.split("https://pokeapi.co/api/v2/pokemon-species/")[1].split("/")[0]),name:c.name})).filter(c=>c.id<1e4).sort((c,s)=>c.id-s.id))??[]:[],[r==null?void 0:r.pokemon_species,e]),isLoading:i,error:l}},ie=e=>{const t=d.useCallback(()=>{if(e)return P.getTypeByName(e)},[e]),{data:r,isLoading:i,error:l}=S(t);return{data:d.useMemo(()=>e?(r==null?void 0:r.pokemon.map(c=>({id:Number(c.pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0]),name:c.pokemon.name})).filter(c=>c.id<1e4))??[]:[],[r==null?void 0:r.pokemon,e]),isLoading:i,error:l}},le=e=>{const{getUrl:t}=j(),r=t("generation")??"",i=t("type")??"",l=!!t("onlyStarred"),o=t("q")??"",{data:c,isLoading:s}=ae(r),{data:u,isLoading:a}=ie(i),{starredPokemon:p}=D(),b=d.useMemo(()=>{if(e)return c!=null&&c.length&&(u!=null&&u.length)?c.filter(h=>new Set(u.map(k=>k.id)).has(h.id)):c!=null&&c.length?c:u!=null&&u.length?e.filter(h=>new Set(u.map(k=>k.id)).has(h.id)):e},[e,c,u]),f=d.useMemo(()=>{if(b)return l?b==null?void 0:b.filter(h=>p.includes(h.name)):b},[b,l,p]);return{pokemonList:d.useMemo(()=>{if(f)return o.trim().length?f==null?void 0:f.filter(h=>h.name.includes(o.toLowerCase().trim())):f},[f,o]),isLoading:s||a,isFiltered:!!(r||i||l||o)}},x="https://pokeapi.co/api/v2/generation",E=[{name:"generation-i",url:`${x}/1/`},{name:"generation-ii",url:`${x}/2/`},{name:"generation-iii",url:`${x}/3/`},{name:"generation-iv",url:`${x}/4/`},{name:"generation-v",url:`${x}/5/`},{name:"generation-vi",url:`${x}/6/`},{name:"generation-vii",url:`${x}/7/`},{name:"generation-viii",url:`${x}/8/`},{name:"generation-ix",url:`${x}/9/`}],m="https://pokeapi.co/api/v2/type",$=[{name:"normal",url:`${m}/1/`},{name:"fighting",url:`${m}/2/`},{name:"flying",url:`${m}/3/`},{name:"poison",url:`${m}/4/`},{name:"ground",url:`${m}/5/`},{name:"rock",url:`${m}/6/`},{name:"bug",url:`${m}/7/`},{name:"ghost",url:`${m}/8/`},{name:"steel",url:`${m}/9/`},{name:"fire",url:`${m}/10/`},{name:"water",url:`${m}/11/`},{name:"grass",url:`${m}/12/`},{name:"electric",url:`${m}/13/`},{name:"psychic",url:`${m}/14/`},{name:"ice",url:`${m}/15/`},{name:"dragon",url:`${m}/16/`},{name:"dark",url:`${m}/17/`},{name:"fairy",url:`${m}/18/`}],ce=()=>{const[e,t]=d.useState(""),{getUrl:r,setUrl:i}=j();d.useEffect(()=>t(r("q")??""),[r]);const l=o=>{t(o),i("q",o)};return n.jsx("input",{type:"text",placeholder:"Search by Pokémon name",value:e,onChange:o=>l(o.target.value),className:"w-full rounded-xl border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors hover:bg-slate-200/75 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none dark:focus:shadow-none"})};function F(e,t){let r;return(...i)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...i),t)}}function de({debounce:e,scroll:t,polyfill:r,offsetSize:i}={debounce:0,scroll:!1,offsetSize:!1}){const l=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!l)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,c]=d.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=d.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o,orientationHandler:null}),u=e?typeof e=="number"?e:e.scroll:null,a=e?typeof e=="number"?e:e.resize:null,p=d.useRef(!1);d.useEffect(()=>(p.current=!0,()=>void(p.current=!1)));const[b,f,v]=d.useMemo(()=>{const g=()=>{if(!s.current.element)return;const{left:T,top:B,width:H,height:q,bottom:G,right:I,x:W,y:_}=s.current.element.getBoundingClientRect(),y={left:T,top:B,width:H,height:q,bottom:G,right:I,x:W,y:_};s.current.element instanceof HTMLElement&&i&&(y.height=s.current.element.offsetHeight,y.width=s.current.element.offsetWidth),Object.freeze(y),p.current&&!he(s.current.lastBounds,y)&&c(s.current.lastBounds=y)};return[g,a?F(g,a):g,u?F(g,u):g]},[c,i,u,a]);function h(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(g=>g.removeEventListener("scroll",v,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null),s.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",s.current.orientationHandler))}function k(){s.current.element&&(s.current.resizeObserver=new l(v),s.current.resizeObserver.observe(s.current.element),t&&s.current.scrollContainers&&s.current.scrollContainers.forEach(g=>g.addEventListener("scroll",v,{capture:!0,passive:!0})),s.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",s.current.orientationHandler))}const M=g=>{!g||g===s.current.element||(h(),s.current.element=g,s.current.scrollContainers=A(g),k())};return me(v,!!t),ue(f),d.useEffect(()=>{h(),k()},[t,v,f]),d.useEffect(()=>h,[]),[M,o,b]}function ue(e){d.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function me(e,t){d.useEffect(()=>{if(t){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,t])}function A(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:i,overflowY:l}=window.getComputedStyle(e);return[r,i,l].some(o=>o==="auto"||o==="scroll")&&t.push(e),[...t,...A(e.parentElement)]}const ge=["x","y","top","bottom","left","right","width","height"],he=(e,t)=>ge.every(r=>e[r]===t[r]),pe={height:({isOpen:e,height:t})=>({height:e?t||"auto":0})},O=({name:e,values:t,renderLabel:r,isOpen:i,toggleOpen:l})=>{const{getUrl:o,setUrl:c}=j(),[s,{height:u}]=de();return n.jsxs("div",{className:"my-4 overflow-hidden rounded-xl border-2 border-slate-400/30 bg-slate-50 shadow-sm transition-colors dark:bg-slate-900 dark:shadow-none",children:[n.jsxs("div",{onClick:l,className:"flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-slate-400/10",children:[n.jsxs("h2",{className:"text-lg font-bold capitalize",children:[e," Filtering"]}),n.jsx(L.div,{initial:{rotate:i?180:0},animate:{rotate:i?180:0},transition:{type:X,bounce:0,duration:.5},children:n.jsx(ee,{className:"size-4"})})]}),n.jsx(L.div,{variants:pe,custom:{isOpen:i,height:u},initial:"height",animate:"height",className:"overflow-hidden",children:n.jsx(K,{children:i&&n.jsx(L.div,{ref:s,exit:{opacity:2},className:"grid grid-cols-3 gap-2 border-t-2 border-t-slate-400/30 p-2 lg:grid-cols-2 xl:grid-cols-3",children:t==null?void 0:t.map(a=>n.jsx(w,{onClick:()=>c(e,a),style:o(e)===a?"indigo":"normal",className:"capitalize",children:r(a)},a))})})})]})},fe=()=>{const e=N(a=>a.isGenFilterOpen),t=N(a=>a.toggleGenFilterOpen),r=N(a=>a.isTypeFilterOpen),i=N(a=>a.toggleTypeFilterOpen),l=U(),{getUrl:o,setUrl:c}=j(),s=!o("generation")&&!o("type")&&!o("onlyStarred")&&!o("q"),{length:u}=D();return n.jsxs("aside",{className:"p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600",children:[n.jsx(ce,{}),n.jsx(O,{name:"generation",values:E==null?void 0:E.map(a=>a.name.split("-")[1]),renderLabel:a=>`Gen. ${a.toUpperCase()}`,isOpen:e,toggleOpen:t}),n.jsx(O,{name:"type",values:$==null?void 0:$.map(a=>a.name),renderLabel:a=>a,isOpen:r,toggleOpen:i}),n.jsxs(w,{onClick:()=>c("onlyStarred","true"),style:o("onlyStarred")?"gold":"normal",className:`mb-4 w-full ${o("onlyStarred")&&"py-[9.5px]"}`,children:["Show",o("onlyStarred")?`ing ${u}`:" only"," starred Pokémon"]}),n.jsx(w,{onClick:()=>void l("/pokedex/pokemon"),disabled:s,style:s?"normal":"indigo",className:"w-full enabled:py-[9.5px] disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4",children:"Clear Filtering"})]})},xe=({noOfPages:e,noOfSideButtons:t})=>{const{getUrl:r,setUrl:i}=j(),l=Number(r("page"))||1,o=s=>i("page",s.toString()),c=()=>{const s=[];let u=0;for(let a=l-t;a<=l+t;a++)u--,s.push(a>0&&a<=e?a:u);return s};return n.jsxs("div",{className:"flex gap-2 sm:gap-4",children:[n.jsx(w,{onClick:()=>o(1),disabled:l===1,className:"xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25",children:n.jsx(re,{className:"size-4"})}),c().map((s,u)=>s>0?n.jsx(w,{onClick:()=>o(s),disabled:s===l,style:s===l?"indigo":"normal",className:`xs:size-12 ${u===0||u===t*2?"max-sm:hidden":""} flex size-8 items-center justify-center rounded-full disabled:cursor-default`,children:s},s):n.jsx("div",{className:`xs:size-12 ${u===0||u===t*2?"max-sm:hidden":""} size-8`},s)),n.jsx(w,{onClick:()=>o(e),disabled:l===e,className:"xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25",children:n.jsx(se,{className:"size-4"})})]})},be=({type:e})=>{const t=U();return n.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 py-8 text-center lg:h-screen",children:[n.jsxs("h2",{className:"text-3xl font-bold",children:["No ",e," Found"]}),n.jsx("p",{className:"mb-2 font-semibold text-slate-600 dark:text-slate-400",children:"Try other filtering options or another search query"}),n.jsx(w,{onClick:()=>void t("/pokedex/pokemon"),style:"indigo",className:"w-full max-lg:hidden",children:"Clear Filtering"})]})},ve=({id:e,name:t})=>{const{data:r}=V(e),[i,l]=d.useState(!0);return n.jsx(Q,{to:`/pokedex/pokemon/${t}`,state:{pokemon:r},children:n.jsxs("article",{className:"relative rounded-sm border border-slate-400/40 bg-slate-100 shadow-lg transition-colors hover:bg-slate-200/75 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none",children:[n.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${e}.png`,alt:t,onLoad:()=>l(!1),className:"aspect-square w-full object-contain text-transparent dark:brightness-90"}),i?n.jsx("div",{className:"absolute top-0 aspect-square w-full rounded-sm bg-slate-100 dark:bg-slate-800",children:n.jsx(R,{size:8})}):"",n.jsxs("div",{className:"px-3 py-2 md:p-4",children:[n.jsxs("h1",{className:"text-base font-bold text-nowrap capitalize sm:text-lg md:text-xl",children:[e,". ",t]}),n.jsx(Y,{types:r==null?void 0:r.types,className:"text-sm font-semibold text-nowrap text-slate-500 md:text-base dark:text-slate-400"})]})]})})},C=({children:e,to:t})=>n.jsx("a",{href:t,target:"_blank",rel:"noreferrer",className:"transition-all hover:border-b hover:text-gray-600 dark:hover:text-gray-300",children:e}),we=()=>n.jsxs("footer",{className:"mt-4 text-center text-sm text-gray-500 transition-colors dark:text-gray-400",children:["Made by"," ",n.jsx(C,{to:"https://github.com/AndreiJoroveanu",children:"Andrei Joroveanu"})," (",n.jsx(C,{to:"https://github.com/AndreiJoroveanu/pokedex",children:"Github repo"}),"). Data from ",n.jsx(C,{to:"https://pokeapi.co",children:"PokéAPI"}),"."]}),z=20,ye=()=>{const{data:e,isLoading:t}=oe(),{pokemonList:r,isLoading:i,isFiltered:l}=le(e),o=(r==null?void 0:r.length)??0,c=Math.ceil(o/z),{getUrl:s}=j(),u=Number(s("page"))||1,a=d.useMemo(()=>r==null?void 0:r.slice((u-1)*z,u*z),[u,r]);return n.jsxs("div",{className:"relative pt-18 sm:pt-24",children:[n.jsx(fe,{}),n.jsxs("section",{className:"flex w-full flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5",children:[!t&&!i?n.jsxs(n.Fragment,{children:[c>1&&n.jsx(xe,{noOfPages:c,noOfSideButtons:3}),a!=null&&a.length?n.jsxs(n.Fragment,{children:[n.jsx("main",{className:"mt-4 grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 xl:grid-cols-5",children:a.map(p=>n.jsx(ve,{id:p.id,name:p.name},p.name))}),n.jsx(we,{})]}):null]}):n.jsx("div",{className:"fixed top-0 flex h-screen w-full items-center justify-center bg-slate-50 lg:-z-10 dark:bg-slate-900",children:n.jsx(R,{size:24,displaysText:!0})}),!(r!=null&&r.length)&&l&&n.jsx("div",{className:"top-0 lg:fixed lg:h-screen",children:n.jsx(be,{type:"Pokémon"})})]})]})};export{ye as default};
