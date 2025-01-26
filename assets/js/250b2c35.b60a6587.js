"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[37742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>r,kt:()=>Z});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=i.createContext({}),d=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},r=function(e){var t=d(e.components);return i.createElement(m.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,r=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=o,Z=p["".concat(m,".").concat(s)]||p[s]||b[s]||a;return n?i.createElement(Z,c(c({ref:t},r),{},{components:n})):i.createElement(Z,c({ref:t},r))}));function Z(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={slug:"/zepeto-item-guidebook-basics-of-modeling",sidebar_position:2,description:""},c="Basics of Modeling",l={unversionedId:"the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/index",id:"version-basic/the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/index",title:"Basics of Modeling",description:"",source:"@site/versioned_docs/version-basic/the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/index.md",sourceDirName:"the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling",slug:"/zepeto-item-guidebook-basics-of-modeling",permalink:"/docs/basic/zepeto-item-guidebook-basics-of-modeling",draft:!1,tags:[],version:"basic",sidebarPosition:2,frontMatter:{slug:"/zepeto-item-guidebook-basics-of-modeling",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Handling Files",permalink:"/docs/basic/zepeto-item-guidebook-exploring-interface-File"},next:{title:"Create Model",permalink:"/docs/basic/zepeto-item-guidebook-basics-of-modeling-create-model"}},m={},d=[{value:"Element",id:"element",level:2}],r={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics-of-modeling"},"Basics of Modeling"),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/6TjCtmFJj-I",frameborder:"0",allowfullscreen:""})),(0,o.kt)("h2",{id:"element"},"Element"),(0,o.kt)("p",null,"3D objects consist of elements called ",(0,o.kt)("inlineCode",{parentName:"p"},"vertices"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edges"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"faces"),"."),(0,o.kt)("p",null,"When two vertices are connected, they form an edge, and when at least three edges converge, they form a face."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"03_element1",src:n(751).Z,width:"1697",height:"606"})),(0,o.kt)("p",null,"Faces with ",(0,o.kt)("strong",{parentName:"p"},"three points")," are called ",(0,o.kt)("strong",{parentName:"p"},"Triangle"),", with ",(0,o.kt)("strong",{parentName:"p"},"four points")," are called ",(0,o.kt)("strong",{parentName:"p"},"quad"),", and with ",(0,o.kt)("strong",{parentName:"p"},"more points")," are called ",(0,o.kt)("strong",{parentName:"p"},"N-gons")," or ",(0,o.kt)("strong",{parentName:"p"},"polygons"),"."),(0,o.kt)("p",null,"When multiple faces are connected, they form a single object."),(0,o.kt)("p",null,"3D modeling involves adding or moving these vertices, edges, and faces to create shapes."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"While 3D software interprets objects' faces as triangles for recognition, it's much more convenient for modeling to use quad shapes rather than triangles. "),(0,o.kt)("p",{parentName:"admonition"},"Thus, it's recommended to model in ",(0,o.kt)("strong",{parentName:"p"},"quad shapes")," whenever possible. "),(0,o.kt)("p",{parentName:"admonition"},"Also, be cautious with N-gons, as they can cause issues during subdivision, UV mapping, or rigging.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"03_element",src:n(9964).Z,width:"239",height:"31"})),(0,o.kt)("p",null,"In UModeler X, you can modify these three elements and select each one using the icons provided."),(0,o.kt)("p",null,"When you select an element, it's highlighted in the Scene View, and options specific to that element appear in the inspector window."))}p.isMDXComponent=!0},9964:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAAAfCAYAAAAP4pqgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NiwgMjAyNC8wMy8xMi0wNzo0ODoyMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wNS0yN1QxNDoyMToxOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDYtMDVUMTU6MDM6MDcrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDYtMDVUMTU6MDM6MDcrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iQ0RDRkZBN0RBOEM3QkUwOTA1NzA3NkFFQUYwNUMzNEUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGVkYmJkYzQtZDRmNi0xOTQ3LWFkOGYtZDk3YjY2ZmIyMmFiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzdiYzEzMzMtMGMwZC05MzQzLThmY2ItZWU4NTgzODA0NjM3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjliZjcwMmEtOGMyZC01ODQwLWI2ODgtYjk3OTdlMTI0MDVlIiB0aWZmOkltYWdlV2lkdGg9IjIzOSIgdGlmZjpJbWFnZUxlbmd0aD0iMzEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjM5IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI5YmY3MDJhLThjMmQtNTg0MC1iNjg4LWI5Nzk3ZTEyNDA1ZSIgc3RFdnQ6d2hlbj0iMjAyNC0wNS0yN1QxNDoyMToxOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjcgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMTYxNDkyZS0wZDkwLTJkNGEtYTZlNS1iYzA5NTAwNDZhNGMiIHN0RXZ0OndoZW49IjIwMjQtMDUtMjdUMTQ6MjE6NTIrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS43IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJmNjQyZGItZDVkYi0yZDQ1LTkyYTctZmYxYjZhZDk4NWQ3IiBzdEV2dDp3aGVuPSIyMDI0LTA2LTA1VDE1OjAxOjA0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4ZTE3MGVjLThmZmYtNzE0MS05MzZjLTI3ZDExNTkzNTljZCIgc3RFdnQ6d2hlbj0iMjAyNC0wNi0wNVQxNTowMTowNCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6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"},751:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03_element1-5b13f973375ed6595a353d6d90aea676.jpg"}}]);