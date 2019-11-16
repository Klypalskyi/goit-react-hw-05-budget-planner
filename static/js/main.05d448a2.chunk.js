(window["webpackJsonpgoit-react-hw-05-budget"]=window["webpackJsonpgoit-react-hw-05-budget"]||[]).push([[0],{24:function(e,n,t){e.exports=t(44)},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(10),o=t.n(u),c=t(3),l=t(1),i=t(2);function p(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return p=function(){return e},e}var s=i.a.form(p()),b=function(e){var n=e.onSubmit,t=e.children;return a.a.createElement(s,{onSubmit:n},t)};b.defaultProps={onSubmit:function(){return null}};var m=b;function d(){var e=Object(l.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return d=function(){return e},e}var f=i.a.label(d(),function(e){return e.customStyles}),x=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(f,{customStyles:t},n)};x.defaultProps={customStyles:""};var g=x;function v(){var e=Object(l.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return v=function(){return e},e}var y=i.a.input(v()),E=function(e){var n=e.type,t=e.value,r=e.onChange,u=e.name;return a.a.createElement(y,{type:n,value:t,onChange:r,name:u})};E.defaultProps={type:"text",value:"",onChange:function(){return null},name:""};var O=E;function h(){var e=Object(l.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return h=function(){return e},e}var j=i.a.button(h()),w=function(e){var n=e.type,t=e.label,r=e.onClick;return a.a.createElement(j,{type:n,onClick:r},t)};w.defaultProps={type:"button",label:"",onClick:function(){return null}};var P=w,S=function(e){var n=e.budgetAmount,t=e.addBudget,r=e.clearInput,u=e.inputChange;return a.a.createElement(m,{onSubmit:function(e){e.preventDefault(),t(n),r("budgetAmount")}},a.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",a.a.createElement(O,{type:"number",value:n,onChange:u,name:"budgetAmount"})),a.a.createElement(P,{label:"Save",type:"submit"}))},A="CHANGE",D="CLEAR",N=function(e){var n=e.target;return{type:A,payload:n}},C=function(e){return{type:D,payload:e}},k="ADD_BUDGET",I="ADD_EXPENSE",B="REMOVE_EXPENSE",T={inputChange:N,clearInput:C,addBudget:function(e){return{type:k,payload:e}}},_=Object(c.b)(function(e){return{budgetAmount:e.inputs.budgetAmount}},T)(S),z=t(20),M=t.n(z),R=function(e){var n=e.expenseName,t=e.expenseAmount,r=e.inputChange,u=e.clearInput,o=e.addExpense,c=e.saveItem;return a.a.createElement(m,{onSubmit:function(e){e.preventDefault(),o(t),u("expenseName"),u("expenseAmount"),c({id:M.a.generate(),expenseName:n,expenseAmount:t})}},a.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",a.a.createElement(O,{type:"text",name:"expenseName",value:n,onChange:r})),a.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",a.a.createElement(O,{type:"number",name:"expenseAmount",value:t,onChange:r})),a.a.createElement(P,{label:"Add",type:"submit"}))},F="SAVE_ITEM",G="DELETE_ITEM",J={inputChange:N,clearInput:C,addExpense:function(e){return{type:I,payload:e}},saveItem:function(e){return{type:F,payload:e}}},L=Object(c.b)(function(e){var n=e.inputs;return{expenseName:n.expenseName,expenseAmount:n.expenseAmount}},J)(R);function V(){var e=Object(l.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return V=function(){return e},e}var W=i.a.table(V()),X=function(e){var n=e.expenses,t=e.deleteItem,r=e.removeExpense;return n.length>0?a.a.createElement(W,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n.map(function(e){var n=e.id,u=e.expenseName,o=e.expenseAmount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,u),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement(P,{label:"Delete",onClick:function(){return function(e,n){t(e),r(n)}(n,o)}})))}))):null},H={deleteItem:function(e){return{type:G,payload:e}},removeExpense:function(e){return{type:B,payload:e}}},U=Object(c.b)(function(e){return{expenses:e.expenses}},H)(X);function $(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return $=function(){return e},e}function q(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return q=function(){return e},e}function K(){var e=Object(l.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return K=function(){return e},e}var Q=i.a.div(K(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),Y=i.a.p(q()),Z=i.a.p($()),ee=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(Q,{isPositive:r},a.a.createElement(Y,null,n),a.a.createElement(Z,null,t,"\xa0$"))};ee.defaultProps={isPositive:void 0};var ne=ee;function te(){var e=Object(l.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return te=function(){return e},e}var re=i.a.section(te()),ae=function(e){var n=e.budget,t=e.expenses,r=e.balance;return a.a.createElement(re,null,a.a.createElement(ne,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(ne,{label:"Expenses",value:t}),a.a.createElement(ne,{label:"Balance",value:r,isPositive:r>=0}))},ue=Object(c.b)(function(e){var n=e.values;return{budget:n.budget,expenses:n.expenses,balance:n.balance}},{})(ae);function oe(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return oe=function(){return e},e}var ce=i.a.div(oe()),le=function(){return a.a.createElement(ce,null,a.a.createElement(_,null),a.a.createElement(ue,null),a.a.createElement(L,null),a.a.createElement(U,null))},ie=(t(43),t(7)),pe=t(21),se=t(5);function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(t,!0).forEach(function(n){Object(se.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var de={budgetAmount:"0",expenseName:"",expenseAmount:"0"},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case A:var a=r.name,u=r.value;return"number"===r.type&&u.startsWith("0")?me({},e,Object(se.a)({},a,u.replace("0",""))):"number"===r.type&&0===u.length?me({},e,Object(se.a)({},a,"0")):me({},e,Object(se.a)({},a,u));case D:return me({},e,"expenseName"===r?Object(se.a)({},r,""):Object(se.a)({},r,"0"));default:return e}};function xe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?xe(t,!0).forEach(function(n){Object(se.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xe(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var ve={budget:0,expenses:0,balance:0},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case k:var a=Number(r)-e.expenses;return ge({},e,{budget:Number(r),balance:a});case I:var u=e.expenses+Number(r),o=e.budget-e.expenses-Number(r);return ge({},e,{expenses:u,balance:o});case B:var c=e.expenses-Number(r),l=e.balance+Number(r);return ge({},e,{expenses:c,balance:l});default:return e}},Ee=t(15),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case F:return[].concat(Object(Ee.a)(e),[r]);case G:return Object(Ee.a)(e).filter(function(e){return e.id!==r});default:return e}},he=Object(ie.combineReducers)({inputs:fe,values:ye,expenses:Oe}),je=Object(ie.createStore)(he,Object(pe.composeWithDevTools)());o.a.render(a.a.createElement(c.a,{store:je},a.a.createElement(le,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.05d448a2.chunk.js.map