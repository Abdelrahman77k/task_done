(function(e){function t(t){for(var n,c,a=t[0],s=t[1],l=t[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},i=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("appList"),o("router-view")],1)},i=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app"},[o("div",{staticClass:"todoList"},[e._v(" What be to do done! "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your task"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})]),e._l(e.todos,(function(t,n){return o("div",{key:t.id,staticClass:"alert"},[o("div",{on:{click:function(t){return e.remove(n)}}},[o("i",{staticClass:"fas fa-trash"})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,i=!!r.checked;if(Array.isArray(n)){var c=null,a=e._i(n,c);r.checked?a<0&&e.$set(t,"completed",n.concat([c])):a>-1&&e.$set(t,"completed",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"completed",i)}}}),t.edit?o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control custom",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(o){return e.doenEnter(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doenEnter(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(o){o.target.composing||e.$set(t,"title",o.target.value)}}}):o("div",{class:{completed:t.completed},on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.title)+" ")])])})),o("div",{staticClass:"form-group custom-check"},[o("label",[e._v(" "+e._s(e.remening)+" items completed "),o("i",{staticClass:"fas fa-check"})])]),o("div",{staticClass:"btn-group"},[e.showClear?o("button",{attrs:{type:"button"},on:{click:e.completedTask}},[e._v("clear Completed")]):e._e()])],2)])},a=[],s=(o("4de4"),o("a434"),{name:"todoList",data:function(){return{newTodo:"",Forid:3,berforeCash:"",filter:"all",todos:[{id:1,title:"finished the vue project",completed:!1,edit:!1},{id:2,title:"take over world",completed:!1,edit:!1}]}},directives:{focus:{inserted:function(e){e.focus()}}},computed:{remening:function(){return this.todos.filter((function(e){return!e.completed})).length},showClear:function(){return this.todos.filter((function(e){return e.completed})).length>0}},methods:{addTodo:function(){this.todos.push({id:this.Forid,title:this.newTodo,completed:!1}),this.newTodo="",this.Forid++},remove:function(e){this.todos.splice(e,1)},editTodo:function(e){this.berforeCash=e.title,e.edit=!0},doenEnter:function(e){e.edit=!1},cancelEdit:function(e){e.title=this.berforeCash,e.edit=!1},completedTask:function(){this.todos=this.todos.filter((function(e){return!e.completed}))}}}),l=s,u=(o("a45f"),o("2877")),d=Object(u["a"])(l,c,a,!1,null,null,null),p=d.exports,f={name:"app",data:function(){return{}},components:{appList:p}},m=f,v=Object(u["a"])(m,r,i,!1,null,null,null),h=v.exports,y=o("8c4f");n["a"].use(y["a"]);var b=[],k=new y["a"]({mode:"history",base:"/",routes:b}),w=k,g=o("2f62");n["a"].use(g["a"]);var _=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});o("15f5"),o("7051"),o("4989"),o("ab8b"),o("dc44");n["a"].config.productionTip=!1,new n["a"]({router:w,store:_,render:function(e){return e(h)}}).$mount("#app")},a45f:function(e,t,o){"use strict";var n=o("af30"),r=o.n(n);r.a},af30:function(e,t,o){},dc44:function(e,t,o){}});
//# sourceMappingURL=app.7a84cdfe.js.map