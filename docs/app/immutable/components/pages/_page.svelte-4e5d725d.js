import{S as ae,i as le,s as ne,k as g,a as S,q as w,L as oe,l as v,h as d,c as M,m as b,r as B,n as E,F as _,b as L,M as se,N as Y,f as A,d as re,t as H,O as G,P as ce,o as ie,B as he,w as fe,x as _e,y as ue,z as de,g as me}from"../../chunks/index-44d0d908.js";import{b as Q}from"../../chunks/paths-b4419565.js";import{C as pe}from"../../chunks/cake-16b7279d.js";import{P as J,g as ge}from"../../chunks/cakeGenerator-15e8a6be.js";function W(c,a,n){const l=c.slice();return l[5]=a[n],l}function X(c,a,n){const l=c.slice();return l[8]=a[n],l[10]=n,l}function Z(c){let a,n=c[8]+"",l;return{c(){a=g("option"),l=w(n),this.h()},l(o){a=v(o,"OPTION",{});var r=b(a);l=B(r,n),r.forEach(d),this.h()},h(){a.__value=c[10],a.value=a.__value,a.selected=c[10]==c[1]},m(o,r){L(o,a,r),_(a,l)},p:he,d(o){o&&d(a)}}}function ee(c){let a,n,l,o,r;return n=new pe({props:{cake:c[5]}}),{c(){a=g("a"),fe(n.$$.fragment),l=S(),this.h()},l(h){a=v(h,"A",{href:!0,class:!0});var m=b(a);_e(n.$$.fragment,m),l=M(m),m.forEach(d),this.h()},h(){E(a,"href",o=Q+"/bake?data="+encodeURIComponent(JSON.stringify(c[5]))),E(a,"class","cake svelte-nr8vgv")},m(h,m){L(h,a,m),ue(n,a,null),_(a,l),r=!0},p(h,m){const u={};m&1&&(u.cake=h[5]),n.$set(u),(!r||m&1&&o!==(o=Q+"/bake?data="+encodeURIComponent(JSON.stringify(h[5]))))&&E(a,"href",o)},i(h){r||(A(n.$$.fragment,h),r=!0)},o(h){H(n.$$.fragment,h),r=!1},d(h){h&&d(a),de(n)}}}function ve(c){let a,n,l,o,r,h,m,u,O,P,k,R,T,U,q,y,N,D,V,I=J,f=[];for(let t=0;t<I.length;t+=1)f[t]=Z(X(c,I,t));let $=c[0],s=[];for(let t=0;t<$.length;t+=1)s[t]=ee(W(c,$,t));const te=t=>H(s[t],1,1,()=>{s[t]=null});return{c(){a=g("meta"),n=S(),l=g("section"),o=g("div"),r=g("h1"),h=w("CheeseCake by Mona"),m=S(),u=g("p"),O=w("This is a tiny utility to generate cake visuals for Mona ♥"),P=S(),k=g("select");for(let t=0;t<f.length;t+=1)f[t].c();R=S(),T=g("button"),U=w("Bake a new batch"),q=S(),y=g("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){const i=oe("svelte-t32ptj",document.head);a=v(i,"META",{name:!0,content:!0}),i.forEach(d),n=M(t),l=v(t,"SECTION",{});var e=b(l);o=v(e,"DIV",{class:!0});var p=b(o);r=v(p,"H1",{});var j=b(r);h=B(j,"CheeseCake by Mona"),j.forEach(d),m=M(p),u=v(p,"P",{});var x=b(u);O=B(x,"This is a tiny utility to generate cake visuals for Mona ♥"),x.forEach(d),p.forEach(d),P=M(e),k=v(e,"SELECT",{id:!0});var z=b(k);for(let C=0;C<f.length;C+=1)f[C].l(z);z.forEach(d),R=M(e),T=v(e,"BUTTON",{});var F=b(T);U=B(F,"Bake a new batch"),F.forEach(d),q=M(e),y=v(e,"DIV",{class:!0});var K=b(y);for(let C=0;C<s.length;C+=1)s[C].l(K);K.forEach(d),e.forEach(d),this.h()},h(){document.title="Home",E(a,"name","description"),E(a,"content","Svelte demo app"),E(o,"class","text-column"),E(k,"id","palletes"),E(y,"class","bakery svelte-nr8vgv")},m(t,i){_(document.head,a),L(t,n,i),L(t,l,i),_(l,o),_(o,r),_(r,h),_(o,m),_(o,u),_(u,O),_(l,P),_(l,k);for(let e=0;e<f.length;e+=1)f[e].m(k,null);se(k,c[1]),_(l,R),_(l,T),_(T,U),_(l,q),_(l,y);for(let e=0;e<s.length;e+=1)s[e].m(y,null);N=!0,D||(V=[Y(k,"change",c[3]),Y(T,"click",c[4])],D=!0)},p(t,[i]){if(i&2){I=J;let e;for(e=0;e<I.length;e+=1){const p=X(t,I,e);f[e]?f[e].p(p,i):(f[e]=Z(p),f[e].c(),f[e].m(k,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=I.length}if(i&1){$=t[0];let e;for(e=0;e<$.length;e+=1){const p=W(t,$,e);s[e]?(s[e].p(p,i),A(s[e],1)):(s[e]=ee(p),s[e].c(),A(s[e],1),s[e].m(y,null))}for(me(),e=$.length;e<s.length;e+=1)te(e);re()}},i(t){if(!N){for(let i=0;i<$.length;i+=1)A(s[i]);N=!0}},o(t){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)H(s[i]);N=!1},d(t){d(a),t&&d(n),t&&d(l),G(f,t),G(s,t),D=!1,ce(V)}}}function ke(c,a,n){let l=[],o=J.findIndex(u=>u=="Retro")??0;const r=u=>{n(0,l=new Array(36).fill(0).map((O,P)=>ge(!0,u??o)))};return ie(()=>{r()}),[l,o,r,u=>r(+u.currentTarget.value),u=>r(o)]}class Ce extends ae{constructor(a){super(),le(this,a,ke,ve,ne,{})}}export{Ce as default};