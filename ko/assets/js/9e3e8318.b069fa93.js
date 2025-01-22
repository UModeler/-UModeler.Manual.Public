"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(67294),a=n(86010),l=n(53438),r=n(39960),i=n(13919),s=n(95999);const c="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return o.createElement(r.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function u(e){let{href:t,icon:n,title:l,description:r}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:l},n," ",l),r&&o.createElement("p",{className:(0,a.Z)("text--truncate",m),title:r},r))}function g(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?o.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(b,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,l.jA)();return o.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return o.createElement(f,e);const r=(0,l.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(k,{item:e})))))}},92340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),l=n(52991);const r={slug:"/modeling/boolean-tool",sidebar_position:5,description:""},i="Boolean \ud234",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool",title:"Boolean \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/boolean-tool",permalink:"/ko/docs/modeling/boolean-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/boolean-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Material \ud234",permalink:"/ko/docs/modeling/multi-material-tool"},next:{title:"Local Settings \ud234",permalink:"/ko/docs/modeling/multi-local-settings-tool"}},c={},p=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"A",id:"a",level:3},{value:"B",id:"b",level:3},{value:"Union",id:"union",level:3},{value:"Intersection",id:"intersection",level:3},{value:"Subtraction (A-B)",id:"subtraction-a-b",level:3},{value:"Subtraction (B-A)",id:"subtraction-b-a",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boolean-\ud234"},"Boolean \ud234"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool",src:n(87360).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Boolean \ud234"),"\uc740 \uc120\ud0dd\ud55c ",(0,a.kt)("strong",{parentName:"p"},"\ub450 \uac1c\uc758 \uc624\ube0c\uc81d\ud2b8"),"\uc5d0 \ub300\ud574 \ub450 \uc624\ube0c\uc81d\ud2b8\ub97c \ubd99\uc774\uac70\ub098, \uacb9\uce58\ub294 \ubd80\ubd84\ub9cc \ucd94\ucd9c\ud560 \uc218 \uc788\uc73c\uba70, \ub610\ub294 \ud55c \uc624\ube0c\uc81d\ud2b8\uc5d0\uc11c \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\ub97c \ube84 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Boolean \ud234")," \uc740 \uac1c\ubc1c \uc911\uc778 ",(0,a.kt)("strong",{parentName:"p"},"beta \uae30\ub2a5"),"\uc774\uba70 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"admonition"},"\ub9e4\ub274\uc5bc\uacfc \uc601\uc0c1\uc744 \uc219\uc9c0\ud55c \ub4a4 \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h3"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"2\uac1c\uc758 UModeler X \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Boolean Tool Select Object",src:n(56097).Z,width:"881",height:"635"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Multiple Objects \uadf8\ub8f9\uc758 Boolean \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Union, Intersection, \ub610\ub294 Subtraction \ubc84\ud2bc")," \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Boolean Tool",src:n(1455).Z,width:"974",height:"330"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ucc98\uc74c \uc120\ud0dd\ud55c \uc624\ube0c\uc81d\ud2b8\uac00 A\ub85c \ud560\ub2f9\ub418\uba70 \ub2e4\uc74c\uc73c\ub85c \uc120\ud0dd\ud55c \uc624\ube0c\uc81d\ud2b8\uac00 B\ub85c \ud560\ub2f9\ub418\uba70, ",(0,a.kt)("strong",{parentName:"li"},"A\uc640 B\uc758 \uc21c\uc11c"),"\ub294 ",(0,a.kt)("strong",{parentName:"li"},"Subtraction \ubc84\ud2bc"),"\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc911\uc694\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc120\ud0dd\ud55c \uacb0\uacfc\uac00 \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Boolean Tool Select Object",src:n(25945).Z,width:"900",height:"557"})))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool Properties",src:n(10416).Z,width:"974",height:"414"})),(0,a.kt)("h3",{id:"a"},"A"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 A"),"\ub85c \ub4f1\ub85d\ub41c \uc624\ube0c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"b"},"B"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 B"),"\ub85c \ub4f1\ub85d\ub41c \uc624\ube0c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"union"},"Union"),(0,a.kt)("p",null,"\ub450 \uc624\ube0c\uc81d\ud2b8\ub97c \ud569\uccd0 \ud558\ub098\uc758 \uc624\ube0c\uc81d\ud2b8\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. \uacb9\uccd0 \uc788\ub294 \ubd80\ubd84\uc758 \uba54\uc2dc\ub294 \uc81c\uac70\ud558\uba70 \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool",src:n(44469).Z,width:"1428",height:"619"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"multiple-objects-\uadf8\ub8f9\uc758-combine-\ud234\uacfc-\ub2e4\ub978-\uc810"},"Multiple Objects \uadf8\ub8f9\uc758 Combine \ud234\uacfc \ub2e4\ub978 \uc810"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Combine Tool",src:n(81607).Z,width:"1502",height:"570"})),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Combine \ud234"),"\uc740 \ub450 \uac1c \uc774\uc0c1\uc758 \uc624\ube0c\uc81d\ud2b8\ub97c \ub2e8\uc21c\ud788 \ud558\ub098\uc758 \uc624\ube0c\uc81d\ud2b8\ub85c \ud569\uce58\uba70, ",(0,a.kt)("strong",{parentName:"p"},"Boolean \ud234\uc758 Union"),"\uc740 \ub450 \uc624\ube0c\uc81d\ud2b8\ub97c \ud558\ub098\ub85c \ud569\uce58\ub418, \uacb9\uccd0 \uc788\ub294 \ubd80\ubd84\uc758 \uba54\uc2dc\ub97c \uc81c\uac70\ud558\uba74\uc11c \ud569\uccd0\uc9d1\ub2c8\ub2e4."),(0,a.kt)(l.Z,{items:[{type:"link",label:"Combine Tool",href:"/docs/modeling/combine-tool"}],mdxType:"DocCardList"})),(0,a.kt)("h3",{id:"intersection"},"Intersection"),(0,a.kt)("p",null,"\ub450 \uc624\ube0c\uc81d\ud2b8\uc758 \uacb9\uce58\ub294 \ubd80\ubd84\ub9cc\uc744 \ub0a8\uaca8 \ud558\ub098\uc758 \uc624\ube0c\uc81d\ud2b8\ub85c \ub9cc\ub4dc\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool",src:n(84065).Z,width:"1428",height:"619"})),(0,a.kt)("h3",{id:"subtraction-a-b"},"Subtraction (A-B)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 A"),"\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 B"),"\ub97c \ube7c\ub294 \ubc29\uc2dd\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool",src:n(34477).Z,width:"1428",height:"619"})),(0,a.kt)("h3",{id:"subtraction-b-a"},"Subtraction (B-A)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 B"),"\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uc624\ube0c\uc81d\ud2b8 A"),"\ub97c \ube7c\ub294 \ubc29\uc2dd\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boolean Tool",src:n(50778).Z,width:"1428",height:"619"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/Nuc1_TVm1Q0",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},87360:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean-96383d4b3e71c99448985b8736467f55.png"},84065:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_Intersection-fd76b2eb84e6abdd9625cfc328ae3123.png"},10416:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_Properties-a3c005280751c4214f09e6b424ba78ef.png"},1455:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_Properties_Select-2f230270f3c4eeb9d2742af60a182ec7.png"},25945:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_Result-67160f8503e15a0064a589a74e1396ad.png"},56097:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_SelectObject-ef846bcf29107fd36a6ba9b0649b5e4f.png"},34477:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_SubtractionAB-75d6400c09844281806a425d19b0193b.png"},50778:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_SubtractionBA-ea1aa28288517adb198287f3f93d41a7.png"},44469:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Boolean_Union-bbd14de5a9777d9e1ae05355bf70df0f.png"},81607:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_MultipleObjects_Combine-c560914ae7a883986284c5691de57bfc.png"}}]);