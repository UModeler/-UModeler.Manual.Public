"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[14612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||l;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),a=r(86010),l=r(53438),o=r(39960),i=r(13919),c=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:l,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:l},r," ",l),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function y(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,l.jA)();return n.createElement(f,{items:r.items,className:t})}function f(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,l.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},43518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(52991);const o={slug:"/modeling/lineararray-tool",sidebar_position:12,description:""},i="Linear Array \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool",title:"Linear Array \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-plus/editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/lineararray-tool",permalink:"/ko/docs/plus/modeling/lineararray-tool",draft:!1,tags:[],version:"plus",sidebarPosition:12,frontMatter:{slug:"/modeling/lineararray-tool",sidebar_position:12,description:""},sidebar:"docs",previous:{title:"Insert Vertex \ud234",permalink:"/ko/docs/plus/modeling/insertvertex-tool"},next:{title:"Radial Array \ud234",permalink:"/ko/docs/plus/modeling/radialarray-tool"}},s={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Array Type",id:"array-type",level:2},{value:"<strong>Array Type: To Elements</strong>",id:"array-type-to-elements",level:2},{value:"\ud604\uc7ac \uba54\uc2dc \uc548\uc5d0 \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4 \uc0dd\uc131",id:"\ud604\uc7ac-\uba54\uc2dc-\uc548\uc5d0-\uc0c8-\uc5d8\ub9ac\uba3c\ud2b8-\ubc30\uc5f4-\uc0dd\uc131",level:3},{value:"<strong> Array Type: To Object</strong>",id:"-array-type-to-object",level:2},{value:"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\ub41c \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud604\uc7ac-\uba54\uc2dc\uc5d0\uc11c-\ub3c5\ub9bd\ub41c-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131",level:3},{value:"Length Type",id:"length-type",level:3},{value:"Direction",id:"direction",level:3},{value:"Length",id:"length",level:3},{value:"Batch Count",id:"batch-count",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linear-array-\ud234"},"Linear Array \ud234"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linear Array Tool",src:r(59638).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear Array \ud234"),"\uc740 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face)\ub97c \ubcf5\uc0ac\ud558\uc5ec \uc120\ud615 \ubc29\ud5a5\uc73c\ub85c \ubc30\uc5f4\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uc774 \uae30\ub2a5\uc740 ",(0,a.kt)("strong",{parentName:"p"},"UModeler X Plus"),"\uc5d0\uc11c \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h3"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubcf5\uc0ac\ud560 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Linear Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Array Type")," \ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Length Type")," \ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc801\uc808\ud55c \uc218\uce58\ub85c \uc870\uc808\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linear Array Tool Properties",src:r(33580).Z,width:"924",height:"550"})),(0,a.kt)("h2",{id:"array-type"},"Array Type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear Array \ud234"),"\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc744 \uc5d8\ub9ac\uba3c\ud2b8 \uc885\ub958\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"array-type-to-elements"},(0,a.kt)("strong",{parentName:"h2"},"Array Type: To Elements")),(0,a.kt)("h3",{id:"\ud604\uc7ac-\uba54\uc2dc-\uc548\uc5d0-\uc0c8-\uc5d8\ub9ac\uba3c\ud2b8-\ubc30\uc5f4-\uc0dd\uc131"},"\ud604\uc7ac \uba54\uc2dc \uc548\uc5d0 \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4 \uc0dd\uc131"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.    "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Linear Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Array Type: To Elements",src:r(33776).Z,width:"1400",height:"800"})),(0,a.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc5f0\uacb0\ub41c \uba54\uc2dc\uc5d0\uc11c \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-array-type-to-object"},(0,a.kt)("strong",{parentName:"h2"}," Array Type: To Object")),(0,a.kt)("h3",{id:"\ud604\uc7ac-\uba54\uc2dc\uc5d0\uc11c-\ub3c5\ub9bd\ub41c-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131"},"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\ub41c \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Linear Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Array Type: To Elements",src:r(24960).Z,width:"1400",height:"800"})),(0,a.kt)("li",{parentName:"ol"},"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\uc801\ub41c \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8 \ubc30\uc5f4\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"length-type"},"Length Type"),(0,a.kt)("p",null,"\uc0c8\ub85c \uc0dd\uc131\ub420 \ubc30\uc5f4\uc758 \uac00\uc7a5 \ub05d \uac1d\uccb4\uc758 \uc704\uce58\ub97c \uacb0\uc815\ud558\ub294 \uc778\uc790\uc785\ub2c8\ub2e4. Total, Interval \ub450 \uac00\uc9c0 \ud0c0\uc785\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Total : Total \uac12\ub9cc\ud07c \ub5a8\uc5b4\uc9c4 \uacf3\uc774 \ub05d \uac1d\uccb4\uc758 \uc704\uce58"),(0,a.kt)("li",{parentName:"ul"},"Interval : angle X batch count \uac12\ub9cc\ud07c \uc774\ub3d9\ud55c \uac70\ub9ac/ \ud68c\uc804\ud55c \uac01\ub3c4\uac00 \ub9c8\uc9c0\ub9c9 \uac1d\uccb4\uac00 \uc704\uce58\ud560 \uacf3")),(0,a.kt)("h3",{id:"direction"},"Direction"),(0,a.kt)("p",null,"\uc6d0\ubcf8 \uc5d8\ub9ac\uba3c\ud2b8\uc758 Pivot\uc744 \uc6d0\uc810\uc73c\ub85c\ud55c 3\ucc28\uc6d0 \ubc29\ud5a5 \ubca1\ud130\uc758 \uc88c\ud45c(\uc131\ubd84)\ub85c \uc774 \ubca1\ud130\ub97c \ub530\ub77c Array \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"length"},"Length"),(0,a.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8 \uac04\uc758 \uac04\uaca9\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"batch-count"},"Batch Count"),(0,a.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc0dd\uc131\ub420 \uc5d8\ub9ac\uba3c\ud2b8 \ub610\ub294 \uc624\ube0c\uc81d\ud2b8\uc758 \uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4 (2 ~ 1000)."),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"\ud398\uc774\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)(l.Z,{items:[{type:"link",label:"Backface Select",href:"/ko/docs/Face-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/ko/docs/Face-element#camera-based-select"}],mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/lSn415EN5NM",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},59638:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Add_LinearArray-4cee218fd94550394dafbc39df833537.png"},33776:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Add_LinearArray_Element-b7e05326fcd0bb15946be2b1f779857f.png"},24960:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Add_LinearArray_Object-11b6994343454a81a49d971f50fc0622.png"},33580:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Add_LinearArray_Properties-68e043c2c74bc46fb8e3d2ffe6591669.png"}}]);