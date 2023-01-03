import"./index-77a6002e.js";function y(t){const o=t-1;return o*o*o+1}function $(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function d(t,{delay:o=0,duration:c=400,easing:e=y,x:f=0,y:i=0,opacity:s=0}={}){const n=getComputedStyle(t),r=+n.opacity,p=n.transform==="none"?"":n.transform,u=r*(1-s);return{delay:o,duration:c,easing:e,css:(m,a)=>`
			transform: ${p} translate(${(1-m)*f}px, ${(1-m)*i}px);
			opacity: ${r-u*a}`}}function g(t,{delay:o=0,duration:c=400,easing:e=y,start:f=0,opacity:i=0}={}){const s=getComputedStyle(t),n=+s.opacity,r=s.transform==="none"?"":s.transform,p=1-f,u=n*(1-i);return{delay:o,duration:c,easing:e,css:(m,a)=>`
			transform: ${r} scale(${1-p*a});
			opacity: ${n-u*a}
		`}}export{$ as e,d as f,g as s};
