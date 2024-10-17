"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(67294),a=r(86010),o=r(53438),l=r(39960),i=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:o,description:l}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:o},r," ",o),l&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(N,{items:r.items,className:t})}function N(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const l=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},63736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(52991);const l={slug:"/modeling/facenormal-tool",sidebar_position:8,description:""},i="Face Normal \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool",title:"Face Normal \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/facenormal-tool",permalink:"/ko/docs/modeling/facenormal-tool",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/modeling/facenormal-tool",sidebar_position:8,description:""},sidebar:"docs",previous:{title:"UV Param \ud234",permalink:"/ko/docs/modeling/uvparam-tool"},next:{title:"\ud398\uc778\ud305 \ubaa8\ub4dc",permalink:"/ko/docs/painting-mode"}},s={},m=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Normal Color",id:"normal-color",level:3},{value:"Normal Length",id:"normal-length",level:3},{value:"Normal Thickness",id:"normal-thickness",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Select Face Normals",id:"select-face-normals",level:3},{value:"Reset Normal",id:"reset-normal",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],d={toc:m};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"face-normal-\ud234"},"Face Normal \ud234"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Face Normal Tool",src:r(77066).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Face Normal \ud234"),"\uc740 \uc120\ud0dd\ud55c \ud398\uc774\uc2a4\uc758 \ub178\uba40 \ubc29\ud5a5\uc744 \ud68c\uc804\uc2dc\ud0a4\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"\ud398\uc774\uc2a4-\ub178\uba40face-normal"},(0,a.kt)("strong",{parentName:"h2"},"\ud398\uc774\uc2a4 \ub178\uba40(Face Normal)")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4 \ub178\uba40"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc758 \uc218\uc9c1 \ubc29\ud5a5 \ubca1\ud130"),"\ub85c, \ud398\uc774\uc2a4\uac00 \uc5b4\ub5a4 \ubc29\ud5a5\uc744 \ud5a5\ud558\uace0 \uc788\ub294\uc9c0\ub97c \uc815\uc758\ud569\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Face Normal \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Select Face Normals \ubc84\ud2bc"),"\uc744 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"li"},"\ud398\uc774\uc2a4 \ub178\uba40"),"\uc744 \ud68c\uc804\uc2dc\ud0ac ",(0,a.kt)("strong",{parentName:"li"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd"),"\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud68c\uc804 \uae30\uc988\ubaa8\ub97c \uc870\uc791\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"li"},"\ud398\uc774\uc2a4 \ub178\uba40"),"\uc744 \ud68c\uc804\ud569\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Face Normal Properties",src:r(7763).Z,width:"800",height:"500"})),(0,a.kt)("h3",{id:"normal-color"},"Normal Color"),(0,a.kt)("p",null,"\ub178\uba40 \ubca1\ud130\uc758 \uc0c9\uc0c1\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"normal-length"},"Normal Length"),(0,a.kt)("p",null,"\ub178\uba40 \ubca1\ud130\uc758 \uae38\uc774\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"normal-thickness"},"Normal Thickness"),(0,a.kt)("p",null,"\ub178\uba40 \ubca1\ud130\uc758 \ub450\uaed8\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"\ud398\uc774\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)(o.Z,{items:[{type:"link",label:"Backface Select",href:"/ko/docs/face-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/ko/docs/face-element#camera-based-select"}],mdxType:"DocCardList"}),(0,a.kt)("h3",{id:"select-face-normals"},"Select Face Normals"),(0,a.kt)("p",null,"\ub178\uba40\uc744 \ud68c\uc804\uc2dc\ud0ac \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4"),(0,a.kt)("h3",{id:"reset-normal"},"Reset Normal"),(0,a.kt)("p",null,"\ub178\uba40 \uac12\ub4e4\uc744 \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/0v89_r6jKA8",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},77066:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Surface_FaceNormal-417c3fab2d504fd79c7bd5eb3a48adaf.png"},7763:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Surface_FaceNormal_Properties-494b4f3de1f87acfb6a7978a9ab33cff.png"}}]);