"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[19443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={slug:"/modeling/local-settings-tool",sidebar_position:3,description:""},l="Local Settings Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool",title:"Local Settings Tool",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-misc",slug:"/modeling/local-settings-tool",permalink:"/docs/basic/modeling/local-settings-tool",draft:!1,tags:[],version:"basic",sidebarPosition:3,frontMatter:{slug:"/modeling/local-settings-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Custom Coordinate Tool",permalink:"/docs/basic/modeling/custom-coordinate-tool"},next:{title:"Align Tool",permalink:"/docs/basic/modeling/align-tool"}},s={},c=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Property</strong>",id:"property",level:2},{value:"Recalculate Tangents",id:"recalculate-tangents",level:3},{value:"Save data in the scene folder",id:"save-data-in-the-scene-folder",level:3},{value:"Lightmap Static",id:"lightmap-static",level:3},{value:"Generate UVs",id:"generate-uvs",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-settings-tool"},"Local Settings Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Local Settings Tool")," is a tool used to manage and adjust the ",(0,r.kt)("strong",{parentName:"p"},"local settings of selected objects.")),(0,r.kt)("p",null,"It provides the ability to quickly change certain properties of an object, recalculate the state of an object, and more, with additional features planned for the future."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch the ",(0,r.kt)("strong",{parentName:"li"},"Local Settings Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the desired property."),(0,r.kt)("li",{parentName:"ol"},"The feature corresponding to the selected property will be applied to the currently selected object.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"property"},(0,r.kt)("strong",{parentName:"h2"},"Property")),(0,r.kt)("h3",{id:"recalculate-tangents"},"Recalculate Tangents"),(0,r.kt)("p",null,"This property recalculates the ",(0,r.kt)("strong",{parentName:"p"},"object's tangent vectors"),". Use this when you are having trouble applying a normal map, or when you need accurate normals while editing a mesh."),(0,r.kt)("h3",{id:"save-data-in-the-scene-folder"},"Save data in the scene folder"),(0,r.kt)("p",null,"When the option is enabled, UModelerX data and mesh information are saved in a subfolder under the scene file. If the option is disabled, the data is stored directly in the scene file. For large meshes, saving them in a folder is recommended."),(0,r.kt)("h3",{id:"lightmap-static"},"Lightmap Static"),(0,r.kt)("p",null,"Changes the lighting method to lightmap. This property is linked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contribute Global Illumination")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh Renderer")," component."),(0,r.kt)("h3",{id:"generate-uvs"},"Generate UVs"),(0,r.kt)("p",null,"Generates UVs for lightmaps."),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);