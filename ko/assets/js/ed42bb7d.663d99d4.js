"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},91835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));r(52991);const i={slug:"/ai-texturing",sidebar_position:4},o="AI \ud14d\uc2a4\ucc98\ub9c1",c={unversionedId:"ai-texturing/index",id:"ai-texturing/index",title:"AI \ud14d\uc2a4\ucc98\ub9c1",description:"Alt text",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ai-texturing/index.md",sourceDirName:"ai-texturing",slug:"/ai-texturing",permalink:"/ko/docs/ai-texturing",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ai-texturing",sidebar_position:4},sidebar:"docs",previous:{title:"Detach \ud234",permalink:"/ko/docs/uveditor/detach-tool"},next:{title:"\uc124\uce58 \uac00\uc774\ub4dc",permalink:"/ko/docs/installation-guide"}},l={},s=[],u={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-\ud14d\uc2a4\ucc98\ub9c1"},"AI \ud14d\uc2a4\ucc98\ub9c1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Alt text",src:r(3758).Z,width:"1900",height:"960"}),"\n",(0,a.kt)("img",{alt:"Alt text",src:r(64175).Z,width:"1960",height:"560"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://nerdystar.io/"},(0,a.kt)("strong",{parentName:"a"},"made with UModeler X by nerdystar")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UModeler X"),"\uc758 ",(0,a.kt)("strong",{parentName:"p"},"AI \ud14d\uc2a4\ucc98\ub9c1 \uae30\ub2a5"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\uc640 ",(0,a.kt)("strong",{parentName:"p"},"\uc5f0\ub3d9"),"\ub418\uc5b4 \ubaa8\ub378\uc5d0 \uc774\ubbf8\uc9c0\ub97c \uc27d\uac8c \uc785\ud790 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uba74, \ubcf5\uc7a1\ud558\uace0 \uc2dc\uac04\uc774 \uac78\ub9ac\ub294 \ud14d\uc2a4\ucc98 \uc791\uc5c5\uc744 \ube60\ub974\uace0 \uac04\ud3b8\ud558\uac8c \uc644\ub8cc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("div",{class:"video-container"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/7WUw1_smV54",frameborder:"0",allowfullscreen:""})),(0,a.kt)("br",null),(0,a.kt)("div",{class:"video-container"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/38wyYDAfj7I",frameborder:"0",allowfullscreen:""})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud574\ub2f9 \uac00\uc774\ub4dc \ubb38\uc11c\uc5d0\uc11c\ub294 AI \ud14d\uc2a4\ucc98\ub9c1\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc804\ubc18\uc801\uc778 \uacfc\uc815\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\uc124\uce58"),"\ubd80\ud130 ",(0,a.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9 \ubc29\ubc95"),", ",(0,a.kt)("strong",{parentName:"p"},"\ucd94\ucc9c\ud558\ub294 \uc124\uc815"),"\uae4c\uc9c0 \uc790\uc138\ud55c \uac00\uc774\ub4dc\uac00 \uc81c\uacf5\ub418\uba70, \ub2e8\uacc4\ubcc4\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\ubc29\ubc95\uc5d0 \ub300\ud55c \uc601\uc0c1"),"\ub3c4 \ud568\uaed8 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"\uc124\uce58 \uac00\uc774\ub4dc"),(0,a.kt)("a",{href:"/docs/installation-guide",class:"card-link"},"\ubc14\ub85c\uac00\uae30")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"\uc0ac\uc6a9 \uac00\uc774\ub4dc"),(0,a.kt)("a",{href:"/docs/usage-guide",class:"card-link"},"\ubc14\ub85c\uac00\uae30"))))}d.isMDXComponent=!0},3758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/character-umodelder-image01-26ee3fb6ca92cc500ba8cc36ed8c7f55.gif"},64175:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/character-umodelder-image02-3e5793b21e0c69cf4533baa966e302d0.gif"}}]);