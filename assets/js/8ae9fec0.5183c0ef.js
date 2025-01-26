"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[21472],{3905:(e,i,A)=>{A.d(i,{Zo:()=>a,kt:()=>b});var t=A(67294);function n(e,i,A){return i in e?Object.defineProperty(e,i,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[i]=A,e}function o(e,i){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),A.push.apply(A,t)}return A}function l(e){for(var i=1;i<arguments.length;i++){var A=null!=arguments[i]?arguments[i]:{};i%2?o(Object(A),!0).forEach((function(i){n(e,i,A[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(A,i))}))}return e}function r(e,i){if(null==e)return{};var A,t,n=function(e,i){if(null==e)return{};var A,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)A=o[t],i.indexOf(A)>=0||(n[A]=e[A]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)A=o[t],i.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var d=t.createContext({}),m=function(e){var i=t.useContext(d),A=i;return e&&(A="function"==typeof e?e(i):l(l({},i),e)),A},a=function(e){var i=m(e.components);return t.createElement(d.Provider,{value:i},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},g=t.forwardRef((function(e,i){var A=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,a=r(e,["components","mdxType","originalType","parentName"]),c=m(A),g=n,b=c["".concat(d,".").concat(g)]||c[g]||s[g]||o;return A?t.createElement(b,l(l({ref:i},a),{},{components:A})):t.createElement(b,l({ref:i},a))}));function b(e,i){var A=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=A.length,l=new Array(o);l[0]=g;var r={};for(var d in i)hasOwnProperty.call(i,d)&&(r[d]=i[d]);r.originalType=e,r[c]="string"==typeof e?e:n,l[1]=r;for(var m=2;m<o;m++)l[m]=A[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,A)}g.displayName="MDXCreateElement"},90387:(e,i,A)=>{A.r(i),A.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var t=A(87462),n=(A(67294),A(3905));const o={slug:"/modeling/push-modifier",sidebar_position:6,description:""},l="Push Modifier",r={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/push-modifier",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-modifier/push-modifier",title:"Push Modifier",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/modeling-mode/modeling-mode-modifier/push-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/push-modifier",permalink:"/docs/basic/modeling/push-modifier",draft:!1,tags:[],version:"basic",sidebarPosition:6,frontMatter:{slug:"/modeling/push-modifier",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"FFD Modifier",permalink:"/docs/basic/modeling/ffd-modifier"},next:{title:"Decimate Modifier",permalink:"/docs/basic/modeling/decimate-modifier"}},d={},m=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Push Size",id:"push-size",level:3},{value:"<strong>Examples of usage</strong>",id:"examples-of-usage",level:2}],a={toc:m};function c(e){let{components:i,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},a,o,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"push-modifier"},"Push Modifier"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Push Modifier",src:A(65307).Z,width:"1394",height:"588"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Push modifier")," is a modifier used to push faces in the normal or opposite direction."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Press the Add Modifier button.\n",(0,n.kt)("img",{alt:"Modifier Add Button",src:A(42109).Z,width:"621",height:"174"})),(0,n.kt)("li",{parentName:"ol"},"Select the Push Modifier."),(0,n.kt)("li",{parentName:"ol"},"Change the Push Size property.\n",(0,n.kt)("img",{alt:"Push Modifier Properties",src:A(62407).Z,width:"1382",height:"476"})),(0,n.kt)("li",{parentName:"ol"},"the faces will be spaced apart and become larger or smaller.\n",(0,n.kt)("img",{alt:"Push Modifier Result",src:A(99609).Z,width:"1088",height:"582"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Push Modifier Properties",src:A(62407).Z,width:"1382",height:"476"})),(0,n.kt)("h3",{id:"push-size"},"Push Size"),(0,n.kt)("p",null,"Property for how far apart the faces should be. If 0, there is no change."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Push Modifier Push Size",src:A(40467).Z,width:"1394",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples-of-usage"},(0,n.kt)("strong",{parentName:"h2"},"Examples of usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/94ArpmSYLeQ",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},42109:(e,i,A)=>{A.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1MzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTM6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMDU1NTdiLWU5MWItMWQ0OC1hNDMzLTJjMjc0M2VkZWRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjMDVmN2E5LTg2NjAtNjU0Mi04NTJiLThiOGE2ODM0MzkzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MToxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzhlNDYzNC1kOTY1LWZkNDYtOWQyMi00Y2NhZGI0MzExMDQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWUwNTU1N2ItZTkxYi0xZDQ4LWE0MzMtMmMyNzQzZWRlZGFjIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUzOjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"},65307:(e,i,A)=>{A.d(i,{Z:()=>t});const t=A.p+"assets/images/Modeling_Modifier_Push-4065521a7121076542ced828a764c2a3.png"},62407:(e,i,A)=>{A.d(i,{Z:()=>t});const t=A.p+"assets/images/Modeling_Modifier_Push_Properties-9ca4660bc93f2fd3da02d0f050b846b0.png"},40467:(e,i,A)=>{A.d(i,{Z:()=>t});const t=A.p+"assets/images/Modeling_Modifier_Push_PushSize-3cc7f2a2d084a8ac3eee58a891c0d0a6.png"},99609:(e,i,A)=>{A.d(i,{Z:()=>t});const t=A.p+"assets/images/Modeling_Modifier_Push_Result-bef77efccd63ac236f5486e391cc9fad.png"}}]);