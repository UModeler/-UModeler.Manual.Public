"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7332],{3905:(e,i,t)=>{t.d(i,{Zo:()=>m,kt:()=>p});var r=t(67294);function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function A(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?A(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,r,o=function(e,i){if(null==e)return{};var t,r,o={},A=Object.keys(e);for(r=0;r<A.length;r++)t=A[r],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)t=A[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),d=function(e){var i=r.useContext(a),t=i;return e&&(t="function"==typeof e?e(i):n(n({},i),e)),t},m=function(e){var i=d(e.components);return r.createElement(a.Provider,{value:i},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},g=r.forwardRef((function(e,i){var t=e.components,o=e.mdxType,A=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),g=o,p=s["".concat(a,".").concat(g)]||s[g]||c[g]||A;return t?r.createElement(p,n(n({ref:i},m),{},{components:t})):r.createElement(p,n({ref:i},m))}));function p(e,i){var t=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var A=t.length,n=new Array(A);n[0]=g;var l={};for(var a in i)hasOwnProperty.call(i,a)&&(l[a]=i[a]);l.originalType=e,l[s]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<A;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1272:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>n,default:()=>s,frontMatter:()=>A,metadata:()=>l,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const A={slug:"/modeling/mirror-modifier",sidebar_position:1},n="Mirror Modifier",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier",id:"editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier",title:"Mirror Modifier",description:"Mirror Modifier",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/mirror-modifier",permalink:"/docs/modeling/mirror-modifier",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/mirror-modifier",sidebar_position:1},sidebar:"docs",previous:{title:"FFD Modifier",permalink:"/docs/modeling/ffd-modifier"},next:{title:"Push Modifier",permalink:"/docs/modeling/push-modifier"}},a={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Mirror Axis</strong>",id:"mirror-axis",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"Flip",id:"flip",level:3},{value:"Display Overlay In Source Mesh",id:"display-overlay-in-source-mesh",level:3},{value:"Angle along Y",id:"angle-along-y",level:3},{value:"Distance",id:"distance",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],m={toc:d};function s(e){let{components:i,...A}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,A,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mirror-modifier"},"Mirror Modifier"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier",src:t(4452).Z,width:"1042",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Mirror Modifier")," is a modifier that ",(0,o.kt)("strong",{parentName:"p"},"duplicates a symmetrical mesh")," along an axis."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to Use")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the Add Modifier button.\n",(0,o.kt)("img",{alt:"Modifier Add Button",src:t(76945).Z,width:"621",height:"174"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the Mirror Modifier.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Mirror Axis property, select the desired axis.\n",(0,o.kt)("img",{alt:"Mirror Modifier Properties",src:t(16730).Z,width:"1406",height:"711"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A symmetrical mesh will be duplicated along the selected axis.\n",(0,o.kt)("img",{alt:"Mirror Modifier",src:t(4452).Z,width:"1042",height:"640"})))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Properties",src:t(16730).Z,width:"1406",height:"711"})),(0,o.kt)("h3",{id:"mirror-axis"},(0,o.kt)("strong",{parentName:"h3"},"Mirror Axis")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Axis",src:t(46711).Z,width:"1332",height:"185"})),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"Property that sets the ",(0,o.kt)("strong",{parentName:"p"},"X Axis")," as the symmetry reference."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Axis X",src:t(99902).Z,width:"1406",height:"640"})),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"Property that sets the ",(0,o.kt)("strong",{parentName:"p"},"Y Axis")," as the symmetry reference."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Axis X",src:t(71281).Z,width:"1406",height:"640"})),(0,o.kt)("h3",{id:"z"},"Z"),(0,o.kt)("p",null,"This property sets the ",(0,o.kt)("strong",{parentName:"p"},"Z axis")," as the symmetry reference."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Axis Z",src:t(52613).Z,width:"1406",height:"640"})),(0,o.kt)("h3",{id:"flip"},"Flip"),(0,o.kt)("p",null,"This property reverses the direction of the axis being duplicated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mirror Modifier Flip",src:t(75104).Z,width:"1406",height:"640"})),(0,o.kt)("h3",{id:"display-overlay-in-source-mesh"},"Display Overlay In Source Mesh"),(0,o.kt)("p",null,"Property that allows you to see the axis of the selected Mirror Modifier in the ",(0,o.kt)("strong",{parentName:"p"},"Source Mesh"),"."),(0,o.kt)("h3",{id:"angle-along-y"},"Angle along Y"),(0,o.kt)("p",null,"This property rotates the axis along the Y axis."),(0,o.kt)("h3",{id:"distance"},"Distance"),(0,o.kt)("p",null,"Property for the distance from the pivot to the axis."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can also change the ",(0,o.kt)("strong",{parentName:"p"},"Distance property")," by moving the gizmo displayed on the axis.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example Usage")))}s.isMDXComponent=!0},4452:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror-86aa8c6e593048d64268e48699089a5e.png"},46711:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Axis-039a823cde638d84779bfed99e557182.png"},99902:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Axis_X-2b75acab1dcc5c91c2e2c9bade59a7a9.png"},71281:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Axis_Y-cc43bd21cb40be5783c17b0b18c8f1e1.png"},52613:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Axis_Z-e967b4cfbf99390001b580db44562e15.png"},75104:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Flip-917e787f0a66681f76838b2138d37ffd.png"},16730:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/Modeling_Modifier_Mirror_Properties-0c5e551ff66d73d2723a3fdfb01c3550.png"},76945:(e,i,t)=>{t.d(i,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1MzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTM6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMDU1NTdiLWU5MWItMWQ0OC1hNDMzLTJjMjc0M2VkZWRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjMDVmN2E5LTg2NjAtNjU0Mi04NTJiLThiOGE2ODM0MzkzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MToxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzhlNDYzNC1kOTY1LWZkNDYtOWQyMi00Y2NhZGI0MzExMDQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWUwNTU1N2ItZTkxYi0xZDQ4LWE0MzMtMmMyNzQzZWRlZGFjIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUzOjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"}}]);