"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:0,slug:"/umodelerize"},i="General Mesh to UModeler X Mesh",l={unversionedId:"getting-started/data-conversion/umodelerize",id:"getting-started/data-conversion/umodelerize",title:"General Mesh to UModeler X Mesh",description:"Select Object",source:"@site/docs/getting-started/data-conversion/umodelerize.md",sourceDirName:"getting-started/data-conversion",slug:"/umodelerize",permalink:"/docs/umodelerize",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/getting-started/data-conversion/umodelerize.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/umodelerize"},sidebar:"docs",previous:{title:"Mesh Data Conversion",permalink:"/docs/data-conversion"},next:{title:"UModeler to UModeler X Mesh",permalink:"/docs/um-to-umx-conversion"}},s={},c=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Types</strong>",id:"types",level:2},{value:"Example of usage",id:"example-of-usage",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-mesh-to-umodeler-x-mesh"},"General Mesh to UModeler X Mesh"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Object",src:r(2202).Z,width:"996",height:"682"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UModelerize")," is a feature that converts models not created with UModeler X to a state that can be edited in UModeler X."),(0,o.kt)("p",null,"This function is not used directly in UModeler X's modeling mode or any other mode, but rather by selecting the model you want to convert in the ",(0,o.kt)("strong",{parentName:"p"},"Hierarchy tab")," of the Unity Editor and right-clicking on it."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to use")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the model you want to convert from the Hierarchy tab in the Unity Editor.\n",(0,o.kt)("img",{alt:"Select Object",src:r(88875).Z,width:"1754",height:"1320"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Right-click")," on the selected model."),(0,o.kt)("li",{parentName:"ol"},'Select "',(0,o.kt)("strong",{parentName:"li"},"UModeler X > UModelerize"),'" from the menu that appears after you ',(0,o.kt)("strong",{parentName:"li"},"Right-click"),".\n",(0,o.kt)("img",{alt:"UModelerize Select Menu",src:r(58733).Z,width:"1188",height:"1045"})),(0,o.kt)("li",{parentName:"ol"},"The selected model is converted to an editable state in UModeler X.\n",(0,o.kt)("img",{alt:"UModelerize End",src:r(4903).Z,width:"930",height:"964"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"types"},(0,o.kt)("strong",{parentName:"h2"},"Types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UModelerize"),": UModelerize the selected object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UModelerize Hierarchically"),": UModelerize the selected object and its child objects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UModelerize Merge Vertices"),": UModelerize the selected object and merge duplicate vertices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UModelerize Hierarchically Merge Vertices"),": UModelerize the selected object and its child objects, merging duplicate vertices.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"umodelerize-merge-vertices"},"UModelerize Merge Vertices"),(0,o.kt)("p",{parentName:"admonition"},"You can change the type of ",(0,o.kt)("strong",{parentName:"p"},"UModelerize")," that is activated by adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences > UModelerX > UModelerize Merge Vertices")," Option."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"UModelerize End",src:r(40630).Z,width:"1508",height:"512"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-of-usage"},"Example of usage"),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed//wMaRarn041c",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},40630:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Preferences_UModelerize_Merge_Vertices-8e908740d1532637a94ffc794f3898e7.png"},88875:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Select_Object_to_UModelerize-4b131e71c59883a14150d452d6b2215d.png"},58733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Select_UModelerizeMenu-8da5a3cd2298ab39f392b84ca394a0b1.png"},2202:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UModelerize_AirBalloon-aec7c112da1d7e78731ea7bf4a60f9c2.png"},4903:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UModelerizedObject-d8fc1fc64e0a998686d9edb3bc45fc5e.png"}}]);