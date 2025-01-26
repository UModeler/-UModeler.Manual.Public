"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[65244],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var l=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,r=function(e,t){if(null==e)return{};var o,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||n;return o?l.createElement(g,a(a({ref:t},d),{},{components:o})):l.createElement(g,a({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<n;c++)a[c]=o[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,o)}u.displayName="MDXCreateElement"},30596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var l=o(87462),r=(o(67294),o(3905));const n={slug:"/modeling/collapse-tool",sidebar_position:4,description:""},a="Collapse Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-remove/collapse-tool",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-remove/collapse-tool",title:"Collapse Tool",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/modeling-mode/modeling-mode-remove/collapse-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-remove",slug:"/modeling/collapse-tool",permalink:"/docs/basic/modeling/collapse-tool",draft:!1,tags:[],version:"basic",sidebarPosition:4,frontMatter:{slug:"/modeling/collapse-tool",sidebar_position:4,description:""},sidebar:"docs",previous:{title:"Target Weld Tool",permalink:"/docs/basic/modeling/targetweld-tool"},next:{title:"Merge Tool",permalink:"/docs/basic/modeling/merge-tool"}},s={},c=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"Vertices",id:"vertices",level:3},{value:"Edges",id:"edges",level:3},{value:"Faces",id:"faces",level:3},{value:"<strong>Example of use</strong>",id:"example-of-use",level:2},{value:"Vertex",id:"vertex",level:3},{value:"Edge",id:"edge",level:3},{value:"Face",id:"face",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collapse-tool"},"Collapse Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Collapse Tool",src:o(50584).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Collapse tool")," is a tool that combines ",(0,r.kt)("strong",{parentName:"p"},"selected elements (Vertex, Edge, Face)")," at once."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Selected elements will be combined in groups that are ",(0,r.kt)("strong",{parentName:"p"},"connected to each other"),", not by distance.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("h3",{id:"vertices"},"Vertices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"one or more vertices"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Collapse tool"),"."),(0,r.kt)("li",{parentName:"ol"},"The selected ",(0,r.kt)("strong",{parentName:"li"},"Vertices groups")," will be merged together.\n",(0,r.kt)("img",{alt:"Collapse Tool Vertex",src:o(50584).Z,width:"1920",height:"640"}))),(0,r.kt)("h3",{id:"edges"},"Edges"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select one or more edges."),(0,r.kt)("li",{parentName:"ol"},"Run the Collapse tool."),(0,r.kt)("li",{parentName:"ol"},"The selected ",(0,r.kt)("strong",{parentName:"li"},"Edges groups")," will be merged together.\n",(0,r.kt)("img",{alt:"Collapse Tool Edge",src:o(78679).Z,width:"1920",height:"640"}))),(0,r.kt)("h3",{id:"faces"},"Faces"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select one or more faces."),(0,r.kt)("li",{parentName:"ol"},"Run the Collapse tool."),(0,r.kt)("li",{parentName:"ol"},"the selected ",(0,r.kt)("strong",{parentName:"li"},"Face groups")," will be merged together.\n",(0,r.kt)("img",{alt:"Collapse Tool Face",src:o(20857).Z,width:"1920",height:"640"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-of-use"},(0,r.kt)("strong",{parentName:"h2"},"Example of use")),(0,r.kt)("h3",{id:"vertex"},"Vertex"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/CqsBchYEQ50",frameborder:"0",allowfullscreen:""})),(0,r.kt)("h3",{id:"edge"},"Edge"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/O3I-J6rY3ds",frameborder:"0",allowfullscreen:""})),(0,r.kt)("h3",{id:"face"},"Face"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/r6ZkG3chRJU",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},78679:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Remove_Collapse_Edge-aa28c217c5d64164c8786b8e184a5d9a.png"},20857:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Remove_Collapse_Face-979c094972fa2cebd771d017921a86ef.png"},50584:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Remove_Collapse_Vertex-9eeb1d9f01bb1f18772d3b1ad1f4c0a5.png"}}]);