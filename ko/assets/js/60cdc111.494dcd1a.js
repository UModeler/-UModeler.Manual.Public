"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/rigging/weight-transfer-tool",sidebar_position:5},i="Weight Transfer \ud234",l={unversionedId:"editable-mesh/rigging-mode/weight-transfer-tool",id:"editable-mesh/rigging-mode/weight-transfer-tool",title:"Weight Transfer \ud234",description:"Weight Transfer \ud234\uc740 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub41c \uc6e8\uc774\ud2b8\ub97c \ud604\uc7ac\uc758 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ubcf5\uc0ac\ud558\ub294 \ud234\uc785\ub2c8\ub2e4.",source:"@site/docs/editable-mesh/rigging-mode/weight-transfer-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-transfer-tool",permalink:"/ko/docs/rigging/weight-transfer-tool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/rigging-mode/weight-transfer-tool.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/rigging/weight-transfer-tool",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Rebind Poses \ud234",permalink:"/ko/docs/rigging/rebind-poses-tool"},next:{title:"Envelope \ud234",permalink:"/ko/docs/rigging/envelope-tool"}},s={},p=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Is Raycast",id:"is-raycast",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Animation",id:"apply-animation",level:3},{value:"\ucc38\uc870 \uc624\ube0c\uc81d\ud2b8 \uc2ac\ub86f",id:"\ucc38\uc870-\uc624\ube0c\uc81d\ud2b8-\uc2ac\ub86f",level:3},{value:"Transfer",id:"transfer",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],g={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weight-transfer-\ud234"},"Weight Transfer \ud234"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Weight Transfer \ud234"),"\uc740 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub41c \uc6e8\uc774\ud2b8\ub97c \ud604\uc7ac\uc758 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ubcf5\uc0ac\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Weight Transfer \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ucc38\uc870\ud560 \uc624\ube0c\uc81d\ud2b8\ub97c \uc2ac\ub86f\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Transfer \ubc84\ud2bc"),"\uc744 \ub20c\ub7ec \uc801\uc6a9\ud569\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,a.kt)("h3",{id:"is-raycast"},"Is Raycast"),(0,a.kt)("p",null,"\ubc84\ud14d\uc2a4 \ub178\uba40 \ubc29\ud5a5\uacfc \ubc18\ub300 \ubc29\ud5a5\uc73c\ub85c \ub808\uc774\uce90\uc2a4\ud2b8\ud558\uc5ec \ucda9\ub3cc\ud55c \uc9c0\uc810\uc744 \uae30\uc900\uc73c\ub85c \uc6e8\uc774\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4.\n\uccb4\ud06c \ud574\uc81c \uc2dc \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubc84\ud14d\uc2a4\uc758 \ud3c9\uade0\uc73c\ub85c \uc6e8\uc774\ud2b8\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"basic"},(0,a.kt)("strong",{parentName:"h3"},"Basic")),(0,a.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-handler"},"Show Handler"),(0,a.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-bones"},"Show Bones"),(0,a.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,a.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,a.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"apply-animation"},"Apply Animation"),(0,a.kt)("h3",{id:"\ucc38\uc870-\uc624\ube0c\uc81d\ud2b8-\uc2ac\ub86f"},"\ucc38\uc870 \uc624\ube0c\uc81d\ud2b8 \uc2ac\ub86f"),(0,a.kt)("p",null,"\uc6e8\uc774\ud2b8\ub97c \uac00\uc838\uc62c \uc624\ube0c\uc81d\ud2b8\ub97c  \uc124\uc815\ud558\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hierarchy \ud0ed"),"\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"Skinned Mesh Renderer \ucef4\ud3ec\ub10c\ud2b8"),"\ub97c \uac00\uc9c4 \uc624\ube0c\uc81d\ud2b8\ub97c \uc120\ud0dd \ud6c4 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8"))," \ud558\uc5ec \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"\uc6e8\uc774\ud2b8 \ubcf5\uc0ac\ub97c \uc2e4\ud589\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \ucc38\uc870\ud560 \uc624\ube0c\uc81d\ud2b8\uac00 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc5b4\uc57c \uc2e4\ud589 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")))}c.isMDXComponent=!0}}]);