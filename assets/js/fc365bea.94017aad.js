"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(a),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return a?o.createElement(f,n(n({ref:t},m),{},{components:a})):o.createElement(f,n({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var i=2;i<l;i++)n[i]=a[i];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=a(87462),r=(a(67294),a(3905));const l={slug:"/modeling/facenormal-tool",sidebar_position:8,description:""},n="Face Normal Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool",title:"Face Normal Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-surface/facenormal-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/facenormal-tool",permalink:"/docs/modeling/facenormal-tool",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/modeling/facenormal-tool",sidebar_position:8,description:""},sidebar:"docs",previous:{title:"UV Param Tool",permalink:"/docs/modeling/uvparam-tool"},next:{title:"Painting Mode",permalink:"/docs/painting-mode"}},c={},i=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Normal Color",id:"normal-color",level:3},{value:"Normal Length",id:"normal-length",level:3},{value:"Normal Thickness",id:"normal-thickness",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"Select Face Normals",id:"select-face-normals",level:3},{value:"Reset Normal",id:"reset-normal",level:3},{value:"<strong>Usage Example</strong>",id:"usage-example",level:2}],m={toc:i};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"face-normal-tool"},"Face Normal Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Face Normal Tool",src:a(16954).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Face Normal tool")," is a tool that applies a face normal to selected faces."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"for-the-face-normal"},"For the ",(0,r.kt)("strong",{parentName:"h2"},"Face Normal")),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Face Normal")," is the ",(0,r.kt)("strong",{parentName:"p"},"color information stored on a face"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use-it"},(0,r.kt)("strong",{parentName:"h2"},"How to use it")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Face Normal tool"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click the Select Face Normals button")," to select the face whose ",(0,r.kt)("strong",{parentName:"li"},"face normals")," you want to rotate."),(0,r.kt)("li",{parentName:"ol"},"Use the rotate gizmo to adjust the ",(0,r.kt)("strong",{parentName:"li"},"face normals"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Face Normal Properties",src:a(7763).Z,width:"800",height:"500"})),(0,r.kt)("h3",{id:"normal-color"},"Normal Color"),(0,r.kt)("p",null,"A property that allows you to set the color of the normal vector."),(0,r.kt)("h3",{id:"normal-length"},"Normal Length"),(0,r.kt)("p",null,"A property that allows you to set the length of the normal vector."),(0,r.kt)("h3",{id:"normal-thickness"},"Normal Thickness"),(0,r.kt)("p",null,"A property that allows you to set the thickness of the normal vector."),(0,r.kt)("h3",{id:"select"},(0,r.kt)("strong",{parentName:"h3"},"Select")),(0,r.kt)("p",null,"Properties that allow you to set how faces are selected."),(0,r.kt)("h3",{id:"backface-select"},"Backface Select"),(0,r.kt)("p",null,"Allows you to set whether faces facing the opposite direction are selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backface Select Off",src:a(5286).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Backface Select property")," is off, opposite facing faces are not selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backface Select On",src:a(26307).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Backface Select property")," is on, opposite facing faces are selected."),(0,r.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,r.kt)("p",null,"This property selects only those faces that are visible to the camera."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Camera Based Select Off",src:a(77066).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Camera Based Select property")," is off, faces that are hidden by the camera are also selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Camera Based Select On",src:a(79443).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Camera Based Select property")," is on, faces that are hidden by the camera are not selected."),(0,r.kt)("h3",{id:"select-face-normals"},"Select Face Normals"),(0,r.kt)("p",null,"Select the face whose normals you want to rotate."),(0,r.kt)("h3",{id:"reset-normal"},"Reset Normal"),(0,r.kt)("p",null,"Resets the normal values to their defaults."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usage-example"},(0,r.kt)("strong",{parentName:"h2"},"Usage Example")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/0v89_r6jKA8",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},5286:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Element_Face_BackFaceOff-d6177cc24278401547c7273b5da04233.png"},26307:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Element_Face_BackFaceOn-20c2c42d08b18716a20e1af5e4d392b1.png"},77066:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Element_Face_CameraBasedOff-4fe13968b619c0d46e52c48b1d1a19c5.png"},79443:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Element_Face_CameraBasedOn-2f4c40d6d040f8cb6808a12d156f5f35.png"},16954:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_FaceNormal-1270ceddbbb348693a02a89e2893a9e5.png"},7763:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_FaceNormal_Properties-494b4f3de1f87acfb6a7978a9ab33cff.png"}}]);