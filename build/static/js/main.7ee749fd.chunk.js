(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{39:function(e,t,a){e.exports=a(93)},50:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),c=a.n(l),r=a(13),s=(a(50),a(3)),i=a(12),m=a.n(i),u=(a(68),a(69),function(e){var t=e.loginStatus;return o.a.createElement("section",{className:"header"},o.a.createElement("section",null,o.a.createElement("h1",{className:"headerText"},"To Do Work")),localStorage.getItem("token")?o.a.createElement("section",{className:"profileDiv"},o.a.createElement("div",{className:"profile"}),o.a.createElement("section",{className:"name"},localStorage.getItem("username")),o.a.createElement("section",{className:"logout",onClick:function(){localStorage.clear(),t()}},"Logout")):o.a.createElement("section",{className:"genToken"},o.a.createElement("section",{className:"login"},"Login"),o.a.createElement("section",{className:"signup"},"SignUp")))}),p=(a(70),function(e){var t=e.removeAddComponent,a=e.addNewEntry,l=(e.get,Object(n.useState)("")),c=Object(s.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),d=p[0],g=p[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),h=f[0],b=f[1];Object(r.useToasts)().addToast;return o.a.createElement("section",{className:"wrapper"},o.a.createElement("div",{className:"removeIcon",onClick:function(){return t()}},o.a.createElement("span",{className:"glyphicon glyphicon-remove"})),o.a.createElement("section",{className:"addEntry"},o.a.createElement("section",{className:"input"},o.a.createElement("label",null,"Title"),o.a.createElement("div",{className:"titleContainer"},o.a.createElement("input",{type:"text",className:"title",onChange:function(e){return m(e.target.value)}}))),o.a.createElement("section",{className:"input"},o.a.createElement("div",null,o.a.createElement("label",null,"Enter TODO")),o.a.createElement("div",{className:"todoContainer"},o.a.createElement("input",{type:"text",className:"todo",onChange:function(e){return g(e.target.value)}}))),o.a.createElement("section",{className:"input"},o.a.createElement("div",null,o.a.createElement("label",null,"Priority")),o.a.createElement("div",{className:"radioContainer"},o.a.createElement("label",{className:"radio-inline"},o.a.createElement("input",{type:"radio",name:"option",onChange:function(e){return b("LOW")}}),"LOW"),o.a.createElement("label",{className:"radio-inline"},o.a.createElement("input",{type:"radio",name:"option",onChange:function(e){return b("HIGH")}}),"HIGH")))),o.a.createElement("section",{className:"btnWrapper"},o.a.createElement("button",{className:"addBtn",onClick:function(){a(i,d,h)}},"ADD")))}),d=(a(71),a(11)),g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],u=r[1],p=Object(n.useState)(""),g=Object(s.a)(p,2),E=g[0],f=g[1],h=Object(n.useState)(""),b=Object(s.a)(h,2),N=b[0],v=b[1],S=Object(n.useState)(""),y=Object(s.a)(S,2),O=y[0],k=y[1],j=Object(n.useState)(),w=Object(s.a)(j,2),C=(w[0],w[1]);return o.a.createElement("section",{className:"mainSignUpContainer"},o.a.createElement("section",{className:"wrapperSignup"},o.a.createElement("form",{className:"SignUpOuterPart"},o.a.createElement("h2",{className:"loginHead"},"STARTECH"),o.a.createElement("input",{className:"SignUpinputs",type:"input",placeholder:"Full Name",name:"fullName",onChange:function(e){return l(e.target.value)},value:a,required:!0}),o.a.createElement("input",{className:"SignUpinputs",type:"input",placeholder:"Email",name:"email",onChange:function(e){return u(e.target.value)},value:i,required:!0}),o.a.createElement("input",{className:"SignUpinputs",type:"password",placeholder:"Password",name:"password",onChange:function(e){return f(e.target.value)},value:E,required:!0}),o.a.createElement("input",{className:"SignUpinputs",type:"password",placeholder:"Confirm Password",name:"confirmPassword",onChange:function(e){return v(e.target.value)},value:N,required:!0}),o.a.createElement("input",{className:"SignUpinputs",type:"text",placeholder:"Contact No.",name:"contact",onChange:function(e){return k(e.target.value)},value:O,required:!0}),o.a.createElement("section",null,o.a.createElement(d.b,{to:"/login"},o.a.createElement("button",{className:"buttoninput",onClick:function(){E!==N?alert("Password doesn't match"):m.a.post("http://localhost:5000/signup",null,{params:{name:a,email:i,password:E,confirmPassword:N,contact:O}}).then((function(e){C(!0),alert("new user added")})).catch((function(e){C(!1),console.log(e),alert("Problem while signing up...try again later")}))}},"Submit")),"or"," ",o.a.createElement(d.b,{to:"/login"},o.a.createElement("button",{className:"btn2"}," Login "))," ","Instead?"))))},E=(a(75),a(4)),f=function(e){var t=e.loginStatus,a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],r=l[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),p=u[0],g=u[1];return o.a.createElement("section",{className:"wrappers"},o.a.createElement("form",{className:"outerPart"},o.a.createElement("h2",{className:"loginHead"},"STARTECH"),o.a.createElement("input",{className:"inputs",type:"input",placeholder:"Email",name:"email",onChange:function(e){return r(e.target.value)},value:c}),o.a.createElement("input",{className:"inputs",type:"password",placeholder:"Password",name:"password",onChange:function(e){return g(e.target.value)},value:p}),localStorage.getItem("token")?o.a.createElement(E.a,{to:"/tasks"}):null,o.a.createElement("section",null,o.a.createElement("button",{className:"button buttoninput",onClick:function(){m.a.post("http://localhost:5000/login",null,{params:{email:c,password:p}}).then((function(e){console.log(e),e.data.token?(t(),localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.name),localStorage.setItem("id",e.data.id)):alert("Please Enter Correct Email and Password.")})).catch((function(e){alert("Login error"),console.log(e)}))}},"Login"),"or"," ",o.a.createElement(d.b,{to:"/signup"},o.a.createElement("button",{className:"btn2"}," Signup "))," ","Instead?")))},h=(a(76),function(e){var t=e.add;return o.a.createElement("section",{className:"addButtonContainer"},o.a.createElement("img",{onClick:function(){return t()},alt:"Add-Button",className:"addBtnImg",src:"https://www.searchpng.com/wp-content/uploads/2019/03/AddButt-butt-200x200.png"}))}),b=a(14),N=(a(77),function(e){var t=e.tasks,a=e.removeTask,n=e.setSortByValue;return o.a.createElement("section",{className:"taskContainer"},"string"!==typeof t?o.a.createElement("section",{className:"topLine"},o.a.createElement("section",null,o.a.createElement("p",{className:"taskList"},"TaskList :")),o.a.createElement("section",null,o.a.createElement("select",{name:"sortBy",className:"dropDown",onChange:function(e){return function(e){n(e)}(e)}},o.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Sort by:"),o.a.createElement("option",{value:"priority"},"Priority"),o.a.createElement("option",{value:"date"},"Date")))):"","string"!==typeof t?t.map((function(e){return o.a.createElement(b.Spring,{from:{opacity:0,marginLeft:-100},to:{opacity:1,marginLeft:0}},(function(t){return o.a.createElement("div",{style:t},o.a.createElement("section",{key:e.id},o.a.createElement("section",{className:"taskData"},o.a.createElement("div",null,o.a.createElement("p",{className:"titleName"},e.title)),o.a.createElement("div",{className:"priorityContainer"},o.a.createElement("p",{className:"priority"},e.priority)),o.a.createElement("div",null,o.a.createElement("div",{className:"removeBtnContainer"},o.a.createElement("button",{className:"removeButton",onClick:function(){return a(e.id)}},"Remove")))),o.a.createElement("section",{className:"priorityInfo"},o.a.createElement("span",null,o.a.createElement("p",{className:"titleData"},e.data)))))}))})):o.a.createElement("p",{className:"noTask"},"No task at the moment..."))});var v=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),v=i[0],S=i[1],y=Object(n.useState)(!0),O=Object(s.a)(y,2),k=O[0],j=O[1],w=Object(n.useState)([]),C=Object(s.a)(w,2),I=C[0],T=C[1],B=Object(n.useState)(!1),P=Object(s.a)(B,2),L=(P[0],P[1],Object(n.useState)()),x=Object(s.a)(L,2),A=(x[0],x[1]),D=Object(n.useState)(""),H=Object(s.a)(D,2),U=H[0],W=H[1],q=Object(r.useToasts)().addToast,z=function(){S(!1),j(!0),console.log("njjnn"),l(a+1)},G=function(){A(!0)},R=function(e,t,a){console.log("hey"),console.log(localStorage.getItem("token")),m.a.post("http://localhost:5000/addTask",null,{headers:{Authorization:localStorage.getItem("token")},params:{title:e,data:t,priority:a,userId:localStorage.getItem("id")}}).then((function(e){console.log(e),z(),J(),q("Task added",{appearance:"success",autoDismiss:!0,placement:"bottom-left"})})).catch((function(e){return console.log(e)})),console.log("data added")},J=function(){console.log(localStorage.getItem("token")),m.a.post("http://localhost:5000/getAllTasks",null,{headers:{Authorization:localStorage.getItem("token")},params:{userId:localStorage.getItem("id")}}).then((function(e){return e.data})).then((function(e){if(console.log(e.message),console.log(U),"login again"!=e.message)if(console.log("nbjnn"),"priority"===U&&"string"!==typeof e){var t=[];e.map((function(e){"HIGH"===e.priority&&t.push(e)})),e.map((function(e){"LOW"===e.priority&&t.push(e)})),T(t)}else T(e);else localStorage.clear(),A(!1)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){J()}),[U]),o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(E.b,{path:"/login",exact:!0},o.a.createElement(f,{loginStatus:G})),o.a.createElement(E.b,{path:"/",exact:!0},o.a.createElement(f,{loginStatus:G})),o.a.createElement(E.b,{path:"/signup",exact:!0,component:g}),localStorage.getItem("token")?o.a.createElement(E.b,{path:"/tasks",exact:!0},o.a.createElement(u,{loginStatus:function(){A(!1)}}),o.a.createElement(N,{tasks:I,removeTask:function(e){m.a.post("http://localhost:5000/deleteTask",null,{headers:{Authorization:localStorage.getItem("token")},params:{id:e}}).then((function(e){console.log(e),J(),q("Task deleted successfully",{appearance:"success",autoDismiss:!0})})).catch((function(e){return console.log(e)}))},setSortByValue:function(e){W(e.target.value),console.log(e.target.value)}}),v?o.a.createElement(b.Spring,{from:{opacity:0,marginBottom:-100},to:{opacity:1,marginBottom:0}},(function(e){return o.a.createElement("div",{style:e},o.a.createElement(p,{removeAddComponent:z,addNewEntry:R,get:J}))})):null,k?o.a.createElement(h,{add:function(){S(!0),j(!1),console.log(I)}}):null):o.a.createElement(E.b,{path:"/tasks",exact:!0},o.a.createElement(f,{loginStatus:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.ToastProvider,{placement:"bottom-left"},o.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.7ee749fd.chunk.js.map