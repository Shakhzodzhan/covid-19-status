(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(73),d=a(74),m=a(84),f=a(83),p=a(224),v=a(228),h=a(225),E=a(226),b=a(13),y=a.n(b),C=a(32),g=a.n(C),_=a(33),x=a.n(_),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,u=t.active;return a?(console.log(u),r.a.createElement("div",{className:y.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",variant:"h4",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:5,separator:"."})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",variant:"h4",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:4,separator:"."})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries from of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",variant:"h4",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:3,separator:"."})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of deaths caused of COVID-19")))))):"Loading..."},O=a(31),j=a(34),S=a.n(j),D="https://covid19.mathdro.id/api",k=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i=r.active,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l,active:i});case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate,active:e.active.total}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(46),T=a(80),A=a.n(T),V=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),d=Object(O.a)(i,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#FFDC00",backgroundColor:"rgba(100, 93, 0, 0.1)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#FF4136",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#FFDC00","#01FF70","#FF4136"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:A.a.container},u?v:p)},U=a(229),B=a(227),P=a(81),z=a.n(P),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,F();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(U.a,{className:z.a.formControl},r.a.createElement(E.a,{color:"textSecondary"},"Please choose your country or region\ud83d\udccd"),r.a.createElement(B.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Y=a(35),G=a.n(Y),H=a(82),J=a.n(H);var L=function(){return r.a.createElement("footer",{className:J.a.footer},r.a.createElement("div",null,"STAY AT HOME\ud83c\udfe0 Created by Shakhzod Kholikov\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb"),function(){var e=(new Date).getFullYear();return r.a.createElement("div",null,"Copyright \xa9 Covid-19 Status ",e)}())},Q=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement("h3",{className:G.a.virusTitle},"C\ud83e\udda0VID-19 ONLINE STATUS"),r.a.createElement("h5",{className:G.a.subTitle},"Stay at Home\ud83c\udfe0"),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(w,{data:t}),r.a.createElement(V,{data:t,country:a}),r.a.createElement(L,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},35:function(e,t,a){e.exports={container:"App_container__1MQN3",virusTitle:"App_virusTitle__2E46W",subTitle:"App_subTitle__1-mhw"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports={footer:"Footer_footer__1w0lV"}},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.d2bdc155.chunk.js.map