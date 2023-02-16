"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(n),c=o,d=g["".concat(i,".").concat(c)]||g[c]||u[c]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/rigging/envelope-tool",sidebar_position:6},l="Envelope \ud234",p={unversionedId:"editable-mesh/rigging-mode/envelope-tool",id:"editable-mesh/rigging-mode/envelope-tool",title:"Envelope \ud234",description:"Envelope \ud234\uc740 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ubd80\uc5ec\ud558\ub294 \ucea1\uc290\ud615 \ubcfc\ub968\uc778 \uc5d4\ubca8\ub86d(Envelope)\uc744 \ud3b8\uc9d1\ud558\ub294 \ud234\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/envelope-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/envelope-tool",permalink:"/ko/docs/rigging/envelope-tool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/rigging-mode/envelope-tool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/rigging/envelope-tool",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Weight Transfer \ud234",permalink:"/ko/docs/rigging/weight-transfer-tool"},next:{title:"\ud398\uc778\ud305 \ubaa8\ub4dc",permalink:"/ko/docs/painting-mode"}},i={},s=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Animation",id:"apply-animation",level:3},{value:"Apply Envelope",id:"apply-envelope",level:3},{value:"Reset Envelope",id:"reset-envelope",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],m={toc:s};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"envelope-\ud234"},"Envelope \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Envelope \ud234"),"\uc740 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ubd80\uc5ec\ud558\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ucea1\uc290\ud615 \ubcfc\ub968"),"\uc778 ",(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d(Envelope)"),"\uc744 \ud3b8\uc9d1\ud558\ub294 \ud234\uc785\ub2c8\ub2e4.\n\uac01 \ubcf8\ub9c8\ub2e4 \uc5d4\ubca8\ub86d\uc744 \uac00\uc9c0\uace0 \uc788\uace0 ",(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d \uc548\uc5d0 \ub4e4\uc5b4\uc624\uac70\ub098 \uc601\ud5a5\uc744 \ubc1b\ub294 \ubc84\ud14d\uc2a4"),"\ub294 \uc6e8\uc774\ud2b8\uac00 \ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ud301",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Envelope \ud234"),"\uc744 \uc774\uc6a9\ud558\uba74 \uc9c1\uc811 \ubc84\ud14d\uc2a4 \uc120\ud0dd\ud558\uc5ec \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\ub294 \uac83\ubcf4\ub2e4 \ud3b8\ud558\uac8c \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc870\uae08 \ub354 \ud3b8\ud558\uac8c ",(0,o.kt)("strong",{parentName:"p"},"\ub9ac\uae45 \ubaa8\ub4dc"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\uc52c")," \ub610\ub294 ",(0,o.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed, Bind Bone List")," \uc5d0\uc11c \uc6d0\ud558\ub294 \ubcf8\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("admonition",{parentName:"li",title:"\ud301",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad"},(0,o.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad"))),(0,o.kt)("p",{parentName:"admonition"},"\ub2e8\ucd95\ud0a4\ub97c \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ubcf8\uc744 \uc52c\uc5d0\uc11c \ubc14\ub85c \uc120\ud0dd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Envelope \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ud654\uba74\uc5d0 \ub744\uc6cc\uc9c4 ",(0,o.kt)("strong",{parentName:"p"},"Envelope \ucea1\uc290"),"\uc758 \ud06c\uae30\uc640 \uc704\uce58\ub97c \uc6d0\ud558\ub294 \ub300\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apply Envelope \ubc84\ud2bc"),"\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Envelope"),"\uc5d0 \ub9de\ucdb0 \uc6e8\uc774\ud2b8\uac00 \uc124\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("h3",{id:"basic"},(0,o.kt)("strong",{parentName:"h3"},"Basic")),(0,o.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-handler"},"Show Handler"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones"},"Show Bones"),(0,o.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"apply-animation"},"Apply Animation"),(0,o.kt)("h3",{id:"apply-envelope"},"Apply Envelope"),(0,o.kt)("p",null,"\ud604\uc7ac \uc124\uc815\ub41c ",(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d"),"\uc5d0 \ub9de\ucdb0 ",(0,o.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8\ub97c \uc124\uc815"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d\uc758 \ud615\ud0dc"),"\ub97c \ubcc0\uacbd\ud558\ub354\ub77c\ub3c4, ",(0,o.kt)("strong",{parentName:"p"},"Apply Envelope \ubc84\ud2bc"),"\uc744 \ub204\ub974\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("h3",{id:"reset-envelope"},"Reset Envelope"),(0,o.kt)("p",null,"\ud604\uc7ac \uc124\uc815\ub41c ",(0,o.kt)("strong",{parentName:"p"},"\uc5d4\ubca8\ub86d"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\ud615\ud0dc\uc640 \uc704\uce58\ub97c \ucd08\uae30\ud654"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")))}g.isMDXComponent=!0}}]);