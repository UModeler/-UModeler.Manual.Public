"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[13],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},g=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,g=l(t,["components","mdxType","originalType","parentName"]),k=p(a),u=r,m=k["".concat(s,".").concat(u)]||k[u]||c[u]||i;return a?n.createElement(m,o(o({ref:e},g),{},{components:a})):n.createElement(m,o({ref:e},g))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[k]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76208:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/usage-guide/checkpoint-lora-vae",sidebar_position:3},o="Checkpoint, LoRA, VAE \uc801\uc6a9",l={unversionedId:"ai-texturing/usage-guide/checkpoint-lora-vae",id:"ai-texturing/usage-guide/checkpoint-lora-vae",title:"Checkpoint, LoRA, VAE \uc801\uc6a9",description:"Checkpoint, LoRA, VAE\ub97c \uc801\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \uad00\ub828 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4. Stable Diffusion web UI\ub9cc\uc73c\ub85c\ub3c4 \ud14d\uc2a4\ucc98 \uc0dd\uc131\uc740 \uac00\ub2a5\ud558\uc9c0\ub9cc, \ucd5c\uc801\uc758 \ud004\ub9ac\ud2f0\ub97c \uc704\ud574\uc11c\ub294 \uc774\ub7ec\ud55c \ubaa8\ub378\ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \uc801\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ai-texturing/usage-guide/checkpoint-lora-vae.md",sourceDirName:"ai-texturing/usage-guide",slug:"/usage-guide/checkpoint-lora-vae",permalink:"/ko/docs/usage-guide/checkpoint-lora-vae",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/usage-guide/checkpoint-lora-vae",sidebar_position:3},sidebar:"docs",previous:{title:"webui-user.bat/webui-user.sh \uba85\ub839\uc904 \ub9e4\uac1c \ubcc0\uc218",permalink:"/ko/docs/usage-guide/webui-user-bat-cli-parameters"},next:{title:"\ub124\uac70\ud2f0\ube0c \uc784\ubca0\ub529",permalink:"/ko/docs/usage-guide/negative-embedding"}},s={},p=[{value:"<strong>\ubaa8\ub378 \ub2e4\uc6b4\ub85c\ub4dc</strong>",id:"\ubaa8\ub378-\ub2e4\uc6b4\ub85c\ub4dc",level:2},{value:"Civitai",id:"civitai",level:3},{value:"Hugging Face",id:"hugging-face",level:3},{value:"Github",id:"github",level:3},{value:"<strong>\ubaa8\ub378 \uc801\uc6a9</strong>",id:"\ubaa8\ub378-\uc801\uc6a9",level:2},{value:"Checkpoint \uc801\uc6a9",id:"checkpoint-\uc801\uc6a9",level:3},{value:"LoRA \uc801\uc6a9",id:"lora-\uc801\uc6a9",level:3},{value:"VAE \uc801\uc6a9",id:"vae-\uc801\uc6a9",level:3},{value:"<strong>.ckpt\uc640 .safetensors</strong>",id:"ckpt\uc640-safetensors",level:2},{value:".ckpt \ud615\uc2dd",id:"ckpt-\ud615\uc2dd",level:3},{value:".safetensors \ud615\uc2dd",id:"safetensors-\ud615\uc2dd",level:3}],g={toc:p};function k(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"checkpoint-lora-vae-\uc801\uc6a9"},"Checkpoint, LoRA, VAE \uc801\uc6a9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Checkpoint, LoRA, VAE"),"\ub97c \uc801\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \uad00\ub828 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\ub9cc\uc73c\ub85c\ub3c4 \ud14d\uc2a4\ucc98 \uc0dd\uc131\uc740 \uac00\ub2a5\ud558\uc9c0\ub9cc, \ucd5c\uc801\uc758 \ud004\ub9ac\ud2f0\ub97c \uc704\ud574\uc11c\ub294 \uc774\ub7ec\ud55c \ubaa8\ub378\ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \uc801\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \uac00\uc774\ub4dc\uc5d0\uc11c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc"),"\ud558\uace0 ",(0,r.kt)("strong",{parentName:"p"},"\uc801\uc6a9"),"\ud558\ub294 \ubc29\ubc95\uc744 \uc790\uc138\ud788 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ubaa8\ub378-\ub2e4\uc6b4\ub85c\ub4dc"},(0,r.kt)("strong",{parentName:"h2"},"\ubaa8\ub378 \ub2e4\uc6b4\ub85c\ub4dc")),(0,r.kt)("h3",{id:"civitai"},"Civitai"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Civitai"),"\uc740 Stable Diffusion ",(0,r.kt)("strong",{parentName:"p"},"AI \ubaa8\ub378 \uacf5\uc720 \ud50c\ub7ab\ud3fc"),"\uc785\ub2c8\ub2e4. \uc5ec\ub7ec \ubaa8\ub378\uc744 \uac80\uc0c9\ud558\uace0 \ub9ac\ubdf0\ub97c \ubcf4\uac70\ub098 \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://civitai.com/"},"Civitai")," ")),(0,r.kt)("h3",{id:"hugging-face"},"Hugging Face"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/"},"Hugging Face"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/stabilityai"},"Stability AI\uc758 Hugging Face")))),(0,r.kt)("h3",{id:"github"},"Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Stability-AI"},"Stability AI\uc758 Github"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ubaa8\ub378-\uc801\uc6a9"},(0,r.kt)("strong",{parentName:"h2"},"\ubaa8\ub378 \uc801\uc6a9")),(0,r.kt)("h3",{id:"checkpoint-\uc801\uc6a9"},"Checkpoint \uc801\uc6a9"),(0,r.kt)("p",null,"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("strong",{parentName:"p"},"Checkpoint \ud30c\uc77c"),"\uc744 Stable Diffusion web UI\uc640 UModeler X\uc758 AI \ud14d\uc2a4\ucc98\ub9c1\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74, \ud30c\uc77c\uc744 \ud2b9\uc815 \uacbd\ub85c\uc5d0 \ub123\uace0 \uc801\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("strong",{parentName:"li"},"Checkpoint \ud30c\uc77c"),"\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"stable-diffusion-webui/models/Stable-diffusion")," \ud3f4\ub354\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(68752).Z,width:"1369",height:"420"})),(0,r.kt)("li",{parentName:"ol"},"Stable Diffusion web UI\uc5d0\uc11c \uc88c\uce21 \uc0c1\ub2e8\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"Stable Diffusion checkpoint \uc601\uc5ed")," \uc606 \ubc84\ud2bc\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec \ubaa9\ub85d\uc744 ",(0,r.kt)("strong",{parentName:"li"},"\uc0c8\ub85c\uace0\uce68"),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(61638).Z,width:"1275",height:"449"})),(0,r.kt)("li",{parentName:"ol"},"\uc0c8\ub85c\uace0\uce68 \ud6c4, \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0c8\ub85c \ucd94\uac00\ud55c ",(0,r.kt)("strong",{parentName:"li"},"Checkpoint"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(5775).Z,width:"1281",height:"445"}))),(0,r.kt)("h3",{id:"lora-\uc801\uc6a9"},"LoRA \uc801\uc6a9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LoRa \ud30c\uc77c")," \uc5ed\uc2dc \ud2b9\uc815 \uacbd\ub85c\uc5d0 \ub123\uace0 \uc801\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("strong",{parentName:"li"},"LoRa \ud30c\uc77c"),"\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"stable-diffusion-webui/models/Lora"),"\ud3f4\ub354\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(82580).Z,width:"1260",height:"400"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stable Diffusion web UI"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Generate \ubc84\ud2bc")," \uc544\ub798\uc5d0 \uc788\ub294 \ubc84\ud2bc\ub4e4\uc911 ",(0,r.kt)("strong",{parentName:"li"},"Show/Hide extra networks \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(14869).Z,width:"1233",height:"441"})),(0,r.kt)("li",{parentName:"ol"},"\uc544\ub798\uc5d0 \ud45c\uc2dc\ub41c \uc601\uc5ed\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Lora \ud0ed"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(90674).Z,width:"1990",height:"668"})),(0,r.kt)("li",{parentName:"ol"},"\uc6b0\uce21\uc5d0 \uc788\ub294 ",(0,r.kt)("strong",{parentName:"li"},"Refresh \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uba74 \uacbd\ub85c\uc5d0 \ub123\uc5c8\ub358 LoRA\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(48290).Z,width:"2088",height:"1178"})),(0,r.kt)("li",{parentName:"ol"},"\ud574\ub2f9 LoRA\ub97c ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uba74 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825\uc774\ub418\uba70 \uc801\uc6a9\uc774 \uc644\ub8cc\ub429\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(87265).Z,width:"2196",height:"1480"}))),(0,r.kt)("h3",{id:"vae-\uc801\uc6a9"},"VAE \uc801\uc6a9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VAE \ud30c\uc77c"),"\ub3c4 \ud2b9\uc815 \uacbd\ub85c\uc5d0 \ub123\uace0 \uc801\uc6a9\ud558\uba74 \ub418\uc9c0\ub9cc, \uc801\uc6a9\ubc29\ubc95\uc774 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("strong",{parentName:"li"},"VAE \ud30c\uc77c"),"\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"stable-diffusion-webui/models/VAE"),"\ud3f4\ub354\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(50353).Z,width:"1289",height:"406"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stable Diffusion web UI"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Settings \ud0ed"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(14581).Z,width:"1668",height:"621"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stable Diffusion"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad"))," \ud6c4, ",(0,r.kt)("strong",{parentName:"li"},"SD VAE"),"\uc5d0 \uc788\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\uc0c8\ub85c\uace0\uce68 \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(83382).Z,width:"2091",height:"700"})),(0,r.kt)("li",{parentName:"ol"},"\uc0c8\ub85c\uace0\uce68 \ud6c4, \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0c8\ub85c \ucd94\uac00\ud55c VAE\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(73333).Z,width:"1814",height:"413"})),(0,r.kt)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 VAE\ub97c \uc120\ud0dd \ud6c4, ",(0,r.kt)("strong",{parentName:"li"},"Apply settings \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec \uc801\uc6a9\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Alt text",src:a(71371).Z,width:"2063",height:"340"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ckpt\uc640-safetensors"},(0,r.kt)("strong",{parentName:"h2"},".ckpt\uc640 .safetensors")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stable Diffusion"),"\uc5d0 \uad00\ub828\ub41c \ubaa8\ub378\uc740 ",(0,r.kt)("strong",{parentName:"p"},".ckpt"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},".safetensors")," \uc640 \uac19\uc740 \ud615\ud0dc\ub85c \ubc30\ud3ec \ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac01 \ud615\uc2dd\uc758 \ucc28\uc774\uc810\uacfc \ubb38\uc81c\uc810\uc744 \uace0\ub824\ud558\uba74, \uac00\ub2a5\ud55c \uacbd\uc6b0 ",(0,r.kt)("strong",{parentName:"p"},".safetensors \ud615\uc2dd"),"\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c\ub294 \uc774 \ub450 \ud615\uc2dd\uc758 \ucc28\uc774\uc810\uacfc ",(0,r.kt)("strong",{parentName:"p"},".ckpt \ud615\uc2dd"),"\uc774 \uac00\uc9c4 ",(0,r.kt)("strong",{parentName:"p"},"\uc7a0\uc7ac\uc801 \ubb38\uc81c"),"\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"ckpt-\ud615\uc2dd"},".ckpt \ud615\uc2dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".ckpt \ud615\uc2dd"),"\uc740 \ub525\ub7ec\ub2dd \ubaa8\ub378\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc911\uac04 \ud559\uc2b5 \uc0c1\ud0dc\ub97c \uc800\uc7a5"),"(\uc774\uac83\uc774 ",(0,r.kt)("strong",{parentName:"p"},"Checkpoint \uccb4\ud06c\ud3ec\uc778\ud2b8"),"\ub77c\uace0 \ubd88\ub9ac\ub294 \uc774\uc720\uc785\ub2c8\ub2e4.)\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 \ub098\uc911\uc5d0 \ubaa8\ub378\uc744 \ub2e4\uc2dc \uc2e4\ud5d8\ud558\uac70\ub098 \ud29c\ub2dd\ud558\uae30\uac00 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,r.kt)("strong",{parentName:"p"},".ckpt \ud615\uc2dd"),"\uc740 \ud30c\uc774\uc36c\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ud53c\ud074 pickle \ubaa8\ub4c8"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ubbc0\ub85c \ubcf4\uc548 \ubb38\uc81c\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"pickle-\ubaa8\ub4c8"},"pickle \ubaa8\ub4c8"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"pickle \ubaa8\ub4c8"),'\uc740 \ud30c\uc774\uc36c\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubc14\uc774\ub108\ub9ac \ud615\uc2dd\uc73c\ub85c \ud30c\uc77c\uc5d0 \uc800\uc7a5("\uc9c1\ub82c\ud654")\ud558\uace0 \ub2e4\uc2dc \ubd88\ub7ec\uc624\ub294("\uc5ed \uc9c1\ub82c\ud654") \uacfc\uc815\uc744 \ub3c4\uc640\uc90d\ub2c8\ub2e4.'),(0,r.kt)("p",{parentName:"admonition"},"\ub9c8\uce58 \uc74c\uc2dd\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\ud1b5\uc870\ub9bc"),"\uc5d0 \ubcf4\uad00\ud558\uace0 ",(0,r.kt)("strong",{parentName:"p"},"\ub098\uc911\uc5d0 \uaebc\ub0b4 \uba39\ub294 \uac83"),"\uacfc \ube44\uc2b7\ud558\uba70, \ud504\ub85c\uadf8\ub7a8\uc744 \uc885\ub8cc\ud574\ub3c4 \uc911\uc694\ud55c \ub370\uc774\ud130\ub97c \uc783\uc9c0 \uc54a\uac8c \ud574\uc90d\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,r.kt)("strong",{parentName:"p"},"\uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub294 \uc18c\uc2a4"),"\uc5d0\uc11c \ubc1b\uc740 \ub370\uc774\ud130\ub97c \uc5ed\uc9c1\ub82c\ud654\ud560 \ub54c\ub294 \ubcf4\uc548 \ubb38\uc81c\ub85c \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc545\uc758\uc801\uc73c\ub85c \uc791\uc131\ub41c .ckpt \ud30c\uc77c"),"\uc744 \uc0ac\uc6a9\ud558\uba74, ",(0,r.kt)("strong",{parentName:"p"},"\ud30c\uc77c\uc744 \uc5f4 \ub54c(\uc5b8 \ud53c\ud074)")," \uc784\uc758\uc758 \ucf54\ub4dc\uac00 \uc2e4\ud589\ub420 \uc218 \uc788\uc5b4 PC\uac00 \uacf5\uaca9\ubc1b\uc744 \uc704\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\ub294 ",(0,r.kt)("strong",{parentName:"p"},"pickle \ubaa8\ub4c8"),"\uc5d0 \ub300\ud55c ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/ko/3/library/pickle.html"},(0,r.kt)("strong",{parentName:"a"},"\uacf5\uc2dd\ubb38\uc11c")),"\ub0b4 \uacbd\uace0 \uc911 \uc77c\ubd80\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uacbd\uace0",type:"caution"},(0,r.kt)("h2",{parentName:"admonition",id:"pickle\ubaa8\ub4c8\uc740\uc548\uc804\ud558\uc9c0-\uc54a\uc2b5\ub2c8\ub2e4"},(0,r.kt)("inlineCode",{parentName:"h2"},"pickle"),"\xa0\ubaa8\ub4c8\uc740\xa0\uc548\uc804\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"pickle"),"\xa0\ubaa8\ub4c8\uc740\xa0",(0,r.kt)("strong",{parentName:"p"},"\uc548\uc804\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),". \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub9cc \uc5b8 \ud53c\ud074 \ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc5b8 \ud53c\ud074 \uc2dc \uc784\uc758\uc758 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294"),"\xa0\uc545\uc758\uc801\uc778 \ud53c\ud074 \ub370\uc774\ud130\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub294 \ucd9c\ucc98\uc5d0\uc11c \uc654\uac70\ub098 \ubcc0\uc870\ub418\uc5c8\uc744 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc808\ub300\ub85c \uc5b8 \ud53c\ud074 \ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624.")),(0,r.kt)("h3",{id:"safetensors-\ud615\uc2dd"},".safetensors \ud615\uc2dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".safetensors \ud615\uc2dd"),"\uc740 \uae30\uc874 .ckpt \ud30c\uc77c\uc758 \ubcf4\uc548 \ucde8\uc57d\uc810\uc744 \ud574\uacb0\ud558\uba74\uc11c\ub3c4 \ub354 \ube60\ub978 \ubaa8\ub378 \ub85c\ub529\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \uc0c8\ub85c\uc6b4 \ud30c\uc77c \ud615\uc2dd\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".safetensors \ud615\uc2dd"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud558\uba70 \ud604\uc7ac ",(0,r.kt)("strong",{parentName:"p"},"\ub300\ubd80\ubd84\uc758 \ucd5c\uc2e0 \ubaa8\ub378\uc740 \uc774 \ud615\uc2dd\uc73c\ub85c \ubc30\ud3ec"),"\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null))}k.isMDXComponent=!0},68752:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_checkpoint_1-7cd6b14610e4b5b270fac88678e52be4.png"},61638:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_checkpoint_2-e6846ba92e0b336f4956b5cc3b55861f.png"},5775:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_checkpoint_3-b5902c2320fe95aa9a62b4eff29c1e0d.png"},82580:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_lora_1-5888f4730ae8d3fa3db89f88848d579e.png"},14869:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_lora_2-19d5ac8dbffd541231e768bad3bd1dc7.png"},90674:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_lora_3-fc71f1ff7f25588942e7c2432549aaae.png"},48290:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_lora_4-83a3ca277848c4c32d095efcc236070b.png"},87265:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_lora_5-547b0384d44b3d7e199cbf91fb12cf7c.png"},50353:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_vae_1-20391ea567c12d7291870584966845c9.png"},14581:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_vae_2-a611a56a4f7a7173011dc223df7e666b.png"},83382:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_vae_3-6bd0abb6a8306eaa6089569adc304d9d.png"},73333:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_vae_4-41cfe8ffd56d77a20751de90b84b36cb.png"},71371:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/usage-guide_vae_5-992453ab0b4a96cf4444d556f191e617.png"}}]);