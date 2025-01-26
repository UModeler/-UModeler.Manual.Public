"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(86010),i=n(53438),a=n(39960),c=n(13919),d=n(95999);const l="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},78941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905)),i=n(52991);const a={slug:"/modeling-add",description:""},c="Add \uadf8\ub8f9",d={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/index",id:"editable-mesh/modeling-mode/modeling-mode-add/index",title:"Add \uadf8\ub8f9",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-add/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling-add",permalink:"/ko/docs/modeling-add",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-add/index.md",tags:[],version:"current",frontMatter:{slug:"/modeling-add",description:""},sidebar:"docs",previous:{title:"Radial Array \ubaa8\ub514\ud30c\uc774\uc5b4",permalink:"/ko/docs/modeling/radialarray-modifier"},next:{title:"Knife \ud234",permalink:"/ko/docs/modeling/Knife-tool"}},l={},s=[],m={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-\uadf8\ub8f9"},"Add \uadf8\ub8f9"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Group",src:n(58929).Z,width:"900",height:"550"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add \uadf8\ub8f9"),"\uc740 \uc2e4\ud589\ud558\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face)\uac00 \ucd94\uac00"),"\ub418\ub294 \ud234\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4.\n\uc8fc\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ucd94\uac00"),"\ub418\uac70\ub098, ",(0,o.kt)("strong",{parentName:"p"},"\ud234\uc5d0 \uc815\uc758\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ucd94\uac00"),"\ub418\ub294 \ud234\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},58929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ModelingMode_Icon_Add-2a34ecb5cd8285026f184c85329e42d9.png"}}]);