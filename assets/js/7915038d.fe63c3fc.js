"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[11206],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),u=a,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||n;return o?r.createElement(f,l(l({ref:t},d),{},{components:o})):r.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<n;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},52991:(e,t,o)=>{o.d(t,{Z:()=>b});var r=o(67294),a=o(86010),n=o(53438),l=o(39960),c=o(13919),i=o(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:o}=e;return r.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},o)}function u(e){let{href:t,icon:o,title:n,description:l}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:n},o," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:l},l))}function f(e){let{item:t}=e;const o=(0,n.Wl)(t);return o?r.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:o,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const o=(0,n.jA)();return r.createElement(b,{items:o.items,className:t})}function b(e){const{items:t,className:o}=e;if(!t)return r.createElement(k,e);const l=(0,n.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",o)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},69422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=o(87462),a=(o(67294),o(3905)),n=o(52991);const l={slug:"/modeling/facecolor-tool",sidebar_position:6,description:""},c="Face Color Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/facecolor-tool",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-surface/facecolor-tool",title:"Face Color Tool",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/modeling-mode/modeling-mode-surface/facecolor-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/facecolor-tool",permalink:"/docs/plus/modeling/facecolor-tool",draft:!1,tags:[],version:"plus",sidebarPosition:6,frontMatter:{slug:"/modeling/facecolor-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Vertex Color Tool",permalink:"/docs/plus/modeling/vertexcolor-tool"},next:{title:"UV Param Tool",permalink:"/docs/plus/modeling/uvparam-tool"}},s={},d=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>FaceColor</strong>",id:"facecolor",level:3},{value:"View Face Color",id:"view-face-color",level:3},{value:"Face Color",id:"face-color",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>Usage Example</strong>",id:"usage-example",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"face-color-tool"},"Face Color Tool"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Face Color Tool",src:o(80423).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Face Color tool")," is a tool that applies a face color to selected faces."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"for-the-face-color"},"For the ",(0,a.kt)("strong",{parentName:"h2"},"Face Color")),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Face Color")," is the ",(0,a.kt)("strong",{parentName:"p"},"color information stored on a face"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use-it"},(0,a.kt)("strong",{parentName:"h2"},"How to use it")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Face Color tool"),"."),(0,a.kt)("li",{parentName:"ol"},"Enable the ",(0,a.kt)("strong",{parentName:"li"},"View Face Color property"),", which will display the object's face colors.\n",(0,a.kt)("img",{alt:"View Face Color",src:o(50210).Z,width:"890",height:"524"})),(0,a.kt)("li",{parentName:"ol"},"Select the faces you want to apply the face color* to.\n",(0,a.kt)("img",{alt:"Select Face",src:o(80031).Z,width:"960",height:"640"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Click"))," on the Face Color property to change it to the desired color.\n",(0,a.kt)("img",{alt:"Face Color",src:o(99809).Z,width:"1175",height:"566"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Click"))," the ",(0,a.kt)("strong",{parentName:"li"},"Apply Color")," button to apply the face color.\n",(0,a.kt)("img",{alt:"Confirm",src:o(86742).Z,width:"960",height:"640"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("strong",{parentName:"h2"},"Properties")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Face Color Properties",src:o(77479).Z,width:"890",height:"524"})),(0,a.kt)("h3",{id:"facecolor"},(0,a.kt)("strong",{parentName:"h3"},"FaceColor")),(0,a.kt)("h3",{id:"view-face-color"},"View Face Color"),(0,a.kt)("p",null,"Property that displays the object's face color."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"View Face Color",src:o(86304).Z,width:"1920",height:"640"})),(0,a.kt)("h3",{id:"face-color"},"Face Color"),(0,a.kt)("p",null,"Property that allows you to specify the face color."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Face Color",src:o(99809).Z,width:"1175",height:"566"})),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"Properties that allow you to set how faces are selected."),(0,a.kt)(n.Z,{items:[{type:"link",label:"Backface Select",href:"/docs/face-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/docs/face-element#camera-based-select"}],mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"usage-example"},(0,a.kt)("strong",{parentName:"h2"},"Usage Example")),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/7PM2a91jBeQ",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},80423:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor-888a435be493bd0fa6048da4c5a6cc8e.png"},86742:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_Confirm-76bc030d438c1d37d280073d3c85e3f5.png"},99809:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_FaceColor-4d2baf716589ed47a14189e96fab4358.png"},77479:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_Properties-6f9ec761a4bdcbbbb71ed97568c5a078.png"},80031:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_SelectFace-240ea37876a0533f88c67ed3ae4d94db.png"},86304:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_ViewFaceColor-46ade35b9300f16d5b49b247adea7ae5.png"},50210:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Surface_FaceColor_ViewFaceColor_Mouse-4d39cd9cb8ef7dbf6611a4962cceabb7.png"}}]);