"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[94506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={slug:"/modeling/move-brush-tool",sidebar_position:5,description:""},l="Move Brush Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/move-brush-tool",id:"editable-mesh/modeling-mode/modeling-mode-deform/move-brush-tool",title:"Move Brush Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-deform/move-brush-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling/move-brush-tool",permalink:"/docs/modeling/move-brush-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/move-brush-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Flatten Brush Tool",permalink:"/docs/modeling/flatten-brush-tool"},next:{title:"Pinch Brush Tool",permalink:"/docs/modeling/pinch-brush-tool"}},i={},u=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Brush Radius",id:"brush-radius",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"move-brush-tool"},"Move Brush Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Move Brush Tool",src:r(79457).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Move Brush tool")," is a brush-like tool that ",(0,n.kt)("strong",{parentName:"p"},"pulls on a vertex"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch the Move Brush tool."),(0,n.kt)("li",{parentName:"ol"},"adjust the desired properties."),(0,n.kt)("li",{parentName:"ol"},"Move the mouse cursor over a vertex on the ",(0,n.kt)("strong",{parentName:"li"},"object"),", then ",(0,n.kt)("strong",{parentName:"li"},"click and drag")," to pull the vertex.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Move Brush Tool",src:r(79457).Z,width:"1920",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Move Brush Tool Properties",src:r(3782).Z,width:"866",height:"260"})),(0,n.kt)("h3",{id:"brush-radius"},"Brush Radius"),(0,n.kt)("p",null,"This property determines the size of the brush's radius. The ",(0,n.kt)("strong",{parentName:"p"},"unit")," is ",(0,n.kt)("strong",{parentName:"p"},"meters"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-----shiftclick-drag"},(0,n.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,n.kt)("inlineCode",{parentName:"strong"},"[")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"]")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"Shift+click-drag"))),(0,n.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the ",(0,n.kt)("strong",{parentName:"p"},"Brush Radius property"),"."),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/h2uRZlDSPYk?si=ac85YuceEIcxT-6c",frameborder:"0",allowfullscreen:""}))),(0,n.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,n.kt)("p",null,"Property for the brush strength."),(0,n.kt)("h3",{id:"fall-off"},"Fall Off"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Graph Shape property")," that determines the shape of the brush."),(0,n.kt)("p",null,"It can be edited by ",(0,n.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,n.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/g9IkDRl9ab8",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},79457:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Deform_MoveBrush-ef6ee8888db31b9e10cc1ac8c5d659a7.png"},3782:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Deform_MoveBrush_Properties-b5d74478f82675f5eb8a9dbe71095439.png"}}]);