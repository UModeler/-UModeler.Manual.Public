"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=m(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var m=2;m<i;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),o=r(86010),i=r(53438),c=r(39960),a=r(13919),l=r(95999);const m="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},50904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const c={slug:"/modeling-remove",description:""},a="Remove \uadf8\ub8f9",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-remove/index",id:"editable-mesh/modeling-mode/modeling-mode-remove/index",title:"Remove \uadf8\ub8f9",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-remove/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-remove",slug:"/modeling-remove",permalink:"/ko/docs/modeling-remove",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-remove/index.md",tags:[],version:"current",frontMatter:{slug:"/modeling-remove",description:""},sidebar:"docs",previous:{title:"Spiral Stair \ud234",permalink:"/ko/docs/modeling/spiral-stair-tool"},next:{title:"Detach \ud234",permalink:"/ko/docs/modeling/detach-tool"}},m={},s=[],d={toc:s};function u(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-\uadf8\ub8f9"},"Remove \uadf8\ub8f9"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remove Group",src:r(8810).Z,width:"934",height:"369"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove \uadf8\ub8f9"),"\uc740 \uc2e4\ud589\ud558\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face)\uac00 \uc0ad\uc81c"),"\n\ub418\ub294 \ud234\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc8fc\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc0ad\uc81c"),"\ub418\uac70\ub098, ",(0,o.kt)("strong",{parentName:"p"},"\ud234\uc5d0 \uc758\ud574 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ud569\uccd0\uc9c0\ub294"),"\n\ud234\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},8810:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ModelingMode_Icon_Remove-c180ac5c234429fd1e52c74e1eac67d1.png"}}]);