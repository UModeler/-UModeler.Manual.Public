"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9230],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var i=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=i.createContext({}),p=function(t){var e=i.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(o),g=n,h=m["".concat(l,".").concat(g)]||m[g]||d[g]||r;return o?i.createElement(h,a(a({ref:e},c),{},{components:o})):i.createElement(h,a({ref:e},c))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,a=new Array(r);a[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:n,a[1]=s;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},52166:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=o(87462),n=(o(67294),o(3905));const r={slug:"/modeling/pivot-tool",sidebar_position:2,description:""},a="Pivot Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool",id:"editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool",title:"Pivot Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-misc",slug:"/modeling/pivot-tool",permalink:"/docs/modeling/pivot-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-misc/pivot-tool.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/pivot-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Reset X Form Tool",permalink:"/docs/modeling/reset-xform-tool"},next:{title:"Custom Coordinate Tool",permalink:"/docs/modeling/custom-coordinate-tool"}},l={},p=[{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Top Center",id:"top-center",level:3},{value:"Center",id:"center",level:3},{value:"Bottom Center",id:"bottom-center",level:3},{value:"Gizmo Location",id:"gizmo-location",level:3},{value:"Gizmo Local Position",id:"gizmo-local-position",level:3},{value:"Gizmo World Position",id:"gizmo-world-position",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2},{value:"Setting Pivot to Gizmo Location",id:"setting-pivot-to-gizmo-location",level:3}],c={toc:p};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pivot-tool"},"Pivot Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pivot Tool",src:o(65162).Z,width:"1362",height:"560"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pivot Tool")," is a tool for setting the ",(0,n.kt)("strong",{parentName:"p"},"pivot location")," of an object, allowing the pivot to be changed to the object's ",(0,n.kt)("strong",{parentName:"p"},"Center, Top Center, Bottom Center, or the current location of the gizmo"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"pivot"},(0,n.kt)("strong",{parentName:"h2"},"Pivot"),"."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Pivot")," is the central point of reference when adjusting the position, rotation, and scale of an object."),(0,n.kt)("p",{parentName:"admonition"},"It serves as the ",(0,n.kt)("strong",{parentName:"p"},"origin within the object"),", defining the location of ",(0,n.kt)("strong",{parentName:"p"},"each element")," in the object's space relative to the ",(0,n.kt)("strong",{parentName:"p"},"position of the gizmo"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"checking-the-pivot-position"},"Checking the Pivot Position"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"PivotToCenter_EditorPivot",src:o(70921).Z,width:"1110",height:"332"})),(0,n.kt)("p",{parentName:"admonition"},"To ascertain the exact position of the pivot, the gizmo display reference in the Unity Editor must be set to ",(0,n.kt)("strong",{parentName:"p"},"Pivot"),"."),(0,n.kt)("p",{parentName:"admonition"},"This setting makes the ",(0,n.kt)("strong",{parentName:"p"},"gizmo")," represent the ",(0,n.kt)("strong",{parentName:"p"},"pivot location")," of the object, allowing you to verify the pivot's position as the center point of the object."),(0,n.kt)("p",{parentName:"admonition"},"When using the ",(0,n.kt)("strong",{parentName:"p"},"Pivot Tool")," in UModeler X, clicking the attribute button instantly switches the gizmo reference to ",(0,n.kt)("strong",{parentName:"p"},"Pivot"),", making it easy to check the current pivot location.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pivot Tool Properties",src:o(55285).Z,width:"906",height:"389"})),(0,n.kt)("h3",{id:"top-center"},"Top Center"),(0,n.kt)("p",null,"A button that sets the pivot location to the ",(0,n.kt)("strong",{parentName:"p"},"Top Center")," of the object."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Top Center",src:o(69909).Z,width:"1362",height:"560"})),(0,n.kt)("h3",{id:"center"},"Center"),(0,n.kt)("p",null,"A button that sets the pivot location to the ",(0,n.kt)("strong",{parentName:"p"},"Center")," of the object."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Center",src:o(54960).Z,width:"1362",height:"560"})),(0,n.kt)("h3",{id:"bottom-center"},"Bottom Center"),(0,n.kt)("p",null,"A button that sets the pivot location to the ",(0,n.kt)("strong",{parentName:"p"},"Bottom Center")," of the object."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bottom Center",src:o(61197).Z,width:"1362",height:"560"})),(0,n.kt)("h3",{id:"gizmo-location"},"Gizmo Location"),(0,n.kt)("p",null,"A button that sets the pivot location to the current ",(0,n.kt)("strong",{parentName:"p"},"location of the gizmo")," displayed in the scene."),(0,n.kt)("p",null,"After moving the displayed gizmo to the desired location, clicking the ",(0,n.kt)("strong",{parentName:"p"},"Gizmo Location button")," sets the object's pivot to the new location of the chosen gizmo."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gizmo Location",src:o(42413).Z,width:"1362",height:"560"})),(0,n.kt)("h3",{id:"gizmo-local-position"},"Gizmo Local Position"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gizmo Local Position")," shows the location of the gizmo within the object's local coordinate system."),(0,n.kt)("p",null,"It displays the relative position of how far the currently displayed gizmo is from the object's pivot."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gizmo Local Position",src:o(21990).Z,width:"1760",height:"1625"})),(0,n.kt)("h3",{id:"gizmo-world-position"},"Gizmo World Position"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gizmo World Position")," shows the location of the gizmo within the scene's world coordinate system."),(0,n.kt)("p",null,"It displays the relative position of how far the currently displayed gizmo is from the world's origin, regardless of the object's local transformations."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gizmo World Position",src:o(78160).Z,width:"1760",height:"1625"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/PLyEN5_ai_g",frameborder:"0",allowfullscreen:""})),(0,n.kt)("h3",{id:"setting-pivot-to-gizmo-location"},"Setting Pivot to Gizmo Location"),(0,n.kt)("p",null,"Setting the pivot position using the ",(0,n.kt)("strong",{parentName:"p"},"Gizmo Location button")," after moving the gizmo"),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/Bqe7QErNjYQ",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},65162:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot-e735acf07da93e9437b2a0d26969cf3b.png"},61197:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_BottomCenter-e6c78c6023db7f587369c56aa35551ba.png"},54960:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_Center-a8ac95787e9aa3b534945b195995aa67.png"},70921:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_EditorPivot-803034af6eac53467c5757ac646f0a15.png"},21990:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_GizmoLocalPosition-011b6317912930c79c5e260f86b8d09a.png"},42413:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_GizmoLocation-89e91b827ec8824d6e39fab9ff949ef8.png"},78160:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_GizmoWorldPosition-ecddafe869c6999dfd8b608e6be12c8e.png"},55285:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_Properties-47ef872e4b9f5bade1268e3644ff117f.png"},69909:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"assets/images/Modeling_Misc_Pivot_TopCenter-a6e89057b8e655893ab0dc013cd96c19.png"}}]);