"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4441],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>g});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var A=r.createContext({}),d=function(e){var t=r.useContext(A),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=d(e.components);return r.createElement(A.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,A=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(i),c=o,g=s["".concat(A,".").concat(c)]||s[c]||p[c]||n;return i?r.createElement(g,a(a({ref:t},m),{},{components:i})):r.createElement(g,a({ref:t},m))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=c;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<n;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},59335:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>A,contentTitle:()=>a,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=i(87462),o=(i(67294),i(3905));const n={slug:"/modeling/decimate-modifier",sidebar_position:7,description:""},a="Decimate Modifier",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/decimate-modifier",id:"editable-mesh/modeling-mode/modeling-mode-modifier/decimate-modifier",title:"Decimate Modifier",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-modifier/decimate-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/decimate-modifier",permalink:"/docs/modeling/decimate-modifier",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/modeling/decimate-modifier",sidebar_position:7,description:""},sidebar:"docs",previous:{title:"Push Modifier",permalink:"/docs/modeling/push-modifier"},next:{title:"Linear Array Modifier",permalink:"/docs/modeling/lineararray-modifier"}},A={},d=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Preserve Border Edges",id:"preserve-border-edges",level:3},{value:"Preserve Surface Curvature",id:"preserve-surface-curvature",level:3},{value:"<strong>Enable Smart Link</strong>",id:"enable-smart-link",level:3},{value:"Preserve UVSeam Edges",id:"preserve-uvseam-edges",level:3},{value:"Preserve UVFoldover Edges",id:"preserve-uvfoldover-edges",level:3},{value:"Max Iteration Count",id:"max-iteration-count",level:3},{value:"Aggressiveness",id:"aggressiveness",level:3},{value:"Ratio",id:"ratio",level:3},{value:"Preview Overlay",id:"preview-overlay",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decimate-modifier"},"Decimate Modifier"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"decimate modifier",src:i(29552).Z,width:"1824",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Decimate Modifier")," is a modifier for reducing the number of polygons in a model."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Decimate modifier")," allows you to reduce the number of polygons in your model while maintaining as much detail as possible, which can improve mesh render times and overall performance."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Decimate Ratio",src:i(41202).Z,width:"1953",height:"1235"})),(0,o.kt)("p",{parentName:"admonition"},"However, it should be set with the understanding that there may be significant changes in the appearance of the model depending on the properties set.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to use")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press the ",(0,o.kt)("strong",{parentName:"li"},"Modifier Add Button"),".\n",(0,o.kt)("img",{alt:"Modifier Add Button",src:i(2165).Z,width:"621",height:"174"})),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Decimate Modifier"),"."),(0,o.kt)("li",{parentName:"ol"},"Adjust the ",(0,o.kt)("strong",{parentName:"li"},"Ratio property"),".\n",(0,o.kt)("img",{alt:"Properties",src:i(22239).Z,width:"1194",height:"761"})),(0,o.kt)("li",{parentName:"ol"},"The number of polygons in the model will decrease according to the adjusted ",(0,o.kt)("strong",{parentName:"li"},"Ratio property"),".\n",(0,o.kt)("img",{alt:"Result",src:i(29552).Z,width:"1824",height:"640"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Properties",src:i(22239).Z,width:"1194",height:"761"})),(0,o.kt)("h3",{id:"preserve-border-edges"},"Preserve Border Edges"),(0,o.kt)("p",null,"This property preserves the edges of faces and openings as much as possible."),(0,o.kt)("h3",{id:"preserve-surface-curvature"},"Preserve Surface Curvature"),(0,o.kt)("p",null,"Property for preserving surface curvature as much as possible. This is recommended to be enabled to preserve silhouettes."),(0,o.kt)("h3",{id:"enable-smart-link"},(0,o.kt)("strong",{parentName:"h3"},"Enable Smart Link")),(0,o.kt)("p",null,"This property allows vertices that are in the same location to be treated as the same vertex to avoid issues such as holes when reducing polygons."),(0,o.kt)("h3",{id:"preserve-uvseam-edges"},"Preserve UVSeam Edges"),(0,o.kt)("p",null,"A property that preserves the edges of the UVs that are the boundaries of the UVs and the corresponding edges of the model, keeping the UVs that touch the texture and consequently ensuring that the texture is well represented in the model."),(0,o.kt)("p",null,"Only works when the ",(0,o.kt)("strong",{parentName:"p"},"Enable Smart Link property")," is enabled."),(0,o.kt)("h3",{id:"preserve-uvfoldover-edges"},"Preserve UVFoldover Edges"),(0,o.kt)("p",null,"This property preserves edges that have the same UV."),(0,o.kt)("p",null,"Only works when the ",(0,o.kt)("strong",{parentName:"p"},"Enable Smart Link property")," is enabled."),(0,o.kt)("h3",{id:"max-iteration-count"},"Max Iteration Count"),(0,o.kt)("p",null,"This property sets the ",(0,o.kt)("strong",{parentName:"p"},"maximum iteration count")," of the polygon reduction process. "),(0,o.kt)("h3",{id:"aggressiveness"},"Aggressiveness"),(0,o.kt)("p",null,"This property sets the aggressiveness of the polygon reduction process. Higher values will remove more polygons, but the quality of the reduction may be lower. "),(0,o.kt)("h3",{id:"ratio"},"Ratio"),(0,o.kt)("p",null,"A property for the ratio of the number of existing polygons. "),(0,o.kt)("p",null,"For example, a value of 0.5 for the ",(0,o.kt)("strong",{parentName:"p"},"Ratio property")," aims to reduce the number of polygons by 50% compared to the existing."),(0,o.kt)("h3",{id:"preview-overlay"},"Preview Overlay"),(0,o.kt)("p",null,"A wireframe preview of the polygon reduction result."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example Usage")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/RKCiHxPpOSo",frameborder:"0",allowfullscreen:""})))}s.isMDXComponent=!0},29552:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Modeling_Modifier_Decimate-2744140ae49f81e895dfa633a6f6e236.png"},22239:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Modeling_Modifier_Decimate_Properties-7755a00f4a3152fd8093036e0f32aa61.png"},41202:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Modeling_Modifier_Decimate_Ratio-fec663e7bdcdd626078912ac2610ce12.png"},2165:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1MzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTM6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMDU1NTdiLWU5MWItMWQ0OC1hNDMzLTJjMjc0M2VkZWRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjMDVmN2E5LTg2NjAtNjU0Mi04NTJiLThiOGE2ODM0MzkzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MToxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzhlNDYzNC1kOTY1LWZkNDYtOWQyMi00Y2NhZGI0MzExMDQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWUwNTU1N2ItZTkxYi0xZDQ4LWE0MzMtMmMyNzQzZWRlZGFjIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUzOjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"}}]);