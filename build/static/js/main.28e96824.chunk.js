(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(14),c=n.n(u),o=(n(20),n(4)),l=n(2),i=function(e){var t=e.newName,n=e.setNewName,a=e.newNumber,u=e.setNewNumber,c=e.submitHandler;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:t}),"number: ",r.a.createElement("input",{onChange:function(e){return u(e.target.value)},value:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:c},"add")))},m=function(e){var t=e.setNewSearch,n=e.newSearch;return r.a.createElement("div",null,"Find: ",r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:n}))},s=function(e){var t=e.each,n=e.deletion;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.name,": ",t.number),r.a.createElement("button",{onClick:function(){return n(t)}},"Delete"))},f=function(e){var t=e.display,n=e.deletion;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(s,{key:e.name,deletion:n,each:e})})))},d=n(3),b=n.n(d),h="http://localhost:3001/api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},E=function(e){return b.a.post(h,e).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(h,"/").concat(e))},w=function(e,t){return b.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},N=function(e){var t=e.message,n=e.className;return null===t?null:r.a.createElement("div",{className:n},t)},j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],b=s[1],h=Object(a.useState)(""),j=Object(l.a)(h,2),O=j[0],g=j[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],C=k[1],D=Object(a.useState)(null),P=Object(l.a)(D,2),T=P[0],x=P[1],F=Object(a.useState)(""),H=Object(l.a)(F,2),J=H[0],A=H[1];Object(a.useEffect)((function(){p().then((function(e){return u(e)}))}),[]);var B=new RegExp(y,"gi"),I=n.filter((function(e){return e.name.match(B)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(N,{className:J,message:T}),r.a.createElement(m,{setNewSearch:C,newSearch:y}),r.a.createElement(i,{newName:d,setNewName:b,newNumber:O,setNewNumber:g,submitHandler:function(e){e.preventDefault();var t={name:d,number:O},a=n.find((function(e){return e.name===t.name}));if(a&&confirm("Do you want to update the number for ".concat(t.name)))return x("Phone number updated."),A("success"),setTimeout((function(){x(null)}),5e3),w(a.id,Object(o.a)(Object(o.a)({},t),{},{id:a})).then((function(e){u(n.map((function(t){return t.id!=a.id?t:e}))),b(""),g("")})).catch((function(e){A("error"),x("".concat(t.name," was removed from the server.")),setTimeout((function(){x(null)}),5e3),p().then((function(e){return u(e)}))}));E(t).then((function(e){u(n.concat(e)),b(""),g("")})),x("Person added to the phonebook."),A("success"),setTimeout((function(){x(null)}),5e3)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{display:I,deletion:function(e){confirm("Are you sure you want to delete ".concat(e.name))&&(v(e.id),p().then((function(e){return u(e)})))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.28e96824.chunk.js.map