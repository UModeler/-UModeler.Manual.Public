"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),o=r(86010),c=r(53438),a=r(39960),i=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:c},r," ",c),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},49371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));r(52991);const c={slug:"/releasenote",sidebar_position:100,description:""},a="\ub9b4\ub9ac\uc988 \ub178\ud2b8",i={unversionedId:"releasenote/index",id:"releasenote/index",title:"\ub9b4\ub9ac\uc988 \ub178\ud2b8",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/releasenote/index.md",sourceDirName:"releasenote",slug:"/releasenote",permalink:"/ko/docs/releasenote",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{slug:"/releasenote",sidebar_position:100,description:""},sidebar:"docs",previous:{title:"\uc6d4\ub4dc \uc81c\uc791",permalink:"/ko/docs/zepeto/world"},next:{title:"UModeler X",permalink:"/ko/docs/releasenote/umodelerx"}},l={},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ub9b4\ub9ac\uc988-\ub178\ud2b8"},"\ub9b4\ub9ac\uc988 \ub178\ud2b8"),(0,o.kt)("div",{class:"card-container"},(0,o.kt)("div",{class:"card"},(0,o.kt)("h3",{class:"card-title"},"UModeler X \ub9b4\ub9ac\uc988 \ub178\ud2b8"),(0,o.kt)("a",{href:"/docs/releasenote/umodelerx",class:"card-link"},"\ubc14\ub85c\uac00\uae30")),(0,o.kt)("div",{class:"card"},(0,o.kt)("h3",{class:"card-title"},"UModeler Hub \ub9b4\ub9ac\uc988 \ub178\ud2b8"),(0,o.kt)("a",{href:"/docs/releasenote/umodelerhub",class:"card-link"},"\ubc14\ub85c\uac00\uae30"))))}d.isMDXComponent=!0}}]);