"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),c=o,k=g["".concat(s,".").concat(c)]||g[c]||m[c]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/rigging/edit-bones-tool",sidebar_position:10},i="Edit Bones \ud234",l={unversionedId:"editable-mesh/rigging-mode/edit-bones-tool",id:"editable-mesh/rigging-mode/edit-bones-tool",title:"Edit Bones \ud234",description:"Rigging Mode Edit Bones",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/edit-bones-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/edit-bones-tool",permalink:"/ko/docs/rigging/edit-bones-tool",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/rigging/edit-bones-tool",sidebar_position:10},sidebar:"docs",previous:{title:"Envelope \ud234",permalink:"/ko/docs/rigging/envelope-tool"},next:{title:"\ud398\uc778\ud305 \ubaa8\ub4dc",permalink:"/ko/docs/painting-mode"}},s={},p=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"<strong>BoneName</strong>",id:"bonename",level:3},{value:"<strong>Add</strong>",id:"add",level:3},{value:"<strong>Parent</strong>",id:"parent",level:3},{value:"<strong>Delete</strong>",id:"delete",level:3},{value:"<strong>Remove</strong>",id:"remove",level:3},{value:"<strong>Connect</strong>",id:"connect",level:3},{value:"<strong>Separate</strong>",id:"separate",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],d={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edit-bones-\ud234"},"Edit Bones \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Edit Bones",src:n(3652).Z,width:"1840",height:"1222"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Edit Bones \ud234"),"\uc740 \ubcf8\uc758 \ucd94\uac00, \uc0ad\uc81c, \ubd84\ub9ac \ub4f1 \ubcf8\uc744 \ud3b8\uc9d1\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Edit Bones \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\uc52c"),"\xa0\ub610\ub294\xa0",(0,o.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed"),"\uc5d0\uc11c \ud3b8\uc9d1\ud558\ub824\ub294 \ubcf8\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Edit Bones select Bone",src:n(91774).Z,width:"1653",height:"1127"})),(0,o.kt)("admonition",{parentName:"li",title:"\ud301",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad"},(0,o.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad"))),(0,o.kt)("p",{parentName:"admonition"},"\ub2e8\ucd95\ud0a4\ub97c \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ubcf8\uc744 \uc52c\uc5d0\uc11c \ubc14\ub85c \uc120\ud0dd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc120\ud0dd\ud55c \ubcf8\uc5d0 \ub300\ud574 \uc18d\uc131 \uc601\uc5ed\uc758 \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcf8\uc744 \ud3b8\uc9d1\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Edit Bones Properties",src:n(89259).Z,width:"1103",height:"723"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ubcf8\uc774 \ud3b8\uc9d1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Edit Bones End",src:n(66315).Z,width:"1675",height:"1107"})))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Bones Properties",src:n(89259).Z,width:"1103",height:"723"})),(0,o.kt)("h3",{id:"basic"},(0,o.kt)("strong",{parentName:"h3"},"Basic")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weight Tool Properties Basic",src:n(84214).Z,width:"853",height:"324"})),(0,o.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-handler"},"Show Handler"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones"},"Show Bones"),(0,o.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"bonename"},(0,o.kt)("strong",{parentName:"h3"},"BoneName")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BoneName \uc18d\uc131"),"\uc740 \ubcf8\uc744 \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc774\ub984\uc744 \uc9c0\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"add"},(0,o.kt)("strong",{parentName:"h3"},"Add")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add"),"\ub294 \ud604\uc7ac \uc120\ud0dd\ub41c \ubcf8\uc758 \uc704\uce58\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"BoneName \uc18d\uc131"),"\uc5d0 \uc9c0\uc815\ub41c \uc774\ub984\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ud558\uc704 \ubcf8\uc744 \ucd94\uac00\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"parent"},(0,o.kt)("strong",{parentName:"h3"},"Parent")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parent"),"\ub294 \uc120\ud0dd\ud55c \ubcf8\uc744 \ub2e4\ub978 \ubcf8\uc758 \ud558\uc704 \ubcf8\uc73c\ub85c \uc124\uc815\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \uc774\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud558\uc704 \ubcf8\uc774 \ub420 \ubcf8\uc744 \uba3c\uc800 \uc120\ud0dd\ud55c \ud6c4 ",(0,o.kt)("strong",{parentName:"p"},"Parent \ubc84\ud2bc"),"\uc744 \ud074\ub9ad\ud558\uace0 \uc0c1\uc704 \ubcf8\uc744 \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"delete"},(0,o.kt)("strong",{parentName:"h3"},"Delete")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delete"),"\ub294 \uc120\ud0dd\ud55c \ubcf8\uc744 ",(0,o.kt)("strong",{parentName:"p"},"\uc644\uc804\ud788 \uc0ad\uc81c"),"\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc0ad\uc81c\ub41c \ubcf8\uc758 \ud558\uc704 \ubcf8\ub4e4\uc740 \uc0ad\uc81c\ub41c \ubcf8\uc758 \uc0c1\uc704 \ubcf8\uc758 \uc704\uce58\ub85c \uc774\ub3d9\ud558\uba70, \uc0c1\uc704 \ubcf8\uacfc \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"remove"},(0,o.kt)("strong",{parentName:"h3"},"Remove")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove"),"\ub294 \uc120\ud0dd\ud55c \ubcf8\uc744 \uc0ad\uc81c\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc0ad\uc81c\ub41c \ubcf8\uc758 \ud558\uc704 \ubcf8\ub4e4\uc740 \uc0ad\uc81c\ub41c \ubcf8\uc758 \uc0c1\uc704 \ubcf8\uacfc \uc5f0\uacb0\ub418\uba70, \uadf8 \uc704\uce58\ub294 \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"connect"},(0,o.kt)("strong",{parentName:"h3"},"Connect")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect"),"\ub294 \uc120\ud0dd\ud55c \ubcf8\uacfc \ub2e4\ub978 \ubcf8 \uc0ac\uc774\uc5d0 \uc0c8\ub85c\uc6b4 \ubcf8\uc744 \uc0dd\uc131\ud558\uc5ec \uc11c\ub85c \uc5f0\uacb0\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4.\n\uc774\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \uc5f0\uacb0\ud558\ub824\ub294 \ubcf8 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uace0 ",(0,o.kt)("strong",{parentName:"p"},"Connect \ubc84\ud2bc"),"\uc744 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud55c \ud6c4, \ub2e4\ub978 \ubcf8\uc744 \uc120\ud0dd\ud558\uba74 \ub450 \ubcf8 \uc0ac\uc774\uc5d0 \uc0c8\ub85c\uc6b4 \ubcf8\uc774 \uc0dd\uc131\ub418\uc5b4 \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ud301",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"parent\uc640\uc758-\ucc28\uc774\uc810"},"Parent\uc640\uc758 \ucc28\uc774\uc810"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Parent"),"\uc640\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\ucc28\uc774\uc810"),"\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parent"),"\ub294 ",(0,o.kt)("strong",{parentName:"li"},"\ubcf8 \ucd94\uac00 \uc5c6\uc774")," \uae30\uc874\uc758 \ubcf8 \uad6c\uc870\ub97c \uc720\uc9c0\ud558\uba74\uc11c \ubcf8\ub4e4 \uc0ac\uc774\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\uacc4\uce35 \uad00\uacc4\ub97c \uc124\uc815"),"\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connect"),"\ub294 \ubcf8 \uad6c\uc870\uc5d0 ",(0,o.kt)("strong",{parentName:"li"},"\uc0c8\ub85c\uc6b4 \ubcf8\uc744 \ucd94\uac00"),"\ud558\uc5ec \ubcf8\ub4e4\uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4."))),(0,o.kt)("h3",{id:"separate"},(0,o.kt)("strong",{parentName:"h3"},"Separate")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Separate"),"\ub294 \uc120\ud0dd\ub41c \ubcf8\uc744 \uc0c1\uc704 \ubcf8\uc73c\ub85c\ubd80\ud130 \ubd84\ub9ac\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc120\ud0dd\ub41c \ubcf8\uc740 \uc0c1\uc704 \ubcf8\uacfc\uc758 \uc5f0\uacb0\uc744 \ub04a\uace0 \ub3c5\ub9bd\uc801\uc778 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \uc120\ud0dd\ub41c \ubcf8\uc5d0 \uc5f0\uacb0\ub41c \ud558\uc704 \ubcf8\ub4e4\uc740 \uc5ec\uc804\ud788 \uc120\ud0dd\ub41c \ubcf8\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/-_f5CTehPOY",frameborder:"0",allowfullscreen:""})))}g.isMDXComponent=!0},3652:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_EditBones-45ef355b5c426275023fb432dec0f227.png"},89259:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_EditBones_Properties-00165eff7cd87ca8c239674dd60ad55c.png"},66315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_EditBones_end-1fd8a8abfe6cfc12f6523842096ab3a7.png"},91774:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_EditBones_selectBone-ffe673b385df493972958d21f9ed276c.png"},84214:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_WeightBrush_Properties_Basic-673835b8412dee8a5a082c2edefe20c7.png"}}]);