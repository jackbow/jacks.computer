import{S as G,i as U,s as F,a as ee,e as d,t as E,b as w,c as u,d as j,f as i,l as K,n as B,g as C,h as I,j as Y,r as Pe,k as Ne,m as Oe,o as J,p as ce,q as Fe,u as fe,v as ue,w as de,x as H,y as P,z as te,A as me,B as R,C as q,D,E as se,F as Q,G as oe,H as pe,I as _e,J as he,K as ge,L as Je,M as Re,N as le}from"./vendor.322bcbf0.js";const qe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};qe();const{window:X}=Ne;function De(o,e,t){const l=o.slice();return l[14]=e[t],l[16]=t,l}function ve(o,e,t){const l=o.slice();return l[14]=e[t],l[16]=t,l}function be(o){let e,t,l,n=o[16]+1+"",s,r,f,a,c,m,_,y,k;return{c(){e=d("div"),t=d("p"),l=E("0"),s=E(n),r=E("."),f=w(),a=d("a"),c=d("p"),m=E(o[14]),u(t,"class","inline text-purple-400"),u(c,"class","inline text-off-gray text-lg"),u(a,"href",_=`#${o[14].toLowerCase()}`),u(a,"class","hover:text-purple-400 transition duration-300"),u(e,"class","font-mono flex-col flex items-center text-md")},m(b,g){j(b,e,g),i(e,t),i(t,l),i(t,s),i(t,r),i(e,f),i(e,a),i(a,c),i(c,m),y||(k=K(a,"click",o[10]),y=!0)},p:B,d(b){b&&C(e),y=!1,k()}}}function ke(o){let e;return{c(){e=d("spacer")},m(t,l){j(t,e,l)},d(t){t&&C(e)}}}function Ge(o){let e,t,l,n,s,r=["About","Experience","Work","Contact"],f=[];for(let a=0;a<4;a+=1)f[a]=Ve(De(o,r,a));return{c(){for(let a=0;a<4;a+=1)f[a].c();e=w(),t=d("a"),l=E("Resume"),n=w(),s=d("spacer"),u(t,"href",ye),u(t,"class","btn px-4 py-2")},m(a,c){for(let m=0;m<4;m+=1)f[m].m(a,c);j(a,e,c),j(a,t,c),i(t,l),j(a,n,c),j(a,s,c)},p:B,d(a){Y(f,a),a&&C(e),a&&C(t),a&&C(n),a&&C(s)}}}function Ue(o){let e=o[1],t,l=we(o);return{c(){l.c(),t=Oe()},m(n,s){l.m(n,s),j(n,t,s)},p(n,s){s&2&&F(e,e=n[1])?(l.d(1),l=we(n),l.c(),l.m(t.parentNode,t)):l.p(n,s)},d(n){n&&C(t),l.d(n)}}}function Ve(o){let e,t,l,n=o[16]+1+"",s,r,f,a,c,m;return{c(){e=d("a"),t=d("p"),l=E("0"),s=E(n),r=E("."),f=w(),a=d("p"),c=E(o[14]),u(t,"class","inline text-purple-400"),u(a,"class","inline text-off-gray "),u(e,"href",m=`#${o[14].toLowerCase()}`),u(e,"class","text-xs font-mono py-2 hover:text-purple-400 transition duration-300")},m(_,y){j(_,e,y),i(e,t),i(t,l),i(t,s),i(t,r),i(e,f),i(e,a),i(a,c)},p:B,d(_){_&&C(e)}}}function we(o){let e,t,l,n;return{c(){e=d("ion-icon"),J(e,"name",t=o[1]?"close-outline":"menu-outline"),J(e,"class","text-purple-400 text-5xl z-30 cursor-pointer right-0")},m(s,r){j(s,e,r),l||(n=K(e,"click",o[11]),l=!0)},p(s,r){r&2&&t!==(t=s[1]?"close-outline":"menu-outline")&&J(e,"name",t)},d(s){s&&C(e),l=!1,n()}}}function Ke(o){let e=!1,t=()=>{e=!1},l,n,s,r,f,a,c,m,_,y,k,b,g,h,$,z;ee(o[7]),ee(o[8]);let x=["About","Experience","Work","Contact"],p=[];for(let v=0;v<4;v+=1)p[v]=be(ve(o,x,v));let A=o[2]>=768&&ke();function N(v,L){return v[2]<768?Ue:Ge}let S=N(o),M=S(o);return{c(){n=d("div"),s=w(),r=d("div");for(let v=0;v<4;v+=1)p[v].c();f=w(),a=d("a"),c=E("Resume"),m=w(),_=d("div"),A&&A.c(),y=w(),k=d("a"),k.textContent="home",b=w(),g=d("spacer"),h=w(),M.c(),u(n,"id","blur-filter"),u(n,"class","z-10 h-full w-1/3 fixed transition-all duration-300 svelte-1c2b9vj"),I(n,"open",o[1]),u(a,"href",ye),u(a,"class","btn text-sm px-8 py-4"),u(r,"id","nav-menu"),u(r,"class","fixed transition-all duration-300 top-0 w-2/3 h-full z-20 flex flex-col items-center justify-center svelte-1c2b9vj"),I(r,"open",o[1]),u(k,"href","#home"),u(g,"class","flex-grow"),u(_,"id","header"),u(_,"class","-translate-y-full transform transition-transform duration-300 flex items-center fixed top-0 w-full z-20 svelte-1c2b9vj"),I(_,"show",o[3]),I(_,"at-top",o[0]>50),I(_,"nav-closed",!o[1])},m(v,L){j(v,n,L),j(v,s,L),j(v,r,L);for(let W=0;W<4;W+=1)p[W].m(r,null);i(r,f),i(r,a),i(a,c),j(v,m,L),j(v,_,L),A&&A.m(_,null),i(_,y),i(_,k),i(_,b),i(_,g),i(_,h),M.m(_,null),$||(z=[K(X,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),o[7]()}),K(X,"resize",o[8]),K(n,"click",o[9])],$=!0)},p(v,[L]){if(L&1&&!e&&(e=!0,clearTimeout(l),scrollTo(X.pageXOffset,v[0]),l=setTimeout(t,100)),L&2&&I(n,"open",v[1]),L&16){x=["About","Experience","Work","Contact"];let W;for(W=0;W<4;W+=1){const Z=ve(v,x,W);p[W]?p[W].p(Z,L):(p[W]=be(Z),p[W].c(),p[W].m(r,f))}for(;W<4;W+=1)p[W].d(1)}L&2&&I(r,"open",v[1]),v[2]>=768?A||(A=ke(),A.c(),A.m(_,y)):A&&(A.d(1),A=null),S===(S=N(v))&&M?M.p(v,L):(M.d(1),M=S(v),M&&(M.c(),M.m(_,null))),L&8&&I(_,"show",v[3]),L&1&&I(_,"at-top",v[0]>50),L&2&&I(_,"nav-closed",!v[1])},i:B,o:B,d(v){v&&C(n),v&&C(s),v&&C(r),Y(p,v),v&&C(m),v&&C(_),A&&A.d(),M.d(),$=!1,Pe(z)}}}const ye="https://drive.google.com/file/d/1WIp7ROSmk95ZSGt-f3s6llsv7N_tEJ4I/view?usp=sharing";function Qe(o,e,t){let l=!1;const n=()=>{t(1,l=!l),window.document.body.classList.toggle("noscroll")};let{offset:s=50}=e,{tolerance:r=0}=e,f,a=!0,c=0,m=0;const _=$=>{const z=m-$;return m=$,$<s?"show":Math.abs(z)<=r?a:z<0?"hide":"show"};function y(){t(0,c=X.pageYOffset)}function k(){t(2,f=X.innerWidth)}const b=()=>{n()},g=()=>{n()},h=()=>{n()};return o.$$set=$=>{"offset"in $&&t(5,s=$.offset),"tolerance"in $&&t(6,r=$.tolerance)},o.$$.update=()=>{o.$$.dirty&1&&t(3,a=_(c)==="show")},[c,l,f,a,n,s,r,y,k,b,g,h]}class Ye extends G{constructor(e){super();U(this,e,Qe,Ke,F,{offset:5,tolerance:6})}}function Xe(o){let e,t,l,n,s;const r=o[2].default,f=ce(r,o,o[1],null);return{c(){e=d("div"),t=d("div"),f&&f.c(),l=w(),n=d("div"),u(n,"class",""+(Fe("w-px h-10 bg-off-gray self-center")+" svelte-1bvp6s")),u(t,"class","flex flex-col hover-children svelte-1bvp6s"),u(e,"class","hidden md:block bottom-0 fixed svelte-1bvp6s"),I(e,"right",o[0]==="right"),I(e,"left",o[0]==="left")},m(a,c){j(a,e,c),i(e,t),f&&f.m(t,null),i(t,l),i(t,n),s=!0},p(a,[c]){f&&f.p&&(!s||c&2)&&fe(f,r,a,a[1],s?de(r,a[1],c,null):ue(a[1]),null),c&1&&I(e,"right",a[0]==="right"),c&1&&I(e,"left",a[0]==="left")},i(a){s||(H(f,a),s=!0)},o(a){P(f,a),s=!1},d(a){a&&C(e),f&&f.d(a)}}}function Ze(o,e,t){let{$$slots:l={},$$scope:n}=e,{side:s}=e;return o.$$set=r=>{"side"in r&&t(0,s=r.side),"$$scope"in r&&t(1,n=r.$$scope)},[s,n,l]}class $e extends G{constructor(e){super();U(this,e,Ze,Xe,F,{side:0})}}const et=`
    I build things for the web.
  `,tt=`
    I'm a software engineer based in Seattle, WA specializing in building (and occasionally designing)
    exceptional websites, applications, and everything in between.
  `;function lt(o){let e,t,l,n,s,r,f,a,c,m,_,y;return{c(){e=d("div"),t=d("p"),t.textContent="Hi, my name is",l=w(),n=d("p"),n.textContent="Jack Bowman.",s=w(),r=d("p"),r.textContent=`${et}`,f=w(),a=d("p"),a.textContent=`${tt}`,c=w(),m=d("a"),m.textContent="Get in touch",u(t,"class","text-purple-400 ml-1 text-sm font-mono"),u(n,"class","big-text mt-3 font-semibold"),u(r,"class","big-text text-off-gray font-semibold mt-4"),u(a,"class","text-off-gray max-w-md mt-6 mb-10 text-md"),u(m,"href","mailto:jackbow@umich.edu"),u(m,"class","btn px-6 py-4"),u(e,"id","home"),u(e,"class","mx-auto max-w-screen-lg flex flex-col h-screen justify-center items-start")},m(k,b){j(k,e,b),i(e,t),i(e,l),i(e,n),i(e,s),i(e,r),i(e,f),i(e,a),i(e,c),i(e,m),y=!0},p:B,i(k){y||(ee(()=>{_||(_=te(e,me,{y:-100,duration:2e3},!0)),_.run(1)}),y=!0)},o(k){_||(_=te(e,me,{y:-100,duration:2e3},!1)),_.run(0),y=!1},d(k){k&&C(e),k&&_&&_.end()}}}class nt extends G{constructor(e){super();U(this,e,null,lt,F,{})}}function st(o){let e,t;const l=o[5].default,n=ce(l,o,o[4],null);return{c(){e=d("div"),n&&n.c(),u(e,"class","media-wrapper svelte-lgu1ae"),I(e,"project",o[2]),I(e,"centered",o[3]),I(e,"media-wrapper-border",o[0]),I(e,"media-wrapper-constrained",o[1])},m(s,r){j(s,e,r),n&&n.m(e,null),t=!0},p(s,[r]){n&&n.p&&(!t||r&16)&&fe(n,l,s,s[4],t?de(l,s[4],r,null):ue(s[4]),null),r&4&&I(e,"project",s[2]),r&8&&I(e,"centered",s[3]),r&1&&I(e,"media-wrapper-border",s[0]),r&2&&I(e,"media-wrapper-constrained",s[1])},i(s){t||(H(n,s),t=!0)},o(s){P(n,s),t=!1},d(s){s&&C(e),n&&n.d(s)}}}function ot(o,e,t){let{$$slots:l={},$$scope:n}=e,{border:s=!1}=e,{constrained:r=!1}=e,{project:f=!1}=e,{centered:a=!1}=e;return o.$$set=c=>{"border"in c&&t(0,s=c.border),"constrained"in c&&t(1,r=c.constrained),"project"in c&&t(2,f=c.project),"centered"in c&&t(3,a=c.centered),"$$scope"in c&&t(4,n=c.$$scope)},[s,r,f,a,n,l]}class re extends G{constructor(e){super();U(this,e,ot,st,F,{border:0,constrained:1,project:2,centered:3})}}var ne={paragraphs:["Hello! I'm Jack, a software engineer based in Seattle, WA.","I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.","Shortly after graduating from the University of Michigan, I joined the engineering team at Mcity where I work on a wide variety of interesting and meaningful projects on a daily basis.","Here are a few technologies I've been working with recently:"],bullets:["Vue","Docker","Python","WebSockets","PostgreSQL","Cypress.io"]};function xe(o,e,t){const l=o.slice();return l[0]=e[t],l}function je(o,e,t){const l=o.slice();return l[3]=e[t],l}function Ce(o){let e,t=o[3]+"",l;return{c(){e=d("p"),l=E(t),u(e,"class","mb-4 scrollreveal")},m(n,s){j(n,e,s),i(e,l)},p:B,d(n){n&&C(e)}}}function Me(o){let e,t=o[0]+"",l;return{c(){e=d("li"),l=E(t)},m(n,s){j(n,e,s),i(e,l)},p:B,d(n){n&&C(e)}}}function rt(o){let e,t;return{c(){e=d("img"),se(e.src,t="/media/me.webp")||u(e,"src",t),u(e,"alt","yours truly")},m(l,n){j(l,e,n)},d(l){l&&C(e)}}}function it(o){let e,t,l,n,s,r,f,a,c,m,_,y=ne.paragraphs,k=[];for(let h=0;h<y.length;h+=1)k[h]=Ce(je(o,y,h));let b=ne.bullets,g=[];for(let h=0;h<b.length;h+=1)g[h]=Me(xe(o,b,h));return m=new re({props:{border:!0,constrained:!0,centered:!0,$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){e=d("div"),t=d("h1"),t.textContent="About Me",l=w(),n=d("div"),s=d("div");for(let h=0;h<k.length;h+=1)k[h].c();r=w(),f=d("ul");for(let h=0;h<g.length;h+=1)g[h].c();a=w(),c=d("div"),R(m.$$.fragment),u(t,"class","section-header"),u(f,"class","font-mono text-xs xs:text-sm grid gap-2 grid-cols-3 grid-rows-2 grid-flow-col scrollreveal"),u(s,"class","text-md text-off-gray"),u(c,"class","z-0 scrollreveal"),u(n,"class","md:grid grid-layout md:gap-10 svelte-f1o81p"),u(e,"id","about"),u(e,"class","mx-auto max-w-3xl py-16 md:py-20")},m(h,$){j(h,e,$),i(e,t),i(e,l),i(e,n),i(n,s);for(let z=0;z<k.length;z+=1)k[z].m(s,null);i(s,r),i(s,f);for(let z=0;z<g.length;z+=1)g[z].m(f,null);i(n,a),i(n,c),q(m,c,null),_=!0},p(h,[$]){if($&0){y=ne.paragraphs;let x;for(x=0;x<y.length;x+=1){const p=je(h,y,x);k[x]?k[x].p(p,$):(k[x]=Ce(p),k[x].c(),k[x].m(s,r))}for(;x<k.length;x+=1)k[x].d(1);k.length=y.length}if($&0){b=ne.bullets;let x;for(x=0;x<b.length;x+=1){const p=xe(h,b,x);g[x]?g[x].p(p,$):(g[x]=Me(p),g[x].c(),g[x].m(f,null))}for(;x<g.length;x+=1)g[x].d(1);g.length=b.length}const z={};$&64&&(z.$$scope={dirty:$,ctx:h}),m.$set(z)},i(h){_||(H(m.$$.fragment,h),_=!0)},o(h){P(m.$$.fragment,h),_=!1},d(h){h&&C(e),Y(k,h),Y(g,h),D(m)}}}class at extends G{constructor(e){super();U(this,e,null,it,F,{})}}var ie=[{title:"Full-Stack Engineer",company:"Mcity",location:"Ann Arbor, MI",range:"March 2020 - Present",link:"https://www.mcity.umich.edu/",bullets:["Developed research tools for the world\u2019s largest connected & autonomous vehicle test environment in a small team.Used by Ford, GM, Toyota, Subaru, and BMW autonomous vehicle engineers among others.","Created location based network visualization tool for connectivity, mapping, and searching of all facility devices.","Added features, improved user interfaces, and triaged errors in existing applications.","Implemented unit test and integration test suites hooked into CI / CD pipelines.","On-boarded and trained a new-hire engineer."]},{title:"Assistant Researcher",company:"ArtsEngine",location:"Ann Arbor, MI",range:"October 2017 \u2014 June 2020",link:"https://artsengine.engin.umich.edu/",bullets:["Conceptualized statistical analysis workflows, and designed integral visualization and decision support tools.",`Instrumental in fulfilling deliverables or several national and local grants, as well as national policy-level talks
      and discussion.`,`Experience with cluster analysis, topic modeling, random forests, large longitudinal survey data, consulting with
      statistics doctorates, etc. to solve real problems and gain new insights.`,`Described, summarized, and interpreted unstructured and structured data using various statistical models,
      natural language processing tools, and plotting libraries`]}];function Ae(o,e,t){const l=o.slice();return l[4]=e[t],l[6]=t,l}function ze(o,e,t){const l=o.slice();return l[1]=e[t],l[6]=t,l}function Ie(o,e){let t,l=e[1].company+"",n,s,r,f;function a(){return e[3](e[6])}return{key:o,first:null,c(){t=d("p"),n=E(l),s=w(),u(t,"class","tab scrollreveal text-center sm:text-left text-xs px-4 py-3 font-mono cursor-pointer transition-all duration-300 ease-in-out svelte-fh7ukl"),I(t,"active",e[0]===e[6]),this.first=t},m(c,m){j(c,t,m),i(t,n),i(t,s),r||(f=K(t,"click",a),r=!0)},p(c,m){e=c,m&1&&I(t,"active",e[0]===e[6])},d(c){c&&C(t),r=!1,f()}}}function Se(o,e){let t,l=e[4]+"",n;return{key:o,first:null,c(){t=d("li"),n=E(l),u(t,"class","text-sm mb-3 scrollreveal"),this.first=t},m(s,r){j(s,t,r),i(t,n)},p(s,r){e=s,r&2&&l!==(l=e[4]+"")&&Q(n,l)},d(s){s&&C(t)}}}function Le(o){let e,t,l,n=o[1].title+"",s,r,f,a,c=o[1].company+"",m,_,y,k,b=o[1].range+"",g,h,$,z=[],x=new Map,p,A,N=o[1].bullets;const S=M=>M[6];for(let M=0;M<N.length;M+=1){let v=Ae(o,N,M),L=S(v);x.set(L,z[M]=Se(L,v))}return{c(){e=d("div"),t=d("h3"),l=d("span"),s=E(n),r=w(),f=d("a"),a=E("@ "),m=E(c),y=w(),k=d("p"),g=E(b),h=w(),$=d("ul");for(let M=0;M<z.length;M+=1)z[M].c();u(f,"href",_=o[1].link),u(t,"class","scrollreveal"),u(k,"class","text-sm text-off-gray font-mono font-light mb-4 mt-1 scrollreveal"),u($,"class","text-off-gray text-md"),u(e,"class","absolute clamp-margin svelte-fh7ukl")},m(M,v){j(M,e,v),i(e,t),i(t,l),i(l,s),i(t,r),i(t,f),i(f,a),i(f,m),i(e,y),i(e,k),i(k,g),i(e,h),i(e,$);for(let L=0;L<z.length;L+=1)z[L].m($,null);A=!0},p(M,v){(!A||v&2)&&n!==(n=M[1].title+"")&&Q(s,n),(!A||v&2)&&c!==(c=M[1].company+"")&&Q(m,c),(!A||v&2&&_!==(_=M[1].link))&&u(f,"href",_),(!A||v&2)&&b!==(b=M[1].range+"")&&Q(g,b),v&2&&(N=M[1].bullets,z=oe(z,v,S,1,M,N,x,$,he,Se,null,Ae))},i(M){A||(ee(()=>{p||(p=te(e,ge,{duration:1e3},!0)),p.run(1)}),A=!0)},o(M){p||(p=te(e,ge,{duration:1e3},!1)),p.run(0),A=!1},d(M){M&&C(e);for(let v=0;v<z.length;v+=1)z[v].d();M&&p&&p.end()}}}function ct(o){let e,t,l,n,s,r=[],f=new Map,a,c,m=o[1],_,y=ie;const k=g=>g[6];for(let g=0;g<y.length;g+=1){let h=ze(o,y,g),$=k(h);f.set($,r[g]=Ie($,h))}let b=Le(o);return{c(){e=d("div"),t=d("h1"),t.textContent="Where I've Worked",l=w(),n=d("div"),s=d("div");for(let g=0;g<r.length;g+=1)r[g].c();a=w(),c=d("div"),b.c(),u(t,"class","section-header mb-1"),u(s,"class","flex overflow-y-auto w-max max-w-full flex-row sm:flex-col mb-6 mr-4 "),u(n,"class","sm:flex"),u(e,"id","experience"),u(e,"class","mx-auto max-w-xl py-16 md:py-20")},m(g,h){j(g,e,h),i(e,t),i(e,l),i(e,n),i(n,s);for(let $=0;$<r.length;$+=1)r[$].m(s,null);i(n,a),i(n,c),b.m(c,null),_=!0},p(g,[h]){h&5&&(y=ie,r=oe(r,h,k,1,g,y,f,s,he,Ie,null,ze)),h&2&&F(m,m=g[1])?(pe(),P(b,1,1,B),_e(),b=Le(g),b.c(),H(b),b.m(c,null)):b.p(g,h)},i(g){_||(H(b),_=!0)},o(g){P(b),_=!1},d(g){g&&C(e);for(let h=0;h<r.length;h+=1)r[h].d();b.d(g)}}}function ft(o,e,t){let l,n=0;const s=f=>{t(0,n=f)},r=f=>{s(f)};return o.$$.update=()=>{o.$$.dirty&1&&t(1,l=ie[n])},[n,l,s,r]}class ut extends G{constructor(e){super();U(this,e,ft,ct,F,{})}}var Ee=[{title:"Lil' Hash",github:"https://github.com/jackbow/lil-hash",url:"https://lilhash.com/",description:`
      An simple URL shortener that produces easily rememberable and speakable shortened URLs.
      The links expire after 24 hours so there's always a one word shortening available.
    `,tech:["Svelte","Serverless","Tailwindcss"],img:"lilhash.webp"},{title:"Arts Engagement Project",github:"https://github.com/ArtsEngine/ArtsEngagementJupyterBook-Build",url:"https://artsengagementproject.site/",description:`
      The Arts Engagement Project is a study of over 4000 undergraduate students at the University of Michigan
      that asked questions about the impacts, precursors, barriers, frequency, and perceptions of co-curricular
      arts engagement in college.
    `,tech:["NLP","Machine Learning","Data-Viz"],img:"artsengagement.webp"},{title:"Mcity Connected Area Network",description:`
      Network visualization with GPS proximity highlighting, and device details.
    `,tech:["Vue","Flask","PostgreSQL"],img:"mcity-can.webp"}];function We(o,e,t){const l=o.slice();return l[0]=e[t],l[2]=t,l}function Te(o,e,t){const l=o.slice();return l[3]=e[t],l}function Be(o){let e,t=o[3]+"",l;return{c(){e=d("p"),l=E(t),u(e,"class","inline svelte-10e4gde")},m(n,s){j(n,e,s),i(e,l)},p:B,d(n){n&&C(e)}}}function dt(o){let e,t,l;return{c(){e=d("a"),t=d("ion-icon"),J(t,"class","text-off-gray text-3xl hover:text-purple-400 transition duration-400 svelte-10e4gde"),J(t,"name","logo-github"),u(e,"href",l=o[0].github)},m(n,s){j(n,e,s),i(e,t)},p:B,d(n){n&&C(e)}}}function mt(o){let e,t,l;return{c(){e=d("a"),t=d("ion-icon"),J(t,"class","text-off-gray text-3xl hover:text-purple-400 transition duration-400 svelte-10e4gde"),J(t,"name","open-outline"),u(e,"href",l=o[0].url)},m(n,s){j(n,e,s),i(e,t)},p:B,d(n){n&&C(e)}}}function pt(o){let e,t;return e=new re({props:{project:!0,$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){D(e,l)}}}function _t(o){let e,t;return e=new re({props:{project:!0,$$slots:{default:[gt]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){D(e,l)}}}function ht(o){let e,t;return{c(){e=d("video"),e.autoplay=!0,e.muted=!0,e.loop=!0,se(e.src,t="/media/projects/"+o[0].video)||u(e,"src",t),u(e,"type","video/webm")},m(l,n){j(l,e,n)},p:B,d(l){l&&C(e)}}}function gt(o){let e,t;return{c(){e=d("img"),u(e,"class","object-cover object-center h-full w-full"),se(e.src,t=`/media/projects/${o[0].img}`)||u(e,"src",t),u(e,"alt","Project screenshot")},m(l,n){j(l,e,n)},p:B,d(l){l&&C(e)}}}function He(o,e){let t,l,n,s=e[0].title+"",r,f,a,c=e[0].description+"",m,_,y,k,b,g,h,$,z,x,p,A,N=e[0].tech,S=[];for(let T=0;T<N.length;T+=1)S[T]=Be(Te(e,N,T));let M=e[0].github&&dt(e),v=e[0].url&&mt(e);const L=[_t,pt],W=[];function Z(T,V){return T[0].img?0:T[0].video?1:-1}return~(z=Z(e))&&(x=W[z]=L[z](e)),{key:o,first:null,c(){t=d("div"),l=d("div"),n=d("p"),r=E(s),f=w(),a=d("div"),m=E(c),_=w(),y=d("div");for(let T=0;T<S.length;T+=1)S[T].c();k=w(),b=d("div"),M&&M.c(),g=w(),v&&v.c(),h=w(),$=d("div"),x&&x.c(),p=w(),u(n,"class","z-2 relative text-2xl font-semibold scrollreveal svelte-10e4gde"),u(a,"class","z-2 content-desc relative scrollreveal rounded p-0 md:p-4 mt-4 text-gray-300 text-sm md:shadow-xl svelte-10e4gde"),u(y,"class","project-tech scrollreveal mt-4 font-mono text-xs z-2 relative text-off-gray svelte-10e4gde"),u(b,"class","project-links scrollreveal mt-4"),u(l,"class","z-2 relative p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0 svelte-10e4gde"),I(l,"content-right",e[2]%2==0),I(l,"content-left",e[2]%2==1),u($,"class","z-1 scrollreveal h-full svelte-10e4gde"),I($,"picture-right",e[2]%2==1),I($,"picture-left",e[2]%2==0),u(t,"class","project-container justify-items-end grid items-center gap-2 mb-10 mt-2 svelte-10e4gde"),this.first=t},m(T,V){j(T,t,V),i(t,l),i(l,n),i(n,r),i(l,f),i(l,a),i(a,m),i(l,_),i(l,y);for(let O=0;O<S.length;O+=1)S[O].m(y,null);i(l,k),i(l,b),M&&M.m(b,null),i(b,g),v&&v.m(b,null),i(t,h),i(t,$),~z&&W[z].m($,null),i(t,p),A=!0},p(T,V){if(e=T,V&0){N=e[0].tech;let O;for(O=0;O<N.length;O+=1){const ae=Te(e,N,O);S[O]?S[O].p(ae,V):(S[O]=Be(ae),S[O].c(),S[O].m(y,null))}for(;O<S.length;O+=1)S[O].d(1);S.length=N.length}e[0].github&&M.p(e,V),e[0].url&&v.p(e,V),x&&x.p(e,V)},i(T){A||(H(x),A=!0)},o(T){P(x),A=!1},d(T){T&&C(t),Y(S,T),M&&M.d(),v&&v.d(),~z&&W[z].d()}}}function vt(o){let e,t,l,n=[],s=new Map,r,f=Ee;const a=c=>c[2];for(let c=0;c<f.length;c+=1){let m=We(o,f,c),_=a(m);s.set(_,n[c]=He(_,m))}return{c(){e=d("div"),t=d("h1"),t.textContent="Some Things I\u2019ve Built",l=w();for(let c=0;c<n.length;c+=1)n[c].c();u(t,"class","section-header"),u(e,"id","work"),u(e,"class","mt-48 mx-auto max-w-screen-lg py-96 2xs:py-48 xs:py-28 sm:py-24 md:py-20 lg:py-14")},m(c,m){j(c,e,m),i(e,t),i(e,l);for(let _=0;_<n.length;_+=1)n[_].m(e,null);r=!0},p(c,[m]){m&0&&(f=Ee,pe(),n=oe(n,m,a,1,c,f,s,e,Je,He,null,We),_e())},i(c){if(!r){for(let m=0;m<f.length;m+=1)H(n[m]);r=!0}},o(c){for(let m=0;m<n.length;m+=1)P(n[m]);r=!1},d(c){c&&C(e);for(let m=0;m<n.length;m+=1)n[m].d()}}}class bt extends G{constructor(e){super();U(this,e,null,vt,F,{})}}const kt=`
  I'm currently looking for new opportunities. Feel free to reach out for any reason, and I'll try my best to get back to you soon!
`;function wt(o){let e,t,l,n,s,r,f,a;return{c(){e=d("div"),t=d("h1"),t.textContent="What's next?",l=w(),n=d("p"),n.textContent="Get in touch",s=w(),r=d("p"),r.textContent=`${kt}`,f=w(),a=d("a"),a.textContent="Say hello",u(t,"class","scrollreveal font-mono text-sm text-purple-400 svelte-1wj2ksh"),u(n,"id","action"),u(n,"class","scrollreveal text-6xl font-semibold mt-2 text-center svelte-1wj2ksh"),u(r,"class","scrollreveal w-2/3 lg:w-1/3 mt-5 text-center text-md text-off-gray"),u(a,"href","mailto:jackbow@umich.edu"),u(a,"class","scrollreveal btn mt-8 px-6 py-4"),u(e,"id","contact"),u(e,"class","w-full flex flex-col items-center xs:pt-10 sm:pt-18 md:pt-24 lg:pt-28")},m(c,m){j(c,e,m),i(e,t),i(e,l),i(e,n),i(e,s),i(e,r),i(e,f),i(e,a)},p:B,i:B,o:B,d(c){c&&C(e)}}}class yt extends G{constructor(e){super();U(this,e,null,wt,F,{})}}function $t(o){let e,t,l,n,s,r,f,a,c,m,_,y,k,b;return{c(){e=d("footer"),t=d("a"),l=d("p"),l.textContent="Built by Jack Bowman",n=w(),s=d("div"),r=d("ion-icon"),f=w(),a=d("p"),c=E(o[0]),m=w(),_=d("ion-icon"),y=w(),k=d("p"),b=E(o[1]),u(l,"class","mb-2"),J(r,"class","text-sm"),J(r,"name","star-outline"),u(a,"class","mr-4"),J(_,"class","text-sm"),J(_,"name","git-branch-outline"),u(s,"class","flex justify-around w-2/3 text-xs"),u(t,"href","http://github.com/jackbow/jackbow.github.io"),u(t,"class","p-4 text-off-gray text-xs font-mono hover:text-purple-400 transition duration-400 flex flex-col items-center"),u(e,"class","w-1/1 flex flex-col items-center mt-36 mb-2")},m(g,h){j(g,e,h),i(e,t),i(t,l),i(t,n),i(t,s),i(s,r),i(s,f),i(s,a),i(a,c),i(s,m),i(s,_),i(s,y),i(s,k),i(k,b)},p(g,[h]){h&1&&Q(c,g[0]),h&2&&Q(b,g[1])},i:B,o:B,d(g){g&&C(e)}}}function xt(o,e,t){let l,n;return fetch("https://api.github.com/repos/jackbow/jackbow.github.io").then(s=>s.json()).then(s=>{t(0,l=s.stargazers_count),t(1,n=s.forks_count)}).catch(s=>console.error(s)),[l,n]}class jt extends G{constructor(e){super();U(this,e,xt,$t,F,{})}}function Ct(o){let e,t,l,n,s;return{c(){e=d("a"),e.innerHTML='<ion-icon name="logo-github"></ion-icon>',t=w(),l=d("a"),l.innerHTML='<ion-icon name="logo-linkedin"></ion-icon>',n=w(),s=d("ion-icon"),u(e,"href","https://github.com/jackbow"),u(l,"href","https://www.linkedin.com/in/jack-bowman-/"),J(s,"name","heart")},m(r,f){j(r,e,f),j(r,t,f),j(r,l,f),j(r,n,f),j(r,s,f)},d(r){r&&C(e),r&&C(t),r&&C(l),r&&C(n),r&&C(s)}}}function Mt(o){let e;return{c(){e=d("a"),e.textContent="jackbow@umich.edu",u(e,"class","text-xs font-mono column-text"),u(e,"href","mailto:jackbow@umich.edu")},m(t,l){j(t,e,l)},d(t){t&&C(e)}}}function At(o){let e,t,l,n,s,r,f,a,c,m,_,y,k,b,g,h,$,z,x;return e=new Ye({}),l=new $e({props:{side:"left",$$slots:{default:[Ct]},$$scope:{ctx:o}}}),s=new $e({props:{side:"right",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),a=new nt({}),m=new at({}),y=new ut({}),b=new bt({}),h=new yt({}),z=new jt({}),{c(){R(e.$$.fragment),t=w(),R(l.$$.fragment),n=w(),R(s.$$.fragment),r=w(),f=d("main"),R(a.$$.fragment),c=w(),R(m.$$.fragment),_=w(),R(y.$$.fragment),k=w(),R(b.$$.fragment),g=w(),R(h.$$.fragment),$=w(),R(z.$$.fragment),u(f,"class","mx-auto h-full max-w-screen-3xl svelte-12ecvxh")},m(p,A){q(e,p,A),j(p,t,A),q(l,p,A),j(p,n,A),q(s,p,A),j(p,r,A),j(p,f,A),q(a,f,null),i(f,c),q(m,f,null),i(f,_),q(y,f,null),i(f,k),q(b,f,null),i(f,g),q(h,f,null),j(p,$,A),q(z,p,A),x=!0},p(p,[A]){const N={};A&1&&(N.$$scope={dirty:A,ctx:p}),l.$set(N);const S={};A&1&&(S.$$scope={dirty:A,ctx:p}),s.$set(S)},i(p){x||(H(e.$$.fragment,p),H(l.$$.fragment,p),H(s.$$.fragment,p),H(a.$$.fragment,p),H(m.$$.fragment,p),H(y.$$.fragment,p),H(b.$$.fragment,p),H(h.$$.fragment,p),H(z.$$.fragment,p),x=!0)},o(p){P(e.$$.fragment,p),P(l.$$.fragment,p),P(s.$$.fragment,p),P(a.$$.fragment,p),P(m.$$.fragment,p),P(y.$$.fragment,p),P(b.$$.fragment,p),P(h.$$.fragment,p),P(z.$$.fragment,p),x=!1},d(p){D(e,p),p&&C(t),D(l,p),p&&C(n),D(s,p),p&&C(r),p&&C(f),D(a),D(m),D(y),D(b),D(h),p&&C($),D(z,p)}}}function zt(o){return Re(async()=>{const e=275;le().reveal(".scrollreveal",{delay:e}),le().reveal(".section-header",{delay:e}),le().reveal("#home",{delay:e}),le().reveal("footer",{delay:e})}),[]}class It extends G{constructor(e){super();U(this,e,zt,At,F,{})}}new It({target:document.body,intro:!0});
