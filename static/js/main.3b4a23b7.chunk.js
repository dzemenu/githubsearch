(this.webpackJsonpgithubsearch=this.webpackJsonpgithubsearch||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),s=n.n(r),i=n(3),j=n.n(i),o=(n(20),n(6)),u=n(8),l=(n(21),n(1)),b=function(e){var t=e.qstring,n=e.qlanguage,c=Object(r.useState)([]),a=Object(o.a)(c,2),s=a[0],i=a[1],j="https://api.github.com/search/repositories?q="+t+"+language:"+n+"&sort=stars&order=des";return Object(r.useEffect)((function(){fetch(j).then((function(e){return e.json()})).then((function(e){i(e.items),console.log(e.items)}))}),[j]),Object(l.jsx)("div",{children:s.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:e.full_name}),Object(l.jsx)("span",{children:Object(l.jsx)("p",{children:e.description})})]})}))})},h=n(9),d=n(15);var g=function(){var e=h.a.div(c||(c=Object(u.a)(["\n background-color: #282c34;\n  padding:10% 0;\n  "]))),t=h.a.input(a||(a=Object(u.a)(["\n padding:1% 30%;\nborder-radius:15px;\n  \n  "]))),n=Object(r.useState)("tetris"),s=Object(o.a)(n,2),i=s[0],j=s[1];return Object(l.jsx)(e,{children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:" SEARCH GITHUB REPO "})}),Object(l.jsx)(t,{placeholder:"search"}),Object(l.jsx)(d.a,{options:[{value:"javascript",label:"javascript"},{value:"tetris",label:"tetris"},{value:"java",label:"java"}],onChange:function(e){j(e)},value:i}),Object(l.jsx)(b,{qlanguage:i,qstring:"tetris"})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};j.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.3b4a23b7.chunk.js.map