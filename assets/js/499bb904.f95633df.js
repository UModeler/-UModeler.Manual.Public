"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||l;return r?a.createElement(u,o(o({ref:t},d),{},{components:r})):a.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/modeling/lineararray-tool",sidebar_position:11,description:""},o="Linear Array Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool",title:"Linear Array Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-add/lineararray-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/lineararray-tool",permalink:"/docs/modeling/lineararray-tool",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{slug:"/modeling/lineararray-tool",sidebar_position:11,description:""},sidebar:"docs",previous:{title:"Insert Vertex Tool",permalink:"/docs/modeling/insertvertex-tool"},next:{title:"Radial Array Tool",permalink:"/docs/modeling/raddialararray-tool"}},s={},c=[{value:"<strong>Linear Array Tool</strong>",id:"linear-array-tool-1",level:2},{value:"<strong>How to Use</strong>",id:"how-to-use",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Array Type",id:"array-type",level:3},{value:"<strong>Array Type: To Elements</strong>",id:"array-type-to-elements",level:2},{value:"Create a new element array within the current mesh",id:"create-a-new-element-array-within-the-current-mesh",level:3},{value:"<strong>Array Type: To Object</strong>",id:"array-type-to-object",level:2},{value:"Create independent objects from the current mesh",id:"create-independent-objects-from-the-current-mesh",level:3},{value:"Length Type",id:"length-type",level:3},{value:"Direction",id:"direction",level:3},{value:"Length",id:"length",level:3},{value:"Batch Count",id:"batch-count",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Examples of use</strong>",id:"examples-of-use",level:2}],d={toc:c};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"linear-array-tool"},"Linear Array Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linear Array Tool",src:r(29538).Z,width:"1920",height:"640"})),(0,n.kt)("h2",{id:"linear-array-tool-1"},(0,n.kt)("strong",{parentName:"h2"},"Linear Array Tool")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Linear Array Tool")," is a tool that duplicates selected elements (Vertex, Edge, Face) and arranges them in a linear direction."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h3"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the element you want to copy."),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Linear Array Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Array Type"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Length Type"),"."),(0,n.kt)("li",{parentName:"ol"},"Adjust the values as needed.")),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linear Array Tool Properties",src:r(10577).Z,width:"924",height:"550"})),(0,n.kt)("h3",{id:"array-type"},"Array Type"),(0,n.kt)("p",null,"This attribute defines the type of elements affected by the ",(0,n.kt)("strong",{parentName:"p"},"Linear Array Tool"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"array-type-to-elements"},(0,n.kt)("strong",{parentName:"h2"},"Array Type: To Elements")),(0,n.kt)("h3",{id:"create-a-new-element-array-within-the-current-mesh"},"Create a new element array within the current mesh"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select a face."),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Linear Array Tool"),".\n",(0,n.kt)("img",{alt:"Array Type: To Elements",src:r(38302).Z,width:"1400",height:"800"})),(0,n.kt)("li",{parentName:"ol"},"A new element array will be created within the connected mesh from the selected element.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"array-type-to-object"},(0,n.kt)("strong",{parentName:"h2"},"Array Type: To Object")),(0,n.kt)("h3",{id:"create-independent-objects-from-the-current-mesh"},"Create independent objects from the current mesh"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select a face."),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Linear Array Tool"),".\n",(0,n.kt)("img",{alt:"Array Type: To Elements",src:r(73286).Z,width:"1400",height:"800"})),(0,n.kt)("li",{parentName:"ol"},"A new independent object array will be created from the current mesh.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"length-type"},"Length Type"),(0,n.kt)("p",null,"This determines the position of the last object in the array. There are two types: Total and Interval."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total"),": The last object is positioned at the distance specified by the Total value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interval"),": The last object is positioned based on the angle and batch count.")),(0,n.kt)("h3",{id:"direction"},"Direction"),(0,n.kt)("p",null,"The array follows the 3D direction vector originating from the pivot of the original element."),(0,n.kt)("h3",{id:"length"},"Length"),(0,n.kt)("p",null,"This is the distance between elements."),(0,n.kt)("h3",{id:"batch-count"},"Batch Count"),(0,n.kt)("p",null,"Sets the number of elements or objects to be created (from 2 to 1000)."),(0,n.kt)("h3",{id:"select"},(0,n.kt)("strong",{parentName:"h3"},"Select")),(0,n.kt)("p",null,"Properties that allow you to set how faces are selected."),(0,n.kt)("h3",{id:"backface-select"},"Backface Select"),(0,n.kt)("p",null,"Allows you to set whether faces facing the opposite direction are selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backface Select Off",src:r(5286).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"When the ",(0,n.kt)("strong",{parentName:"p"},"Backface Select property")," is off, opposite facing faces are not selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backface Select On",src:r(26307).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"When the ",(0,n.kt)("strong",{parentName:"p"},"Backface Select property")," is on, opposite facing faces are selected."),(0,n.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,n.kt)("p",null,"This property selects only those faces that are visible to the camera."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Camera Based Select Off",src:r(77066).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"When the ",(0,n.kt)("strong",{parentName:"p"},"Camera Based Select property")," is off, faces that are hidden by the camera are also selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Camera Based Select On",src:r(79443).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"When the ",(0,n.kt)("strong",{parentName:"p"},"Camera Based Select property")," is on, faces that are hidden by the camera are not selected."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples-of-use"},(0,n.kt)("strong",{parentName:"h2"},"Examples of use")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/jvrHTX9IlMU",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},29538:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_LinearArray-4cee218fd94550394dafbc39df833537.png"},38302:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_LinearArray_Element-b7e05326fcd0bb15946be2b1f779857f.png"},73286:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_LinearArray_Object-11b6994343454a81a49d971f50fc0622.png"},10577:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Add_LinearArray_Properties-68e043c2c74bc46fb8e3d2ffe6591669.png"},5286:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Element_Face_BackFaceOff-d6177cc24278401547c7273b5da04233.png"},26307:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Element_Face_BackFaceOn-20c2c42d08b18716a20e1af5e4d392b1.png"},77066:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Element_Face_CameraBasedOff-4fe13968b619c0d46e52c48b1d1a19c5.png"},79443:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Element_Face_CameraBasedOn-2f4c40d6d040f8cb6808a12d156f5f35.png"}}]);