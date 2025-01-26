"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[93724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),o=n(86010),a=n(53438),i=n(39960),l=n(13919),s=n(95999);const c="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",c)},n)}function u(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",m),title:i},i))}function g(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}},6450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(52991);const i={slug:"/modeling/insertvertex-tool",sidebar_position:11,description:""},l="Insert Vertex \ud234",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/insertvertex-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/insertvertex-tool",title:"Insert Vertex \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-add/insertvertex-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/insertvertex-tool",permalink:"/ko/docs/modeling/insertvertex-tool",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{slug:"/modeling/insertvertex-tool",sidebar_position:11,description:""},sidebar:"docs",previous:{title:"Inset \ud234",permalink:"/ko/docs/modeling/inset-tool"},next:{title:"Linear Array \ud234",permalink:"/ko/docs/modeling/lineararray-tool"}},c={},d=[{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Display",id:"display",level:2},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Select",id:"select",level:2},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],m={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"insert-vertex-\ud234"},"Insert Vertex \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Insert Vertex Tool",src:n(82753).Z,width:"1740",height:"590"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Insert Vertex \ud234"),"\uc740 \uc6d0\ud558\ub294 \uc5e3\uc9c0 \uc704\uc5d0 \ubc84\ud14d\uc2a4\ub97c \ucd94\uac00\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Insert Vertex \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uc5e3\uc9c0 \uc704, \ubc84\ud14d\uc2a4\ub97c \ucd94\uac00\ud558\uace0\uc790 \ud558\ub294 \uacf3\uc744 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Insert Vertex Tool",src:n(94537).Z,width:"856",height:"482"})),(0,o.kt)("li",{parentName:"ol"},"\uc5e3\uc9c0 \uc704\uc5d0 \ubc84\ud14d\uc2a4\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Insert Vertex Tool",src:n(39422).Z,width:"856",height:"482"}))),(0,o.kt)("admonition",{title:"\ud301",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"insert-vertex-\ud234-\uc2a4\ub0c5"},(0,o.kt)("strong",{parentName:"h2"},"Insert Vertex \ud234 \uc2a4\ub0c5")),(0,o.kt)("p",{parentName:"admonition"},"\uc810\uc758 \uc0c9\uc0c1\uc740 \uc5e3\uc9c0 \uc704 ",(0,o.kt)("strong",{parentName:"p"},"\ucee4\uc11c \uc704\uce58"),"\uc5d0 \ub530\ub77c \ub178\ub780\uc0c9\uacfc \ub179\uc0c9\uc73c\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Insert Vertex Tool vertex tip",src:n(79007).Z,width:"1624",height:"496"})),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\ub178\ub780\uc0c9:")," \uc5e3\uc9c0\uc758 \uc815\uc911\uc559\n",(0,o.kt)("strong",{parentName:"p"},"\ub179\uc0c9:")," \uc5e3\uc9c0\uc758 \uc815\uc911\uc559\uc774 \uc544\ub2cc \uc704\uce58"),(0,o.kt)("admonition",{parentName:"admonition",title:"\ucc38\uace0",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ud574\ub2f9 \ubc29\uc2dd\uc740 \uc5d0\ub514\ud130\uc5d0 \ub178\ucd9c\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("h2",{id:"display"},"Display"),(0,o.kt)("p",null,"\uba54\uc2dc\uc758 \ud45c\ud604 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,o.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,o.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Face XRay Mode",src:n(66734).Z,width:"1920",height:"640"})),(0,o.kt)("h2",{id:"select"},"Select"),(0,o.kt)("p",null,"\uc5e3\uc9c0\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)(a.Z,{items:[{type:"link",label:"Backface Select",href:"/ko/docs/edge-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/ko/docs/edge-element#camera-based-select"}],mdxType:"DocCardList"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/BAOhFNp6Q10",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},82753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Add_InsertVertex-12c14a9503643ed5cf06c95238d5a794.png"},94537:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Add_InsertVertex_1-cbc5671954970820461c50dc74bee19f.png"},39422:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Add_InsertVertex_2-c49c2751ea738ed92360a1e09f55a852.png"},79007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Add_InsertVertex_tip-b0143eae4464102d6efa42a3fdccaa33.png"},66734:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Element_Face_Xray-d30e1a22e6cbc67ff6d6a40915594730.png"}}]);