"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(g,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={slug:"/rigging-mode",description:""},a="\ub9ac\uae45 \ubaa8\ub4dc",l={unversionedId:"editable-mesh/rigging-mode/index",id:"editable-mesh/rigging-mode/index",title:"\ub9ac\uae45 \ubaa8\ub4dc",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/index.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging-mode",permalink:"/ko/docs/rigging-mode",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/index.md",tags:[],version:"current",frontMatter:{slug:"/rigging-mode",description:""},sidebar:"docs",previous:{title:"Sticker \ub808\uc774\uc5b4",permalink:"/ko/docs/painting/sticker-layer"},next:{title:"\ub9ac\uae45 \ubaa8\ub4dc \uac00\uc774\ub4dc",permalink:"/ko/docs/rigging/guide"}},g={},s=[{value:"\ub9ac\uae45 \ubaa8\ub4dc \uc2dc\uc791",id:"\ub9ac\uae45-\ubaa8\ub4dc-\uc2dc\uc791",level:2},{value:"Root Bone",id:"root-bone",level:3},{value:"<strong>\uc778\ud130\ud398\uc774\uc2a4</strong>",id:"\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"Active/Inactive",id:"activeinactive",level:3},{value:"Clear Rigging Data",id:"clear-rigging-data",level:3},{value:"<strong>Root Bone \uc2ac\ub86f</strong>",id:"root-bone-\uc2ac\ub86f",level:3},{value:"<strong>Bone Tree</strong>",id:"bone-tree",level:3},{value:"<strong>Bind Bone List</strong>",id:"bind-bone-list",level:3},{value:"<strong>Tools \uadf8\ub8f9</strong>",id:"tools-\uadf8\ub8f9",level:3},{value:"Weight \ud234",id:"weight-\ud234",level:3},{value:"Weight Brush \ud234",id:"weight-brush-\ud234",level:3},{value:"Reset Poses \ud234",id:"reset-poses-\ud234",level:3},{value:"Rebind Poses \ud234",id:"rebind-poses-\ud234",level:3},{value:"Weight Transfer \ud234",id:"weight-transfer-\ud234",level:3},{value:"Envelope \ud234",id:"envelope-\ud234",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ub9ac\uae45-\ubaa8\ub4dc"},"\ub9ac\uae45 \ubaa8\ub4dc"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ub9ac\uae45(Rigging)\ubaa8\ub4dc"),"\ub294 \ubaa8\ub378\uc744 \uc6c0\uc9c1\uc774\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc704\ud55c \ubaa8\ub4dc\ub85c, \uba54\uc26c\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8"),"\ub97c ",(0,o.kt)("strong",{parentName:"p"},"\ud560\ub2f9"),"\ud558\uace0 ",(0,o.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8 \ud3b8\uc9d1"),"\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,o.kt)("h2",{parentName:"admonition",id:"\uc6e8\uc774\ud2b8weight"},(0,o.kt)("strong",{parentName:"h2"},"\uc6e8\uc774\ud2b8(Weight)")),(0,o.kt)("p",{parentName:"admonition"},"\ub9ac\uae45 \ubaa8\ub4dc\uc5d0\uc11c \uc774\uc57c\uae30\ud558\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8(Weight)"),"\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\uac00\uc911\uce58"),"\ub97c \ub73b\ud558\uba70, \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc744 \ubc84\ud14d\uc2a4\uc5d0 \uc5bc\ub9c8\ub098 \ubc18\uc601\ud558\uc5ec  \uc6c0\uc9c1\uc774\uac8c \ud560\uc9c0\uc5d0 \ub300\ud55c \uac00\uc911\uce58 \uac12\uc785\ub2c8\ub2e4.\n",(0,o.kt)("strong",{parentName:"p"},"\uac12\uc758 \ubc94\uc704\ub294 0.0 ~ 1.0"),"\ub85c 0.0\uc77c \uacbd\uc6b0 \ubcf8\uc744 \uc6c0\uc9c1\uc5ec\ub3c4 \ud574\ub2f9 \ubc84\ud14d\uc2a4\uac00 \uc6c0\uc9c1\uc5ec\uc9c0\uc9c0 \uc54a\uc73c\uba70, 1.0\uc77c \uacbd\uc6b0 \ubcf8\uc744 \uc6c0\uc9c1\uc774\uba74 \ud574\ub2f9 \ubc84\ud14d\uc2a4\uac00 \ud568\uaed8 \uc6c0\uc9c1\uc5ec\uc9d1\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ub9ac\uae45-\ubaa8\ub4dc-\uc2dc\uc791"},"\ub9ac\uae45 \ubaa8\ub4dc \uc2dc\uc791"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Start",src:n(34651).Z,width:"1046",height:"274"})),(0,o.kt)("p",null,"\ub9ac\uae45 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 \ub9ac\uae45 \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ubcf8\uc744 \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"root-bone"},"Root Bone"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Root Bone Select",src:n(85378).Z,width:"939",height:"100"})),(0,o.kt)("p",null,"\uac00\uc7a5 \uc0c1\uc704\uc5d0 \uc704\uce58\ud55c \ubcf8\uc744 \uc120\ud0dd\ud558\ub294 \uc2ac\ub86f\uc785\ub2c8\ub2e4. \uc774 \uc2ac\ub86f\uc5d0 \uc120\ud0dd\ub41c \ubcf8\uc740 \ubaa8\ub378\uc758 \uc774\ub3d9 \ubc0f \ud68c\uc804\uc744 \uc81c\uc5b4\ud558\ub294 \uc911\uc2ec\uc810\uc774 \ub429\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc778\ud130\ud398\uc774\uc2a4"},(0,o.kt)("strong",{parentName:"h2"},"\uc778\ud130\ud398\uc774\uc2a4")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Interface",src:n(93009).Z,width:"983",height:"1657"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Interface 1",src:n(86156).Z,width:"983",height:"204"})),(0,o.kt)("h3",{id:"activeinactive"},"Active/Inactive"),(0,o.kt)("p",null,"\ub9ac\uae45 \ubaa8\ub4dc\ub97c \ud65c\uc131\ud654\ud558\uac70\ub098 \ube44\ud65c\uc131\ud654\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"clear-rigging-data"},"Clear Rigging Data"),(0,o.kt)("p",null,"\ud604\uc7ac \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub41c \ub9ac\uae45 \uad00\ub828 \ub370\uc774\ud130\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active/Inactive \ubc84\ud2bc"),"\uc744 \ud1b5\ud574 \ub9ac\uae45 \ubaa8\ub4dc\uac00 \ube44\ud65c\uc131\ud654 \ub418\uc5c8\uc744 \ub54c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"root-bone-\uc2ac\ub86f"},(0,o.kt)("strong",{parentName:"h3"},"Root Bone \uc2ac\ub86f")),(0,o.kt)("p",null,"\uc120\ud0dd\ud55c ",(0,o.kt)("strong",{parentName:"p"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\uc5d0 \uc801\uc6a9\ud560 ",(0,o.kt)("strong",{parentName:"p"},"\ucd5c\uc0c1\uc704 \ubcf8\uc744 \uc124\uc815"),"\ud558\ub294 \uc2ac\ub86f\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hierarchy \ud0ed"),"\uc5d0\uc11c \ucd5c\uc0c1\uc704 \ubcf8 \uc624\ube0c\uc81d\ud2b8\ub97c \uc120\ud0dd \ud6c4 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8"))," \ud558\uc5ec \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"bone-tree"},(0,o.kt)("strong",{parentName:"h3"},"Bone Tree")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Interface Bone Tree",src:n(98411).Z,width:"983",height:"454"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Root Bone \uc2ac\ub86f"),"\uc5d0\uc11c \ud560\ub2f9\ub41c ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc758 \ud2b8\ub9ac \uad6c\uc870"),"\ub97c \ubcfc \uc218 \uc788\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bone Tree"),"\uc5d0\ub294 \uc6e8\uc774\ud2b8 \ud560\ub2f9\uacfc\ub294 \uc0c1\uad00\uc5c6\uc774 \uc5f0\uacb0\ub41c \ubaa8\ub4e0 \ubcf8\uc774 \ud45c\uc2dc\ub418\uba70, \ubcf8 \uc120\ud0dd\uc744 \uc27d\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"bind-bone-list"},(0,o.kt)("strong",{parentName:"h3"},"Bind Bone List")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8\uac00 \ud560\ub2f9"),"\ub418\uc5b4 \ubc84\ud14d\uc2a4\uc640 \uc5f0\uacb0\ub41c \ubcf8\ub4e4\uc744 \ud45c\uc2dc\ud558\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed"),"\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \ubcf8 \uc120\ud0dd\uc744 \uc27d\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tools-\uadf8\ub8f9"},(0,o.kt)("strong",{parentName:"h3"},"Tools \uadf8\ub8f9")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tools Group",src:n(7674).Z,width:"909",height:"360"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ub9ac\uae45 \ubaa8\ub4dc"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Tool \uadf8\ub8f9"),"\uc740 \uc6e8\uc774\ud2b8\ub97c \uc218\uc815\ud558\uac70\ub098 \ubcf8\uc744 \uc870\uc815\ud558\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"weight-\ud234"},"Weight \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weight \ud234"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"weight-brush-\ud234"},"Weight Brush \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weight Brush \ud234"),"\uc740 \uc120\ud0dd\ub41c \ubcf8\uc5d0 \ubc84\ud14d\uc2a4\uc758 \uc6e8\uc774\ud2b8\ub97c \ube0c\ub7ec\uc2dc\ubc29\uc2dd\uc73c\ub85c \uce60\ud558\uc5ec \ud560\ub2f9\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"reset-poses-\ud234"},"Reset Poses \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reset Poses \ud234"),"\uc740 \uc6c0\uc9c1\uc5ec\uc9c4 \ubcf8\uc758 \uc704\uce58\uc640 \ud68c\uc804\uc744 \ucd08\uae30\ud654 \uc2dc\ucf1c \uc6d0\ub798 \uae30\ubcf8 \ud3ec\uc988\ub85c \ub418\ub3cc\ub9ac\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"rebind-poses-\ud234"},"Rebind Poses \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rebind Poses \ud234"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8 \uc704\uce58\uc640 \ud68c\uc804\uc744 \uc7ac\uc124\uc815"),"\uc744 \ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"weight-transfer-\ud234"},"Weight Transfer \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weight Transfer \ud234"),"\uc740 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub41c \uc6e8\uc774\ud2b8\ub97c \ud604\uc7ac\uc758 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ubcf5\uc0ac\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"envelope-\ud234"},"Envelope \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Envelope \ud234"),"\uc740 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ubd80\uc5ec\ud558\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ucea1\uc290\ud615 \ubcfc\ub968"),"\uc778 ",(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d(Envelope)"),"\uc744 \ud3b8\uc9d1\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."))}d.isMDXComponent=!0},7674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_Icon-fa19b88f5e66ad765f2b3c42e14c41ec.png"},93009:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_Interface-065da740c1e2dec766a5b461ca22df1b.png"},86156:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_Interface_1-f38331a57317b848330cf3282cc7ecfb.png"},98411:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_Interface_BoneTree-d6ba7a4b051a917e75f796fc5ca05151.png"},85378:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_RootBoneSelect-650d85812c16f981e6be6e5268964f92.png"},34651:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RiggingMode_Start-6f6f0e436c5859d75cb64cfd7ecfbc37.png"}}]);