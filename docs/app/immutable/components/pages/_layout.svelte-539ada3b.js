import{S as le,i as ne,s as ue,k as n,a as S,q as G,l as u,m as f,c as C,h as s,r as R,n as a,b as F,C as t,D as V,B as te,E as ie,F as ce,G as oe,w as fe,x as _e,H as he,y as de,I as pe,J as me,K as ve,f as se,t as re,z as ge}from"../../chunks/index-bc12511b.js";import{p as Ee}from"../../chunks/stores-8d11a567.js";import{b as T}from"../../chunks/paths-b4419565.js";function be(c){let l,i,r,_,h,d,E,m,g,b,D,j,I,v,k,L,B,p,e,o,U,H,P,$,y,q,O,z,J;return{c(){l=n("header"),i=n("nav"),r=n("input"),_=S(),h=n("label"),d=n("span"),E=S(),m=n("ul"),g=n("li"),b=n("a"),D=G("Home"),I=S(),v=n("li"),k=n("a"),L=G("Bake"),p=S(),e=n("li"),o=n("a"),U=G("Menu"),P=S(),$=n("li"),y=n("a"),q=G("ByMona"),this.h()},l(A){l=u(A,"HEADER",{class:!0});var M=f(l);i=u(M,"NAV",{class:!0});var w=f(i);r=u(w,"INPUT",{id:!0,type:!0,class:!0}),_=C(w),h=u(w,"LABEL",{class:!0,for:!0});var K=f(h);d=u(K,"SPAN",{class:!0}),f(d).forEach(s),K.forEach(s),E=C(w),m=u(w,"UL",{class:!0});var N=f(m);g=u(N,"LI",{"aria-current":!0,class:!0});var Q=f(g);b=u(Q,"A",{href:!0,class:!0});var W=f(b);D=R(W,"Home"),W.forEach(s),Q.forEach(s),I=C(N),v=u(N,"LI",{"aria-current":!0,class:!0});var X=f(v);k=u(X,"A",{href:!0,class:!0});var Y=f(k);L=R(Y,"Bake"),Y.forEach(s),X.forEach(s),p=C(N),e=u(N,"LI",{"aria-current":!0,class:!0});var Z=f(e);o=u(Z,"A",{href:!0,class:!0});var x=f(o);U=R(x,"Menu"),x.forEach(s),Z.forEach(s),P=C(N),$=u(N,"LI",{"aria-current":!0,class:!0});var ee=f($);y=u(ee,"A",{href:!0,class:!0});var ae=f(y);q=R(ae,"ByMona"),ae.forEach(s),ee.forEach(s),N.forEach(s),w.forEach(s),M.forEach(s),this.h()},h(){a(r,"id","menu__toggle"),a(r,"type","checkbox"),r.hidden=!0,a(r,"class","svelte-1irju89"),a(d,"class","svelte-1irju89"),a(h,"class","menu__btn svelte-1irju89"),a(h,"for","menu__toggle"),a(b,"href",T+"/"),a(b,"class","svelte-1irju89"),a(g,"aria-current",j=c[1].url.pathname.includes("mona",-5)?"page":void 0),a(g,"class","svelte-1irju89"),a(k,"href",T+"/bake"),a(k,"class","svelte-1irju89"),a(v,"aria-current",B=c[1].url.pathname.includes("/bake")?"page":void 0),a(v,"class","svelte-1irju89"),a(o,"href",T+"/menu"),a(o,"class","svelte-1irju89"),a(e,"aria-current",H=c[1].url.pathname.includes("/menu")?"page":void 0),a(e,"class","svelte-1irju89"),a(y,"href",T+"/logo"),a(y,"class","svelte-1irju89"),a($,"aria-current",O=c[1].url.pathname.includes("/logo")?"page":void 0),a($,"class","svelte-1irju89"),a(m,"class","svelte-1irju89"),a(i,"class","hamburger-menu svelte-1irju89"),a(l,"class","svelte-1irju89")},m(A,M){F(A,l,M),t(l,i),t(i,r),r.checked=c[0],t(i,_),t(i,h),t(h,d),t(i,E),t(i,m),t(m,g),t(g,b),t(b,D),t(m,I),t(m,v),t(v,k),t(k,L),t(m,p),t(m,e),t(e,o),t(o,U),t(m,P),t(m,$),t($,y),t(y,q),z||(J=[V(r,"change",c[3]),V(b,"click",c[2]),V(k,"click",c[2]),V(o,"click",c[2]),V(y,"click",c[2])],z=!0)},p(A,[M]){M&1&&(r.checked=A[0]),M&2&&j!==(j=A[1].url.pathname.includes("mona",-5)?"page":void 0)&&a(g,"aria-current",j),M&2&&B!==(B=A[1].url.pathname.includes("/bake")?"page":void 0)&&a(v,"aria-current",B),M&2&&H!==(H=A[1].url.pathname.includes("/menu")?"page":void 0)&&a(e,"aria-current",H),M&2&&O!==(O=A[1].url.pathname.includes("/logo")?"page":void 0)&&a($,"aria-current",O)},i:te,o:te,d(A){A&&s(l),z=!1,ie(J)}}}function je(c,l,i){let r;ce(c,Ee,E=>i(1,r=E));let _=!1;function h(){i(0,_=!_)}function d(){_=this.checked,i(0,_)}return[_,r,h,d]}class ke extends le{constructor(l){super(),ne(this,l,je,be,ue,{})}}const $e=""+new URL("../../assets/github-mark-b0c0199c.svg",import.meta.url).href;function ye(c){let l,i,r,_,h,d,E,m,g,b,D,j,I,v,k,L;l=new ke({});const B=c[1].default,p=oe(B,c,c[0],null);return{c(){fe(l.$$.fragment),i=S(),r=n("main"),_=n("div"),p&&p.c(),h=S(),d=n("footer"),E=n("span"),m=G("Cheesecake by Mona "),g=n("sup"),b=G("®"),D=S(),j=n("div"),I=n("a"),v=n("img"),this.h()},l(e){_e(l.$$.fragment,e),i=C(e),r=u(e,"MAIN",{class:!0});var o=f(r);_=u(o,"DIV",{class:!0});var U=f(_);p&&p.l(U),U.forEach(s),o.forEach(s),h=C(e),d=u(e,"FOOTER",{class:!0});var H=f(d);E=u(H,"SPAN",{});var P=f(E);m=R(P,"Cheesecake by Mona "),g=u(P,"SUP",{});var $=f(g);b=R($,"®"),$.forEach(s),P.forEach(s),D=C(H),j=u(H,"DIV",{class:!0});var y=f(j);I=u(y,"A",{href:!0});var q=f(I);v=u(q,"IMG",{src:!0,alt:!0,class:!0}),q.forEach(s),y.forEach(s),H.forEach(s),this.h()},h(){a(_,"class","content svelte-1x3nj3p"),a(r,"class","svelte-1x3nj3p"),he(v.src,k=$e)||a(v,"src",k),a(v,"alt","GitHub"),a(v,"class","svelte-1x3nj3p"),a(I,"href","https://github.com/martin-havala/cheesecake-by-mona"),a(j,"class","github svelte-1x3nj3p"),a(d,"class","svelte-1x3nj3p")},m(e,o){de(l,e,o),F(e,i,o),F(e,r,o),t(r,_),p&&p.m(_,null),F(e,h,o),F(e,d,o),t(d,E),t(E,m),t(E,g),t(g,b),t(d,D),t(d,j),t(j,I),t(I,v),L=!0},p(e,[o]){p&&p.p&&(!L||o&1)&&pe(p,B,e,e[0],L?ve(B,e[0],o,null):me(e[0]),null)},i(e){L||(se(l.$$.fragment,e),se(p,e),L=!0)},o(e){re(l.$$.fragment,e),re(p,e),L=!1},d(e){ge(l,e),e&&s(i),e&&s(r),p&&p.d(e),e&&s(h),e&&s(d)}}}function Ae(c,l,i){let{$$slots:r={},$$scope:_}=l;return c.$$set=h=>{"$$scope"in h&&i(0,_=h.$$scope)},[_,r]}class He extends le{constructor(l){super(),ne(this,l,Ae,ye,ue,{})}}export{He as default};
