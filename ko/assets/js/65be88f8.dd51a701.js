"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[13233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,h=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},22168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={slug:"/modeling/sphere-tool",sidebar_position:3,description:""},l="Sphere \ud234",a={unversionedId:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/sphere-tool",id:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/sphere-tool",title:"Sphere \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/sphere-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes",slug:"/modeling/sphere-tool",permalink:"/ko/docs/modeling/sphere-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/sphere-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Cylinder \ud234",permalink:"/ko/docs/modeling/cylinder-tool"},next:{title:"Icosphere \ud234",permalink:"/ko/docs/modeling/Icosphere-tool"}},s={},p=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1",id:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1",level:3},{value:"One Click Build\uc640 \uc18d\uc131\uc744 \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1",id:"one-click-build\uc640-\uc18d\uc131\uc744-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1",level:3},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Segments",id:"segments",level:3},{value:"Rings",id:"rings",level:3},{value:"Radius",id:"radius",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2},{value:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1",id:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1-1",level:3},{value:"One Click Build\uc640 \uc18d\uc131\uc744 \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1",id:"one-click-build\uc640-\uc18d\uc131\uc744-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1-1",level:3}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sphere-\ud234"},"Sphere \ud234"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sphere Tool",src:r(54502).Z,width:"1048",height:"604"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sphere \ud234"),"\uc740 \uae30\ubcf8\uc801\uc778 \ud615\ud0dc\uc758 \uad6c\ub97c \uc0dd\uc131\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,i.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes \uadf8\ub8f9"),"\uc758 \uae30\ubcf8 \ub3c4\ud615 \uc0dd\uc131 \ud234\ub4e4\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\ub450 \uac00\uc9c0 \ubc29\ubc95"),"\uc73c\ub85c \ub3c4\ud615\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub97c \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"One Click Build"),"\ub97c \uc774\uc6a9\ud55c \uc0dd\uc131, \ud3b8\uc9d1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1"},"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sphere \ud234"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc52c\uc5d0 \ub9c8\uc6b0\uc2a4\ub85c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ud574 \uc6d0\ud558\ub294 \ud06c\uae30 \uad6c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Sphere Tool Drag 1",src:r(38242).Z,width:"1054",height:"488"}),"  "),(0,i.kt)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 \ud06c\uae30\uac00 \ub418\uc5c8\ub2e4\uba74 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\uc744 \ub5bc\uc5b4 \uba54\uc2dc \uc0dd\uc131\uc744 \ub9c8\uce69\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sphere \ud234\uc758 \uc18d\uc131"),"\ub4e4\uc744 \uc870\uc808\ud55c \ud6c4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098, \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Sphere Tool Properties",src:r(54009).Z,width:"928",height:"320"}),(0,i.kt)("img",{alt:"Sphere Tool Result",src:r(701).Z,width:"958",height:"640"}))),(0,i.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098 \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud558\uae30 \uc804\uae4c\uc9c0 ",(0,i.kt)("strong",{parentName:"p"},"Sphere \ud234\uc758 \uc18d\uc131"),"\uc744 \uc774\uc6a9\ud574 ",(0,i.kt)("strong",{parentName:"p"},"\uc138\ubd80\uc870\uc808"),"\uc744 \uacc4\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"one-click-build\uc640-\uc18d\uc131\uc744-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1"},"One Click Build\uc640 \uc18d\uc131\uc744 \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sphere \ud234"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sphere \ud234\uc758 \uc18d\uc131"),"\uc5d0 ",(0,i.kt)("strong",{parentName:"li"},"\uc6d0\ud558\ub294 \uac12\uc744 \uc785\ub825"),"\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Sphere Tool Properties",src:r(54009).Z,width:"928",height:"320"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"One Click Build \ubc84\ud2bc"),"\uc744 \ub20c\ub7ec ",(0,i.kt)("strong",{parentName:"li"},"\uc52c\uc5d0 \ub3c4\ud615\uc744 \ucd94\uac00"),"\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Sphere Tool One Click Build",src:r(93909).Z,width:"898",height:"151"})),(0,i.kt)("li",{parentName:"ol"},"\ucd94\uac00\ub85c ",(0,i.kt)("strong",{parentName:"li"},"Sphere \ud234\uc758 \uc18d\uc131"),"\ub4e4\uc744 \uc870\uc808\ud55c \ud6c4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098, \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Sphere Tool Result",src:r(701).Z,width:"958",height:"640"}))),(0,i.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098 \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud558\uae30 \uc804\uae4c\uc9c0 ",(0,i.kt)("strong",{parentName:"p"},"Sphere \ud234\uc758 \uc18d\uc131"),"\uc744 \uc774\uc6a9\ud574 ",(0,i.kt)("strong",{parentName:"p"},"\uc138\ubd80\uc870\uc808"),"\uc744 \uacc4\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc18d\uc131"},(0,i.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sphere Tool Properties",src:r(54009).Z,width:"928",height:"320"})),(0,i.kt)("h3",{id:"segments"},"Segments"),(0,i.kt)("p",null,"\uc0dd\uc131\ub418\ub294 \uad6c\uc758 ",(0,i.kt)("strong",{parentName:"p"},"\ubd84\ud560\ub418\ub294 \uc870\uac01 \uc218"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sphere Tool Segments",src:r(95309).Z,width:"1434",height:"640"})),(0,i.kt)("h3",{id:"rings"},"Rings"),(0,i.kt)("p",null,"\uc0dd\uc131\ub418\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uad6c\uc758 \uc0c1\ud558"),"\ub85c \ubd84\ud560\ub418\ub294 \uc870\uac01 \uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sphere Tool Ring",src:r(65794).Z,width:"1434",height:"640"})),(0,i.kt)("h3",{id:"radius"},"Radius"),(0,i.kt)("p",null,"\uc0dd\uc131\ub418\ub294 \uad6c\uc758 ",(0,i.kt)("strong",{parentName:"p"},"\ubc18\uc9c0\ub984 \ud06c\uae30"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sphere Tool Radius",src:r(3855).Z,width:"1434",height:"640"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,i.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,i.kt)("h3",{id:"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1-1"},"\ud074\ub9ad\ub4dc\ub798\uadf8\ub97c \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1"),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/HIV8GE4jPdM",frameborder:"0",allowfullscreen:""})),(0,i.kt)("h3",{id:"one-click-build\uc640-\uc18d\uc131\uc744-\ud1b5\ud55c-\uc0dd\uc131-\ud3b8\uc9d1-1"},"One Click Build\uc640 \uc18d\uc131\uc744 \ud1b5\ud55c \uc0dd\uc131, \ud3b8\uc9d1"),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/woTDn9wb-P0",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},93909:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_OneClickBuild-91c5fa5cb34cc7a6e0226eb4d79169e7.png"},54502:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere-1c9dfa7228f09b86603fda7727dd6655.png"},38242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Drag-131202bdbc8efd79f753c2a1f3a129ad.png"},54009:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Properties-f0c195c1ce2c03ab78b48199c0697b98.png"},3855:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Radius-9020a5e20917101e800987fb00a3213b.png"},701:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Result-be91fbd86044a9fe85427a3b13af2f12.png"},65794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Ring-1f5c4371fd762635598d00469d91115e.png"},95309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_PrimitiveShapes_Sphere_Segments-3cdec3001abcb059b73942d33926a908.png"}}]);