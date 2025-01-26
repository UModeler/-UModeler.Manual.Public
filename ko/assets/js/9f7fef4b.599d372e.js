"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[15457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),i=n(86010),o=n(53438),a=n(39960),c=n(13919),l=n(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function g(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},52405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),o=n(52991);const a={slug:"/modeling-drawing",description:""},c="Drawing \uadf8\ub8f9",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-drawing/index",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-drawing/index",title:"Drawing \uadf8\ub8f9",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-basic/editable-mesh/modeling-mode/modeling-mode-drawing/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-drawing",slug:"/modeling-drawing",permalink:"/ko/docs/basic/modeling-drawing",draft:!1,tags:[],version:"basic",frontMatter:{slug:"/modeling-drawing",description:""},sidebar:"docs",previous:{title:"Pinch Brush \ud234",permalink:"/ko/docs/basic/modeling/pinch-brush-tool"},next:{title:"PolyLine \ud234",permalink:"/ko/docs/basic/modeling/polyline-tool"}},s={},d=[],m={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drawing-\uadf8\ub8f9"},"Drawing \uadf8\ub8f9"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drawing Group",src:n(11716).Z,width:"682",height:"176"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Drawing \uadf8\ub8f9"),"\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\ud3c9\uba74 \ud615\ud0dc\uc758 \ub3c4\ud615"),"\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4. "),(0,i.kt)("hr",null),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},11716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ModelingMode_Icon_Drawing-b696f1dc13f9ed492b124a64eb7ae85d.png"}}]);