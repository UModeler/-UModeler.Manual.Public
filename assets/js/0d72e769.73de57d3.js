"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4,slug:"/painting/fill-layer"},l="Fill Layer",o={unversionedId:"editable-mesh/painting-mode/painting-mode-layer/fill-layer",id:"editable-mesh/painting-mode/painting-mode-layer/fill-layer",title:"Fill Layer",description:"A Fill Layer is a layer that covers the entire model with the values from the map source itself.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/painting-mode-layer/fill-layer.md",sourceDirName:"editable-mesh/painting-mode/painting-mode-layer",slug:"/painting/fill-layer",permalink:"/docs/painting/fill-layer",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/painting/fill-layer"},sidebar:"docs",previous:{title:"Paint Layer",permalink:"/docs/painting/paint-layer"},next:{title:"Sticker Layer",permalink:"/docs/painting/sticker-layer"}},p={},s=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Paint Layer Properties group properties</strong>",id:"paint-layer-properties-group-properties",level:2},{value:"Tilling",id:"tilling",level:3},{value:"Offset",id:"offset",level:3},{value:"MapSource",id:"mapsource",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fill-layer"},"Fill Layer"),(0,a.kt)("p",null,"A Fill Layer is a layer that covers the entire model with the values from the map source itself."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h2"},"How to Use")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"click the ",(0,a.kt)("strong",{parentName:"li"},"Add Layer button"),"."),(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("strong",{parentName:"li"},"Fill Layer")," with the ",(0,a.kt)("strong",{parentName:"li"},"Add Fill Layer Properties"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"paint-layer-properties-group-properties"},(0,a.kt)("strong",{parentName:"h2"},"Paint Layer Properties group properties")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Properties group")," is an area where the ",(0,a.kt)("strong",{parentName:"p"},"content")," varies depending on the feature selected, such as a tool or layer."),(0,a.kt)("p",null,"When the ",(0,a.kt)("strong",{parentName:"p"},"Fill layer")," is selected, the properties displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Properties group")," are shown below."),(0,a.kt)("h3",{id:"tilling"},"Tilling"),(0,a.kt)("p",null,"This property sets how much the applied map source's texture repeats."),(0,a.kt)("h3",{id:"offset"},"Offset"),(0,a.kt)("p",null,"This property sets the amount by which the applied map source's texture is shifted."),(0,a.kt)("h3",{id:"mapsource"},"MapSource"),(0,a.kt)("p",null,"This property allows you to set the map source to be applied."))}c.isMDXComponent=!0}}]);