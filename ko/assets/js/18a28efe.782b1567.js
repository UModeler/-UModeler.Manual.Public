"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),a=r(86010),o=r(53438),i=r(39960),l=r(13919),c=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function g(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(k,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},10454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));r(52991);const o={slug:"/uv-editor",description:""},i="UV \uc5d0\ub514\ud130",l={unversionedId:"editable-mesh/uv-editor/index",id:"editable-mesh/uv-editor/index",title:"UV \uc5d0\ub514\ud130",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/index.md",sourceDirName:"editable-mesh/uv-editor",slug:"/uv-editor",permalink:"/ko/docs/uv-editor",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/uv-editor/index.md",tags:[],version:"current",frontMatter:{slug:"/uv-editor",description:""},sidebar:"docs",previous:{title:"Root Bone Settings",permalink:"/ko/docs/rigging/root-bone-settings"},next:{title:"UV \uc5d0\ub514\ud130 \uac00\uc774\ub4dc",permalink:"/ko/docs/uveditor/guide"}},c={},s=[{value:"<strong>\uc2e4\ud589 \ubc29\ubc95</strong>",id:"\uc2e4\ud589-\ubc29\ubc95",level:2},{value:"<strong>Source Mesh&gt;UV Editor \ud234</strong>",id:"source-meshuv-editor-\ud234",level:2},{value:"<strong>\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd&gt;\uc5f4\ub824\uc788\ub294 UV \uc5d0\ub514\ud130 \ud0ed \uc120\ud0dd</strong>",id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dd\uc5f4\ub824\uc788\ub294-uv-\uc5d0\ub514\ud130-\ud0ed-\uc120\ud0dd",level:2},{value:"UV \uc5d0\ub514\ud130 \uac00\uc774\ub4dc",id:"uv-\uc5d0\ub514\ud130-\uac00\uc774\ub4dc",level:2},{value:"UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4",id:"uv-\uc5d0\ub514\ud130-\uc124\uc815\uacfc-\uc778\ud130\ud398\uc774\uc2a4",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uv-\uc5d0\ub514\ud130"},"UV \uc5d0\ub514\ud130"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UV Editor",src:r(54726).Z,width:"2110",height:"1292"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UV"),"\ub294 3D \ud615\ud0dc\uc758 \uc624\ube0c\uc81d\ud2b8\uc640 \ub300\uc751\ud558\ub294 2D \ud615\ud0dc\uc758 \ud14d\uc2a4\uccd0 \uc88c\ud45c \uc785\ub2c8\ub2e4.\n",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8(UV Vertex, UV Edge, UV Face)\ub97c \uc0dd\uc131\ud558\uace0 \ud3b8\uc9d1"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc2e4\ud589-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h2"},"\uc2e4\ud589 \ubc29\ubc95")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"source-meshuv-editor-\ud234"},(0,a.kt)("strong",{parentName:"h2"},"Source Mesh>UV Editor \ud234")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\uc6d0\ubcf8 \uba54\uc2dc(Source Mesh)"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ubaa8\ub4dc \uc0c1\ub2e8 \uac00\uc7a5 \uc6b0\uce21"),"\uc5d0 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\uc5d0\ub514\ud130 \ubc84\ud2bc"),"\uc744 \ub204\ub985\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uba54\ub274\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"li"},"UV Editor \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"UV Editor Button",src:r(8222).Z,width:"997",height:"580"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"UV \uc5d0\ub514\ud130"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"UV Editor",src:r(67248).Z,width:"2110",height:"1292"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dd\uc5f4\ub824\uc788\ub294-uv-\uc5d0\ub514\ud130-\ud0ed-\uc120\ud0dd"},(0,a.kt)("strong",{parentName:"h2"},"\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd>\uc5f4\ub824\uc788\ub294 UV \uc5d0\ub514\ud130 \ud0ed \uc120\ud0dd")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc5f4\ub824\uc788\ub294 \ud0ed\ub4e4 \uc911 ",(0,a.kt)("strong",{parentName:"li"},"UV Editor \ud0ed"),"\uc744 \ub20c\ub7ec \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"UV Editor Tab Click",src:r(46642).Z,width:"1248",height:"295"}),(0,a.kt)("admonition",{parentName:"li",title:"\ucc38\uace0",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"UModeler X \uc624\ube0c\uc81d\ud2b8"),"\uac00 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74, UV \uc5d0\ub514\ud130\uac00 \ud65c\uc131\ud654\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"uv-\uc5d0\ub514\ud130-\uac00\uc774\ub4dc"},"UV \uc5d0\ub514\ud130 \uac00\uc774\ub4dc"),(0,a.kt)("p",null,"\ub354 \uae4a\uc774 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"p"},"UV"),"\uc640 ",(0,a.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\ucc98 \uc88c\ud45c,")," \uadf8\ub9ac\uace0 ",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc6d0\ud558\uc2e0\ub2e4\uba74, \uc544\ub798 \ud398\uc774\uc9c0\uc758 \uac00\uc774\ub4dc\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130 \uac00\uc774\ub4dc"),"\uc5d0\uc11c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"UV\uc640 \ud14d\uc2a4\ucc98 \uc88c\ud45c\uc758 \uae30\ubcf8 \uac1c\ub150"),"\ubd80\ud130 ",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130\uc758 \uc138\ubd80\uc801\uc778 \uc0ac\uc6a9\ubc95"),"\uae4c\uc9c0 \ub2e4\ub8e8\uace0 \uc788\uc5b4, \uc774\ub97c \ud1b5\ud574 \ub354\uc6b1 \ud6a8\uacfc\uc801\uc774\uace0 \uc815\ud655\ud55c \ud14d\uc2a4\ucc98 \ub9e4\ud551\uc744 \uc9c4\ud589\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("div",null,(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"UV \uc5d0\ub514\ud130 \uac00\uc774\ub4dc"),(0,a.kt)("a",{href:"/docs/uveditor/guide",class:"card-link"},"Check"))),(0,a.kt)("h2",{id:"uv-\uc5d0\ub514\ud130-\uc124\uc815\uacfc-\uc778\ud130\ud398\uc774\uc2a4"},"UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c ",(0,a.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130 \uc124\uc815"),"\ubd80\ud130 ",(0,a.kt)("strong",{parentName:"p"},"\uc778\ud130\ud398\uc774\uc2a4"),"\uc758 \uac01 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc744 \uc6d0\ud558\uc2e0\ub2e4\uba74, \uc544\ub798 \ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("div",null,(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"\uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4"),(0,a.kt)("a",{href:"/docs/uveditor/settings-interface",class:"card-link"},"Check"))),(0,a.kt)("hr",null))}u.isMDXComponent=!0},67248:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_UVEditor-060e5b72c497beb9c162cf724e1a7f8f.png"},8222:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_UVEditorButton-e9c6a8dc88b88e6c76720a8f99fe2093.png"},46642:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_UVEditorTab_Click-2a857b08806f4fa49a87e3ec623757f2.png"},54726:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_UVEditor_Main-a55a4720d08f249948a40b45f15e34bf.png"}}]);