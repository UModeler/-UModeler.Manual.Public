"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9342],{3905:(e,i,t)=>{t.d(i,{Zo:()=>a,kt:()=>b});var A=t(67294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);i&&(A=A.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,A)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,A,n=function(e,i){if(null==e)return{};var t,A,n={},o=Object.keys(e);for(A=0;A<o.length;A++)t=o[A],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)t=o[A],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=A.createContext({}),m=function(e){var i=A.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},a=function(e){var i=m(e.components);return A.createElement(d.Provider,{value:i},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var i=e.children;return A.createElement(A.Fragment,{},i)}},s=A.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),c=m(t),s=n,b=c["".concat(d,".").concat(s)]||c[s]||g[s]||o;return t?A.createElement(b,r(r({ref:i},a),{},{components:t})):A.createElement(b,r({ref:i},a))}));function b(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=s;var l={};for(var d in i)hasOwnProperty.call(i,d)&&(l[d]=i[d]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var m=2;m<o;m++)r[m]=t[m];return A.createElement.apply(null,r)}return A.createElement.apply(null,t)}s.displayName="MDXCreateElement"},80017:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var A=t(87462),n=(t(67294),t(3905));const o={slug:"/modeling/ffd-modifier",sidebar_position:5,description:""},r="FFD Modifier",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/ffd-modifier",id:"version-plus/editable-mesh/modeling-mode/modeling-mode-modifier/ffd-modifier",title:"FFD Modifier",description:"",source:"@site/versioned_docs/version-plus/editable-mesh/modeling-mode/modeling-mode-modifier/ffd-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/ffd-modifier",permalink:"/docs/plus/modeling/ffd-modifier",draft:!1,tags:[],version:"plus",sidebarPosition:5,frontMatter:{slug:"/modeling/ffd-modifier",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Mirror Modifier",permalink:"/docs/plus/modeling/mirror-modifier"},next:{title:"Push Modifier",permalink:"/docs/plus/modeling/push-modifier"}},d={},m=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Reset",id:"reset",level:3},{value:"<strong>Examples</strong>",id:"examples",level:2},{value:"FFD 2x2x2",id:"ffd-2x2x2",level:3},{value:"FFD 3x3x3",id:"ffd-3x3x3",level:3},{value:"FFD 4x4x4",id:"ffd-4x4x4",level:3}],a={toc:m};function c(e){let{components:i,...o}=e;return(0,n.kt)("wrapper",(0,A.Z)({},a,o,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ffd-modifier"},"FFD Modifier"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FFD Modifier",src:t(31168).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Free Form Deformaion (FFD)")," modifier is a modifier that uses a grid box surrounding a mesh and vertices that can be manipulated to deform the grid."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"the-types-of-fff-modifiers"},"The ",(0,n.kt)("strong",{parentName:"h2"},"Types of FFF Modifiers"),"."),(0,n.kt)("p",{parentName:"admonition"},"There are three types of ",(0,n.kt)("strong",{parentName:"p"},"FFD Modifiers")," based on the number of ",(0,n.kt)("strong",{parentName:"p"},"manipulatable vertices"),"."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FFD 2x2x2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FFD 3x3x3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FFD 4x4x4")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Press the Add Modifier button.\n",(0,n.kt)("img",{alt:"Modifier Add Button",src:t(31505).Z,width:"621",height:"174"})),(0,n.kt)("li",{parentName:"ol"},"Select an ",(0,n.kt)("strong",{parentName:"li"},"FFD Modifier")," with the desired number of vertices.\n",(0,n.kt)("img",{alt:"FFD Modifier",src:t(21039).Z,width:"1920",height:"640"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click-Drag"))," the vertices in the grid box.\n",(0,n.kt)("img",{alt:"FFD Modifier Drag",src:t(81866).Z,width:"1120",height:"614"})),(0,n.kt)("li",{parentName:"ol"},"The mesh will deform smoothly.\n",(0,n.kt)("img",{alt:"FFD Modifier Result",src:t(7367).Z,width:"1030",height:"452"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FFD Modifier",src:t(21039).Z,width:"1920",height:"640"})),(0,n.kt)("h3",{id:"reset"},"Reset"),(0,n.kt)("p",null,"This property resets the deformation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FFD Modifier Reset",src:t(65401).Z,width:"1920",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},(0,n.kt)("strong",{parentName:"h2"},"Examples")),(0,n.kt)("h3",{id:"ffd-2x2x2"},"FFD 2x2x2"),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/A1EibjILH7A",frameborder:"0",allowfullscreen:""})),(0,n.kt)("h3",{id:"ffd-3x3x3"},"FFD 3x3x3"),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/L7kujXjVsb8",frameborder:"0",allowfullscreen:""})),(0,n.kt)("h3",{id:"ffd-4x4x4"},"FFD 4x4x4"),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/25_ZbGLgL8Q",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},31168:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/Modeling_Modifier_FFD-00d6d2f403c15d0b050b451c182d78e2.png"},21039:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/Modeling_Modifier_FFD_AllProperties-ff82357792c0acb6db0b55aa1ecc236e.png"},81866:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/Modeling_Modifier_FFD_Drag-769d3d7172b6ac1dfbc2fc4a85783097.png"},65401:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/Modeling_Modifier_FFD_Reset-6db10f2129abb762fe8f0ecae5ec0c0c.png"},7367:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/Modeling_Modifier_FFD_Result-b09cbf5807dbee5c5c7e57a027d3d0f8.png"},31505:(e,i,t)=>{t.d(i,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1MzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTM6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMDU1NTdiLWU5MWItMWQ0OC1hNDMzLTJjMjc0M2VkZWRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjMDVmN2E5LTg2NjAtNjU0Mi04NTJiLThiOGE2ODM0MzkzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MToxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzhlNDYzNC1kOTY1LWZkNDYtOWQyMi00Y2NhZGI0MzExMDQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWUwNTU1N2ItZTkxYi0xZDQ4LWE0MzMtMmMyNzQzZWRlZGFjIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUzOjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"}}]);