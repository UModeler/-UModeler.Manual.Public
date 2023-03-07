"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),m=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=m(n),k=a,u=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return n?l.createElement(u,i(i({ref:t},s),{},{components:n})):l.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var m=2;m<o;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>S});var l=n(67294),a=n(86010),o=n(53438),i=n(39960),r=n(13919),c=n(95999);const m="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return l.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",m)},n)}function k(e){let{href:t,icon:n,title:o,description:i}=e;return l.createElement(d,{href:t},l.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:o},n," ",o),i&&l.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function u(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?l.createElement(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return l.createElement(k,{href:t.href,icon:n,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(h,{item:t});case"category":return l.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return l.createElement(S,{items:n.items,className:t})}function S(e){const{items:t,className:n}=e;if(!t)return l.createElement(f,e);const i=(0,o.MN)(t);return l.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(g,{item:e})))))}},83776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var l=n(87462),a=(n(67294),n(3905)),o=n(52991);const i={slug:"/modeling-element"},r="Element Group",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/index",id:"editable-mesh/modeling-mode/modeling-mode-element/index",title:"Element Group",description:"ElementGroup",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-element/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/modeling-element",permalink:"/docs/modeling-element",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-element"},sidebar:"docs",previous:{title:"Subdivide Modifier",permalink:"/docs/modeling/subdivide-modifier"},next:{title:"Vertex",permalink:"/docs/vertex-element"}},m={},s=[{value:"<strong>Change the element to be edited</strong>.",id:"change-the-element-to-be-edited",level:2},{value:"<strong>Common Properties</strong>",id:"common-properties",level:2},{value:"<strong>Display</strong>",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:3},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"element-group"},"Element Group"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ElementGroup",src:n(9460).Z,width:"2068",height:"923"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Element group")," is located at the top of the modeling mode and contains properties for each element (",(0,a.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,a.kt)("h2",{id:"change-the-element-to-be-edited"},(0,a.kt)("strong",{parentName:"h2"},"Change the element to be edited"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Top Icons",src:n(1558).Z,width:"890",height:"96"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Source Mesh")," in Modeling mode can be edited by ",(0,a.kt)("strong",{parentName:"p"},"selecting and editing elements"),"."),(0,a.kt)("p",null,"There are three editable elements (",(0,a.kt)("strong",{parentName:"p"},"Vertex"),", ",(0,a.kt)("strong",{parentName:"p"},"Edge"),", and ",(0,a.kt)("strong",{parentName:"p"},"Face"),") and an ",(0,a.kt)("strong",{parentName:"p"},"Object")," that exits the edit state, and you can select which element to edit with via the icons at the top of the ",(0,a.kt)("strong",{parentName:"p"},"Scene"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Element Select",src:n(80485).Z,width:"1744",height:"1040"})),(0,a.kt)("p",null,"Depending on the selection of elements, there are properties that are common to the ",(0,a.kt)("strong",{parentName:"p"},"Element group")," and properties that are specific to each element."),(0,a.kt)("p",null,"The pages for each element below provide a description of each element and an easy way to see which properties apply based on the element selection."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"common-properties"},(0,a.kt)("strong",{parentName:"h2"},"Common Properties")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ElementCommon",src:n(32507).Z,width:"790",height:"536"})),(0,a.kt)("p",null,"Properties that are common to each element in the ",(0,a.kt)("strong",{parentName:"p"},"Element group"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"display"},(0,a.kt)("strong",{parentName:"h3"},"Display")),(0,a.kt)("p",null,"Properties that allow you to choose how the mesh is displayed."),(0,a.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,a.kt)("p",null,"Displays faces as translucent."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Xray Mode",src:n(80779).Z,width:"1920",height:"640"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"XRay Mode property")," makes it easy to see elements behind complex models.")),(0,a.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,a.kt)("p",null,"Makes edges visible or hidden."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_HideEdgeOverlay",src:n(11628).Z,width:"1920",height:"640"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"Property that allows you to set how the element is selected."),(0,a.kt)("h3",{id:"backface-select"},"Backface Select"),(0,a.kt)("p",null,"Allows you to set whether elements facing away from you are selected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_BackfaceOff",src:n(29694).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,"When the Backface Select property is off, elements facing the opposite direction are not selected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_BackfaceOn",src:n(2146).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,"When the Backface Select property is on, opposite facing elements are selected."),(0,a.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,a.kt)("p",null,"This property selects only the currently visible elements based on the camera."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Camerabased Select Off",src:n(92318).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When the "),"Camera Based Select property is off, elements that are hidden by the camera are also selected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_Camerabased Select On",src:n(87452).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When the "),"Camera Based Select property is on, elements that are hidden by the camera are not selected."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"soft-select"},(0,a.kt)("strong",{parentName:"h3"},"Soft Select")),(0,a.kt)("p",null,"This property selects elements in the Scene that are adjacent to the selected element on a weighted basis."),(0,a.kt)("p",null,"The elements selected based on the weight and the range you set are displayed in color, usually as a soft circle."),(0,a.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,a.kt)("p",null,"This property enables ",(0,a.kt)("strong",{parentName:"p"},"Soft Selection"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelect",src:n(79428).Z,width:"1920",height:"640"})),(0,a.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"graph-like property")," that determines the weighted shape of the ",(0,a.kt)("strong",{parentName:"p"},"Soft Selection"),". Tap the graph next to the ",(0,a.kt)("strong",{parentName:"p"},"Soft Selection Curve property")," to edit it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve",src:n(88390).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example of Curve shape")),(0,a.kt)("p",null,"This is an example of how the selection shape changes depending on the Curve type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve_Example1",src:n(19635).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectCurve_Example2",src:n(21570).Z,width:"1920",height:"640"})),(0,a.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,a.kt)("p",null,"This property sets the ",(0,a.kt)("strong",{parentName:"p"},"range")," that the soft selection is applied from the selected element."),(0,a.kt)("p",null,"In Unity, ",(0,a.kt)("strong",{parentName:"p"},"1m = 1.0"),", so for ",(0,a.kt)("strong",{parentName:"p"},"0.5"),", it will select up to ",(0,a.kt)("strong",{parentName:"p"},"50cm")," from the selected element."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common_SoftSelectRange",src:n(59630).Z,width:"1920",height:"640"})))}d.isMDXComponent=!0},32507:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common-042132676b35af689474a383d476aacf.png"},29694:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOff-d6177cc24278401547c7273b5da04233.png"},2146:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOn-20c2c42d08b18716a20e1af5e4d392b1.png"},92318:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOff-4fe13968b619c0d46e52c48b1d1a19c5.png"},87452:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOn-2f4c40d6d040f8cb6808a12d156f5f35.png"},11628:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_HideEdgeOverlay-8cf8368ef74216553e895268f4c7c61d.png"},79428:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelection-1e4de906974bc06b1779ab3d3a1fa935.png"},88390:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurve-e810f3dd8b70ab879119178831576f4c.png"},19635:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample1-1575b4b5a26da5836c422ce90624c1dd.png"},21570:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample2-cf8a818a5e149c80f0946f7e6f741a83.png"},59630:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionRange-2715297f8e3e28fc4686458a49c49209.png"},80779:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_Xray-be74e228d3d01f319da7332f6c546578.png"},9460:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Elements_Group-4cddeddef32adbaadd86c3e1f7d767cc.png"},80485:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/GIF_Element_Select-157910904e50151ce13992cafe4f10b2.gif"},1558:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3oAAABgCAYAAABL9gAYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGiGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0yOFQxMjo0NzoxNCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDItMjhUMTI6NDc6MTQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRkMDZkM2Q0LWYyYTYtYmQ0Mi05YzEzLTkyY2RjNTVhNmZmMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NzdhNzBiNS04MTZlLTcyNDYtYjJmZi1kZjZjYjc1ZjhhYTYiIHN0RXZ0OndoZW49IjIwMjMtMDItMjhUMTI6MzE6MDgrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQwNmQzZDQtZjJhNi1iZDQyLTljMTMtOTJjZGM1NWE2ZmYzIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDEyOjQ3OjE0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z5yIBQAADeVJREFUeJzt3V+PVHWex/F303RDt420IXa2exREOiAaASNcrJFEI4lXJk4ysxc+htmL3WSdzBOY7M5e7F7sPoO92z8ze6MJ0UiCeiO6EQ1/kua/0kIwNNJ0Q7fQe9HzmUMdmhGYrjqnTr1fiSmrq+jzDXWqDnU+5/v99S0tLSFJkiRJao41VRcgSZIkSVpdftGTJEmSpIbxi54kSZIkNczaqguQqjI5OcmdO3dydxB4+4///TUw8cefSZKkepsFvgH+D/g98L/AAsCaNWuYmpqqsDSpOn0OY1Ev2rZtG3ft+z8HfgdMVleRJElaJVPAr4H/Aejr6+PUqVPVViRVwEs31XMmJyfzJa8f+CeWDwR+yZMkqRkmgf9m+Rjfv7S0xOSkh3n1Hi/dVM+563LN3wLvVliKJElqnxzjf33XsV/qGX7RU6/6Bff5kjc8PAzA0NAQAP39/R0rSqvv8uXLLffHxsYqqkRV8PXvbb7+zXb79m0A5ufnAZibm1vpae8CnwH/1am6pLrw0k31okHgX6ouQpIkdcS/4oA19SATPfWiXwJPlX84OjoKwOCgxwJJkuouV9yMjIwAxfF7Zmam/NSfAX8D/EenapPqwERPvejtqguQJEkd9XbVBUidZqKnXrTv7jvpyTPJkySpe+U4Pjw8zLp167h69erdD++tpCipQiZ66kV/VXUBkiSpfW7dulX+0XgVdUhVMtFTL1p3951M15QkSd0vx/XSFE4v21HPMdGTJEmSpIYx0VPPc508SVKT9fX1AbBmzfL5/aw/11Qe16VlJnqSJEmS1DAmepIkSQ2SBG/t2uV/5j3xxBMAbNq0CYDTp08D8OOPPwLNT/ikXmWiJ0mSJEkNY6InSZJWlGQoPU+5TQKUREj1kATvscceA2DXrl0AvPzyyy3Pu3jxIgCHDh0C+NN6c3k9l5aW2l6rpPYz0ZMkSZKkhjHRkyRJwL3JXZKhLVu2APDMM88A8P777wMmelXLFM0keU8//TQAr732GgAbNmxY8c9NTEwA8M477wDw+eefA3D06FEAbty4Afj6St3ORE+SJEmSGsZET2qIci9NzvTmNo9HejDu3LnTcpveG3s0dLfsR9m/sn94xr87lV/PwcFBoEh6tm7dCsD4+HjL88t/Xp11v2mar7zyClAkrg8rPXzbt28H4NNPPwXg1KlTQPE+z3FCUnfwk1qSJEmSGsZET+pS5TO7w8PDQNFLkzPxo6OjAKxfv77lz83PzwMwMzMDwPT0NADnzp0DYG5uDnAKW69LcrNu3ToA9u7dCxRT+k6ePAnA4uJiBdXpp5ST/nxeZD21JHf53Eiyp3rJ65bbffv2AfDiiy8Cq/e6pafvzTffBODs2bNAkfA5nVPqLiZ6kiRJktQwJnpSl8kZ3SR0O3bsAOC5554DHvzMbhLA3KY3J2eIT5w4ARSJzc2bNwF7snrF/ZK8ycnJluclMTp+/Djg/lG18tTMkZERoOjdSoL3+OOPd744PbBHnaa52rLf5Pjw1VdfAfDZZ58Bxfvd971UTyZ6kiRJktQwJnpSlyhPWdu/fz8AGzduXNXtJBHctWsXUPTuHD58GLi3R0PN8qBJXqQHtDzVVe1VnpqZ1+upp54C7u3V9fXpDgMDA0BxpcXrr78OPPo0zdWS40J5OuehQ4cAuHDhAuB0TqluTPQkSZIkqWFM9KSaKyd5Bw4cAIoevbLr168DxfpHly9fBuDGjRtAcWY/Z4zHxsYA2LZtG3Bv70cSwzfeeAOADz/8EDDZa5qHTfKyfx05cgQo1l/U6rrf1Mwnn3wSKHruNm/eDBSJkLpLXreXXnoJKN5/dZ2CmuPEW2+9BRTTOT/66CMArl27VkldklqZ6EmSJElSw5joSTWVM/lJ7tKTV07yso7R0aNHgWJa5sLCAlD0SpTXO8oZ10uXLgHFdM1M70yPXuoYGhpqqePgwYNAkRS6nlJ3etQkL1P3bt26BdiT0y5J8Hbv3g0UvVqdmrqozsjrnCnKud8tkjzmOGGiJ9WDiZ4kSZIkNUx3nTKSekj5DG95umYSlI8//hiA8+fPA7C4uPhAvz8JXH5Peu2yTlLOyL766qtAkfykjtSVJPFBt6t6MMnrDvkcyPqWarasV5orLZLcZj3Eusjx4cyZM0BxZYc921K9mOhJkiRJUsOY6Ek1U56KuXPnzhWflyTtYZO8n5Lfk9+b7ezZs6fleakrSU/O8NqrV28meVL95f2Vz9W5uTmguKIi799OSVKXBC/TnCXVm4meJEmSJDWMiZ5UM1kva8uWLcC962JlnbxMyWxXb1x+b7ZTXmcvdWX9rmPHjgH2aNSVSZ7UvfJ5fOXKFaC44iMJX97fq+3ixYsAXLhwAfDzXeo2JnqSJEmS1DAmelLN5Mzs+Pj4io8nack6ee2W7WS75V691Jn1+1QvJnlS86RnL1M6V2s6Z6ZnphfP9fCk7maiJ0mSJEkNY6In1UwSmNHR0RUfz/pKnUpYsp1styx1tqtHRI+mnOTt27cPKHoty0zypO5Tns6ZhC+9e+Ue77L03KUHLz15kprBf5lJkiRJUsOY6Ek1k3X01q9fv+Lj6aHo1Hp12U62W5Y6U7eqZZIn9a68f7POXXr20sOXz4c8nl48p2lKzWSiJ0mSJEkNY6IndZmqeuHswas3kzxJZbOzs0AxpfPq1astt5KazX+5SZIkSVLDmOhJNZOeuExPGx4ebnk89zNlrd29eum9K9cRqbNTPYNqZZIn6afk/T0/P19xJZI6yURPkiRJkhrGRE+qmZx5nZmZAe5N0sbGxoDOraeXxCjbLUudJkKdZZInSZL+HBM9SZIkSWoYEz2pZpKwTE9PAzAxMdHyeBKbkydPAu1f/2hwcLBlu2Wp02SoM0zyJEnSgzDRkyRJkqSGMdGTaub27dsAnD9/HoBdu3YBMDAwAMCGDRsA2LFjBwBff/01AIuLi6taR7aX7WS7ke2lztSt9jDJkyRJD8NET5IkSZIaxkRPqpmsR3fjxg0Ajh8/DhTJXuT+Dz/8ABTJWnr2HnZdu6yXt3bt8sfC5s2bV9xupK7U6Tp67WGSJ0mSHoWJniRJkiQ1jImeVFNJ5jJdc8uWLQBs3LgRKJKe/fv3A3D06NGW55eTnHLilgSvnBilJy9JXp4X165da9lOu6d+9iqTPNXJ7OwsAGfOnAF830tSNzDRkyRJkqSGMdGTaioJ3M2bNwE4fPgwAAcOHABg/fr1QJG47d69GygSn6mpKQAuXboEFL10SYqGh4cBGBsbA2BychKAkZGRFeuZn59vqSN12Zu3ukzyVKXyNN0keFeuXGl53Cm7qyufo3Nzc0Dx+dxt3C+kejHRkyRJkqSGMdGTai69MFevXgXggw8+AIrevPTsRRK5PXv2rMr205OXJC912KPTHv39/QDs3bsXMMlTeyRB+u677wA4e/YsAN988w1Q7E9JaNyv2iufp/mc3bp1KwDbt2+vrKYHkStFvv32W6BIJCXVg4meJEmSJDWMiZ7UJcrJ3sGDB4FiSubOnTsBGBgY+Iu2kx6crJOX6ZrpyTPJa68kLTMzMys+bpKnR5H1NtNzlwQviUze1/ZYVSN//9evXwfg2LFjQJGwpgd706ZNFVRXyP6RBC+fU+4/Uj2Z6EmSJElSw5joSV0mZ05zJj7r52XKZtbbGx8fB2B0dBSAoaGhlt+TKZo5Izs9PQ3AuXPngKLXIttzumZn5O/7xIkTLT/P63jkyBHAJE8rW1hYAIr3cZK7TM0sJy++r+slr0eurMjn8yeffALAxMQEUCR8f+kVHA/q+++/B+Dy5ctA8fmTOiXVk4meJEmSJDWMiZ7UpcpnftODk96OJEJZly3r7ZX/fBKh3Hqmvx7KvZJ5/ZyCKChe/yTxSe7SO5Vkz/2lu+X1y2169pKwZSpnpnSullwxkv1rdnYW8AoPqduY6EmSJElSw5joSQ2RM6xOxWwWX8/eliQuvVqZmpkevCQv5eRHzZSkP58LX375JQAXLlwA4IUXXgAefjpn9pusq5jE0GmaUncz0ZMkSZKkhjHRkySpppKkvPfeey337aXtbeUe7UxVzXTOTF9+/vnngftP58y6rEnynKYpNYuJniRJkiQ1jImeJEk1lR4pezX155ST3vRyJqlLsld+PNOas385nVVqFhM9SZIkSWoYEz1JkqQGSY9dErwvvvgCuHc9TpNiqdlM9CRJkiSpYUz01PNyZrO/v7/iSiRJWj3puVtYWKi4ks5y3T9pmYmeJEmSJDWMiZ560XVgQ+7Mz88DMDIyUlU9kiRpleS4XtJbsaaEiZ5603TVBUiSpI7y2K+eY6KnXnQU2J47c3NzAAwODrbcSpKk7pFexBzXS450tBipBkz01Iv+UHUBkiSpo/5QdQFSp5noqRf9J/CPwFN3/3BmZgaA4eFhAIaGhgCncUqSVEeZrpmevPskeQDfsnzsl3qKiZ560QLw91UXIUmSOuLvgFtVFyF1Wt/S0lLVNUgd9eyzz+Z/fwf8Q4WlSJKk9vpn4F2A06dPV1yK1Fkmeuo5a9b8abf/DfBvFZYiSZLa599ZPtbffeyXeoZ7vXrO1NQUfX19ALeBvwV+AUxVWpQkSVotU8AvgV8Bt/v6+pia8jCv3uOlm+pZk5OT3LlzJ3cHWT4o/Bx4GfgZMFBRaZIk6cEtsjxw5XPg9ywPXlmA5STPL3nqVX7RkyRJkqSG8dJNSZIkSWoYv+hJkiRJUsP4RU+SJEmSGub/AeM7846ff/9IAAAAAElFTkSuQmCC"}}]);