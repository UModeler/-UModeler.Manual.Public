"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8607],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(o),p=n,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},83888:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const i={slug:"/zepeto-item-guidebook-basics-of-modeling-deform",sidebar_position:4,description:""},a="Deform",s={unversionedId:"the-use-of-umodelerx/zepeto/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-deform",id:"the-use-of-umodelerx/zepeto/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-deform",title:"Deform",description:"",source:"@site/docs/the-use-of-umodelerx/zepeto/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-deform.md",sourceDirName:"the-use-of-umodelerx/zepeto/zepeto-item-guidebook/basics-of-modeling",slug:"/zepeto-item-guidebook-basics-of-modeling-deform",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-deform",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/zepeto-item-guidebook-basics-of-modeling-deform",sidebar_position:4,description:""},sidebar:"docs",previous:{title:"Remove",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-remove"},next:{title:"Modifier",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-modifier"}},l={},d=[{value:"Relax",id:"relax",level:2},{value:"Smooth",id:"smooth",level:2},{value:"Standard",id:"standard",level:2},{value:"Flatten",id:"flatten",level:2},{value:"Move",id:"move",level:2},{value:"Pinch",id:"pinch",level:2}],c=(m="P",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deform"},"Deform"),(0,n.kt)("div",{class:"video-container"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/6TjCtmFJj-I?start=340",frameborder:"0",allowfullscreen:""})),(0,n.kt)("p",null,"The Deform group includes brush-like tools for surface manipulation, rather than editing at the element level."),(0,n.kt)("p",null,"Brush tools allow you to adjust the brush size by moving the ",(0,n.kt)("inlineCode",{parentName:"p"},"mouse up")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"down")," while holding the Shift key or using shortcuts like ",(0,n.kt)("inlineCode",{parentName:"p"},"["),",",(0,n.kt)("inlineCode",{parentName:"p"},"]"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_modeling_Icon_Deform",src:o(40596).Z,width:"1010",height:"219"})),(0,n.kt)("h2",{id:"relax"},"Relax"),(0,n.kt)("p",null,"The Relax Brush evens out vertex spacing while maintaining the shape."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_RelaxBrush",src:o(1762).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"smooth"},"Smooth"),(0,n.kt)("p",null,"The Smooth Brush softens shapes while maintaining vertex spacing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_SmoothBrush",src:o(73431).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"standard"},"Standard"),(0,n.kt)("p",null,"The Standard Brush pushes surfaces ",(0,n.kt)("strong",{parentName:"p"},"outward"),". Pressing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl")," key while brushing will cause the surface to go ",(0,n.kt)("strong",{parentName:"p"},"inward"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_StandardBrush",src:o(17591).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"flatten"},"Flatten"),(0,n.kt)("p",null,"The Flatten Brush flattens surfaces."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_FlattenBrush",src:o(49775).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"move"},"Move"),(0,n.kt)("p",null,"The Move Brush moves vertices."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_MoveBrush",src:o(79457).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"pinch"},"Pinch"),(0,n.kt)("p",null,"The Pinch Brush brings vertices closer together, creating sharper edges."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"basic_Modeling_Deform_PinchBrush",src:o(3551).Z,width:"1920",height:"640"})),(0,n.kt)("div",{class:"card-container"},(0,n.kt)("div",{class:"card"},(0,n.kt)("h3",{class:"card-title"},"Deform Group"),(0,n.kt)(c,{mdxType:"P"},"For more detailed information, please check the following link"),(0,n.kt)("a",{href:"/docs/modeling-deform",class:"card-link"},"Check"))))}p.isMDXComponent=!0},40596:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/ModelingMode_Icon_Deform-70c97b82d05dec385bdba7c7903ee869.png"},49775:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_FlattenBrush-8c8f08bd4daa0921a90deab60da6476a.png"},79457:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_MoveBrush-ef6ee8888db31b9e10cc1ac8c5d659a7.png"},3551:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_PinchBrush-1611e23a24456c67d377be343ceb6b00.png"},1762:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_RelaxBrush-3f8c810350b1dc2bd76100b645aaeae0.png"},73431:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_SmoothBrush-a14aeedf6e980af930eb8226859bdb38.png"},17591:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_StandardBrush-5675ae0aa427ac1ff066ed93fe86d641.png"}}]);