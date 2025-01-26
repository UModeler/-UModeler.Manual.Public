"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7885],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return i?o.createElement(g,a(a({ref:t},c),{},{components:i})):o.createElement(g,a({ref:t},c))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<n;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},72112:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const n={slug:"/modeling/torus-tool",sidebar_position:5,description:""},a="Torus Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/torus-tool",id:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/torus-tool",title:"Torus Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/torus-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes",slug:"/modeling/torus-tool",permalink:"/docs/modeling/torus-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/torus-tool.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/torus-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Icosphere Tool",permalink:"/docs/modeling/Icosphere-tool"},next:{title:"Pipe Tool",permalink:"/docs/modeling/pipe-tool"}},l={},d=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"Create and edit by clicking and dragging",id:"create-and-edit-by-clicking-and-dragging",level:3},{value:"One Click Build and Edit via Properties",id:"one-click-build-and-edit-via-properties",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Radius1",id:"radius1",level:3},{value:"Radius2",id:"radius2",level:3},{value:"Segments",id:"segments",level:3},{value:"Sides",id:"sides",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2},{value:"Click-Drag to create, edit",id:"click-drag-to-create-edit",level:3},{value:"Create and edit using One Click Build",id:"create-and-edit-using-one-click-build",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"torus-tool"},"Torus Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool",src:i(55638).Z,width:"1048",height:"604"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Torus tool")," is a tool for creating shapes that are rings."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("p",null,"The basic shape creation tools in the ",(0,r.kt)("strong",{parentName:"p"},"Primitive Shapes group")," can create shapes in ",(0,r.kt)("strong",{parentName:"p"},"two ways"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"click-drag to create, edit"),(0,r.kt)("li",{parentName:"ol"},"Create and edit using One Click Build")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create-and-edit-by-clicking-and-dragging"},"Create and edit by clicking and dragging"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Torus Tools"),"."),(0,r.kt)("li",{parentName:"ol"},"Click and drag the mouse in the scene to ",(0,r.kt)("strong",{parentName:"li"},"create")," a shape with the desired ",(0,r.kt)("strong",{parentName:"li"},"radius size"),".\n",(0,r.kt)("img",{alt:"Torus Tool Drag 1",src:i(53791).Z,width:"982",height:"420"})),(0,r.kt)("li",{parentName:"ol"},"Once the shape is created at the desired size, release the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Click"))," and move the mouse up and down to create a mesh at the desired thickness.\n",(0,r.kt)("img",{alt:"Torus Tool Drag 2",src:i(82277).Z,width:"1146",height:"532"})),(0,r.kt)("li",{parentName:"ol"},"When the desired thickness is reached, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Click"))," again to finish creating the mesh."),(0,r.kt)("li",{parentName:"ol"},"Adjust the Torus tool's properties and select the element, or press another tool to finish.\n",(0,r.kt)("img",{alt:"Torus Tool Properties",src:i(21453).Z,width:"940",height:"385"}),(0,r.kt)("img",{alt:"Torus Tool Result",src:i(77710).Z,width:"1084",height:"566"}))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can continue fine-tuning with the Torus tool's properties until you select an element or press another tool to finalize.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"one-click-build-and-edit-via-properties"},"One Click Build and Edit via Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select a Torus tool."),(0,r.kt)("li",{parentName:"ol"},"Enter the desired values in the Torus tool's properties.\n",(0,r.kt)("img",{alt:"Torus Tool Properties",src:i(21453).Z,width:"940",height:"385"})),(0,r.kt)("li",{parentName:"ol"},"Press the One Click Build button to add the shape to the scene.\n",(0,r.kt)("img",{alt:"Torus Tool One Click Build",src:i(46929).Z,width:"898",height:"151"})),(0,r.kt)("li",{parentName:"ol"},"Make any additional adjustments to the Torus tool's properties and select the element, or use another tool to finish.\n",(0,r.kt)("img",{alt:"Torus Tool Result",src:i(77710).Z,width:"1084",height:"566"}))),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can continue to make further adjustments using the Torus tool's properties until you select an element or press another tool to finalize.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool Properties",src:i(21453).Z,width:"940",height:"385"})),(0,r.kt)("h3",{id:"radius1"},"Radius1"),(0,r.kt)("p",null,"This property sets the ",(0,r.kt)("strong",{parentName:"p"},"radius size")," of the shape being created, relative to its center."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool Radius1",src:i(96622).Z,width:"1434",height:"640"})),(0,r.kt)("h3",{id:"radius2"},"Radius2"),(0,r.kt)("p",null,"Property that sets the radius size for the thickness of the generated shape."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool Radius2",src:i(30696).Z,width:"1434",height:"640"})),(0,r.kt)("h3",{id:"segments"},"Segments"),(0,r.kt)("p",null,"Property that sets the number of surface segments of the circle that are sections of the generated shape."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool Segments",src:i(53904).Z,width:"1434",height:"640"})),(0,r.kt)("h3",{id:"sides"},"Sides"),(0,r.kt)("p",null,"Property that sets the number of surface segments around the perimeter of the ring of the generated shape."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Torus Tool Sides",src:i(86647).Z,width:"1434",height:"640"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("h3",{id:"click-drag-to-create-edit"},"Click-Drag to create, edit"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/LzlVgCgFNgY",frameborder:"0",allowfullscreen:""})),(0,r.kt)("h3",{id:"create-and-edit-using-one-click-build"},"Create and edit using One Click Build"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/nJFAGG8jLBY",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},46929:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_OneClickBuild-91c5fa5cb34cc7a6e0226eb4d79169e7.png"},55638:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus-d56195b78cdfeb4f09d4afcd5b49c135.png"},53791:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Drag-ff0d82fcdfe65bf32103fe71b7c46dda.png"},82277:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Drag2-41bba8ca184314cae0b534069eaae0af.png"},21453:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Properties-5d315b218e7243ab7d06f35b29f2831f.png"},96622:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Radius1-2113f0615336d7ea81c7414a61aedd18.png"},30696:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Radius2-b74f4ff23b47fa1f4e53b2d4d4b0df6b.png"},77710:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Result-b4ec3a79a6ad6cceb8578688556d9428.png"},53904:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Segments-a26ef4ee97a4e0e159c3c14113ddf162.png"},86647:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/Modeling_PrimitiveShapes_Torus_Sides-2165dc04f7f4c390b634bdc65ec76905.png"}}]);