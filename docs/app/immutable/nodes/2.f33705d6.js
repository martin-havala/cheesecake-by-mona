import{S as he,i as fe,s as se,k,a as S,q as w,M as ue,l as b,h as u,c as I,m as y,r as N,n as E,N as re,C as h,b as D,O as Z,D as U,d as j,f as ce,g as O,P as ie,F as de,o as pe,e as x,v as _e,E as me,Q as ve,y as ge,z as ke,A as be,R as ye,B as Ee}from"../chunks/index.ff763a08.js";import{C as Ce}from"../chunks/cake.d1394147.js";import{g as ee,f as Te}from"../chunks/index.3c01a0d7.js";import{P as F,g as $e}from"../chunks/cake-generator.aa50d5fe.js";const Me=!0,Pe=!0,Ne=Object.freeze(Object.defineProperty({__proto__:null,csr:Me,prerender:Pe},Symbol.toStringTag,{value:"Module"}));function te(s,t,r){const a=s.slice();return a[6]=t[r],a[8]=r,a}function le(s,t,r){const a=s.slice();return a[9]=t[r],a[8]=r,a}function ae(s){let t,r=s[9]+"",a,e;return{c(){t=k("option"),a=w(r),this.h()},l(i){t=b(i,"OPTION",{});var l=y(t);a=N(l,r),l.forEach(u),this.h()},h(){t.__value=s[8],t.value=t.__value,t.selected=e=s[8]==s[1]},m(i,l){D(i,t,l),h(t,a)},p(i,l){l&2&&e!==(e=i[8]==i[1])&&(t.selected=e)},d(i){i&&u(t)}}}function ne(s){let t,r,a,e,i,l;return r=new Ce({props:{cake:s[6]}}),{c(){t=k("a"),ge(r.$$.fragment),a=S(),this.h()},l(o){t=b(o,"A",{href:!0,class:!0});var n=y(t);ke(r.$$.fragment,n),a=I(n),n.forEach(u),this.h()},h(){E(t,"href",e=ee(s[6])),E(t,"class","cake svelte-xc3bfx")},m(o,n){D(o,t,n),be(r,t,null),h(t,a),l=!0},p(o,n){s=o;const d={};n&1&&(d.cake=s[6]),r.$set(d),(!l||n&1&&e!==(e=ee(s[6])))&&E(t,"href",e)},i(o){l||(O(r.$$.fragment,o),i||re(()=>{i=ye(t,Te,{y:-20,duration:800,delay:(s[6].delay??1)*77}),i.start()}),l=!0)},o(o){j(r.$$.fragment,o),l=!1},d(o){o&&u(t),Ee(r)}}}function oe(s){let t,r,a=s[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=ne(te(s,a,l));const i=l=>j(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=x()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=x()},m(l,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,o);D(l,t,o),r=!0},p(l,o){if(o&1){a=l[0];let n;for(n=0;n<a.length;n+=1){const d=te(l,a,n);e[n]?(e[n].p(d,o),O(e[n],1)):(e[n]=ne(d),e[n].c(),O(e[n],1),e[n].m(t.parentNode,t))}for(_e(),n=a.length;n<e.length;n+=1)i(n);ce()}},i(l){if(!r){for(let o=0;o<a.length;o+=1)O(e[o]);r=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)j(e[o]);r=!1},d(l){ie(e,l),l&&u(t)}}}function Se(s){let t,r,a,e,i,l,o,n,d,A,p,C,m,V,M,q,z,T,K=s[0],L,H,Q,P=F,f=[];for(let c=0;c<P.length;c+=1)f[c]=ae(le(s,P,c));let v=oe(s);return{c(){t=k("meta"),r=S(),a=k("section"),e=k("div"),i=k("h1"),l=w("CheeseCake by Mona"),o=S(),n=k("p"),d=w("This is a tiny utility to generate cake visuals for Mona ♥"),A=S(),p=k("div"),C=w("Colour pallete: "),m=k("select");for(let c=0;c<f.length;c+=1)f[c].c();V=S(),M=k("button"),q=w("Bake a new batch"),z=S(),T=k("div"),v.c(),this.h()},l(c){const g=ue("svelte-t32ptj",document.head);t=b(g,"META",{name:!0,content:!0}),g.forEach(u),r=I(c),a=b(c,"SECTION",{});var _=y(a);e=b(_,"DIV",{class:!0});var $=y(e);i=b($,"H1",{});var Y=y(i);l=N(Y,"CheeseCake by Mona"),Y.forEach(u),o=I($),n=b($,"P",{});var G=y(n);d=N(G,"This is a tiny utility to generate cake visuals for Mona ♥"),G.forEach(u),$.forEach(u),A=I(_),p=b(_,"DIV",{class:!0});var B=y(p);C=N(B,"Colour pallete: "),m=b(B,"SELECT",{id:!0});var J=y(m);for(let R=0;R<f.length;R+=1)f[R].l(J);J.forEach(u),V=I(B),M=b(B,"BUTTON",{});var W=y(M);q=N(W,"Bake a new batch"),W.forEach(u),B.forEach(u),z=I(_),T=b(_,"DIV",{class:!0});var X=y(T);v.l(X),X.forEach(u),_.forEach(u),this.h()},h(){document.title="Home",E(t,"name","description"),E(t,"content","Svelte demo app"),E(e,"class","text-column"),E(m,"id","palletes"),s[1]===void 0&&re(()=>s[3].call(m)),E(p,"class","controls svelte-xc3bfx"),E(T,"class","bakery svelte-xc3bfx")},m(c,g){h(document.head,t),D(c,r,g),D(c,a,g),h(a,e),h(e,i),h(i,l),h(e,o),h(e,n),h(n,d),h(a,A),h(a,p),h(p,C),h(p,m);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(m,null);Z(m,s[1],!0),h(p,V),h(p,M),h(M,q),h(a,z),h(a,T),v.m(T,null),L=!0,H||(Q=[U(m,"change",s[3]),U(m,"change",s[4]),U(M,"click",s[5])],H=!0)},p(c,[g]){if(g&2){P=F;let _;for(_=0;_<P.length;_+=1){const $=le(c,P,_);f[_]?f[_].p($,g):(f[_]=ae($),f[_].c(),f[_].m(m,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=P.length}g&2&&Z(m,c[1]),g&1&&se(K,K=c[0])?(_e(),j(v,1,1,me),ce(),v=oe(c),v.c(),O(v,1),v.m(T,null)):v.p(c,g)},i(c){L||(O(v),L=!0)},o(c){j(v),L=!1},d(c){u(t),c&&u(r),c&&u(a),ie(f,c),v.d(c),H=!1,de(Q)}}}function Ie(s,t,r){let a=[],e=F.findIndex(d=>d=="Retro")??0;const i=d=>{const A=new Array(16).fill(0).map((p,C)=>C).sort(p=>Math.random()>.5?1:-1);r(0,a=new Array(16).fill(0).map((p,C)=>$e(!0,d??e)).map((p,C)=>({...p,delay:A[C]})))};pe(()=>{i()});function l(){e=ve(this),r(1,e)}return[a,e,i,l,d=>i(+d.currentTarget.value),d=>i(e)]}class De extends he{constructor(t){super(),fe(this,t,Ie,Se,se,{})}}export{De as component,Ne as universal};
