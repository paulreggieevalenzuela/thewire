(this["webpackJsonpwire-app"]=this["webpackJsonpwire-app"]||[]).push([[0],{116:function(e,t,i){},117:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(8),r=i.n(c),s=(i(83),i(17)),o=a.a.createContext({}),l=i(2),d=function(e){var t=e.children,i=Object(n.useState)({grid:"list"}),a=Object(s.a)(i,2),c=a[0],r=a[1];return Object(l.jsx)(o.Provider,{value:[c,r],children:t})},j=i(22),b=i(12),u=i(161),m=i(67),x=i.n(m),p=i(65),h=i.n(p),O=i(64),f=i.n(O),g=Object(u.a)((function(e){return{root:Object(b.a)({background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.breakpoints.up("md"),{flexDirection:"row"}),timer:Object(b.a)({fontWeight:100,fontSize:30,color:"rgb(240, 79, 56)",letterSpacing:2},e.breakpoints.up("md"),{borderRight:"2px solid grey",paddingRight:15}),wholeDate:Object(b.a)({color:"rgb(98, 98, 98)",fontSize:14,fontWeight:700,textAlign:"center",textTransform:"uppercase"},e.breakpoints.up("md"),{paddingLeft:15,fontSize:30})}})),v=function(){var e=g(),t=Object(n.useState)(new Date),i=Object(s.a)(t,2),a=i[0],c=i[1],r=f()().format("dddd DD MMMM YYYY");Object(n.useEffect)((function(){var e=setInterval((function(){return o()}),1e3);return function(){clearInterval(e)}}));var o=function(){c(new Date)};return Object(l.jsxs)("section",{className:e.root,children:[Object(l.jsx)("div",{className:e.timer,children:a.toLocaleTimeString()}),Object(l.jsx)("div",{className:e.wholeDate,children:r})]})},w=Object(u.a)((function(e){return{root:Object(b.a)({background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"15px",transition:"all 1s ease-in-out"},e.breakpoints.up("md"),{flexDirection:"row",justifyContent:"space-between"}),actions:Object(b.a)({display:"none","& span":{marginRight:10,"&:last-child":{marginRight:0}}},e.breakpoints.up("md"),{display:"flex"})}})),N=function(){var e=w(),t=Object(n.useContext)(o),i=Object(s.a)(t,2),a=i[0],c=i[1];return Object(l.jsxs)("section",{className:e.root,children:[Object(l.jsx)(v,{}),Object(l.jsxs)("div",{className:e.actions,children:[Object(l.jsx)("span",{onClick:function(){return c(Object(j.a)(Object(j.a)({},a),{},{grid:"list"}))},children:Object(l.jsx)(h.a,{fontSize:"large",color:"list"===a.grid?"primary":"inherit"})}),Object(l.jsx)("span",{onClick:function(){return c(Object(j.a)(Object(j.a)({},a),{},{grid:"table"}))},children:Object(l.jsx)(x.a,{fontSize:"large",color:"table"===a.grid?"primary":"inherit"})})]})]})},y=i(4),k=i(173),D=i(169),I=i(164),S=i(168),L=i(165),C=i(166),T=i(167),z=i(47),W=i.n(z),A=i(48),B=i.n(A),F=Object(u.a)({list:{width:250},fullList:{width:"auto"}});function P(){var e=F(),t=a.a.useState({top:!1,left:!1,bottom:!1,right:!1}),i=Object(s.a)(t,2),n=i[0],c=i[1],r=function(e,t){return function(i){(!i||"keydown"!==i.type||"Tab"!==i.key&&"Shift"!==i.key)&&c(Object(j.a)(Object(j.a)({},n),{},Object(b.a)({},e,t)))}},o=function(t){return Object(l.jsxs)("div",{className:Object(y.a)(e.list,Object(b.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:r(t,!1),onKeyDown:r(t,!1),children:[Object(l.jsx)(I.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(l.jsxs)(L.a,{button:!0,children:[Object(l.jsx)(C.a,{children:t%2===0?Object(l.jsx)(W.a,{}):Object(l.jsx)(B.a,{})}),Object(l.jsx)(T.a,{primary:e})]},e)}))}),Object(l.jsx)(S.a,{}),Object(l.jsx)(I.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(l.jsxs)(L.a,{button:!0,children:[Object(l.jsx)(C.a,{children:t%2===0?Object(l.jsx)(W.a,{}):Object(l.jsx)(B.a,{})}),Object(l.jsx)(T.a,{primary:e})]},e)}))})]})};return Object(l.jsx)("div",{children:["left"].map((function(e){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(D.a,{onClick:r(e,!0),children:e}),Object(l.jsx)(k.a,{anchor:e,open:n[e],onClose:r(e,!1),onOpen:r(e,!0),children:o(e)})]},e)}))})}var E=Object(u.a)((function(e){return{root:Object(b.a)({position:"relative",height:425,backgroundSize:"cover",backgroundImage:"url(".concat("https://cdn.thewire.in/wp-content/uploads/2019/12/26115203/science-in-hd-9kSTF9PvETM-unsplash.jpg",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.breakpoints.up("md"),{backgroundPosition:"50% 50%"}),layer:{backgroundColor:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,width:"100%",height:"100%",maxHeight:425},bannerSub:{position:"absolute",left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.6)",padding:"15px 10px",textAlign:"center","& > p":{fontSize:15,fontWeight:"normal",margin:0},"& span":{textDecoration:"underline"}},base:{},action:{}}})),M=function(){var e=E();return Object(l.jsxs)("section",{className:e.root,children:[Object(l.jsx)("div",{className:e.layer}),Object(l.jsx)("div",{className:e.bannerSub,children:Object(l.jsxs)("p",{children:["A real-time feed display ",Object(l.jsx)("span",{children:"every new video"})," the moment it's available for licensing"]})})]})},R=i(49),Y=i.n(R),G=i(68),J=i(69),U=i.n(J),V=i(70),H=i.n(V),K=Object(u.a)((function(e){return{root:{position:"relative",width:"100%",maxWidth:1100,padding:"0 15px",margin:"50px auto"},cardContainer:Object(b.a)({display:"flex",flexDirection:"column-reverse",background:"#fff",padding:"10px 20px",boxShadow:"rgb(51 51 51 / 33%) 0px 0px 7px 0px",width:"100%",maxWidth:400,margin:"0 auto 20px"},e.breakpoints.up("md"),{maxWidth:"unset",flexDirection:"row","& > div":{flex:1}}),cardTitle:{color:"rgb(240, 79, 56)",fontSize:18,fontWeight:400,margin:"15px 0"},videoContainer:{position:"relative"},videoOverlay:{background:"rgba(0,0,0,0.5)",position:"absolute",top:0,left:0,right:0,bottom:0},videoDataList:{padding:0,margin:0,listStyle:"none",width:300},videoListItem:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,"&:last-child":{marginBottom:40}},videListItemTitle:{fontWeight:600,fontSize:16,margin:0},videoListItemDetail:{fontWeight:400,fontSize:16,margin:0}}})),q=function(){var e=K(),t=Object(n.useState)([]),i=Object(s.a)(t,2),a=i[0],c=i[1],r=Object(n.useContext)(o),d=Object(s.a)(r,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"http://api.tvmaze.com/schedule/web?date=2020-05-29&country=US",headers:{}},e.next=3,U()(t).then((function(e){c(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j={display:"flex",flexDirection:"list"===d.grid?"column":"row",flexWrap:"list"===d.grid?"no-wrap":"wrap"},b={flexDirection:"list"===d.grid?"row":"column-reverse",width:"list"===d.grid?"100%":"33%"};return Object(l.jsx)("section",{className:e.root,style:j,children:null===a||void 0===a?void 0:a.map((function(t,i){return Object(l.jsxs)("div",{style:b,className:e.cardContainer,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:e.cardTitle,children:t.name}),Object(l.jsxs)("ul",{className:e.videoDataList,children:[Object(l.jsxs)("li",{className:e.videoListItem,children:[Object(l.jsx)("p",{className:e.videListItemTitle,children:"Date Added:"}),Object(l.jsx)("p",{className:e.videoListItemDetail,children:t.airdate})]}),Object(l.jsxs)("li",{className:e.videoListItem,children:[Object(l.jsx)("p",{className:e.videListItemTitle,children:"Date Posted:"}),Object(l.jsx)("p",{className:e.videoListItemDetail,children:t.airdate})]}),Object(l.jsxs)("li",{className:e.videoListItem,children:[Object(l.jsx)("p",{className:e.videListItemTitle,children:"Views:"}),Object(l.jsx)("p",{className:e.videoListItemDetail,children:t.number})]}),Object(l.jsxs)("li",{className:e.videoListItem,children:[Object(l.jsx)("p",{className:e.videListItemTitle,children:"Location:"}),Object(l.jsx)("p",{className:e.videoListItemDetail,children:"N/A"})]}),Object(l.jsxs)("li",{className:e.videoListItem,children:[Object(l.jsx)("p",{className:e.videListItemTitle,children:"JV#:"}),Object(l.jsx)("p",{className:e.videoListItemDetail,children:t.id})]})]})]}),Object(l.jsxs)("div",{className:e.videoContainer,children:[Object(l.jsx)("div",{className:e.videoOverlay}),Object(l.jsx)(H.a,{url:"https://www.youtube.com/watch?v=2B5rbsOoIUE",width:"100%",height:"100%",controls:!1})]})]},i)}))})},Q=i(170),X=i(171),Z=i(44),$=i(172),_=i(71),ee=i.n(_),te=i(72),ie=i.n(te),ne=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ae(){var e=ne();return Object(l.jsx)("div",{className:e.root,children:Object(l.jsx)(Q.a,{position:"fixed",children:Object(l.jsxs)(X.a,{children:[Object(l.jsx)($.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(l.jsx)(ee.a,{})}),Object(l.jsx)(Z.a,{variant:"h6",className:e.title,children:"The Wire App"}),Object(l.jsx)(D.a,{variant:"contained",children:Object(l.jsx)(ie.a,{})})]})})})}var ce=Object(u.a)((function(e){return{root:{position:"relative",padding:20,background:"#e4e4e4"}}})),re=function(){var e=ce();return Object(l.jsx)("footer",{className:e.root,children:"Footer"})};i(116);var se=function(){return Object(l.jsx)(d,{children:Object(l.jsxs)("main",{className:"app",children:[Object(l.jsx)(ae,{}),Object(l.jsx)(P,{}),Object(l.jsx)(M,{}),Object(l.jsx)(N,{}),Object(l.jsx)(q,{}),Object(l.jsx)(re,{})]})})},oe=function(e){e&&e instanceof Function&&i.e(16).then(i.bind(null,175)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(se,{})}),document.getElementById("root")),oe()},83:function(e,t,i){}},[[117,14,15]]]);
//# sourceMappingURL=main.21cb63af.chunk.js.map