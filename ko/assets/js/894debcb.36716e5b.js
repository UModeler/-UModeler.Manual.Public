"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=d(n),c=o,m=g["".concat(s,".").concat(c)]||g[c]||p[c]||r;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[g]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=n(87462),o=(n(67294),n(3905));const r={slug:"/rigging/build-bones-tool",sidebar_position:7},i="Build Bones \ud234",a={unversionedId:"editable-mesh/rigging-mode/build-bones-tool",id:"editable-mesh/rigging-mode/build-bones-tool",title:"Build Bones \ud234",description:"Build Bones",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/build-bones-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/build-bones-tool",permalink:"/ko/docs/rigging/build-bones-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/build-bones-tool.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/rigging/build-bones-tool",sidebar_position:7},sidebar:"docs",previous:{title:"Weight Transfer \ud234",permalink:"/ko/docs/rigging/weight-transfer-tool"},next:{title:"Weight Mirror \ud234",permalink:"/ko/docs/rigging/weight-mirror-tool"}},s={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>Property</strong>",id:"property",level:2},{value:"Selected Bone as the top-level",id:"selected-bone-as-the-top-level",level:3},{value:"<strong>Editing</strong>",id:"editing",level:2},{value:"<strong>Symmetry</strong>",id:"symmetry",level:3},{value:"<strong>Snap Center Bone</strong>",id:"snap-center-bone",level:3},{value:"None",id:"none",level:3},{value:"Snap To Pivot Axis",id:"snap-to-pivot-axis",level:3},{value:"Snap To Top Level Bone Axis",id:"snap-to-top-level-bone-axis",level:3},{value:"<strong>Move With Child</strong>",id:"move-with-child",level:3},{value:"<strong>Show Name</strong>",id:"show-name",level:3},{value:"<strong>Basic</strong>",id:"basic",level:2},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"<strong>Structure</strong>",id:"structure",level:2},{value:"Start Building",id:"start-building",level:3},{value:"Make Bones",id:"make-bones",level:3},{value:"Turn90",id:"turn90",level:3},{value:"Cancel",id:"cancel",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],u={toc:d};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-bones-\ud234"},"Build Bones \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build Bones",src:n(60034).Z,width:"3364",height:"1580"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build Bones")," \ud234\uc740 \ubcf8 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574 \ubcf8 \uad6c\uc870\ub97c \ube60\ub974\uac8c \uc0dd\uc131\ud558\uace0 \ud3b8\uc9d1\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4. \ubbf8\ub9ac \uc815\uc758\ub41c \ubcf8 \uad6c\uc870\ub97c \ud1b5\ud558\uc5ec \ubcf8 \uad6c\uc870\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Build Bones \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Structure \uc18d\uc131"),'\uc5d0\uc11c \ubbf8\ub9ac \uc815\uc758\ub41c \ubcf8 \uad6c\uc870 ("Limb", "Human", "Quadruped") \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n',(0,o.kt)("img",{alt:"Build Bones",src:n(24246).Z,width:"953",height:"261"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start Building")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Build Bones",src:n(80331).Z,width:"940",height:"197"})),(0,o.kt)("li",{parentName:"ol"},"\ucd9c\ub825\ub41c \ubcf8 \uac00\uc774\ub4dc\ub97c \ubaa8\ub378\uc5d0 \ub9de\uac8c \uc6c0\uc9c1\uc785\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Build Bones",src:n(9365).Z,width:"2257",height:"1370"})),(0,o.kt)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 \ub300\ub85c \ubcf8 \uac00\uc774\ub4dc\ub97c \uc6c0\uc9c1\uc600\ub2e4\uba74 ",(0,o.kt)("strong",{parentName:"li"},"Make Bones")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ubcf8\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Build Bones",src:n(17625).Z,width:"831",height:"282"})),(0,o.kt)("li",{parentName:"ol"},"\ubcf8 \uac00\uc774\ub4dc\uc5d0 \ub9de\ucdb0 \ubcf8\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Build Bones",src:n(83229).Z,width:"1114",height:"1366"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build Bones",src:n(79081).Z,width:"1119",height:"717"})),(0,o.kt)("h2",{id:"property"},(0,o.kt)("strong",{parentName:"h2"},"Property")),(0,o.kt)("h3",{id:"selected-bone-as-the-top-level"},"Selected Bone as the top-level"),(0,o.kt)("p",null,"\uc120\ud0dd\ub41c \ubcf8\uc744 \ucd5c\uc0c1\uc704 \ubcf8\uc73c\ub85c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uc120\ud0dd \ud574\uc81c\uc2dc \uc120\ud0dd\ud55c \ubcf8\uc758 \ud558\uc704 \ubcf8\uc73c\ub85c \ubcf8\uc774 \uc0dd\uc131\ub418\uc9c0\ub9cc \uc0dd\uc131\ub418\ub294 \ubcf8\uc758 \ucd5c\uc0c1\uc704 \ubcf8\uc740 \uc0dd\uc131\ub41c \ubcf8 \ub0b4\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Selected Bone as the top-level")," \uc18d\uc131\uc774 \ud65c\uc131\ud654\ub418\uba74, \uc0c8\ub85c \uc0dd\uc131\ub418\ub294 \ubcf8\uc740 \uc120\ud0dd\ub41c \ubcf8\uc744 \ucd5c\uc0c1\uc704 \ubcf8\uc73c\ub85c \uac16\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Selected Bone as the top-level \uc18d\uc131\uc774")," \ube44\ud65c\uc131\ub418\uc5b4 \uc788\ub2e4\uba74, \uc0c8\ub85c \uc0dd\uc131\ub418\ub294 \ubcf8\uc740 \uc120\ud0dd\ud55c \ubcf8\uc758 \ud558\uc704 \ubcf8\uc73c\ub85c \uc124\uc815\ub418\uc9c0\ub9cc, \uc0dd\uc131\ub418\ub294 \ubcf8\uc758 \ucd5c\uc0c1\uc704 \ubcf8\uc740 \uc0dd\uc131\ub41c \ubcf8 \ub0b4\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"editing"},(0,o.kt)("strong",{parentName:"h2"},"Editing")),(0,o.kt)("h3",{id:"symmetry"},(0,o.kt)("strong",{parentName:"h3"},"Symmetry")),(0,o.kt)("p",null,"\ubcf8 \uac00\uc774\ub4dc\ub97c \uc6c0\uc9c1\uc77c \ub54c \ubc18\ub300\ucabd \ub300\uce6d\ub418\ub294 \ubcf8 \uac00\uc774\ub4dc\ub3c4 \ud568\uaed8 \uc6c0\uc9c1\uc774\uac8c \ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"snap-center-bone"},(0,o.kt)("strong",{parentName:"h3"},"Snap Center Bone")),(0,o.kt)("p",null,"\ubcf8 \uad6c\uc870\uc5d0\uc11c \uac00\uc6b4\ub370\uc5d0 \ud574\ub2f9\ud558\ub294 \uc911\uc2ec \ubcf8\uc758 \uac00\uc774\ub4dc\uac00 \uac00\uc6b4\ub370 \ucd95\uc5d0 \uc798 \uc815\ub82c\ub420 \uc218 \uc788\uac8c \uc2a4\ub0c5\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("p",null,"\uc911\uc2ec \ubcf8 \uac00\uc774\ub4dc\uc758 \uc2a4\ub0c5 \uae30\ub2a5\uc744 \ube44\ud65c\uc131\ud654\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"snap-to-pivot-axis"},"Snap To Pivot Axis"),(0,o.kt)("p",null,"\uc911\uc2ec \ubcf8 \uac00\uc774\ub4dc\ub97c \ubaa8\ub378\uc758 \ud53c\ubc97 \uc704\uce58\uc758 \ucd95\uc5d0 \ub9de\ucdb0 \uc2a4\ub0c5\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. "),(0,o.kt)("h3",{id:"snap-to-top-level-bone-axis"},"Snap To Top Level Bone Axis"),(0,o.kt)("p",null,"\uc911\uc2ec \ubcf8 \uac00\uc774\ub4dc\ub97c \uac00\uc7a5 \ucd5c\uc0c1\uc704 \ubcf8\uc758 \ucd95\uc5d0 \ub9de\ucdb0 \uc2a4\ub0c5\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"move-with-child"},(0,o.kt)("strong",{parentName:"h3"},"Move With Child")),(0,o.kt)("p",null,"\uc120\ud0dd\ub41c \ubcf8 \uac00\uc774\ub4dc\uac00 \uc6c0\uc9c1\uc77c \ub54c \ud558\uc704 \ubcf8\ub4e4\ub3c4 \ud568\uaed8 \uc6c0\uc9c1\uc774\uac8c \ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-name"},(0,o.kt)("strong",{parentName:"h3"},"Show Name")),(0,o.kt)("p",null,"\uac01 \ubcf8 \uac00\uc774\ub4dc\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\uac70\ub098 \uc228\uae30\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"basic"},(0,o.kt)("strong",{parentName:"h2"},"Basic")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weight Tool Properties Basic",src:n(38414).Z,width:"853",height:"324"})),(0,o.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-handler"},"Show Handler"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones"},"Show Bones"),(0,o.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"structure"},(0,o.kt)("strong",{parentName:"h2"},"Structure")),(0,o.kt)("p",null,"\ud2b9\uc815\ud55c \ubcf8 \uad6c\uc870\ub97c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ubcf8 \uad6c\uc870\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limb"),": \uc0ac\ub78c\uc774\ub098 \ub3d9\ubb3c\uc758 \ud314\uc774\ub098 \ub2e4\ub9ac\uc640 \uac19\uc740 \ubcf8 \uac00\uc774\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. 3\uac1c\uc758 \ubcf8 \uac00\uc774\ub4dc\uac00 \uc0dd\uc131\ub418\uba70 \uac04\ub2e8\ud55c \ud615\ud0dc\uc758 \uad00\uc808 \uc6c0\uc9c1\uc784\uc744 \ub9cc\ub4e4\ub54c  \uc0ac\uc6a9\ud560\uc218\uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Human"),": \uc778\uac04 \ud615\ud0dc\uc758 \ubcf8 \uac00\uc774\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Quadruped"),": \ub124 \ubc1c\ub85c \uc6c0\uc9c1\uc774\ub294 \ub3d9\ubb3c\uc758 \ubcf8 \uac00\uc774\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"start-building"},"Start Building"),(0,o.kt)("p",null,"\uc124\uc815\ub41c \uad6c\uc870\uc5d0 \ub530\ub77c \ubcf8 \uac00\uc774\ub4dc \uad6c\uc131\uc744 \uc2dc\uc791\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \uc2dc\uc791 \uc2dc \ubcf8 \uac00\uc774\ub4dc\uac00 \ucd9c\ub825\ub418\uba70, \ubcf8 \uac00\uc774\ub4dc\ub97c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ud568\uc73c\ub85c\uc368 \uc704\uce58\ub97c \uc7a1\uc544\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"make-bones"},"Make Bones"),(0,o.kt)("p",null,"\ud604\uc7ac \uad6c\uc131\ub418\uc5b4\uc788\ub294 \ubcf8 \uac00\uc774\ub4dc\ub300\ub85c \uc2e4\uc81c \ubcf8\uc744 \uc0dd\uc131\ud558\ub294\ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"turn90"},"Turn90"),(0,o.kt)("p",null,"\ud604\uc7ac \uad6c\uc131\ub41c \ubcf8 \uac00\uc774\ub4dc\ub97c \ud68c\uc804\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \ub204\ub97c \ub54c\ub9c8\ub2e4 90\ub3c4\ub9cc\ud07c \ud68c\uc804 \ub418\uba70, \ubcf8 \uac00\uc774\ub4dc\uc758 \ucd5c\uc0c1\uc704 \ubcf8 \uac00\uc774\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \ud68c\uc804\uc2dc\ud0b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"cancel"},"Cancel"),(0,o.kt)("p",null,"\ubcf8 \uac00\uc774\ub4dc \ud3b8\uc9d1\ud558\ub294 \uc0c1\ud0dc\ub97c \ucde8\uc18c\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/qdZetzd0adw",frameborder:"0",allowfullscreen:""})))}g.isMDXComponent=!0},60034:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones-7b8dfaaa7a3af2ecf1c4c4db6de282c9.png"},9365:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_GuideMove-e127ef35b1273d913abc5dfe3f4fe4e0.png"},17625:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_MakeBones-2b5267386ffd4b8ae770c0d4b676e8c1.png"},79081:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_Properties-eb4eda4b2dce0d32b1d100e7051b446b.png"},83229:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_Result-4be10e0fd7b855beb50d5b4d566a249f.png"},80331:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_StartBuilding-f20540255c834aedf9948b17450365ac.png"},24246:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_BuildBones_Structure-985c25593eed307b0ff1fd54f06618ea.png"},38414:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Rigging_WeightBrush_Properties_Basic-673835b8412dee8a5a082c2edefe20c7.png"}}]);