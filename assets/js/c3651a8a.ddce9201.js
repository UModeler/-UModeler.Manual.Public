"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={slug:"/uveditor/plane-tool",sidebar_position:1,description:""},i="Plane Tool",l={unversionedId:"editable-mesh/uv-editor/uv-editor-unwrap/plane-tool",id:"editable-mesh/uv-editor/uv-editor-unwrap/plane-tool",title:"Plane Tool",description:"",source:"@site/docs/editable-mesh/uv-editor/uv-editor-unwrap/plane-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-unwrap",slug:"/uveditor/plane-tool",permalink:"/docs/uveditor/plane-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/uv-editor/uv-editor-unwrap/plane-tool.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/uveditor/plane-tool",sidebar_position:1,description:""},sidebar:"docs",previous:{title:"Unwrap Group",permalink:"/docs/uveditor-unwrap"},next:{title:"Cube Tool",permalink:"/docs/uveditor/cube-tool"}},s={},p=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Individual",id:"individual",level:2},{value:"Projection Axis",id:"projection-axis",level:2},{value:"Normal",id:"normal",level:3},{value:"View",id:"view",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"plane-tool"},"Plane Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Plane Tool",src:r(64600).Z,width:"1862",height:"640"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Plane tool")," in the ",(0,n.kt)("strong",{parentName:"p"},"UV Editor")," is a tool that stretches the selected faces in a ",(0,n.kt)("strong",{parentName:"p"},"set projection"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the face to be stretched.\n",(0,n.kt)("img",{alt:"Plane Tool Select Face",src:r(94128).Z,width:"960",height:"640"})),(0,n.kt)("li",{parentName:"ol"},"Launch the ",(0,n.kt)("strong",{parentName:"li"},"Plane tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Set the desired projection in the Projection Axis property.\n",(0,n.kt)("img",{alt:"Plane Tool Projection Axis",src:r(20146).Z,width:"1242",height:"430"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click"))," on the ",(0,n.kt)("strong",{parentName:"li"},"Unwrap property"),".\n",(0,n.kt)("img",{alt:"Plane Tool Unwrap Button",src:r(75154).Z,width:"1238",height:"284"})),(0,n.kt)("li",{parentName:"ol"},"The UV face has been stretched to match the projection method you set.\n",(0,n.kt)("img",{alt:"Plane Tool Result",src:r(43310).Z,width:"874",height:"510"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Plane Tool Properties",src:r(95545).Z,width:"1204",height:"302"})),(0,n.kt)("h2",{id:"individual"},"Individual"),(0,n.kt)("p",null,"This property sets the selected faces to unfold ",(0,n.kt)("strong",{parentName:"p"},"individually"),".\n",(0,n.kt)("img",{alt:"Plane Tool Individual",src:r(49047).Z,width:"1646",height:"600"})),(0,n.kt)("h2",{id:"projection-axis"},"Projection Axis"),(0,n.kt)("p",null,"Property that sets the projection method.\n",(0,n.kt)("img",{alt:"Plane Tool Projection Axis",src:r(20146).Z,width:"1242",height:"430"})),(0,n.kt)("h3",{id:"normal"},"Normal"),(0,n.kt)("p",null,"This property sets the projection to the ",(0,n.kt)("strong",{parentName:"p"},"average normal orientation of the selected faces"),"."),(0,n.kt)("h3",{id:"view"},"View"),(0,n.kt)("p",null,"This property sets the projection to the direction you are currently looking."),(0,n.kt)("h3",{id:"x"},"X"),(0,n.kt)("p",null,"This property sets the projection to the direction of the world's X-axis."),(0,n.kt)("h3",{id:"y"},"Y"),(0,n.kt)("p",null,"This property sets the projection to the y-axis direction of the world."),(0,n.kt)("h3",{id:"z"},"Z"),(0,n.kt)("p",null,"This property sets the projection method to the z-axis direction of the world."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/B8piYzZhTZc",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},64600:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane-96f12d9b5a2c900aa2dbcf5d738b8f2f.png"},49047:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_Individual-e4693b55eaacacbe1f8bf65375cb3ff0.png"},20146:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_ProjectionAxis-2162243ce8b167735d755aa3e7a8b680.png"},95545:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_Properties-483f21064c9c62b1ecb09fd3983b8cd7.png"},43310:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_Result-ae1b0de78bba0aebf8d7d2427d599d6c.png"},94128:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_SelectFace-370c99465c9bf7d14a5cc3e064bacee8.png"},75154:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/UVEditor_Unwrap_Plane_UnwrapButton-141aec51f4d80c4045eab5a48536c91f.png"}}]);