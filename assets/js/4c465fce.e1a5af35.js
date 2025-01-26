"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,u=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={slug:"/editable-mesh",sidebar_position:3,description:""},a="Editable Mesh",d={unversionedId:"editable-mesh/index",id:"editable-mesh/index",title:"Editable Mesh",description:"",source:"@site/docs/editable-mesh/index.md",sourceDirName:"editable-mesh",slug:"/editable-mesh",permalink:"/docs/editable-mesh",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/editable-mesh",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Export",permalink:"/docs/export"},next:{title:"Modeling Mode",permalink:"/docs/modeling-mode"}},s={},l=[{value:"Modeling Mode",id:"modeling-mode",level:2},{value:"Rigging Mode",id:"rigging-mode",level:2},{value:"Painting Mode",id:"painting-mode",level:2}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editable-mesh"},"Editable Mesh"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editable Mesh")," is the main 3D model editing feature of ",(0,o.kt)("strong",{parentName:"p"},"UModelerX"),". When you create a ",(0,o.kt)("strong",{parentName:"p"},"UModelerX object"),", it is added as a component to the object, and you can check it in the Inspector tab."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editable Mesh")," allows you to create and edit a mesh that can be directly edited."),(0,o.kt)("p",null,"It has ",(0,o.kt)("strong",{parentName:"p"},"three modes"),", and additionally, it provides ",(0,o.kt)("strong",{parentName:"p"},"two editors")," that can be used by opening a window named 'Editor'."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"modeling-mode"},"Modeling Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modeling Mode",src:n(92135).Z,width:"634",height:"380"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modeling Mode")," is the foundational mode of Editable Mesh, with the primary function being mesh editing. Modeling Mode is categorized into ",(0,o.kt)("strong",{parentName:"p"},"tools")," with various functions, ",(0,o.kt)("strong",{parentName:"p"},"properties")," that represent the detailed settings of the tools, and ",(0,o.kt)("strong",{parentName:"p"},"groups")," that bundle the tools together."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rigging-mode"},"Rigging Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode",src:n(29802).Z,width:"634",height:"380"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rigging Mode")," is for animating 3D models. Rigging Mode includes tools that allow for skinning, which connects the mesh and bones during the rigging process."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"painting-mode"},"Painting Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Painting Mode",src:n(45612).Z,width:"634",height:"380"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Painting mode")," is a mode where you can add or ",(0,o.kt)("strong",{parentName:"p"},"edit textures and colors")," on a mesh through various ",(0,o.kt)("strong",{parentName:"p"},"painting-related tools, layers, and brushes"),"."))}c.isMDXComponent=!0},92135:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_ModelingMode-ab1fcb732fc505459e84539f4a38747c.png"},45612:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_PaintingMode-a67a1ded4c06ab189c3c85f16acbfef8.png"},29802:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditableMesh_RiggingMode-d466309ddec3ef78af9490aaa08b97f8.png"}}]);