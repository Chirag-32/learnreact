(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},169:function(e,t){},256:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(20),r=a.n(n),l=(a(140),a(12)),i=(a(141),a(85)),j=a(35),o=a(9),d=a(2);var b=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.b,{dark:!0,color:"primary",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(i.c,{href:"/",children:"ReactLearning"}),Object(d.jsxs)(i.a,{className:"me-auto",children:[Object(d.jsx)(j.b,{className:"nav-link",to:"timer",children:"Timer"}),!!e.username&&Object(d.jsx)(j.b,{className:"nav-link",to:"",children:e.username}),!e.username&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.b,{className:"nav-link",to:"login",children:"Login"}),Object(d.jsx)(j.b,{className:"nav-link",to:"signup",children:"SignUp"})]}),Object(d.jsx)(j.b,{className:"nav-link",to:"add-task",children:"Add Task"}),Object(d.jsx)(j.b,{className:"nav-link",to:"contact",children:"Add Contact"}),Object(d.jsx)(j.b,{className:"nav-link",to:"tasks",children:"Learn Tasks"})]})]}),Object(d.jsx)(o.a,{})]})})},m=a(40),u=a(41),h=a(43),O=a(42),x=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={seconds:0},s}return Object(u.a)(a,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds+1}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:["Seconds: ",this.state.seconds]})}}]),a}(s.Component),p=a(34),g=a(7),v=a(46),A=a.n(v),f=a(29);var N=function(){return Object(d.jsx)("h1",{children:"Home"})},y=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={count:e.props.value},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(d.jsx)("button",{onClick:this.handleIncrement,className:"btn btn-secondary btn-sm",children:"Increment"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.state.count;return 0===e?"Zero":e}}]),a}(s.Component),C=y,S=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.state.counters.map((function(e){return Object(d.jsx)(C,{value:e.value},e.id)})),Object(d.jsx)("button",{className:"btn btn-danger",children:"Delete"})]})}}]),a}(s.Component),E=S;var I=function(e){var t,a,c=Object(s.useState)({}),n=Object(l.a)(c,2),r=n[0],i=n[1],j=Object(s.useState)(!1),b=Object(l.a)(j,2),m=b[0],u=b[1],h=Object(s.useRef)(),O=Object(s.useRef)(),x=Object(o.g)(),p="invalid username",g="invalid password";Object(s.useEffect)((function(){A.a.get("http://localhost:3000/employees").then((function(t){var a=t.data;e._userData(a)})).catch((function(e){return console.log(e)}))}),[]);var v=function(e){return e===r.name&&Object(d.jsx)("div",{className:"error",children:r.message})},f=Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)("form",{onSubmit:function(s){t=h.current.value,a=O.current.value,s.preventDefault();var c=e.usersData.find((function(e){return e.username===t||e.first_name===t}));c?c.pass!==a?i({name:"pass",message:g}):(u(!0),e._userData(c.first_name+" "+c.last_name),e.setusername(t),console.log(c),e._UserLogin(c)):i({name:"uname",message:p})},children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("label",{children:"Username "}),Object(d.jsx)("input",{type:"text",name:"uname",autoComplete:"off",required:!0,ref:h}),v("uname")]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("label",{children:"Password "}),Object(d.jsx)("input",{type:"password",name:"pass",autoComplete:"off",required:!0,ref:O}),v("pass")]}),Object(d.jsx)("div",{className:"button-container",children:Object(d.jsx)("input",{type:"submit"})})]})});return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Please Login to Continue"}),Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)("div",{className:"login-form",children:[Object(d.jsx)("div",{className:"title",children:"Login In"}),m?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[e.usersData," is successfully logged in... ",void setTimeout((function(){x("/add-task")}),3e3)]})}):f]})})]})};var w=function(e){var t=Object(s.useState)(!1),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)({id:"",title:"",summary:""}),i=Object(l.a)(r,2),j=i[0],o=i[1],b=Object(s.useState)({title:""}),m=Object(l.a)(b,2),u=m[0],h=m[1],O=function(e){var t=e.target,a=t.name,s=t.value;o(Object(g.a)(Object(g.a)({},j),{},Object(p.a)({},a,s))),h({title:j.title})};return Object(d.jsxs)("div",{className:"ui main",children:[Object(d.jsx)("h2",{children:"Add a New Task"}),Object(d.jsxs)("form",{className:"ui form",onSubmit:function(t){var a;t.preventDefault(),e.userLogin.myTasks&&(a=e.userLogin.myTasks.length+1);var s={id:parseInt(a),title:j.title,summary:j.summary};if(e.userLogin){e.userLogin.myTasks?e.userLogin.myTasks.push(s):e.userLogin.myTasks=[{id:1,title:j.title,summary:j.summary}];var c={myTasks:e.userLogin.myTasks},r=e.userLogin.id;fetch("http://localhost:3000/employees/".concat(r),{method:"PATCH",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data)}))}else A.a.post("http://localhost:3000/tasks",s);n(!0),o({title:"",summary:""}),console.log(u)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Title"}),Object(d.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoComplete:"off",value:j.title,onChange:O})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Title Summary"}),Object(d.jsx)("input",{type:"textarea",name:"summary",placeholder:"Summary",autoComplete:"off",value:j.summary,onChange:O})]}),Object(d.jsx)("button",{className:"ui button blue",children:"Add"})]}),c?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:["[",u.title,"] is successfully added"]})})}):""]})},B=a(134),z=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"text-left",children:Object(d.jsx)("h2",{children:"Add Contacts"})}),Object(d.jsxs)(f.a,{action:"",className:"form container",children:[Object(d.jsxs)(f.a.Group,{className:"mb-3",children:[Object(d.jsx)(f.a.Label,{children:"Name"}),Object(d.jsx)(f.a.Control,{type:"text",placeholder:"Name"})]}),Object(d.jsxs)(f.a.Group,{className:"mb-3",children:[Object(d.jsx)(f.a.Label,{children:"Email address"}),Object(d.jsx)(f.a.Control,{type:"email",placeholder:"Email address"})]}),Object(d.jsxs)(f.a.Group,{className:"mb-3",children:[Object(d.jsx)(f.a.Label,{children:"Mobile Number"}),Object(d.jsx)(f.a.Control,{type:"tel",placeholder:"Mobile Number"})]}),Object(d.jsx)(B.a,{variant:"primary",type:"submit",children:"Add"})]})]})}}]),a}(c.a.Component),k=z,D=(a(169),function(e){console.log(e);var t=e.contacts.map((function(e){return Object(d.jsx)("div",{className:"item container",children:Object(d.jsxs)("div",{className:"content row",children:[Object(d.jsx)("div",{className:"header col-sm-3",children:e.name}),Object(d.jsx)("div",{className:"col-sm-3",children:e.email}),Object(d.jsx)("div",{className:"col-sm-3",children:e.mobile}),Object(d.jsx)("div",{className:"col-sm-3",children:Object(d.jsx)("button",{className:"btn btn-danger",children:"Delete"})})]})})}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"",children:t})})}),M=function(){return Object(d.jsx)("div",{className:"ui fixed menu",children:Object(d.jsx)("div",{className:"ui container center",children:Object(d.jsx)("h2",{children:"Contact Manager"})})})};var J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{}),Object(d.jsx)(k,{}),Object(d.jsx)(D,{contacts:[{id:1,name:"chirag",email:"chirag@gmail.com",mobile:1234567890},{id:2,name:"baljeet",email:"baljeet@gmail.com",mobile:7896354102}]})]})},U=a(117),G=a.n(U),X=a.p+"static/media/blog1.3ffc7e1f.jpg",Y=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"green container",children:Object(d.jsxs)(G.a,Object(g.a)(Object(g.a)({},{dots:!1,infinite:!0,arrows:!0,speed:1e3,autoplay:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),{},{className:"",children:[Object(d.jsx)("div",{className:"blog-card",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{className:"card-img-top",src:X,alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card 1"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(d.jsx)("button",{href:"#",className:"btn btn-orange",children:"Read More"})]})]})}),Object(d.jsx)("div",{className:"blog-card",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{className:"card-img-top",src:X,alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card 2"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(d.jsx)("button",{href:"#",className:"btn btn-orange",children:"Read More"})]})]})}),Object(d.jsx)("div",{className:"blog-card",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{className:"card-img-top",src:X,alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card 3"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(d.jsx)("button",{href:"#",className:"btn btn-orange",children:"Read More"})]})]})}),Object(d.jsx)("div",{className:"blog-card",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{className:"card-img-top",src:X,alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card 4"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(d.jsx)("button",{href:"#",className:"btn btn-orange",children:"Read More"})]})]})}),Object(d.jsx)("div",{className:"blog-card",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{className:"card-img-top",src:X,alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card 5"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(d.jsx)("button",{href:"#",className:"btn btn-orange",children:"Read More"})]})]})})]}))})}}]),a}(s.Component),P=Y,L=a.p+"static/media/github.6c955556.svg";var R=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({id:"",uname:"",email:"",pass:""}),r=Object(l.a)(n,2),i=r[0],j=r[1],b=Object(o.g)(),m=function(e){var t=e.target.value;j(Object(g.a)(Object(g.a)({},i),{},Object(p.a)({},e.target.name,t)))};return Object(d.jsxs)("div",{className:"form-section",children:[Object(d.jsx)("h1",{className:"text-center",children:"Register or Create new account"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"form-background"}),Object(d.jsx)("div",{className:"form-content",children:Object(d.jsx)("div",{className:"form container",children:Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"bg-secondary shadow border-0 card",children:[Object(d.jsxs)("div",{className:"bg-white pb-5 card-header",children:[Object(d.jsx)("div",{className:"text-muted text-center mb-3",children:Object(d.jsx)("small",{children:"Sign up with"})}),Object(d.jsxs)("div",{className:"text-center logos",children:[Object(d.jsx)("a",{href:"#pablo",className:"btn-neutral btn-icon mr-4 btn btn-default",children:Object(d.jsx)("img",{src:L,alt:"github logo"})}),Object(d.jsx)("a",{href:"#pablo",className:"btn-neutral btn-icon mr-4 btn btn-default",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"google logo"})}),Object(d.jsx)("a",{href:"#pablo",className:"btn-neutral btn-icon mr-4 btn btn-default",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"facebook logo"})}),Object(d.jsx)("a",{href:"#pablo",className:"btn-neutral btn-icon mr-4 btn btn-default",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"linkedin logo"})})]})]}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{class:"text-center text-muted mb-4",children:Object(d.jsx)("small",{children:"Or sign up with credentials"})}),Object(d.jsxs)(f.a,{onSubmit:function(e){e.preventDefault();var t={id:i.id,username:i.uname,email:i.email,pass:i.pass};A.a.post("http://localhost:3000/employees",t).then((function(e){})).catch((function(e){return console.log(e)})),c(!0)},className:"custom-form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"User Name"}),Object(d.jsx)("div",{className:"input-group-alternative mb-3 input-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",required:!0,name:"uname",placeholder:"Username",autoComplete:"off",value:i.uname,onChange:m})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"job",children:"Email"}),Object(d.jsx)("div",{className:"input-group-alternative mb-3 input-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",name:"email",required:!0,placeholder:"Email",autoComplete:"off",value:i.email,onChange:m})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"job",children:"Password"}),Object(d.jsx)("div",{className:"input-group-alternative mb-3 input-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",name:"pass",required:!0,placeholder:"Password",autoComplete:"off",value:i.password,onChange:m})})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",className:"mt-4 btn btn-primary",children:"SignUp Now!"})})]})]})]})})})})}),a?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[i.first_name," is successfully logged in"]}),void setTimeout((function(){b("/add-task")}),3e3)]})}):""]})},Q=a(262),V=a(260),F=a(261),q=a(263);var H=function(){var e=Object(s.useState)({firstName:"",lastName:"",email:"",phoneNum:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=function(e){var t=e.target.value;c(Object(g.a)(Object(g.a)({},a),{},Object(p.a)({},e.target.name,t)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(Q.a,{name:"basic",initialValues:a,onFinish:function(){var e={firstName:a.firstName,lastName:a.lastName,email:a.email,phoneNum:a.phoneNum};console.log(e)},autoComplete:"off",children:[Object(d.jsxs)(V.a,{className:"yor-info-row justify-between ",children:[Object(d.jsx)(F.a,{span:12,className:"your-info-input responsive-width-set",children:Object(d.jsx)(Q.a.Item,{label:"First Name",rules:[{required:!0,message:"Please enter First Name"}],children:Object(d.jsx)(q.a,{maxLength:"30",name:"firstName",onChange:n,value:a.firstName})})}),Object(d.jsx)(F.a,{span:12,className:"your-info-input responsive-width-set",children:Object(d.jsx)(Q.a.Item,{label:"Last Name",rules:[{required:!0,message:"Please enter Last Name"}],children:Object(d.jsx)(q.a,{name:"lastName",onChange:n,value:a.lastName})})}),Object(d.jsx)(F.a,{span:12,className:"your-info-input responsive-width-set",children:Object(d.jsx)(Q.a.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please Enter your E-mail"}],children:Object(d.jsx)(q.a,{name:"email",onChange:n,value:a.email})})}),Object(d.jsx)(F.a,{span:12,className:"your-info-input responsive-width-set",children:Object(d.jsx)(Q.a.Item,{label:"Cell Phone Number",rules:[{required:!0,message:"Please enter Cell Number"}],children:Object(d.jsx)(q.a,{maxLength:"10",name:"phoneNum",onChange:n,value:a.phoneNum})})})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",className:"mt-4 btn btn-primary",children:"Submit"})})]}),Object(d.jsx)("h2",{children:"Output"}),Object(d.jsxs)("h3",{children:["First Name:- ",a.firstName]}),Object(d.jsxs)("h3",{children:["Last Name:- ",a.lastName]}),Object(d.jsxs)("h3",{children:["Email:- ",a.email]}),Object(d.jsxs)("h3",{children:["Phone No:- ",a.phoneNum]})]})})};var W=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(H,{})})};a(252);var Z=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),r=Object(l.a)(n,2),i=r[0],m=r[1],u=Object(s.useState)(),h=Object(l.a)(u,2),O=h[0],p=h[1];return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{username:i}),Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",element:Object(d.jsx)(b,{})}),Object(d.jsx)(o.b,{index:!0,element:Object(d.jsx)(N,{})}),Object(d.jsx)(o.b,{path:"counter",element:Object(d.jsx)(E,{})}),Object(d.jsx)(o.b,{path:"timer",element:Object(d.jsx)(x,{})}),Object(d.jsx)(o.b,{path:"signup",element:Object(d.jsx)(R,{})}),Object(d.jsx)(o.b,{path:"login",element:Object(d.jsx)(I,{setusername:m,usersData:a,_userData:c,_UserLogin:p})}),Object(d.jsx)(o.b,{path:"add-task",element:Object(d.jsx)(w,{userLogin:O})}),Object(d.jsx)(o.b,{path:"contact",element:Object(d.jsx)(J,{})}),Object(d.jsx)(o.b,{path:"slider",element:Object(d.jsx)(P,{})}),Object(d.jsx)(o.b,{path:"tasks",element:Object(d.jsx)(W,{})})]})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};a(253),a(254),a(255);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),T()}},[[256,1,2]]]);
//# sourceMappingURL=main.ac1e9fac.chunk.js.map