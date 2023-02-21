"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={slug:"/uveditor/export-tool",sidebar_position:1},i="Export Tool",l={unversionedId:"editable-mesh/uv-editor/uv-editor-misc/export-tool",id:"editable-mesh/uv-editor/uv-editor-misc/export-tool",title:"Export Tool",description:"The Export tool in the UV Editor is a tool for exporting UV layouts to image files.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-misc/export-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-misc",slug:"/uveditor/export-tool",permalink:"/docs/uveditor/export-tool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/uveditor/export-tool",sidebar_position:1},sidebar:"docs",previous:{title:"Misc Group",permalink:"/docs/uveditor-misc"},next:{title:"Rigging Mode",permalink:"/docs/rigging-mode"}},p={},s=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Outline Color",id:"outline-color",level:3},{value:"Transparent Background",id:"transparent-background",level:3},{value:"Background Color",id:"background-color",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Export",id:"export",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"export-tool"},"Export Tool"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Export tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"UV Editor")," is a tool for exporting UV layouts to image files."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The reason for exporting the UV layout is to use it in an external image editing program.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Export tool")," of ",(0,n.kt)("strong",{parentName:"li"},"UV Editor"),"."),(0,n.kt)("li",{parentName:"ol"},"set the desired properties and press the ",(0,n.kt)("strong",{parentName:"li"},"Export button"),"."),(0,n.kt)("li",{parentName:"ol"},"Specify the ",(0,n.kt)("strong",{parentName:"li"},"path")," to export the image file."),(0,n.kt)("li",{parentName:"ol"},"You can check the created image file in an external program.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("h3",{id:"outline-color"},"Outline Color"),(0,n.kt)("p",null,"This property sets the UV layout color of the exported image."),(0,n.kt)("h3",{id:"transparent-background"},"Transparent Background"),(0,n.kt)("p",null,"This property sets the background of the exported image to transparent."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you make the UV layout background transparent with a PNG extension, the exported image file will be better suited for use in programs that support layers, such as Photoshop.")),(0,n.kt)("h3",{id:"background-color"},"Background Color"),(0,n.kt)("p",null,"This property sets the background color of the exported image."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This does not apply if the ",(0,n.kt)("strong",{parentName:"p"},"Transparent Background property")," is set.")),(0,n.kt)("h3",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"This property sets the resolution of the exported image."),(0,n.kt)("h3",{id:"export"},"Export"),(0,n.kt)("p",null,"The button to finally export the image."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")))}c.isMDXComponent=!0}}]);