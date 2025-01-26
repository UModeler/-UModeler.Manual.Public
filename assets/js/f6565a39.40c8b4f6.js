"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=m(n),g=r,u=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var m=2;m<l;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const l={slug:"/modeling/align-tool",sidebar_position:4,description:""},i="Align Tool",a={unversionedId:"editable-mesh/modeling-mode/modeling-mode-misc/aling-tool",id:"editable-mesh/modeling-mode/modeling-mode-misc/aling-tool",title:"Align Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-misc/aling-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-misc",slug:"/modeling/align-tool",permalink:"/docs/modeling/align-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-misc/aling-tool.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/modeling/align-tool",sidebar_position:4,description:""},sidebar:"docs",previous:{title:"Local Settings Tool",permalink:"/docs/modeling/local-settings-tool"},next:{title:"Multiple Objects Group",permalink:"/docs/modeling-multiple-objects"}},s={},m=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Property</strong>",id:"property",level:2},{value:"Alignment Axis",id:"alignment-axis",level:3},{value:"Alignment Direction",id:"alignment-direction",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:m};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"align-tool"},"Align Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Align Tool",src:n(74926).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Align Tool")," is a tool that ",(0,r.kt)("strong",{parentName:"p"},"Aligns")," the vertices of the selected elements within bounds."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch the ",(0,r.kt)("strong",{parentName:"li"},"Align Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the elements you want to align."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Alignment Axis")," and ",(0,r.kt)("strong",{parentName:"li"},"Alignment Direction"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on\xa0",(0,r.kt)("strong",{parentName:"li"},"Align"),"\xa0button.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"property"},(0,r.kt)("strong",{parentName:"h2"},"Property")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Property",src:n(8377).Z,width:"800",height:"500"})),(0,r.kt)("h3",{id:"alignment-axis"},"Alignment Axis"),(0,r.kt)("p",null,"X, Y, or Z axis for\xa0alignment."),(0,r.kt)("h3",{id:"alignment-direction"},"Alignment Direction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TowardsMin"),": Minimum location of the selected axis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TowardsMiddle"),": Middle location of the selected axis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TowardsMax"),": Maximum location of the selected axis")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/M93vV-Lvkwo",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},74926:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Misc_Align-897ec9d8e21789e98b2120b13ea4368f.png"},8377:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Misc_Align_Properties-af53eeb1c7109b36b9c39f4c3ad8140b.png"}}]);