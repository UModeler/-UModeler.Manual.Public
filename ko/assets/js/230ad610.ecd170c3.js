"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3373],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=l,c=u["".concat(s,".").concat(k)]||u[k]||g[k]||r;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30803:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:4,slug:"/extension-installation"},i="ControlNet \uc775\uc2a4\ud150\uc158 \uc124\uce58",o={unversionedId:"ai-texturing/installation-guide/extension-installation",id:"ai-texturing/installation-guide/extension-installation",title:"ControlNet \uc775\uc2a4\ud150\uc158 \uc124\uce58",description:"Stable Diffusion web UI\uc5d0\uc11c\ub294 Extension\uc774\ub77c\uace0 \ud558\ub294 \uc5ec\ub7ec \uc5d0\ub4dc\uc628\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. UModeler X\uc758 AI \ud14d\uc2a4\ucc98\ub9c1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ControlNet\uc774\ub77c\ub294 Stable Diffusion web UI\uc758 \ud655\uc7a5 \uae30\ub2a5\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ai-texturing/installation-guide/extension-installation.md",sourceDirName:"ai-texturing/installation-guide",slug:"/extension-installation",permalink:"/ko/docs/extension-installation",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/installation-guide/extension-installation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/extension-installation"},sidebar:"docs",previous:{title:"Stable Diffusion web UI \uc124\uce58",permalink:"/ko/docs/stable-diffusion-web-ui-installation"},next:{title:"\uc0ac\uc6a9 \uac00\uc774\ub4dc",permalink:"/ko/docs/usage-guide"}},s={},p=[{value:"<strong>ControlNet \uc124\uce58</strong>",id:"controlnet-\uc124\uce58",level:2},{value:"<strong>ControlNet \ubaa8\ub378 \uc124\uce58</strong>",id:"controlnet-\ubaa8\ub378-\uc124\uce58",level:2},{value:"\ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc801\uc6a9",id:"\ub2e4\uc6b4\ub85c\ub4dc-\ubc0f-\uc801\uc6a9",level:3},{value:"<strong>ControlNet\uacfc \uc775\uc2a4\ud150\uc158\uc744 \uc124\uce58\ud558\ub294 \ub2e4\ub978 \ubc29\ubc95</strong>",id:"controlnet\uacfc-\uc775\uc2a4\ud150\uc158\uc744-\uc124\uce58\ud558\ub294-\ub2e4\ub978-\ubc29\ubc95",level:2}],m={toc:p};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"controlnet-\uc775\uc2a4\ud150\uc158-\uc124\uce58"},"ControlNet \uc775\uc2a4\ud150\uc158 \uc124\uce58"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),"\uc5d0\uc11c\ub294 ",(0,l.kt)("strong",{parentName:"p"},"Extension"),"\uc774\ub77c\uace0 \ud558\ub294 \uc5ec\ub7ec \uc5d0\ub4dc\uc628\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. UModeler X\uc758 AI \ud14d\uc2a4\ucc98\ub9c1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ",(0,l.kt)("strong",{parentName:"p"},"ControlNet"),"\uc774\ub77c\ub294 Stable Diffusion web UI\uc758 \ud655\uc7a5 \uae30\ub2a5\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"controlnet-\uc124\uce58"},(0,l.kt)("strong",{parentName:"h2"},"ControlNet \uc124\uce58")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Extensions \ud0ed \uc5f4\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"web UI\uc5d0\uc11c ",(0,l.kt)("strong",{parentName:"li"},"Extensions \ud0ed"),"\uc744 \uc5fd\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(75214).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"URL\ub85c \uc124\uce58\ud558\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Extensions \ud0ed")," \ub0b4\uc5d0\uc11c ",(0,l.kt)("strong",{parentName:"li"},"Install from URL \ud0ed"),"\uc744 \uc5fd\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(16496).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"ControlNet \uc800\uc7a5\uc18c URL \uc785\ub825"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"URL for extension's git repository")," \uc606 \uc785\ub825\ub780\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/Mikubill/sd-webui-controlnet.git"),"\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Install \ubc84\ud2bc \ud074\ub9ad"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Install \ubc84\ud2bc"),"\uc744 \ub204\ub974\uace0 \uc870\uae08 \uae30\ub2e4\ub9bd\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(76355).Z,width:"2880",height:"1335"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Installed into stable-diffusion-webui\\extensions\\sd-webui-controlnet. Use Installed tab to restart")),"\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub418\uba74 \uc124\uce58\uac00 \uc644\ub8cc\ub41c \uac83\uc785\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(79676).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\uc5c5\ub370\uc774\ud2b8 \ubc0f \uc7ac\uc2dc\uc791"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Installed \ud0ed"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(52210).Z,width:"2880",height:"1335"})),(0,l.kt)("li",{parentName:"ul"},"Check for updates\ub97c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud55c \ud6c4 ",(0,l.kt)("strong",{parentName:"li"},"Apply and restart UI"),"\ub97c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(42587).Z,width:"2880",height:"1335"}))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"controlnet-\ubaa8\ub378-\uc124\uce58"},(0,l.kt)("strong",{parentName:"h2"},"ControlNet \ubaa8\ub378 \uc124\uce58")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ControlNet"),"\uc5d0\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc5ec\ub7ec \ubaa8\ub378\uc774 \uc788\uc2b5\ub2c8\ub2e4. ControlNet 1.1\uc5d0\ub294 \ud604\uc7ac \ubca0\ud0c0 \ud14c\uc2a4\ud2b8 \uc911\uc778 14\uac1c\uc758 \ubaa8\ub378\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ub2e4\uc6b4\ub85c\ub4dc-\ubc0f-\uc801\uc6a9"},"\ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc801\uc6a9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\ubaa8\ub378 \ub2e4\uc6b4\ub85c\ub4dc \ub9c1\ud06c \uc811\uc18d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main"},"ControlNet 1.1 \ubaa8\ub378 \ub2e4\uc6b4\ub85c\ub4dc \ud398\uc774\uc9c0"),"\uc5d0 \uc811\uc18d\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},".pth \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\uc5d0\uc11c \ud30c\uc77c \ud655\uc7a5\uc790\uac00 .pth\ub85c \ub05d\ub098\ub294 \ubaa8\ub378 \ud30c\uc77c\ub4e4\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"14\uac1c\uc758 \ubaa8\ub378\uc758 \ucd1d \uc6a9\ub7c9\uc740 \uc57d 18.8\uae30\uac00\uc774\uba70, \ubaa8\ub4e0 \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\uba74 \uc120\ud0dd\uc801\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \uc6a9\ub7c9\uc774 \ubd80\ub2f4\uc774 \ub41c\ub2e4\uba74 ",(0,l.kt)("strong",{parentName:"li"},"control_v11f1p_sd15_depth.pth")," \ub9cc \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(4522).Z,width:"1698",height:"1604"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 \ubaa8\ub378 \ud30c\uc77c \uc774\ub3d9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c \ubaa8\ub378 \ud30c\uc77c\ub4e4\uc744 Stable Diffusion web UI\uac00 \uc124\uce58\ub41c \ud3f4\ub354\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"stable-diffusion-webui/extensions/sd-webui-controlnet/models")," \uacbd\ub85c\uc5d0 \ub123\uc73c\uba74 \ubaa8\ub378\uc774 \uc801\uc6a9 \uc644\ub8cc\ub429\ub2c8\ub2e4.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"controlnet\uacfc-\uc775\uc2a4\ud150\uc158\uc744-\uc124\uce58\ud558\ub294-\ub2e4\ub978-\ubc29\ubc95"},(0,l.kt)("strong",{parentName:"h2"},"ControlNet\uacfc \uc775\uc2a4\ud150\uc158\uc744 \uc124\uce58\ud558\ub294 \ub2e4\ub978 \ubc29\ubc95")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ControlNet"),"\uc744 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 Stable Diffusion web UI\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc5ec\ub7ec \uc775\uc2a4\ud150\uc158\uc758 \ubaa9\ub85d\uc744 \ubcf4\uba70 \uc190\uc27d\uac8c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Extensions \ud0ed \uc5f4\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Extensions \ud0ed"),"\uc744 \uc5f4\uace0 ",(0,l.kt)("strong",{parentName:"li"},"Available"),"\uc744 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(10812).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Load from \ubc84\ud2bc \ud655\uc778"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Load from: \uc606"),"\uc5d0 \ud45c\uc2dc\ub41c \uc8fc\uc18c\uac00",(0,l.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui-extensions/master/index.json"),"\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub530\ub85c \uc218\uc815\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uae30\ubcf8\uc801\uc73c\ub85c \uc704 \uc8fc\uc18c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(85759).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Load from: \ubc84\ud2bc"),"\uc744 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc124\uce58 \uac00\ub2a5\ud55c \uc5ec\ub7ec \uc775\uc2a4\ud150\uc158\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(33976).Z,width:"2574",height:"1490"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"ControlNet \uac80\uc0c9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Search \uc785\ub825 \ubd80\ubd84"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"sd-webui-controlnet"),"\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(37017).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"ControlNet \uc124\uce58"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa9\ub85d\uc5d0\uc11c ",(0,l.kt)("strong",{parentName:"li"},"sd-webui-controlnet manipulations"),"\ub97c \ucc3e\uace0 \uc124\uba85\uc758 \uc624\ub978\ucabd\uc5d0 \uc788\ub294 ",(0,l.kt)("strong",{parentName:"li"},"Install \ubc84\ud2bc"),"\uc744 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc544\ub798 \uc774\ubbf8\uc9c0\ub294 \uc704\uc5d0\uc11c \uc774\ubbf8 \uc124\uce58\ub41c \uc0c1\ud0dc\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("strong",{parentName:"li"},"Installed"),"\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(45005).Z,width:"2574",height:"1490"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\uc124\uce58 \ud655\uc778"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uba74 ",(0,l.kt)("strong",{parentName:"li"},"Installed \ud0ed"),"\uc73c\ub85c \ub3cc\uc544\uac00 \uc124\uce58\ub41c \uc775\uc2a4\ud150\uc158\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(24576).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\uc801\uc6a9 \ubc0f \uc7ac\uc2dc\uc791"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Apply and restart UI \ubc84\ud2bc"),"\uc744 \ub204\ub974\uba74 \uc124\uce58\ud55c \uc775\uc2a4\ud150\uc158\uc744 \uc2e4\uc81c\ub85c \uc801\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.\n",(0,l.kt)("img",{alt:"none",src:n(84485).Z,width:"2574",height:"1490"}))))),(0,l.kt)("p",null,"\uc774 \ubc29\ubc95\uc744 \ud1b5\ud574 ControlNet \uc775\uc2a4\ud150\uc158 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc5ec\ub7ec\uac00\uc9c0 \ub2e4\ub978 \uc775\uc2a4\ud150\uc158\ub4e4\ub3c4 \uc190\uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}u.isMDXComponent=!0},75214:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_1-bcc120f65e30e7d99359cdb6500f5ce5.png"},33976:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_10-935a958d0f53708f8e402f7fae4b621b.png"},37017:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_11-2eda8635d4ca3e8c220b90abe84b51ff.png"},45005:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_12-927c0abe04074b61f413854b052a1ce9.png"},24576:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_13-4104a85cf71451d4e7886fd083ed3800.png"},84485:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_14-21626ea4fa67ecb5cfaa8bdf715392df.png"},16496:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_2-8a88be2442d5d666e96a7929d4ffe83b.png"},76355:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_3-51800472062493eac032f559c63ff6f2.png"},79676:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_4-f712f7f95ed21795924a2111e56598dc.png"},52210:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_5-076effeaa53f7d5e0687edf67d064263.png"},42587:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_6-1f90a0030790121920a8d4badc247c17.png"},4522:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_7-b8c16ef021b53a0a2d2e5c7a9dbf3373.png"},10812:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_8-ce904f5d0a925e19e915e981cb7e9617.png"},85759:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_9-5ef32981a963ce7ae8f6ebf5359ab9c7.png"}}]);