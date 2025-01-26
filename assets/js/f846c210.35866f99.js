"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||n;return a?o.createElement(f,l(l({ref:t},m),{},{components:a})):o.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={slug:"/modeling/uvparam-tool",sidebar_position:7,description:""},l="UV Param Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/uvparam-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/uvparam-tool",title:"UV Param Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-surface/uvparam-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/uvparam-tool",permalink:"/docs/modeling/uvparam-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-surface/uvparam-tool.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/modeling/uvparam-tool",sidebar_position:7,description:""},sidebar:"docs",previous:{title:"Face Color Tool",permalink:"/docs/modeling/facecolor-tool"},next:{title:"Face Normal Tool",permalink:"/docs/modeling/facenormal-tool"}},s={},c=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>UV Param</strong>",id:"uv-param",level:3},{value:"Shift",id:"shift",level:3},{value:"Rotation",id:"rotation",level:3},{value:"Scale",id:"scale",level:3},{value:"Tiling",id:"tiling",level:3},{value:"Select UV Params",id:"select-uv-params",level:3},{value:"Reset UV Params",id:"reset-uv-params",level:3},{value:"<strong>Usage Example</strong>",id:"usage-example",level:2}],m=(d="DocCardList",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uv-param-tool"},"UV Param Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UV Param Tool",src:a(83438).Z,width:"300",height:"321"}),"\n",(0,r.kt)("img",{alt:"UV Param Tool",src:a(16781).Z,width:"300",height:"321"}),"\n",(0,r.kt)("img",{alt:"UV Param Tool",src:a(74730).Z,width:"300",height:"321"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"UV Param tool")," allows you to adjust how textures are displayed on selected faces by transforming UV coordinates using properties such as position, rotation, scale, and tiling."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},"In the UV Editor window, if there are unwrapped faces, you need to select them and cancel the unwrapping of the selected ones before applying the UV Param function."),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/bbc18jzOHwU",frameborder:"0",allowfullscreen:""}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use-it"},(0,r.kt)("strong",{parentName:"h2"},"How to use it")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the faces you want to modify. "),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},"UV Param Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Adjust shifting, scaling, and rotating properties in the ",(0,r.kt)("strong",{parentName:"li"},"Tool Properties")," panel.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UV Param Properties",src:a(76368).Z,width:"800",height:"560"})),(0,r.kt)("h3",{id:"select"},(0,r.kt)("strong",{parentName:"h3"},"Select")),(0,r.kt)("p",null,"Properties that allow you to set how faces are selected."),(0,r.kt)(m,{items:[{type:"link",label:"Backface Select",href:"/docs/face-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/docs/face-element#camera-based-select"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"uv-param"},(0,r.kt)("strong",{parentName:"h3"},"UV Param")),(0,r.kt)("h3",{id:"shift"},"Shift"),(0,r.kt)("p",null,"Moves the texture's position."),(0,r.kt)("h3",{id:"rotation"},"Rotation"),(0,r.kt)("p",null,"Rotates the texture."),(0,r.kt)("h3",{id:"scale"},"Scale"),(0,r.kt)("p",null,"Increases or decreases the size of the texture."),(0,r.kt)("h3",{id:"tiling"},"Tiling"),(0,r.kt)("p",null,"Sets the number of times the texture repeats along the X and Y axes."),(0,r.kt)("h3",{id:"select-uv-params"},"Select UV Params"),(0,r.kt)("p",null,"Selects faces with modified UV Param values."),(0,r.kt)("h3",{id:"reset-uv-params"},"Reset UV Params"),(0,r.kt)("p",null,"Resets the UV Param values to their defaults."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usage-example"},(0,r.kt)("strong",{parentName:"h2"},"Usage Example")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/M-D6jwsVdKI",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},76368:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_UVParam_Properties-ab964a3b532341ef3e02293a01e8eced.png"},74730:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_UVParam_Rotate-25923e1fe246c4232e2e48b4ba20a4f7.gif"},16781:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_UVParam_Scale-ff2457e431785619e878c7ce5bd803bd.gif"},83438:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Modeling_Surface_UVParam_Shift-caae5969e8d32751cae8bb0c86496cff.gif"}}]);