"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[618],{618:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a="contactItem_contactItemButton__ep-Kd",r=t(434),o=t(208),c=t(184),s=function(e){var n=e.id,t=e.name,s=e.phone,i=(0,r.I0)();return(0,c.jsxs)("li",{children:[t,": ",s,(0,c.jsx)("button",{name:n,className:a,onClick:function(e){var n=e.currentTarget.name;console.log(n),i((0,o.Yo)(n))},children:"Delete"})]})},i=t(791),u=t(916),l=function(e){return e.contacts.isLoading},d=function(e){return e.filter},m=(0,u.P1)([function(e){return e.contacts.items},d],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),h=function(e){return e.contacts.error},f=function(){var e=(0,r.I0)();(0,i.useEffect)((function(){e((0,o.CL)())}),[e]);var n=(0,r.v9)(m);return(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsx)(s,{id:e.id,name:e.name,phone:e.phone},e.id)}))})},p="contactAddForm_contactAddForm__zthQ0",x="contactAddForm_formInput__8NILO",_="contactAddForm_formInputLabel__iK4zU",b="contactAddForm_formButton__ZSGEg",j=function(){var e=(0,r.I0)();return(0,c.jsxs)("form",{className:p,onSubmit:function(n){n.preventDefault();var t=n.currentTarget,a={name:t.elements.name.value,phone:t.elements.number.value};e((0,o.xe)(a)).then((function(e){return"contacts/fetchAddContact/fulfilled"===e.type&&t.reset()}))},children:[(0,c.jsxs)("label",{className:_,children:["Name",(0,c.jsx)("input",{className:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:_,children:["Number",(0,c.jsx)("input",{className:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{className:b,type:"submit",children:"Add contact"})]})},v="contactFilter_filter__sEA3-",g=t(895),A=function(){var e=(0,r.v9)(d),n=(0,r.I0)();return(0,c.jsx)("div",{className:v,children:(0,c.jsxs)("label",{children:["Find contacts by name",(0,c.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;n((0,g.j)(t))},value:e,type:"text",name:"filter",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},N=t(968),C=t.n(N),y=function(){return(0,r.v9)(l)&&(0,c.jsx)(C(),{type:"spinningBubbles",color:"black",height:"20%",width:"20%"})},w=t(686),F=t.n(w),I=function(){return(0,r.v9)(h)&&F().Notify.failure("Something wrong with API...")},k=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(I,{}),(0,c.jsx)("h1",{children:"Phonebook"}),(0,c.jsx)(j,{}),(0,c.jsx)("h2",{children:"Contacts"}),(0,c.jsx)(A,{}),(0,c.jsx)(y,{}),(0,c.jsx)(f,{})]})}}}]);
//# sourceMappingURL=618.ebc2e843.chunk.js.map