"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[22297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||g[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/edge-element",sidebar_position:2,description:""},s="Edge",o={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/edge-element",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-element/edge-element",title:"Edge",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/modeling-mode/modeling-mode-element/edge-element.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/edge-element",permalink:"/docs/plus/edge-element",draft:!1,tags:[],version:"plus",sidebarPosition:2,frontMatter:{slug:"/edge-element",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Vertex",permalink:"/docs/plus/vertex-element"},next:{title:"Face",permalink:"/docs/plus/face-element"}},i={},d=[{value:"<strong>Edge Element Group Properties</strong>",id:"edge-element-group-properties",level:2},{value:"<strong>Display</strong>",id:"display",level:2},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"Display UVSeam",id:"display-uvseam",level:3},{value:"<strong>Select</strong>",id:"select",level:2},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"Border Rect Select",id:"border-rect-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:2},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3},{value:"<strong>Distance</strong>",id:"distance",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edge"},"Edge"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Element Edge",src:n(90711).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Edges are the lines that make up a mesh, and moving or editing an edge affects the elements associated with it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Icon Select",src:n(49931).Z,width:"1290",height:"179"})),(0,r.kt)("p",null,"You can view properties related to ",(0,r.kt)("strong",{parentName:"p"},"Edges")," by pressing the keyboard ",(0,r.kt)("strong",{parentName:"p"},"shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+2")),", or by using the scene top buttons."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick-drag"},(0,r.kt)("strong",{parentName:"h2"},"Shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click Drag"))),(0,r.kt)("p",{parentName:"admonition"},"When you ",(0,r.kt)("strong",{parentName:"p"},"select an edge")," and perform a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Shift"))," held down with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"click drag")),", the selected edge moves while simultaneously creating a new face in the direction of the movement."),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/qNwSiv6Cu9I",frameborder:"0",allowfullscreen:""}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"edge-element-group-properties"},(0,r.kt)("strong",{parentName:"h2"},"Edge Element Group Properties")),(0,r.kt)("p",null,"These are the properties that are displayed for the Element group when an edge is selected."),(0,r.kt)("h2",{id:"display"},(0,r.kt)("strong",{parentName:"h2"},"Display")),(0,r.kt)("p",null,"Properties that allow you to choose how the mesh is displayed."),(0,r.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,r.kt)("p",null,"Shows faces as translucent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge XRay Mode",src:n(44949).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,r.kt)("p",null,"Allows edges to be visible or hidden."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Hide Edge Overlay",src:n(41548).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"display-uvseam"},"Display UVSeam"),(0,r.kt)("p",null,"Shows or hides the edge set by the ",(0,r.kt)("strong",{parentName:"p"},"Mark Seam tool"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Display UVSeam",src:n(23212).Z,width:"1920",height:"640"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Mark Seam tool")," is a tool for UV editing, and you can use the ",(0,r.kt)("strong",{parentName:"p"},"Mark Seam tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Surface group")," to select edges to utilize in the ",(0,r.kt)("strong",{parentName:"p"},"UV Editor tool"),".\n",(0,r.kt)("img",{alt:"Edge MarkSeamTool",src:n(80999).Z,width:"1050",height:"217"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"select"},(0,r.kt)("strong",{parentName:"h2"},"Select")),(0,r.kt)("p",null,"Property that allows you to set how the edge is selected."),(0,r.kt)("h3",{id:"backface-select"},"Backface Select"),(0,r.kt)("p",null,"Allows you to set whether opposite facing edges are selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge BackFace Off",src:n(16924).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Backface Select property")," is off, opposite facing edges are not selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge BackFace On",src:n(67224).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Backface Select property")," is on, opposite edges are selected as well."),(0,r.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,r.kt)("p",null,"This property selects only the currently visible edges based on the camera."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Camera Based Select Off",src:n(89815).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Camera Based Select property")," is off, edges that are hidden by the camera are also selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Camera Based Select On",src:n(94739).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Camera Based Select property")," is on, edges that are hidden by the camera are not selected."),(0,r.kt)("h3",{id:"border-rect-select"},"Border Rect Select"),(0,r.kt)("p",null,"This property selects only face edge edges."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Border Rect Select Off",src:n(59184).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Border Rect Select property")," is off, all edges are selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Border Rect Select On",src:n(73338).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Border Rect Select property")," is on, only the edges of the face and any openings are selected."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a great way to find ",(0,r.kt)("strong",{parentName:"p"},"punctures"),", or to find ",(0,r.kt)("strong",{parentName:"p"},"less connected vertices"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"soft-select"},(0,r.kt)("strong",{parentName:"h2"},"Soft Select")),(0,r.kt)("p",null,"This property will ",(0,r.kt)("strong",{parentName:"p"},"select based on weight")," edges that are adjacent to the selected edge in the Scene."),(0,r.kt)("p",null,"The selected edges and the range you set based on the weight are displayed in color, usually as a soft circle."),(0,r.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,r.kt)("p",null,"Properties that use ",(0,r.kt)("strong",{parentName:"p"},"Soft Selection"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Soft Selection",src:n(65352).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"graph-like property")," that determines the shape of the ",(0,r.kt)("strong",{parentName:"p"},"Soft Selection"),". Tap the graph next to the ",(0,r.kt)("strong",{parentName:"p"},"Soft Selection Curve property")," to edit it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of Curve shape")),(0,r.kt)("p",null,"Examples of selection shape changes by Curve shape."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Soft Selection Curve",src:n(60538).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge SoftSelectCurve_Example1",src:n(34300).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2"),"\n",(0,r.kt)("img",{alt:"Edge SoftSelectCurve_Example2",src:n(96313).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,r.kt)("p",null,"A property that sets the ",(0,r.kt)("strong",{parentName:"p"},"range")," over which soft selection is applied from the selected edge."),(0,r.kt)("p",null,"In Unity, ",(0,r.kt)("strong",{parentName:"p"},"1m = 1.0"),", so for ",(0,r.kt)("strong",{parentName:"p"},"0.5"),", it will select up to ",(0,r.kt)("strong",{parentName:"p"},"50cm")," from the selected edge."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge SoftSelectRange",src:n(46075).Z,width:"1920",height:"640"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"distance"},(0,r.kt)("strong",{parentName:"h2"},"Distance")),(0,r.kt)("p",null,"A Property that is displayed when an element is moved indicates the distance traveled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edge Distance",src:n(61327).Z,width:"800",height:"200"})))}c.isMDXComponent=!0},90711:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge-423773736b8b3cf92cd0ccfff6a423cb.png"},16924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BackFaceOff-6876f9044e518e89ab377d5786c33376.png"},67224:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BackFaceOn-aed7b92e8d0fc56d97e51f8993d167a7.png"},59184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BorderRectSelectOff-fb708ea4d962e22ae134f77cd7acdf8f.png"},73338:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BorderRectSelectOn-b25e5ebb01c60d6de06b96aaf6b6125c.png"},89815:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_CameraBasedOff-674e6bba432f262b4e4af505f70756ee.png"},94739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_CameraBasedOn-f82fe2b82b8237a86ea7b1c0bd744bd1.png"},23212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_DisplayUVSeam-93651241ca09def6150716be5fe0b5c2.png"},61327:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_Distance-62991ad969979eff28914978c21da229.png"},41548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_HideEdgeOverlay-69e91eab90ff37ad0d664e726671dedc.png"},80999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_MarkSeamTool-e0e9e970bd2c293a498603fb217cddec.png"},65352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelection-2671fefaaf592117109c66a38d891c51.png"},60538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurve-e810f3dd8b70ab879119178831576f4c.png"},34300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurveExample1-496ac1d251547a04a1cadce640675260.png"},96313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurveExample2-d6d94d86aa4df3d5df65efad64fbd23b.png"},46075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionRange-c3151f94610c81de848be01d48a01f9e.png"},44949:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_Xray-d30e1a22e6cbc67ff6d6a40915594730.png"},49931:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/TopIcons_Select_Edge-29d220376689af1416fb7ef244b4254a.png"}}]);