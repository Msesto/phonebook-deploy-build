(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.newName,t=e.setNewName,a=e.newNumber,u=e.setNewNumber,c=e.submitHandler;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:n}),"number: ",r.a.createElement("input",{onChange:function(e){return u(e.target.value)},value:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:c},"add")))},m=function(e){var n=e.setNewSearch,t=e.newSearch;return r.a.createElement("div",null,"Find: ",r.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:t}))},s=function(e){var n=e.each,t=e.deletion;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.name,": ",n.number),r.a.createElement("button",{onClick:function(){return t(n)}},"Delete"))},f=function(e){var n=e.display,t=e.deletion;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(s,{key:e.name,deletion:t,each:e})})))},d=t(3),b=t.n(d),h="/api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},v=function(e){return b.a.post(h,e).then((function(e){return e.data}))},E=function(e){return b.a.delete("".concat(h,"/").concat(e))},w=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},N=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],b=s[1],h=Object(a.useState)(""),j=Object(l.a)(h,2),O=j[0],g=j[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],C=k[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),P=I[0],T=I[1],x=Object(a.useState)(""),F=Object(l.a)(x,2),H=F[0],J=F[1];Object(a.useEffect)((function(){p().then((function(e){return u(e)}))}),[]);var A=new RegExp(y,"gi"),B=t.filter((function(e){return e.name.match(A)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(N,{className:H,message:P}),r.a.createElement(m,{setNewSearch:C,newSearch:y}),r.a.createElement(i,{newName:d,setNewName:b,newNumber:O,setNewNumber:g,submitHandler:function(e){e.preventDefault();var n={name:d,number:O},a=t.find((function(e){return e.name===n.name}));if(a&&confirm("Do you want to update the number for ".concat(n.name)))return w(a.id,Object(o.a)(Object(o.a)({},n),{},{id:a})).then((function(e){T("Phone number updated."),J("success"),setTimeout((function(){T(null)}),5e3),u(t.map((function(n){return n.id!=a.id?n:e}))),b(""),g("")})).catch((function(e){J("error"),"ValidationError"===e.response.data.error?T("Input fields are invalid, name must contain at least 3 characters and a valid number has atleast 8 numbers"):T("".concat(n.name," was removed from the server.")),setTimeout((function(){T(null)}),5e3),p().then((function(e){return u(e)}))}));v(n).then((function(e){u(t.concat(e)),b(""),g(""),T("Person added to the phonebook."),J("success")})).catch((function(e){console.log(e.response.data),J("error"),T("Input fields are invalid, name must contain at least 3 characters and a valid number has atleast 8 numbers"),b(""),g("")})),setTimeout((function(){T(null)}),5e3)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{display:B,deletion:function(e){confirm("Are you sure you want to delete ".concat(e.name))&&E(e.id).then((function(e){p().then((function(e){return u(e)}))}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.81a4391c.chunk.js.map