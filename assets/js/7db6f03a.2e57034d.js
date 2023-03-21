"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||g[m]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/editable-mesh"},i="Editable Mesh",d={unversionedId:"editable-mesh/index",id:"editable-mesh/index",title:"Editable Mesh",description:"Editable Mesh is the main 3D model editing property in UModelerX When you create a UModelerX object, it is added to the object as a component and can be found in the Inspector tab.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/index.md",sourceDirName:"editable-mesh",slug:"/editable-mesh",permalink:"/docs/editable-mesh",draft:!1,tags:[],version:"current",frontMatter:{slug:"/editable-mesh"},sidebar:"docs",previous:{title:"Creation Walkthrough",permalink:"/docs/creation-walkthrough"},next:{title:"Modeling Mode",permalink:"/docs/modeling-mode"}},l={},s=[{value:"Modeling Mode",id:"modeling-mode",level:2},{value:"Rigging Mode",id:"rigging-mode",level:2},{value:"Painting Mode",id:"painting-mode",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editable-mesh"},"Editable Mesh"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editable Mesh")," is the main 3D model editing property in UModelerX When you create a ",(0,o.kt)("strong",{parentName:"p"},"UModelerX object"),", it is added to the object as a component and can be found in the Inspector tab."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Editable Mesh")," is exactly what it sounds like, it allows you to create and edit an ",(0,o.kt)("strong",{parentName:"p"},"editable mesh"),"."),(0,o.kt)("p",null,"It has ",(0,o.kt)("strong",{parentName:"p"},"three modes"),", and additionally offers ",(0,o.kt)("strong",{parentName:"p"},"two editors")," that can be edited by bringing up a window named Editor."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"modeling-mode"},"Modeling Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modeling Mode",src:n(29530).Z,width:"634",height:"380"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Modeling Mode")," is the primary mode for editable meshes, and its primary function is mesh editing. Modeling mode is broken down into ",(0,o.kt)("strong",{parentName:"p"},"tools")," that perform different functions, ",(0,o.kt)("strong",{parentName:"p"},"properties")," that are detailed settings for the tools, and ",(0,o.kt)("strong",{parentName:"p"},"groups")," that are groups of tools."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rigging-mode"},"Rigging Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode",src:n(13713).Z,width:"634",height:"380"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Rigging Mode")," is a mode for animating 3D models. Rigging mode contains tools that allow you to perform skinning (connecting mesh and bones) during the rigging process."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"painting-mode"},"Painting Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Painting Mode",src:n(64562).Z,width:"634",height:"380"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Painting mode")," is a mode for adding or editing textures and colors to a mesh, and includes several painting-related tools and layers and brushes for quick color and texture editing."))}c.isMDXComponent=!0},29530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_ModelingMode-ab1fcb732fc505459e84539f4a38747c.png"},64562:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_PaintingMode-a67a1ded4c06ab189c3c85f16acbfef8.png"},13713:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_RiggingMode-447b6681a00bda6ec249be743247a48d.png"}}]);