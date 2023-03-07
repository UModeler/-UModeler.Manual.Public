"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5497],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(o),h=r,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||a;return o?n.createElement(u,l(l({ref:t},p),{},{components:o})):n.createElement(u,l({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},67435:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={slug:"/modeling/detach-tool",sidebar_position:1},l="Detach Tool",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-remove/detach-tool",id:"editable-mesh/modeling-mode/modeling-mode-remove/detach-tool",title:"Detach Tool",description:"Detach Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-remove/detach-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-remove",slug:"/modeling/detach-tool",permalink:"/docs/modeling/detach-tool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/detach-tool",sidebar_position:1},sidebar:"docs",previous:{title:"Remove Group",permalink:"/docs/modeling-remove"},next:{title:"Eraser Tool",permalink:"/docs/modeling/eraser-tool"}},i={},s=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>properties</strong>",id:"properties",level:2},{value:"<strong>Detach Type: To Elements</strong>",id:"detach-type-to-elements",level:2},{value:"Detach from a connected mesh",id:"detach-from-a-connected-mesh",level:3},{value:"<strong> Detach Type: To Object</strong>",id:"-detach-type-to-object",level:2},{value:"Create an Object with Detach",id:"create-an-object-with-detach",level:3},{value:"<strong>Example of Usage</strong>",id:"example-of-usage",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detach-tool"},"Detach Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detach Tool",src:o(65215).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Detach tool")," is used to ",(0,r.kt)("strong",{parentName:"p"},"detach only selected faces from the message"),", or to detach them from the object currently being edited and separate them into a new object."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Detach tool")," is a tool that is applied directly according to the set properties, so you need to change the properties before executing it."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The properties you change will remain the same until you ",(0,r.kt)("strong",{parentName:"p"},"change them again"),", so it's useful to change them to properties you use frequently.")),(0,r.kt)("p",null," See how to use it according to the properties below."),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"properties")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can change properties in the ",(0,r.kt)("strong",{parentName:"p"},"Properties window")," that appears when you ",(0,r.kt)("strong",{parentName:"p"},"Alt+click")," on the ",(0,r.kt)("strong",{parentName:"p"},"Detach tool icon"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"properties",src:o(77849).Z,width:"844",height:"356"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"detach-type-to-elements"},(0,r.kt)("strong",{parentName:"h2"},"Detach Type: To Elements")),(0,r.kt)("h3",{id:"detach-from-a-connected-mesh"},"Detach from a connected mesh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"select a face."),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Detach Tool"),".\n",(0,r.kt)("img",{alt:"Detach Type: To Elements",src:o(65215).Z,width:"1920",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"The selected faces are detached from the connected mesh.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-detach-type-to-object"},(0,r.kt)("strong",{parentName:"h2"}," Detach Type: To Object")),(0,r.kt)("h3",{id:"create-an-object-with-detach"},"Create an Object with Detach"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"select a face."),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Detach Tool"),".\n",(0,r.kt)("img",{alt:"Detach Type: To Object",src:o(74557).Z,width:"1920",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"The faces will detach, creating a new object with the selected faces.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-of-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example of Usage")))}m.isMDXComponent=!0},65215:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Remove_Detach_Element-f1fae186bfffecbdb4e46cc7cdc187b1.png"},74557:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Remove_Detach_Object-7f9168362ff67c469dae9a2dbe0e113f.png"},77849:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Remove_Detach_Properties-bbfe3634404ca8c4c0fe7f499411b7b6.png"}}]);