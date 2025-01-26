"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[56211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||l;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(67294),n=r(86010),l=r(53438),o=r(39960),i=r(13919),c=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return a.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:l,description:o}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:l},r," ",l),o&&a.createElement("p",{className:(0,n.Z)("text--truncate",p),title:o},o))}function y(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?a.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,l.jA)();return a.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return a.createElement(f,e);const o=(0,l.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:e})))))}},87798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(52991);const o={slug:"/modeling/radialarray-tool",sidebar_position:13,description:""},i="Radial Array \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/radialarray-tool",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-add/radialarray-tool",title:"Radial Array \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-basic/editable-mesh/modeling-mode/modeling-mode-add/radialarray-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/radialarray-tool",permalink:"/ko/docs/basic/modeling/radialarray-tool",draft:!1,tags:[],version:"basic",sidebarPosition:13,frontMatter:{slug:"/modeling/radialarray-tool",sidebar_position:13,description:""},sidebar:"docs",previous:{title:"Linear Array \ud234",permalink:"/ko/docs/basic/modeling/lineararray-tool"},next:{title:"Follow \ud234",permalink:"/ko/docs/basic/modeling/follow-tool"}},s={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Array Type",id:"array-type",level:2},{value:"<strong>Array Type: To Elements</strong>",id:"array-type-to-elements",level:2},{value:"\ud604\uc7ac \uba54\uc2dc \uc548\uc5d0 \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4 \uc0dd\uc131",id:"\ud604\uc7ac-\uba54\uc2dc-\uc548\uc5d0-\uc0c8-\uc5d8\ub9ac\uba3c\ud2b8-\ubc30\uc5f4-\uc0dd\uc131",level:3},{value:"<strong> Array Type: To Object</strong>",id:"-array-type-to-object",level:2},{value:"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\ub41c \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud604\uc7ac-\uba54\uc2dc\uc5d0\uc11c-\ub3c5\ub9bd\ub41c-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131",level:3},{value:"Rotate Axis",id:"rotate-axis",level:3},{value:"Offset",id:"offset",level:3},{value:"Angle",id:"angle",level:3},{value:"Batch Count",id:"batch-count",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"radial-array-\ud234"},"Radial Array \ud234"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Radial Array Tool",src:r(89401).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Radial Array \ud234"),"\uc740 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face)\ub97c \ubcf5\uc0ac\ud558\uc5ec \uc6d0\ud615 \ubc29\ud5a5\uc73c\ub85c \ubc30\uc5f4\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\uc774 \uae30\ub2a5\uc740 ",(0,n.kt)("strong",{parentName:"p"},"UModeler X Plus"),"\uc5d0\uc11c \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,n.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ubcf5\uc0ac\ud560 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Radial Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Array Type")," \ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Length Type"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rotate Axis"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc801\uc808\ud55c \uc218\uce58\ub85c \uc870\uc808\ud569\ub2c8\ub2e4."))),(0,n.kt)("h2",{id:"\uc18d\uc131"},(0,n.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Radial Array Tool Properties",src:r(16360).Z,width:"924",height:"700"})),(0,n.kt)("h2",{id:"array-type"},"Array Type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Radial Array \ud234"),"\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc744 \uc5d8\ub9ac\uba3c\ud2b8 \uc885\ub958\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"array-type-to-elements"},(0,n.kt)("strong",{parentName:"h2"},"Array Type: To Elements")),(0,n.kt)("h3",{id:"\ud604\uc7ac-\uba54\uc2dc-\uc548\uc5d0-\uc0c8-\uc5d8\ub9ac\uba3c\ud2b8-\ubc30\uc5f4-\uc0dd\uc131"},"\ud604\uc7ac \uba54\uc2dc \uc548\uc5d0 \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4 \uc0dd\uc131"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.    "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Radial Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Array Type: To Elements",src:r(51753).Z,width:"1400",height:"800"})),(0,n.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc5f0\uacb0\ub41c \uba54\uc2dc\uc5d0\uc11c \uc0c8 \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-array-type-to-object"},(0,n.kt)("strong",{parentName:"h2"}," Array Type: To Object")),(0,n.kt)("h3",{id:"\ud604\uc7ac-\uba54\uc2dc\uc5d0\uc11c-\ub3c5\ub9bd\ub41c-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131"},"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\ub41c \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Radial Array \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Array Type: To Object",src:r(21997).Z,width:"1400",height:"800"})),(0,n.kt)("li",{parentName:"ol"},"\ud604\uc7ac \uba54\uc2dc\uc5d0\uc11c \ub3c5\ub9bd\uc801\ub41c \uc0c8\ub85c\uc6b4 \uc624\ube0c\uc81d\ud2b8 \ubc30\uc5f4\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"rotate-axis"},"Rotate Axis"),(0,n.kt)("p",null,"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc18d\ud55c \ubc84\ud14d\uc2a4\uc5d0\ub9cc \uc601\ud5a5\uc744 \uc8fc\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"offset"},"Offset"),(0,n.kt)("p",null,"\uc6d0\ubcf8 \uc5d8\ub9ac\uba3c\ud2b8\uc640 \ud68c\uc804\ucd95 \uc0ac\uc774\uc758 \uac70\ub9ac\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"angle"},"Angle"),(0,n.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\uac04 \ud68c\uc804 \uac04\uaca9\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"batch-count"},"Batch Count"),(0,n.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc0dd\uc131\ub420 \uc5d8\ub9ac\uba3c\ud2b8 \ub610\ub294 \uc624\ube0c\uc81d\ud2b8\uc758 \uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4 (2 ~ 1000). "),(0,n.kt)("h3",{id:"select"},(0,n.kt)("strong",{parentName:"h3"},"Select")),(0,n.kt)("p",null,"\ud398\uc774\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)(l.Z,{items:[{type:"link",label:"Backface Select",href:"/ko/docs/vertex-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/ko/docs/vertex-element#camera-based-select"}],mdxType:"DocCardList"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,n.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/fKuGbkxGdgU",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},89401:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_RadialArray-4b11badb005bc87ac9e1480a7110db80.png"},51753:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_RadialArray_Element-647d2c2ced2074f987744f5fbde09037.png"},21997:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_RadialArray_Object-15775b9c5b0a783ec2b6a745b0c39bf8.png"},16360:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_RadialArray_Properties-1fcdc2b0e1ceff40e96983bb5b243c82.png"}}]);