"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7270],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(o),g=a,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||r;return o?n.createElement(u,l(l({ref:t},c),{},{components:o})):n.createElement(u,l({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},31463:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={slug:"/modeling/loop-tool",sidebar_position:6,description:""},l="Loop Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-selection/loop-tool",id:"editable-mesh/modeling-mode/modeling-mode-selection/loop-tool",title:"Loop Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-selection/loop-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-selection",slug:"/modeling/loop-tool",permalink:"/docs/modeling/loop-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-selection/loop-tool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/modeling/loop-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Shrink Tool",permalink:"/docs/modeling/shrink-tool"},next:{title:"Ring Tool",permalink:"/docs/modeling/ring-tool"}},p={},s=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"Edge",id:"edge",level:3},{value:"Face",id:"face",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Select Type</strong>",id:"select-type",level:2},{value:"At One Go",id:"at-one-go",level:3},{value:"Grow",id:"grow",level:3},{value:"<strong>Example of usage</strong>",id:"example-of-usage",level:2},{value:"Edge",id:"edge-1",level:2},{value:"Select Type: At One Go",id:"select-type-at-one-go",level:3},{value:"Select Type: Grow",id:"select-type-grow",level:3},{value:"Face",id:"face-1",level:2},{value:"Select Type: At One Go",id:"select-type-at-one-go-1",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loop-tool"},"Loop Tool"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loop Tool",src:o(55484).Z,width:"1514",height:"600"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Loop tool")," is a tool that allows you to select by concatenating the selected element with elements in the aligned direction."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use-it"},(0,a.kt)("strong",{parentName:"h2"},"How to use it")),(0,a.kt)("h3",{id:"edge"},"Edge"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"one or more edges"),".\n",(0,a.kt)("img",{alt:"Loop Tool Edge Select",src:o(95151).Z,width:"783",height:"514"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("strong",{parentName:"p"},"Loop tool"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Shortcuts for the Loop tool on edges"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Double-Click"))," on an edge."),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/M7rlNnFERHk",frameborder:"0",allowfullscreen:""})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the edges associated with the selected edge are selected.\n",(0,a.kt)("img",{alt:"Loop Tool Edge Result",src:o(83807).Z,width:"783",height:"514"})))),(0,a.kt)("h3",{id:"face"},"Face"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"select ",(0,a.kt)("strong",{parentName:"p"},"2 or more adjacent faces in the desired direction"),".\n",(0,a.kt)("img",{alt:"Loop Tool Face Select",src:o(70534).Z,width:"783",height:"514"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("strong",{parentName:"p"},"Loop tool"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Shortcut for the Loop tool on faces"),"."),(0,a.kt)("p",{parentName:"admonition"},"After selecting the faces, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+Double-Click"))," the faces in the desired direction."),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/rRZBwhLD3OM",frameborder:"0",allowfullscreen:""})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the faces in the direction of travel of the selected faces will be selected.\n",(0,a.kt)("img",{alt:"Loop Tool Face Result",src:o(25541).Z,width:"783",height:"514"})))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("strong",{parentName:"h2"},"Properties")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can change the ",(0,a.kt)("strong",{parentName:"p"},"properties")," in the ",(0,a.kt)("strong",{parentName:"p"},"properties window")," that appears when you ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Alt+Click"))," on the ",(0,a.kt)("strong",{parentName:"p"},"Loop Tool Icon"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Loop Tool Properties",src:o(16510).Z,width:"876",height:"300"}))),(0,a.kt)("h2",{id:"select-type"},(0,a.kt)("strong",{parentName:"h2"},"Select Type")),(0,a.kt)("h3",{id:"at-one-go"},"At One Go"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loop Tool At One Go",src:o(87425).Z,width:"998",height:"272"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"At One Go property")," is a property that allows you to select all edges and faces at once based on the ",(0,a.kt)("strong",{parentName:"p"},"Loop tool selection criteria"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Edge"),"\n",(0,a.kt)("img",{alt:"Loop Tool Edge At One Go",src:o(44105).Z,width:"1514",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Face"),"\n",(0,a.kt)("img",{alt:"Loop Tool Face At One Go",src:o(67807).Z,width:"1514",height:"640"})),(0,a.kt)("h3",{id:"grow"},"Grow"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loop Tool Grow",src:o(50471).Z,width:"998",height:"272"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Grow property")," is a property that allows selection in a way that increases the range each time the ",(0,a.kt)("strong",{parentName:"p"},"Loop tool icon")," is ",(0,a.kt)("strong",{parentName:"p"},"clicked"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Grow property")," does not apply to ",(0,a.kt)("strong",{parentName:"p"},"faces"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loop Tool Face Grow",src:o(32272).Z,width:"1592",height:"640"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example-of-usage"},(0,a.kt)("strong",{parentName:"h2"},"Example of usage")),(0,a.kt)("h2",{id:"edge-1"},"Edge"),(0,a.kt)("h3",{id:"select-type-at-one-go"},"Select Type: At One Go"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/n0RUnSSTC4Y",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h3",{id:"select-type-grow"},"Select Type: Grow"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/4mqsOgmfEpU",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h2",{id:"face-1"},"Face"),(0,a.kt)("h3",{id:"select-type-at-one-go-1"},"Select Type: At One Go"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/25TEGzXg-Bs",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},55484:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop-a598068b1e0c1c48cdbc1fb3c466f5b3.png"},87425:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_AtOneGo-fac69700328c9240bdf47c82c4514f46.png"},44105:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Edge_AtOneGo-f8266550b69c7233dd1545f5234f1f27.png"},32272:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Edge_Grow-26bae54122087e8a8dba76f6df058905.png"},83807:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Edge_Result-573ef3b7dcbb0fbf7a5e11c33abbb266.png"},95151:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Edge_Select-b2e58117ffa8debfde6ccb88d0a87682.png"},67807:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Face_AtOneGo-2484faccfa85d219aa18fcac4c3b85b6.png"},25541:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Face_Result-fcf68b64ec172f382aee31b245d13cb1.png"},70534:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Face_Select-64a07d426d34e1324f376e9a49a17285.png"},50471:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Grow-91b475a9a8400e1b987593fa4351711c.png"},16510:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Loop_Properties-d3e3f4f8b970a861881856755c657bc4.png"}}]);