(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),c=n.n(i),d=n(1),r=n(4),s=n(5),l=n(7),u=n(6),m=n(8),f=(n(14),function(e){var t={name:"",description:""};return a.a.createElement("li",{id:"add-todo",className:"nav-icon",onClick:function(){return e.addition(t)}},"+")}),p=(n(15),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",{className:"nav-list"},a.a.createElement("li",{id:"todo-title"},"Todo"),a.a.createElement(f,{todos:e.todos,addition:e.addition})))}),v=(n(16),function(e){return a.a.createElement("input",{className:"todo-name-input",type:"text",placeholder:"Todo Name",value:e.todoValueName,onChange:function(t){e.nameModification(t.target.value,e.index)}})}),E=(n(17),function(e){return a.a.createElement("button",{className:"delete-todo",onClick:function(){return e.remove(e.index)}},"X")}),h=(n(18),function(e){return a.a.createElement("textarea",{className:"todo-description",rows:"5",cols:"27",type:"text",placeholder:"Todo Description",value:e.todoValueDescription,onChange:function(t){e.descriptionModification(t.target.value,e.index)}})}),b=(n(19),function(e){if(0===e.todos.length)return a.a.createElement("p",{className:"no-todos"},"No todos. Add a todo with '+'.");var t=e.todos.map(function(t,n){return a.a.createElement("div",{className:"todo",key:n,"data-key":n},a.a.createElement("div",{className:"todo-name"},a.a.createElement("div",{className:"pretty p-default p-curve"},a.a.createElement("input",{type:"checkbox"}),a.a.createElement("div",{className:"state p-primary"},a.a.createElement("label",null))),a.a.createElement(v,{index:n,todoValueName:t.name,nameModification:e.nameModification}),a.a.createElement(E,{index:n,remove:e.remove})),a.a.createElement("details",null,a.a.createElement("summary",null,"Description"),a.a.createElement(h,{index:n,todoValueDescription:t.description,descriptionModification:e.descriptionModification})))});return a.a.createElement("div",null,t)}),N=(n(20),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).addition=function(e){n.setState({todos:[].concat(Object(d.a)(n.state.todos),[e])})},n.remove=function(e){var t=Object(d.a)(n.state.todos);t.splice(e,1),n.setState({todos:t})},n.nameModification=function(e,t){var o=Object(d.a)(n.state.todos);o[t].name=e,n.setState({todos:o})},n.descriptionModification=function(e,t){var o=Object(d.a)(n.state.todos);o[t].description=e,n.setState({todos:o})},n.state={todos:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.todos;return a.a.createElement("div",null,a.a.createElement(p,{addition:this.addition}),a.a.createElement(b,{todos:e,nameModification:this.nameModification,descriptionModification:this.descriptionModification,remove:this.remove}))}}]),t}(o.Component));n(21),n(22),n(23);c.a.render(a.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3fd0760f.chunk.js.map