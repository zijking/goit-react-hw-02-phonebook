(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=(n(14),n(2)),u=n(3),l=n(4),b=n(6),j=n(5),h=n(18);n(15);var m=function(e){var t=e.contacts,n=e.onDelete;return Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsxs)("starong",{children:[e.name,":"]})," ",Object(a.jsx)("b",{children:e.number})," ",Object(a.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]})},e.id)}))})};var d=function(e){var t=e.onChange,n=e.value;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("label",{children:["Filter:",Object(a.jsx)("input",{type:"text",name:"filter",onChange:t,value:n})]})})},f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.onChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.formSubmit=function(t){console.log(t),console.log("Sumit ----"),e.props.onSubmit(t,e.state.name,e.state.number),console.log(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.formSubmit,children:[Object(a.jsxs)("label",{children:["Name:",Object(a.jsx)("input",{type:"text",onChange:this.onChange,value:this.state.name,name:"name"})]}),Object(a.jsxs)("label",{children:["Number:",Object(a.jsx)("input",{type:"text",name:"number",onChange:this.onChange,value:this.state.number})]}),Object(a.jsx)("input",{type:"submit",value:"ADD"})]})}}]),n}(c.Component),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:Object(h.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(h.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(h.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(h.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},e.onChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.handelAddContact=function(t,n,a){t.preventDefault();var c=e.state.contacts,r=n.toLowerCase();if(c.find((function(e){return e.name.toLowerCase()===r})))window.alert("".concat(n," is alredy in contacts"));else{var o={name:n,number:a,id:Object(h.a)()},i=e.state.contacts;i.push(o),e.setState({contacts:i})}},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.handelAddContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(d,{onChange:this.onChange}),Object(a.jsx)(m,{contacts:this.getVisibleContacts(),value:this.state.filter,onDelete:this.deleteContact})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.d6f11b02.chunk.js.map