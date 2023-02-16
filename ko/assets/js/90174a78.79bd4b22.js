"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),l=n(6010),a=n(3438),o=n(9960),i=n(3919),c=n(5999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,l.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,l.Z)("text--truncate",m),title:a},n," ",a),o&&r.createElement("p",{className:(0,l.Z)("text--truncate",p),title:o},o))}function g(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:l?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,l.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(7462),l=(n(7294),n(3905)),a=n(2991);const o={slug:"/modeling-element"},i="Element \uadf8\ub8f9",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/index",id:"editable-mesh/modeling-mode/modeling-mode-element/index",title:"Element \uadf8\ub8f9",description:"Element \uadf8\ub8f9\uc740 \ubaa8\ub378\ub9c1 \ubaa8\ub4dc \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud558\uba70 \uac01 \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face, Object)\uc5d0 \uad00\ud55c \uc18d\uc131\uc774 \ubaa8\uc5ec \uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-element/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/modeling-element",permalink:"/ko/docs/modeling-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/modeling-mode/modeling-mode-element/index.md",tags:[],version:"current",frontMatter:{slug:"/modeling-element"},sidebar:"tutorialSidebar",previous:{title:"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc \uc2dc\uc791\ud558\uae30",permalink:"/ko/docs/modeling-start"},next:{title:"\ubc84\ud14d\uc2a4",permalink:"/ko/docs/vertex-element"}},s={},m=[{value:"<strong>\ud3b8\uc9d1\ud560 \uc5d8\ub9ac\uba3c\ud2b8 \ubcc0\uacbd</strong>",id:"\ud3b8\uc9d1\ud560-\uc5d8\ub9ac\uba3c\ud2b8-\ubcc0\uacbd",level:2},{value:"<strong>\uacf5\ud1b5 \uc18d\uc131</strong>",id:"\uacf5\ud1b5-\uc18d\uc131",level:2},{value:"<strong>Display</strong>",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:3},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"element-\uadf8\ub8f9"},"Element \uadf8\ub8f9"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9"),"\uc740 \ubaa8\ub378\ub9c1 \ubaa8\ub4dc \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud558\uba70 ",(0,l.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(",(0,l.kt)("inlineCode",{parentName:"strong"},"Vertex"),", ",(0,l.kt)("inlineCode",{parentName:"strong"},"Edge"),", ",(0,l.kt)("inlineCode",{parentName:"strong"},"Face"),", ",(0,l.kt)("inlineCode",{parentName:"strong"},"Object")),")\uc5d0 \uad00\ud55c \uc18d\uc131\uc774 \ubaa8\uc5ec \uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud3b8\uc9d1\ud560-\uc5d8\ub9ac\uba3c\ud2b8-\ubcc0\uacbd"},(0,l.kt)("strong",{parentName:"h2"},"\ud3b8\uc9d1\ud560 \uc5d8\ub9ac\uba3c\ud2b8 \ubcc0\uacbd")),(0,l.kt)("p",null,"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc\uc758 ",(0,l.kt)("strong",{parentName:"p"},"\uc6d0\ubcf8 \uba54\uc2dc Source Mesh"),"\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd \ud6c4 \ud3b8\uc9d1"),"\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"3\uac00\uc9c0 \ud3b8\uc9d1 \uac00\ub2a5\ud55c \uc5d8\ub9ac\uba3c\ud2b8(",(0,l.kt)("strong",{parentName:"p"},"Vertex"),", ",(0,l.kt)("strong",{parentName:"p"},"Edge"),", ",(0,l.kt)("strong",{parentName:"p"},"Face"),")\uc640 \ud3b8\uc9d1 \uc0c1\ud0dc\uc5d0\uc11c \ube60\uc838\ub098\uc624\ub294 ",(0,l.kt)("strong",{parentName:"p"},"Object"),"\uac00 \uc788\uc73c\uba70 ",(0,l.kt)("strong",{parentName:"p"},"\uc52c(Scene)")," \uc0c1\ub2e8 \uc544\uc774\ucf58\ub4e4\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uc5d8\ub9ac\uba3c\ud2b8\ub85c \ud3b8\uc9d1\ud560\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd\uc5d0 \ub530\ub77c ",(0,l.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9 \ub0b4"),"\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uacfc \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub300\ud55c \ud398\uc774\uc9c0\ub97c \ud1b5\ud574 \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub300\ud55c \uc124\uba85\uacfc \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd\uc5d0 \ub530\ub978 \uc18d\uc131\uc744 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{mdxType:"DocCardList"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uacf5\ud1b5-\uc18d\uc131"},(0,l.kt)("strong",{parentName:"h2"},"\uacf5\ud1b5 \uc18d\uc131")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Element \uadf8\ub8f9"),"\uc5d0\uc11c \uac01 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ub418\ub294 \uc18d\uc131\ub4e4\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"display"},(0,l.kt)("strong",{parentName:"h3"},"Display")),(0,l.kt)("p",null,"\uba54\uc2dc\uc758 \ud45c\uc2dc \ubc29\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,l.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,l.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\ud301",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"XRay Mode \uc18d\uc131"),"\uc744 \uc774\uc6a9\ud558\uba74 \ubcf5\uc7a1\ud55c \ubaa8\ub378\uc758 \ub4b7\uba74\uc5d0 \uc788\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uc190\uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,l.kt)("p",null,"\uc5e3\uc9c0\ub97c \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uc228\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"select"},(0,l.kt)("strong",{parentName:"h3"},"Select")),(0,l.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"backface-select"},"Backface Select"),(0,l.kt)("p",null,"\ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\uace0 \uc788\ub294 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc120\ud0dd \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub3c4 \ud568\uaed8 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,l.kt)("p",null,"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c \ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \uc5d8\ub9ac\uba3c\ud2b8\ub9cc \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \uc5d8\ub9ac\uba3c\ud2b8\ub3c4 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \uc5d8\ub9ac\uba3c\ud2b8\ub294 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"soft-select"},(0,l.kt)("strong",{parentName:"h3"},"Soft Select")),(0,l.kt)("p",null,"\uc52c(Scene)\uc5d0 \uc120\ud0dd\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uc640 \uc778\uc811\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,l.kt)("strong",{parentName:"p"},"\uac00\uc911\uce58\uc5d0 \ub530\ub77c \uc120\ud0dd"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac00\uc911\uce58\uc5d0 \ub530\ub77c \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uc640 \uc124\uc815\ud55c \ubc94\uc704\uac00 \uceec\ub7ec\ub85c \ud45c\uc2dc\ub418\uba70, \ub300\uccb4\ub85c \ubd80\ub4dc\ub7ec\uc6b4 \uc6d0\ud615\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Soft Selection"),"\uc744 \ud65c\uc131\ud654\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,l.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Soft Selection"),"\uc758 \uac00\uc911\uce58 \ubaa8\uc591\uc744 \uacb0\uc815\ud558\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uadf8\ub798\ud504 \ud615\ud0dc\uc758 \uc18d\uc131"),"\uc785\ub2c8\ub2e4.\n",(0,l.kt)("strong",{parentName:"p"},"Soft Selection Curve \uc18d\uc131")," \uc606 \uadf8\ub798\ud504\ub97c \ub204\ub974\uba74 \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Curve \ud615\ud0dc \uc608\uc2dc")),(0,l.kt)("p",null,"Curve \ud615\ud0dc \ubcc4 \uc120\ud0dd \ubaa8\uc591 \ubcc0\ud654 \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,l.kt)("p",null,"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ubd80\ud130 \uc18c\ud504\ud2b8\uc140\ub809\uc158\uc774 \uc801\uc6a9\ub418\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ubc94\uc704\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc720\ub2c8\ud2f0 \uae30\uc900 ",(0,l.kt)("strong",{parentName:"p"},"1m = 1.0"),"\uc774\uae30 \ub54c\ubb38\uc5d0, ",(0,l.kt)("strong",{parentName:"p"},"0.5")," \uc758 \uacbd\uc6b0 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub85c\ubd80\ud130 ",(0,l.kt)("strong",{parentName:"p"},"50cm")," \uae4c\uc9c0 \uc120\ud0dd\ub429\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);