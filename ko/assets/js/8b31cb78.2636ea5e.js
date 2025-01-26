"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=m(r),p=o,f=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var m=2;m<i;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),i=r(53438),c=r(39960),a=r(13919),l=r(95999);const m="cardContainer_fWXF",d="cardTitle_rnsV",s="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",s),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},57540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const c={slug:"/modeling-deform",description:"",tags:["Modeling Mode"]},a="Deform \uadf8\ub8f9",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/index",id:"editable-mesh/modeling-mode/modeling-mode-deform/index",title:"Deform \uadf8\ub8f9",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-deform/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling-deform",permalink:"/ko/docs/modeling-deform",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-deform/index.md",tags:[{label:"Modeling Mode",permalink:"/ko/docs/tags/modeling-mode"}],version:"current",frontMatter:{slug:"/modeling-deform",description:"",tags:["Modeling Mode"]},sidebar:"docs",previous:{title:"Mirror Object \ud234",permalink:"/ko/docs/modeling/mirrorobject-tool"},next:{title:"Relax Brush \ud234",permalink:"/ko/docs/modeling/relax-brush-tool"}},m={},d=[],s={toc:d};function u(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deform-\uadf8\ub8f9"},"Deform \uadf8\ub8f9"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deform Group",src:r(11059).Z,width:"1010",height:"219"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deform \uadf8\ub8f9"),"\uc740 \ud45c\uba74\uc5d0 \ubcc0\ud615\uc744 \uac00\ud558\ub294 \ube0c\ub7ec\uc2dc \ud615\ud0dc\uc758 \ud234\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},11059:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ModelingMode_Icon_Deform-70c97b82d05dec385bdba7c7903ee869.png"}}]);