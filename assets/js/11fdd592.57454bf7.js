"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),c=o,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/modeling/standard-brush-tool",sidebar_position:3,description:""},s="Standard Brush Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/standard-brush-tool",id:"editable-mesh/modeling-mode/modeling-mode-deform/standard-brush-tool",title:"Standard Brush Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-deform/standard-brush-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling/standard-brush-tool",permalink:"/docs/modeling/standard-brush-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/standard-brush-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Smooth Brush Tool",permalink:"/docs/modeling/smooth-brush-tool"},next:{title:"Flatten Brush Tool",permalink:"/docs/modeling/flatten-brush-tool"}},l={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Brush Radius",id:"brush-radius",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"standard-brush-tool"},"Standard Brush Tool"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Standard Brush Tool",src:r(47063).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Standard Brush tool")," is a brush-like tool that ",(0,o.kt)("strong",{parentName:"p"},"draws out the surface"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to Use")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch the ",(0,o.kt)("strong",{parentName:"li"},"Standard Brush tool"),"."),(0,o.kt)("li",{parentName:"ol"},"Adjust the desired properties."),(0,o.kt)("li",{parentName:"ol"},"Move the mouse cursor ",(0,o.kt)("strong",{parentName:"li"},"over")," a vertex on the object, then ",(0,o.kt)("strong",{parentName:"li"},"click and drag")," to move the vertex.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Standard Brush Tool",src:r(47063).Z,width:"1920",height:"640"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Standard Brush Tool Properties",src:r(34646).Z,width:"866",height:"260"})),(0,o.kt)("h3",{id:"brush-radius"},"Brush Radius"),(0,o.kt)("p",null,"This property determines the size of the brush's radius. The ",(0,o.kt)("strong",{parentName:"p"},"unit")," is ",(0,o.kt)("strong",{parentName:"p"},"meters"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-----shiftclick-drag"},(0,o.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,o.kt)("inlineCode",{parentName:"strong"},"[")," , ",(0,o.kt)("inlineCode",{parentName:"strong"},"]")," , ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+click-drag"))),(0,o.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the ",(0,o.kt)("strong",{parentName:"p"},"Brush Radius property"),"."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/h2uRZlDSPYk?si=ac85YuceEIcxT-6c",frameborder:"0",allowfullscreen:""}))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-ctrlclick-drag"},(0,o.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,o.kt)("inlineCode",{parentName:"strong"},"Ctrl+click-drag"))),(0,o.kt)("p",{parentName:"admonition"},"When you ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Ctrl+click-drag"))," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard Brush Tool"),", you can apply a force in the negative direction, meaning away from the camera."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/_Nrd51xqkCE?si=VsnEdIVN1Gkexjgr",frameborder:"0",allowfullscreen:""}))),(0,o.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,o.kt)("p",null,"Property for the brush strength."),(0,o.kt)("h3",{id:"fall-off"},"Fall Off"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Graph Shape property")," that determines the shape of the brush."),(0,o.kt)("p",null,"It can be edited by ",(0,o.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,o.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example Usage")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/93jrd4eU-xI",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},47063:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Deform_StandardBrush-5675ae0aa427ac1ff066ed93fe86d641.png"},34646:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Deform_StandardBrush_Properties-b5d74478f82675f5eb8a9dbe71095439.png"}}]);