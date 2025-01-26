"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[11974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),o=n(86010),i=n(53438),l=n(39960),a=n(13919),c=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:i,description:l}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:i},n," ",i),l&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:l},l))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const l=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},20937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),i=n(52991);const l={slug:"/modeling/multi-local-settings-tool",sidebar_position:6,description:""},a="Local Settings \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool",title:"Local Settings \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/local-settings-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-local-settings-tool",permalink:"/ko/docs/modeling/multi-local-settings-tool",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/modeling/multi-local-settings-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Boolean \ud234",permalink:"/ko/docs/modeling/boolean-tool"},next:{title:"Mirror Object \ud234",permalink:"/ko/docs/modeling/multi-mirror-object-tool"}},s={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-settings-\ud234"},"Local Settings \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Multiple Objects \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Local Settings \ud234"),"\uc740 \uc120\ud0dd\ub41c \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8\uc758 \ub85c\uceec \uc124\uc815\uc744 \uad00\ub9ac\ud558\uace0 \uc870\uc815\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Local Settings \ud234"),"\uacfc \uac19\uc9c0\ub9cc, \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8\uc5d0 \ud55c \ubc88\uc5d0 \uc801\uc6a9 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"misc-\uadf8\ub8f9\uc758-local-settings-\ud234\uacfc-\ub2e4\ub978-\uc810"},(0,o.kt)("strong",{parentName:"h2"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"h2"},"Local Settings \ud234"),"\uacfc \ub2e4\ub978 \uc810"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Local Settings \ud234"),"\uc740 \uc120\ud0dd\ub418\uc5b4 \ud3b8\uc9d1\uc911\uc778 \ud558\ub098\uc758 \ubaa8\ub378\uc5d0 \ub300\ud574\uc11c\ub9cc ",(0,o.kt)("strong",{parentName:"p"},"\ub85c\uceec \uc124\uc815"),"\uc744 \uad00\ub9ac \ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \ub2e4\ub978\uc810\uc785\ub2c8\ub2e4."),(0,o.kt)(i.Z,{items:[{type:"link",label:"Local Settings \ud234",href:"/docs/modeling/local-settings-tool"}],mdxType:"DocCardList"})))}d.isMDXComponent=!0}}]);