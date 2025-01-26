"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,g=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(86010),l=a(53438),i=a(39960),p=a(13919),o=a(95999);const m="cardContainer_fWXF",s="cardTitle_rnsV",u="cardDescription_PWke";function k(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",m)},a)}function c(e){let{href:t,icon:a,title:l,description:i}=e;return n.createElement(k,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",s),title:l},a," ",l),i&&n.createElement("p",{className:(0,r.Z)("text--truncate",u),title:i},i))}function g(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(c,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function N(e){let{item:t}=e;const a=(0,p.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return n.createElement(c,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(N,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(h,{items:a.items,className:t})}function h(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const i=(0,l.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},75655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(52991);const i={slug:"/usage-guide/ai-texturing-properties",sidebar_position:1},p="AI \ud14d\uc2a4\ucc98\ub9c1 \uc18d\uc131",o={unversionedId:"ai-texturing/usage-guide/ai-texturing-properties",id:"ai-texturing/usage-guide/ai-texturing-properties",title:"AI \ud14d\uc2a4\ucc98\ub9c1 \uc18d\uc131",description:"UModeler X\ub294 AI \ud14d\uc2a4\ucc98\ub9c1\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc124\uc815\uc744 \uc81c\uacf5\ud558\uba70, \uc774\ub294 Stable Diffusion web UI\uc640 API\ub97c \ud1b5\ud574 \uc6d0\ud65c\ud558\uac8c \uc5f0\ub3d9\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ai-texturing/usage-guide/ai-texturing-properties.md",sourceDirName:"ai-texturing/usage-guide",slug:"/usage-guide/ai-texturing-properties",permalink:"/ko/docs/usage-guide/ai-texturing-properties",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/usage-guide/ai-texturing-properties.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/usage-guide/ai-texturing-properties",sidebar_position:1},sidebar:"docs",previous:{title:"\uc0ac\uc6a9 \uac00\uc774\ub4dc",permalink:"/ko/docs/usage-guide"},next:{title:"webui-user.bat/webui-user.sh \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218",permalink:"/ko/docs/usage-guide/webui-user-bat-cli-parameters"}},m={},s=[{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"ProjectionOnly",id:"projectiononly",level:3},{value:"Checkpoint",id:"checkpoint",level:3},{value:"Address",id:"address",level:3},{value:"Prompt",id:"prompt",level:3},{value:"NegativePrompt",id:"negativeprompt",level:3},{value:"CFGScale",id:"cfgscale",level:3},{value:"Sampler",id:"sampler",level:3},{value:"SamplingStep",id:"samplingstep",level:3},{value:"Restore Faces",id:"restore-faces",level:3},{value:"ImageMaxSize",id:"imagemaxsize",level:3},{value:"BatchCount",id:"batchcount",level:3},{value:"Use SceneMap (Img2Img)",id:"use-scenemap-img2img",level:3},{value:"Use Depth Control Net",id:"use-depth-control-net",level:3},{value:"Extra Control Net1",id:"extra-control-net1",level:3},{value:"Hires.fix",id:"hiresfix",level:3},{value:"Seed",id:"seed",level:3},{value:"Generate Forever",id:"generate-forever",level:3},{value:"Generate",id:"generate",level:3},{value:"Generate(Rect)",id:"generaterect",level:3},{value:"Custom Cameras",id:"custom-cameras",level:3},{value:"Result",id:"result",level:3},{value:"PromptHistory",id:"prompthistory",level:3}],u={toc:s};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-\ud14d\uc2a4\ucc98\ub9c1-\uc18d\uc131"},"AI \ud14d\uc2a4\ucc98\ub9c1 \uc18d\uc131"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UModeler X"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"AI \ud14d\uc2a4\ucc98\ub9c1"),"\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc124\uc815\uc744 \uc81c\uacf5\ud558\uba70, \uc774\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"API"),"\ub97c \ud1b5\ud574 \uc6d0\ud65c\ud558\uac8c ",(0,r.kt)("strong",{parentName:"p"},"\uc5f0\ub3d9"),"\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UModeler X"),"\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 ",(0,r.kt)("strong",{parentName:"p"},"AI \ud14d\uc2a4\ucc98\ub9c1 \uc18d\uc131"),"\uc740 \uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI\uc5d0\uc11c \uac00\uc7a5 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \uc124\uc815"),"\ub4e4\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 web UI\ub85c \ub2e4\uc2dc \ub3cc\uc544\uac00\uc9c0 \uc54a\uace0\ub3c4 \ube60\ub974\uac8c \uc124\uc815\uc744 \ubcc0\uacbd\ud558\uace0 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d \uc6d0\ud558\ub294 \uc18d\uc131\uc774 ",(0,r.kt)("strong",{parentName:"p"},"UModeler X"),"\uc5d0 \uc5c6\ub354\ub77c\ub3c4 Stable Diffusion web UI\uc5d0\uc11c \uc870\uc808\ud55c \uc124\uc815\uc740 ",(0,r.kt)("strong",{parentName:"p"},"UModeler X\uc5d0\uc11c\ub3c4 \uc790\ub3d9\uc73c\ub85c \ubc18\uc601"),"\ub429\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,r.kt)("h3",{id:"projectiononly"},"ProjectionOnly"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AI \ud14d\uc2a4\ucc98\ub9c1\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0")," \ud604\uc7ac \ubaa8\ub378\uc758 \uc0c1\ud0dc\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uadf8\ub300\ub85c \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"AI \ud14d\uc2a4\ucc98\ub9c1\uc744 \uc801\uc6a9\ud558\uae30 \uc804\uc5d0 \ub2e4\uc591\ud55c \uc0dd\uc131 \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub378\uc5d0 \uc801\uc6a9\ub41c \uce74\uba54\ub77c \uc0c1\ud0dc\ub098 \ud604\uc7ac DepthMap\uc758 \ud45c\ud604 \uc815\ub3c4\ub97c \ubbf8\ub9ac \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"checkpoint"},"Checkpoint"),(0,r.kt)("p",null,"AI \ud14d\uc2a4\ucc98\ub9c1\uc5d0 \uc0ac\uc6a9\ud560 \uccb4\ud06c\ud3ec\uc778\ud2b8\ub97c \uc120\ud0dd\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"address"},"Address"),(0,r.kt)("p",null,"\uc774 \uc8fc\uc18c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\uc5d0 \uc811\uc18d\ud558\uae30 \uc704\ud55c \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uae30\ubcf8 \uc124\uc815\uc740 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://127.0.0.1:7860/"},"http://127.0.0.1:7860/")),"\uc774\uba70, \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uc774 \uac12\uc744 \ubcc0\uacbd\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"prompt"},"Prompt"),(0,r.kt)("p",null,"\ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ub0b4\uc6a9"),"\uc744 \uc9c0\uc815\ud558\ub294 \ud14d\uc2a4\ud2b8 \uc785\ub825\ub780\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"negativeprompt"},"NegativePrompt"),(0,r.kt)("p",null,"\uc0dd\uc131\ub420 \ud14d\uc2a4\ucc98\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc81c\uc678\ud558\uac70\ub098 \uc218\uc815\ud558\uace0 \uc2f6\uc740 \uc694\uc18c"),"\ub97c \uc785\ub825\ud558\ub294 \ud14d\uc2a4\ud2b8 \uc785\ub825\ub780\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc774 \ubd80\ubd84\uc744 \uc9c1\uc811 \uc791\uc131\ud558\uae30\ubcf4\ub2e4\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ub124\uac70\ud2f0\ube0c \uc784\ubca0\ub529 Negative Embedding"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc785\ub825\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ub124\uac70\ud2f0\ube0c \uc784\ubca0\ub529")," \uc124\uc815\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc \ubb38\uc11c\uc785\ub2c8\ub2e4."),(0,r.kt)(l.Z,{items:[{type:"link",label:"\ub124\uac70\ud2f0\ube0c \uc784\ubca0\ub529",href:"/docs/usage-guide/negative-embedding"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"cfgscale"},"CFGScale"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CFG Scale(Classifier-Free Guidance Scale)"),"\uc740 \uc0dd\uc131\ub418\ub294 \uc774\ubbf8\uc9c0\uac00 \ud504\ub86c\ud504\ud2b8\ub97c \uc5bc\ub9c8\ub098 \uc815\ud655\ud558\uac8c \ub530\ub974\ub294\uc9c0 \uc870\uc808\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CFG Scale \uac12\uc774 \ub192\uc73c\uba74")," \ud504\ub86c\ud504\ud2b8\uc5d0 \ub354 \ucda9\uc2e4\ud55c \uc774\ubbf8\uc9c0\uac00 \uc0dd\uc131\ub418\uc9c0\ub9cc, \uc774\ubbf8\uc9c0 \ud004\ub9ac\ud2f0\ub294 \uc800\ud558\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc18\ub300\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"CFG Scale \uac12\uc774 \ub0ae\uc744 \uacbd\uc6b0"),", \ud504\ub86c\ud504\ud2b8\uc758 \uc9c0\uc2dc\ub97c \ub35c \ub530\ub974\ub418 \uc774\ubbf8\uc9c0 \ud004\ub9ac\ud2f0\ub294 \uc0c1\uc2b9\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucd94\ucc9c \uac12",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"cfgscale-1"},"CFGScale"),(0,r.kt)("p",{parentName:"admonition"},"\uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"p"},"7~9")," \uc0ac\uc774\uc758 \uac12\uc73c\ub85c \uc124\uc815\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"sampler"},"Sampler"),(0,r.kt)("p",null,"\ud14d\uc2a4\ucc98 \uc0dd\uc131\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud655\ub960\uc801 \ubc29\ubc95\uc744 \uacb0\uc815\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. \uac01 \uc0d8\ud50c\ub7ec\ub294 \ud14d\uc2a4\ucc98\uc758 \ub79c\ub364\ud55c \ubd80\ubd84\uc744 \ub2e4\ub974\uac8c \ucc98\ub9ac\ud558\uc5ec, \ucd5c\uc885 \uacb0\uacfc\uc5d0 \uc791\uc740 \ucc28\uc774\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac04\ub2e8\ud788 \ub9d0\ud558\uba74, ",(0,r.kt)("strong",{parentName:"p"},"Sampler"),"\ub294 \ud14d\uc2a4\ucc98 \uc0dd\uc131 \uacfc\uc815\uc5d0\uc11c \ub79c\ub364\uc131\uc744 \uc5b4\ub5bb\uac8c \ub2e4\ub8f0\uc9c0 \uacb0\uc815\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucd94\ucc9c Sampling Method",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"sampler-1"},"Sampler"),(0,r.kt)("p",{parentName:"admonition"},"\uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"p"},"Euler a, DPM++ SDE \uc640 DPM2 karras")," \ub97c \ucd94\ucc9c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"samplingstep"},"SamplingStep"),(0,r.kt)("p",null,"\ud14d\uc2a4\ucc98 \uc0dd\uc131 \uacfc\uc815\uc5d0\uc11c \uc0d8\ud50c\ub9c1\uc744 \uc5bc\ub9c8\ub098 \ub9ce\uc774 \ud560\uc9c0 \uacb0\uc815\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. \uc0d8\ud50c\ub9c1 \ub2e8\uacc4\uc758 \uc218\uac00 \ub192\uc744\uc218\ub85d, \ub354 \ub192\uc740 \ud004\ub9ac\ud2f0\uc758 \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \ud14d\uc2a4\ucc98 \uc0dd\uc131 \uc2dc\uac04\uc774 \uae38\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucd94\ucc9c \uac12",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"samplingstep-1"},"SamplingStep"),(0,r.kt)("p",{parentName:"admonition"},"\uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"20~25"),"\uc758 SamplingStep \uac12\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"restore-faces"},"Restore Faces"),(0,r.kt)("p",null,"\uc5bc\uad74\uc774\ub098 \ub208 \ubd80\ubd84\uc774 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \ud2b9\ud788 \uc0ac\uc2e4\uc801\uc778 \uc544\ud2b8 \uc2a4\ud0c0\uc77c\uc5d0\uc11c \uc5bc\uad74 \ud45c\ud604\uc774 \uc798\ubabb \ud45c\ud604\ub420 \ub54c \ud65c\uc131\ud654\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"imagemaxsize"},"ImageMaxSize"),(0,r.kt)("p",null,"\uc0dd\uc131\ub418\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\ucc98\uc758 \ud06c\uae30"),"\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"batchcount"},"BatchCount"),(0,r.kt)("p",null,"\ud55c\ubc88\uc758 \uc0dd\uc131 \uc9c4\ud589\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc5f0\ub2ec\uc544 \uc0dd\uc131\ud560 \uc774\ubbf8\uc9c0\uc758 \ucd1d \uac1c\uc218"),"\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"use-scenemap-img2img"},"Use SceneMap (Img2Img)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Layer as Inpaint Mask")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paint \ub808\uc774\uc5b4"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"\ube0c\ub7ec\uc2dc"),"\ub85c \uce60\ud55c \uc601\uc5ed\uc5d0\ub9cc AI \ud14d\uc2a4\ucc98\ub9c1\uc744 \uc801\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uc0c9\uc744 \uce60\ud560 \ub54c\ub294 \uc8fc\ub85c \ud45c\ud604\ud558\ub824\ub294 \uc0c9\uc0c1\uc774\ub098, \uc8fc\ubcc0 \uc0c9\uacfc \ube44\uc2b7\ud55c \uc0c9\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Denoising strength")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce60\ud574\uc9c4 \uc601\uc5ed\uc5d0 \ub300\ud55c \ub0b4\uc6a9 \ubcc0\ud654\ub97c \uc5bc\ub9c8\ub098 \ud5c8\uc6a9\ud560\uc9c0 \uacb0\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ubcc0\ud654\uac00 \uc5c6\uc73c\uba70, 1\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ub0b4\uc6a9\uc774 \ud06c\uac8c \ubcc0\ud654\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"use-depth-control-net"},"Use Depth Control Net"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ControlNet"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Depth \ubaa8\ub378"),"\uc744 \ud65c\uc131\ud654\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"Depth")," \ub370\uc774\ud130\ub294 \uc2dc\uc810\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uae4c\uc6b4 \uc9c0\uc810\uc744 \ud770\uc0c9"),"\uc73c\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"\uba3c \uc9c0\uc810\uc744 \uac80\uc740\uc0c9"),"\uc73c\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4.\n",(0,r.kt)("strong",{parentName:"p"},"UModeler X\uc758 AI \ud14d\uc2a4\ucc98\ub9c1"),"\uc740 \ud604\uc7ac ",(0,r.kt)("strong",{parentName:"p"},"\uc52c \ubdf0"),"\ub97c \uae30\uc900\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub378\uc758 \uae4a\uc774"),"\ub97c \uc774\ubbf8\uc9c0\ub85c \ubcc0\ud658\ud558\uc5ec Depth \ubaa8\ub378\uc5d0 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc124\uc815\uc744 \ud65c\uc6a9\ud558\uba74 \ubaa8\ub378\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc785\uccb4\uc801\uc778 \ud615\ud0dc\ub97c \uace0\ub824"),"\ud55c \ub354 \uc815\ud655\ud55c \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ControlnetModel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud560 Depth \ubaa8\ub378\uc744 \uc120\ud0dd\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \ubaa8\ub378\uc774\ub77c\ub3c4 \uc5ec\ub7ec \ubc84\uc804\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc6d0\ud558\ub294 \ubaa8\ub378\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Weight"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Depth \ubaa8\ub378\uc758 \uc601\ud5a5\ub825\uc744 \uc870\uc808\ud558\ub294 \uc2ac\ub77c\uc774\ub354\uc785\ub2c8\ub2e4. 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \uc801\uc740 \uc601\ud5a5\uc744 \ubc1b\uace0, \uac12\uc774 \ub192\uc744\uc218\ub85d \ub354 \ud070 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud504\ub86c\ud504\ud2b8"),"\uc640 ",(0,r.kt)("strong",{parentName:"li"},"ControlNet")," \uc0ac\uc774\uc758 ",(0,r.kt)("strong",{parentName:"li"},"\uc911\uc694\ub3c4\ub97c \uc124\uc815"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Balanced:")," \ud504\ub86c\ud504\ud2b8\uc640 ControlNet\uc774 \ub3d9\uc77c\ud55c \uc911\uc694\ub3c4\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"My prompt is more important:")," \ud504\ub86c\ud504\ud2b8\uac00 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ControlNet is more important:")," ControlNet\uc758 Depth \ubaa8\ub378\uc758 \uc601\ud5a5\uc774 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NearDistanceMargin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\uae4c\uc6b4 \uac70\ub9ac\uc758 \ub9c8\uc9c4\uc744 \uc124\uc815\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FarDistanceMargin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uba3c \uac70\ub9ac\uc758 \ub9c8\uc9c4\uc744 \uc124\uc815\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"extra-control-net1"},"Extra Control Net1"),(0,r.kt)("p",null,"\uae30\ubcf8 ControlNet \ubaa8\ub378 \uc678\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ucd94\uac00\uc801\uc73c\ub85c \ub2e4\ub978 ControlNet \ubaa8\ub378"),"\uc744 \uc0ac\uc6a9\ud558\uace0\uc790 \ud560 \ub54c \ud65c\uc131\ud654\ud558\ub294 \uc124\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub450 \uac1c \uc774\uc0c1\uc758 ControlNet \ubaa8\ub378\uc744 \ubcd1\ub82c \ub610\ub294 \uc5f0\uc1c4\uc801\uc73c\ub85c \uc801\uc6a9\ud558\uc5ec, ",(0,r.kt)("strong",{parentName:"p"},"\uac01 \ubaa8\ub378\uc758 \uc7a5\uc810\uc744 \uacb0\ud569\ud55c AI \ud14d\uc2a4\ucc98\ub9c1 \uacb0\uacfc"),"\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"hiresfix"},"Hires.fix"),(0,r.kt)("p",null,"\uc124\uc815\ub41c \ud06c\uae30\ubcf4\ub2e4 ",(0,r.kt)("strong",{parentName:"p"},"\ud070 \ud14d\uc2a4\ucc98\ub97c \ube60\ub974\uac8c \uc0dd\uc131"),"\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("strong",{parentName:"p"},"\uc5c5\uc2a4\ucf00\uc77c\ub9c1"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \ube44\uad50\uc801 \uc9e7\uc740 \uc2dc\uac04 \uc548\uc5d0 \ud070 \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc0dd\uc131\ud558\ub294 \uc2dc\uac04\uc774 \ub108\ubb34 \uc624\ub798 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Upscaler"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ucc98\ub97c \uc5c5\uc2a4\ucf00\uc77c\ub9c1\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \uc5c5\uc2a4\ucf00\uc77c\ub9c1 \ubc29\ubc95\uc744 \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"li"},"Latent, ScuNET GAN, R-ESRGAN_4x, R-ESRGAN_4x+Animated 6B")," \ub97c \ucd94\ucc9c\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Upscale by"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815\ub41c \ud14d\uc2a4\ucc98 \ud06c\uae30\uc5d0 \uacf1\ud560 \ubc30\uc728\uc744 \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Denoising Strength"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5c5\uc2a4\ucf00\uc77c\ub9c1 \uacfc\uc815\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ud14d\uc2a4\ucc98\uc758 \ub0b4\uc6a9 \ubcc0\ud654\ub97c \uc5bc\ub9c8\ub098 \ud5c8\uc6a9\ud560\uc9c0 \uacb0\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ubcc0\ud654\uac00 \uc5c6\uc73c\uba70, 1\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud14d\uc2a4\ucc98\uc758 \ub0b4\uc6a9\uc774 \ud06c\uac8c \ubcc0\ud654\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hires steps"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ucc98 \uc5c5\uc2a4\ucf00\uc77c\ub9c1\uc744 \uba87 \ubc88 \ubc18\ubcf5\ud560\uc9c0 \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uac12\uc774 \ub192\uc744\uc218\ub85d \ud004\ub9ac\ud2f0\ub294 \ud5a5\uc0c1\ub418\uc9c0\ub9cc, \uc0dd\uc131 \uc2dc\uac04\uc774 \uae38\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"seed"},"Seed"),(0,r.kt)("p",null,"\ud14d\uc2a4\ucc98 \uc0dd\uc131\uc5d0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uace0\uc720 \ubc88\ud638"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub3d9\uc77c\ud55c \ud504\ub86c\ud504\ud2b8, \uc124\uc815, \uadf8\ub9ac\uace0 Seed \uac12\uc744 \uc0ac\uc6a9\ud558\uba74 \ud56d\uc0c1 \uac19\uc740 \uc774\ubbf8\uc9c0\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\uae30\ubcf8\uac12\uc740 -1"),"\ub85c, \uc774 \uacbd\uc6b0 \ub9e4\ubc88 \ub79c\ub364\ud55c \uc774\ubbf8\uc9c0\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shuffle"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seed \uac12\uc744 \ub79c\ub364"),"\uc73c\ub85c \uc124\uc815\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uba74 Seed \uac12\uc774 ",(0,r.kt)("strong",{parentName:"li"},"-1"),"\ub85c \uc790\ub3d9 \uc124\uc815\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Seed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uc0dd\uc131\ud55c \ud14d\uc2a4\ucc98\uc758 Seed \uac12\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"generate-forever"},"Generate Forever"),(0,r.kt)("p",null,"\uccb4\ud06c\ud558\uc5ec \ud65c\uc131\ud654 \ud560 \uacbd\uc6b0, \uccb4\ud06c\ub97c \ud480\uae30 \uc804\uae4c\uc9c0 \uacc4\uc18d \ud14d\uc2a4\ucc98 \uc0dd\uc131\uc744 \uc9c4\ud589\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"generate"},"Generate"),(0,r.kt)("p",null,"\ud14d\uc2a4\ucc98 \uc0dd\uc131\uc744 \uc9c4\ud589\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"generaterect"},"Generate(Rect)"),(0,r.kt)("p",null,"\uc52c\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub85c \uc0dd\uc131\ud55c \uc0ac\uac01 \uc601\uc5ed\uc5d0 \ub300\ud574 \ud14d\uc2a4\ucc98 \uc0dd\uc131\uc744 \uc9c4\ud589\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"custom-cameras"},"Custom Cameras"),(0,r.kt)("p",null,"\ubbf8\ub9ac \ubc30\uce58\ub41c \uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c \ud14d\uc2a4\ucc98 \uc0dd\uc131\uc744 \ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uc18d\uc131 \uc606 \uc2ac\ub86f\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec \uc6d0\ud558\ub294 \uce74\uba54\ub77c\ub97c \uc120\ud0dd\ud558\uba74 \ud574\ub2f9 \uce74\uba54\ub77c\uac00 \uae30\uc900\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R")," : \uc124\uc815\ub41c \ubaa8\ub4e0 \uce74\uba54\ub77c\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\ucd08\uae30\ud654"),"\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"+")," : \uce74\uba54\ub77c \uc2ac\ub86f\uc744 ",(0,r.kt)("strong",{parentName:"li"},"\ucd94\uac00"),"\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-")," : \uce74\uba54\ub77c \uc2ac\ub86f\uc744 ",(0,r.kt)("strong",{parentName:"li"},"\uc0ad\uc81c"),"\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \uac00\uc7a5 \uc544\ub798 \uce74\uba54\ub77c\ubd80\ud130 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate (Custom Camera)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815\ub41c \uce74\uba54\ub77c\uc758 \uc218\uc5d0 \ub530\ub77c \uc5f0\uc18d\uc801\uc73c\ub85c \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, \ub450 \uac1c\uc758 \uce74\uba54\ub77c\uac00 \uc124\uc815\ub418\uc5b4 \uc788\ub2e4\uba74 \ub450 \ubc88 \uc5f0\uc18d\uc73c\ub85c \ud14d\uc2a4\ucc98\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate (All in One)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate (Custom Camera) \ubc84\ud2bc"),"\uacfc \ub2ec\ub9ac, \uc124\uc815\ub41c \ubaa8\ub4e0 \uce74\uba54\ub77c\uc758 \ubc29\ud5a5\uc744 \uace0\ub824\ud558\uc5ec \ud55c \ubc88\uc5d0 \ud558\ub098\uc758 \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \uce74\uba54\ub77c\uac00 \ubaa8\ub378\uc758 \uc774\ubbf8\uc9c0 \uc601\uc5ed\uc774 \uacb9\uce58\ub3c4\ub85d \ubc30\uce58\ub418\uc5b4 \uc788\ub2e4\uba74, \uc0dd\uc131\ub41c \ud14d\uc2a4\ucc98\ub3c4 \uacb9\uce60 \uc218 \uc788\uc73c\ubbc0\ub85c \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("p",null,"\uc0dd\uc131\ub41c \ud14d\uc2a4\ucc98\uc640 \uadf8\uc640 \uad00\ub828\ub41c \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \ud55c\ub208\uc5d0 \ubcfc \uc218 \uc788\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rescan"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac \ud65c\uc131\ud654\ub41c \ubaa8\ub378\ub85c \uc0dd\uc131\ub41c \ubaa8\ub4e0 \ud14d\uc2a4\ucc98\ub97c \ubd88\ub7ec\uc624\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rescan All"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c \uc0dd\uc131\ub41c \ubaa8\ub4e0 \ud14d\uc2a4\ucc98\ub97c \uc77c\uad04 \ubd88\ub7ec\uc624\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apply Texture"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc120\ud0dd\ud55c \ud14d\uc2a4\ucc98\ub97c \ubaa8\ub378\uc5d0 \uc801\uc6a9\ud558\uace0 \ud654\uba74\uc5d0 \ud45c\uc2dc\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Restore Saved Camera Transform"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc120\ud0dd\ud55c \uacb0\uacfc \ud14d\uc2a4\ucc98\uac00 \uc0dd\uc131\ub410\uc744 \ub54c\uc758 \uce74\uba54\ub77c \ubdf0\ub85c \uc52c\uc744 \uc774\ub3d9\ud558\uace0 \ud68c\uc804\uc2dc\ud0a4\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"prompthistory"},"PromptHistory"),(0,r.kt)("p",null,"\uc0ac\uc6a9\ub41c \ud504\ub86c\ud504\ud2b8\uc758 \uae30\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ud504\ub86c\ud504\ud2b8 \ud788\uc2a4\ud1a0\ub9ac \uc606\uc5d0 \uc788\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Apply \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"Prompt"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"NegativePrompt"),"\uc758 \ub0b4\uc6a9\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);