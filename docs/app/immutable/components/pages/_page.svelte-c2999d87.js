import{S as ce,i as ie,s as ae,k as v,a as M,q as O,L as he,l as k,h as m,c as P,m as E,r as A,n as b,M as ne,C as u,b as I,N as J,D as V,t as S,d as oe,f as B,O as se,E as _e,o as fe,e as W,g as re,B as ue,P as me,w as de,x as pe,y as ge,Q as ve,z as ke}from"../../chunks/index-77a6002e.js";import{C as Ee}from"../../chunks/cake-8e8ceaf4.js";import{g as X}from"../../chunks/bake-url-dd64d6a1.js";import{P as j,g as be}from"../../chunks/cake-generator-32ee8361.js";import{f as ye}from"../../chunks/index-8d3e60b6.js";function Z(s,t,r){const a=s.slice();return a[6]=t[r],a}function x(s,t,r){const a=s.slice();return a[9]=t[r],a[11]=r,a}function ee(s){let t,r=s[9]+"",a,e;return{c(){t=v("option"),a=O(r),this.h()},l(i){t=k(i,"OPTION",{});var l=E(t);a=A(l,r),l.forEach(m),this.h()},h(){t.__value=s[11],t.value=t.__value,t.selected=e=s[11]==s[1]},m(i,l){I(i,t,l),u(t,a)},p(i,l){l&2&&e!==(e=i[11]==i[1])&&(t.selected=e)},d(i){i&&m(t)}}}function te(s){let t,r,a,e,i,l;return r=new Ee({props:{cake:s[6]}}),{c(){t=v("a"),de(r.$$.fragment),a=M(),this.h()},l(o){t=k(o,"A",{href:!0,class:!0});var n=E(t);pe(r.$$.fragment,n),a=P(n),n.forEach(m),this.h()},h(){b(t,"href",e=X(s[6])),b(t,"class","cake svelte-1r5l9mp")},m(o,n){I(o,t,n),ge(r,t,null),u(t,a),l=!0},p(o,n){s=o;const _={};n&1&&(_.cake=s[6]),r.$set(_),(!l||n&1&&e!==(e=X(s[6])))&&b(t,"href",e)},i(o){l||(B(r.$$.fragment,o),i||ne(()=>{i=ve(t,ye,{y:-50,duration:500,delay:Math.random()*2e3}),i.start()}),l=!0)},o(o){S(r.$$.fragment,o),l=!1},d(o){o&&m(t),ke(r)}}}function le(s){let t,r,a=s[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=te(Z(s,a,l));const i=l=>S(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=W()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=W()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);I(l,t,o),r=!0},p(l,o){if(o&1){a=l[0];let n;for(n=0;n<a.length;n+=1){const _=Z(l,a,n);e[n]?(e[n].p(_,o),B(e[n],1)):(e[n]=te(_),e[n].c(),B(e[n],1),e[n].m(t.parentNode,t))}for(re(),n=a.length;n<e.length;n+=1)i(n);oe()}},i(l){if(!r){for(let o=0;o<a.length;o+=1)B(e[o]);r=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)S(e[o]);r=!1},d(l){se(e,l),l&&m(t)}}}function Ce(s){let t,r,a,e,i,l,o,n,_,w,d,L,$,D,q,y,z=s[0],N,H,K,T=j,f=[];for(let c=0;c<T.length;c+=1)f[c]=ee(x(s,T,c));let p=le(s);return{c(){t=v("meta"),r=M(),a=v("section"),e=v("div"),i=v("h1"),l=O("CheeseCake by Mona"),o=M(),n=v("p"),_=O("This is a tiny utility to generate cake visuals for Mona ♥"),w=M(),d=v("select");for(let c=0;c<f.length;c+=1)f[c].c();L=M(),$=v("button"),D=O("Bake a new batch"),q=M(),y=v("div"),p.c(),this.h()},l(c){const g=he("svelte-t32ptj",document.head);t=k(g,"META",{name:!0,content:!0}),g.forEach(m),r=P(c),a=k(c,"SECTION",{});var h=E(a);e=k(h,"DIV",{class:!0});var C=E(e);i=k(C,"H1",{});var Q=E(i);l=A(Q,"CheeseCake by Mona"),Q.forEach(m),o=P(C),n=k(C,"P",{});var R=E(n);_=A(R,"This is a tiny utility to generate cake visuals for Mona ♥"),R.forEach(m),C.forEach(m),w=P(h),d=k(h,"SELECT",{id:!0});var Y=E(d);for(let U=0;U<f.length;U+=1)f[U].l(Y);Y.forEach(m),L=P(h),$=k(h,"BUTTON",{});var F=E($);D=A(F,"Bake a new batch"),F.forEach(m),q=P(h),y=k(h,"DIV",{class:!0});var G=E(y);p.l(G),G.forEach(m),h.forEach(m),this.h()},h(){document.title="Home",b(t,"name","description"),b(t,"content","Svelte demo app"),b(e,"class","text-column"),b(d,"id","palletes"),s[1]===void 0&&ne(()=>s[3].call(d)),b(y,"class","bakery svelte-1r5l9mp")},m(c,g){u(document.head,t),I(c,r,g),I(c,a,g),u(a,e),u(e,i),u(i,l),u(e,o),u(e,n),u(n,_),u(a,w),u(a,d);for(let h=0;h<f.length;h+=1)f[h].m(d,null);J(d,s[1]),u(a,L),u(a,$),u($,D),u(a,q),u(a,y),p.m(y,null),N=!0,H||(K=[V(d,"change",s[3]),V(d,"change",s[4]),V($,"click",s[5])],H=!0)},p(c,[g]){if(g&2){T=j;let h;for(h=0;h<T.length;h+=1){const C=x(c,T,h);f[h]?f[h].p(C,g):(f[h]=ee(C),f[h].c(),f[h].m(d,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=T.length}g&2&&J(d,c[1]),g&1&&ae(z,z=c[0])?(re(),S(p,1,1,ue),oe(),p=le(c),p.c(),B(p,1),p.m(y,null)):p.p(c,g)},i(c){N||(B(p),N=!0)},o(c){S(p),N=!1},d(c){m(t),c&&m(r),c&&m(a),se(f,c),p.d(c),H=!1,_e(K)}}}function $e(s,t,r){let a=[],e=j.findIndex(_=>_=="Retro")??0;const i=_=>{r(0,a=new Array(16).fill(0).map((w,d)=>be(!0,_??e)))};fe(()=>{i()});function l(){e=me(this),r(1,e)}return[a,e,i,l,_=>i(+_.currentTarget.value),_=>i(e)]}class Se extends ce{constructor(t){super(),ie(this,t,$e,Ce,ae,{})}}export{Se as default};
