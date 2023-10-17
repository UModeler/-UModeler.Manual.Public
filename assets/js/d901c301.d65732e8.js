"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[760],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>u});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var p=n.createContext({}),l=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(o),g=i,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||r;return o?n.createElement(u,a(a({ref:e},c),{},{components:o})):n.createElement(u,a({ref:e},c))}));function u(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[m]="string"==typeof t?t:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},13217:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={slug:"/modeling/pivot-tool",sidebar_position:3,description:""},a="Pivot Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool",id:"editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool",title:"Pivot Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-misc",slug:"/modeling/pivot-tool",permalink:"/docs/modeling/pivot-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/pivot-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Flip Tool",permalink:"/docs/modeling/flip-tool"},next:{title:"Local Settings Tool",permalink:"/docs/modeling/local-settings-tool"}},p={},l=[{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Top Center",id:"top-center",level:3},{value:"Center",id:"center",level:3},{value:"Bottom Center",id:"bottom-center",level:3},{value:"Gizmo Location",id:"gizmo-location",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:l};function m(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pivot-tool"},"Pivot Tool"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pivot Tool",src:o(69070).Z,width:"1362",height:"560"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Pivot tool")," is a tool to ",(0,i.kt)("strong",{parentName:"p"},"set the pivot position")," of an object, allowing you to change the pivot to the ",(0,i.kt)("strong",{parentName:"p"},"Center, Top Center, Bottom Center, Gizmo Location")," of the object."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h2",{parentName:"admonition",id:"pivot"},(0,i.kt)("strong",{parentName:"h2"},"Pivot"),"."),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("strong",{parentName:"p"},"pivot")," is a ",(0,i.kt)("strong",{parentName:"p"},"reference point")," for adjusting an object's position, rotation, scale, etc. It is primarily the ",(0,i.kt)("strong",{parentName:"p"},"origin position of an object"),", a reference point that defines the ",(0,i.kt)("strong",{parentName:"p"},"position of a gizmo")," and the position of each element in object space.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h2",{parentName:"admonition",id:"to-check-the-pivot-position"},"To ",(0,i.kt)("strong",{parentName:"h2"},"check the pivot position")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"PivotToCenter_EditorPivot",src:o(75127).Z,width:"1110",height:"332"})),(0,i.kt)("p",{parentName:"admonition"},"To determine the position of the pivot, you must set the Gizmo Base in the Unity Editor to ",(0,i.kt)("strong",{parentName:"p"},"Pivot")," so that you can see and determine the position of the Gizmo.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"properties"},(0,i.kt)("strong",{parentName:"h2"},"Properties")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pivot Tool Properties",src:o(1037).Z,width:"906",height:"310"})),(0,i.kt)("h3",{id:"top-center"},"Top Center"),(0,i.kt)("p",null,"Property that sets the pivot position to the ",(0,i.kt)("strong",{parentName:"p"},"top center of the object"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Top Center",src:o(62254).Z,width:"1362",height:"560"})),(0,i.kt)("h3",{id:"center"},"Center"),(0,i.kt)("p",null,"Property that sets the pivot position to the center of the object."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Center",src:o(39781).Z,width:"1362",height:"560"})),(0,i.kt)("h3",{id:"bottom-center"},"Bottom Center"),(0,i.kt)("p",null,"Property that sets the pivot position to the ",(0,i.kt)("strong",{parentName:"p"},"bottom center of the object"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bottom Center",src:o(93037).Z,width:"1362",height:"560"})),(0,i.kt)("h3",{id:"gizmo-location"},"Gizmo Location"),(0,i.kt)("p",null,"Property that sets the pivot position to the currently displayed ",(0,i.kt)("strong",{parentName:"p"},"gizmo's location"),"."),(0,i.kt)("p",null,"If no element is selected, the ",(0,i.kt)("strong",{parentName:"p"},"Gizmo Location property button")," is not active."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gizmo Location",src:o(79511).Z,width:"1362",height:"560"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"example-usage"},(0,i.kt)("strong",{parentName:"h2"},"Example Usage")),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/cDOL765Bz5U",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},69070:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot-e735acf07da93e9437b2a0d26969cf3b.png"},93037:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_BottomCenter-e6c78c6023db7f587369c56aa35551ba.png"},39781:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_Center-a8ac95787e9aa3b534945b195995aa67.png"},75127:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_EditorPivot-803034af6eac53467c5757ac646f0a15.png"},79511:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_GizmoLocation-89e91b827ec8824d6e39fab9ff949ef8.png"},1037:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_Properties-a7042d7171c53391fb295d72aff41f4e.png"},62254:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot_TopCenter-a6e89057b8e655893ab0dc013cd96c19.png"}}]);