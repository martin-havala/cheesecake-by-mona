import{S as qt,i as Ft,s as Vt,k as p,U as Wt,a as y,q as O,l as u,m as h,V as Jt,c as k,r as $,h as i,n as m,W as at,b as A,F as l,X as Ze,N as xe,O as V,B as ve,P as st,Q as At,L as Yt,t as _e,d as Gt,f as de,o as Kt,g as Ht,R as Ct,Y as Re,Z as qe,w as Ie,e as Nt,x as Le,M as It,y as Be,_ as Fe,z as Oe}from"../../../chunks/index-889ff30f.js";import{P as ft,S as ot,C as Qt,D as pt}from"../../../chunks/cake-500e87e8.js";import{g as it,P as ut}from"../../../chunks/cakeGenerator-3cabf661.js";function Lt(t,o,n){const e=t.slice();return e[11]=o[n],e}function Bt(t){let o,n=ft[t[11]]+"",e;return{c(){o=p("option"),e=O(n),this.h()},l(a){o=u(a,"OPTION",{});var s=h(o);e=$(s,n),s.forEach(i),this.h()},h(){o.__value=t[11],o.value=o.__value},m(a,s){A(a,o,s),l(o,e)},p:ve,d(a){a&&i(o)}}}function Xt(t){let o,n,e,a,s,v,P,g,N,U,_,q,T,f,S,M,W,Z,he,x,F,J,le,ne,me,B,d,R,c,L,G,ge,ee,be,$e,ae,Y,ye,ke,ce,j,Ee,Ae,ie,Ge,te=Object.values(ft).filter(t[9]).map(Ot),w=[];for(let E=0;E<te.length;E+=1)w[E]=Bt(Lt(t,te,E));return{c(){o=p("form"),n=p("fieldset"),e=p("legend"),a=new Wt(!1),s=y(),v=p("button"),P=O("Remove"),g=y(),N=p("div"),U=p("label"),_=O("color1"),T=y(),f=p("input"),W=y(),Z=p("button"),he=O("Remove"),x=y(),F=p("div"),J=p("label"),le=O("color2"),me=y(),B=p("input"),c=y(),L=p("button"),G=O("Remove"),ge=y(),ee=p("button"),be=O("Switch"),$e=y(),ae=p("div"),Y=p("label"),ye=O("pattern"),ce=y(),j=p("select");for(let E=0;E<w.length;E+=1)w[E].c();this.h()},l(E){o=u(E,"FORM",{});var D=h(o);n=u(D,"FIELDSET",{});var b=h(n);e=u(b,"LEGEND",{});var se=h(e);a=Jt(se,!1),s=k(se),v=u(se,"BUTTON",{});var re=h(v);P=$(re,"Remove"),re.forEach(i),se.forEach(i),g=k(b),N=u(b,"DIV",{class:!0});var K=h(N);U=u(K,"LABEL",{for:!0});var He=h(U);_=$(He,"color1"),He.forEach(i),T=k(K),f=u(K,"INPUT",{id:!0,type:!0,class:!0}),W=k(K),Z=u(K,"BUTTON",{});var Me=h(Z);he=$(Me,"Remove"),Me.forEach(i),K.forEach(i),x=k(b),F=u(b,"DIV",{class:!0});var z=h(F);J=u(z,"LABEL",{for:!0});var je=h(J);le=$(je,"color2"),je.forEach(i),me=k(z),B=u(z,"INPUT",{id:!0,type:!0,class:!0}),c=k(z),L=u(z,"BUTTON",{});var ze=h(L);G=$(ze,"Remove"),ze.forEach(i),ge=k(z),ee=u(z,"BUTTON",{});var fe=h(ee);be=$(fe,"Switch"),fe.forEach(i),z.forEach(i),$e=k(b),ae=u(b,"DIV",{class:!0});var Pe=h(ae);Y=u(Pe,"LABEL",{for:!0});var we=h(Y);ye=$(we,"pattern"),we.forEach(i),ce=k(Pe),j=u(Pe,"SELECT",{id:!0});var De=h(j);for(let Te=0;Te<w.length;Te+=1)w[Te].l(De);De.forEach(i),Pe.forEach(i),b.forEach(i),D.forEach(i),this.h()},h(){a.a=s,m(U,"for",q=t[1]+"-color"),m(f,"id",S=t[1]+"-color"),m(f,"type","color"),m(f,"class",M=at(t[0].color?"filled":"empty")+" svelte-qia934"),m(N,"class","collor"),m(J,"for",ne=t[1]+"-color2"),m(B,"id",d=t[1]+"-color2"),B.required=!1,m(B,"type","color"),m(B,"class",R=at(t[0].secondaryColor?"filled":"empty")+" svelte-qia934"),m(F,"class","bottomCollor"),m(Y,"for",ke=t[1]+"-pattern"),m(j,"id",Ee=t[1]+"-pattern"),m(ae,"class","pattern")},m(E,D){A(E,o,D),l(o,n),l(n,e),a.m(t[1],e),l(e,s),l(e,v),l(v,P),l(n,g),l(n,N),l(N,U),l(U,_),l(N,T),l(N,f),Ze(f,t[0].color),l(N,W),l(N,Z),l(Z,he),l(n,x),l(n,F),l(F,J),l(J,le),l(F,me),l(F,B),Ze(B,t[0].secondaryColor),l(F,c),l(F,L),l(L,G),l(F,ge),l(F,ee),l(ee,be),l(n,$e),l(n,ae),l(ae,Y),l(Y,ye),l(ae,ce),l(ae,j);for(let b=0;b<w.length;b+=1)w[b].m(j,null);xe(j,t[0].pattern),ie||(Ge=[V(v,"click",t[4]),V(f,"input",t[5]),V(Z,"click",t[6]),V(B,"input",t[7]),V(L,"click",t[8]),V(ee,"click",t[3]),V(j,"change",t[10])],ie=!0)},p(E,[D]){if(D&2&&a.p(E[1]),D&2&&q!==(q=E[1]+"-color")&&m(U,"for",q),D&2&&S!==(S=E[1]+"-color")&&m(f,"id",S),D&1&&M!==(M=at(E[0].color?"filled":"empty")+" svelte-qia934")&&m(f,"class",M),D&1&&Ze(f,E[0].color),D&2&&ne!==(ne=E[1]+"-color2")&&m(J,"for",ne),D&2&&d!==(d=E[1]+"-color2")&&m(B,"id",d),D&1&&R!==(R=at(E[0].secondaryColor?"filled":"empty")+" svelte-qia934")&&m(B,"class",R),D&1&&Ze(B,E[0].secondaryColor),D&2&&ke!==(ke=E[1]+"-pattern")&&m(Y,"for",ke),D&0){te=Object.values(ft).filter(E[9]).map(Ot);let b;for(b=0;b<te.length;b+=1){const se=Lt(E,te,b);w[b]?w[b].p(se,D):(w[b]=Bt(se),w[b].c(),w[b].m(j,null))}for(;b<w.length;b+=1)w[b].d(1);w.length=te.length}D&2&&Ee!==(Ee=E[1]+"-pattern")&&m(j,"id",Ee),D&1&&Ae!==(Ae=E[0].pattern)&&xe(j,E[0].pattern)},i:ve,o:ve,d(E){E&&i(o),st(w,E),ie=!1,At(Ge)}}}const Ot=(t,o)=>o;function Zt(t,o,n){let{cpProperty:e={}}=o,{legend:a}=o,s=f=>f.target.value;const v=()=>n(0,[e.secondaryColor,e.color]=[e.color,e.secondaryColor],e),P=f=>n(0,e={});function g(){e.color=this.value,n(0,e)}const N=f=>n(0,e.color=void 0,e);function U(){e.secondaryColor=this.value,n(0,e)}const _=f=>n(0,e.secondaryColor=void 0,e),q=f=>isNaN(+f),T=f=>n(0,e.pattern=+s(f),e);return t.$$set=f=>{"cpProperty"in f&&n(0,e=f.cpProperty),"legend"in f&&n(1,a=f.legend)},[e,a,s,v,P,g,N,U,_,q,T]}class Ve extends qt{constructor(o){super(),Ft(this,o,Zt,Xt,Vt,{cpProperty:0,legend:1})}}function $t(t,o,n){const e=t.slice();return e[26]=o[n],e}function wt(t,o,n){const e=t.slice();return e[29]=o[n],e[26]=n,e}function xt(t){let o,n;return{c(){o=p("section"),n=O("Baking random cheesecake...")},l(e){o=u(e,"SECTION",{});var a=h(o);n=$(a,"Baking random cheesecake..."),a.forEach(i)},m(e,a){A(e,o,a),l(o,n)},p:ve,i:ve,o:ve,d(e){e&&i(o)}}}function eo(t){let o,n,e,a,s,v,P,g,N,U,_,q,T,f,S,M,W,Z,he,x,F,J,le,ne,me,B,d,R,c,L,G,ge,ee,be,$e,ae,Y,ye,ke,ce,j,Ee,Ae,ie,Ge,te,w,E,D,b,se,re,K,He,Me,z,je,ze,fe,Pe,we,De,Te,pe,ue,We,Je,ct,_t;n=new Qt({props:{cake:t[0]}});let Ye=ut,Q=[];for(let r=0;r<Ye.length;r+=1)Q[r]=Dt(wt(t,Ye,r));let Ke=Object.keys(pt).filter(t[16]).map(Rt),X=[];for(let r=0;r<Ke.length;r+=1)X[r]=Ut($t(t,Ke,r));function Mt(r){t[18](r)}let dt={legend:"Body"};t[0].body!==void 0&&(dt.cpProperty=t[0].body),K=new Ve({props:dt}),Re.push(()=>qe(K,"cpProperty",Mt,t[0].body));function jt(r){t[19](r)}let ht={legend:"Filling"};t[0].filling!==void 0&&(ht.cpProperty=t[0].filling),z=new Ve({props:ht}),Re.push(()=>qe(z,"cpProperty",jt,t[0].filling));function zt(r){t[20](r)}let mt={legend:"Filling Top"};t[0].fillingTop!==void 0&&(mt.cpProperty=t[0].fillingTop),fe=new Ve({props:mt}),Re.push(()=>qe(fe,"cpProperty",zt,t[0].fillingTop));const gt=[oo,to],Se=[];function bt(r,C){return r[1]?0:1}return pe=bt(t),ue=Se[pe]=gt[pe](t),{c(){o=p("div"),Ie(n.$$.fragment),e=y(),a=p("form"),s=p("input"),v=y(),P=p("button"),g=O("Save Cake"),U=y(),_=p("fieldset"),q=p("legend"),T=O("Generate"),f=y(),S=p("select");for(let r=0;r<Q.length;r+=1)Q[r].c();M=y(),W=p("button"),Z=O("ByPallete"),he=y(),x=p("button"),F=O("Random"),J=y(),le=p("button"),ne=O("Black/White"),me=y(),B=p("button"),d=O("Gold"),R=y(),c=p("fieldset"),L=p("legend"),G=O("Basics (won't change during randomization)"),ge=y(),ee=p("div"),be=p("label"),$e=O("Render as inset"),ae=y(),Y=p("input"),ke=y(),ce=p("div"),j=p("label"),Ee=O("Layer divider"),Ae=y(),ie=p("input"),Ge=y(),te=p("div"),w=p("label"),E=O("Decoration"),D=y(),b=p("select");for(let r=0;r<X.length;r+=1)X[r].c();se=y(),re=p("div"),Ie(K.$$.fragment),Me=y(),Ie(z.$$.fragment),ze=y(),Ie(fe.$$.fragment),we=y(),De=p("hr"),Te=y(),ue.c(),We=Nt(),this.h()},l(r){o=u(r,"DIV",{class:!0});var C=h(o);Le(n.$$.fragment,C),C.forEach(i),e=k(r),a=u(r,"FORM",{});var H=h(a);s=u(H,"INPUT",{placeholder:!0}),v=k(H),P=u(H,"BUTTON",{});var et=h(P);g=$(et,"Save Cake"),et.forEach(i),U=k(H),_=u(H,"FIELDSET",{});var oe=h(_);q=u(oe,"LEGEND",{});var tt=h(q);T=$(tt,"Generate"),tt.forEach(i),f=k(oe),S=u(oe,"SELECT",{id:!0});var Qe=h(S);for(let Ue=0;Ue<Q.length;Ue+=1)Q[Ue].l(Qe);Qe.forEach(i),M=k(oe),W=u(oe,"BUTTON",{});var I=h(W);Z=$(I,"ByPallete"),I.forEach(i),he=k(oe),x=u(oe,"BUTTON",{});var Ce=h(x);F=$(Ce,"Random"),Ce.forEach(i),J=k(oe),le=u(oe,"BUTTON",{});var vt=h(le);ne=$(vt,"Black/White"),vt.forEach(i),me=k(oe),B=u(oe,"BUTTON",{});var yt=h(B);d=$(yt,"Gold"),yt.forEach(i),oe.forEach(i),R=k(H),c=u(H,"FIELDSET",{});var Ne=h(c);L=u(Ne,"LEGEND",{});var kt=h(L);G=$(kt,"Basics (won't change during randomization)"),kt.forEach(i),ge=k(Ne),ee=u(Ne,"DIV",{class:!0});var lt=h(ee);be=u(lt,"LABEL",{for:!0});var Et=h(be);$e=$(Et,"Render as inset"),Et.forEach(i),ae=k(lt),Y=u(lt,"INPUT",{id:!0,type:!0}),lt.forEach(i),ke=k(Ne),ce=u(Ne,"DIV",{class:!0});var rt=h(ce);j=u(rt,"LABEL",{for:!0});var Pt=h(j);Ee=$(Pt,"Layer divider"),Pt.forEach(i),Ae=k(rt),ie=u(rt,"INPUT",{id:!0,type:!0}),rt.forEach(i),Ge=k(Ne),te=u(Ne,"DIV",{class:!0});var nt=h(te);w=u(nt,"LABEL",{for:!0});var Tt=h(w);E=$(Tt,"Decoration"),Tt.forEach(i),D=k(nt),b=u(nt,"SELECT",{id:!0});var St=h(b);for(let Ue=0;Ue<X.length;Ue+=1)X[Ue].l(St);St.forEach(i),nt.forEach(i),Ne.forEach(i),H.forEach(i),se=k(r),re=u(r,"DIV",{class:!0});var Xe=h(re);Le(K.$$.fragment,Xe),Me=k(Xe),Le(z.$$.fragment,Xe),ze=k(Xe),Le(fe.$$.fragment,Xe),Xe.forEach(i),we=k(r),De=u(r,"HR",{}),Te=k(r),ue.l(r),We=Nt(),this.h()},h(){m(o,"class","cake svelte-u0gdxw"),m(s,"placeholder","Enter cake name"),P.disabled=N=!t[0].name,m(S,"id","palletes"),t[2]===void 0&&It(()=>t[9].call(S)),m(be,"for","style"),m(Y,"id","style"),m(Y,"type","checkbox"),Y.checked=ye=t[0].style==ot.Inset,m(ee,"class","inset"),m(j,"for","midsection"),m(ie,"id","midsection"),m(ie,"type","checkbox"),m(ce,"class","midSect"),m(w,"for","decoration"),m(b,"id","decoration"),t[0].decorationType===void 0&&It(()=>t[17].call(b)),m(te,"class","decoration"),m(re,"class","colorPatterns svelte-u0gdxw")},m(r,C){A(r,o,C),Be(n,o,null),A(r,e,C),A(r,a,C),l(a,s),Ze(s,t[0].name),l(a,v),l(a,P),l(P,g),l(a,U),l(a,_),l(_,q),l(q,T),l(_,f),l(_,S);for(let H=0;H<Q.length;H+=1)Q[H].m(S,null);xe(S,t[2]),l(_,M),l(_,W),l(W,Z),l(_,he),l(_,x),l(x,F),l(_,J),l(_,le),l(le,ne),l(_,me),l(_,B),l(B,d),l(a,R),l(a,c),l(c,L),l(L,G),l(c,ge),l(c,ee),l(ee,be),l(be,$e),l(ee,ae),l(ee,Y),l(c,ke),l(c,ce),l(ce,j),l(j,Ee),l(ce,Ae),l(ce,ie),ie.checked=t[0].midSection,l(c,Ge),l(c,te),l(te,w),l(w,E),l(te,D),l(te,b);for(let H=0;H<X.length;H+=1)X[H].m(b,null);xe(b,t[0].decorationType),A(r,se,C),A(r,re,C),Be(K,re,null),l(re,Me),Be(z,re,null),l(re,ze),Be(fe,re,null),A(r,we,C),A(r,De,C),A(r,Te,C),Se[pe].m(r,C),A(r,We,C),Je=!0,ct||(_t=[V(s,"input",t[8]),V(P,"click",t[4]),V(S,"change",t[9]),V(S,"change",t[10]),V(W,"click",t[11]),V(x,"click",t[12]),V(le,"click",t[13]),V(B,"click",t[14]),V(Y,"change",t[7]),V(ie,"change",t[15]),V(b,"change",t[17])],ct=!0)},p(r,C){const H={};if(C&1&&(H.cake=r[0]),n.$set(H),C&1&&s.value!==r[0].name&&Ze(s,r[0].name),(!Je||C&1&&N!==(N=!r[0].name))&&(P.disabled=N),C&4){Ye=ut;let I;for(I=0;I<Ye.length;I+=1){const Ce=wt(r,Ye,I);Q[I]?Q[I].p(Ce,C):(Q[I]=Dt(Ce),Q[I].c(),Q[I].m(S,null))}for(;I<Q.length;I+=1)Q[I].d(1);Q.length=Ye.length}if(C&4&&xe(S,r[2]),(!Je||C&1&&ye!==(ye=r[0].style==ot.Inset))&&(Y.checked=ye),C&1&&(ie.checked=r[0].midSection),C&0){Ke=Object.keys(pt).filter(r[16]).map(Rt);let I;for(I=0;I<Ke.length;I+=1){const Ce=$t(r,Ke,I);X[I]?X[I].p(Ce,C):(X[I]=Ut(Ce),X[I].c(),X[I].m(b,null))}for(;I<X.length;I+=1)X[I].d(1);X.length=Ke.length}C&1&&xe(b,r[0].decorationType);const et={};!He&&C&1&&(He=!0,et.cpProperty=r[0].body,Fe(()=>He=!1)),K.$set(et);const oe={};!je&&C&1&&(je=!0,oe.cpProperty=r[0].filling,Fe(()=>je=!1)),z.$set(oe);const tt={};!Pe&&C&1&&(Pe=!0,tt.cpProperty=r[0].fillingTop,Fe(()=>Pe=!1)),fe.$set(tt);let Qe=pe;pe=bt(r),pe===Qe?Se[pe].p(r,C):(Ht(),_e(Se[Qe],1,1,()=>{Se[Qe]=null}),Gt(),ue=Se[pe],ue?ue.p(r,C):(ue=Se[pe]=gt[pe](r),ue.c()),de(ue,1),ue.m(We.parentNode,We))},i(r){Je||(de(n.$$.fragment,r),de(K.$$.fragment,r),de(z.$$.fragment,r),de(fe.$$.fragment,r),de(ue),Je=!0)},o(r){_e(n.$$.fragment,r),_e(K.$$.fragment,r),_e(z.$$.fragment,r),_e(fe.$$.fragment,r),_e(ue),Je=!1},d(r){r&&i(o),Oe(n),r&&i(e),r&&i(a),st(Q,r),st(X,r),r&&i(se),r&&i(re),Oe(K),Oe(z),Oe(fe),r&&i(we),r&&i(De),r&&i(Te),Se[pe].d(r),r&&i(We),ct=!1,At(_t)}}}function Dt(t){let o,n=t[29]+"",e,a;return{c(){o=p("option"),e=O(n),this.h()},l(s){o=u(s,"OPTION",{});var v=h(o);e=$(v,n),v.forEach(i),this.h()},h(){o.__value=t[26],o.value=o.__value,o.selected=a=t[26]==t[2]},m(s,v){A(s,o,v),l(o,e)},p(s,v){v&4&&a!==(a=s[26]==s[2])&&(o.selected=a)},d(s){s&&i(o)}}}function Ut(t){let o,n=pt[t[26]]+"",e;return{c(){o=p("option"),e=O(n),this.h()},l(a){o=u(a,"OPTION",{});var s=h(o);e=$(s,n),s.forEach(i),this.h()},h(){o.__value=t[26],o.value=o.__value},m(a,s){A(a,o,s),l(o,e)},p:ve,d(a){a&&i(o)}}}function to(t){let o,n,e,a;return{c(){o=p("button"),n=O("Show Fancy Stuff")},l(s){o=u(s,"BUTTON",{});var v=h(o);n=$(v,"Show Fancy Stuff"),v.forEach(i)},m(s,v){A(s,o,v),l(o,n),e||(a=V(o,"click",t[3]),e=!0)},p:ve,i:ve,o:ve,d(s){s&&i(o),e=!1,a()}}}function oo(t){let o,n,e,a,s,v,P,g,N,U,_,q,T,f,S,M,W,Z;function he(d){t[21](d)}let x={legend:"Icing"};t[0].icing!==void 0&&(x.cpProperty=t[0].icing),s=new Ve({props:x}),Re.push(()=>qe(s,"cpProperty",he,t[0].icing));function F(d){t[22](d)}let J={legend:"Stroke"};t[0].corpus!==void 0&&(J.cpProperty=t[0].corpus),g=new Ve({props:J}),Re.push(()=>qe(g,"cpProperty",F,t[0].corpus));function le(d){t[23](d)}let ne={legend:"Decoration"};t[0].decoration!==void 0&&(ne.cpProperty=t[0].decoration),_=new Ve({props:ne}),Re.push(()=>qe(_,"cpProperty",le,t[0].decoration));function me(d){t[24](d)}let B={legend:"DecorationStroke"};return t[0].decorationStroke!==void 0&&(B.cpProperty=t[0].decorationStroke),f=new Ve({props:B}),Re.push(()=>qe(f,"cpProperty",me,t[0].decorationStroke)),{c(){o=p("button"),n=O("Hide Fancy Stuff"),e=y(),a=p("div"),Ie(s.$$.fragment),P=y(),Ie(g.$$.fragment),U=y(),Ie(_.$$.fragment),T=y(),Ie(f.$$.fragment),this.h()},l(d){o=u(d,"BUTTON",{});var R=h(o);n=$(R,"Hide Fancy Stuff"),R.forEach(i),e=k(d),a=u(d,"DIV",{class:!0});var c=h(a);Le(s.$$.fragment,c),P=k(c),Le(g.$$.fragment,c),U=k(c),Le(_.$$.fragment,c),T=k(c),Le(f.$$.fragment,c),c.forEach(i),this.h()},h(){m(a,"class","colorPatterns svelte-u0gdxw")},m(d,R){A(d,o,R),l(o,n),A(d,e,R),A(d,a,R),Be(s,a,null),l(a,P),Be(g,a,null),l(a,U),Be(_,a,null),l(a,T),Be(f,a,null),M=!0,W||(Z=V(o,"click",t[3]),W=!0)},p(d,R){const c={};!v&&R&1&&(v=!0,c.cpProperty=d[0].icing,Fe(()=>v=!1)),s.$set(c);const L={};!N&&R&1&&(N=!0,L.cpProperty=d[0].corpus,Fe(()=>N=!1)),g.$set(L);const G={};!q&&R&1&&(q=!0,G.cpProperty=d[0].decoration,Fe(()=>q=!1)),_.$set(G);const ge={};!S&&R&1&&(S=!0,ge.cpProperty=d[0].decorationStroke,Fe(()=>S=!1)),f.$set(ge)},i(d){M||(de(s.$$.fragment,d),de(g.$$.fragment,d),de(_.$$.fragment,d),de(f.$$.fragment,d),M=!0)},o(d){_e(s.$$.fragment,d),_e(g.$$.fragment,d),_e(_.$$.fragment,d),_e(f.$$.fragment,d),M=!1},d(d){d&&i(o),d&&i(e),d&&i(a),Oe(s),Oe(g),Oe(_),Oe(f),W=!1,Z()}}}function lo(t){let o,n,e,a,s,v,P,g,N;const U=[eo,xt],_=[];function q(T,f){return T[0]?0:1}return P=q(t),g=_[P]=U[P](t),{c(){o=p("meta"),n=y(),e=p("section"),a=p("h1"),s=O("Let's bake"),v=y(),g.c(),this.h()},l(T){const f=Yt("svelte-g3xmsa",document.head);o=u(f,"META",{name:!0,content:!0}),f.forEach(i),n=k(T),e=u(T,"SECTION",{});var S=h(e);a=u(S,"H1",{});var M=h(a);s=$(M,"Let's bake"),M.forEach(i),v=k(S),g.l(S),S.forEach(i),this.h()},h(){document.title="Bake",m(o,"name","description"),m(o,"content","About this app")},m(T,f){l(document.head,o),A(T,n,f),A(T,e,f),l(e,a),l(a,s),l(e,v),_[P].m(e,null),N=!0},p(T,[f]){let S=P;P=q(T),P===S?_[P].p(T,f):(Ht(),_e(_[S],1,1,()=>{_[S]=null}),Gt(),g=_[P],g?g.p(T,f):(g=_[P]=U[P](T),g.c()),de(g,1),g.m(e,null))},i(T){N||(de(g),N=!0)},o(T){_e(g),N=!1},d(T){i(o),T&&i(n),T&&i(e),_[P].d()}}}const Rt=(t,o)=>o;function ro(t,o,n){let e,a=!1,s=()=>n(1,a=!a),v=null;const P=()=>{v&&v.setItem(`${e.name}`,JSON.stringify(e))};Kt(()=>{typeof localStorage<"u"&&(v=localStorage);const c=new URLSearchParams(window.location.search).get("data");c?n(0,e=JSON.parse(decodeURIComponent(c))):n(0,e=it())});let g=c=>{const L={...it(!0,c),style:e.style,midSection:e.midSection};n(0,e={...L})},N=(c="#ffffff",L="#000000")=>{const G={...it(!1),style:e.style,midSection:e.midSection,decorationType:e.decorationType};n(0,e={...G,body:{...G.body,color:L,secondaryColor:L},icing:{...G.icing,color:c,secondaryColor:L},decorationStroke:{...G.decorationStroke,color:c,secondaryColor:c},decoration:{...G.decoration,color:L,secondaryColor:L},filling:{...G.filling,color:c,secondaryColor:L},fillingTop:{...G.fillingTop,color:c,secondaryColor:L},corpus:{...G.corpus,color:L,secondaryColor:L},midSection:!1,style:ot.Inset})},U=c=>{n(0,e.style=c.target.checked?ot.Inset:ot.Colour,e)},_=ut.findIndex(c=>c=="Retro");function q(){e.name=this.value,n(0,e)}function T(){_=Ct(this),n(2,_)}const f=c=>{g(_)},S=c=>g(_),M=c=>g(),W=c=>N(),Z=c=>N("#ffd700");function he(){e.midSection=this.checked,n(0,e)}const x=c=>isNaN(+c);function F(){e.decorationType=Ct(this),n(0,e)}function J(c){t.$$.not_equal(e.body,c)&&(e.body=c,n(0,e))}function le(c){t.$$.not_equal(e.filling,c)&&(e.filling=c,n(0,e))}function ne(c){t.$$.not_equal(e.fillingTop,c)&&(e.fillingTop=c,n(0,e))}function me(c){t.$$.not_equal(e.icing,c)&&(e.icing=c,n(0,e))}function B(c){t.$$.not_equal(e.corpus,c)&&(e.corpus=c,n(0,e))}function d(c){t.$$.not_equal(e.decoration,c)&&(e.decoration=c,n(0,e))}function R(c){t.$$.not_equal(e.decorationStroke,c)&&(e.decorationStroke=c,n(0,e))}return[e,a,_,s,P,g,N,U,q,T,f,S,M,W,Z,he,x,F,J,le,ne,me,B,d,R]}class io extends qt{constructor(o){super(),Ft(this,o,ro,lo,Vt,{})}}export{io as default};