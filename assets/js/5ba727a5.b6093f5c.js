"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return r?n.createElement(h,l(l({ref:t},m),{},{components:r})):n.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),o=r(86010),a=r(53438),l=r(39960),i=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:a,description:l}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:a},r," ",a),l&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:l},l))}function h(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const l=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},48597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const l={slug:"/uveditor/lscm-tool",sidebar_position:5,description:""},i="LSCM Tool",c={unversionedId:"editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool",id:"editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool",title:"LSCM Tool",description:"",source:"@site/docs/editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-unwrap",slug:"/uveditor/lscm-tool",permalink:"/docs/uveditor/lscm-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/uveditor/lscm-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Cancel Tool",permalink:"/docs/uveditor/cancel-tool"},next:{title:"Weld And Break Group",permalink:"/docs/uveditor-weld-and-break"}},s={},m=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"Selected UV Face",id:"selected-uv-face",level:3},{value:"Create a UV along a set cut line",id:"create-a-uv-along-a-set-cut-line",level:3},{value:"<strong>Example of use</strong>",id:"example-of-use",level:2}],d={toc:m};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lscm-tool"},"LSCM Tool"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LSCM Tool",src:r(62365).Z,width:"1578",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"LSCM Tool")," is a UV editing tool that uses the ",(0,o.kt)("strong",{parentName:"p"},"LSCM algorithm")," to generate natural UV coordinates."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"to-create-a-uv-seam"},"To create a ",(0,o.kt)("strong",{parentName:"h2"},"UV Seam")),(0,o.kt)("p",{parentName:"admonition"},"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Mark UV Seam tool")," and the ",(0,o.kt)("strong",{parentName:"p"},"Unmark UV Seam tool")," in ",(0,o.kt)("strong",{parentName:"p"},"Modeling Mode")," to create cut lines for the ",(0,o.kt)("strong",{parentName:"p"},"LSCM Tool")," to use."),(0,o.kt)("p",{parentName:"admonition"},"For more information, see the ",(0,o.kt)("strong",{parentName:"p"},"Mark UV Seam Tool")," and ",(0,o.kt)("strong",{parentName:"p"},"Unmark UV Seam Tool")," pages."),(0,o.kt)(a.Z,{items:[{type:"link",label:"Mark UV Seam Tool",href:"/docs/modeling/mark-uvseam-tool"},{type:"link",label:"Unmark UV Seam Tool",href:"/docs/modeling/unmark-uvseam-tool"}],mdxType:"DocCardList"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h2",{parentName:"admonition",id:"lscm-algorithm"},"LSCM Algorithm"),(0,o.kt)("p",{parentName:"admonition"},"Short for ",(0,o.kt)("strong",{parentName:"p"},"Least Squares Conformal Maps (LSCM)"),", this algorithm calculates the ",(0,o.kt)("strong",{parentName:"p"},"least squares distance")," to produce the ",(0,o.kt)("strong",{parentName:"p"},"optimal UV"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to Use")),(0,o.kt)("h3",{id:"selected-uv-face"},"Selected UV Face"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the UV faces you want to expand.\n",(0,o.kt)("img",{alt:"LSCM Tool Select Face",src:r(52053).Z,width:"856",height:"524"})),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("strong",{parentName:"li"},"LSCM Tool"),"."),(0,o.kt)("li",{parentName:"ol"},"The selected UV face has been expanded.\n",(0,o.kt)("img",{alt:"LSCM Tool Result",src:r(21504).Z,width:"856",height:"524"}))),(0,o.kt)("h3",{id:"create-a-uv-along-a-set-cut-line"},"Create a UV along a set cut line"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the cut line with the Mark UV Seam tool and Unmark UV Seam tool.\n",(0,o.kt)("img",{alt:"LSCM Tool Mark Seam",src:r(53728).Z,width:"856",height:"524"})),(0,o.kt)("li",{parentName:"ol"},"Select the face to be stretched.\n",(0,o.kt)("img",{alt:"LSCM Tool Select All Face",src:r(65639).Z,width:"856",height:"524"})),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("strong",{parentName:"li"},"LSCM Tool"),"."),(0,o.kt)("li",{parentName:"ol"},"The UV face has been unfolded to match the cut line.\n",(0,o.kt)("img",{alt:"LSCM Tool Result",src:r(21504).Z,width:"856",height:"524"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-of-use"},(0,o.kt)("strong",{parentName:"h2"},"Example of use")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/GzD8_toECHM",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},62365:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM-23832716af109dfae7321629d9adea94.png"},65639:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_AllFace-2c9361a1aa1de673fb354776fbae09cb.png"},53728:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_MarkSeam-e553ad5dc270a63d4616c2645e04449b.png"},21504:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_Result-115eee8f499241b6fc681f1b887556e6.png"},52053:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_SelectFace-6602dfc9b9ef72d507092ff925d83c68.png"}}]);