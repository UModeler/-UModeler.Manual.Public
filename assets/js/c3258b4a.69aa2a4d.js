"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7496],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},18551:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={slug:"/uveditor/boundary-tool",sidebar_position:3,description:""},i="Boundary Tool",l={unversionedId:"editable-mesh/uv-editor/uv-editor-alignment/boundary-tool",id:"version-basic/editable-mesh/uv-editor/uv-editor-alignment/boundary-tool",title:"Boundary Tool",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/uv-editor/uv-editor-alignment/boundary-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-alignment",slug:"/uveditor/boundary-tool",permalink:"/docs/basic/uveditor/boundary-tool",draft:!1,tags:[],version:"basic",sidebarPosition:3,frontMatter:{slug:"/uveditor/boundary-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Quad Tool",permalink:"/docs/basic/uveditor/quad-tool"},next:{title:"Left Tool",permalink:"/docs/basic/uveditor/left-tool"}},s={},c=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"boundary-tool"},"Boundary Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Boundary Tool",src:o(21864).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Boundary Tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"UV Editor")," aligns selected ",(0,n.kt)("strong",{parentName:"p"},"UV faces")," to the outline shape and size of the last selected UV face."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"select the UV face you want to align.\n",(0,n.kt)("img",{alt:"Boundary Tool Select Face 1",src:o(29343).Z,width:"898",height:"550"})),(0,n.kt)("li",{parentName:"ol"},"Select the last selected UV face to be the base.\n",(0,n.kt)("img",{alt:"Boundary Tool Select Face 2",src:o(98516).Z,width:"898",height:"550"})),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Boundary Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"The shape and size of the connected UV faces will be sorted ",(0,n.kt)("strong",{parentName:"li"},"based on the selected UV face"),".\n",(0,n.kt)("img",{alt:"Boundary Tool Result",src:o(87929).Z,width:"898",height:"550"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/oY4KUNB8mvY",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},21864:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/UVEditor_Alignment_Boundary-39e364e5ef06ac84c91804585fff2c8c.png"},87929:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/UVEditor_Alignment_Boundary_Result-00841ebad9b564d8610f3ef0c2a4a285.png"},29343:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/UVEditor_Alignment_Boundary_SelectFace1-c871d8d2064d1019b1cf2a6f48356d7d.png"},98516:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/UVEditor_Alignment_Boundary_SelectFace2-9962597b3d229753f8b872e02e72e22f.png"}}]);