(this.webpackJsonpmercoma=this.webpackJsonpmercoma||[]).push([[0],{11:function(e,a,t){e.exports={login:"Login_login__3cIXe",container:"Login_container__30vm-",formContainer:"Login_formContainer__3k4gR",inputContainer:"Login_inputContainer__2uVJo",statusMessage:"Login_statusMessage__3tLKV",signUpSection:"Login_signUpSection__Fzv60",navigationLink:"Login_navigationLink__3d2aW"}},13:function(e,a,t){e.exports={sidebar:"Sidebar_sidebar__1aFpz",profileCard:"Sidebar_profileCard__3jBJu",logoutButton:"Sidebar_logoutButton__1tUZl",navigationItems:"Sidebar_navigationItems__2axb-",navigationLink:"Sidebar_navigationLink__1O92j"}},14:function(e,a,t){e.exports={mobileSidebar:"MobileSidebar_mobileSidebar__1Bk31",navigationItems:"MobileSidebar_navigationItems__2Wg18",navigationLink:"MobileSidebar_navigationLink__24IUe"}},15:function(e,a,t){e.exports={modalCardBody:"PhotoModal_modalCardBody__eZRkv",inputfile:"PhotoModal_inputfile__3rFvn",inputLabel:"PhotoModal_inputLabel__3b75E",addedImage:"PhotoModal_addedImage__35bUy",emptyPhotoContent:"PhotoModal_emptyPhotoContent__2Nq4g"}},17:function(e,a,t){e.exports=t.p+"static/media/fur1.68749b70.jpeg"},18:function(e,a,t){e.exports=t.p+"static/media/fur2.9d33a3db.jpeg"},19:function(e,a,t){e.exports=t.p+"static/media/fur3.4a7607e1.jpeg"},20:function(e,a,t){e.exports=t.p+"static/media/fur4.65943041.jpeg"},21:function(e,a,t){e.exports={photoCard:"PhotoCard_photoCard__2LWnp",placementCard:"PhotoCard_placementCard__DURdn"}},25:function(e,a,t){e.exports={notFoundContent:"NotFound_notFoundContent__VAFFL",notFoundReturnLink:"NotFound_notFoundReturnLink__29as3"}},26:function(e,a,t){e.exports={photosContent:"Photos_photosContent__cYX0X",photoGrid:"Photos_photoGrid__1Dii8"}},39:function(e,a,t){e.exports=t.p+"static/media/profile.8c78152f.jpeg"},40:function(e,a,t){e.exports={base:"Base_base__27MuK"}},41:function(e,a,t){e.exports={dashboardContent:"Dashboard_dashboardContent__vJOZH"}},44:function(e,a,t){e.exports=t(72)},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(37),c=t.n(r),l=t(4),i=t(2),s=t(14),m=t.n(s);function u(){return o.a.createElement("div",{className:m.a.mobileSidebar},o.a.createElement("ul",{className:m.a.navigationItems},o.a.createElement(l.b,{to:"/dashboard/photos"},o.a.createElement("div",{className:m.a.navigationLink},o.a.createElement("i",{className:"fas fa-camera fa-2x"}),"Photos")),o.a.createElement(l.b,{to:"/dashboard"},o.a.createElement("div",{className:m.a.navigationLink},o.a.createElement("i",{className:"fas fa-tachometer-alt fa-2x"}),"Dashboard")),o.a.createElement(l.b,{to:"/dashboard/profile"},o.a.createElement("div",{className:m.a.navigationLink},o.a.createElement("i",{className:"fas fa-user fa-2x"}),"Profile"))))}var d=t(1),p=t(17),g=t.n(p),f=t(18),b=t.n(f),E=t(19),h=t.n(E),v=t(20),_=t.n(v),C=t(39),N={firstName:"Jerry",lastName:"Turcios",email:"jerryturcios08@gmail.com",avatar:t.n(C).a,photos:[{image:g.a,tumorPercent:.5203},{image:b.a,tumorPercent:.2201},{image:h.a,tumorPercent:.7203},{image:_.a,tumorPercent:.3291},{image:g.a,tumorPercent:.5203},{image:b.a,tumorPercent:.2201},{image:h.a,tumorPercent:.7203},{image:_.a,tumorPercent:.3291},{image:g.a,tumorPercent:.5203},{image:b.a,tumorPercent:.2201},{image:h.a,tumorPercent:.7203},{image:_.a,tumorPercent:.3291},{image:g.a,tumorPercent:.5203},{image:b.a,tumorPercent:.2201},{image:h.a,tumorPercent:.7203},{image:_.a,tumorPercent:.3291}]},S=t(13),j=t.n(S);function O(e){var a=Object(n.useState)(null),t=Object(d.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(!1),g=Object(d.a)(p,2),f=g[0],b=g[1];return Object(n.useEffect)((function(){u("".concat(N.firstName," ").concat(N.lastName)),c(N.avatar),e.page})),o.a.createElement("div",{className:j.a.sidebar},o.a.createElement("div",{className:"dropdown ".concat(f&&"is-active")},o.a.createElement("div",{className:"dropdown-trigger"},o.a.createElement("div",{className:j.a.profileCard,onClick:function(){b(!f)}},o.a.createElement("img",{src:r,alt:"Avatar"}),o.a.createElement("p",null,m))),o.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{className:"dropdown-content"},o.a.createElement(l.b,{to:"/dashboard/profile",className:"dropdown-item"},"Profile"),o.a.createElement("hr",{className:"dropdown-divider"}),o.a.createElement(l.b,{to:"/login"},o.a.createElement("button",{id:j.a.logoutButton,className:"dropdown-item",onClick:function(){localStorage.removeItem("auth")}},"Logout"))))),o.a.createElement("div",{className:j.a.navigationItems},o.a.createElement("div",null,o.a.createElement(l.b,{className:j.a.navigationLink,to:"/dashboard"},"Dashboard")),o.a.createElement("div",null,o.a.createElement(l.b,{className:j.a.navigationLink,to:"/dashboard/photos"},"Photos"))))}O.defaultProps={page:"dashboard"};var P=O,k=t(40),y=t.n(k);var L=function(e){return o.a.createElement("div",{className:y.a.base},e.children)},w=L,x=t(41),M=t.n(x);var U=function(){return Object(n.useEffect)((function(){document.title="Mercoma - Dashboard"}),[]),o.a.createElement(w,null,o.a.createElement(P,{page:"dashboard"}),o.a.createElement(u,null),o.a.createElement("section",{className:M.a.dashboardContent},o.a.createElement("h1",null,"Dashboard"),o.a.createElement("button",{className:"button is-primary"},"Button")))},F=t(10),I=t.n(F),B="https://mercoma.herokuapp.com/api",D=t(11),R=t.n(D);var q=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(!1),g=Object(d.a)(p,2),f=g[0],b=g[1];function E(){b(!1)}return o.a.createElement("div",{className:R.a.login},o.a.createElement("h1",null,"Mercoma"),o.a.createElement("div",{className:R.a.container},o.a.createElement("form",{className:R.a.formContainer,onSubmit:function(a){a.preventDefault();var t={email:r,password:m};I.a.defaults.withCredentials=!0,I.a.post("".concat(B,"/users/signin"),t).then((function(a){console.log(a.data.id),localStorage.setItem("auth",a.data.id),e.history.push("/dashboard")})).catch((function(){b(!0)}))}},o.a.createElement("h2",null,"Welcome Back"),o.a.createElement("div",{className:R.a.inputContainer},o.a.createElement("input",{onChange:function(e){c(e.target.value),E()},placeholder:"Email",type:"email",value:r,required:!0})),o.a.createElement("div",{className:R.a.inputContainer},o.a.createElement("input",{onChange:function(e){u(e.target.value),E()},placeholder:"Password",type:"password",value:m,required:!0})),o.a.createElement("button",null,"Submit")),f&&o.a.createElement("div",{className:"notification is-danger ".concat(R.a.statusMessage)},o.a.createElement("button",{className:"delete",onClick:E}),"Error! The account was not found. Re-enter your email or password.")),o.a.createElement("div",{id:R.a.signUpSection},o.a.createElement("p",null,"Don't have an account?",o.a.createElement(l.b,{className:R.a.navigationLink,to:"/signUp"},"Sign Up"))))},A=t(25),T=t.n(A);var J=function(){return o.a.createElement(w,null,o.a.createElement(P,{page:"not found"}),o.a.createElement(u,null),o.a.createElement("section",{className:T.a.notFoundContent},o.a.createElement("h1",null,"The page you navigated to does not exist.",o.a.createElement("div",null,o.a.createElement(l.b,{className:T.a.notFoundReturnLink,to:"/dashboard"},"Return to dashboard")))))},W=t(21),Z=t.n(W);function G(e){return e.isPlacementCard?o.a.createElement("div",{id:Z.a.placementCard,className:Z.a.photoCard,onClick:e.onClick},o.a.createElement("i",{className:"fas fa-plus fa-4x"})):o.a.createElement("div",{className:"card ".concat(Z.a.photoCard)},o.a.createElement("div",{className:"card-image"},o.a.createElement("figure",{className:"image is-4by3"},o.a.createElement("img",{src:e.photo.image,alt:"Skin sample"}))),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"content"},o.a.createElement("p",null,"Tumor percent: ",e.photo.tumorPercent))))}G.defaultProps={isPlacementCard:!1,onClick:null,photo:null};var X=G,V=t(42),z=t.n(V),K=t(15),H=t.n(K);var Y=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],m=i[1],u=Object(n.useRef)(null);function p(){e.closeModal()}return o.a.createElement("div",{className:"modal ".concat(e.isActive&&"is-active")},o.a.createElement("form",{onSubmit:function(e){console.log("ree"),console.log(s),e.preventDefault();var a=new z.a;a.append("image",s),console.log(a),I()({method:"POST",url:"".concat(B,"/images"),data:a,withCredentials:!0,headers:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(e){console.log("success",e)})).catch((function(e){console.log("fail",e)})),console.log("after")}},o.a.createElement("div",{className:"modal-background"}),o.a.createElement("div",{className:"modal-card"},o.a.createElement("header",{className:"modal-card-head"},o.a.createElement("p",{className:"modal-card-title"},"Add photo"),o.a.createElement("button",{className:"delete","aria-label":"close",onClick:p})),o.a.createElement("section",{id:H.a.modalCardBody,className:"modal-card-body"},r?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"image is-4by3"},o.a.createElement("img",{id:H.a.addedImage,src:s,alt:"Uploaded skin sample"}))):o.a.createElement("div",{id:H.a.emptyPhotoContent},o.a.createElement("p",{className:H.a.inputLabel},"An image has not been added"),o.a.createElement("input",{className:H.a.inputfile,type:"file",name:"file",id:"file",accept:"image/*",capture:"camera",onChange:function(e){var a=u.files[0],t=new FileReader;t.onload=function(e){m(e.target.result)},t.readAsDataURL(a),c(!0)},ref:function(e){u=e}}),o.a.createElement("label",{htmlFor:"file"},o.a.createElement("i",{className:"fas fa-camera fa-2x"})))),o.a.createElement("footer",{className:"modal-card-foot"},r?o.a.createElement("button",{className:"button is-success"},"Submit"):o.a.createElement("button",{className:"button is-disabled",disabled:!0},"Submit"),o.a.createElement("button",{className:"button",onClick:p},"Cancel")))))},Q=t(26),$=t.n(Q);var ee=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),l=Object(d.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)([]),p=Object(d.a)(m,2),g=p[0];return p[1],Object(n.useEffect)((function(){document.title="Mercoma - Photos",I.a.get("".concat(B,"/images"),{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(L,null,o.a.createElement(Y,{closeModal:function(){r(!1)},isActive:!!t}),o.a.createElement(P,{page:"photos"}),o.a.createElement(u,null),o.a.createElement("section",{className:$.a.photosContent},i&&o.a.createElement("div",{class:"notification is-danger is-active"},o.a.createElement("button",{class:"delete",onClick:function(){s(!1)}}),"Error! A problem occurred when retrieving your images from the server. Try again later."),o.a.createElement("h1",null,"Photos"),o.a.createElement("div",{className:$.a.photoGrid},o.a.createElement(X,{isPlacementCard:!0,onClick:function(){r(!0)}}),g.map((function(e,a){return o.a.createElement(X,{key:a,photo:e})})))))};var ae=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Profile"))},te=t(9),ne=t.n(te);var oe=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),f=g[0],b=g[1],E=Object(n.useState)(""),h=Object(d.a)(E,2),v=h[0],_=h[1],C=Object(n.useState)(""),N=Object(d.a)(C,2),S=N[0],j=N[1],O=Object(n.useState)(!1),P=Object(d.a)(O,2),k=P[0],y=P[1],L=Object(n.useState)(!1),w=Object(d.a)(L,2),x=w[0],M=w[1];function U(){y(!1),M(!1)}return o.a.createElement("div",{className:ne.a.signUp},o.a.createElement(l.b,{className:ne.a.backButton,to:"/login"},o.a.createElement("i",{className:"fas fa-chevron-left fa-2x"})),o.a.createElement("div",{className:ne.a.container},o.a.createElement("form",{className:ne.a.formContainer,onSubmit:function(a){a.preventDefault();var t={email:f,password:v,firstname:r,lastname:m};v===S?I.a.post("".concat(B,"/users/signup"),t).then((function(a){e.history.push("/login")})).catch((function(){M(!0)})):y(!0)}},o.a.createElement("h1",null,"Create an account."),o.a.createElement("p",null,"Welcome to Mercoma. Connect with doctors and identify possible tumors with a snapshot."),o.a.createElement("div",{className:ne.a.inputContainer},o.a.createElement("input",{onChange:function(e){c(e.target.value),U()},placeholder:"First name",type:"text",value:r,required:!0})),o.a.createElement("div",{className:ne.a.inputContainer},o.a.createElement("input",{onChange:function(e){u(e.target.value),U()},placeholder:"Last name",type:"text",value:m,required:!0})),o.a.createElement("div",{className:ne.a.inputContainer},o.a.createElement("input",{onChange:function(e){b(e.target.value),U()},placeholder:"Email",type:"email",value:f,required:!0})),o.a.createElement("div",{className:ne.a.inputContainer},o.a.createElement("input",{onChange:function(e){_(e.target.value),U()},placeholder:"Password",type:"password",value:v,required:!0})),o.a.createElement("div",{className:ne.a.inputContainer},o.a.createElement("input",{onChange:function(e){j(e.target.value),U()},placeholder:"Confirm password",type:"password",value:S,required:!0})),o.a.createElement("button",null,"Submit")),k&&o.a.createElement("div",{class:"notification is-danger ".concat(ne.a.statusMessage)},o.a.createElement("button",{class:"delete",onClick:U}),"Error! The passwords do no match."),x&&o.a.createElement("div",{class:"notification is-danger ".concat(ne.a.statusMessage)},o.a.createElement("button",{class:"delete",onClick:U}),"An error was encountered! Please try again.")))},re=t(43),ce=function(e){var a=e.component,t=Object(re.a)(e,["component"]);return o.a.createElement(i.b,Object.assign({},t,{render:function(e){return localStorage.getItem("auth")?o.a.createElement(a,e):o.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};function le(){return o.a.createElement(l.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/login",component:q}),o.a.createElement(i.b,{path:"/signUp",component:oe}),o.a.createElement(ce,{path:"/dashboard/photos",component:ee}),o.a.createElement(ce,{path:"/dashboard/profile",component:ae}),o.a.createElement(ce,{path:"/dashboard",component:U}),o.a.createElement(ce,{component:J})))}t(71);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(le,null)),document.getElementById("root"))},9:function(e,a,t){e.exports={signUp:"SignUp_signUp__2lNZX",container:"SignUp_container__2GooL",formContainer:"SignUp_formContainer__2ynq2",inputContainer:"SignUp_inputContainer__3-tZ6",statusMessage:"SignUp_statusMessage__2gsOJ"}}},[[44,1,2]]]);
//# sourceMappingURL=main.05d68ff6.chunk.js.map