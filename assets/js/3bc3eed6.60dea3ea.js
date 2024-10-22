"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=l(n),c=r,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/painting-mode",description:""},o="Painting Mode",s={unversionedId:"editable-mesh/painting-mode/index",id:"editable-mesh/painting-mode/index",title:"Painting Mode",description:"",source:"@site/docs/editable-mesh/painting-mode/index.md",sourceDirName:"editable-mesh/painting-mode",slug:"/painting-mode",permalink:"/docs/painting-mode",draft:!1,tags:[],version:"current",frontMatter:{slug:"/painting-mode",description:""},sidebar:"docs",previous:{title:"Flip Tool",permalink:"/docs/modeling/flip-tool"},next:{title:"Painting Mode Guide",permalink:"/docs/painting-guide"}},p={},l=[{value:"<strong>Starting Painting Mode</strong>",id:"starting-painting-mode",level:2},{value:"UV Unwrap",id:"uv-unwrap",level:3},{value:"Materials",id:"materials",level:3},{value:"<strong>Interface</strong>",id:"interface",level:2},{value:"Painting 2D",id:"painting-2d",level:3},{value:"Material Group",id:"material-group",level:3},{value:"Layers Group",id:"layers-group",level:3},{value:"Properties Group",id:"properties-group",level:3},{value:"Map Source group",id:"map-source-group",level:3}],g={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"painting-mode"},"Painting Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Painting Mode",src:n(70120).Z,width:"2161",height:"1540"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Painting mode")," is used for coloring models, allowing the expression of colors and the creation of textures through the use of layers and brushes."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"starting-painting-mode"},(0,r.kt)("strong",{parentName:"h2"},"Starting Painting Mode")),(0,r.kt)("p",null,"To use the Painting mode, you must first go through the setup process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Painting Mode Start",src:n(20587).Z,width:"949",height:"457"})),(0,r.kt)("h3",{id:"uv-unwrap"},"UV Unwrap"),(0,r.kt)("p",null,"This property is displayed if the model does not have UVs unwrapped. If the UVs have been edited in the UV Editor, this property will not be displayed.\n",(0,r.kt)("img",{alt:"Painting Mode UV ",src:n(37074).Z,width:"949",height:"609"})),(0,r.kt)("h3",{id:"materials"},"Materials"),(0,r.kt)("p",null,"This is a property for selecting the material to be used for painting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Resolution")," : This property allows you to select the texture resolution for painting. It can be changed during the painting process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Material Template")," : This property is for setting predefined map sources to be used in painting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Background Color")," : This property allows you to set the base color that will serve as the background during painting. It can be changed during the painting process.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"interface"},(0,r.kt)("strong",{parentName:"h2"},"Interface")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Painting Mode Interface",src:n(58792).Z,width:"2170",height:"2051"})),(0,r.kt)("h3",{id:"painting-2d"},"Painting 2D"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Painting 2D tool")," is an editor-style tool that synchronizes with the painting mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Painting 2D",src:n(5384).Z,width:"1622",height:"1268"})),(0,r.kt)("h3",{id:"material-group"},"Material Group"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Material group")," in ",(0,r.kt)("strong",{parentName:"p"},"Painting mode")," is a collection of properties related to selecting the material for painting or to the representation of materials in the scene."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Material Group",src:n(32661).Z,width:"1365",height:"330"})),(0,r.kt)("h3",{id:"layers-group"},"Layers Group"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Layer group")," in ",(0,r.kt)("strong",{parentName:"p"},"Painting mode")," is a collection of tools for managing and editing layers, along with a display of the layers themselves."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Layers Group",src:n(50879).Z,width:"1365",height:"549"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Layer Mask")," : This is a feature that masks a specific area of a layer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Group layers")," : This is a type of layer that integrates layers into a hierarchical structure for management.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Paint Layers")," : This is a layer that allows coloring with a brush applied with color or an image to the map source.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fill layers")," : This type of layer applies an image across the whole map source, effectively covering the entire 3D model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sticker Layers")," : This is a type of layer that represents sticking an image onto the surface."))),(0,r.kt)("h3",{id:"properties-group"},"Properties Group"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Properties group")," is an area where the content changes ",(0,r.kt)("strong",{parentName:"p"},"depending on the selected tool or layer"),", displaying properties related to the selected feature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Properties Group",src:n(83291).Z,width:"1365",height:"658"})),(0,r.kt)("h3",{id:"map-source-group"},"Map Source group"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Map Source group")," is a collection of properties for setting the texture's resolution, the map source's format, and managing map sources, including adding and deleting them."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Map Source Group",src:n(14598).Z,width:"1365",height:"610"})))}d.isMDXComponent=!0},58792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Interface-8fa33243eb61b0e7b2e71a4c0cf6762b.png"},50879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Layers-7340823684b0d4e49b2c054dc0a9d5cb.png"},70120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Main-a22b47c45a79fbe29f238b45665f71dd.png"},14598:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_MapSource-71bf63ac17adf5afcd047da47116ea7c.png"},32661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Materials-26ca569594b9789cb4b6e5db1e0b1ba3.png"},5384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Painting2D_Interface-5eb558c37d5c5e13722ea17402708c86.png"},83291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Properties-95c348b0f7735c4ad9e6355e79c6747e.png"},20587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_Start-e99f1e23015423c0c949aa45f9bdd764.png"},37074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PaintingMode_UVUnwrap-83adc48523b4464d3aa4fbc532b77a7d.png"}}]);