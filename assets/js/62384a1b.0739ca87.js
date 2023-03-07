"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3282],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>c});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),h=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=h(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=h(o),d=n,c=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(c,s(s({ref:t},p),{},{components:o})):r.createElement(c,s({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var h=2;h<a;h++)s[h]=o[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},64896:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=o(87462),n=(o(67294),o(3905));const a={slug:"/modeling/smooth-brush-tool",sidebar_position:2},s="Smooth Brush Tool",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-deform/smooth-brush-tool",id:"editable-mesh/modeling-mode/modeling-mode-deform/smooth-brush-tool",title:"Smooth Brush Tool",description:"Smooth Brush Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-deform/smooth-brush-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-deform",slug:"/modeling/smooth-brush-tool",permalink:"/docs/modeling/smooth-brush-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/smooth-brush-tool",sidebar_position:2},sidebar:"docs",previous:{title:"Relax Brush Tool",permalink:"/docs/modeling/relax-brush-tool"},next:{title:"Standard Brush Tool",permalink:"/docs/modeling/standard-brush-tool"}},i={},h=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Brush Radius",id:"brush-radius",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"Fall Off Shape Example",id:"fall-off-shape-example",level:4},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:h};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smooth-brush-tool"},"Smooth Brush Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Smooth Brush Tool",src:o(19177).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Smooth Brush tool")," is a brush-like tool that organizes the spacing between vertices while ",(0,n.kt)("strong",{parentName:"p"},"smoothing the shape"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"differences-from-the-relax-brush-tool"},"Differences from the ",(0,n.kt)("strong",{parentName:"h2"},"Relax Brush tool")),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Smooth Brush tool")," smoothes while ",(0,n.kt)("strong",{parentName:"p"},"changing the shape"),", while the ",(0,n.kt)("strong",{parentName:"p"},"Relax Brush tool")," smoothes with spacing while maintaining the existing shape to some extent ::: Brush-shaped tools.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch the ",(0,n.kt)("strong",{parentName:"li"},"Smooth Brush tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Adjust the desired properties."),(0,n.kt)("li",{parentName:"ol"},"Move the mouse cursor ",(0,n.kt)("strong",{parentName:"li"},"over")," the vertices of the object, then ",(0,n.kt)("strong",{parentName:"li"},"click and drag")," to organize the vertices.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Smooth Brush Tool",src:o(19177).Z,width:"1920",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Smooth Brush Tool Properties",src:o(55738).Z,width:"866",height:"260"})),(0,n.kt)("h3",{id:"brush-radius"},"Brush Radius"),(0,n.kt)("p",null,"This property determines the size of the brush's ",(0,n.kt)("strong",{parentName:"p"},"radius"),". The ",(0,n.kt)("strong",{parentName:"p"},"unit")," is ",(0,n.kt)("strong",{parentName:"p"},"meters"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcuts-----ctrlclick-drag"},(0,n.kt)("strong",{parentName:"h2"},"Use the keyboard shortcuts ",(0,n.kt)("inlineCode",{parentName:"strong"},"[")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"]")," , ",(0,n.kt)("inlineCode",{parentName:"strong"},"Ctrl+click-drag"))),(0,n.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the ",(0,n.kt)("strong",{parentName:"p"},"Brush Radius property"),".")),(0,n.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,n.kt)("p",null,"Property for the brush strength."),(0,n.kt)("h3",{id:"fall-off"},"Fall Off"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Graph Shape property")," that determines the shape of the brush."),(0,n.kt)("p",null,"It can be edited by ",(0,n.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,n.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,n.kt)("h4",{id:"fall-off-shape-example"},"Fall Off Shape Example"),(0,n.kt)("p",null,"Here is an example of how the Fall Off shape changes the appearance of the selection."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")))}m.isMDXComponent=!0},19177:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_SmoothBrush-a14aeedf6e980af930eb8226859bdb38.png"},55738:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Modeling_Deform_SmoothBrush_Properties-b5d74478f82675f5eb8a9dbe71095439.png"}}]);