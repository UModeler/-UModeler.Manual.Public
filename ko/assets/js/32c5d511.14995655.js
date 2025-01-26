"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[38857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,g=m["".concat(o,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(67294),l=a(86010),n=a(53438),i=a(39960),s=a(13919),o=a(95999);const c="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,l.Z)("card padding--lg",c)},a)}function u(e){let{href:t,icon:a,title:n,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,l.Z)("text--truncate",d),title:n},a," ",n),i&&r.createElement("p",{className:(0,l.Z)("text--truncate",m),title:i},i))}function g(e){let{item:t}=e;const a=(0,n.Wl)(t);return a?r.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,n.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:a,title:t.label,description:t.description??l?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const a=(0,n.jA)();return r.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return r.createElement(k,e);const i=(0,n.MN)(t);return r.createElement("section",{className:(0,l.Z)("row",a)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},20472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),l=(a(67294),a(3905)),n=a(52991);const i={slug:"/modeling/material-tool",sidebar_position:1,description:""},s="Material \ud234",o={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/material-tool",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-surface/material-tool",title:"Material \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-plus/editable-mesh/modeling-mode/modeling-mode-surface/material-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/material-tool",permalink:"/ko/docs/plus/modeling/material-tool",draft:!1,tags:[],version:"plus",sidebarPosition:1,frontMatter:{slug:"/modeling/material-tool",sidebar_position:1,description:""},sidebar:"docs",previous:{title:"Surface \uadf8\ub8f9",permalink:"/ko/docs/plus/modeling-surface"},next:{title:"Mark UV Seam \ud234",permalink:"/ko/docs/plus/modeling/mark-uvseam-tool"}},c={},d=[{value:"<strong>\uc0ac\uc6a9\ubc29\ubc95</strong>",id:"\uc0ac\uc6a9\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>Display</strong>",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Select Faces",id:"select-faces",level:3},{value:"Assign",id:"assign",level:3},{value:"Assign All",id:"assign-all",level:3},{value:"Reset",id:"reset",level:3},{value:"Add Material",id:"add-material",level:3},{value:"Remove Material",id:"remove-material",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],m={toc:d};function p(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"material-\ud234"},"Material \ud234"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Material Tool",src:a(44916).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Material \ud234"),"\uc740 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ub300\ud574 ",(0,l.kt)("strong",{parentName:"p"},"\uba38\ud2f0\ub9ac\uc5bc\uc744 \ud3b8\uc9d1"),"\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc8fc\ub85c \uc120\ud0dd\ub41c \ud398\uc774\uc2a4\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"\uba38\ud2f0\ub9ac\uc5bc\uc744 \uc801\uc6a9"),"\ud558\uac70\ub098, ",(0,l.kt)("strong",{parentName:"p"},"\uba38\ud2f0\ub9ac\uc5bc \ucd94\uac00, \uc0ad\uc81c"),"\ub97c \ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc0ac\uc6a9\ubc29\ubc95"},(0,l.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9\ubc29\ubc95")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uba38\ud2f0\ub9ac\uc5bc\uc744 \ubd80\uc5ec\ud560 \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"Material Tool Select Face",src:a(72976).Z,width:"960",height:"548"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Material \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ubd80\uc5ec\ud560 \uba38\ud2f0\ub9ac\uc5bc\uc758 ",(0,l.kt)("strong",{parentName:"li"},"Assign \uc18d\uc131"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"Material Tool Assign",src:a(29786).Z,width:"922",height:"320"})),(0,l.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \ud398\uc774\uc2a4\uc5d0 \uba38\ud2f0\ub9ac\uc5bc\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"Material Tool Result",src:a(29716).Z,width:"960",height:"548"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc18d\uc131"},(0,l.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,l.kt)("h3",{id:"display"},(0,l.kt)("strong",{parentName:"h3"},"Display")),(0,l.kt)("p",null,"\uba54\uc2dc\uc758 \ud45c\uc2dc \ubc29\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,l.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Face XRay Mode",src:a(83379).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"select"},(0,l.kt)("strong",{parentName:"h3"},"Select")),(0,l.kt)("p",null,"\ubc84\ud14d\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)(n.Z,{items:[{type:"link",label:"Backface Select",href:"/ko/docs/vertex-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/ko/docs/vertex-element#camera-based-select"}],mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"select-faces"},"Select Faces"),(0,l.kt)("p",null,"\ud574\ub2f9 \uba38\ud2f0\ub9ac\uc5bc\uc774 \uc801\uc6a9\ub41c \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Select Faces",src:a(13878).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"assign"},"Assign"),(0,l.kt)("p",null,"\ud574\ub2f9 \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc120\ud0dd\ub41c \ud398\uc774\uc2a4\uc5d0 \uc801\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Assign",src:a(53245).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"assign-all"},"Assign All"),(0,l.kt)("p",null,"\ud574\ub2f9 \uba38\ud2f0\ub9ac\uc5bc\uc744 \ubaa8\ub4e0 \ud398\uc774\uc2a4\uc5d0 \uc801\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Assign All",src:a(17999).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"reset"},"Reset"),(0,l.kt)("p",null,"\ud604\uc7ac \ucd94\uac00\ub41c \ubaa8\ub4e0 \uba38\ud2f0\ub9ac\uc5bc\uc744 \ucd08\uae30\ud654 \ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Reset",src:a(43794).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"add-material"},"Add Material"),(0,l.kt)("p",null,"\uba38\ud2f0\ub9ac\uc5bc\uc744 \ucd94\uac00\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add",src:a(22326).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"remove-material"},"Remove Material"),(0,l.kt)("p",null,"\uc120\ud0dd\ub41c \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc0ad\uc81c\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Remove",src:a(74295).Z,width:"1920",height:"640"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,l.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,l.kt)("div",{class:"video-container-4-3"},(0,l.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/mh2LjWD3i70",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},83379:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Element_Face_Xray-d30e1a22e6cbc67ff6d6a40915594730.png"},44916:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material-9648ea3e950f5ed089ff1f87f5dc1263.png"},22326:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Add-d5dbaf411201609eaf9c2056a85fb705.png"},29786:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Assign-b4dcf6e69561c05d066d5dd4839c1914.png"},17999:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Properties_All-331e6d7409bc484de49bac2058e36a07.png"},53245:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Properties_Assign-e07910c4b4bb2d0b665d87e9e3d2d1ff.png"},13878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Properties_Select-cd111be801b77cc81e368575db0bf62c.png"},74295:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Remove-c62f3327338451a16fd0d13db8886c49.png"},43794:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Reset-0e3faea5042644f9049947f67efc5325.png"},29716:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_Result-2c07e96bfcea4e7f227f8f0f1b8f3505.png"},72976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Modeling_Surface_Material_SelectFace-3bf1dee1c659041a3b46c761a3708753.png"}}]);