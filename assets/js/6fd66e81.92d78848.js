"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(g,l(l({ref:t},p),{},{components:r})):o.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={slug:"/uveditor/sew-tool",sidebar_position:1},l="Sew Tool",i={unversionedId:"editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool",id:"editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool",title:"Sew Tool",description:"Sew Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-weld-and-break/sew-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-weld-and-break",slug:"/uveditor/sew-tool",permalink:"/docs/uveditor/sew-tool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/uveditor/sew-tool",sidebar_position:1},sidebar:"docs",previous:{title:"Weld And Break Group",permalink:"/docs/uveditor-weld-and-break"},next:{title:"Move Sew Tool",permalink:"/docs/uveditor/move-sew-tool"}},s={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example of Usage</strong>",id:"example-of-usage",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sew-tool"},"Sew Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sew Tool",src:r(59081).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Sew Tool")," in the UV Editor is used to sew selected UV edges to shared UV edges."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"for-shared-elements"},"For ",(0,n.kt)("strong",{parentName:"h2"},"Shared Elements")),(0,n.kt)("p",{parentName:"admonition"},"A ",(0,n.kt)("strong",{parentName:"p"},"shared element")," is an element that is separated by UVs, but is ",(0,n.kt)("strong",{parentName:"p"},"attached or neighboring")," in the ",(0,n.kt)("strong",{parentName:"p"},"mesh"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the UV edges you want to connect.\n",(0,n.kt)("img",{alt:"Sew Tool Select",src:r(78059).Z,width:"898",height:"550"})),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Sew Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"The selected UV edges will be ",(0,n.kt)("strong",{parentName:"li"},"moved")," to the ",(0,n.kt)("strong",{parentName:"li"},"shared UV edge")," and joined together.\n",(0,n.kt)("img",{alt:"Sew Tool Result",src:r(69128).Z,width:"898",height:"550"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-of-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example of Usage")))}u.isMDXComponent=!0},59081:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_WeldAndBreak_Sew-bde74a14718e21a4aa0b735e20aa20c9.png"},69128:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_WeldAndBreak_Sew_Result-510f9dd2cfe7272883913b4b908889c8.png"},78059:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_WeldAndBreak_Sew_Select-e519b384415ea1651ce6e1ffa225eeff.png"}}]);