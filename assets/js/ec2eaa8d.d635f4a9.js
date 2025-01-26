"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[31078],{3905:(A,e,E)=>{E.d(e,{Zo:()=>o,kt:()=>g});var t=E(67294);function I(A,e,E){return e in A?Object.defineProperty(A,e,{value:E,enumerable:!0,configurable:!0,writable:!0}):A[e]=E,A}function i(A,e){var E=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),E.push.apply(E,t)}return E}function Q(A){for(var e=1;e<arguments.length;e++){var E=null!=arguments[e]?arguments[e]:{};e%2?i(Object(E),!0).forEach((function(e){I(A,e,E[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(E)):i(Object(E)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(E,e))}))}return A}function n(A,e){if(null==A)return{};var E,t,I=function(A,e){if(null==A)return{};var E,t,I={},i=Object.keys(A);for(t=0;t<i.length;t++)E=i[t],e.indexOf(E)>=0||(I[E]=A[E]);return I}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)E=i[t],e.indexOf(E)>=0||Object.prototype.propertyIsEnumerable.call(A,E)&&(I[E]=A[E])}return I}var l=t.createContext({}),a=function(A){var e=t.useContext(l),E=e;return A&&(E="function"==typeof A?A(e):Q(Q({},e),A)),E},o=function(A){var e=a(A.components);return t.createElement(l.Provider,{value:e},A.children)},R="mdxType",k={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},r=t.forwardRef((function(A,e){var E=A.components,I=A.mdxType,i=A.originalType,l=A.parentName,o=n(A,["components","mdxType","originalType","parentName"]),R=a(E),r=I,g=R["".concat(l,".").concat(r)]||R[r]||k[r]||i;return E?t.createElement(g,Q(Q({ref:e},o),{},{components:E})):t.createElement(g,Q({ref:e},o))}));function g(A,e){var E=arguments,I=e&&e.mdxType;if("string"==typeof A||I){var i=E.length,Q=new Array(i);Q[0]=r;var n={};for(var l in e)hasOwnProperty.call(e,l)&&(n[l]=e[l]);n.originalType=A,n[R]="string"==typeof A?A:I,Q[1]=n;for(var a=2;a<i;a++)Q[a]=E[a];return t.createElement.apply(null,Q)}return t.createElement.apply(null,E)}r.displayName="MDXCreateElement"},82663:(A,e,E)=>{E.r(e),E.d(e,{assets:()=>l,contentTitle:()=>Q,default:()=>R,frontMatter:()=>i,metadata:()=>n,toc:()=>a});var t=E(87462),I=(E(67294),E(3905));const i={slug:"/uveditor/sew-tool",sidebar_position:1,description:""},Q="Sew Tool",n={unversionedId:"editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool",id:"version-basic/editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool",title:"Sew Tool",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-weld-and-break",slug:"/uveditor/sew-tool",permalink:"/docs/basic/uveditor/sew-tool",draft:!1,tags:[],version:"basic",sidebarPosition:1,frontMatter:{slug:"/uveditor/sew-tool",sidebar_position:1,description:""},sidebar:"docs",previous:{title:"Weld And Break Group",permalink:"/docs/basic/uveditor-weld-and-break"},next:{title:"Move Sew Tool",permalink:"/docs/basic/uveditor/move-sew-tool"}},l={},a=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example of Usage</strong>",id:"example-of-usage",level:2}],o={toc:a};function R(A){let{components:e,...i}=A;return(0,I.kt)("wrapper",(0,t.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"sew-tool"},"Sew Tool"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Sew Tool",src:E(54759).Z,width:"1920",height:"640"})),(0,I.kt)("p",null,"The ",(0,I.kt)("strong",{parentName:"p"},"Sew Tool")," in the UV Editor is used to sew selected UV edges to shared UV edges."),(0,I.kt)("admonition",{type:"note"},(0,I.kt)("h2",{parentName:"admonition",id:"for-a-shared-element"},"For a ",(0,I.kt)("strong",{parentName:"h2"},"Shared Element")),(0,I.kt)("p",{parentName:"admonition"},"A ",(0,I.kt)("strong",{parentName:"p"},"shared element")," is an element that is separated by a UV, but is attached or adjacent to it in the ",(0,I.kt)("strong",{parentName:"p"},"mesh"),"."),(0,I.kt)("admonition",{parentName:"admonition",title:"UV Color",type:"info"},(0,I.kt)("p",{parentName:"admonition"},"Shared elements are colored ",(0,I.kt)("strong",{parentName:"p"},"blue (default)"),".\n",(0,I.kt)("img",{alt:"Shared Tool Color Blue",src:E(74419).Z,width:"914",height:"490"})))),(0,I.kt)("hr",null),(0,I.kt)("h2",{id:"how-to-use"},(0,I.kt)("strong",{parentName:"h2"},"How to Use")),(0,I.kt)("ol",null,(0,I.kt)("li",{parentName:"ol"},"Select the UV edges you want to connect.\n",(0,I.kt)("img",{alt:"Sew Tool Select",src:E(60545).Z,width:"898",height:"550"})),(0,I.kt)("li",{parentName:"ol"},"Run the ",(0,I.kt)("strong",{parentName:"li"},"Sew Tool"),"."),(0,I.kt)("li",{parentName:"ol"},"The selected UV edges will be ",(0,I.kt)("strong",{parentName:"li"},"moved")," to the ",(0,I.kt)("strong",{parentName:"li"},"shared UV edge")," and joined together.\n",(0,I.kt)("img",{alt:"Sew Tool Result",src:E(8142).Z,width:"898",height:"550"}))),(0,I.kt)("hr",null),(0,I.kt)("h2",{id:"example-of-usage"},(0,I.kt)("strong",{parentName:"h2"},"Example of Usage")),(0,I.kt)("div",{class:"video-container-4-3"},(0,I.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/RNi1ZQ9T6MM",frameborder:"0",allowfullscreen:""})))}R.isMDXComponent=!0},74419:(A,e,E)=>{E.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5IAAAHqCAYAAAB2n3GXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPaWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0xMFQwMToxNzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMTBUMDE6MTc6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NDZiODJkLWYxN2QtM2M0ZS05MzEzLThmZTNjN2RhZTQwYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlNzJhNjcxLTVkOWEtOTk0MS1hNmJlLTQxMzczMmQzZGJkYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjczMmJmNDBlLTBiNzYtZTU0MS05OWZhLWExMTZhOWNmM2Y4YiIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0xMFQwMToxNDowNSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNWQ5ODZlNi03NDAzLTJhNGUtODg1NC01ODAxZjQxYjZlN2QiIHN0RXZ0OndoZW49IjIwMjMtMDMtMTBUMDE6MTQ6MDUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjY0NmI4MmQtZjE3ZC0zYzRlLTkzMTMtOGZlM2M3ZGFlNDBiIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTEwVDAxOjE3OjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczMmJmNDBlLTBiNzYtZTU0MS05OWZhLWExMTZhOWNmM2Y4YiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGU1YWI3NDQtNmM2Mi0yYTQyLTkyOWMtMGUyNGM0OTU2ZDkzPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyMTQyOTQ4LTc5ODYtYmM0NC04NzhjLTVkNjM3YTQ3Nzc5MTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NDAyZGNjNS00ODM3LWNkNGYtYjA4Yy1lODNlYTQ4Y2MzZWE8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ODM4ZTU2ZjQtMjQ2OS01OTRhLTk1ODAtYzgxMjIzZmMyNDE1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjlhNWQwYmRjLTEwYTAtOWU0ZC1hYWE3LWE3M2E5N2MwYjhmYzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYjVmODYxYS0zODY1LTIxNGMtYTIxYy0xNWIzMzRkMzg2OWM8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmVhMjdiMjMtNjQzMi0xYjQ2LWI1OTMtYjExYmM3M2I2NzkzPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmMzZGJkMzg1LWU1M2YtZDA0NS1iZjFkLTU3ZGIxYjdlYTBmNDwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8cmRmOlNlcT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L3RpZmY6Qml0c1BlclNhbXBsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sP38/AAAQT0lEQVR4nO3dz4vcdx3H8ffszE7bkAVPrVppLz1oDl6ioJBDFsFzC61Z/wIRFNFDiydvovagB/0XSkqJrfgHJLciGIRCoIeWIDSVniek+J3ZHQ/bFGJ+7L6S785n5ruPBwSSnZDvG97z/Waeme9ORsvlsgAAAOC4tloPAAAAwGYRkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARCatB2AYdnd3H/TlaVW9/MWP71fV17/42hOZzWa1s7PzpH8Ma8I+h8Muh8U+h8Muh+WIfd6uqk+q6l9V9W5V/a2quv//TVevXj2x+Tg9hCQn5ZWq+kNVvdR6EACAU+JsVX3zix8/rqqPquqNqvpry6EYJre20rdxVf2+Di9YIhIAoJ2XqupKHb42GzeehYHxjiR9+21Vvd56CAAAvnT3tdkbTadgULwjSZ9eLREJALCOXq/D12rQCyFJX6ZV9cfWQwAA8FB/qh4++BCqhCT9ea2qvtF6CAAAHur5qvpR6yEYBiFJX15uPQAAAEd6ufUADIOQpC/fbT0AAABH+k7rARgGIUlfvtp6AAAAjvS11gMwDEKSvjzVegAAAI7kw3bohZAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAik9YDAADr5drVa498/OLuxVWMAaeOc49N4h1JAAAAIt6RBAAi+0/vtx6BwMH8wM6A3glJACDy8U8/bj0Cgfl8Xtvb263HAAZGSAIAkRdvvth6BAL7i/0aT8atx+AYPq1PW48AxyYkAYDIC++/0HoEAl3X1XQ6bT0Gx/D+L95vPQIcmw/bAQAAICIkAQAAiLi1FQC4x8XdizWbzeqpF5+qj3/ycZ37x7l69sazrceCwbu0d+nLn1+4cKFu3LhRH374YcOJ4OG8IwkAAEBESAIAABARkgAAAER8jyS9mM1mgz4eJ8s+h8Muh+X27du1mC9qsVhU13Wtx+EJ2N/mOTg4qDt37jzwuupayzoQkvRiZ2dnZceazWYrPR4nyz6Hwy6HZTab1dmzZ2uyPanJZOL/Idxg/h/JzbS1tVVnzpy577rqWsu6cGsrAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAACRSesBGIbZbDbo43Gy7HM47HJYbt++XYv5ohaLRXVd13ocnoD9bZ6Dg4O6c+fOA6+rrrWsAyFJL3Z2dlZ2rNlsttLjcbLsczjsclhms1mdPXu2JtuTmkwmNZ1OW4/EY+q6zv420NbWVp05c+a+66prLevCra0AAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAkUnrAQAe5NrFq498/OK13RVNAqfPtavX7vn1Zz/87J5fX9q7tMJp4PS4fPnyIx/f3fV3H+vDO5IAAABEhCQAAAARt7bSiw++/buVHWt/sajxxFN3KB53n6t8znE8zs0h+d4jHz137tyK5qAP+/v7NR6PW49BD86fP1+ff/55PfPMM61HASFJP7ae/srKjjVaLms0Gq3seJysx93nKp9zHI9z8/TwInazCMnheO655+yTtSEk6cUP/v2blR2rm89rur29suNxsh62z7e/9egPHFjlc47jcW4Ox9tHPH79+vWVzEE/uq6r6XTaegx6cP36dftkbfgeSTbPctl6Avpkn8NhlwBwaghJAAAAIqOlf0GmB3t7eyt7IrmlY1iOs8/xeFyXLl2qt956a0VT8Ticm8Nyd597e3t15cqVms/nrUfiMTk3N9OFCxfq1q1bdfPmzXu+3sc+L1++7BvaeWLekQQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAik9YDMAxd1w36eJyso/Y5mUxquVza+wawo2Hpuq6Wy2XN53O73XD2t3kODg5qsVg8cHf2yToQkvRiOp2u7Fhd1630eJys4+xzPB7XaDSy9zXn3ByWu/scjUa1vb3dehyegHNzM21tbdVkMrlvd/bJunBrKwAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAREgCAAAQEZIAAABEhCQAAAARIQkAAEBESAIAABARkgAAAESEJAAAABEhCQAAQERIAgAAEBGSAAAARIQkAAAAESEJAABAZNJ6AIah67pBH4+TddQ+J5NJLZdLe98AdjQsXdfVcrms+XxutxvO/jbPwcFBLRaLB+7OPlkHQpJeTKfTlR2r67qVHo+TdZx9jsfjGo1G9r7mnJvDcnefo9Gotre3W4/DE3Bubqatra2aTCb37c4+WRdubQUAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkISAACAiJAEAAAgIiQBAACICEkAAAAiQhIAAICIkAQAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiAhJAAAAIkKSvsxaDwAAwJG61gMwDEKSvvyn9QAAABzJazZ6ISTpywetBwAA4Ej/bD0AwyAk6ct7rQcAAOBI77UegGEQkvTlnar6pPUQAAA81K06fM0GT0xI0peuqn7VeggAAB7ql1X139ZDMAxCkj69U1Vvth4CAID7vFnejaRHQpK+/bqq/tx6CAAAvvSXOnyNBr0RkvRtv6p+XlWvVtVHjWcBADjNPqqq16rqZ3X4Gg16M2k9AIN1par+XocXr1eq6nxVPV9V2y2HAgAYsHkdfqDO9ap6tw5vZe2aTsRgjZbLZesZAAAA2CBubQUAACAiJAEAAIgISQAAACJCEgAAgIiQBAAAICIkAQAAiPwPhyPcnEhGOi8AAAAASUVORK5CYII="},54759:(A,e,E)=>{E.d(e,{Z:()=>t});const t=E.p+"assets/images/UVEditor_WeldAndBreak_Sew-bde74a14718e21a4aa0b735e20aa20c9.png"},8142:(A,e,E)=>{E.d(e,{Z:()=>t});const t=E.p+"assets/images/UVEditor_WeldAndBreak_Sew_Result-510f9dd2cfe7272883913b4b908889c8.png"},60545:(A,e,E)=>{E.d(e,{Z:()=>t});const t=E.p+"assets/images/UVEditor_WeldAndBreak_Sew_Select-e519b384415ea1651ce6e1ffa225eeff.png"}}]);