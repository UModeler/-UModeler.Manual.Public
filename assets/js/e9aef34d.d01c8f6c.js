"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7293],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},45284:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={slug:"/uveditor/move-sew-tool",sidebar_position:2},i="Move Sew Tool",l={unversionedId:"editable-mesh/uv-editor/uv-editor-weld-and-break/move-sew-tool",id:"editable-mesh/uv-editor/uv-editor-weld-and-break/move-sew-tool",title:"Move Sew Tool",description:"The Move Sew tool in the UV Editor glues elements associated with a selected UV edge to a shared UV edge.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-weld-and-break/move-sew-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-weld-and-break",slug:"/uveditor/move-sew-tool",permalink:"/docs/uveditor/move-sew-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/uveditor/move-sew-tool",sidebar_position:2},sidebar:"docs",previous:{title:"Sew Tool",permalink:"/docs/uveditor/sew-tool"},next:{title:"Weld To First Tool",permalink:"/docs/uveditor/weld-to-first-tool"}},s={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"move-sew-tool"},"Move Sew Tool"),(0,n.kt)("p",null,"The Move Sew tool in the UV Editor glues elements associated with a selected UV edge to a shared UV edge."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"for-a-shared-element"},"For a ",(0,n.kt)("strong",{parentName:"h2"},"Shared Element")),(0,n.kt)("p",{parentName:"admonition"},"A ",(0,n.kt)("strong",{parentName:"p"},"shared element")," is an element that is separated by UVs, but is ",(0,n.kt)("strong",{parentName:"p"},"attached or neighboring")," in the ",(0,n.kt)("strong",{parentName:"p"},"mesh"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"how-this-differs-from-the-sew-tool"},"How this differs from the Sew tool"),(0,n.kt)("p",{parentName:"admonition"},"The difference is that the ",(0,n.kt)("strong",{parentName:"p"},"Sew tool")," only moves and joins the selected UV edges, while the ",(0,n.kt)("strong",{parentName:"p"},"Move Sew tool")," moves and joins all of the elements associated with the selected UV edges.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the UV edges to be connected."),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Move Sew Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"The elements associated with the selected UV edge will be moved to the ",(0,n.kt)("strong",{parentName:"li"},"shared UV edge")," and joined together.**")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")))}u.isMDXComponent=!0}}]);