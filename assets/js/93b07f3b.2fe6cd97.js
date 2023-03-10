"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=d(n),A=i,g=c["".concat(p,".").concat(A)]||c[A]||s[A]||r;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=A;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},24634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={slug:"/modeling-mode"},l="Modeling Mode",a={unversionedId:"editable-mesh/modeling-mode/index",id:"editable-mesh/modeling-mode/index",title:"Modeling Mode",description:"Modeling Mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/index.md",sourceDirName:"editable-mesh/modeling-mode",slug:"/modeling-mode",permalink:"/docs/modeling-mode",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-mode"},sidebar:"docs",previous:{title:"Editable Mesh",permalink:"/docs/editable-mesh"},next:{title:"Modifier",permalink:"/docs/modifier"}},p={},d=[{value:"<strong>Groups in Modeling Mode</strong>",id:"groups-in-modeling-mode",level:2},{value:"Element groups",id:"element-groups",level:3},{value:"Primitive Shapes Group",id:"primitive-shapes-group",level:3},{value:"Drawing Group",id:"drawing-group",level:3},{value:"Selection Group",id:"selection-group",level:3},{value:"Add group",id:"add-group",level:3},{value:"Remove Group",id:"remove-group",level:3},{value:"Deform Group",id:"deform-group",level:3},{value:"Surface Group",id:"surface-group",level:3},{value:"Misc Groups",id:"misc-groups",level:3},{value:"Multiple Object Group",id:"multiple-object-group",level:3}],m={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modeling-mode"},"Modeling Mode"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Modeling Mode",src:n(63403).Z,width:"634",height:"380"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modeling mode")," is the primary mode for editable meshes, and its primary function is to edit meshes. This mode is broken down into tools, which serve multiple functions, properties, which are detailed settings for the tools, and groups, which are groups of tools."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h2",{parentName:"admonition",id:"element"},(0,i.kt)("strong",{parentName:"h2"},"Element"),"."),(0,i.kt)("p",{parentName:"admonition"},"In order to use a tool, you must select or use a 3D primitive called an ",(0,i.kt)("strong",{parentName:"p"},"Element"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Modeling Mode",src:n(47701).Z,width:"890",height:"130"})),(0,i.kt)("p",{parentName:"admonition"},"Elements are composed of ",(0,i.kt)("strong",{parentName:"p"},"Vertices, Edges, Faces, and Objects"),"."),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("strong",{parentName:"p"},"Vertex")," is a vertex of a 3D object, while an ",(0,i.kt)("strong",{parentName:"p"},"Edge")," represents a corner made up of two vertices. A ",(0,i.kt)("strong",{parentName:"p"},"Face")," is a surface filled by connecting three or more edges.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UModelerX")," provides several tools for editing and creating ",(0,i.kt)("strong",{parentName:"p"},"vertices, edges, and faces"),"."),(0,i.kt)("p",null,"Moving, rotating, and resizing each element is the same as in the Unity Editor."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"groups-in-modeling-mode"},(0,i.kt)("strong",{parentName:"h2"},"Groups in Modeling Mode")),(0,i.kt)("h3",{id:"element-groups"},"Element groups"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Element group")," is located at the top of Modeling Mode and is a collection of properties for each element (",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,i.kt)("p",null,"Each element has different visible properties."),(0,i.kt)("h3",{id:"primitive-shapes-group"},"Primitive Shapes Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Primitive Shapes Group",src:n(12531).Z,width:"1140",height:"227"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes group")," is a collection of tools that allow you to create meshes of ",(0,i.kt)("strong",{parentName:"p"},"primitive shapes"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes group")," page."),(0,i.kt)("h3",{id:"drawing-group"},"Drawing Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drawing Group",src:n(80777).Z,width:"820",height:"219"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Drawing group")," is a collection of tools for creating ",(0,i.kt)("strong",{parentName:"p"},"planar shapes"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Drawing group")," page."),(0,i.kt)("h3",{id:"selection-group"},"Selection Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selection Group",src:n(9970).Z,width:"890",height:"377"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Selection group")," is a collection of tools related to the selection of elements (",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Selection Group")," page."),(0,i.kt)("h3",{id:"add-group"},"Add group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Group",src:n(9453).Z,width:"988",height:"369"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Add group")," is a collection of tools that, when executed, will add each element (Vertex, Edge, Face)."),(0,i.kt)("p",null,"It mainly contains tools that either add selected elements or add elements defined in the tool."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Add Group")," page."),(0,i.kt)("h3",{id:"remove-group"},"Remove Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Group",src:n(46150).Z,width:"934",height:"369"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Remove group")," is a collection of tools that, when executed, ",(0,i.kt)("strong",{parentName:"p"},"remove each element (Vertex, Edge, Face)"),"."),(0,i.kt)("p",null,"It usually contains tools that either ",(0,i.kt)("strong",{parentName:"p"},"delete selected elements")," or ",(0,i.kt)("strong",{parentName:"p"},"combine elements by the tool"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Remove group")," page."),(0,i.kt)("h3",{id:"deform-group"},"Deform Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deform Group",src:n(43157).Z,width:"1010",height:"219"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Deform group")," is a collection of brush-like tools that apply deformations to surfaces."),(0,i.kt)("p",null,"For more information, see the Deform group page."),(0,i.kt)("h3",{id:"surface-group"},"Surface Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Surface Group",src:n(87614).Z,width:"916",height:"221"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Surface group")," is a collection of tools for surfaces."),(0,i.kt)("p",null,"It mainly contains vertex colors, material settings, and tools that can be used with the UV Editor."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Surface group")," page."),(0,i.kt)("h3",{id:"misc-groups"},"Misc Groups"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Misc Group",src:n(72836).Z,width:"852",height:"223"})),(0,i.kt)("p",null,"The Misc group is a collection of functional tools that do not belong in any other group."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Misc Groups")," page."),(0,i.kt)("h3",{id:"multiple-object-group"},"Multiple Object Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Multiple Object Group",src:n(6226).Z,width:"768",height:"215"})),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Multiple Object group")," is a collection of tools that can be used with multiple UModeler X objects selected."),(0,i.kt)("p",null,"For more information, see the Multiple Object Group page."))}c.isMDXComponent=!0},63403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/EditableMesh_ModelingMode-ab1fcb732fc505459e84539f4a38747c.png"},9453:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Add-6ce102e4f76cea9fd7b4175eceb919b8.png"},43157:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Deform-70c97b82d05dec385bdba7c7903ee869.png"},80777:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Drawing-00e8f0fa97b4a1ebe403dd6f9bf4e01f.png"},72836:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Misc-deb782276c29616c6cd5b51ec8bae979.png"},6226:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_MultipleObject-21ccef2c9528f1aafb70f71818ade314.png"},12531:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_PrimitiveShapes-97a2833ceed908791f8a0943277045da.png"},46150:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Remove-bf548571fe7f44be1b8e70a6c49afba1.png"},9970:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Selection-648436c66f7183d90561544dc9ea358b.png"},87614:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Surface-f25105a8791d2e5e01fbde888a092e9f.png"},47701:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3oAAACCCAYAAAAQerqRAAAACXBIWXMAAAsTAAALEwEAmpwYAAANpmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wM1QyMTo1MToyMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDNUMjE6NTE6MjIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIxMmFhYzdmLTgwYmEtYmE0Mi05OGQxLWE4MDQ4YWM3NjgzMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZjYjU0MjA5LTc0MDEtYzI0NS04MzYxLTIzNmEzODQ1ZjFkMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSI4OTAiIHRpZmY6SW1hZ2VMZW5ndGg9IjEzMCIgdGlmZjpDb21wcmVzc2lvbj0iMSIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpQbGFuYXJDb25maWd1cmF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249Ijg5MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEzMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2U3YmVlODYtOWM2Yy1iMzQzLWFlN2UtZWJjNDk0ZWM0M2ExIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDExOjAxOjM2KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3N2E3MGI1LTgxNmUtNzI0Ni1iMmZmLWRmNmNiNzVmOGFhNiIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0yOFQxMjozMTowOCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTRmZTY2OC03NzUyLWE1NDctYThmYS01YjFkMGQ3MDlmOTgiIHN0RXZ0OndoZW49IjIwMjMtMDItMjhUMTI6NDY6NTUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBpbWFnZS90aWZmIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvdGlmZiIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNkZDc0NzUtNDJlYS1jMzRkLWFkMGUtMzRmYmIwYjBmYjIyIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDEyOjQ2OjU1KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFkMDA4MTlhLTNhOTMtMTI0YS05YzM2LTQzY2I4NzgxZWM3NCIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wM1QyMTo1MToyMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMTJhYWM3Zi04MGJhLWJhNDItOThkMS1hODA0OGFjNzY4MzEiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDNUMjE6NTE6MjIrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWQwMDgxOWEtM2E5My0xMjRhLTljMzYtNDNjYjg3ODFlYzc0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzQxNzU5ODQtNWY0MS02ZjRjLTkwZWItMTlhYmI1MTI1ZTdmIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2U3YmVlODYtOWM2Yy1iMzQzLWFlN2UtZWJjNDk0ZWM0M2ExIi8+IDx0aWZmOkJpdHNQZXJTYW1wbGU+IDxyZGY6U2VxPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvdGlmZjpCaXRzUGVyU2FtcGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBAnmQAAA7tSURBVHic7d1bj1Vlmgfwf4EUVAmCMVYGWkG0gqeIGuFijCQa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"}}]);