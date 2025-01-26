"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={slug:"/modeling/pinch-brush-tool",sidebar_position:6,description:""},a="Pinch Brush Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool",id:"editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool",title:"Pinch Brush Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling/pinch-brush-tool",permalink:"/docs/modeling/pinch-brush-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/modeling/pinch-brush-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Move Brush Tool",permalink:"/docs/modeling/move-brush-tool"},next:{title:"Drawing Group",permalink:"/docs/modeling-drawing"}},l={},p=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Brush Radius",id:"brush-radius",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],u={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pinch-brush-tool"},"Pinch Brush Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pinch Brush Tool",src:r(3551).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Pinch Brush tool")," is a brush-like tool that ",(0,n.kt)("strong",{parentName:"p"},"gathers the gaps between vertices"),"."),(0,n.kt)("p",null,"The result is a pointed or sharpened shape."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use-it"},(0,n.kt)("strong",{parentName:"h2"},"How to use it")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch the ",(0,n.kt)("strong",{parentName:"li"},"Pinch Brush tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Adjust the desired properties."),(0,n.kt)("li",{parentName:"ol"},"Move the mouse cursor ",(0,n.kt)("strong",{parentName:"li"},"over the vertices")," of the object, then ",(0,n.kt)("strong",{parentName:"li"},"click and drag")," to bring the vertices together.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pinch Brush Tool",src:r(3551).Z,width:"1920",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pinch Brush Tool Properties",src:r(96067).Z,width:"866",height:"260"})),(0,n.kt)("h3",{id:"brush-radius"},"Brush Radius"),(0,n.kt)("p",null,"This property determines the ",(0,n.kt)("strong",{parentName:"p"},"radius size")," of the brush. The ",(0,n.kt)("strong",{parentName:"p"},"unit")," is ",(0,n.kt)("strong",{parentName:"p"},"meters"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-----shiftclick-drag"},(0,n.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,n.kt)("inlineCode",{parentName:"strong"},"[")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"]")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"Shift+click-drag"))),(0,n.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the ",(0,n.kt)("strong",{parentName:"p"},"Brush Radius property"),"."),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/h2uRZlDSPYk?si=ac85YuceEIcxT-6c",frameborder:"0",allowfullscreen:""}))),(0,n.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,n.kt)("p",null,"Property for the brush strength."),(0,n.kt)("h3",{id:"fall-off"},"Fall Off"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Graph Shape property")," that determines the shape of the brush."),(0,n.kt)("p",null,"It can be edited by ",(0,n.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,n.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zXX1TgEe7zk",frameborder:"0",allowfullscreen:""})))}h.isMDXComponent=!0},3551:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Deform_PinchBrush-1611e23a24456c67d377be343ceb6b00.png"},96067:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Modeling_Deform_PinchBrush_Properties-b5d74478f82675f5eb8a9dbe71095439.png"}}]);