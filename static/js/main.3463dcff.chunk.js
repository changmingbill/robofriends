(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var l=n(1),i=n(2),s=n(4),u=n(3),h=n(5),m=function(e){var t=e.name,n=e.email,o=e.id,c=e.username;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("h3",null,c))))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username})})))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflow:"auto",height:"800px"}},e.children)},g=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong,"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component)),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots,n=t.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return t.length?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robot friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(d,{robots:n}))))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.3463dcff.chunk.js.map