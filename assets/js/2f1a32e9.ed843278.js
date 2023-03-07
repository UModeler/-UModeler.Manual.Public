"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:3,slug:"/painting/material"},o="Material Group",l={unversionedId:"editable-mesh/painting-mode/material",id:"editable-mesh/painting-mode/material",title:"Material Group",description:"The Material group of a Painting Mode is a group that contains a selection of materials to be painted, or properties related to their representation in the scene.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/material.md",sourceDirName:"editable-mesh/painting-mode",slug:"/painting/material",permalink:"/docs/painting/material",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/painting/material"},sidebar:"docs",previous:{title:"Painting 2D",permalink:"/docs/painting/painting-2d"},next:{title:"Layer Group",permalink:"/docs/painting-layer"}},p={},s=[{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Material Show, Hide toggle",id:"material-show-hide-toggle",level:3},{value:"Material Mode",id:"material-mode",level:3},{value:"Material",id:"material",level:3},{value:"Preview",id:"preview",level:3},{value:"Map Source",id:"map-source",level:3},{value:"Mask",id:"mask",level:3},{value:"UV",id:"uv",level:3},{value:"Preview Resolution",id:"preview-resolution",level:3},{value:"Solo",id:"solo",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"material-group"},"Material Group"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Material group")," of a ",(0,a.kt)("strong",{parentName:"p"},"Painting Mode")," is a group that contains a selection of materials to be painted, or properties related to their representation in the scene."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("strong",{parentName:"h2"},"Properties")),(0,a.kt)("h3",{id:"material-show-hide-toggle"},"Material Show, Hide toggle"),(0,a.kt)("p",null,"Properties for displaying painting results in modes other than painting mode."),(0,a.kt)("h3",{id:"material-mode"},"Material Mode"),(0,a.kt)("p",null,"Properties that can be set for the representation in the scene."),(0,a.kt)("h3",{id:"material"},"Material"),(0,a.kt)("p",null,"This is the ",(0,a.kt)("strong",{parentName:"p"},"most basic property")," for showing the painting result as the material is."),(0,a.kt)("h3",{id:"preview"},"Preview"),(0,a.kt)("h3",{id:"map-source"},"Map Source"),(0,a.kt)("p",null,"This is a property that only shows results from a specific map source. This will be displayed differently depending on the map source set."),(0,a.kt)("h3",{id:"mask"},"Mask"),(0,a.kt)("p",null,"Property that ",(0,a.kt)("strong",{parentName:"p"},"displays the layer mask")," of the currently selected layer."),(0,a.kt)("h3",{id:"uv"},"UV"),(0,a.kt)("p",null,"This property shows the UV color."),(0,a.kt)("h3",{id:"preview-resolution"},"Preview Resolution"),(0,a.kt)("p",null,"Property that allows you to ",(0,a.kt)("strong",{parentName:"p"},"set the resolution of the currently displayed texture"),"."),(0,a.kt)("h3",{id:"solo"},"Solo"),(0,a.kt)("p",null,"A property that shows only the results of the currently ",(0,a.kt)("strong",{parentName:"p"},"selected layer"),"."))}c.isMDXComponent=!0}}]);