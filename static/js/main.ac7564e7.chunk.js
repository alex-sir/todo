(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{22:function(e,t,n){e.exports=n(51)},27:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),c=n.n(i),d=n(4),r=n(12),s=n(6),l=n(13),u=n(14),m=n(19),f=n(65),p=(n(27),n(15)),h=n.n(p),v=function(e){var t={id:h.a.generate(),name:"",description:"",checked:!1};return o.a.createElement("div",null,o.a.createElement(f.a,{title:"Add Todo",placement:"left"},o.a.createElement("li",{id:"add-todo",className:"nav-icon",onClick:function(){return e.addition(t)}},"+")))},E=(n(41),function(e){return o.a.createElement("nav",null,o.a.createElement("ul",{className:"nav-list"},o.a.createElement("li",{id:"todo-title"},"Todo"),o.a.createElement(v,{todos:e.todos,addition:e.addition})))}),k=(n(42),function(e){return o.a.createElement("input",{className:"todo-name-input",type:"text",placeholder:"Todo Name",value:e.todoValueName,onChange:function(t){e.nameModification(t.target.value,e.index)}})}),N=n(18),b=(n(43),function(e){return o.a.createElement(N.a,{className:"delete-todo",onClick:function(){return e.remove(e.index)}})}),x=(n(44),function(e){return o.a.createElement("textarea",{className:"todo-description",type:"text",placeholder:"Todo Description",value:e.todoValueDescription,onChange:function(t){e.descriptionModification(t.target.value,e.index)}})}),C=(n(45),n(46),function(e){var t=e.index,n=e.isChecked;return o.a.createElement("div",{className:"pretty p-default p-curve"},o.a.createElement("input",{className:"todo-checkbox",type:"checkbox",onChange:function(){return e.updateChecked(t)},checked:n}),o.a.createElement("div",{className:"state p-primary"},o.a.createElement("label",null)))}),M=(n(47),function(e){if(0===e.todos.length)return o.a.createElement("p",{className:"no-todos"},"No todos. Add a todo with ",o.a.createElement("strong",null,"+"),".");var t=e.todos.map(function(t,n){return o.a.createElement("div",{className:"todo",key:t.id},o.a.createElement("div",{className:"todo-name"},o.a.createElement(C,{index:n,updateChecked:e.updateChecked,isChecked:t.checked}),o.a.createElement(k,{index:n,todoValueName:t.name,nameModification:e.nameModification}),o.a.createElement(b,{index:n,remove:e.remove})),o.a.createElement("details",null,o.a.createElement("summary",{className:"description-title"},"Description"),o.a.createElement(x,{index:n,todoValueDescription:t.description,descriptionModification:e.descriptionModification})))});return o.a.createElement("div",null,t)}),j=(n(48),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).addition=function(e){n.setState({todos:[].concat(Object(d.a)(n.state.todos),[e])})},n.remove=function(e){var t=Object(d.a)(n.state.todos);t.splice(e,1),n.setState({todos:t})},n.nameModification=function(e,t){var a=Object(d.a)(n.state.todos);a[t].name=e,n.setState({todos:a})},n.descriptionModification=function(e,t){var a=Object(d.a)(n.state.todos);a[t].description=e,n.setState({todos:a})},n.updateChecked=function(e){var t=Object(d.a)(n.state.todos);t[e].checked=!t[e].checked,n.setState({todos:t})},n.state={todos:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.todos;return o.a.createElement("div",{id:"app"},o.a.createElement(E,{addition:this.addition}),o.a.createElement(M,{todos:e,updateChecked:this.updateChecked,nameModification:this.nameModification,descriptionModification:this.descriptionModification,remove:this.remove}))}}]),t}(a.Component));n(49),n(50);c.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ac7564e7.chunk.js.map