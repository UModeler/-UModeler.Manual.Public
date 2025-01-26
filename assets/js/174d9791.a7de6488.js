"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[18449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(67294),r=n(86010),i=n(53438),l=n(39960),a=n(13919),c=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return o.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:i,description:l}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},n," ",i),l&&o.createElement("p",{className:(0,r.Z)("text--truncate",p),title:l},l))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?o.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return o.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return o.createElement(b,e);const l=(0,i.MN)(t);return o.createElement("section",{className:(0,r.Z)("row",n)},l.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},21751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=n(87462),r=(n(67294),n(3905)),i=n(52991);const l={slug:"/modeling/multi-local-settings-tool",sidebar_position:6,description:""},a="Local Settings Tool",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool",title:"Local Settings Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-local-settings-tool",permalink:"/docs/modeling/multi-local-settings-tool",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/modeling/multi-local-settings-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Boolean Tool",permalink:"/docs/modeling/boolean-tool"},next:{title:"Mirror Object Tool",permalink:"/docs/modeling/multi-mirror-object-tool"}},s={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-settings-tool"},"Local Settings Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Local Settings Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Multiple Objects Group")," is a tool used to manage and adjust the ",(0,r.kt)("strong",{parentName:"p"},"local settings")," of multiple selected objects."),(0,r.kt)("p",null,"It is the same as the ",(0,r.kt)("strong",{parentName:"p"},"Local Settings")," in the ",(0,r.kt)("strong",{parentName:"p"},"Misc Group"),", except that it can be applied to multiple objects at once."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"how-it-differs-from-the-local-settings-tool-in-the-misc-group"},"How it differs from the ",(0,r.kt)("strong",{parentName:"h2"},"Local Settings Tool")," in the ",(0,r.kt)("strong",{parentName:"h2"},"Misc Group")),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Local Settings Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Misc Group")," is different in that it can only set the ",(0,r.kt)("strong",{parentName:"p"},"local settings")," for the one model that is selected and being edited."),(0,r.kt)(i.Z,{items:[{type:"link",label:"Local Settings Tool",href:"/docs/modeling/local-settings-tool"}],mdxType:"DocCardList"})))}d.isMDXComponent=!0}}]);