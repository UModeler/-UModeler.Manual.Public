"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1612],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var l=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=l.createContext({}),d=function(e){var t=l.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=d(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return o?l.createElement(g,r(r({ref:t},s),{},{components:o})):l.createElement(g,r({ref:t},s))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<n;d++)r[d]=o[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},17721:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var l=o(87462),a=(o(67294),o(3905));const n={slug:"/modeling/duplicate-tool",sidebar_position:2,description:""},r="Duplicate Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/duplicate-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/duplicate-tool",title:"Duplicate Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-add/duplicate-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/duplicate-tool",permalink:"/docs/modeling/duplicate-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/duplicate-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Knife Tool",permalink:"/docs/modeling/knife-tool"},next:{title:"PushPull Tool",permalink:"/docs/modeling/pushpull-tool"}},c={},d=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"Vertices",id:"vertices",level:3},{value:"Edge",id:"edge",level:3},{value:"Face",id:"face",level:3},{value:"<strong>Example of Usage</strong>",id:"example-of-usage",level:2},{value:"Vertex",id:"vertex",level:3},{value:"Edge",id:"edge-1",level:3},{value:"Face",id:"face-1",level:3}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"duplicate-tool"},"Duplicate Tool"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Duplicate Tool Face",src:o(51992).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Duplicate tool")," duplicates the selected element (Vertex, Edge, Face). When executed, it will duplicate the selected element exactly in the same location."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use-it"},(0,a.kt)("strong",{parentName:"h2"},"How to use it")),(0,a.kt)("h3",{id:"vertices"},"Vertices"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the vertex you want to duplicate."),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Duplicate Tool"),"."),(0,a.kt)("li",{parentName:"ol"},"The selected vertex has been duplicated to the same location.\n",(0,a.kt)("img",{alt:"Duplicate Tool Vertex",src:o(32830).Z,width:"1920",height:"640"}))),(0,a.kt)("h3",{id:"edge"},"Edge"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the edge you want to duplicate."),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Duplicate Tool"),"."),(0,a.kt)("li",{parentName:"ol"},"The selected edge has been duplicated to the same location.\n",(0,a.kt)("img",{alt:"Duplicate Tool Edge",src:o(32283).Z,width:"1920",height:"640"}))),(0,a.kt)("h3",{id:"face"},"Face"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the face you want to duplicate."),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Duplicate Tool"),"."),(0,a.kt)("li",{parentName:"ol"},"The selected faces have been duplicated to the same location.\n",(0,a.kt)("img",{alt:"Duplicate Tool Face",src:o(51992).Z,width:"1920",height:"640"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example-of-usage"},(0,a.kt)("strong",{parentName:"h2"},"Example of Usage")),(0,a.kt)("h3",{id:"vertex"},"Vertex"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/KpwzS_m7jig",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h3",{id:"edge-1"},"Edge"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/tXbAqpUQtG8",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h3",{id:"face-1"},"Face"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/241WkJf6RrI",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},32283:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Add_Duplicate_Edge-bce69d9d5af902dfd4064bdcf63a986a.png"},51992:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Add_Duplicate_Face-ac430f92e303995868dd0c1b3059e8a7.png"},32830:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/Modeling_Add_Duplicate_Vertex-7fcb4a7213acc7c917ad2f41ffdd1858.png"}}]);