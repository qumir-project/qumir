(this["webpackJsonpqumir-react"]=this["webpackJsonpqumir-react"]||[]).push([[0],{82:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=n(24),j=(n(82),n(116)),l=n(118),o=n(120),d=n(139),u=n(55),b=n(2),O=Object(j.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)},paddingTop:e.spacing(20),flexGrow:1},large:{width:e.spacing(30),height:e.spacing(30)},center:{display:"flex",justifyContent:"center"}}})),h=function(e){var t=O();return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(l.a,{href:e.url,underline:"none",children:Object(b.jsxs)(o.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(d.a,{alt:"A",src:e.imgPath,className:t.large})}),Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(u.a,{variant:"h5",color:"textPrimary",children:e.texto})})]})})})},x=function(){var e=O();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(o.a,{container:!0,justify:"space-between",children:[Object(b.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,className:e.center,children:Object(b.jsx)(h,{texto:"Jardines",imgPath:"/gardens.jpg",url:"./#/jardines"})}),Object(b.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,className:e.center,children:Object(b.jsx)(h,{texto:"Plantas",imgPath:"/plants.jpg",url:"./#/plantas"})}),Object(b.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,className:e.center,children:Object(b.jsx)(h,{texto:"Sucesos",imgPath:"/actions.jpg",url:"./#/sucesos"})})]})})},m=n(32),f=n(18),p=n(130),g=n(134),v=n(121),y=n(136),S=n(123),C=n(124),I=n(125),w=n(133),J=n(126),N=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(e.texto),j=Object(f.a)(s,2),l=j[0],o=j[1],d=function(e){r(e)};return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return d(!0)},children:"Agregar Jard\xedn"}),Object(b.jsxs)(y.a,{open:i,onClose:function(){return d(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(S.a,{id:"form-dialog-title",children:"Crear nuevo jard\xedn"}),Object(b.jsxs)(C.a,{children:[Object(b.jsx)(I.a,{children:"Un jard\xedn permite llevar agrupadas las plantas monitorear."}),Object(b.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",label:"Descripci\xf3n",type:"email",fullWidth:!0,onChange:function(e){o(e.target.value)}})]}),Object(b.jsxs)(J.a,{children:[Object(b.jsx)(v.a,{onClick:function(){return d(!1)},color:"primary",children:"Cancelar"}),Object(b.jsx)(v.a,{onClick:function(){e.onSave(l),o(""),r(!1)},color:"primary",children:"Guardar"})]})]})]})},F=n(127),k=n(128),P=n(129),D=function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",id:e.id,children:[Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(g.a,{display:"flex",width:500,height:40,bgcolor:"white",alignItems:"center",justifyContent:"center",children:Object(b.jsx)(u.a,{children:e.nombre})})}),Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(s.b,{to:"/jardin/"+e.id,children:Object(b.jsx)(F.a,{onClick:function(){var t;t=e.id,console.log(t)},children:Object(b.jsx)(k.a,{})})})}),Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(F.a,{onClick:function(){var t;t=e.id,e.onDelete(t),console.log(t)},children:Object(b.jsx)(P.a,{})})})]},e.id)})},_=function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(g.a,{display:"flex",flexDirection:"column",width:"auto",height:250,alignItems:"center",justifyContent:"center",children:[Object(b.jsx)(u.a,{variant:"h1",children:e.titulo}),Object(b.jsx)(u.a,{variant:"h3",children:e.subtitulo})]})})},A=function(e){var t=Object(a.useState)(null===localStorage.getItem("jardines")?function(){return localStorage.setItem("jardines",JSON.stringify([])),[]}:JSON.parse(localStorage.getItem("jardines"))),n=Object(f.a)(t,2),i=n[0],r=n[1],s=function(){var e,t="";for(e=0;e<5;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t},j=function(e){r(e),localStorage.setItem("jardines",JSON.stringify(e))},l=function(e){var t=Object(m.a)(i),n=t.findIndex((function(t){return t.id===e}));n>=0&&(t.splice(n,1),j(t))};return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(o.a,{container:!0,direction:"column",children:[Object(b.jsx)(_,{titulo:"Jardines",subtitulo:""}),Object(b.jsxs)(o.a,{item:!0,children:[Object(b.jsx)(p.a,{}),Object(b.jsx)(g.a,{display:"flex",width:"auto",height:80,alignItems:"center",justifyContent:"center",children:Object(b.jsx)(N,{onSave:function(e){var t={id:s(),nombre:e},n=Object(m.a)(i);n.push(t),j(n)}})}),Object(b.jsx)(p.a,{})]}),i.map((function(e){return Object(b.jsx)(D,{nombre:e.nombre,id:e.id,onDelete:l},e.id)}))]})})},M=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Plantas..."})})},W=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Sucesos..."})})},q=function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(u.a,{children:"https://unsplash.com/photos/jLjfAWwHdB8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"})})},E=n(10),G=function(e){var t=Object(E.f)().id,n=Object(E.e)(),i=Object(a.useState)((function(){var e=t,a=n.search.substring(1),c=JSON.parse(localStorage.getItem("jardines"));if(null!==c){var i=c.find((function(e){return e.id===a}));if(void 0!==i)return i.plantas.find((function(t){return t.id===e}))}})),r=Object(f.a)(i,2),s=r[0];r[1];return null===localStorage.getItem("jardines")?Object(b.jsx)(u.a,{variant:"h2",children:"Todo mal, no tienes ni jardines!"}):void 0===s?Object(b.jsx)(u.a,{variant:"h2",children:"Todo mal, la planta indicada no existe en el jard\xedn indicado!"}):Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(u.a,{children:["Planta id: ",JSON.stringify(s)]})})},T=n(54),B=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(e.texto),j=Object(f.a)(s,2),l=j[0],o=j[1],d=function(e){r(e)};return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return d(!0)},children:"Agregar Planta"}),Object(b.jsxs)(y.a,{open:i,onClose:function(){return d(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(S.a,{id:"form-dialog-title",children:"Crear nueva planta"}),Object(b.jsxs)(C.a,{children:[Object(b.jsx)(I.a,{children:"Una planta almacena una serie de acciones que definen su historia."}),Object(b.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",label:"Descripci\xf3n",type:"email",fullWidth:!0,onChange:function(e){o(e.target.value)}})]}),Object(b.jsxs)(J.a,{children:[Object(b.jsx)(v.a,{onClick:function(){return d(!1)},color:"primary",children:"Cancelar"}),Object(b.jsx)(v.a,{onClick:function(){e.onSave(l),o(""),r(!1)},color:"primary",children:"Guardar"})]})]})]})},L=function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",id:e.id,children:[Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(g.a,{display:"flex",width:500,height:40,bgcolor:"white",alignItems:"center",justifyContent:"center",children:Object(b.jsx)(u.a,{children:e.nombre})})}),Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(s.b,{to:"/planta/"+e.id+"?"+e.jardin_id,children:Object(b.jsx)(F.a,{children:Object(b.jsx)(k.a,{})})})}),Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(F.a,{onClick:function(){var t;t=e.id,e.onDelete(t)},children:Object(b.jsx)(P.a,{})})})]},e.id)})},U=function(e){var t=Object(E.f)().id,n=Object(a.useState)((function(){var e=JSON.parse(localStorage.getItem("jardines"));if(null!=e){var n=Object(m.a)(e).find((function(e){return e.id===t}));if(null!=n)return void 0===n.plantas&&(n.plantas=[]),n}})),i=Object(f.a)(n,2),r=i[0],s=i[1],j=function(){var e,t="";for(e=0;e<3;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t},l=function(e){s(e);var n=JSON.parse(localStorage.getItem("jardines"));if(null!=n){var a=Object(m.a)(n),c=a.findIndex((function(e){return e.id===t}));c>=0&&(a.splice(c,1),a.push(e),localStorage.setItem("jardines",JSON.stringify(a)))}},d=function(e){var t=Object(T.a)({},r),n=Object(m.a)(r.plantas),a=n.findIndex((function(t){return t.id===e}));a>=0&&(n.splice(a,1),t.plantas=n,l(t))};return void 0===r?Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(_,{titulo:"Jardin",subtitulo:"Jard\xedn no encontrado."}),Object(b.jsx)(o.a,{container:!0,direction:"column",children:Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(p.a,{})})})]}):Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(_,{titulo:"Jardin",subtitulo:r.nombre}),Object(b.jsxs)(o.a,{container:!0,direction:"column",children:[Object(b.jsxs)(o.a,{item:!0,children:[Object(b.jsx)(p.a,{}),Object(b.jsx)(g.a,{display:"flex",width:"auto",height:80,alignItems:"center",justifyContent:"center",children:Object(b.jsx)(B,{onSave:function(e){var t=Object(T.a)({},r),n={id:j(),nombre:e,sucesos:{}},a=Object(m.a)(r.plantas);a.push(n),t.plantas=a,l(t)}})}),Object(b.jsx)(p.a,{})]}),r.plantas.map((function(e){return Object(b.jsx)(L,{nombre:e.nombre,id:e.id,jardin_id:t,onDelete:d},e.id)}))]})]})},H=n(131),z=n(132),K=function(){return Object(b.jsx)(H.a,{children:Object(b.jsxs)(z.a,{maxWidth:"md",children:[Object(b.jsx)(E.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(E.a,{exact:!0,path:"/jardines",component:A}),Object(b.jsx)(E.a,{exact:!0,path:"/plantas",component:M}),Object(b.jsx)(E.a,{exact:!0,path:"/sucesos",component:W}),Object(b.jsx)(E.a,{exact:!0,path:"/creditos",component:q}),Object(b.jsx)(E.a,{path:"/planta/:id",component:G}),Object(b.jsx)(E.a,{path:"/jardin/:id",component:U})]})})};r.a.render(Object(b.jsx)("div",{className:"app-wrapper",children:Object(b.jsx)(s.a,{children:Object(b.jsx)(K,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.9bd832e5.chunk.js.map