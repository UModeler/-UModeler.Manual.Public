"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||l;return r?o.createElement(g,a(a({ref:t},d),{},{components:r})):o.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(67294),n=r(86010),l=r(53438),a=r(39960),i=r(13919),c=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return o.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:l,description:a}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:l},r," ",l),a&&o.createElement("p",{className:(0,n.Z)("text--truncate",p),title:a},a))}function g(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?o.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,l.jA)();return o.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return o.createElement(x,e);const a=(0,l.MN)(t);return o.createElement("section",{className:(0,n.Z)("row",r)},a.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},7782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),l=r(52991);const a={slug:"/modeling/vertexcolor-tool",sidebar_position:5,description:""},i="Vertex Color Tool",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/vertexcolor-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/vertexcolor-tool",title:"Vertex Color Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-surface/vertexcolor-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/vertexcolor-tool",permalink:"/docs/modeling/vertexcolor-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/vertexcolor-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Vertex Color Brush Tool",permalink:"/docs/modeling/vertexcolor-brush-tool"},next:{title:"Face Color Tool",permalink:"/docs/modeling/facecolor-tool"}},s={},d=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>VertexColor</strong>",id:"vertexcolor",level:3},{value:"View Vertex Color",id:"view-vertex-color",level:3},{value:"Vertex Color",id:"vertex-color",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>Usage Example</strong>",id:"usage-example",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vertex-color-tool"},"Vertex Color Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vertex Color Tool",src:r(99525).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Vertex Color tool")," is a tool that applies a vertex color to selected vertices."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"for-the-vertex-color"},"For the ",(0,n.kt)("strong",{parentName:"h2"},"Vertex Color")),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Vertex Color")," is the ",(0,n.kt)("strong",{parentName:"p"},"color information stored on a vertex"),". Colors between vertices are automatically interpolated, and can be used for a variety of purposes.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use-it"},(0,n.kt)("strong",{parentName:"h2"},"How to use it")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Vertex Color tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Enable the ",(0,n.kt)("strong",{parentName:"li"},"View Vertex Color property"),", which will display the object's vertex colors.\n",(0,n.kt)("img",{alt:"View Vertex Color",src:r(48464).Z,width:"892",height:"438"})),(0,n.kt)("li",{parentName:"ol"},"Select the vertices you want to apply the vertex color to.\n",(0,n.kt)("img",{alt:"Select Vertex",src:r(37297).Z,width:"960",height:"640"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click"))," on the Vertex Color property to change it to the desired color.\n",(0,n.kt)("img",{alt:"Vertex Color",src:r(53041).Z,width:"1175",height:"566"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click"))," the ",(0,n.kt)("strong",{parentName:"li"},"Apply Color")," button to apply the vertex color.\n",(0,n.kt)("img",{alt:"Confirm",src:r(50066).Z,width:"960",height:"640"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vertex Color Properties",src:r(33138).Z,width:"890",height:"454"})),(0,n.kt)("h3",{id:"vertexcolor"},(0,n.kt)("strong",{parentName:"h3"},"VertexColor")),(0,n.kt)("h3",{id:"view-vertex-color"},"View Vertex Color"),(0,n.kt)("p",null,"Property that displays the object's vertex color."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"View Vertex Color",src:r(39612).Z,width:"1920",height:"640"})),(0,n.kt)("h3",{id:"vertex-color"},"Vertex Color"),(0,n.kt)("p",null,"Property that allows you to specify the vertex color."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vertex Color",src:r(53041).Z,width:"1175",height:"566"})),(0,n.kt)("h3",{id:"select"},(0,n.kt)("strong",{parentName:"h3"},"Select")),(0,n.kt)("p",null,"Properties that allow you to set how vertices are selected."),(0,n.kt)(l.Z,{items:[{type:"link",label:"Backface Select",href:"/docs/vertex-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/docs/vertex-element#camera-based-select"}],mdxType:"DocCardList"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"usage-example"},(0,n.kt)("strong",{parentName:"h2"},"Usage Example")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/aOvrylWjcjc",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},99525:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor-403c9274d6128f00ad57a1756cfc1db1.png"},50066:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_Confirm-89341e7846468ccb5ab41d0b6017e44a.png"},33138:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_Properties-807da25bd36968b468e6f1cb741f9d2d.png"},37297:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_SelectVertex-8e908064138c5b3dfd2fa03bac2283d7.png"},53041:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_VertexColor-f9e8847ab1e66bc95d9189892a88d106.png"},39612:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_ViewVertexColor-8a428b94c80f3881b0718a2a562e8bbe.png"},48464:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Surface_VertexColor_ViewVertexColor_Mouse-3953a6e5c404aae5f7efeb7d2b436327.png"}}]);