import{S as ye,i as De,s as Ie,Q as te,q as P,R as le,m as b,r as F,h as v,n as u,b as Q,C as o,f as x,g as ce,d as fe,t as J,O as ue,w as ne,x as ae,p as Be,y as re,u as Te,z as se,k as L,a as U,L as Ce,l as y,c as A,D as Y,o as Se,ad as Oe,E as Ve}from"../../../chunks/index-bc12511b.js";import{C as he}from"../../../chunks/cake-033f58bd.js";import{D as ge}from"../../../chunks/default-cakes-f27ecb64.js";import{g as pe}from"../../../chunks/bake-url-dd64d6a1.js";import{d as Re}from"../../../chunks/downloadSVG-dd049a32.js";function ke(n,e,r){const l=n.slice();return l[2]=e[r],l[4]=r,l}function $e(n){let e,r,l,h=n[2].name+"",f,$;return r=new he({props:{cake:n[2],wrap:!1}}),{c(){e=te("g"),ne(r.$$.fragment),l=te("text"),f=P(h),this.h()},l(a){e=le(a,"g",{transform:!0});var t=b(e);ae(r.$$.fragment,t),l=le(t,"text",{x:!0,y:!0,style:!0});var w=b(l);f=F(w,h),w.forEach(v),t.forEach(v),this.h()},h(){u(l,"x","340"),u(l,"y","150"),Be(l,"font-size","15mm"),u(e,"transform","translate(600, "+(200+n[4]*300)+")")},m(a,t){Q(a,e,t),re(r,e,null),o(e,l),o(l,f),$=!0},p(a,t){const w={};t&1&&(w.cake=a[2]),r.$set(w),(!$||t&1)&&h!==(h=a[2].name+"")&&Te(f,h)},i(a){$||(x(r.$$.fragment,a),$=!0)},o(a){J(r.$$.fragment,a),$=!1},d(a){a&&v(e),se(r)}}}function Ne(n){let e,r,l,h,f,$,a=n[0],t=[];for(let c=0;c<a.length;c+=1)t[c]=$e(ke(n,a,c));const w=c=>J(t[c],1,1,()=>{t[c]=null});return{c(){e=te("svg"),r=te("style"),l=P(`text {
			font-family: sans-serif;
		}
	`);for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=le(c,"svg",{id:!0,width:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xml:space":!0});var m=b(e);r=le(m,"style",{});var _=b(r);l=F(_,`text {
			font-family: sans-serif;
		}
	`),_.forEach(v);for(let I=0;I<t.length;I+=1)t[I].l(m);m.forEach(v),this.h()},h(){u(e,"id",n[1]),u(e,"width","210mm"),u(e,"height",h=30+n[0].length*30+"mm"),u(e,"viewBox",f="0 0 2100 "+(300+n[0].length*300)),u(e,"version","1.1"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xml:space","preserve")},m(c,m){Q(c,e,m),o(e,r),o(r,l);for(let _=0;_<t.length;_+=1)t[_].m(e,null);$=!0},p(c,[m]){if(m&1){a=c[0];let _;for(_=0;_<a.length;_+=1){const I=ke(c,a,_);t[_]?(t[_].p(I,m),x(t[_],1)):(t[_]=$e(I),t[_].c(),x(t[_],1),t[_].m(e,null))}for(ce(),_=a.length;_<t.length;_+=1)w(_);fe()}(!$||m&2)&&u(e,"id",c[1]),(!$||m&1&&h!==(h=30+c[0].length*30+"mm"))&&u(e,"height",h),(!$||m&1&&f!==(f="0 0 2100 "+(300+c[0].length*300)))&&u(e,"viewBox",f)},i(c){if(!$){for(let m=0;m<a.length;m+=1)x(t[m]);$=!0}},o(c){t=t.filter(Boolean);for(let m=0;m<t.length;m+=1)J(t[m]);$=!1},d(c){c&&v(e),ue(t,c)}}}function xe(n,e,r){let{printList:l=[]}=e,{id:h="print"}=e;return n.$$set=f=>{"printList"in f&&r(0,l=f.printList),"id"in f&&r(1,h=f.id)},[l,h]}class Ue extends ye{constructor(e){super(),De(this,e,xe,Ne,Ie,{printList:0,id:1})}}const oe="$P$";const{document:ie}=Oe;function Ee(n,e,r){const l=n.slice();return l[12]=e[r],l}function be(n,e,r){const l=n.slice();return l[12]=e[r],l}function we(n){let e,r,l,h,f,$,a,t=n[12].name+"",w,c,m,_,I,B,d,i,V,D,R,N,S,M,H;f=new he({props:{cake:n[12]}});function K(...T){return n[5](n[12],...T)}function j(...T){return n[6](n[12],...T)}return{c(){e=L("div"),r=L("div"),l=L("button"),h=L("div"),ne(f.$$.fragment),$=U(),a=L("div"),w=P(t),c=U(),m=L("br"),_=U(),I=L("a"),B=L("button"),d=P("Edit"),V=U(),D=L("button"),R=P("Delete"),N=U(),this.h()},l(T){e=y(T,"DIV",{class:!0});var C=b(e);r=y(C,"DIV",{class:!0});var k=b(r);l=y(k,"BUTTON",{class:!0});var Z=b(l);h=y(Z,"DIV",{class:!0});var q=b(h);ae(f.$$.fragment,q),q.forEach(v),Z.forEach(v),$=A(k),a=y(k,"DIV",{class:!0});var p=b(a);w=F(p,t),c=A(p),m=y(p,"BR",{}),_=A(p),I=y(p,"A",{class:!0,href:!0});var ee=b(I);B=y(ee,"BUTTON",{});var s=b(B);d=F(s,"Edit"),s.forEach(v),ee.forEach(v),V=A(p),D=y(p,"BUTTON",{class:!0});var E=b(D);R=F(E,"Delete"),E.forEach(v),p.forEach(v),k.forEach(v),N=A(C),C.forEach(v),this.h()},h(){u(h,"class","cake"),u(l,"class","cakeRow__button flat svelte-txfh84"),u(I,"class","icobutton flat"),u(I,"href",i=pe(n[12])),u(D,"class",""),u(a,"class","label svelte-txfh84"),u(r,"class","cakeRow__item svelte-txfh84"),u(e,"class","cakeRow")},m(T,C){Q(T,e,C),o(e,r),o(r,l),o(l,h),re(f,h,null),o(r,$),o(r,a),o(a,w),o(a,c),o(a,m),o(a,_),o(a,I),o(I,B),o(B,d),o(a,V),o(a,D),o(D,R),o(e,N),S=!0,M||(H=[Y(l,"click",K),Y(D,"click",j)],M=!0)},p(T,C){n=T;const k={};C&1&&(k.cake=n[12]),f.$set(k),(!S||C&1)&&t!==(t=n[12].name+"")&&Te(w,t),(!S||C&1&&i!==(i=pe(n[12])))&&u(I,"href",i)},i(T){S||(x(f.$$.fragment,T),S=!0)},o(T){J(f.$$.fragment,T),S=!1},d(T){T&&v(e),se(f),M=!1,Ve(H)}}}function Le(n){let e,r,l,h,f,$,a,t,w,c,m,_,I;f=new he({props:{cake:n[12]}});function B(...i){return n[8](n[12],...i)}function d(...i){return n[9](n[12],...i)}return{c(){e=L("div"),r=L("div"),l=L("button"),h=L("div"),ne(f.$$.fragment),$=U(),a=L("div"),t=L("textarea"),c=U(),this.h()},l(i){e=y(i,"DIV",{class:!0});var V=b(e);r=y(V,"DIV",{class:!0});var D=b(r);l=y(D,"BUTTON",{class:!0});var R=b(l);h=y(R,"DIV",{class:!0});var N=b(h);ae(f.$$.fragment,N),N.forEach(v),R.forEach(v),$=A(D),a=y(D,"DIV",{class:!0});var S=b(a);t=y(S,"TEXTAREA",{cols:!0,class:!0}),b(t).forEach(v),S.forEach(v),D.forEach(v),c=A(V),V.forEach(v),this.h()},h(){u(h,"class","cake"),u(l,"class","cakeRow__button superflat flat svelte-txfh84"),u(t,"cols","13"),u(t,"class","cakeRow__input svelte-txfh84"),t.value=w=n[12].name,u(a,"class","label svelte-txfh84"),u(r,"class","cakeRow__item svelte-txfh84"),u(e,"class","cakeRow")},m(i,V){Q(i,e,V),o(e,r),o(r,l),o(l,h),re(f,h,null),o(r,$),o(r,a),o(a,t),o(e,c),m=!0,_||(I=[Y(l,"click",B),Y(t,"change",d)],_=!0)},p(i,V){n=i;const D={};V&2&&(D.cake=n[12]),f.$set(D),(!m||V&2&&w!==(w=n[12].name))&&(t.value=w)},i(i){m||(x(f.$$.fragment,i),m=!0)},o(i){J(f.$$.fragment,i),m=!1},d(i){i&&v(e),se(f),_=!1,Ve(I)}}}function Ae(n){let e,r,l,h,f,$,a,t,w,c,m,_,I,B,d,i,V,D,R,N,S,M,H,K,j,T,C=n[0],k=[];for(let s=0;s<C.length;s+=1)k[s]=we(be(n,C,s));const Z=s=>J(k[s],1,1,()=>{k[s]=null});M=new Ue({props:{printList:n[1]}});let q=n[1],p=[];for(let s=0;s<q.length;s+=1)p[s]=Le(Ee(n,q,s));const ee=s=>J(p[s],1,1,()=>{p[s]=null});return{c(){e=L("meta"),r=U(),l=L("section"),h=L("h1"),f=P("Menu generator"),$=U(),a=L("div"),t=L("div"),w=P(`Stored in memory:
			`),c=L("div"),m=P("(Click on imago to select it for printing)"),_=U();for(let s=0;s<k.length;s+=1)k[s].c();I=U(),B=L("div"),d=L("button"),i=P("Download"),V=P(`
			Selected for export:
			`),D=L("div"),R=P("(you can edit label of cakes here)"),N=U(),S=L("div"),ne(M.$$.fragment),H=U();for(let s=0;s<p.length;s+=1)p[s].c();this.h()},l(s){const E=Ce("svelte-4ig4ka",ie.head);e=y(E,"META",{name:!0,content:!0}),E.forEach(v),r=A(s),l=y(s,"SECTION",{});var O=b(l);h=y(O,"H1",{});var g=b(h);f=F(g,"Menu generator"),g.forEach(v),$=A(O),a=y(O,"DIV",{class:!0});var z=b(a);t=y(z,"DIV",{class:!0});var W=b(t);w=F(W,`Stored in memory:
			`),c=y(W,"DIV",{class:!0});var _e=b(c);m=F(_e,"(Click on imago to select it for printing)"),_e.forEach(v),_=A(W);for(let G=0;G<k.length;G+=1)k[G].l(W);W.forEach(v),I=A(z),B=y(z,"DIV",{class:!0});var X=b(B);d=y(X,"BUTTON",{style:!0});var de=b(d);i=F(de,"Download"),de.forEach(v),V=F(X,`
			Selected for export:
			`),D=y(X,"DIV",{class:!0});var ve=b(D);R=F(ve,"(you can edit label of cakes here)"),ve.forEach(v),N=A(X),S=y(X,"DIV",{class:!0});var me=b(S);ae(M.$$.fragment,me),me.forEach(v),H=A(X);for(let G=0;G<p.length;G+=1)p[G].l(X);X.forEach(v),z.forEach(v),O.forEach(v),this.h()},h(){ie.title="Menu",u(e,"name","description"),u(e,"content","Menu generator"),u(c,"class","tiny"),u(t,"class","cakeList svelte-txfh84"),Be(d,"float","right"),u(D,"class","tiny"),u(S,"class","preview svelte-txfh84"),u(B,"class","cakeList printList svelte-txfh84"),u(a,"class","menu svelte-txfh84")},m(s,E){o(ie.head,e),Q(s,r,E),Q(s,l,E),o(l,h),o(h,f),o(l,$),o(l,a),o(a,t),o(t,w),o(t,c),o(c,m),o(t,_);for(let O=0;O<k.length;O+=1)k[O].m(t,null);o(a,I),o(a,B),o(B,d),o(d,i),o(B,V),o(B,D),o(D,R),o(B,N),o(B,S),re(M,S,null),o(B,H);for(let O=0;O<p.length;O+=1)p[O].m(B,null);K=!0,j||(T=Y(d,"click",n[7]),j=!0)},p(s,[E]){if(E&25){C=s[0];let g;for(g=0;g<C.length;g+=1){const z=be(s,C,g);k[g]?(k[g].p(z,E),x(k[g],1)):(k[g]=we(z),k[g].c(),x(k[g],1),k[g].m(t,null))}for(ce(),g=C.length;g<k.length;g+=1)Z(g);fe()}const O={};if(E&2&&(O.printList=s[1]),M.$set(O),E&22){q=s[1];let g;for(g=0;g<q.length;g+=1){const z=Ee(s,q,g);p[g]?(p[g].p(z,E),x(p[g],1)):(p[g]=Le(z),p[g].c(),x(p[g],1),p[g].m(B,null))}for(ce(),g=q.length;g<p.length;g+=1)ee(g);fe()}},i(s){if(!K){for(let E=0;E<C.length;E+=1)x(k[E]);x(M.$$.fragment,s);for(let E=0;E<q.length;E+=1)x(p[E]);K=!0}},o(s){k=k.filter(Boolean);for(let E=0;E<k.length;E+=1)J(k[E]);J(M.$$.fragment,s),p=p.filter(Boolean);for(let E=0;E<p.length;E+=1)J(p[E]);K=!1},d(s){v(e),s&&v(r),s&&v(l),ue(k,s),se(M),ue(p,s),j=!1,T()}}}function Me(n,e){return(n.name??"")>(e.name??"")?1:-1}function Pe(n,e){return(n.printOrder??0)>(e.printOrder??1)?1:-1}function Fe(n,e,r){let l,h=[],f=[];const $=(d,i)=>{l&&(l.setItem(`${d.name}${i?oe:""}`,JSON.stringify({...d,printOrder:i})),w())},a=d=>{var i;$(d,(((i=f.at(-1))==null?void 0:i.printOrder)??0)+1)},t=(d,i=!1)=>{l.removeItem(`${d.name}${i?oe:""}`),w()},w=()=>{if(!l)return;l.length==0&&ge.forEach(i=>$(i,0));const d=new Array(l.length).fill("").reduce((i,V,D)=>{const R=l.key(D),N=JSON.parse(l.getItem(R)??"");return R.includes(oe)?{cakeList:i.cakeList,printList:[...i.printList,N]}:{cakeList:[...i.cakeList,N],printList:i.printList}},{cakeList:[],printList:[]});r(0,h=d.cakeList.length>0?d.cakeList.sort(Me):ge),r(1,f=d.printList.sort(Pe))};return Se(()=>{typeof localStorage<"u"&&(l=localStorage,w())}),[h,f,$,a,t,(d,i)=>a(d),(d,i)=>t(d,!1),d=>Re(document.getElementById("print"),"byMona-menu.svg"),(d,i)=>t(d,!0),(d,i)=>{t(d,!0),$({...d,name:i.currentTarget.value},d.printOrder??0)}]}class He extends ye{constructor(e){super(),De(this,e,Fe,Ae,Ie,{})}}export{He as default};