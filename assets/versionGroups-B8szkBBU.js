import{r,c as i,h as c,j as s,B as m}from"./index-C6ruQNyi.js";function p({title:e,titleId:l,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),e?r.createElement("title",{id:l},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"}))}const u=r.forwardRef(p),f=e=>e.replace(/-+/g," ").trim().split(" ").map(l=>l[0].toUpperCase()+l.slice(1)).join(" "),d=()=>{const e=i.c(2),l=c();let a;return e[0]!==l?(a=()=>void l(-1),e[0]=l,e[1]=a):a=e[1],a},b=r.memo(()=>{const e=i.c(3),l=d();let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=s.jsx(u,{className:"size-4"}),e[0]=a):a=e[0];let t;return e[1]!==l?(t=s.jsxs(m,{onClick:l,style:"indigo",className:"pointer-events-auto flex items-center gap-2 px-4",children:[a," Back"]}),e[1]=l,e[2]=t):t=e[2],t});b.displayName="BackButton";const h=r.memo(e=>{const l=i.c(2),{generation:a,itemType:t}=e,n=a?`This ${t} originates from Generation ${a.split("-")[1].toUpperCase()}.`:"Loading...";let o;return l[0]!==n?(o=s.jsx("p",{className:"my-2",children:n}),l[0]=n,l[1]=o):o=l[1],o});h.displayName="GenerationText";const v={"scarlet-violet":{label:"Scarlet & Violet"},"legends-arceus":{label:"Legends: Arceus"},"brilliant-diamond-and-shining-pearl":{label:"Brilliant Diamond & Shining Pearl"},"sword-shield":{label:"Sword & Shield"},"lets-go-pikachu-lets-go-eevee":{label:"Let's Go, Pikachu! & Let's Go, Eevee!"},"ultra-sun-ultra-moon":{label:"Ultra Sun & Ultra Moon"},"sun-moon":{label:"Sun & Moon"},"omega-ruby-alpha-sapphire":{label:"Omega Ruby & Alpha Sapphire"},"x-y":{label:"X & Y"},"black-2-white-2":{label:"Black 2 & White 2"},"black-white":{label:"Black & White"},"heartgold-soulsilver":{label:"HeartGold & SoulSilver"},platinum:{label:"Platinum"},"diamond-pearl":{label:"Diamond & Pearl"},"firered-leafgreen":{label:"FireRed & LeafGreen"},emerald:{label:"Emerald"},"ruby-sapphire":{label:"Ruby & Sapphire"},crystal:{label:"Crystal"},"gold-silver":{label:"Gold & Silver"},yellow:{label:"Yellow"},"red-blue":{label:"Red & Blue"}};export{b as B,h as G,f as c,v};
