"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||g[m]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={slug:"/rigging/rebind-poses-tool",sidebar_position:5,description:""},a="Rebind Poses \ud234",s={unversionedId:"editable-mesh/rigging-mode/rebind-poses-tool",id:"editable-mesh/rigging-mode/rebind-poses-tool",title:"Rebind Poses \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/rebind-poses-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/rebind-poses-tool",permalink:"/ko/docs/rigging/rebind-poses-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/rebind-poses-tool.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/rigging/rebind-poses-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Reset Poses \ud234",permalink:"/ko/docs/rigging/reset-poses-tool"},next:{title:"Weight Transfer \ud234",permalink:"/ko/docs/rigging/weight-transfer-tool"}},l={},p=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rebind-poses-\ud234"},"Rebind Poses \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rebind Poses Tool",src:n(16835).Z,width:"1524",height:"640"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rebind Poses \ud234"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8 \uc704\uce58\uc640 \ud68c\uc804\uc744 \uc7ac\uc124\uc815"),"\uc744 \ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubc84\ud14d\uc2a4 \uc774\ub3d9\uc5c6\uc774 \ubcf8\uc758 \uc704\uce58\ub9cc \uc62e\uae30\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\ub85c, \ubcf8\uc774 \uc624\ube0c\uc81d\ud2b8\ub97c \ubc97\uc5b4\ub098 \uc5b4\uae0b\ub09c \uc704\uce58\uc5d0 \uc788\uc744 \ub54c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ubcf8\uc744 \uae30\uc988\ubaa8\ub85c \uc774\ub3d9 \ub610\ub294 \ud68c\uc804\uc744 \ud3b8\uc9d1\uc2dc \ubcf8\uacfc \uc5f0\uacb0\ub41c \ubc84\ud14d\uc2a4\uac00 \ud568\uaed8 \uc774\ub3d9\ud558\uac70\ub098 \ud68c\uc804\ud558\uba74 \ubc84\ud14d\uc2a4\uc758 \uc704\uce58\uac00 \uc774\ub3d9\ub429\ub2c8\ub2e4.\n\uc774\ud6c4 ",(0,o.kt)("strong",{parentName:"p"},"Rebind Poses \ud234"),"\uc744 \uc2e4\ud589\ud558\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc758 \uc704\uce58"),"\ub294 \uc774\ub3d9\ub41c \uc0c1\ud0dc\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\uc720\uc9c0"),"\ub418\uace0 \ubc84\ud14d\uc2a4\uac00 \uc6d0\ub798 \uc788\ub358 \uc704\uce58\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Rebind Poses Tool Note",src:n(69124).Z,width:"1478",height:"626"})),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"\uacfc\uc815 \uc911\uc5d0\ub294 \ubc84\ud14d\uc2a4\uac00 \uc774\ub3d9\ud55c \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc, \uacb0\uacfc\uc801\uc73c\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc774 \uc774\ub3d9\ub41c \uc0c1\ud0dc"),"\uac00 \ub429\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\uc52c")," \ub610\ub294 ",(0,o.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed, Bind Bone List")," \uc5d0\uc11c \uc6d0\ud558\ub294 \ubcf8\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Bone Select",src:n(21006).Z,width:"684",height:"384"})),(0,o.kt)("admonition",{parentName:"li",title:"\ud301",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad"},(0,o.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad"))),(0,o.kt)("p",{parentName:"admonition"},"\ub2e8\ucd95\ud0a4\ub97c \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ubcf8\uc744 \uc52c\uc5d0\uc11c \ubc14\ub85c \uc120\ud0dd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc120\ud0dd\ub41c \ubcf8\uc758 \uae30\uc988\ubaa8\ub97c \uc774\uc6a9\ud574 \uc774\ub3d9\ud558\uac70\ub098 \ud68c\uc804\ud558\uc5ec \ubcf8\uc744 \uc218\uc815\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Move Bone",src:n(19023).Z,width:"1394",height:"599"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rebind Poses \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ubcf8\uc758 \uc704\uce58\uac00 \uc7ac\uc124\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Result",src:n(47065).Z,width:"788",height:"599"})))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/iVeLbt6nihg",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},16835:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_RebindPoses-2b1b96e159acf972ba8616a8b6dc7c10.png"},19023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_RebindPoses_MoveBone-4b5d21f15c05dda9c3cbf35e1317b8f9.png"},69124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_RebindPoses_Note-621de1400ccbda59a94a26d4bea111eb.png"},47065:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_RebindPoses_Result-7f9585c235532cbb8cbec881fb053be1.png"},21006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_SelectBone-a08f217a2da7ae53b487bedbe3bd0c4e.png"}}]);