(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s(4),r=s(7),c=s(6),i=s(1),o=s.n(i),l=s(5),u=s.n(l),d=(s(12),s(0)),h={summer:{text:"Lets hit the beach!",iconName:"sun"},winter:{text:"Burr, it is cold!",iconName:"snowflake"}},j=function(e){var t,s,a=(t=e.lat,(s=(new Date).getMonth())>2&&s<9?t>0?"summer":"winter":t>0?"winter":"summer"),n=h[a],r=n.text,c=n.iconName;return Object(d.jsxs)("div",{className:"season-display ".concat(a),children:[Object(d.jsx)("i",{className:"icon-left massive ".concat(c," icon")}),Object(d.jsx)("h1",{children:r}),Object(d.jsx)("i",{className:"icon-right massive ".concat(c," icon")})]})},m=function(e){return Object(d.jsx)("div",{className:"ui active dimmer",children:Object(d.jsxs)("div",{className:"ui big text loader",children:[" ",e.message," "]})})};m.defaultProps={message:"Loading..."};var b=m,v=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(d.jsxs)("div",{children:["Error: ",this.state.errorMessage]}):!this.state.errorMessage&&this.state.lat?Object(d.jsx)(j,{lat:this.state.lat}):Object(d.jsx)(b,{message:"Please accept the location"})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"border red",children:this.renderContent()})}}]),s}(o.a.Component);u.a.render(Object(d.jsx)(v,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d850a7d6.chunk.js.map