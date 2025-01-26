"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[50553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:6,slug:"/painting/mapSource",description:""},i="Map Source Group",p={unversionedId:"editable-mesh/painting-mode/painting-mode-mapSource/index",id:"editable-mesh/painting-mode/painting-mode-mapSource/index",title:"Map Source Group",description:"",source:"@site/docs/editable-mesh/painting-mode/painting-mode-mapSource/index.md",sourceDirName:"editable-mesh/painting-mode/painting-mode-mapSource",slug:"/painting/mapSource",permalink:"/docs/painting/mapSource",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/painting/mapSource",description:""},sidebar:"docs",previous:{title:"Properties Group",permalink:"/docs/painting/properties"},next:{title:"Normal Painting",permalink:"/docs/painting/Normal Painting"}},l={},s=[{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"MapSource List",id:"mapsource-list",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Format",id:"format",level:3},{value:"Shader Variable",id:"shader-variable",level:3},{value:"Channel",id:"channel",level:3},{value:"Background Color",id:"background-color",level:3},{value:"Output",id:"output",level:3},{value:"Adding and Deleting Map Sources",id:"adding-and-deleting-map-sources",level:3},{value:"Exporting a Map Source (Output)",id:"exporting-a-map-source-output",level:3}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map-source-group"},"Map Source Group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Map Source Group",src:r(78796).Z,width:"1365",height:"610"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Map Source Group")," is a collection of properties for managing map sources, such as adding and deleting map sources, setting the resolution of the texture, the format of the map source, and more."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h2",{parentName:"admonition",id:"map-source"},(0,n.kt)("strong",{parentName:"h2"},"Map Source")),(0,n.kt)("p",{parentName:"admonition"},"In UModelerX's painting mode, the concept of ",(0,n.kt)("strong",{parentName:"p"},"'map source'")," refers to individual characteristics that make up a material, such as metallicity, color, roughness, etc. For example, in the Standard Material of Built-in RP project, the Main Maps group's Albedo, Metallic, Normal Map, Height Map, Occlusion, etc., correspond to the map sources. By utilizing map sources, you can represent multiple material properties on a single texture.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("h3",{id:"mapsource-list"},"MapSource List"),(0,n.kt)("p",null,"A list of map sources currently being applied to the material."),(0,n.kt)("h3",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"This property sets the resolution of the texture."),(0,n.kt)("h3",{id:"format"},"Format"),(0,n.kt)("p",null,"This property sets the format of the selected map source."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sRGB"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This property represents the map source color using the sRGB color space."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Property that represents the color of the map source using the 8-bit RGB color space."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"L8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A property that represents the map source value using an 8-bit grayscale.")))),(0,n.kt)("h3",{id:"shader-variable"},"Shader Variable"),(0,n.kt)("p",null,"This property sets the name of the shader variable that will be applied to the selected map source."),(0,n.kt)("h3",{id:"channel"},"Channel"),(0,n.kt)("p",null,"This property sets which of the texture's RGB channels the selected map source should be included in."),(0,n.kt)("h3",{id:"background-color"},"Background Color"),(0,n.kt)("p",null,"This property sets the default value for the map source to be displayed when no layer is visible."),(0,n.kt)("h3",{id:"output"},"Output"),(0,n.kt)("p",null,"Properties for the output of the texture."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Button to export the current painting result as a texture.")))),(0,n.kt)("h3",{id:"adding-and-deleting-map-sources"},"Adding and Deleting Map Sources"),(0,n.kt)("p",null,"These are buttons marked with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"+"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-"))," symbols. You can add a new map source or remove the selected map source."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add and Delete Map Source",src:r(43941).Z,width:"637",height:"819"})),(0,n.kt)("h3",{id:"exporting-a-map-source-output"},"Exporting a Map Source (Output)"),(0,n.kt)("p",null,"Export the colored results of the selected map source as .PNG or .TIFF files. Export All and Export a channel are exported as .PNG, while Export a channel with layers is exported in .TIFF format."))}c.isMDXComponent=!0},78796:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/PaintingMode_MapSource-71bf63ac17adf5afcd047da47116ea7c.png"},43941:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/UModelerX-Painting3d-Add-MapSource-2ea9d25ad01ed10e282f71a05d7579af.png"}}]);