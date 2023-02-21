"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=l,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={slug:"/vertex-element",sidebar_position:1},a="Vertex",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/vertex-element",id:"editable-mesh/modeling-mode/modeling-mode-element/vertex-element",title:"Vertex",description:"Vertices are the points that make up a mesh, and moving or editing a vertex affects the elements associated with it.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-element/vertex-element.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/vertex-element",permalink:"/docs/vertex-element",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/vertex-element",sidebar_position:1},sidebar:"docs",previous:{title:"Element Group",permalink:"/docs/modeling-element"},next:{title:"Edge",permalink:"/docs/edge-element"}},s={},c=[{value:"**Vertex Element Group Properties",id:"vertex-element-group-properties",level:2},{value:"<strong>Display</strong>",id:"display",level:2},{value:"Hide Vertex Overlay",id:"hide-vertex-overlay",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Select</strong>",id:"select",level:2},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:2},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Curve shape example",id:"curve-shape-example",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vertex"},"Vertex"),(0,l.kt)("p",null,"**Vertices are the points that make up a mesh, and moving or editing a vertex affects the elements associated with it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You can view properties related to "),"Vertices",(0,l.kt)("strong",{parentName:"p"}," by pressing the keyboard shortcut ",(0,l.kt)("inlineCode",{parentName:"strong"},"Shift+1")),", or by using the buttons at the top of the scene."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"vertex-element-group-properties"},"**Vertex Element Group Properties"),(0,l.kt)("p",null,"These are the properties that are displayed for the Element group when a vertex is selected."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"display"},(0,l.kt)("strong",{parentName:"h2"},"Display")),(0,l.kt)("p",null,"Properties that allow you to choose how the mesh is displayed."),(0,l.kt)("h3",{id:"hide-vertex-overlay"},"Hide Vertex Overlay"),(0,l.kt)("p",null,"Allows you to show or hide vertices."),(0,l.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,l.kt)("p",null,"Shows faces as translucent."),(0,l.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,l.kt)("p",null,"Makes edges visible or invisible."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"select"},(0,l.kt)("strong",{parentName:"h2"},"Select")),(0,l.kt)("p",null,"Properties that allow you to set how vertices are selected."),(0,l.kt)("h3",{id:"backface-select"},"Backface Select"),(0,l.kt)("p",null,"Allows you to set whether vertices facing the opposite direction are selected."),(0,l.kt)("p",null,"**When the Backface Select property is off, opposite facing vertices are not selected."),(0,l.kt)("p",null,"**When the Backface Select property is on, opposite facing vertices are selected as well."),(0,l.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,l.kt)("p",null,"This property selects only the currently visible vertices based on the camera."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When the "),"Camera Based Select property is off, vertices that are obscured by the camera are also selected."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When the "),"Camera Based Select property is on, vertices that are hidden by the camera are not selected."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"soft-select"},(0,l.kt)("strong",{parentName:"h2"},"Soft Select")),(0,l.kt)("p",null,"This property selects vertices in the Scene that are adjacent to the selected vertex on a weighted basis."),(0,l.kt)("p",null,"The vertices selected by weight and the range you set are displayed in color, usually as a soft circle."),(0,l.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,l.kt)("p",null,"**Properties that use Soft Selection."),(0,l.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A graph-like property that determines the shape of the "),"Soft Selection",(0,l.kt)("strong",{parentName:"p"},". Tap the graph next to the "),"Soft Selection Curve property** to edit it."),(0,l.kt)("h3",{id:"curve-shape-example"},"Curve shape example"),(0,l.kt)("p",null,"Examples of how the selection shape changes depending on the Curve shape."),(0,l.kt)("p",null,"**Example 1"),(0,l.kt)("p",null,"**Example 2"),(0,l.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,l.kt)("p",null,"This property sets the range from the selected vertex to which the soft selection is applied."),(0,l.kt)("p",null,"In Unity, ",(0,l.kt)("strong",{parentName:"p"},"1m = 1.0"),", so a value of ",(0,l.kt)("strong",{parentName:"p"},"0.5")," will select up to ",(0,l.kt)("strong",{parentName:"p"},"50cm")," from the selected vertex."))}d.isMDXComponent=!0}}]);