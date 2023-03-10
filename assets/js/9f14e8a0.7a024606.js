"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4398],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95414:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={slug:"/uveditor/boundary-tool-tool",sidebar_position:3},l="Boundary Tool",i={unversionedId:"editable-mesh/uv-editor/uv-editor-alignment/boundary-tool",id:"editable-mesh/uv-editor/uv-editor-alignment/boundary-tool",title:"Boundary Tool",description:"Boundary Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-alignment/boundary-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-alignment",slug:"/uveditor/boundary-tool-tool",permalink:"/docs/uveditor/boundary-tool-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/uveditor/boundary-tool-tool",sidebar_position:3},sidebar:"docs",previous:{title:"Quad Tool",permalink:"/docs/uveditor/quad-tool"},next:{title:"Left Tool",permalink:"/docs/uveditor/left-tool"}},s={},u=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boundary-tool"},"Boundary Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boundary Tool",src:o(91373).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Boundary Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"UV Editor")," aligns selected ",(0,r.kt)("strong",{parentName:"p"},"UV faces")," to the outline shape and size of the last selected UV face."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"select the UV face you want to align.\n",(0,r.kt)("img",{alt:"Boundary Tool Select Face 1",src:o(96638).Z,width:"898",height:"550"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the last selected UV face to be the base.\n",(0,r.kt)("img",{alt:"Boundary Tool Select Face 2",src:o(46278).Z,width:"898",height:"550"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("strong",{parentName:"p"},"Boundary Tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The shape and size of the connected UV faces will be sorted ",(0,r.kt)("strong",{parentName:"p"},"based on the selected UV face"),".\n",(0,r.kt)("img",{alt:"Boundary Tool Result",src:o(9462).Z,width:"898",height:"550"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")))}d.isMDXComponent=!0},91373:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UVEditor_Alignment_Boundary-39e364e5ef06ac84c91804585fff2c8c.png"},9462:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UVEditor_Alignment_Boundary_Result-00841ebad9b564d8610f3ef0c2a4a285.png"},96638:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UVEditor_Alignment_Boundary_SelectFace1-c871d8d2064d1019b1cf2a6f48356d7d.png"},46278:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UVEditor_Alignment_Boundary_SelectFace2-9962597b3d229753f8b872e02e72e22f.png"}}]);