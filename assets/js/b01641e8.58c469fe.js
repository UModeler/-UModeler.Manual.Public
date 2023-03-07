"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=l,h=c["".concat(d,".").concat(m)]||c[m]||g[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/edge-element",sidebar_position:2},o="Edge",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/edge-element",id:"editable-mesh/modeling-mode/modeling-mode-element/edge-element",title:"Edge",description:"Element Edge",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-element/edge-element.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/edge-element",permalink:"/docs/edge-element",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/edge-element",sidebar_position:2},sidebar:"docs",previous:{title:"Vertex",permalink:"/docs/vertex-element"},next:{title:"Face",permalink:"/docs/face-element"}},d={},i=[{value:"<strong>Edge Element Group Properties</strong>",id:"edge-element-group-properties",level:2},{value:"<strong>Display</strong>",id:"display",level:2},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"Display UVSeam",id:"display-uvseam",level:3},{value:"<strong>Select</strong>",id:"select",level:2},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"Border Rect Select",id:"border-rect-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:2},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"edge"},"Edge"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Element Edge",src:n(95662).Z,width:"1920",height:"1080"})),(0,l.kt)("p",null,"Edges are the lines that make up a mesh, and moving or editing an edge affects the elements associated with it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Icon Select",src:n(7316).Z,width:"1290",height:"179"})),(0,l.kt)("p",null,"You can view properties related to ",(0,l.kt)("strong",{parentName:"p"},"Edges")," by pressing the keyboard ",(0,l.kt)("strong",{parentName:"p"},"shortcut ",(0,l.kt)("inlineCode",{parentName:"strong"},"Shift+2")),", or by using the scene top buttons."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"edge-element-group-properties"},(0,l.kt)("strong",{parentName:"h2"},"Edge Element Group Properties")),(0,l.kt)("p",null,"These are the properties that are displayed for the Element group when an edge is selected."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"display"},(0,l.kt)("strong",{parentName:"h2"},"Display")),(0,l.kt)("p",null,"Properties that allow you to choose how the mesh is displayed."),(0,l.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,l.kt)("p",null,"Shows faces as translucent."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge XRay Mode",src:n(51145).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,l.kt)("p",null,"Allows edges to be visible or hidden."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Hide Edge Overlay",src:n(24899).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"display-uvseam"},"Display UVSeam"),(0,l.kt)("p",null,"Shows or hides the edge set by the ",(0,l.kt)("strong",{parentName:"p"},"Mark Seam tool"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Display UVSeam",src:n(12474).Z,width:"1920",height:"640"})),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",{parentName:"p"},"Mark Seam tool")," is a tool for UV editing, and you can use the ",(0,l.kt)("strong",{parentName:"p"},"Mark Seam tool")," in the ",(0,l.kt)("strong",{parentName:"p"},"Surface group")," to select edges to utilize in the ",(0,l.kt)("strong",{parentName:"p"},"UV Editor tool"),".\n",(0,l.kt)("img",{alt:"Edge MarkSeamTool",src:n(90863).Z,width:"1050",height:"217"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"select"},(0,l.kt)("strong",{parentName:"h2"},"Select")),(0,l.kt)("p",null,"Property that allows you to set how the edge is selected."),(0,l.kt)("h3",{id:"backface-select"},"Backface Select"),(0,l.kt)("p",null,"Allows you to set whether opposite facing edges are selected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge BackFace Off",src:n(94541).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Backface Select property")," is off, opposite facing edges are not selected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge BackFace On",src:n(69285).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Backface Select property")," is on, opposite edges are selected as well."),(0,l.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,l.kt)("p",null,"This property selects only the currently visible edges based on the camera."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Camera Based Select Off",src:n(11201).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Camera Based Select property")," is off, edges that are hidden by the camera are also selected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Camera Based Select On",src:n(95552).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Camera Based Select property")," is off, edges that are hidden by the camera are also selected."),(0,l.kt)("h3",{id:"border-rect-select"},"Border Rect Select"),(0,l.kt)("p",null,"This property selects only face edge edges."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Border Rect Select Off",src:n(80505).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Border Rect Select property")," is off, all edges are selected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Border Rect Select On",src:n(88680).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"When the ",(0,l.kt)("strong",{parentName:"p"},"Border Rect Select property")," is on, only the edges of the face and any openings are selected."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This is a great way to find ",(0,l.kt)("strong",{parentName:"p"},"punctures"),", or to find ",(0,l.kt)("strong",{parentName:"p"},"less connected vertices"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"soft-select"},(0,l.kt)("strong",{parentName:"h2"},"Soft Select")),(0,l.kt)("p",null,"This property will ",(0,l.kt)("strong",{parentName:"p"},"select based on weight")," edges that are adjacent to the selected edge in the Scene."),(0,l.kt)("p",null,"The selected edges and the range you set based on the weight are displayed in color, usually as a soft circle."),(0,l.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,l.kt)("p",null,"Properties that use ",(0,l.kt)("strong",{parentName:"p"},"Soft Selection"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Soft Selection",src:n(20492).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"graph-like property")," that determines the shape of the ",(0,l.kt)("strong",{parentName:"p"},"Soft Selection"),". Tap the graph next to the ",(0,l.kt)("strong",{parentName:"p"},"Soft Selection Curve property")," to edit it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example of Curve shape")),(0,l.kt)("p",null,"Examples of selection shape changes by Curve shape."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge Soft Selection Curve",src:n(76505).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge SoftSelectCurve_Example1",src:n(9753).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2"),"\n",(0,l.kt)("img",{alt:"Edge SoftSelectCurve_Example2",src:n(58821).Z,width:"1920",height:"640"})),(0,l.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,l.kt)("p",null,"A property that sets the ",(0,l.kt)("strong",{parentName:"p"},"range")," over which soft selection is applied from the selected edge."),(0,l.kt)("p",null,"In Unity, ",(0,l.kt)("strong",{parentName:"p"},"1m = 1.0"),", so for ",(0,l.kt)("strong",{parentName:"p"},"0.5"),", it will select up to ",(0,l.kt)("strong",{parentName:"p"},"50cm")," from the selected edge."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edge SoftSelectRange",src:n(91121).Z,width:"1920",height:"640"})))}c.isMDXComponent=!0},95662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge-423773736b8b3cf92cd0ccfff6a423cb.png"},94541:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BackFaceOff-6876f9044e518e89ab377d5786c33376.png"},69285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BackFaceOn-aed7b92e8d0fc56d97e51f8993d167a7.png"},80505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BorderRectSelectOff-fb708ea4d962e22ae134f77cd7acdf8f.png"},88680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_BorderRectSelectOn-b25e5ebb01c60d6de06b96aaf6b6125c.png"},11201:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_CameraBasedOff-674e6bba432f262b4e4af505f70756ee.png"},95552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_CameraBasedOn-f82fe2b82b8237a86ea7b1c0bd744bd1.png"},12474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_DisplayUVSeam-93651241ca09def6150716be5fe0b5c2.png"},24899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_HideEdgeOverlay-69e91eab90ff37ad0d664e726671dedc.png"},90863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_MarkSeamTool-e0e9e970bd2c293a498603fb217cddec.png"},20492:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelection-2671fefaaf592117109c66a38d891c51.png"},76505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurve-e810f3dd8b70ab879119178831576f4c.png"},9753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurveExample1-496ac1d251547a04a1cadce640675260.png"},58821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionCurveExample2-d6d94d86aa4df3d5df65efad64fbd23b.png"},91121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_SoftSelectionRange-c3151f94610c81de848be01d48a01f9e.png"},51145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Edge_Xray-d30e1a22e6cbc67ff6d6a40915594730.png"},7316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/TopIcons_Select_Edge-29d220376689af1416fb7ef244b4254a.png"}}]);