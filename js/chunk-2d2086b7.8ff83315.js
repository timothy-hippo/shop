(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,s){"use strict";s.r(e);var n=s("7a23"),o={class:"container mt-5"},a={class:"col-md-6"},r=Object(n["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(n["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(n["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(n["h"])("div",{class:"text-end mt-4"},[Object(n["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function b(t,e,s,b,p,h){return Object(n["x"])(),Object(n["g"])("div",o,[Object(n["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(n["W"])((function(){return h.signIn&&h.signIn.apply(h,arguments)}),["prevent"]))},[Object(n["h"])("div",a,[r,Object(n["h"])("div",c,[i,Object(n["V"])(Object(n["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return p.user.username=t})},null,512),[[n["P"],p.user.username]])]),Object(n["h"])("div",u,[d,Object(n["V"])(Object(n["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return p.user.password=t})},null,512),[[n["P"],p.user.password]])]),l])],32)])}s("99af");var p={data:function(){return{user:{username:"timothy80617@yahoo.com.tw",password:""}}},methods:{signIn:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.axios.post(e,this.user).then((function(e){if(e.data.success){var s=e.data,n=s.token,o=s.expired;document.cookie="hexToken=".concat(n,"; expires=").concat(new Date(o)),t.$router.push("/dashboard/products")}}))}}},h=s("6b0d"),m=s.n(h);const f=m()(p,[["render",b]]);e["default"]=f}}]);
//# sourceMappingURL=chunk-2d2086b7.8ff83315.js.map