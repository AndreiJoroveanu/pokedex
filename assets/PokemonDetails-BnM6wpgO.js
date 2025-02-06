import{r as l,b as u,d as g,j as e,a as p,c as x,e as b,f as k}from"./index-4kyrKxAx.js";import{b as f,B as d,c as j,d as v}from"./useSpecificPokemon-K5I4A__Y.js";function N({title:a,titleId:t,...r},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},r),a?l.createElement("title",{id:t},a):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"}))}const L=l.forwardRef(N);function w({title:a,titleId:t,...r},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},r),a?l.createElement("title",{id:t},a):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const C=l.forwardRef(w),y=()=>{const a=u();return()=>void a(-1)},D=()=>{const{name:a}=g(),{starredPokemon:t,toggleStarredPokemon:r}=f();return e.jsxs(d,{onClick:()=>r(a),style:"gold",className:"fixed top-22 right-4 z-10 flex items-center gap-2 px-4 sm:top-28",children:[e.jsx(C,{className:"size-4"}),t.includes(a)?"Starred":"Star"]})},c=[{label:"HP",backgroundColorLight:"#d7f7b9",backgroundColorDark:"#4e6c30",colorLight:"#94d45c",colorDark:"#8ec45a"},{label:"Attack",backgroundColorLight:"#fcf0b1",backgroundColorDark:"#726530",colorLight:"#ddc460",colorDark:"#d6c15e"},{label:"Defense",backgroundColorLight:"#facbae",backgroundColorDark:"#72482f",colorLight:"#d88c5c",colorDark:"#d6885a"},{label:"Sp. Atk",backgroundColorLight:"#a8ecfc",backgroundColorDark:"#30687a",colorLight:"#5fc4dc",colorDark:"#5bbedc"},{label:"Sp. Def",backgroundColorLight:"#c7cff7",backgroundColorDark:"#3f4970",colorLight:"#7d8ccd",colorDark:"#798bcc"},{label:"Speed",backgroundColorLight:"#f6b2e3",backgroundColorDark:"#69325d",colorLight:"#cc60b5",colorDark:"#c55fb1"}],S=({pokemonStats:a})=>{const{actualTheme:t}=p(),r=s=>t==="dark"?c[s].backgroundColorDark:c[s].backgroundColorLight,o=s=>t==="dark"?c[s].colorDark:c[s].colorLight;return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-1 text-lg font-semibold",children:"Base Stats:"}),e.jsxs("div",{className:"mb-4 max-w-lg rounded-lg bg-slate-200 p-4 pb-2 shadow-lg transition-colors dark:bg-slate-700 dark:shadow-none",children:[e.jsx("div",{className:"grid grid-cols-[auto_auto_1fr] gap-2",children:a.map((s,n)=>e.jsxs(l.Fragment,{children:[e.jsxs("h3",{className:"font-semibold capitalize",children:[c[n].label,":"]}),e.jsx("p",{className:"text-end",children:s.base_stat}),e.jsx("div",{style:{backgroundColor:r(n)},className:"my-auto h-3/4 w-full rounded-sm transition-colors dark:bg-green-700",children:e.jsx("div",{style:{width:`calc(100% * ${s.base_stat} / 255)`,backgroundColor:o(n)},className:"h-full rounded-sm"})})]},s.stat.name))}),e.jsx("h3",{className:"pt-2 font-semibold",children:`Base Stat Total: ${a.map(s=>s.base_stat).reduce((s,n)=>s+n,0)}`})]})]})},h=({pokemon:a})=>{var o;const[t,r]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:(o=a.sprites.other.home.front_default)==null?void 0:o.toString(),alt:a.name,onLoad:()=>r(!1),className:"mx-auto aspect-square object-contain text-transparent dark:brightness-90"}),t&&e.jsx("div",{className:"absolute top-0 aspect-square max-h-[512px] w-full bg-slate-100 dark:bg-slate-800",children:e.jsx(x,{size:24,displaysText:!0})})]}),e.jsx("h1",{className:"text-2xl font-bold capitalize",children:a.species.name}),e.jsxs("p",{children:[a.types.length===1?"Type: ":"Types: ",a.types.map(s=>e.jsx("span",{className:"capitalize",children:` ${s.type.name}`},s.type.name))]}),e.jsxs("p",{children:[a.abilities.length===1?"Ability: ":"Abilities: ",a.abilities.map(s=>e.jsx("span",{className:"capitalize",children:` ${s.ability.name}`},s.ability.name))]}),e.jsx(S,{pokemonStats:a.stats})]})},P=({name:a})=>{const{data:t,isLoading:r}=j(a);return e.jsx(e.Fragment,{children:r||!t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"aspect-square max-h-[512px] w-full",children:e.jsx(x,{size:24,displaysText:!0})}),e.jsx("h1",{className:"text-2xl font-bold capitalize",children:a})]}):e.jsx(h,{pokemon:t})})},z=({pokemonSpecies:a})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:`This Pokémon originates from Generation ${a.generation.name.split("-")[1].toUpperCase()}`}),e.jsx("p",{className:"my-2",children:"Dex entries:"}),e.jsx("ul",{className:"divide-y-2 divide-slate-400/40",children:a.flavor_text_entries.filter(t=>t.language.name==="en").map(t=>e.jsxs("li",{className:"py-2",children:[e.jsx("span",{className:"font-bold capitalize",children:`${t.version.name.split("-").join(" ")}: `}),t.flavor_text]},t.version.name))})]}),_=()=>{const[a,t]=l.useState(0),{pokemon:r}=b().state??[],{name:o}=g(),{data:s}=v(o),n=y();return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:`Pokédex - ${k(o)}`}),e.jsxs(d,{onClick:n,style:"indigo",className:"fixed top-22 left-4 z-10 flex items-center gap-2 px-4 sm:top-28",children:[e.jsx(L,{className:"size-4"}),"Back"]}),e.jsx(D,{}),e.jsx("div",{className:"pt-0 md:pt-36 lg:pt-24",children:e.jsxs("div",{className:"mx-auto my-4 max-w-3xl bg-slate-100 p-4 transition-colors max-md:pt-40 max-sm:pt-32 md:rounded-lg md:border-2 md:border-slate-400/40 dark:bg-slate-800",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:s&&s.varieties.length>1&&s.varieties.map((m,i)=>e.jsx(d,{onClick:()=>t(i),disabled:a===i,style:a===i?"indigo":"normal",className:"capitalize enabled:px-4 disabled:px-[17.5px]",children:m.pokemon.name.split("-").join(" ")},m.pokemon.name))}),r&&!a?e.jsx(h,{pokemon:r}):e.jsx(P,{name:(s==null?void 0:s.varieties[a].pokemon.name)??o}),s&&e.jsx(z,{pokemonSpecies:s})]})})]})};export{_ as default};
