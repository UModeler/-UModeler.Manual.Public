"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,k=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),a=r(86010),o=r(53438),i=r(39960),l=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function k(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},33478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(52991);const i={slug:"/uveditor/lscm-tool",sidebar_position:5,description:""},l="LSCM \ud234",c={unversionedId:"editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool",id:"editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool",title:"LSCM \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-unwrap/lscm-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-unwrap",slug:"/uveditor/lscm-tool",permalink:"/ko/docs/uveditor/lscm-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/uveditor/lscm-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Cancel \ud234",permalink:"/ko/docs/uveditor/cancel-tool"},next:{title:"Selection \uadf8\ub8f9",permalink:"/ko/docs/uveditor-selection"}},s={},m=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\uc120\ud0dd\ud55c UV \ud398\uc774\uc2a4",id:"\uc120\ud0dd\ud55c-uv-\ud398\uc774\uc2a4",level:3},{value:"\uc124\uc815\ud55c \uc808\ub2e8\uc120\uc5d0 \ub9de\ucdb0 UV \uc0dd\uc131",id:"\uc124\uc815\ud55c-\uc808\ub2e8\uc120\uc5d0-\ub9de\ucdb0-uv-\uc0dd\uc131",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lscm-\ud234"},"LSCM \ud234"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LSCM Tool",src:r(80188).Z,width:"1578",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LSCM \ud234"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"LSCM \uc54c\uace0\ub9ac\uc998"),"\uc744 \uc0ac\uc6a9\ud55c UV \ud3b8\uc9d1 \ud234\ub85c, \uc790\uc5f0\uc2a4\ub7ec\uc6b4 UV \uc88c\ud45c\ub97c \uc0dd\uc131\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"uv-seam-\uc0dd\uc131\ud558\uae30"},(0,a.kt)("strong",{parentName:"h2"},"UV Seam \uc0dd\uc131\ud558\uae30")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc"),"\uc758 ",(0,a.kt)("strong",{parentName:"p"},"Mark UV Seam \ud234"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"Unmark UV Seam \ud234"),"\uc744 \uc774\uc6a9\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"p"},"LSCM \ud234\uc774 \uc774\uc6a9\ud560 \uc808\ub2e8\uc120"),"\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"admonition"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("strong",{parentName:"p"},"Mark UV Seam \ud234"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"Unmark UV Seam \ud234")," \ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,a.kt)(o.Z,{items:[{type:"link",label:"Mark UV Seam \ud234",href:"/docs/modeling/mark-uvseam-tool"},{type:"link",label:"Unmark UV Seam \ud234",href:"/docs/modeling/unmark-uvseam-tool"}],mdxType:"DocCardList"})),(0,a.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,a.kt)("h2",{parentName:"admonition",id:"lscm-\uc54c\uace0\ub9ac\uc998"},(0,a.kt)("strong",{parentName:"h2"},"LSCM \uc54c\uace0\ub9ac\uc998")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"LSCM (Least Squares Conformal Maps)"),"\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\uc57d\uc790"),"\ub85c, \uc774 \uc54c\uace0\ub9ac\uc998\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ucd5c\uc18c \uc81c\uacf1 \uac70\ub9ac\ub97c \uacc4\uc0b0"),"\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"p"},"\ucd5c\uc801\uc758 UV\ub97c \uc0dd\uc131"),"\ud569\ub2c8\ub2e4. ")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("h3",{id:"\uc120\ud0dd\ud55c-uv-\ud398\uc774\uc2a4"},"\uc120\ud0dd\ud55c UV \ud398\uc774\uc2a4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ud3bc\uce60 UV \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"LSCM Tool Select Face",src:r(65658).Z,width:"856",height:"524"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LSCM \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c UV \ud398\uc774\uc2a4\uac00 \ud3bc\uccd0\uc84c\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"LSCM Tool Result",src:r(13358).Z,width:"856",height:"524"}))),(0,a.kt)("h3",{id:"\uc124\uc815\ud55c-\uc808\ub2e8\uc120\uc5d0-\ub9de\ucdb0-uv-\uc0dd\uc131"},"\uc124\uc815\ud55c \uc808\ub2e8\uc120\uc5d0 \ub9de\ucdb0 UV \uc0dd\uc131"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mark UV Seam \ud234"),"\uacfc ",(0,a.kt)("strong",{parentName:"li"},"Unmark UV Seam \ud234"),"\ub85c ",(0,a.kt)("strong",{parentName:"li"},"\uc808\ub2e8\uc120\uc744 \ud3b8\uc9d1"),"\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"LSCM Tool Mark Seam",src:r(59026).Z,width:"856",height:"524"})),(0,a.kt)("li",{parentName:"ol"},"\ud3bc\uce60 \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"LSCM Tool Select All Face",src:r(42941).Z,width:"856",height:"524"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LSCM \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc808\ub2e8\uc120\uc5d0 \ub9de\ucdb0 UV \ud398\uc774\uc2a4\uac00 \ud3bc\uccd0\uc84c\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("img",{alt:"LSCM Tool Result",src:r(13358).Z,width:"856",height:"524"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,a.kt)("div",{class:"video-container-4-3"},(0,a.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/GzD8_toECHM",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},80188:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM-23832716af109dfae7321629d9adea94.png"},42941:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_AllFace-2c9361a1aa1de673fb354776fbae09cb.png"},59026:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_MarkSeam-e553ad5dc270a63d4616c2645e04449b.png"},13358:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_Result-115eee8f499241b6fc681f1b887556e6.png"},65658:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Unwrap_LSCM_SelectFace-6602dfc9b9ef72d507092ff925d83c68.png"}}]);