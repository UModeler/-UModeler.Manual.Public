"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[44098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=p(r),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={slug:"/modeling/pinch-brush-tool",sidebar_position:6,description:""},s="Pinch Brush Tool",a={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool",title:"Pinch Brush Tool",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/modeling-mode/modeling-mode-deform/pinch-brush-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling/pinch-brush-tool",permalink:"/docs/plus/modeling/pinch-brush-tool",draft:!1,tags:[],version:"plus",sidebarPosition:6,frontMatter:{slug:"/modeling/pinch-brush-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Move Brush Tool",permalink:"/docs/plus/modeling/move-brush-tool"},next:{title:"Drawing Group",permalink:"/docs/plus/modeling-drawing"}},l={},p=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Brush Radius",id:"brush-radius",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],u={toc:p};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pinch-brush-tool"},"Pinch Brush Tool"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pinch Brush Tool",src:r(3392).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Pinch Brush tool")," is a brush-like tool that ",(0,o.kt)("strong",{parentName:"p"},"gathers the gaps between vertices"),"."),(0,o.kt)("p",null,"The result is a pointed or sharpened shape."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use-it"},(0,o.kt)("strong",{parentName:"h2"},"How to use it")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch the ",(0,o.kt)("strong",{parentName:"li"},"Pinch Brush tool"),"."),(0,o.kt)("li",{parentName:"ol"},"Adjust the desired properties."),(0,o.kt)("li",{parentName:"ol"},"Move the mouse cursor ",(0,o.kt)("strong",{parentName:"li"},"over the vertices")," of the object, then ",(0,o.kt)("strong",{parentName:"li"},"click and drag")," to bring the vertices together.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pinch Brush Tool",src:r(3392).Z,width:"1920",height:"640"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pinch Brush Tool Properties",src:r(13918).Z,width:"866",height:"260"})),(0,o.kt)("h3",{id:"brush-radius"},"Brush Radius"),(0,o.kt)("p",null,"This property determines the ",(0,o.kt)("strong",{parentName:"p"},"radius size")," of the brush. The ",(0,o.kt)("strong",{parentName:"p"},"unit")," is ",(0,o.kt)("strong",{parentName:"p"},"meters"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-----shiftclick-drag"},(0,o.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,o.kt)("inlineCode",{parentName:"strong"},"[")," , ",(0,o.kt)("inlineCode",{parentName:"strong"},"]")," , ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+click-drag"))),(0,o.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the ",(0,o.kt)("strong",{parentName:"p"},"Brush Radius property"),"."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/h2uRZlDSPYk?si=ac85YuceEIcxT-6c",frameborder:"0",allowfullscreen:""}))),(0,o.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,o.kt)("p",null,"Property for the brush strength."),(0,o.kt)("h3",{id:"fall-off"},"Fall Off"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Graph Shape property")," that determines the shape of the brush."),(0,o.kt)("p",null,"It can be edited by ",(0,o.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,o.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example Usage")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zXX1TgEe7zk",frameborder:"0",allowfullscreen:""})))}h.isMDXComponent=!0},3392:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Deform_PinchBrush-1611e23a24456c67d377be343ceb6b00.png"},13918:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Deform_PinchBrush_Properties-b5d74478f82675f5eb8a9dbe71095439.png"}}]);