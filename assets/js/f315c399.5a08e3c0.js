"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5063],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},49555:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={slug:"/modeling/loopcut-tool",sidebar_position:6},i="Loop Cut Tool",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/loopcut-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/loopcut-tool",title:"Loop Cut Tool",description:"Loop Cut Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-add/loopcut-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/loopcut-tool",permalink:"/docs/modeling/loopcut-tool",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/modeling/loopcut-tool",sidebar_position:6},sidebar:"docs",previous:{title:"Subdivide Tool",permalink:"/docs/modeling/subdivide-tool"},next:{title:"Slice Cut Tool",permalink:"/docs/modeling/slicecut-tool"}},s={},d=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Split Number",id:"split-number",level:3},{value:"Offset",id:"offset",level:3},{value:"Pinch",id:"pinch",level:3},{value:"<strong>Display</strong>.",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2},{value:"Split Number",id:"split-number-1",level:3},{value:"Offset",id:"offset-1",level:3},{value:"Pinch",id:"pinch-1",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-cut-tool"},"Loop Cut Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Loop Cut Tool",src:o(14062).Z,width:"1142",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Loop Cut tool")," is a tool that creates a ",(0,r.kt)("strong",{parentName:"p"},"connected edge")," that divides a face, based on the edge closest to the mouse cursor."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Loop Cut tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Hover the mouse cursor over the desired location and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Click")),".\n",(0,r.kt)("img",{alt:"Loop Cut Tool Click",src:o(98199).Z,width:"1172",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"Adjust the properties to the appropriate values.\n",(0,r.kt)("img",{alt:"Loop Cut Tool Properties",src:o(75685).Z,width:"924",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"After adjusting the properties, select the element, or use another tool to finalize.\n",(0,r.kt)("img",{alt:"Loop Cut Tool Confirm",src:o(86897).Z,width:"1626",height:"512"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("h3",{id:"split-number"},"Split Number"),(0,r.kt)("p",null,"Set the number of edges created by the ",(0,r.kt)("strong",{parentName:"p"},"Loop Cut tool"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Split Number",src:o(72127).Z,width:"1920",height:"640"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"use-the-keyboard-shortcut-shiftrotate"},(0,r.kt)("strong",{parentName:"h2"},"Use the keyboard shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Rotate"))),(0,r.kt)("p",{parentName:"admonition"},"The shortcut allows you to increase or decrease the number without having to edit the properties directly.")),(0,r.kt)("h3",{id:"offset"},"Offset"),(0,r.kt)("p",null,"Allows you to set the position of edges created with the ",(0,r.kt)("strong",{parentName:"p"},"Loop Cut tool"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Offset",src:o(51930).Z,width:"1920",height:"640"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"use-the-shortcut-left-clickdrag"},"Use the ",(0,r.kt)("strong",{parentName:"h2"},"shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Left-click+Drag"))),(0,r.kt)("p",{parentName:"admonition"},"The shortcut allows you to change the position without having to edit the property directly.")),(0,r.kt)("h3",{id:"pinch"},"Pinch"),(0,r.kt)("p",null,"Allows you to set the spacing of edges created with the ",(0,r.kt)("strong",{parentName:"p"},"Loop Cut tool"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinch",src:o(86792).Z,width:"1920",height:"640"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-ctrlrotate"},(0,r.kt)("strong",{parentName:"h2"},"Shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Ctrl+Rotate"))),(0,r.kt)("p",{parentName:"admonition"},"Hotkeys allow you to increase or decrease the spacing without having to edit the properties directly.")),(0,r.kt)("h3",{id:"display"},(0,r.kt)("strong",{parentName:"h3"},"Display"),"."),(0,r.kt)("p",null,"Properties that allow you to choose how the mesh is displayed."),(0,r.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,r.kt)("p",null,"Shows faces as translucent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Face XRay Mode",src:o(52419).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,r.kt)("p",null,"Allows you to show or hide edges."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hide Edge Overlay",src:o(315).Z,width:"1920",height:"640"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("h3",{id:"split-number-1"},"Split Number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Rotate"))),(0,r.kt)("h3",{id:"offset-1"},"Offset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyboard shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Left-click+Drag"))),(0,r.kt)("h3",{id:"pinch-1"},"Pinch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyboard shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Ctrl+Rotate"))))}u.isMDXComponent=!0},14062:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut-483c329ce40c7f0e23f185c174218678.png"},86897:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_Confirm-c5af956ca8449fcb42ad382f6da9518b.png"},98199:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_MouseOver-fb4f7aecf12c4a298bd2249ebf91d07a.png"},51930:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_Offset-53bef67a288317bbb2d30ecbfd170078.png"},86792:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_Pinch-7eb266605d49b48eb95752a905d239f7.png"},75685:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_Properties-2d548006f3b9dbc4d43cade57902369d.png"},72127:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Add_LoopCut_SplitNumber-2b22298532121b30d9543a97257082b0.png"},315:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Element_Face_HideEdgeOverlay-69e91eab90ff37ad0d664e726671dedc.png"},52419:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Element_Face_Xray-d30e1a22e6cbc67ff6d6a40915594730.png"}}]);