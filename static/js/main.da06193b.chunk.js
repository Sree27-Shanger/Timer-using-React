(this["webpackJsonpmy-apptimer"]=this["webpackJsonpmy-apptimer"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(1),d=t.n(s),i=t(3),a=t.n(i),r=(t(13),t(4)),l=t(5),u=t(7),j=t(6),o=(t(14),function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),d=0;d<c;d++)s[d]=arguments[d];return(e=n.call.apply(n,[this].concat(s))).onload=function(){setInterval((function(){var e=document.getElementById("secondsvalue").innerHTML++;(60===e&&(document.getElementById("secondsvalue").innerHTML=0),60===e)&&(60===document.getElementById("minutesvalue").innerHTML++&&(document.getElementById("minutesvalue").innerHTML=0,24===document.getElementById("hourvalue").innerHTML++&&(document.getElementById("hourvalue").innerHTML=0,document.getElementById("dayvalue").innerHTML++)))}),1e3)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"days",children:[Object(c.jsx)("div",{className:"daydiv",children:Object(c.jsx)("h1",{id:"dayvalue",children:"00"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h4",{className:"dayhead",children:"Days"})})]}),Object(c.jsxs)("div",{className:"hour",children:[Object(c.jsx)("div",{className:"hourdiv",children:Object(c.jsx)("h1",{id:"hourvalue",children:"00"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h4",{className:"hourhead",children:"hour"})})]}),Object(c.jsxs)("div",{className:"minutes",children:[Object(c.jsx)("div",{className:"minutediv",children:Object(c.jsx)("h1",{id:"minutesvalue",children:"00"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h4",{className:"minhead",children:"minutes"})})]}),Object(c.jsxs)("div",{className:"seconds",children:[Object(c.jsx)("div",{className:"seconddiv",children:Object(c.jsx)("h1",{id:"secondsvalue",children:"00"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h4",{className:"secondhead",children:"Seconds"})})]}),Object(c.jsx)("div",{className:"buttons",children:Object(c.jsx)("button",{onClick:function(){return e.onload()},className:"start",type:"button",id:"start",children:"Start"})})]})}}]),t}(s.Component)),h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,d=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),d(e),i(e)}))};a.a.render(Object(c.jsx)(d.a.StrictMode,{children:Object(c.jsx)(o,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.da06193b.chunk.js.map