(function(t){function e(e){for(var n,r,a=e[0],d=e[1],c=e[2],l=0,u=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);m&&m(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var a=o[r];0!==i[a]&&(n=!1)}n&&(s.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},r={app:0},i={app:0},s=[];function a(t){return d.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9fb745e1"}[t]+".js"}function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"5d5bc31d"}[t]+".css",i=d.p+n,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var c=s[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===i))return e()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){c=u[a],l=c.getAttribute("data-href");if(l===n||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],m.parentNode.removeChild(m),o(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=a(t);var u=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,o[1](u)}i[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/todo-test-app/",d.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4263:function(t,e,o){"use strict";var n=o("e460"),r=o.n(n);r.a},4280:function(t,e,o){"use strict";var n=o("57f6"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("router-view")],1)])},i=[],s=(o("5c0b"),o("4263"),o("2877")),a={},d=Object(s["a"])(a,r,i,!1,null,null,null),c=d.exports,l=o("9483");Object(l["a"])("".concat("/todo-test-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7");var u=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("h1",{staticClass:"todo__title"},[t._v("Todos")]),o("transition-group",{staticClass:"todo__list",attrs:{name:"list",tag:"div"}},t._l(t.todoList,(function(e,n){return o("li",{key:e.title+"-"+n,staticClass:"todo-item",attrs:{"data-current":n}},[o("todo-card",{attrs:{todoList:t.todoList,item:e,index:n}})],1)})),0),o("a",{staticClass:"btn__single",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addNewTodo(e)}}},[t._v(" Add new task list ")]),o("transition",{attrs:{name:"scroll"}},[t.windowTop>500?o("a",{staticClass:"btn__scroll",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.scrollToTop(e)}}},[o("span")]):t._e()])],1)},f=[],p=(o("4160"),o("159b"),o("5530")),h=o("2f62"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"todo-item__header"},[o("h2",{staticClass:"todo-item__title"},[t._v(t._s(t.item.title))]),o("div",{staticClass:"btns-wrapper"},[o("router-link",{staticClass:"btn btn--change-white",attrs:{title:"Edit this card",to:{name:"Change",params:{id:t.index}}}}),o("a",{staticClass:"btn btn--trash-white",attrs:{href:"#",title:"Delete this card"},on:{click:function(e){return e.preventDefault(),t.showDialogDelete(e)}}})],1)]),o("div",{staticClass:"todo-item__body"},[o("ul",{staticClass:"todo-item__list"},t._l(t.shortTodolist,(function(t,e){return o("todo-card-task",{key:e,staticClass:"todo-item__task",class:{complited:t.todoItemComplited},attrs:{todo:t,index:e}})})),1),t.showMore?o("ul",{staticClass:"todo-item__list"},t._l(t.restTodolist,(function(t,e){return o("todo-card-task",{key:e,staticClass:"todo-item__task",class:{complited:t.todoItemComplited},attrs:{todo:t,index:e}})})),1):t._e(),t.item.todo.length>4?o("button",{staticClass:"btn__more",attrs:{title:t.titleMore},on:{click:function(e){t.showMore=!t.showMore}}},[t._v(t._s(t.btnMore)+" ")]):t._e()]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isDelete,expression:"isDelete"}],staticClass:"alert"},[o("div",{staticClass:"alert__mask"},[o("div",{staticClass:"alert__window"},[o("div",{staticClass:"alert__text"},[t._v("You realy want delete this card?")]),o("p",{staticClass:"alert__description"},[t._v(" This action cannot be undone! ")]),o("div",{staticClass:"alert__btn_wrap"},[o("button",{staticClass:"alert__btn",on:{click:function(e){return t.deleteTodo(t.index)}}},[t._v("Delete")]),o("button",{staticClass:"alert__btn",on:{click:function(e){t.isDelete=!1}}},[t._v("Cancel")])])])])])])},v=[],_=(o("fb6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-card-task"},[o("div",{staticClass:"label-check",class:{checked:t.todo.todoItemComplited}}),o("div",{staticClass:"todo-item__content",on:{mouseover:function(e){e.stopPropagation(),t.hover=!0},mouseleave:function(e){e.stopPropagation(),t.hover=!1}}},[o("span",[t._v(t._s(t.smallBody(t.todo.todoItemContent)))]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[!t.hover&&t.isBig?o("span",{key:"small"},[t._v("...")]):o("span",{key:"big"},[t._v(t._s(t.restBody(t.todo.todoItemContent)))])])],1)])}),b=[],g={props:["todo","index"],name:"TodoCardTask",data:function(){return{hover:!1,isBig:!1}},methods:{smallBody:function(t){if(t.length>40){this.isBig=!0;var e=t.substring(0,40);return e}return t},restBody:function(t){if(t.length>40){this.isBig=!0;var e=t.substring(40);return e}return""}}},T=g,w=(o("4280"),Object(s["a"])(T,_,b,!1,null,"6c03b00d",null)),I=w.exports,y={props:["todoList","item","index"],components:{TodoCardTask:I},data:function(){return{isDelete:!1,showMore:!1}},methods:Object(p["a"])(Object(p["a"])({},Object(h["b"])(["removeTodo"])),{},{deleteTodo:function(t){var e=this;this.isDelete=!1,setTimeout((function(){e.removeTodo(t)}),0)},showDialogDelete:function(){this.isDelete=!0}}),computed:{shortTodolist:function(){return this.item.todo.length>4?this.item.todo.slice(0,4):this.item.todo},restTodolist:function(){return this.item.todo.length>4?this.item.todo.slice(4):this.item.todo},btnMore:function(){return this.showMore?"Less...":"More..."},titleMore:function(){return this.showMore?"See less tasks":"See more tasks"}}},O=y,S=Object(s["a"])(O,C,v,!1,null,null,null),k=S.exports,E={name:"Todos",data:function(){return{showBtnScroll:!1,windowTop:null}},components:{TodoCard:k},computed:Object(p["a"])({},Object(h["c"])(["todoList","currentCard"])),methods:Object(p["a"])(Object(p["a"])({},Object(h["b"])(["addTodo","setCurrentCard"])),{},{addNewTodo:function(){var t=this.todoList.length+1;this.addTodo({title:"new Todo-".concat(t),todo:[]});var e=this.todoList.length-1;this.$router.push({name:"Change",params:{id:e}})},scrollToCurrent:function(){var t=this;if(null!==this.currentCard){var e=document.querySelectorAll(".todo-item[data-current]"),o=null;e.forEach((function(e){+e.getAttribute("data-current")===t.currentCard&&(o=e)}));var n=this.getCoords(o);window.scrollTo(0,n.top,{behavior:"smooth"})}},getCoords:function(t){var e=t.getBoundingClientRect();return{top:e.top+pageYOffset,left:e.left+pageXOffset}},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},onScroll:function(){this.windowTop=window.top.scrollY}}),mounted:function(){this.scrollToCurrent(),this.setCurrentCard(null),window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},D=E,L=(o("cc24"),Object(s["a"])(D,m,f,!1,null,null,null)),j=L.exports;n["a"].use(u["a"]);var x=[{path:"/",name:"Todos",component:j},{path:"/change-todo/:id",name:"Change",component:function(){return o.e("about").then(o.bind(null,"6be9"))}}],A=new u["a"]({routes:x}),M=A,P=(o("4de4"),o("0e44")),R=[{title:"Действия с заметкой:",todo:[{todoItemContent:"сохранить изменения",todoItemComplited:!0},{todoItemContent:"отменить редактирование (необходимо подтверждение)",todoItemComplited:!1},{todoItemContent:"удалить (необходимо подтверждение)",todoItemComplited:!1},{todoItemContent:"отменить внесенное изменение",todoItemComplited:!1},{todoItemContent:"повторить отмененное изменение",todoItemComplited:!1}]},{title:"Действия с пунктами Todo:",todo:[{todoItemContent:"добавить",todoItemComplited:!0},{todoItemContent:"удалить",todoItemComplited:!0},{todoItemContent:"отредактировать текст",todoItemComplited:!0},{todoItemContent:"отметить как выполненный",todoItemComplited:!0}]},{title:"Действия на главной:",todo:[{todoItemContent:"перейти к созданию новой заметки",todoItemComplited:!0},{todoItemContent:"перейти к изменению",todoItemComplited:!0},{todoItemContent:"удалить (необходимо подтверждение)",todoItemComplited:!1}]},{title:"Требования к функционалу:",todo:[{todoItemContent:"Все действия на сайте должны происходить без перезагрузки страницы.",todoItemComplited:!0},{todoItemContent:"Подтверждение действий (удалить заметку) выполняется с помощью диалогового окна.",todoItemComplited:!1},{todoItemContent:"Интерфейс должен отвечать требованиям usability.",todoItemComplited:!0},{todoItemContent:"После перезагрузки страницы состояние списка заметок должно сохраняться.",todoItemComplited:!0},{todoItemContent:"Можно пренебречь несоответствием редактирования текста с помощью кнопок отменить/повторить и аналогичным действиям с помощью комбинацияй клавиш (Ctrl+Z, Command+Z, etc.)",todoItemComplited:!1}]},{title:"Технические требования:",todo:[{todoItemContent:'Диалоговые окна должны быть реализованы без использования "alert", "prompt" и "confirm".',todoItemComplited:!0},{todoItemContent:"В качестве языка разработки допускается использовать JavaScript или TypeScript.",todoItemComplited:!0},{todoItemContent:"В качестве сборщика, если это необходимо, используйте Webpack.",todoItemComplited:!0},{todoItemContent:"Верстка должна быть выполнена без использования UI библиотек (например Vuetify).",todoItemComplited:!0},{todoItemContent:"Адаптивность не обязательна, но приветствуется.",todoItemComplited:!1},{todoItemContent:"Логика приложения должна быть разбита на разумное количество самодостаточных Vue-компонентов.",todoItemComplited:!0}]}],B=R;n["a"].use(h["a"]);var N=new h["a"].Store({state:{todoList:B,historyState:[],currentCard:null},plugins:[Object(P["a"])()],mutations:{REMOVE_TODO:function(t,e){return t.todoList=t.todoList.filter((function(t,o){if(o!==e)return t}))},ADD_TODO:function(t,e){return t.todoList.push(e)},UPDATE_TODO:function(t,e){var o=e.todoList,n=e.index;t.todoList[n]=o},ADD_HISTORY_STEP:function(t,e){t.historyState.push(e)},REMOVE_HISTORY_STEP:function(t){t.historyState.pop()},CLEAR_HISTORY:function(t){t.historyState=[]},SET_CURRENT:function(t,e){t.currentCard=e}},actions:{removeTodo:function(t,e){t.commit("REMOVE_TODO",e)},addTodo:function(t,e){t.commit("ADD_TODO",e)},updateTodo:function(t,e){var o=e.todoList,n=e.index;t.commit("UPDATE_TODO",{todoList:o,index:n})},addHistoryStep:function(t,e){t.commit("ADD_HISTORY_STEP",e)},removeHistoryStep:function(t){t.commit("REMOVE_HISTORY_STEP")},clearHistory:function(t){t.commit("CLEAR_HISTORY")},setCurrentCard:function(t,e){t.commit("SET_CURRENT",e)}},getters:{todoList:function(t){return t.todoList},historyState:function(t){return t.historyState},currentCard:function(t){return t.currentCard}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:M,store:N,render:function(t){return t(c)}}).$mount("#app"),n["a"].directive("focus",{inserted:function(t){t.focus()}})},"57f6":function(t,e,o){},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),r=o.n(n);r.a},"9c0c":function(t,e,o){},a3d4:function(t,e,o){},cc24:function(t,e,o){"use strict";var n=o("a3d4"),r=o.n(n);r.a},e460:function(t,e,o){}});
//# sourceMappingURL=app.f138ee90.js.map