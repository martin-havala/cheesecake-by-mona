import{S as yt,i as vt,s as kt,k as u,N as $t,a as v,q,l as _,m as g,O as Bt,c as k,r as R,h as a,n as h,P as Ze,b as G,F as o,Q as Ae,R as Ke,T as J,B as he,M as Et,U as Pt,L as Ot,t as ce,d as Tt,f as ie,o as wt,g as St,V as Lt,W as ke,X as Ee,w as Pe,e as ut,x as Te,Y as Dt,y as Se,Z as Ce,z as Ne}from"../../../chunks/index-edee581c.js";import{P as tt,S as We,C as Ut,D as ot}from"../../../chunks/cake-dd9d4a6b.js";import{g as et}from"../../../chunks/cakeGenerator-329a2fc8.js";function _t(t,r,n){const e=t.slice();return e[11]=r[n],e}function dt(t){let r,n=tt[t[11]]+"",e;return{c(){r=u("option"),e=q(n),this.h()},l(c){r=_(c,"OPTION",{});var i=g(r);e=R(i,n),i.forEach(a),this.h()},h(){r.__value=t[11],r.value=r.__value},m(c,i){G(c,r,i),o(r,e)},p:he,d(c){c&&a(r)}}}function qt(t){let r,n,e,c,i,b,C,m,T,O,P,L,y,p,$,H,te,M,se,le,N,j,fe,oe,s,E,f,F,B,ee,de,Y,re,Ie,$e,z,pe,ne,ue,Be,Z,Q,Oe,K,ae,me=Object.values(tt).filter(t[9]).map(mt),V=[];for(let d=0;d<me.length;d+=1)V[d]=dt(_t(t,me,d));return{c(){r=u("form"),n=u("fieldset"),e=u("legend"),c=new $t(!1),i=v(),b=u("button"),C=q("Remove"),m=v(),T=u("div"),O=u("label"),P=q("color1"),y=v(),p=u("input"),te=v(),M=u("button"),se=q("Remove"),le=v(),N=u("div"),j=u("label"),fe=q("color2"),s=v(),E=u("input"),B=v(),ee=u("button"),de=q("Remove"),Y=v(),re=u("button"),Ie=q("Switch"),$e=v(),z=u("div"),pe=u("label"),ne=q("pattern"),Be=v(),Z=u("select");for(let d=0;d<V.length;d+=1)V[d].c();this.h()},l(d){r=_(d,"FORM",{});var w=g(r);n=_(w,"FIELDSET",{});var S=g(n);e=_(S,"LEGEND",{});var W=g(e);c=Bt(W,!1),i=k(W),b=_(W,"BUTTON",{});var Ue=g(b);C=R(Ue,"Remove"),Ue.forEach(a),W.forEach(a),m=k(S),T=_(S,"DIV",{class:!0});var _e=g(T);O=_(_e,"LABEL",{for:!0});var we=g(O);P=R(we,"color1"),we.forEach(a),y=k(_e),p=_(_e,"INPUT",{id:!0,type:!0,class:!0}),te=k(_e),M=_(_e,"BUTTON",{});var Le=g(M);se=R(Le,"Remove"),Le.forEach(a),_e.forEach(a),le=k(S),N=_(S,"DIV",{class:!0});var D=g(N);j=_(D,"LABEL",{for:!0});var x=g(j);fe=R(x,"color2"),x.forEach(a),s=k(D),E=_(D,"INPUT",{id:!0,type:!0,class:!0}),B=k(D),ee=_(D,"BUTTON",{});var ge=g(ee);de=R(ge,"Remove"),ge.forEach(a),Y=k(D),re=_(D,"BUTTON",{});var be=g(re);Ie=R(be,"Switch"),be.forEach(a),D.forEach(a),$e=k(S),z=_(S,"DIV",{class:!0});var ye=g(z);pe=_(ye,"LABEL",{for:!0});var Ge=g(pe);ne=R(Ge,"pattern"),Ge.forEach(a),Be=k(ye),Z=_(ye,"SELECT",{id:!0});var Je=g(Z);for(let qe=0;qe<V.length;qe+=1)V[qe].l(Je);Je.forEach(a),ye.forEach(a),S.forEach(a),w.forEach(a),this.h()},h(){c.a=i,h(O,"for",L=t[1]+"-color"),h(p,"id",$=t[1]+"-color"),h(p,"type","color"),h(p,"class",H=Ze(t[0].color?"filled":"empty")+" svelte-qia934"),h(T,"class","collor"),h(j,"for",oe=t[1]+"-color2"),h(E,"id",f=t[1]+"-color2"),E.required=!1,h(E,"type","color"),h(E,"class",F=Ze(t[0].secondaryColor?"filled":"empty")+" svelte-qia934"),h(N,"class","bottomCollor"),h(pe,"for",ue=t[1]+"-pattern"),h(Z,"id",Q=t[1]+"-pattern"),h(z,"class","pattern")},m(d,w){G(d,r,w),o(r,n),o(n,e),c.m(t[1],e),o(e,i),o(e,b),o(b,C),o(n,m),o(n,T),o(T,O),o(O,P),o(T,y),o(T,p),Ae(p,t[0].color),o(T,te),o(T,M),o(M,se),o(n,le),o(n,N),o(N,j),o(j,fe),o(N,s),o(N,E),Ae(E,t[0].secondaryColor),o(N,B),o(N,ee),o(ee,de),o(N,Y),o(N,re),o(re,Ie),o(n,$e),o(n,z),o(z,pe),o(pe,ne),o(z,Be),o(z,Z);for(let S=0;S<V.length;S+=1)V[S].m(Z,null);Ke(Z,t[0].pattern),K||(ae=[J(b,"click",t[4]),J(p,"input",t[5]),J(M,"click",t[6]),J(E,"input",t[7]),J(ee,"click",t[8]),J(re,"click",t[3]),J(Z,"change",t[10])],K=!0)},p(d,[w]){if(w&2&&c.p(d[1]),w&2&&L!==(L=d[1]+"-color")&&h(O,"for",L),w&2&&$!==($=d[1]+"-color")&&h(p,"id",$),w&1&&H!==(H=Ze(d[0].color?"filled":"empty")+" svelte-qia934")&&h(p,"class",H),w&1&&Ae(p,d[0].color),w&2&&oe!==(oe=d[1]+"-color2")&&h(j,"for",oe),w&2&&f!==(f=d[1]+"-color2")&&h(E,"id",f),w&1&&F!==(F=Ze(d[0].secondaryColor?"filled":"empty")+" svelte-qia934")&&h(E,"class",F),w&1&&Ae(E,d[0].secondaryColor),w&2&&ue!==(ue=d[1]+"-pattern")&&h(pe,"for",ue),w&0){me=Object.values(tt).filter(d[9]).map(mt);let S;for(S=0;S<me.length;S+=1){const W=_t(d,me,S);V[S]?V[S].p(W,w):(V[S]=dt(W),V[S].c(),V[S].m(Z,null))}for(;S<V.length;S+=1)V[S].d(1);V.length=me.length}w&2&&Q!==(Q=d[1]+"-pattern")&&h(Z,"id",Q),w&1&&Oe!==(Oe=d[0].pattern)&&Ke(Z,d[0].pattern)},i:he,o:he,d(d){d&&a(r),Et(V,d),K=!1,Pt(ae)}}}const mt=(t,r)=>r;function Rt(t,r,n){let{cpProperty:e={}}=r,{legend:c}=r,i=p=>p.target.value;const b=()=>n(0,[e.secondaryColor,e.color]=[e.color,e.secondaryColor],e),C=p=>n(0,e={});function m(){e.color=this.value,n(0,e)}const T=p=>n(0,e.color=void 0,e);function O(){e.secondaryColor=this.value,n(0,e)}const P=p=>n(0,e.secondaryColor=void 0,e),L=p=>isNaN(+p),y=p=>n(0,e.pattern=+i(p),e);return t.$$set=p=>{"cpProperty"in p&&n(0,e=p.cpProperty),"legend"in p&&n(1,c=p.legend)},[e,c,i,b,C,m,T,O,P,L,y]}class De extends yt{constructor(r){super(),vt(this,r,Rt,qt,kt,{cpProperty:0,legend:1})}}function ht(t,r,n){const e=t.slice();return e[22]=r[n],e}function Ft(t){let r,n;return{c(){r=u("section"),n=q("Baking random cheesecake...")},l(e){r=_(e,"SECTION",{});var c=g(r);n=R(c,"Baking random cheesecake..."),c.forEach(a)},m(e,c){G(e,r,c),o(r,n)},p:he,i:he,o:he,d(e){e&&a(r)}}}function Vt(t){let r,n,e,c,i,b,C,m,T,O,P,L,y,p,$,H,te,M,se,le,N,j,fe,oe,s,E,f,F,B,ee,de,Y,re,Ie,$e,z,pe,ne,ue,Be,Z,Q,Oe,K,ae,me,V,d,w,S,W,Ue,_e,we,Le,D,x,ge,be,ye,Ge;function Je(l){t[7](l)}let qe={};t[0]!==void 0&&(qe.cake=t[0]),n=new Ut({props:qe}),ke.push(()=>Ee(n,"cake",Je,t[0]));let Re=Object.keys(ot).filter(t[12]).map(bt),X=[];for(let l=0;l<Re.length;l+=1)X[l]=gt(ht(t,Re,l));function Ct(l){t[14](l)}let rt={legend:"Body"};t[0].body!==void 0&&(rt.cpProperty=t[0].body),ae=new De({props:rt}),ke.push(()=>Ee(ae,"cpProperty",Ct,t[0].body));function Nt(l){t[15](l)}let lt={legend:"Filling"};t[0].filling!==void 0&&(lt.cpProperty=t[0].filling),d=new De({props:lt}),ke.push(()=>Ee(d,"cpProperty",Nt,t[0].filling));function It(l){t[16](l)}let nt={legend:"Filling Top"};t[0].fillingTop!==void 0&&(nt.cpProperty=t[0].fillingTop),W=new De({props:nt}),ke.push(()=>Ee(W,"cpProperty",It,t[0].fillingTop));const at=[Gt,At],ve=[];function ct(l,I){return l[1]?0:1}return D=ct(t),x=ve[D]=at[D](t),{c(){r=u("div"),Pe(n.$$.fragment),c=v(),i=u("form"),b=u("input"),C=v(),m=u("button"),T=q("Save Cake"),P=v(),L=u("button"),y=q("Generate new cake"),p=v(),$=u("button"),H=q("Black White"),te=v(),M=u("button"),se=q("Generate noir"),le=v(),N=u("fieldset"),j=u("legend"),fe=q("Basics (won't change during randomization)"),oe=v(),s=u("div"),E=u("label"),f=q("Render as inset"),F=v(),B=u("input"),de=v(),Y=u("div"),re=u("label"),Ie=q("Layer divider"),$e=v(),z=u("input"),pe=v(),ne=u("div"),ue=u("label"),Be=q("Decoration"),Z=v(),Q=u("select");for(let l=0;l<X.length;l+=1)X[l].c();Oe=v(),K=u("div"),Pe(ae.$$.fragment),V=v(),Pe(d.$$.fragment),S=v(),Pe(W.$$.fragment),_e=v(),we=u("hr"),Le=v(),x.c(),ge=ut(),this.h()},l(l){r=_(l,"DIV",{class:!0});var I=g(r);Te(n.$$.fragment,I),I.forEach(a),c=k(l),i=_(l,"FORM",{});var A=g(i);b=_(A,"INPUT",{placeholder:!0}),C=k(A),m=_(A,"BUTTON",{});var He=g(m);T=R(He,"Save Cake"),He.forEach(a),P=k(A),L=_(A,"BUTTON",{});var Me=g(L);y=R(Me,"Generate new cake"),Me.forEach(a),p=k(A),$=_(A,"BUTTON",{});var je=g($);H=R(je,"Black White"),je.forEach(a),te=k(A),M=_(A,"BUTTON",{});var Fe=g(M);se=R(Fe,"Generate noir"),Fe.forEach(a),le=k(A),N=_(A,"FIELDSET",{});var U=g(N);j=_(U,"LEGEND",{});var ze=g(j);fe=R(ze,"Basics (won't change during randomization)"),ze.forEach(a),oe=k(U),s=_(U,"DIV",{class:!0});var Qe=g(s);E=_(Qe,"LABEL",{for:!0});var it=g(E);f=R(it,"Render as inset"),it.forEach(a),F=k(Qe),B=_(Qe,"INPUT",{id:!0,type:!0}),Qe.forEach(a),de=k(U),Y=_(U,"DIV",{class:!0});var Xe=g(Y);re=_(Xe,"LABEL",{for:!0});var st=g(re);Ie=R(st,"Layer divider"),st.forEach(a),$e=k(Xe),z=_(Xe,"INPUT",{id:!0,type:!0}),Xe.forEach(a),pe=k(U),ne=_(U,"DIV",{class:!0});var Ye=g(ne);ue=_(Ye,"LABEL",{for:!0});var ft=g(ue);Be=R(ft,"Decoration"),ft.forEach(a),Z=k(Ye),Q=_(Ye,"SELECT",{id:!0});var pt=g(Q);for(let xe=0;xe<X.length;xe+=1)X[xe].l(pt);pt.forEach(a),Ye.forEach(a),U.forEach(a),A.forEach(a),Oe=k(l),K=_(l,"DIV",{class:!0});var Ve=g(K);Te(ae.$$.fragment,Ve),V=k(Ve),Te(d.$$.fragment,Ve),S=k(Ve),Te(W.$$.fragment,Ve),Ve.forEach(a),_e=k(l),we=_(l,"HR",{}),Le=k(l),x.l(l),ge=ut(),this.h()},h(){h(r,"class","cake svelte-u0gdxw"),h(b,"placeholder","Enter cake name"),m.disabled=O=!t[0].name,h(E,"for","style"),h(B,"id","style"),h(B,"type","checkbox"),B.checked=ee=t[0].style==We.Inset,h(s,"class","inset"),h(re,"for","midsection"),h(z,"id","midsection"),h(z,"type","checkbox"),h(Y,"class","midSect"),h(ue,"for","decoration"),h(Q,"id","decoration"),t[0].decorationType===void 0&&Dt(()=>t[13].call(Q)),h(ne,"class","decoration"),h(K,"class","colorPatterns svelte-u0gdxw")},m(l,I){G(l,r,I),Se(n,r,null),G(l,c,I),G(l,i,I),o(i,b),Ae(b,t[0].name),o(i,C),o(i,m),o(m,T),o(i,P),o(i,L),o(L,y),o(i,p),o(i,$),o($,H),o(i,te),o(i,M),o(M,se),o(i,le),o(i,N),o(N,j),o(j,fe),o(N,oe),o(N,s),o(s,E),o(E,f),o(s,F),o(s,B),o(N,de),o(N,Y),o(Y,re),o(re,Ie),o(Y,$e),o(Y,z),z.checked=t[0].midSection,o(N,pe),o(N,ne),o(ne,ue),o(ue,Be),o(ne,Z),o(ne,Q);for(let A=0;A<X.length;A+=1)X[A].m(Q,null);Ke(Q,t[0].decorationType),G(l,Oe,I),G(l,K,I),Se(ae,K,null),o(K,V),Se(d,K,null),o(K,S),Se(W,K,null),G(l,_e,I),G(l,we,I),G(l,Le,I),ve[D].m(l,I),G(l,ge,I),be=!0,ye||(Ge=[J(b,"input",t[8]),J(m,"click",t[3]),J(L,"click",t[4]),J($,"click",t[9]),J(M,"click",t[10]),J(B,"change",t[6]),J(z,"change",t[11]),J(Q,"change",t[13])],ye=!0)},p(l,I){const A={};if(!e&&I&1&&(e=!0,A.cake=l[0],Ce(()=>e=!1)),n.$set(A),I&1&&b.value!==l[0].name&&Ae(b,l[0].name),(!be||I&1&&O!==(O=!l[0].name))&&(m.disabled=O),(!be||I&1&&ee!==(ee=l[0].style==We.Inset))&&(B.checked=ee),I&1&&(z.checked=l[0].midSection),I&0){Re=Object.keys(ot).filter(l[12]).map(bt);let U;for(U=0;U<Re.length;U+=1){const ze=ht(l,Re,U);X[U]?X[U].p(ze,I):(X[U]=gt(ze),X[U].c(),X[U].m(Q,null))}for(;U<X.length;U+=1)X[U].d(1);X.length=Re.length}I&1&&Ke(Q,l[0].decorationType);const He={};!me&&I&1&&(me=!0,He.cpProperty=l[0].body,Ce(()=>me=!1)),ae.$set(He);const Me={};!w&&I&1&&(w=!0,Me.cpProperty=l[0].filling,Ce(()=>w=!1)),d.$set(Me);const je={};!Ue&&I&1&&(Ue=!0,je.cpProperty=l[0].fillingTop,Ce(()=>Ue=!1)),W.$set(je);let Fe=D;D=ct(l),D===Fe?ve[D].p(l,I):(St(),ce(ve[Fe],1,1,()=>{ve[Fe]=null}),Tt(),x=ve[D],x?x.p(l,I):(x=ve[D]=at[D](l),x.c()),ie(x,1),x.m(ge.parentNode,ge))},i(l){be||(ie(n.$$.fragment,l),ie(ae.$$.fragment,l),ie(d.$$.fragment,l),ie(W.$$.fragment,l),ie(x),be=!0)},o(l){ce(n.$$.fragment,l),ce(ae.$$.fragment,l),ce(d.$$.fragment,l),ce(W.$$.fragment,l),ce(x),be=!1},d(l){l&&a(r),Ne(n),l&&a(c),l&&a(i),Et(X,l),l&&a(Oe),l&&a(K),Ne(ae),Ne(d),Ne(W),l&&a(_e),l&&a(we),l&&a(Le),ve[D].d(l),l&&a(ge),ye=!1,Pt(Ge)}}}function gt(t){let r,n=ot[t[22]]+"",e;return{c(){r=u("option"),e=q(n),this.h()},l(c){r=_(c,"OPTION",{});var i=g(r);e=R(i,n),i.forEach(a),this.h()},h(){r.__value=t[22],r.value=r.__value},m(c,i){G(c,r,i),o(r,e)},p:he,d(c){c&&a(r)}}}function At(t){let r,n,e,c;return{c(){r=u("button"),n=q("Show Fancy Stuff")},l(i){r=_(i,"BUTTON",{});var b=g(r);n=R(b,"Show Fancy Stuff"),b.forEach(a)},m(i,b){G(i,r,b),o(r,n),e||(c=J(r,"click",t[2]),e=!0)},p:he,i:he,o:he,d(i){i&&a(r),e=!1,c()}}}function Gt(t){let r,n,e,c,i,b,C,m,T,O,P,L,y,p,$,H,te,M;function se(f){t[17](f)}let le={legend:"Icing"};t[0].icing!==void 0&&(le.cpProperty=t[0].icing),i=new De({props:le}),ke.push(()=>Ee(i,"cpProperty",se,t[0].icing));function N(f){t[18](f)}let j={legend:"Stroke"};t[0].corpus!==void 0&&(j.cpProperty=t[0].corpus),m=new De({props:j}),ke.push(()=>Ee(m,"cpProperty",N,t[0].corpus));function fe(f){t[19](f)}let oe={legend:"Decoration"};t[0].decoration!==void 0&&(oe.cpProperty=t[0].decoration),P=new De({props:oe}),ke.push(()=>Ee(P,"cpProperty",fe,t[0].decoration));function s(f){t[20](f)}let E={legend:"DecorationStroke"};return t[0].decorationStroke!==void 0&&(E.cpProperty=t[0].decorationStroke),p=new De({props:E}),ke.push(()=>Ee(p,"cpProperty",s,t[0].decorationStroke)),{c(){r=u("button"),n=q("Hide Fancy Stuff"),e=v(),c=u("div"),Pe(i.$$.fragment),C=v(),Pe(m.$$.fragment),O=v(),Pe(P.$$.fragment),y=v(),Pe(p.$$.fragment),this.h()},l(f){r=_(f,"BUTTON",{});var F=g(r);n=R(F,"Hide Fancy Stuff"),F.forEach(a),e=k(f),c=_(f,"DIV",{class:!0});var B=g(c);Te(i.$$.fragment,B),C=k(B),Te(m.$$.fragment,B),O=k(B),Te(P.$$.fragment,B),y=k(B),Te(p.$$.fragment,B),B.forEach(a),this.h()},h(){h(c,"class","colorPatterns svelte-u0gdxw")},m(f,F){G(f,r,F),o(r,n),G(f,e,F),G(f,c,F),Se(i,c,null),o(c,C),Se(m,c,null),o(c,O),Se(P,c,null),o(c,y),Se(p,c,null),H=!0,te||(M=J(r,"click",t[2]),te=!0)},p(f,F){const B={};!b&&F&1&&(b=!0,B.cpProperty=f[0].icing,Ce(()=>b=!1)),i.$set(B);const ee={};!T&&F&1&&(T=!0,ee.cpProperty=f[0].corpus,Ce(()=>T=!1)),m.$set(ee);const de={};!L&&F&1&&(L=!0,de.cpProperty=f[0].decoration,Ce(()=>L=!1)),P.$set(de);const Y={};!$&&F&1&&($=!0,Y.cpProperty=f[0].decorationStroke,Ce(()=>$=!1)),p.$set(Y)},i(f){H||(ie(i.$$.fragment,f),ie(m.$$.fragment,f),ie(P.$$.fragment,f),ie(p.$$.fragment,f),H=!0)},o(f){ce(i.$$.fragment,f),ce(m.$$.fragment,f),ce(P.$$.fragment,f),ce(p.$$.fragment,f),H=!1},d(f){f&&a(r),f&&a(e),f&&a(c),Ne(i),Ne(m),Ne(P),Ne(p),te=!1,M()}}}function Ht(t){let r,n,e,c,i,b,C,m,T;const O=[Vt,Ft],P=[];function L(y,p){return y[0]?0:1}return C=L(t),m=P[C]=O[C](t),{c(){r=u("meta"),n=v(),e=u("section"),c=u("h1"),i=q("Let's bake"),b=v(),m.c(),this.h()},l(y){const p=Ot("svelte-g3xmsa",document.head);r=_(p,"META",{name:!0,content:!0}),p.forEach(a),n=k(y),e=_(y,"SECTION",{});var $=g(e);c=_($,"H1",{});var H=g(c);i=R(H,"Let's bake"),H.forEach(a),b=k($),m.l($),$.forEach(a),this.h()},h(){document.title="Bake",h(r,"name","description"),h(r,"content","About this app")},m(y,p){o(document.head,r),G(y,n,p),G(y,e,p),o(e,c),o(c,i),o(e,b),P[C].m(e,null),T=!0},p(y,[p]){let $=C;C=L(y),C===$?P[C].p(y,p):(St(),ce(P[$],1,1,()=>{P[$]=null}),Tt(),m=P[C],m?m.p(y,p):(m=P[C]=O[C](y),m.c()),ie(m,1),m.m(e,null))},i(y){T||(ie(m),T=!0)},o(y){ce(m),T=!1},d(y){a(r),y&&a(n),y&&a(e),P[C].d()}}}const bt=(t,r)=>r;function Mt(t,r,n){let e,c=!1,i=()=>n(1,c=!c),b=null;const C=()=>{b&&b.setItem(`${e.name}`,JSON.stringify(e))};wt(()=>{typeof localStorage<"u"&&(b=localStorage);const s=new URLSearchParams(window.location.search).get("data");s?n(0,e=JSON.parse(decodeURIComponent(s))):n(0,e=et())});let m=()=>{n(0,e={...et(!1),style:e.style,midSection:e.midSection})},T=(s="#ffffff",E="#000000")=>{const f={...et(!1),style:e.style,midSection:e.midSection,decorationType:e.decorationType};n(0,e={...f,body:{...f.body,color:E,secondaryColor:E},icing:{...f.icing,color:s,secondaryColor:E},decorationStroke:{...f.decorationStroke,color:s,secondaryColor:s},decoration:{...f.decoration,color:E,secondaryColor:E},filling:{...f.filling,color:s,secondaryColor:E},fillingTop:{...f.fillingTop,color:s,secondaryColor:E},corpus:{...f.corpus,color:E,secondaryColor:E},midSection:!1,style:We.Inset})},O=s=>{n(0,e.style=s.target.checked?We.Inset:We.Colour,e)};function P(s){e=s,n(0,e)}function L(){e.name=this.value,n(0,e)}const y=s=>T(),p=s=>T("#ffd700");function $(){e.midSection=this.checked,n(0,e)}const H=s=>isNaN(+s);function te(){e.decorationType=Lt(this),n(0,e)}function M(s){t.$$.not_equal(e.body,s)&&(e.body=s,n(0,e))}function se(s){t.$$.not_equal(e.filling,s)&&(e.filling=s,n(0,e))}function le(s){t.$$.not_equal(e.fillingTop,s)&&(e.fillingTop=s,n(0,e))}function N(s){t.$$.not_equal(e.icing,s)&&(e.icing=s,n(0,e))}function j(s){t.$$.not_equal(e.corpus,s)&&(e.corpus=s,n(0,e))}function fe(s){t.$$.not_equal(e.decoration,s)&&(e.decoration=s,n(0,e))}function oe(s){t.$$.not_equal(e.decorationStroke,s)&&(e.decorationStroke=s,n(0,e))}return[e,c,i,C,m,T,O,P,L,y,p,$,H,te,M,se,le,N,j,fe,oe]}class Jt extends yt{constructor(r){super(),vt(this,r,Mt,Ht,kt,{})}}export{Jt as default};
