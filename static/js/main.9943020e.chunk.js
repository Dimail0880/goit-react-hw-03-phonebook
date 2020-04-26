(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(2),o=n.n(c),l=(n(22),n(5)),u=n.n(l),i=n(9),s=n(14),m=n(10),h=n(11),d=n(12),f=n(16),b=n(15),p=function(e){var t=e.name,n=e.number,a=e.handleChange,c=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("form",{className:"form-section",autoComplete:"off",onSubmit:c},r.a.createElement("h4",null,"Name"),r.a.createElement("input",{name:"name",type:"text",value:t,onChange:a}),r.a.createElement("h4",null,"Number"),r.a.createElement("input",{name:"number",type:"text",value:n,onChange:a}),r.a.createElement("button",{className:"addContact-btn",disabled:!t.length||!n.length,type:"submit"},"Add contact")))},g=n(4),E=function(e){var t=e.contact,n=e.name,a=e.number,c=e.deleteContact;return r.a.createElement("li",null,n,": ",a,r.a.createElement("button",{onClick:function(){return c(t.id)}},"Delete"))},v=n(13),C=function(e){var t=e.contactList,n=e.deleteContact;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(E,{key:Object(g.v4)(),name:e.name,number:e.number,deleteContact:n,contact:e})})),r.a.createElement(v.a,null))},y=function(e){var t=e.handleFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Find contact by name"),r.a.createElement("input",{type:"text",onChange:t}))},S=(n(28),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}),w=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},O=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},e.updateStorage=function(t){t.contacts!==e.state.contacts&&S("contacts",e.state.contacts)},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(m.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name,a=Number(e.state.number),r={id:Object(g.v4)(),name:e.state.name,number:e.state.number};e.state.contacts.some((function(t){return t.name===e.state.name}))?alert("".concat(e.state.name," is already in contacts.")):a||""!==n?a?n.length?Number(n)?alert("Please, enter a correct name - NOT A NUMBER"):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[r]),name:"",number:""}})):alert("Please, enter a name"):alert("Please, enter a correct number"):alert("Please, enter name and number, your input is empty")},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.getFilteredContacts=function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=w("contacts"))&&this.setState({contacts:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.updateStorage(t)}},{key:"render",value:function(){var e=this.getFilteredContacts(this.state.filter,this.state.contacts);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{name:this.state.name,number:this.state.number,handleSubmit:this.handleSubmit,handleChange:this.handleChange}),r.a.createElement("h2",null,"Contacts"),this.state.contacts.length>=2&&r.a.createElement(y,{handleFilter:this.handleFilter}),r.a.createElement(C,{contactList:e,deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9943020e.chunk.js.map