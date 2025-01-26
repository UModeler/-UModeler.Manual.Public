"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),i=r(86010),a=r(53438),o=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},70166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),a=r(52991);const o={slug:"/ai-texturing",sidebar_position:4},c="AI Texturing",l={unversionedId:"ai-texturing/index",id:"ai-texturing/index",title:"AI Texturing",description:"Alt text",source:"@site/docs/ai-texturing/index.md",sourceDirName:"ai-texturing",slug:"/ai-texturing",permalink:"/docs/ai-texturing",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ai-texturing",sidebar_position:4},sidebar:"docs",previous:{title:"Detach Tool",permalink:"/docs/uveditor/detach-tool"},next:{title:"Installation Guide",permalink:"/docs/installation-guide"}},s={},u=[],d={toc:u};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ai-texturing"},"AI Texturing"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Alt text",src:r(16680).Z,width:"1900",height:"960"}),"\n",(0,i.kt)("img",{alt:"Alt text",src:r(23518).Z,width:"1960",height:"560"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://nerdystar.io/"},(0,i.kt)("strong",{parentName:"a"},"made with UModeler X by nerdystar")))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"AI texturing feature")," of ",(0,i.kt)("strong",{parentName:"p"},"UModeler X")," is integrated with the ",(0,i.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),", allowing you to easily apply images to models. By utilizing this feature, you can complete complex and time-consuming texture work quickly and easily."),(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/hM9w-o4YSdw",frameborder:"0",allowfullscreen:""})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/38wyYDAfj7I",frameborder:"0",allowfullscreen:""})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The guide documents explain the overall process for using AI texturing, from ",(0,i.kt)("strong",{parentName:"p"},"installation")," to ",(0,i.kt)("strong",{parentName:"p"},"usage methods")," and ",(0,i.kt)("strong",{parentName:"p"},"recommended settings"),". Detailed guidance is provided, along with ",(0,i.kt)("strong",{parentName:"p"},"step-by-step instructional videos"),"."),(0,i.kt)(a.Z,{items:[{type:"link",label:"Installation Guide",href:"/docs/installation-guide"},{type:"link",label:"Usage Guide",href:"/docs/usage-guide"}],mdxType:"DocCardList"}))}m.isMDXComponent=!0},16680:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/character-umodelder-image01-26ee3fb6ca92cc500ba8cc36ed8c7f55.gif"},23518:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/character-umodelder-image02-3e5793b21e0c69cf4533baa966e302d0.gif"}}]);