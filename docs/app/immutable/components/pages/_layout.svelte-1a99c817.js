import{S as fe,i as _e,s as he,k as r,a as H,q,l as n,m as i,c as B,h as c,r as w,n as e,C as pe,b as de,D as a,E as G,B as oe,F as me,G as ve,H as be,w as ge,x as Ee,y as ke,I as ye,J as $e,K as Me,f as ue,t as ie,z as Ae}from"../../chunks/index-fba324e5.js";import{p as Ie}from"../../chunks/stores-0cc594c3.js";import{b as F}from"../../chunks/paths-b4419565.js";const Le=""+new URL("../../assets/github-mark-b0c0199c.svg",import.meta.url).href;function xe(o){let t,l,f,_,d,m,b,p,v,g,$,M,h,s,u,P,z,C,k,A,O,R,T,I,L,J,V,K,S,D,N,Q,j,W;return{c(){t=r("header"),l=r("nav"),f=r("input"),_=H(),d=r("label"),m=r("span"),b=H(),p=r("ul"),v=r("li"),g=r("a"),$=q("Home"),h=H(),s=r("li"),u=r("a"),P=q("Bake"),C=H(),k=r("li"),A=r("a"),O=q("Menu"),T=H(),I=r("li"),L=r("a"),J=q("ByMona"),K=H(),S=r("div"),D=r("a"),N=r("img"),this.h()},l(y){t=n(y,"HEADER",{class:!0});var E=i(t);l=n(E,"NAV",{class:!0});var U=i(l);f=n(U,"INPUT",{id:!0,type:!0,class:!0}),_=B(U),d=n(U,"LABEL",{class:!0,for:!0});var X=i(d);m=n(X,"SPAN",{class:!0}),i(m).forEach(c),X.forEach(c),b=B(U),p=n(U,"UL",{class:!0});var x=i(p);v=n(x,"LI",{"aria-current":!0,class:!0});var Y=i(v);g=n(Y,"A",{href:!0,class:!0});var Z=i(g);$=w(Z,"Home"),Z.forEach(c),Y.forEach(c),h=B(x),s=n(x,"LI",{"aria-current":!0,class:!0});var ee=i(s);u=n(ee,"A",{href:!0,class:!0});var ae=i(u);P=w(ae,"Bake"),ae.forEach(c),ee.forEach(c),C=B(x),k=n(x,"LI",{"aria-current":!0,class:!0});var te=i(k);A=n(te,"A",{href:!0,class:!0});var se=i(A);O=w(se,"Menu"),se.forEach(c),te.forEach(c),T=B(x),I=n(x,"LI",{"aria-current":!0,class:!0});var le=i(I);L=n(le,"A",{href:!0,class:!0});var re=i(L);J=w(re,"ByMona"),re.forEach(c),le.forEach(c),x.forEach(c),U.forEach(c),K=B(E),S=n(E,"DIV",{class:!0});var ne=i(S);D=n(ne,"A",{href:!0,class:!0});var ce=i(D);N=n(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(c),ne.forEach(c),E.forEach(c),this.h()},h(){e(f,"id","menu__toggle"),e(f,"type","checkbox"),f.hidden=!0,e(f,"class","svelte-1b73xao"),e(m,"class","svelte-1b73xao"),e(d,"class","menu__btn svelte-1b73xao"),e(d,"for","menu__toggle"),e(g,"href",F+"/"),e(g,"class","svelte-1b73xao"),e(v,"aria-current",M=o[1].url.pathname.slice(-4)==="mona"?"page":void 0),e(v,"class","svelte-1b73xao"),e(u,"href",F+"/bake"),e(u,"class","svelte-1b73xao"),e(s,"aria-current",z=o[1].url.pathname.includes("/bake")?"page":void 0),e(s,"class","svelte-1b73xao"),e(A,"href",F+"/menu"),e(A,"class","svelte-1b73xao"),e(k,"aria-current",R=o[1].url.pathname.includes("/menu")?"page":void 0),e(k,"class","svelte-1b73xao"),e(L,"href",F+"/byMona"),e(L,"class","svelte-1b73xao"),e(I,"aria-current",V=o[1].url.pathname.includes("/byMona")?"page":void 0),e(I,"class","svelte-1b73xao"),e(p,"class","svelte-1b73xao"),e(l,"class","hamburger-menu svelte-1b73xao"),pe(N.src,Q=Le)||e(N,"src",Q),e(N,"alt","GitHub"),e(N,"class","svelte-1b73xao"),e(D,"href","https://github.com/martin-havala/cheesecake-by-mona"),e(D,"class","svelte-1b73xao"),e(S,"class","corner svelte-1b73xao"),e(t,"class","svelte-1b73xao")},m(y,E){de(y,t,E),a(t,l),a(l,f),f.checked=o[0],a(l,_),a(l,d),a(d,m),a(l,b),a(l,p),a(p,v),a(v,g),a(g,$),a(p,h),a(p,s),a(s,u),a(u,P),a(p,C),a(p,k),a(k,A),a(A,O),a(p,T),a(p,I),a(I,L),a(L,J),a(t,K),a(t,S),a(S,D),a(D,N),j||(W=[G(f,"change",o[3]),G(g,"click",o[2]),G(u,"click",o[2]),G(A,"click",o[2]),G(L,"click",o[2])],j=!0)},p(y,[E]){E&1&&(f.checked=y[0]),E&2&&M!==(M=y[1].url.pathname.slice(-4)==="mona"?"page":void 0)&&e(v,"aria-current",M),E&2&&z!==(z=y[1].url.pathname.includes("/bake")?"page":void 0)&&e(s,"aria-current",z),E&2&&R!==(R=y[1].url.pathname.includes("/menu")?"page":void 0)&&e(k,"aria-current",R),E&2&&V!==(V=y[1].url.pathname.includes("/byMona")?"page":void 0)&&e(I,"aria-current",V)},i:oe,o:oe,d(y){y&&c(t),j=!1,me(W)}}}function He(o,t,l){let f;ve(o,Ie,b=>l(1,f=b));let _=!1;function d(){l(0,_=!_)}function m(){_=this.checked,l(0,_)}return[_,f,d,m]}class Be extends fe{constructor(t){super(),_e(this,t,He,xe,he,{})}}function ze(o){let t,l,f,_,d,m,b,p,v,g,$;l=new Be({});const M=o[1].default,h=be(M,o,o[0],null);return{c(){t=r("div"),ge(l.$$.fragment),f=H(),_=r("main"),h&&h.c(),d=H(),m=r("footer"),b=r("p"),p=q("Cheesecake by Mona "),v=r("sup"),g=q("®"),this.h()},l(s){t=n(s,"DIV",{class:!0});var u=i(t);Ee(l.$$.fragment,u),f=B(u),_=n(u,"MAIN",{class:!0});var P=i(_);h&&h.l(P),P.forEach(c),d=B(u),m=n(u,"FOOTER",{class:!0});var z=i(m);b=n(z,"P",{});var C=i(b);p=w(C,"Cheesecake by Mona "),v=n(C,"SUP",{});var k=i(v);g=w(k,"®"),k.forEach(c),C.forEach(c),z.forEach(c),u.forEach(c),this.h()},h(){e(_,"class","svelte-1tzt2bh"),e(m,"class","svelte-1tzt2bh"),e(t,"class","app svelte-1tzt2bh")},m(s,u){de(s,t,u),ke(l,t,null),a(t,f),a(t,_),h&&h.m(_,null),a(t,d),a(t,m),a(m,b),a(b,p),a(b,v),a(v,g),$=!0},p(s,[u]){h&&h.p&&(!$||u&1)&&ye(h,M,s,s[0],$?Me(M,s[0],u,null):$e(s[0]),null)},i(s){$||(ue(l.$$.fragment,s),ue(h,s),$=!0)},o(s){ie(l.$$.fragment,s),ie(h,s),$=!1},d(s){s&&c(t),Ae(l),h&&h.d(s)}}}function Ce(o,t,l){let{$$slots:f={},$$scope:_}=t;return o.$$set=d=>{"$$scope"in d&&l(0,_=d.$$scope)},[_,f]}class Se extends fe{constructor(t){super(),_e(this,t,Ce,ze,he,{})}}export{Se as default};
