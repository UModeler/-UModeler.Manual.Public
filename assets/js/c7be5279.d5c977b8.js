"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[68402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(67294),r=n(86010),a=n(53438),o=n(39960),l=n(13919),s=n(95999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return i.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function f(e){let{href:t,icon:n,title:a,description:o}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:a},n," ",a),o&&i.createElement("p",{className:(0,r.Z)("text--truncate",p),title:o},o))}function m(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return i.createElement(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return i.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return i.createElement(h,e);const o=(0,a.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},38215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905)),a=n(52991);const o={slug:"/installation-guide",sidebar_position:1},l="Installation Guide",s={unversionedId:"ai-texturing/installation-guide/index",id:"version-basic/ai-texturing/installation-guide/index",title:"Installation Guide",description:"UModeler X's AI texturing integrates with the Stable Diffusion web UI, providing a feature that allows for easy application of images to models. To use AI texturing, the Stable Diffusion web UI must be installed.",source:"@site/versioned_docs/version-basic/ai-texturing/installation-guide/index.md",sourceDirName:"ai-texturing/installation-guide",slug:"/installation-guide",permalink:"/docs/basic/installation-guide",draft:!1,tags:[],version:"basic",sidebarPosition:1,frontMatter:{slug:"/installation-guide",sidebar_position:1},sidebar:"docs",previous:{title:"AI Texturing",permalink:"/docs/basic/ai-texturing"},next:{title:"Git Installation",permalink:"/docs/basic/git-installation"}},c={},u=[{value:"<strong>Installation Sequence</strong>",id:"installation-sequence",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UModeler X's AI texturing")," integrates with the ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),", providing a feature that allows for easy application of images to models. To use AI texturing, the ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI")," must be installed."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI")," is a browser interface that facilitates the use of ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion"),", featuring a user-friendly **web-based interface 88along with various functionalities."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installation-sequence"},(0,r.kt)("strong",{parentName:"h2"},"Installation Sequence")),(0,r.kt)("p",null,"To install the ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),", follow the sequence outlined in the image provided.\n",(0,r.kt)("img",{alt:"Alt text",src:n(51352).Z,width:"2167",height:"1041"})),(0,r.kt)("p",null,"The installation process begins with the ",(0,r.kt)("strong",{parentName:"p"},"installation of Git"),", which you can start by clicking the button below."),(0,r.kt)(a.Z,{items:[{type:"link",label:"Git Installation",href:"/docs/git-installation"}],mdxType:"DocCardList"}))}d.isMDXComponent=!0},51352:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Install-82c5fbea3fe7afd1b647e4298916a8ba.png"}}]);