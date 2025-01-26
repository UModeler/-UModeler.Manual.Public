"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[85039],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return o?r.createElement(f,l(l({ref:t},m),{},{components:o})):r.createElement(f,l({ref:t},m))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},52991:(e,t,o)=>{o.d(t,{Z:()=>y});var r=o(67294),n=o(86010),i=o(53438),l=o(39960),a=o(13919),s=o(95999);const c="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:o}=e;return r.createElement(l.Z,{href:t,className:(0,n.Z)("card padding--lg",c)},o)}function u(e){let{href:t,icon:o,title:i,description:l}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",m),title:i},o," ",i),l&&r.createElement("p",{className:(0,n.Z)("text--truncate",p),title:l},l))}function f(e){let{item:t}=e;const o=(0,i.Wl)(t);return o?r.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const o=(0,i.jA)();return r.createElement(y,{items:o.items,className:t})}function y(e){const{items:t,className:o}=e;if(!t)return r.createElement(b,e);const l=(0,i.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",o)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},79528:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=o(87462),n=(o(67294),o(3905)),i=o(52991);const l={slug:"/modeling/multi-reset-xform-tool",sidebar_position:3,description:""},a="Reset X Form Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool",title:"Reset X Form Tool",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-reset-xform-tool",permalink:"/docs/plus/modeling/multi-reset-xform-tool",draft:!1,tags:[],version:"plus",sidebarPosition:3,frontMatter:{slug:"/modeling/multi-reset-xform-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Pivot Tool",permalink:"/docs/plus/modeling/multi-pivot-tool"},next:{title:"Material Tool",permalink:"/docs/plus/modeling/multi-material-tool"}},c={},m=[{value:"<strong>Example</strong>",id:"example",level:2}],p={toc:m};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reset-x-form-tool"},"Reset X Form Tool"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Reset X Form Tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"Multiple Objects Group")," is a tool that resets the Position, Rotation, and Scale values of the transforms of multiple selected objects."),(0,n.kt)("p",null,"It is the same as the ",(0,n.kt)("strong",{parentName:"p"},"Reset X Form Tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"Misc Group"),", except that it can be applied to multiple objects at once."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"how-it-differs-from-the-reset-x-form-tool-in-the-misc-group"},"How it differs from the ",(0,n.kt)("strong",{parentName:"h2"},"Reset X Form Tool")," in the ",(0,n.kt)("strong",{parentName:"h2"},"Misc Group")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Reset X Form Tool",src:o(80525).Z,width:"1920",height:"640"})),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Reset X Form Tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"Misc Group")," differs in that it can only reset the Position, Rotation, and Scale values for the one model that is selected and being edited."),(0,n.kt)(i.Z,{items:[{type:"link",label:"Reset X Form Tool",href:"/docs/modeling/reset-xform-tool"}],mdxType:"DocCardList"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example"},(0,n.kt)("strong",{parentName:"h2"},"Example")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/DzonusWFHKQ",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},80525:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Misc_ResetXForm-e50f6fff484f689f10d9d46cba29b8c1.png"}}]);