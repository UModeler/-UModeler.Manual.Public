"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={slug:"/modeling/inset-tool",sidebar_position:10,description:""},l="Inset Tool",r={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/inset-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/inset-tool",title:"Inset Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-add/inset-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/inset-tool",permalink:"/docs/modeling/inset-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/modeling-mode/modeling-mode-add/inset-tool.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/modeling/inset-tool",sidebar_position:10,description:""},sidebar:"docs",previous:{title:"Slice Cut Tool",permalink:"/docs/modeling/slicecut-tool"},next:{title:"Insert Vertex Tool",permalink:"/docs/modeling/insertvertex-tool"}},s={},d=[{value:"<strong>How to Use</strong>.",id:"how-to-use",level:2},{value:"Select a face and apply via properties",id:"select-a-face-and-apply-via-properties",level:3},{value:"Selecting a Tool and Choosing a Face",id:"selecting-a-tool-and-choosing-a-face",level:3},{value:"Adjusting Thickness via Click-Drag",id:"adjusting-thickness-via-click-drag",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Thickness",id:"thickness",level:3},{value:"Group",id:"group",level:3},{value:"<strong>Examples of use</strong>",id:"examples-of-use",level:2},{value:"Select a face and apply via properties",id:"select-a-face-and-apply-via-properties-1",level:3},{value:"Selecting a Tool and Choosing a Face",id:"selecting-a-tool-and-choosing-a-face-1",level:3},{value:"Adjusting Thickness via Click-Drag",id:"adjusting-thickness-via-click-drag-1",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inset-tool"},"Inset Tool"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Inset Tool",src:n(57403).Z,width:"1248",height:"604"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Inset tool")," is a tool that creates new faces based on the selected faces as if they were inset."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Inset tool")," only works with faces.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h2"},"How to Use"),"."),(0,a.kt)("h3",{id:"select-a-face-and-apply-via-properties"},"Select a face and apply via properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"select a face."),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Inset Tool"),".\n",(0,a.kt)("img",{alt:"Inset Tool",src:n(57403).Z,width:"1248",height:"604"})),(0,a.kt)("li",{parentName:"ol"},"Adjust the properties to the appropriate values.\n",(0,a.kt)("img",{alt:"Inset Tool Properties",src:n(88156).Z,width:"650",height:"246"})),(0,a.kt)("li",{parentName:"ol"},"After adjusting the properties, select the element, or use another tool to finalize.")),(0,a.kt)("h3",{id:"selecting-a-tool-and-choosing-a-face"},"Selecting a Tool and Choosing a Face"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch the ",(0,a.kt)("strong",{parentName:"li"},"Inset Tool"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Face.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to select ",(0,a.kt)("strong",{parentName:"li"},"multiple faces"),", simply hold down ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift"))," and ",(0,a.kt)("strong",{parentName:"li"},"additionally select")," the desired faces.\n",(0,a.kt)("img",{alt:"Inset Tool",src:n(57403).Z,width:"1248",height:"604"})))),(0,a.kt)("li",{parentName:"ol"},"Adjust the properties to the appropriate values.\n",(0,a.kt)("img",{alt:"Inset Tool Properties",src:n(88156).Z,width:"650",height:"246"})),(0,a.kt)("li",{parentName:"ol"},"After adjusting the properties, select the element, or use another tool to finalize.")),(0,a.kt)("h3",{id:"adjusting-thickness-via-click-drag"},"Adjusting Thickness via Click-Drag"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch the ",(0,a.kt)("strong",{parentName:"li"},"Inset Tool"),"."),(0,a.kt)("li",{parentName:"ol"},"Select the face you want to apply the ",(0,a.kt)("strong",{parentName:"li"},"Inset Tool")," to.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to apply it to ",(0,a.kt)("strong",{parentName:"li"},"multiple faces"),", you can hold down ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift"))," and select additional faces.\n",(0,a.kt)("img",{alt:"Multiple Select",src:n(52594).Z,width:"949",height:"705"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Click and drag"))," the selected face to adjust the ",(0,a.kt)("strong",{parentName:"li"},"Thickness property"),".\n",(0,a.kt)("img",{alt:"Inset Tool Drag",src:n(33087).Z,width:"1132",height:"532"})),(0,a.kt)("li",{parentName:"ol"},"When you are finished adjusting, select the element, or use another tool to finalize.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("strong",{parentName:"h2"},"Properties")),(0,a.kt)("h3",{id:"thickness"},"Thickness"),(0,a.kt)("p",null,"This property controls the size of the face generated by the ",(0,a.kt)("strong",{parentName:"p"},"Inset Tool"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Inset Tool Thickness",src:n(15169).Z,width:"1800",height:"608"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When negative, the face is generated to the inside of the face, and when positive, the face is generated to the outside of the face.")),(0,a.kt)("h3",{id:"group"},"Group"),(0,a.kt)("p",null,"A property that selects whether the selected faces should be applied as ",(0,a.kt)("strong",{parentName:"p"},"one group")," or each independent face when the ",(0,a.kt)("strong",{parentName:"p"},"Inset tool is applied"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Inset Tool Group",src:n(57639).Z,width:"1324",height:"604"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples-of-use"},(0,a.kt)("strong",{parentName:"h2"},"Examples of use")),(0,a.kt)("h3",{id:"select-a-face-and-apply-via-properties-1"},"Select a face and apply via properties"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/5piffXkFLVg",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h3",{id:"selecting-a-tool-and-choosing-a-face-1"},"Selecting a Tool and Choosing a Face"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/JlWRYSucFW0",frameborder:"0",allowfullscreen:""})),(0,a.kt)("h3",{id:"adjusting-thickness-via-click-drag-1"},"Adjusting Thickness via Click-Drag"),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/hqQRPlMqGO8",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},57403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset-9de2b8e16cc836ec979e76a911160e2f.png"},33087:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset_Drag-6745832d31ddcfd782649e84447f9eb4.png"},57639:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset_Group-6fc9ef408e489bd810014c9a78f45924.png"},52594:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset_MultiSelect-9c3cd181598fbae478fcbad8d6c18ae5.png"},88156:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset_Properties-c9a5efd150967169637dbb06a40535e9.png"},15169:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Add_Inset_Thickness-144708b48794421fb474c5a03296f8b3.png"}}]);