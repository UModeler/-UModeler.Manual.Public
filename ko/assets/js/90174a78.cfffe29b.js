"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.createContext({}),c=function(e){var t=l.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,u=p["".concat(m,".").concat(k)]||p[k]||d[k]||r;return n?l.createElement(u,o(o({ref:t},s),{},{components:n})):l.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>Z});var l=n(67294),a=n(86010),r=n(53438),o=n(39960),i=n(13919),m=n(95999);const c="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return l.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function k(e){let{href:t,icon:n,title:r,description:o}=e;return l.createElement(d,{href:t},l.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:r},n," ",r),o&&l.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function u(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?l.createElement(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return l.createElement(k,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(g,{item:t});case"category":return l.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function S(e){let{className:t}=e;const n=(0,r.jA)();return l.createElement(Z,{items:n.items,className:t})}function Z(e){const{items:t,className:n}=e;if(!t)return l.createElement(S,e);const o=(0,r.MN)(t);return l.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(f,{item:e})))))}},85952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var l=n(87462),a=(n(67294),n(3905)),r=n(52991);const o={slug:"/modeling-element",description:""},i="Element \uadf8\ub8f9",m={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/index",id:"editable-mesh/modeling-mode/modeling-mode-element/index",title:"Element \uadf8\ub8f9",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-element/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/modeling-element",permalink:"/ko/docs/modeling-element",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-element",description:""},sidebar:"docs",previous:{title:"Decimate \ubaa8\ub514\ud30c\uc774\uc5b4",permalink:"/ko/docs/modeling/decimate-modifier"},next:{title:"\ubc84\ud14d\uc2a4",permalink:"/ko/docs/vertex-element"}},c={},s=[{value:"<strong>\ud3b8\uc9d1\ud560 \uc5d8\ub9ac\uba3c\ud2b8 \ubcc0\uacbd</strong>",id:"\ud3b8\uc9d1\ud560-\uc5d8\ub9ac\uba3c\ud2b8-\ubcc0\uacbd",level:2},{value:"<strong>\ub2e8\ucd95\ud0a4 <code>Shift+\ud074\ub9ad\ub4dc\ub798\uadf8</code></strong>",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad\ub4dc\ub798\uadf8",level:2},{value:"<strong>\uacf5\ud1b5 \uc18d\uc131</strong>",id:"\uacf5\ud1b5-\uc18d\uc131",level:2},{value:"<strong>Display</strong>",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:3},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"element-\uadf8\ub8f9"},"Element \uadf8\ub8f9"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ElementGroup",src:n(9460).Z,width:"2068",height:"923"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9"),"\uc740 \ubaa8\ub378\ub9c1 \ubaa8\ub4dc \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud558\uba70 ",(0,a.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(",(0,a.kt)("inlineCode",{parentName:"strong"},"Vertex"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Edge"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Face"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Object")),")\uc5d0 \uad00\ud55c \uc18d\uc131\uc774 \ubaa8\uc5ec \uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud3b8\uc9d1\ud560-\uc5d8\ub9ac\uba3c\ud2b8-\ubcc0\uacbd"},(0,a.kt)("strong",{parentName:"h2"},"\ud3b8\uc9d1\ud560 \uc5d8\ub9ac\uba3c\ud2b8 \ubcc0\uacbd")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Top Icons",src:n(1558).Z,width:"890",height:"96"})),(0,a.kt)("p",null,"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\uc6d0\ubcf8 \uba54\uc2dc Source Mesh"),"\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd \ud6c4 \ud3b8\uc9d1"),"\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"3\uac00\uc9c0 \ud3b8\uc9d1 \uac00\ub2a5\ud55c \uc5d8\ub9ac\uba3c\ud2b8(",(0,a.kt)("strong",{parentName:"p"},"Vertex"),", ",(0,a.kt)("strong",{parentName:"p"},"Edge"),", ",(0,a.kt)("strong",{parentName:"p"},"Face"),")\uc640 \ud3b8\uc9d1 \uc0c1\ud0dc\uc5d0\uc11c \ube60\uc838\ub098\uc624\ub294 ",(0,a.kt)("strong",{parentName:"p"},"Object"),"\uac00 \uc788\uc73c\uba70 ",(0,a.kt)("strong",{parentName:"p"},"\uc52c(Scene)")," \uc0c1\ub2e8 \uc544\uc774\ucf58\ub4e4\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uc5d8\ub9ac\uba3c\ud2b8\ub85c \ud3b8\uc9d1\ud560\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/BVy66in3VWQ",frameborder:"0",allowfullscreen:""})),(0,a.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd\uc5d0 \ub530\ub77c ",(0,a.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9 \ub0b4"),"\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uacfc \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798 \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub300\ud55c \ud398\uc774\uc9c0\ub97c \ud1b5\ud574 \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub300\ud55c \uc124\uba85\uacfc \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd\uc5d0 \ub530\ub978 \uc18d\uc131\uc744 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad\ub4dc\ub798\uadf8"},(0,a.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad\ub4dc\ub798\uadf8"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Element Extrude",src:n(43707).Z,width:"2006",height:"667"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(\ubc84\ud14d\uc2a4, \uc5e3\uc9c0, \ud398\uc774\uc2a4)\ub97c \uc120\ud0dd"),"\ud558\uace0 \ub098\uc11c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub97c \uc774\uc6a9\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"p"},"\uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc774\ub3d9"),"\uc2dc\ud0a4\uba74, \uc774\ub3d9\ud55c \ubc29\ud5a5\uc73c\ub85c \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ub3cc\ucd9c\ub418\uac70\ub098 \ubc00\uc5b4\ub0b4\ub4ef\uc774 \uc0c8\ub85c\uc6b4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4")," \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uacbd\uc6b0 ",(0,a.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4 Element \uadf8\ub8f9 \uc18d\uc131"),"\uc5d0 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"p"},"Extrude Option \uc18d\uc131"),"\uc73c\ub85c \ud398\uc774\uc2a4\uac00 \uc5b4\ub5bb\uac8c \ub3cc\ucd9c\ub418\ub294\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"Face Extrude Option",src:n(36387).Z,width:"882",height:"345"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uacf5\ud1b5-\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uacf5\ud1b5 \uc18d\uc131")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ElementCommon",src:n(32507).Z,width:"790",height:"536"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9"),"\uc5d0\uc11c \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\ub4e4\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"display"},(0,a.kt)("strong",{parentName:"h3"},"Display")),(0,a.kt)("p",null,"\uba54\uc2dc\uc758 \ud45c\uc2dc \ubc29\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,a.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,a.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Xray Mode",src:n(80779).Z,width:"1920",height:"640"})),(0,a.kt)("admonition",{title:"\ud301",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"XRay Mode \uc18d\uc131"),"\uc744 \uc774\uc6a9\ud558\uba74 \ubcf5\uc7a1\ud55c \ubaa8\ub378\uc758 \ub4b7\uba74\uc5d0 \uc788\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uc190\uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,a.kt)("p",null,"\uc5e3\uc9c0\ub97c \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uc228\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_HideEdgeOverlay",src:n(11628).Z,width:"1920",height:"640"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"backface-select"},"Backface Select"),(0,a.kt)("p",null,"\ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\uace0 \uc788\ub294 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_BackfaceOff",src:n(29694).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_BackfaceOn",src:n(2146).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub3c4 \ud568\uaed8 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,a.kt)("p",null,"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c \ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub9cc \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Camerabased Select Off",src:n(92318).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \uc5d8\ub9ac\uba3c\ud2b8\ub3c4 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Camerabased Select On",src:n(87452).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \uc5d8\ub9ac\uba3c\ud2b8\ub294 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"soft-select"},(0,a.kt)("strong",{parentName:"h3"},"Soft Select")),(0,a.kt)("p",null,"\uc52c(Scene)\uc5d0 \uc120\ud0dd\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uc640 \uc778\uc811\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,a.kt)("strong",{parentName:"p"},"\uac00\uc911\uce58\uc5d0 \ub530\ub77c \uc120\ud0dd"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uac00\uc911\uce58\uc5d0 \ub530\ub77c \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uc640 \uc124\uc815\ud55c \ubc94\uc704\uac00 \uceec\ub7ec\ub85c \ud45c\uc2dc\ub418\uba70, \ub300\uccb4\ub85c \ubd80\ub4dc\ub7ec\uc6b4 \uc6d0\ud615\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Soft Selection"),"\uc744 \ud65c\uc131\ud654\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelect",src:n(79428).Z,width:"1920",height:"640"})),(0,a.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Soft Selection"),"\uc758 \uac00\uc911\uce58 \ubaa8\uc591\uc744 \uacb0\uc815\ud558\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uadf8\ub798\ud504 \ud615\ud0dc\uc758 \uc18d\uc131"),"\uc785\ub2c8\ub2e4.\n",(0,a.kt)("strong",{parentName:"p"},"Soft Selection Curve \uc18d\uc131")," \uc606 \uadf8\ub798\ud504\ub97c \ub204\ub974\uba74 \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve",src:n(88390).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Curve \ud615\ud0dc \uc608\uc2dc")),(0,a.kt)("p",null,"Curve \ud615\ud0dc \ubcc4 \uc120\ud0dd \ubaa8\uc591 \ubcc0\ud654 \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve_Example1",src:n(19635).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve_Example2",src:n(21570).Z,width:"1920",height:"640"})),(0,a.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,a.kt)("p",null,"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ubd80\ud130 \uc18c\ud504\ud2b8\uc140\ub809\uc158\uc774 \uc801\uc6a9\ub418\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ubc94\uc704\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc720\ub2c8\ud2f0 \uae30\uc900 ",(0,a.kt)("strong",{parentName:"p"},"1m = 1.0"),"\uc774\uae30 \ub54c\ubb38\uc5d0, ",(0,a.kt)("strong",{parentName:"p"},"0.5")," \uc758 \uacbd\uc6b0 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub85c\ubd80\ud130 ",(0,a.kt)("strong",{parentName:"p"},"50cm")," \uae4c\uc9c0 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectRange",src:n(59630).Z,width:"1920",height:"640"})))}d.isMDXComponent=!0},36387:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_Face_ExtrudeOption-f795a5f733f033af11bf74b3b0d52f5e.png"},32507:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common-042132676b35af689474a383d476aacf.png"},29694:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOff-d6177cc24278401547c7273b5da04233.png"},2146:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOn-20c2c42d08b18716a20e1af5e4d392b1.png"},92318:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOff-4fe13968b619c0d46e52c48b1d1a19c5.png"},87452:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOn-2f4c40d6d040f8cb6808a12d156f5f35.png"},43707:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_Extrude-3be6a190106e034bd188ae409482b4ab.png"},11628:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_HideEdgeOverlay-8cf8368ef74216553e895268f4c7c61d.png"},79428:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelection-1e4de906974bc06b1779ab3d3a1fa935.png"},88390:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurve-e810f3dd8b70ab879119178831576f4c.png"},19635:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample1-1575b4b5a26da5836c422ce90624c1dd.png"},21570:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample2-cf8a818a5e149c80f0946f7e6f741a83.png"},59630:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionRange-2715297f8e3e28fc4686458a49c49209.png"},80779:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_Xray-be74e228d3d01f319da7332f6c546578.png"},9460:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Elements_Group-4cddeddef32adbaadd86c3e1f7d767cc.png"},1558:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3oAAABgCAYAAABL9gAYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGiGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0yOFQxMjo0NzoxNCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDItMjhUMTI6NDc6MTQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRkMDZkM2Q0LWYyYTYtYmQ0Mi05YzEzLTkyY2RjNTVhNmZmMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NzdhNzBiNS04MTZlLTcyNDYtYjJmZi1kZjZjYjc1ZjhhYTYiIHN0RXZ0OndoZW49IjIwMjMtMDItMjhUMTI6MzE6MDgrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQwNmQzZDQtZjJhNi1iZDQyLTljMTMtOTJjZGM1NWE2ZmYzIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDEyOjQ3OjE0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z5yIBQAADeVJREFUeJzt3V+PVHWex/F303RDt420IXa2exREOiAaASNcrJFEI4lXJk4ysxc+htmL3WSdzBOY7M5e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"}}]);