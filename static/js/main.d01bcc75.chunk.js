(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),s=(a(14),a(3)),o=a(4),i=a(6),u=a(5),m=a(7),h=(a(15),function(e){var t=e.form,a=e.result;return r.a.createElement("main",{className:"ubd-cal-template"},r.a.createElement("div",{className:"title"},"\uc5c4\ubcf5\ub3d9 \uacc4\uc0b0\uae30"),r.a.createElement("section",{className:"form-wrapper"},r.a.createElement("div",{className:"disc"},"1 UBD = 172,212")),r.a.createElement("section",{className:"cal-wrapper"},t),r.a.createElement("section",{className:"res=wrapper"},a))}),d=(a(16),function(e){var t=e.value,a=e.onClick,n=e.handleKeyPress,l=e.handleChange;return r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"number",value:t,onChange:l,onKeyPress:n,placeholder:"\ubcc0\ud658\ud560 \uc22b\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.."}),r.a.createElement("div",{className:"create-button",onClick:a},"\ubcc0\ud658"))}),v=(a(17),function(e){var t=e.value;return r.a.createElement("div",{className:"form1"},r.a.createElement("h2",null," = "),r.a.createElement("h2",{className:"resultC"},t),r.a.createElement("h2",{className:"UBD"},"UBD"))}),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={input:0,resultNum:0},a.handleChange=function(e){a.setState({input:e.target.value})},a.transNum=function(){var e=a.state.input/172122;a.setState({input:0,resultNum:e.toFixed(3)})},a.handleKeyPress=function(e){"Enter"===e.key&&a.transNum()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.input,t=this.transNum,a=this.handleKeyPress,n=this.handleChange;return r.a.createElement("div",null,r.a.createElement(h,{form:r.a.createElement(d,{value:e,onClick:t,handleKeyPress:a,handleChange:n}),result:r.a.createElement(v,{value:this.state.resultNum})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.d01bcc75.chunk.js.map