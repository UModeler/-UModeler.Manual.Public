"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[45340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),o=r(86010),i=r(53438),c=r(39960),a=r(13919),s=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},13339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const c={slug:"/uveditor-misc",description:""},a="Misc Group",s={unversionedId:"editable-mesh/uv-editor/uv-editor-misc/index",id:"version-plus/editable-mesh/uv-editor/uv-editor-misc/index",title:"Misc Group",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/uv-editor/uv-editor-misc/index.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-misc",slug:"/uveditor-misc",permalink:"/docs/plus/uveditor-misc",draft:!1,tags:[],version:"plus",frontMatter:{slug:"/uveditor-misc",description:""},sidebar:"docs",previous:{title:"Fit Tool",permalink:"/docs/plus/uveditor/fit-tool"},next:{title:"Export Tool",permalink:"/docs/plus/uveditor/export-tool"}},l={},u=[],p={toc:u};function m(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"misc-group"},"Misc Group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Misc Group",src:r(37992).Z,width:"1012",height:"247"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Misc group")," in the ",(0,o.kt)("strong",{parentName:"p"},"UV Editor")," is a collection of tools for features that don't belong in any other group."),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},37992:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Icon_Misc-585970c25a79403d8728865286703b49.png"}}]);