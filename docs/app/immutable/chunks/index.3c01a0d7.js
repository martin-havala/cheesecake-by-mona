import{b as d}from"./paths.96154051.js";import{af as a}from"./index.ff763a08.js";function k(t){return`${d}/bake?data=${encodeURIComponent(JSON.stringify(t))}`}function U(t){const n=t-1;return n*n*n+1}function C(t,{delay:n=0,duration:e=400,easing:c=U,x:i=0,y:f=0,opacity:u=0}={}){const o=getComputedStyle(t),s=+o.opacity,m=o.transform==="none"?"":o.transform,p=s*(1-u),[y,l]=a(i),[$,g]=a(f);return{delay:n,duration:e,easing:c,css:(r,b)=>`
			transform: ${m} translate(${(1-r)*y}${l}, ${(1-r)*$}${g});
			opacity: ${s-p*b}`}}export{C as f,k as g};
