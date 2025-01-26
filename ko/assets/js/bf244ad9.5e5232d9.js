"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(r),c=l,g=s["".concat(d,".").concat(c)]||s[c]||u[c]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),l=r(86010),a=r(53438),o=r(39960),i=r(13919),d=r(95999);const m="cardContainer_fWXF",p="cardTitle_rnsV",s="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,l.Z)("card padding--lg",m)},r)}function c(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,l.Z)("text--truncate",p),title:a},r," ",a),o&&n.createElement("p",{className:(0,l.Z)("text--truncate",s),title:o},o))}function g(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(c,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(t.docId??void 0);return n.createElement(c,{href:t.href,icon:r,title:t.label,description:t.description??l?.description})}function N(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(k,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,l.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(N,{item:e})))))}},6405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=r(87462),l=(r(67294),r(3905)),a=r(52991);const o={sidebar_position:6,slug:"/umx-for-um-users",description:""},i="UModeler \uc720\uc800\ub97c \uc704\ud55c UModeler X",d={unversionedId:"getting-started/for-um-users",id:"getting-started/for-um-users",title:"UModeler \uc720\uc800\ub97c \uc704\ud55c UModeler X",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/getting-started/for-um-users.md",sourceDirName:"getting-started",slug:"/umx-for-um-users",permalink:"/ko/docs/umx-for-um-users",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/getting-started/for-um-users.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/umx-for-um-users",description:""},sidebar:"docs",previous:{title:"\uc88c\ud45c \uc2dc\uc2a4\ud15c",permalink:"/ko/docs/toolbar-coordinate-system"},next:{title:"\uba54\uc26c \ub370\uc774\ud130 \ubcc0\ud658",permalink:"/ko/docs/data-conversion"}},m={},p=[{value:"<strong>1. UModeler X\uc758 \uc8fc\uc694 \uae30\ub2a5\ub4e4</strong>",id:"1-umodeler-x\uc758-\uc8fc\uc694-\uae30\ub2a5\ub4e4",level:2},{value:"LSCM \ud234",id:"lscm-\ud234",level:3},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4",id:"\ubaa8\ub514\ud30c\uc774\uc5b4",level:3},{value:"\ub9ac\uae45",id:"\ub9ac\uae45",level:3},{value:"\ud398\uc778\ud305",id:"\ud398\uc778\ud305",level:3},{value:"\ub354 \ub9ce\uc740 \ud3f4\ub9ac\uace4 \ud3b8\uc9d1",id:"\ub354-\ub9ce\uc740-\ud3f4\ub9ac\uace4-\ud3b8\uc9d1",level:3},{value:"<strong>2. UModeler\uc640 UModeler X\uc758 \ub3d9\uc2dc \uc0ac\uc6a9</strong>",id:"2-umodeler\uc640-umodeler-x\uc758-\ub3d9\uc2dc-\uc0ac\uc6a9",level:2},{value:"<strong>3. UModeler\uc5d0\uc11c \uc81c\uc791\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c UModeler X\ub85c \ubcc0\ud658\ud558\uae30</strong>",id:"3-umodeler\uc5d0\uc11c-\uc81c\uc791\ud55c-\uc624\ube0c\uc81d\ud2b8\ub97c-umodeler-x\ub85c-\ubcc0\ud658\ud558\uae30",level:2},{value:"<strong>4. UModeler\uc640 UModeler X\uc758 \uc8fc\uc694 \ucc28\uc774\uc810</strong>",id:"4-umodeler\uc640-umodeler-x\uc758-\uc8fc\uc694-\ucc28\uc774\uc810",level:2}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"umodeler-\uc720\uc800\ub97c-\uc704\ud55c-umodeler-x"},"UModeler \uc720\uc800\ub97c \uc704\ud55c UModeler X"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Migrate to UModeler X Result",src:r(7618).Z,width:"2625",height:"1188"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UModeler"),"\uc740 \uc2a4\ucf00\uce58 \uae30\ubc18\uc758 \uc2a4\ub9c8\ud2b8 \ubaa8\ub378\ub9c1\uacfc \uac04\uacb0\ud558\uace0 \ube60\ub978 \uae30\ub2a5\ub4e4\ub85c \ube60\ub978 \ubaa8\ub378\ub9c1\uc744 \uac00\ub2a5\ud558\uac8c \ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,l.kt)("strong",{parentName:"p"},"UModeler X"),"\ub294 \uc774\ub97c \ud55c \ub2e8\uacc4 \ub354 \ub098\uc544\uac00, ",(0,l.kt)("strong",{parentName:"p"},"3D \ucee8\ud150\uce20 \uc81c\uc791\uc744 \uc704\ud55c \ubaa8\ub4e0 \uae30\ub2a5"),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UModeler X"),"\ub294 \ud615\ud0dc\ub97c \ub9cc\ub4dc\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc"),"\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec, ",(0,l.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud305"),", \uc6c0\uc9c1\uc784\uc744 \uc704\ud55c ",(0,l.kt)("strong",{parentName:"p"},"\ub9ac\uae45 \ubaa8\ub4dc"),", \uadf8\ub9ac\uace0 \uc0c9\uc744 \uce60\ud558\uace0 \ud2b9\uc9d5 \uc788\ub294 \uc7ac\uc9c8\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud55c ",(0,l.kt)("strong",{parentName:"p"},"\ud398\uc778\ud305 \ubaa8\ub4dc"),"\uae4c\uc9c0 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uac00\uc774\ub4dc\ub294 ",(0,l.kt)("strong",{parentName:"p"},"UModeler"),"\uc5d0\uc11c \uc775\uc219\ud588\ub358 \uae30\ub2a5\ub4e4\uc774 ",(0,l.kt)("strong",{parentName:"p"},"UModeler X"),"\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ubcc0\ud654\ud558\uc600\ub294\uc9c0, \uadf8\ub9ac\uace0 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\ub4e4\uc740 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-umodeler-x\uc758-\uc8fc\uc694-\uae30\ub2a5\ub4e4"},(0,l.kt)("strong",{parentName:"h2"},"1. UModeler X\uc758 \uc8fc\uc694 \uae30\ub2a5\ub4e4")),(0,l.kt)("p",null,"UModeler X\ub294 UModeler\uc5d0 \ube44\ud574 \ud5a5\uc0c1\ub41c \uc131\ub2a5\uacfc \uc0c8\ub85c\uc6b4 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"lscm-\ud234"},"LSCM \ud234"),(0,l.kt)("p",null,"UModeler X\ub294 ",(0,l.kt)("strong",{parentName:"p"},"LSCM \uc54c\uace0\ub9ac\uc998"),"\uc744 \uc774\uc6a9\ud55c UV \uc5b8\ub7a9 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc73c\ub85c UV \uc88c\ud45c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. UV \uc5d0\ub514\ud130 \ub0b4\uc758 LSCM \ud234\uc744 \uc0ac\uc6a9\ud558\uba74, \ucd5c\uc18c \uc81c\uacf1 \uac70\ub9ac\ub97c \uacc4\uc0b0\ud558\uc5ec \ucd5c\uc801\uc758 UV\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)(a.Z,{items:[{type:"link",label:"LSCM \ud234",href:"/docs/uveditor/lscm-tool"}],mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4"},"\ubaa8\ub514\ud30c\uc774\uc5b4"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modifier Disable",src:r(55795).Z,width:"1560",height:"640"})),(0,l.kt)("p",null,"UModeler X\ub294 \ube44\ud30c\uad34\uc801\uc778 \ubaa8\ub378\ub9c1\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \uc6d0\ubcf8 \ubaa8\ub378\uc744 \uadf8\ub300\ub85c \ubcf4\uc874\ud558\uba74\uc11c\ub3c4 \ub2e4\uc591\ud55c \ubcc0\ud615\uc744 \uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modifier Add",src:r(37054).Z,width:"792",height:"640"})),(0,l.kt)(a.Z,{items:[{type:"link",label:"\ubaa8\ub514\ud30c\uc774\uc5b4",href:"/docs/modifier"}],mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"\ub9ac\uae45"},"\ub9ac\uae45"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rigging Mode Guide",src:r(87466).Z,width:"2447",height:"887"})),(0,l.kt)("p",null,"UModeler X\ub294 \uc560\ub2c8\uba54\uc774\uc158 \uc81c\uc791\uc744 \uc704\ud55c \ub9ac\uae45 \ubaa8\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub4dc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\uace0, \uc6e8\uc774\ud2b8 \ud3b8\uc9d1\uacfc \ubcf8 \uc0dd\uc131 \ubc0f \uad00\ub9ac\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{items:[{type:"link",label:"\ub9ac\uae45 \ubaa8\ub4dc",href:"/docs/rigging-mode"}],mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"\ud398\uc778\ud305"},"\ud398\uc778\ud305"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Painting Mode",src:r(30360).Z,width:"2161",height:"1540"})),(0,l.kt)("p",null,"UModeler X\ub294 \ud14d\uc2a4\ucc98 \ud398\uc778\ud305\uc744 \uc704\ud55c \ud398\uc778\ud305 \ubaa8\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub4dc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ub808\uc774\uc5b4\uc640 \ube0c\ub7ec\uc2dc \ub4f1\uc744 \uc774\uc6a9\ud558\uc5ec \ubaa8\ub378\uc5d0 \uc0c9\uc0c1\uc744 \uc785\ud788\uace0, \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{items:[{type:"link",label:"\ud398\uc778\ud305 \ubaa8\ub4dc",href:"/docs/painting-mode"}],mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"\ub354-\ub9ce\uc740-\ud3f4\ub9ac\uace4-\ud3b8\uc9d1"},"\ub354 \ub9ce\uc740 \ud3f4\ub9ac\uace4 \ud3b8\uc9d1"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"UModelerize End",src:r(1524).Z,width:"1690",height:"1120"})),(0,l.kt)("p",null,"UModeler X\ub294 \ud5a5\uc0c1\ub41c \ud3f4\ub9ac\uace4 \ud3b8\uc9d1 \uae30\ub2a5\uacfc \ud568\uaed8 \ub354 \ub9ce\uc740 \ud3f4\ub9ac\uace4\uc744 \ud45c\uc2dc\ud558\uace0 \ud3b8\uc9d1\ud560 \uc218 \uc788\ub294 \ucd5c\uc801\ud654\ub41c \uc131\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub355\ubd84\uc5d0 \ubcf5\uc7a1\ud558\uace0 \uc0c1\uc138\ud55c \ubaa8\ub378\uc744 \uc27d\uac8c \uc81c\uc791\ud558\uba74\uc11c, \ud3f4\ub9ac\uace4\uc744 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uace1\uba74\uacfc \ubd80\ub4dc\ub7ec\uc6b4 \ud615\ud0dc\uc758 \ubaa8\ub378\ub9c1\uc774 \ud544\uc694\ud55c \uce90\ub9ad\ud130 \uc81c\uc791\uc774\ub098,\ubcf5\uc7a1\ud55c \ud615\ud0dc\ub97c \ud544\uc694\ub85c \ud558\ub294 \ubc30\uacbd \uc81c\uc791 \ub4f1\uc5d0 \ud6a8\uacfc\uc801\uc774\uba74\uc11c, \ucd5c\uc801\ud654\ub41c \uc131\ub2a5 \ub355\ubd84\uc5d0 UModeler\uc640\ub294 \ub2e4\ub978 \ub354\uc6b1 \ubd80\ub4dc\ub7ec\uc6b4 \uc791\uc5c5 \ud658\uacbd\uc744 \uacbd\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"2-umodeler\uc640-umodeler-x\uc758-\ub3d9\uc2dc-\uc0ac\uc6a9"},(0,l.kt)("strong",{parentName:"h2"},"2. UModeler\uc640 UModeler X\uc758 \ub3d9\uc2dc \uc0ac\uc6a9")),(0,l.kt)("p",null,"UModeler X\ub294 UModeler\uc640 \ud568\uaed8 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub450 \ubc84\uc804\uc740 \uac01\uac01\uc758 \uc7a5\uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4, \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc5d0 \ub530\ub77c \uc801\uc808\ud558\uac8c \uc120\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"UModeler",src:r(40623).Z,width:"1202",height:"352"})),(0,l.kt)("p",null,"\ucd08\uae30 \ub2e8\uacc4\uc5d0\uc11c\ub294 UModeler\uc758 \uac04\ud3b8\ud568\uc744 \ud65c\uc6a9\ud558\uc5ec \ud504\ub85c\ud1a0\ud0c0\uc774\ud551, \ub808\ubca8 \ub514\uc790\uc778, \ube60\ub978 \ubc30\uacbd \uc81c\uc791 \ub4f1\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ud6c4, \uc138\ubd80\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud55c \ub2e8\uacc4\uc5d0\uc11c\ub294 UModeler X\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uc5ec \ubaa8\ub378\ub9c1, \ubaa8\ub514\ud30c\uc774\uc5b4, \ub9ac\uae45 \uad00\ub828 \ud234, \ub808\uc774\uc5b4 \uc9c0\uc6d0 \ud398\uc778\ud305 \ubaa8\ub4dc \ub4f1\uc744 \ud65c\uc6a9\ud558\uc5ec \ubaa8\ub378\uc744 \uc644\uc131\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ucc98\ub7fc, \ub450 \ubc84\uc804\uc740 \ud55c \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uc5ec, \uc0ac\uc6a9\uc790\uc758 \uc81c\uc791 \uc6cc\ud06c\ud50c\ub85c\uc6b0\uc5d0 \ub530\ub77c \uc790\uc720\ub86d\uac8c \uc120\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"3-umodeler\uc5d0\uc11c-\uc81c\uc791\ud55c-\uc624\ube0c\uc81d\ud2b8\ub97c-umodeler-x\ub85c-\ubcc0\ud658\ud558\uae30"},(0,l.kt)("strong",{parentName:"h2"},"3. UModeler\uc5d0\uc11c \uc81c\uc791\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c UModeler X\ub85c \ubcc0\ud658\ud558\uae30")),(0,l.kt)("p",null,"UModeler X\ub97c \ud1b5\ud574 UModeler\uc5d0\uc11c \uc791\uc5c5\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc120 ",(0,l.kt)("strong",{parentName:"p"},"UModeler \uc624\ube0c\uc81d\ud2b8\ub97c UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658"),"\ud558\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud558\uba70, ",(0,l.kt)("strong",{parentName:"p"},"\uac1c\ubcc4 UModeler \uc624\ube0c\uc81d\ud2b8"),"\ubd80\ud130 ",(0,l.kt)("strong",{parentName:"p"},"\ud504\ub85c\uc81d\ud2b8\uc5d0 \uc788\ub294 \uc804\uccb4 UModeler \uc624\ube0c\uc81d\ud2b8"),"\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc790\uc138\ud55c \ubcc0\ud658 \ubc29\ubc95\uc740 \uc544\ub798 \ubb38\uc11c\ub97c \ud074\ub9ad\ud558\uc5ec \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)(a.Z,{items:[{type:"link",label:"UModeler\uc5d0\uc11c UModeler X",href:"/docs/um-to-umx-conversion",description:"UModeler \uc624\ube0c\uc81d\ud2b8 \ubcc0\ud658 \uac00\uc774\ub4dc \ubb38\uc11c"}],mdxType:"DocCardList"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"4-umodeler\uc640-umodeler-x\uc758-\uc8fc\uc694-\ucc28\uc774\uc810"},(0,l.kt)("strong",{parentName:"h2"},"4. UModeler\uc640 UModeler X\uc758 \uc8fc\uc694 \ucc28\uc774\uc810")),(0,l.kt)("p",null,"\uc544\ub798 \ud45c\ub294 UModeler\uc640 UModeler X \uac04\uc758 \uc8fc\uc694 \uae30\ub2a5 \ucc28\uc774\uc810\uc744 \uac04\ub7b5\ud558\uac8c \uc694\uc57d\ud55c \ud45c\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\uce74\ud14c\uace0\ub9ac")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\uae30\ub2a5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"UModeler")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"UModeler X")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ubaa8\ub378\ub9c1")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud3f4\ub9ac\uace4 \ud3b8\uc9d1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\uc2a4\ucf00\uce58\uae30\ubc18 \uc2a4\ub9c8\ud2b8 \ubaa8\ub378\ub9c1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\ubaa8\ub514\ud30c\uc774\uc5b4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"UV \uc5d0\ub514\ud305")),(0,l.kt)("td",{parentName:"tr",align:null},"UV \uc5b8\ub819"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\ud56b\uc2a4\ud31f \ud14d\uc2a4\ucc98\ub9c1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"LSCM \uc54c\uace0\ub9ac\uc998 UV \uc5b8\ub819"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ub9ac\uae45")),(0,l.kt)("td",{parentName:"tr",align:null},"\ubcf8 \uc5d0\ub514\ud305"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\uc6e8\uc774\ud2b8 \ud3b8\uc9d1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\uc624\ud1a0 \ub9ac\uae45"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2514 \uc624\ud1a0 \uc6e8\uc774\ud2b8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2514 \ube4c\ub4dc \ubcf8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ud398\uc778\ud305")),(0,l.kt)("td",{parentName:"tr",align:null},"3D \ud398\uc778\ud305"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\ub808\uc774\uc5b4 \uae30\ubc18 \ud14d\uc2a4\ucc98\ub9c1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\ube0c\ub7ec\uc2dc \uc5d0\ub514\ud305"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}u.isMDXComponent=!0},37054:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Modifier_ModifierSystem_Add-b21e28383f6d6c967841541fb63c8dcf.png"},55795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Modifier_ModifierSystem_Disable-140a4f804feaac416422b8ae73c06384.png"},30360:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/PaintingMode_Main-a22b47c45a79fbe29f238b45665f71dd.png"},87466:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_Guide-b7d550fec1e13e826875b4155741e9d5.png"},1524:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Device_5_FHD-e3190ba28060984f7743b4865a7fd9d2.png"},40623:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/for-um-users_2-04ebf8baa4703d9663068c3ec652ee30.png"},7618:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/for-um-users_MigratetoUModelerX_Result-d6fa789c3cb1881fc8e4bbd7326b5852.png"}}]);