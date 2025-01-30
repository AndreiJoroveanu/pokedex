import{b as h,f as m,j as e,h as g,r as o,e as x,i as j,k as u,l as b}from"./index-BnnnvK1R.js";import{b as f,B as c,c as N,d as v}from"./useSpecificPokemon-cZ7jLk64.js";const k=()=>{const s=h();return()=>void s(-1)},y=()=>{const{name:s}=m(),{starredPokemon:t,toggleStarredPokemon:i}=f();return e.jsxs(c,{onClick:()=>i(s),style:"gold",className:"fixed top-28 right-4 z-10 flex items-center gap-2 px-4",children:[e.jsx(g,{}),t.includes(s)?"Starred":"Star"]})},p=({pokemon:s})=>{var n;const[t,i]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:(n=s.sprites.other.home.front_default)==null?void 0:n.toString(),alt:s.name,onLoad:()=>i(!1),className:"mx-auto aspect-square object-contain text-transparent dark:brightness-90"}),t&&e.jsx("div",{className:"absolute top-0 aspect-square max-h-[512px] w-full bg-slate-100 dark:bg-slate-800",children:e.jsx(x,{size:24,displaysText:!0})})]}),e.jsx("h1",{className:"text-2xl font-bold capitalize",children:s.species.name}),e.jsxs("p",{children:[s.types.length===1?"Type: ":"Types: ",s.types.map(a=>e.jsx("span",{className:"capitalize",children:` ${a.type.name}`},a.type.name))]}),e.jsxs("p",{children:[s.abilities.length===1?"Ability: ":"Abilities: ",s.abilities.map(a=>e.jsx("span",{className:"capitalize",children:` ${a.ability.name}`},a.ability.name))]}),e.jsx("h2",{className:"mb-1 text-lg font-semibold",children:"Base Stats:"}),e.jsxs("div",{className:"mb-4 max-w-lg rounded-lg bg-slate-200 p-4 pb-2 shadow-lg transition-colors dark:bg-slate-700",children:[e.jsx("div",{className:"grid grid-cols-[auto_auto_1fr] gap-2",children:s.stats.map(a=>e.jsxs(o.Fragment,{children:[e.jsxs("h3",{className:"font-semibold capitalize",children:[a.stat.name.split("-").join(" "),":"]}),e.jsx("p",{className:"text-end",children:a.base_stat}),e.jsx("div",{className:"my-auto h-3/4 w-full rounded-sm bg-green-200 transition-colors dark:bg-green-700",children:e.jsx("div",{style:{width:`calc(100% * ${a.base_stat} / 255)`},className:"h-full rounded-sm bg-green-500/75"})})]},a.stat.name))}),e.jsx("h3",{className:"pt-2 font-semibold",children:`Base Stat Total: ${s.stats.map(a=>a.base_stat).reduce((a,l)=>a+l,0)}`})]})]})},P=({name:s})=>{const{data:t,isLoading:i}=N(s);return e.jsx(e.Fragment,{children:i||!t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"aspect-square max-h-[512px] w-full",children:e.jsx(x,{size:24,displaysText:!0})}),e.jsx("h1",{className:"text-2xl font-bold capitalize",children:s})]}):e.jsx(p,{pokemon:t})})},z=({pokemonSpecies:s})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:`This Pokémon originates from Generation ${s.generation.name.split("-")[1].toUpperCase()}`}),e.jsx("p",{className:"my-2",children:"Dex entries:"}),e.jsx("ul",{className:"divide-y-2 divide-slate-400/40",children:s.flavor_text_entries.filter(t=>t.language.name==="en").map(t=>e.jsxs("li",{className:"py-2",children:[e.jsx("span",{className:"font-bold capitalize",children:`${t.version.name.split("-").join(" ")}: `}),t.flavor_text]},t.version.name))})]}),F=()=>{const[s,t]=o.useState(0),{pokemon:i}=j().state??[],{name:n}=m(),{data:a}=v(n),l=k();return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:`Pokédex - ${u(n)}`}),e.jsxs(c,{onClick:l,style:"indigo",className:"fixed top-28 left-4 z-10 flex items-center gap-2 px-4",children:[e.jsx(b,{}),"Back"]}),e.jsx(y,{}),e.jsx("div",{className:"pt-0 md:pt-36 lg:pt-24",children:e.jsxs("div",{className:"mx-auto my-4 max-w-3xl bg-slate-100 p-4 pt-40 transition-colors md:rounded-lg md:border-2 md:border-slate-400/40 md:pt-4 dark:bg-slate-800",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:a&&a.varieties.length>1&&a.varieties.map((d,r)=>e.jsx(c,{onClick:()=>t(r),disabled:s===r,style:s===r?"indigo":"normal",className:"capitalize enabled:px-4 disabled:px-[17.5px]",children:d.pokemon.name.split("-").join(" ")},d.pokemon.name))}),i&&!s?e.jsx(p,{pokemon:i}):e.jsx(P,{name:(a==null?void 0:a.varieties[s].pokemon.name)??n}),a&&e.jsx(z,{pokemonSpecies:a})]})})]})};export{F as default};
