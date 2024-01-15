"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3,slug:"/shortcuts"},i="Shortcuts",s={unversionedId:"getting-started/shortcuts",id:"getting-started/shortcuts",title:"Shortcuts",description:"Unity Shortcut Manager",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/shortcuts.md",sourceDirName:"getting-started",slug:"/shortcuts",permalink:"/docs/shortcuts",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/shortcuts"},sidebar:"docs",previous:{title:"UModeler to UModeler X, data conversion guide",permalink:"/docs/um-to-umx-conversion"},next:{title:"Synty Studios Assets and Mixamo Animation Integration Guide",permalink:"/docs/synty-mixamo-animation-integration"}},c={},l=[],u={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shortcuts"},"Shortcuts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unity Shortcut Manager",src:r(99867).Z,width:"1275",height:"987"})),(0,o.kt)("p",null,"The UModeler X shortcuts can be set using the Unity Shortcut Manager, as found in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ShortcutsManager.html"},"Unity Documentation"),"."),(0,o.kt)("p",null,"In Unity, the default profile has shortcuts registered for general use, but when a UModeler X object is selected, a separate shortcut profile is utilized."),(0,o.kt)("p",null,"Upon installing UModeler X in a project, two profiles are created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UMX-EdMesh-Edit")," : Shortcut profile for ",(0,o.kt)("strong",{parentName:"li"},"Edit Mode"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UMX-EdMesh-Obj")," : Shortcut profile for ",(0,o.kt)("strong",{parentName:"li"},"Object Mode"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unity Shortcut Manager",src:r(71815).Z,width:"1478",height:"1043"})),(0,o.kt)("p",null,"UModeler X automatically switches between these profiles depending on whether it's in ",(0,o.kt)("strong",{parentName:"p"},"Edit Mode")," or ",(0,o.kt)("strong",{parentName:"p"},"Object Mode"),". When a UModeler X object is selected, the profile automatically changes to one of these two."),(0,o.kt)("p",null,"Users can further customize by adding or changing shortcuts in either the ",(0,o.kt)("strong",{parentName:"p"},"UMX-EdMesh-Edit")," or ",(0,o.kt)("strong",{parentName:"p"},"UMX-EdMesh-Obj")," profile. Changes made in one profile are reflected in the other, eliminating the need for duplicate assignments."),(0,o.kt)("p",null,"This dual profile system exists because the same shortcut might trigger different functions in UModeler X or Unity depending on the mode. For example, the ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+D")," shortcut assigned to the Duplicate function behaves differently in ",(0,o.kt)("strong",{parentName:"p"},"Edit Mode")," and ",(0,o.kt)("strong",{parentName:"p"},"Object Mode"),". In ",(0,o.kt)("strong",{parentName:"p"},"Edit Mode"),", it duplicates the selected vertices/edges/faces, while in ",(0,o.kt)("strong",{parentName:"p"},"Object Mode"),", it performs Unity's standard duplication function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unity Shortcut Manager",src:r(66252).Z,width:"1491",height:"998"})),(0,o.kt)("p",null,"In Unity, the ",(0,o.kt)("strong",{parentName:"p"},"Delete key (Del)")," is already registered in the code for object deletion. Therefore, UModeler X's vertex/edge/face deletion tool (Eraser) can also be called with the Del key by default. If you wish to use a different key combination for the Eraser tool, this can be set in the shortcut manager."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"shortcuts-are-supported-from-unity-20201-and-umodeler-x-version-0170-onwards"},(0,o.kt)("strong",{parentName:"h2"},"Shortcuts are supported from Unity 2020.1 and UModeler X version 0.17.0 onwards.")),(0,o.kt)("p",{parentName:"admonition"},"UModeler X's shortcuts are implemented based on Unity 2020.1 for backward compatibility. Therefore, some of the new shortcut features added in Unity versions from 2022 onwards, such as tags, are not yet supported in UModeler X.")))}d.isMDXComponent=!0},66252:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shortcut-duplicatetool-718b7e358647c114788ffb195dfeed5c.gif"},99867:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shortcut1-66a02cb6a59250033938404eb8788b74.png"},71815:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shortcut2-5c2b3f552eaf90dae05fab0f45114673.png"}}]);