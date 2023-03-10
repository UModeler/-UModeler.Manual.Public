"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=n,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return r?o.createElement(h,a(a({ref:t},c),{},{components:r})):o.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={slug:"/uv-editor"},a="UV Editor",l={unversionedId:"editable-mesh/uv-editor/index",id:"editable-mesh/uv-editor/index",title:"UV Editor",description:"UV Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/index.md",sourceDirName:"editable-mesh/uv-editor",slug:"/uv-editor",permalink:"/docs/uv-editor",draft:!1,tags:[],version:"current",frontMatter:{slug:"/uv-editor"},sidebar:"docs",previous:{title:"Pivot To Center Tool",permalink:"/docs/modeling/multi-pivot-to-center-tool"},next:{title:"UV Editor Setup and Interface",permalink:"/docs/settings-interface"}},s={},p=[{value:"<strong>How to Run</strong>",id:"how-to-run",level:2},{value:"<strong>Source Mesh&gt;UV Editor Tool</strong>",id:"source-meshuv-editor-tool",level:2},{value:"<strong>Select an object&gt;Select the open UV Editor tab</strong>",id:"select-an-objectselect-the-open-uv-editor-tab",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>1. Toolbar</strong>",id:"1-toolbar",level:2},{value:"<strong>2. Settings</strong>",id:"2-settings",level:2},{value:"<strong>3. Working Area</strong>",id:"3-working-area",level:2},{value:"<strong>4. UV Tools</strong>",id:"4-uv-tools",level:2},{value:"Unwrap Group",id:"unwrap-group",level:3},{value:"Selection group",id:"selection-group",level:3},{value:"Quick Transform group",id:"quick-transform-group",level:3},{value:"Alignment group",id:"alignment-group",level:3},{value:"Weld And Break group",id:"weld-and-break-group",level:3},{value:"Arrange group",id:"arrange-group",level:3},{value:"Misc group",id:"misc-group",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uv-editor"},"UV Editor"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UV Editor",src:r(91470).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"A UV is a texture coordinate in 2D form that corresponds to an object in 3D form. ",(0,n.kt)("strong",{parentName:"p"},"UV Editor")," allows you to create and edit ",(0,n.kt)("strong",{parentName:"p"},"UV elements (UV Vertex, UV Edge, UV Face)"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-run"},(0,n.kt)("strong",{parentName:"h2"},"How to Run")),(0,n.kt)("p",null,"Here's how to run the UV Editor."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"source-meshuv-editor-tool"},(0,n.kt)("strong",{parentName:"h2"},"Source Mesh>UV Editor Tool")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select a ",(0,n.kt)("strong",{parentName:"li"},"Source Mesh"),"."),(0,n.kt)("li",{parentName:"ol"},"Press the ",(0,n.kt)("strong",{parentName:"li"},"Editor button")," at the top right of the mode."),(0,n.kt)("li",{parentName:"ol"},"Launch the UV Editor tool from the menu.\n",(0,n.kt)("img",{alt:"UV Editor Button",src:r(28960).Z,width:"997",height:"580"})),(0,n.kt)("li",{parentName:"ol"},"You will see the following in the UV Editor.\n",(0,n.kt)("img",{alt:"UV Editor",src:r(73102).Z,width:"2560",height:"1440"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"select-an-objectselect-the-open-uv-editor-tab"},(0,n.kt)("strong",{parentName:"h2"},"Select an object>Select the open UV Editor tab")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"UModeler X object"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"UV Editor tab")," among the open tabs to activate it.\n",(0,n.kt)("img",{alt:"UV Editor Tab Click",src:r(6815).Z,width:"1248",height:"295"}),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the ",(0,n.kt)("strong",{parentName:"p"},"UModeler X Object")," is not selected, the UV Editor will not be activated.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Properties of the UV Editor")," can be divided into four main areas, each of which is briefly described below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UV Editor Interface",src:r(10584).Z,width:"2560",height:"1440"})),(0,n.kt)("h2",{id:"1-toolbar"},(0,n.kt)("strong",{parentName:"h2"},"1. Toolbar")),(0,n.kt)("p",null,"The following are listed in order: ",(0,n.kt)("strong",{parentName:"p"},"Screen Pan"),", ",(0,n.kt)("strong",{parentName:"p"},"Transform Gizmo"),", ",(0,n.kt)("strong",{parentName:"p"},"3 UV Elements"),", ",(0,n.kt)("strong",{parentName:"p"},"UV Island Selection, Cursor, and Pivot Toggle"),"."),(0,n.kt)("h2",{id:"2-settings"},(0,n.kt)("strong",{parentName:"h2"},"2. Settings")),(0,n.kt)("p",null,"This is the area where you can make settings related to the UV Editor."),(0,n.kt)("h2",{id:"3-working-area"},(0,n.kt)("strong",{parentName:"h2"},"3. Working Area")),(0,n.kt)("p",null,"This is the area where you edit the UV element. You can see the texture along with the grid."),(0,n.kt)("h2",{id:"4-uv-tools"},(0,n.kt)("strong",{parentName:"h2"},"4. UV Tools")),(0,n.kt)("p",null,"This is the area with tools to select, edit, or export UVs."),(0,n.kt)("h3",{id:"unwrap-group"},"Unwrap Group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Unwrap Group",src:r(10553).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools for unwrapping UV elements."),(0,n.kt)("h3",{id:"selection-group"},"Selection group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Selection Group",src:r(33107).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools for selecting UV elements."),(0,n.kt)("h3",{id:"quick-transform-group"},"Quick Transform group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Quick Transform Group",src:r(71107).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools that allow you to easily flip and rotate the position of UV elements."),(0,n.kt)("h3",{id:"alignment-group"},"Alignment group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alignment Group",src:r(38886).Z,width:"1012",height:"391"})),(0,n.kt)("p",null,"This group contains tools for aligning the position of UV elements."),(0,n.kt)("h3",{id:"weld-and-break-group"},"Weld And Break group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Weld And Break Group",src:r(94928).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools used to break and weld UV elements together."),(0,n.kt)("h3",{id:"arrange-group"},"Arrange group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arrange Group",src:r(7786).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools for placing UV elements in texture space in bulk."),(0,n.kt)("h3",{id:"misc-group"},"Misc group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Misc Group",src:r(68990).Z,width:"1012",height:"247"})),(0,n.kt)("p",null,"This group contains tools that do not belong in any other group."))}d.isMDXComponent=!0},38886:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_Alignment-e3bca1e00de2d6142d769b21c1a3fc56.png"},7786:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_Arrange-524afa39db81b9123be5dfbcbc737c47.png"},68990:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_Misc-585970c25a79403d8728865286703b49.png"},71107:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_QuickTransform-aaf6e0880a4f486e0331dc2c11b9aea6.png"},33107:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_Selection-131ce021b8f3a02631fe9e4572a2b21b.png"},10553:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_Unwrap-ade43ea66f5565e25bebbc50d7e4cb00.png"},94928:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Icon_WeldAndBreak-b940253e0cf2b9481f315ce4e131609c.png"},73102:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_UVEditor-52ccfc6cda9cb642e942dd98726ba38e.png"},28960:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_UVEditorButton-69766f898e7e51590ccaa620ff4a935e.png"},10584:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_UVEditorInterface-3b8dfc382df4ccef88281f2237aaa2bf.png"},6815:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_UVEditorTab_Click-2a857b08806f4fa49a87e3ec623757f2.png"},91470:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_UVEditor_Main-65a1962050ebdb5c520fdcca9e95c4ec.png"}}]);