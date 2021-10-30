(this["webpackJsonpcryptocurrency-portfolio"]=this["webpackJsonpcryptocurrency-portfolio"]||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(22),a=(c(71),c(72),c(73),c(6)),i=(c(74),c(7)),o=c(8),u=c(115),j=(c(82),c(117)),l=c(119),d=c(120),b=c(1),O=function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),r=c[0],s=c[1],i=(Number(e.assets.priceUsd)*Number(r)).toFixed(2);return Object(b.jsxs)(j.a,{show:!0,children:[Object(b.jsxs)(j.a.Header,{children:[Object(b.jsx)(j.a.Title,{children:"Add to portfolio"}),Object(b.jsx)(u.a,{onClick:function(){return e.showModal(!1)},variant:"primary",children:"close"})]}),Object(b.jsxs)(j.a.Body,{children:[Object(b.jsxs)("div",{children:["Do you want to add ",Object(b.jsx)("strong",{children:e.assets.name})," to your portfolio"]}),Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{className:"mb-3",children:[Object(b.jsx)(d.a,{type:"number",value:r,onChange:function(e){Number(e.currentTarget.value)>-1&&s(e.currentTarget.value)}}),Object(b.jsxs)(l.a.Text,{children:["$",i]})]})})]}),Object(b.jsx)(j.a.Footer,{children:Object(b.jsx)(u.a,{onClick:function(){return 0!==+r&&e.addAssetsHandler(Number(r))},variant:"primary",children:"Add"})})]})},p=c(26),f=c(2),h={portfolio:[],percent:0,currentAssetSessions:0},x=r.a.memo((function(e){var t=e.item,c=Object(n.useState)(!1),r=Object(a.a)(c,2),s=r[0],j=r[1],l=Object(i.b)(),d=Object(o.g)();return Object(b.jsxs)("div",{className:"main__body",children:[s&&Object(b.jsx)(O,{assets:t,addAssetsHandler:function(e){var c={assetId:t.id,count:e,price:Number(t.priceUsd)*e};l({type:"PORTFOLIO/ADD-ASSET",asset:c}),j(!s)},showModal:j}),Object(b.jsxs)("div",{className:"main__body__block",children:[Object(b.jsx)("p",{children:t.rank}),Object(b.jsx)("p",{children:t.name}),Object(b.jsxs)("p",{children:["$",(+t.priceUsd).toFixed(2)]}),Object(b.jsx)(u.a,{className:"block_btn",onClick:function(){return e=t.id,d.push("/currency-info/".concat(e));var e},variant:"outline-primary",children:"More info"}),Object(b.jsx)(u.a,{className:"block_btn",onClick:function(){j(!0)},variant:"outline-primary",children:"Buy currency"})]})]})})),m=c(27),v=c.n(m),S=c(46),y={status:"loading",error:null},T=function(e){return{type:"APP/SET-APP-STATUS",status:e}},g=c(64),A=c.n(g).a.create({baseURL:"https://api.coincap.io/v2/"}),N=function(){return A.get("assets")},P=function(e){return A.get("assets/".concat(e,"/history"),{params:{interval:"d1"}})},C=function(){return A.get("assets?limit=3")},E={dataAssets:[],timestamp:null,chartData:[],topAssets:[]},_=function(e,t){return{type:"CRYPT/SET-CURRENT-ASSETS",data:e,timestamp:t}},k=function(e){return{type:"CRYPT/SET-DATA-CHART",data:e}},R=function(e){return{type:"CRYPT/SET-TOP-DATA-ASSETS",data:e}},F=function(){return function(){var e=Object(S.a)(v.a.mark((function e(t){var c,n,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T("loading")),e.prev=1,e.next=4,N();case 4:c=e.sent,n=c.data,r=n.data,s=n.timestamp,t(_(r,s)),t(T("succeeded")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(T("failed"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},I=c(116),w=(c(105),function(){return Object(b.jsx)("div",{className:"preloader",children:Object(b.jsx)(I.a,{animation:"border",variant:"primary"})})}),U=(c(106),function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),c=[],n=1;n<=t;n++)c.push(n);return Object(b.jsx)("div",{className:"paginator",children:c.map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t?"paginator__selected":"paginator__unselected",onClick:function(){return e.onPageChange(t)},children:t},t)}))})}),D=c(118),L=(c(107),function(e){var t=Object(n.useState)(7),c=Object(a.a)(t,2),r=c[0],s=c[1],o=Object(i.b)(),j=Object(n.useState)(!0),l=Object(a.a)(j,2),d=l[0],O=l[1];return Object(n.useEffect)((function(){r>0?setTimeout((function(){return s(r-1)}),1e3):o(F())}),[r,o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(D.a,{className:"alert",show:d,variant:"primary",children:[Object(b.jsx)(D.a.Heading,{children:"The server is overloaded"}),Object(b.jsxs)(D.a.Heading,{children:["Automatic reboot: ",r]}),Object(b.jsx)(u.a,{onClick:function(){O(!1)},variant:"outline-primary",children:"Close Alert!"})]})})}),H=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(F())}),[e]);var t=Object(i.c)((function(e){return e.cryptocurrencyList.dataAssets})),c=Object(n.useState)(1),r=Object(a.a)(c,2),s=r[0],o=r[1],u=Object(i.c)((function(e){return e.app.status})),j=t.length,l=10*s,d=l-10,O=t.slice(d,l);return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(U,{onPageChange:function(e){o(e)},totalCount:j,pageSize:10,currentPage:s}),"failed"===u&&Object(b.jsx)(L,{}),Object(b.jsxs)("div",{className:"main__header",children:[Object(b.jsx)("p",{className:"main__header-text",children:"Rank"}),Object(b.jsx)("p",{className:"main__header-text",children:"Rank"}),Object(b.jsx)("p",{className:"main__header-text",children:"Price"})]}),"loading"===u?Object(b.jsx)(w,{}):O.map((function(e){return Object(b.jsx)(x,{item:e},e.id)}))]})},M=(c(108),function(){var e=Object(i.c)((function(e){return e.cryptocurrencyList.topAssets})),t=Object(i.c)((function(e){return e.app.status})),c=Object(i.c)((function(e){return e.portfolio})),r=c.portfolio,a=c.percent,o=c.currentAssetSessions,u=Object(i.b)();Object(n.useEffect)((function(){u(function(){var e=Object(S.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T("loading")),e.prev=1,e.next=4,C();case 4:c=e.sent,n=c.data.data,t(R(n)),t(T("succeeded")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(T("failed"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[u]);var j=r&&r.reduce((function(e,t){return e+Number(t.price)}),0).toFixed(2);return Object(b.jsxs)("div",{className:"header",children:["loading"===t&&Object(b.jsx)(w,{}),e.map((function(e){return Object(b.jsxs)("div",{className:"header__assets",children:[Object(b.jsx)("p",{className:"header__assets-text",children:e.name}),Object(b.jsxs)("p",{className:"header__assets-text",children:["$",(+e.priceUsd).toFixed(2)]})]},e.id)})),Object(b.jsxs)("div",{className:"header__totalCounts",children:[Object(b.jsxs)("p",{className:"header__totalCounts-text",children:["Wallet:",j,"USD"]}),Object(b.jsxs)("p",{className:"header__totalCounts-text",children:["Session:",o.toFixed(2),"USD"]}),Object(b.jsxs)("p",{className:"header__totalCounts-text",children:[a!==1/0&&a.toFixed(3),"% "]})]}),Object(b.jsx)(s.b,{className:"header__link",to:"/portfolio",children:" My Portfolio"})]})}),B=(c(109),c(110),r.a.memo((function(e){var t=e.asset,c=e.currentAssets,r=Object(n.useState)(""),s=Object(a.a)(r,2),o=s[0],j=s[1],O=Object(n.useState)(!1),p=Object(a.a)(O,2),f=p[0],h=p[1],x=Object(i.c)((function(e){return e.cryptocurrencyList.dataAssets})),m=Object(i.b)();return Object(b.jsxs)("div",{className:"wallet",children:[Object(b.jsxs)(u.a,{onClick:function(){return h(!f)},variant:"primary",children:["Change ",t.assetId]}),f?Object(b.jsxs)(l.a,{className:"mb-3",children:[Object(b.jsx)(l.a.Text,{children:t.assetId}),Object(b.jsx)(l.a.Text,{children:t.count}),Object(b.jsx)(d.a,{type:"number",value:o,onChange:function(e){+e.currentTarget.value>-1&&j(e.currentTarget.value)}}),Object(b.jsx)(u.a,{variant:"primary",onClick:function(){return function(e){var n=c.find((function(t){return t.assetId===e})),r=x.find((function(t){if(t.id===e)return t.priceUsd}));if(n&&r){var s={assetId:e,count:Number(o),price:Number(r.priceUsd)*Number(o)};if(t.count<s.count)return;m(function(e){return{type:"PORTFOLIO/UPDATE-PERCENT",asset:e}}(s)),m(function(e){return{type:"PORTFOLIO/REMOVE-ASSET",asset:e}}(s))}h(!1)}(t.assetId)},children:"sale"})]}):Object(b.jsxs)("div",{className:"wallet__block",children:[Object(b.jsx)("span",{children:t.assetId}),Object(b.jsxs)("span",{children:["$",t.price.toFixed(1)]}),Object(b.jsx)("span",{children:t.count})]})]})}))),Y=function(){var e=Object(i.c)((function(e){return e.portfolio.portfolio})),t=Object(o.g)(),c=e.filter((function(e){return 0!==e.count}));return Object(b.jsxs)(j.a,{show:!0,children:[Object(b.jsxs)(j.a.Header,{children:[Object(b.jsx)(j.a.Title,{children:"My Portfolio"}),Object(b.jsx)("button",{onClick:function(){return t.goBack()},type:"button",className:"btn btn-outline-primary",children:"Go back"})]}),Object(b.jsxs)(j.a.Body,{children:[!c.length&&Object(b.jsx)("div",{children:"Your Wallet Is Empty"}),c.map((function(t){return Object(b.jsx)(B,{currentAssets:e,asset:t},t.assetId)}))]}),Object(b.jsx)(j.a.Footer,{})]})},$=(c(111),c(66)),J=c(67),V=c.n(J),W=(c(112),function(e){var t=e.data,c={series:[{type:"area",data:t&&t.map((function(e){return+e.priceUsd}))}]};return Object(b.jsx)(V.a,{highcharts:$,options:c})}),z=function(){var e=Object(o.h)().id,t=Object(i.c)((function(e){return e.cryptocurrencyList})),c=Object(i.b)(),r=Object(o.g)();return Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(S.a)(v.a.mark((function t(c){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(T("loading")),t.prev=1,t.next=4,P(e);case 4:n=t.sent,r=n.data.data,c(k(r)),c(T("succeeded")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),c(T("failed"));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[c,e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){r.goBack()},type:"button",className:"btn btn-outline-primary",children:"Go back"}),Object(b.jsxs)("table",{className:"table table-hover table-sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"table-primary",children:[Object(b.jsx)("th",{scope:"col",children:"Rank"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Price"}),Object(b.jsx)("th",{scope:"col",children:"Market Cap"}),Object(b.jsx)("th",{scope:"col",children:"VWAP(24Hr)"}),Object(b.jsx)("th",{scope:"col",children:"Supply"}),Object(b.jsx)("th",{scope:"col",children:"Volume(24Hr)"}),Object(b.jsx)("th",{scope:"col",children:"Change(24Hr)"})]})}),Object(b.jsx)("tbody",{children:t.dataAssets.filter((function(t){return t.id===e})).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{scope:"row",children:e.rank}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{children:["$",(+e.priceUsd).toFixed(5)]}),Object(b.jsxs)("td",{children:["$",(+e.marketCapUsd).toFixed(5)]}),Object(b.jsxs)("td",{children:["$",(+e.vwap24Hr).toFixed(2)]}),Object(b.jsxs)("td",{children:[(+e.supply).toFixed(5),"B"]}),Object(b.jsxs)("td",{children:[(+e.volumeUsd24Hr).toFixed(5),"B"]}),Object(b.jsxs)("td",{children:[(+e.changePercent24Hr).toFixed(2),"%"]})]},e.id)}))})]}),Object(b.jsx)(W,{data:t.chartData})]})},G=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(M,{}),Object(b.jsx)(o.b,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(o.a,{to:"/table"})}}),Object(b.jsx)(o.b,{path:"/portfolio",render:function(){return Object(b.jsx)(Y,{})}}),Object(b.jsx)(o.b,{path:"/table",render:function(){return Object(b.jsx)(H,{})}}),Object(b.jsx)(o.b,{path:"/currency-info/:id",render:function(){return Object(b.jsx)(z,{})}})]})})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},K=c(17),Q=c.n(K),X=c(47),Z=c(68),ee=Object(X.b)({cryptocurrencyList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CRYPT/SET-CURRENT-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{dataAssets:t.data,timestamp:t.timestamp});case"CRYPT/SET-DATA-CHART":return Object(f.a)(Object(f.a)({},e),{},{chartData:t.data});case"CRYPT/SET-TOP-DATA-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{topAssets:t.data});default:return e}},portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PORTFOLIO/SET-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{portfolio:[].concat(Object(p.a)(e.portfolio),Object(p.a)(t.assets))});case"PORTFOLIO/ADD-ASSET":var c=e.portfolio.reduce((function(e,t){return e+t.price}),0),n=e.portfolio.find((function(e){return e.assetId===t.asset.assetId}));return n?(e.portfolio.forEach((function(e){e.assetId===t.asset.assetId&&(e.count=e.count+t.asset.count,e.price=e.price+t.asset.price)})),Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions+c,percent:100*t.asset.price/c,portfolio:Object(p.a)(e.portfolio)})):Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions+t.asset.price,percent:100*t.asset.price/t.asset.price,portfolio:[].concat(Object(p.a)(e.portfolio),[t.asset])});case"PORTFOLIO/UPDATE-PERCENT":var r=e.portfolio.reduce((function(e,t){return e+t.price}),0);return Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions-t.asset.price,percent:100*t.asset.price/r});case"PORTFOLIO/REMOVE-ASSET":return Object(f.a)(Object(f.a)({},e),{},{portfolio:e.portfolio.map((function(e){return e.assetId===t.asset.assetId?Object(f.a)(Object(f.a)({},e),{},{count:e.count-t.asset.count,price:e.price-t.asset.price}):e}))});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-APP-STATUS":return Object(f.a)(Object(f.a)({},e),{},{status:t.status});case"APP/SET-APP-ERROR":return Object(f.a)(Object(f.a)({},e),{},{error:t.error});default:return e}}}),te=Object(X.c)(ee,function(){try{var e=localStorage.getItem("portfolioAssets");if(null===e)return;return function(e){var t=JSON.parse(e),c=t.portfolio.portfolio.filter((function(e){return 0!==e.count}));return Object(f.a)(Object(f.a)({},t),{},{portfolio:Object(f.a)(Object(f.a)({},t.portfolio),{},{portfolio:c,percent:0,currentAssetSessions:0})})}(e)}catch(t){return}}(),Object(X.a)(Z.a));te.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("portfolioAssets",t)}catch(c){return console.log(c)}}({portfolio:te.getState().portfolio})})),window.store=te,Q.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(i.a,{store:te,children:Object(b.jsx)(G,{})})})}),document.getElementById("root")),q()},71:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){},82:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.a4374fb7.chunk.js.map