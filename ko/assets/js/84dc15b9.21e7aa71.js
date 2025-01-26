"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},36338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={slug:"/usage-guide/webui-user-bat-cli-parameters",sidebar_position:2},o="webui-user.bat/webui-user.sh \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218",p={unversionedId:"ai-texturing/usage-guide/webui-user-bat-cli-parameters",id:"ai-texturing/usage-guide/webui-user-bat-cli-parameters",title:"webui-user.bat/webui-user.sh \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218",description:"webui-user.bat \ud30c\uc77c\uc5d0 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218\ub97c \ucd94\uac00\ud558\uc5ec Stable Diffusion web UI\uc5d0 \ub300\ud55c \uba87\uac00\uc9c0 \uc124\uc815\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ai-texturing/usage-guide/webui-user-bat-cli-parameters.md",sourceDirName:"ai-texturing/usage-guide",slug:"/usage-guide/webui-user-bat-cli-parameters",permalink:"/ko/docs/usage-guide/webui-user-bat-cli-parameters",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/usage-guide/webui-user-bat-cli-parameters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/usage-guide/webui-user-bat-cli-parameters",sidebar_position:2},sidebar:"docs",previous:{title:"AI \ud14d\uc2a4\ucc98\ub9c1 \uc18d\uc131",permalink:"/ko/docs/usage-guide/ai-texturing-properties"},next:{title:"Checkpoint, LoRA, VAE \uc801\uc6a9",permalink:"/ko/docs/usage-guide/checkpoint-lora-vae"}},s={},l=[{value:"<strong>\ubc30\uce58\ud30c\uc77c \ud3b8\uc9d1</strong>",id:"\ubc30\uce58\ud30c\uc77c-\ud3b8\uc9d1",level:2},{value:"<strong>VRAM \uad00\ub828 \ub9e4\uac1c \ubcc0\uc218</strong>",id:"vram-\uad00\ub828-\ub9e4\uac1c-\ubcc0\uc218",level:2},{value:"VRAM\uc5d0 \ub530\ub978 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218 \ucd94\ucc9c",id:"vram\uc5d0-\ub530\ub978-\uba85\ub839\uc904-\ub9e4\uac1c-\ubcc0\uc218-\ucd94\ucc9c",level:3}],u={toc:l};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webui-userbatwebui-usersh-\uba85\ub839\uc904-\ub9e4\uac1c-\ubcc0\uc218"},"webui-user.bat/webui-user.sh \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webui-user.bat \ud30c\uc77c"),"\uc5d0 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218\ub97c \ucd94\uac00\ud558\uc5ec Stable Diffusion web UI\uc5d0 \ub300\ud55c \uba87\uac00\uc9c0 \uc124\uc815\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ubc30\uce58\ud30c\uc77c-\ud3b8\uc9d1"},(0,n.kt)("strong",{parentName:"h2"},"\ubc30\uce58\ud30c\uc77c \ud3b8\uc9d1")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webui-user.bat \ud30c\uc77c"),"\uc758 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218 \ucd94\uac00\ub97c \uc704\ud574 \uc544\ub798 \ub2e8\uacc4\ub97c \ub530\ub77c \ud3b8\uc9d1\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"macos-\uc0ac\uc6a9\uc790\ub97c-\uc704\ud55c-\ud301"},"MacOS \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ud301"),(0,n.kt)("p",{parentName:"admonition"},"MacOS \uc0ac\uc6a9\uc790\ub294 webui-user.bat \ub300\uc2e0 ",(0,n.kt)("strong",{parentName:"p"},"webui-user.sh")," \uc140 \ud30c\uc77c\uc5d0\uc11c \uc544\ub798\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"webui-user.bat"),"\xa0\ud30c\uc77c\uc744\xa0",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"\uc6b0\ud074\ub9ad")),"\ud558\uc5ec '\ud3b8\uc9d1'\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Alt text",src:r(95305).Z,width:"1044",height:"461"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"set COMMANDLINE_ARGS="),"\xa0\ub77c\uc778\uc744 \ucc3e\uc544 \uc606\uc5d0\xa0\uc6d0\ud558\ub294 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc608\uc2dc"),": ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--api"))," \ub9e4\uac1c \ubcc0\uc218\ub97c \ucd94\uac00\ud55c \uacbd\uc6b0"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/stable-diffusion-webui/webui-user.bat" {6}',title:'"/stable-diffusion-webui/webui-user.bat"',"{6}":!0},"@echo off\n\nset PYTHON=\nset GIT=\nset VENV_DIR=\nset COMMANDLINE_ARGS=--api\n\ncall webui.bat\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ucd94\uac00 \ub9e4\uac1c \ubcc0\uc218 \uc785\ub825")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ub354 \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218\uac00 \uc788\ub2e4\uba74, \uac19\uc740 \ub77c\uc778\uc5d0 \uc774\uc5b4\uc11c \uc791\uc131\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc608\uc2dc"),": ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--api")),"\uc640 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--xformers"))," \ub9e4\uac1c \ubcc0\uc218\ub97c \ud568\uaed8 \ucd94\uac00\ud55c \uacbd\uc6b0"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/stable-diffusion-webui/webui-user.bat" {6}',title:'"/stable-diffusion-webui/webui-user.bat"',"{6}":!0},"@echo off\n\nset PYTHON=\nset GIT=\nset VENV_DIR=\nset COMMANDLINE_ARGS=--api --xformers\n\ncall webui.bat\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud3b8\uc9d1\uc774 \uc644\ub8cc\ub418\uba74 \ud30c\uc77c\uc744 \uc800\uc7a5\ud558\uace0 \ucc3d\uc744 \ub2eb\uc2b5\ub2c8\ub2e4."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--api")),": ",(0,n.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\uc640 ",(0,n.kt)("strong",{parentName:"p"},"UModeler X"),"\uac04\uc758 ",(0,n.kt)("strong",{parentName:"p"},"\uc5f0\ub3d9"),"\uc744 \uc704\ud574 \uaf2d \ucd94\uac00 \ub418\uc5b4\uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"\uc6f9\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c-\uc811\uc18d-\ud14c\uc2a4\ud2b8"},"\uc6f9\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc811\uc18d \ud14c\uc2a4\ud2b8"),(0,n.kt)("p",{parentName:"admonition"},"\uc790\uc2e0\uc758 \ucef4\ud4e8\ud130\uc5d0 Stable Diffusion\uacfc WebUI\uc744 \uc124\uce58\ud55c \uacbd\uc6b0 ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:7860/sdapi/v1/samplers"},"http://127.0.0.1:7860/sdapi/v1/samplers")," \uc5d0 \uc6f9\ube0c\ub77c\uc6b0\uc800\ub85c \uc811\uc18d\uc744 \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694. \uc2e4\ud589\uc2dc --api \uc635\uc158\uc774 \uc81c\ub300\ub85c \ub418\uc5b4\uc788\uc73c\uba74 \uc0d8\ud50c\ub7ec \ub9ac\uc2a4\ud2b8\uac00 \ub728\uace0 \uc635\uc158 \uc124\uc815\uc774 \uc798\ubabb\ub418\uc5c8\ub2e4\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},'{"detail":"Not Found"}')," \uac00 \ub739\ub2c8\ub2e4."),(0,n.kt)("p",{parentName:"admonition"},"\uc0d8\ud50c\ub7ec \ub9ac\uc2a4\ud2b8\uac00 \ub728\ub294\ub370\ub3c4 UModeler X\uc5d0\uc11c \uc811\uc18d\uc774 \uc548\ub41c\ub2e4\uba74 UModeler X \uc790\uccb4\uc758 \uc5d0\ub7ec\uc774\uace0 \uc774 \uacbd\uc6b0 ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/FJDUYpjRPu"},"Discord"),"\ub098 ",(0,n.kt)("a",{parentName:"p",href:"mailto:contact.support@umodeler.com"},"\uc774\uba54\uc77c"),"\ub85c \uc54c\ub824\uc8fc\uc138\uc694. \uadf8\ub807\uc9c0 \uc54a\uace0 Not Found\uac00 \ub72c\ub2e4\uba74 --api \uc635\uc158\uc744 \ucd94\uac00\ud588\ub294\uc9c0 webui-user.bat\ub098 webui-user.sh \ud30c\uc77c\uc5d0\uc11c \ud655\uc778\ud574\uc8fc\uc138\uc694.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"vram-\uad00\ub828-\ub9e4\uac1c-\ubcc0\uc218"},(0,n.kt)("strong",{parentName:"h2"},"VRAM \uad00\ub828 \ub9e4\uac1c \ubcc0\uc218")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--medvram")),": \uc911\uac04 \uc218\uc900\uc758 VRAM\uc744 \uac00\uc9c4 \uc2dc\uc2a4\ud15c\uc5d0 \ucd5c\uc801\ud654\ub41c \uc124\uc815 \ud65c\uc131\ud654"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--lowvram")),": \ub0ae\uc740 \uc218\uc900\uc758 VRAM\uc744 \uac00\uc9c4 \uc2dc\uc2a4\ud15c\uc5d0 \ucd5c\uc801\ud654\ub41c \uc124\uc815 \ud65c\uc131\ud654"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"--xformers")),": ",(0,n.kt)("strong",{parentName:"p"},"xformers \ub77c\uc774\ube0c\ub7ec\ub9ac")," \uc0ac\uc6a9\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,n.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,n.kt)("h2",{parentName:"admonition",id:"xformers"},"xFormers"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"xFormers"),"\ub294 ",(0,n.kt)("strong",{parentName:"p"},"Transformer \ub77c\uc774\ube0c\ub7ec\ub9ac"),"\ub85c, \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucd5c\uc801\ud654 \uae30\ub2a5\uc744 \ud1b5\ud574 \ube60\ub974\uac8c \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560  \uc218 \uc788\uace0, VRAM \uc0ac\uc6a9\ub7c9\ub3c4 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"vram\uc5d0-\ub530\ub978-\uba85\ub839\uc904-\ub9e4\uac1c-\ubcc0\uc218-\ucd94\ucc9c"},"VRAM\uc5d0 \ub530\ub978 \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218 \ucd94\ucc9c"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"4GB"),"\uc758 VRAM\uc744 \uac00\uc9c4 \uadf8\ub798\ud53d \uce74\ub4dc: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"--lowvram --xformers"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"8GB"),"\uc758 VRAM\uc744 \uac00\uc9c4 \uadf8\ub798\ud53d \uce74\ub4dc: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"--medvram --xformers"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"12GB \uc774\uc0c1"),"\uc758 VRAM\uc744 \uac00\uc9c4 \uadf8\ub798\ud53d \uce74\ub4dc: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"--xformers")))))}m.isMDXComponent=!0},95305:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/webui-user-bat-f331dc8e11df2fdb2aa1dc69d7353d92.png"}}]);