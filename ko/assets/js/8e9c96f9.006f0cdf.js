"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(n),h=a,d=g["".concat(p,".").concat(h)]||g[h]||u[h]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={slug:"/rigging/weight-tool",sidebar_position:1},i="Weight \ud234",o={unversionedId:"editable-mesh/rigging-mode/weight-tool",id:"editable-mesh/rigging-mode/weight-tool",title:"Weight \ud234",description:"Weight \ud234\uc740 \uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/weight-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-tool",permalink:"/ko/docs/rigging/weight-tool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/rigging/weight-tool",sidebar_position:1},sidebar:"docs",previous:{title:"\ub9ac\uae45 \ubaa8\ub4dc",permalink:"/ko/docs/rigging-mode"},next:{title:"Weight Brush \ud234",permalink:"/ko/docs/rigging/weight-brush-tool"}},p={},s=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Set Weight",id:"set-weight",level:3},{value:"Scale Weight",id:"scale-weight",level:3},{value:"Scale Weight \uc608\uc2dc",id:"scale-weight-\uc608\uc2dc",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Animation",id:"apply-animation",level:3},{value:"\ubbf8\ub9ac \uc815\ud574\uc9c4 \uc6e8\uc774\ud2b8 \ubc84\ud2bc",id:"\ubbf8\ub9ac-\uc815\ud574\uc9c4-\uc6e8\uc774\ud2b8-\ubc84\ud2bc",level:3},{value:"Apply Weight",id:"apply-weight",level:3},{value:"Scale Weight",id:"scale-weight-1",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],c={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weight-\ud234"},"Weight \ud234"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Weight \ud234"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uc52c")," \ub610\ub294 ",(0,a.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed"),"\uc5d0\uc11c \uc6d0\ud558\ub294 \ubcf8\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("admonition",{parentName:"li",title:"\ud301",type:"tip"},(0,a.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad"},(0,a.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad"))),(0,a.kt)("p",{parentName:"admonition"},"\ub2e8\ucd95\ud0a4\ub97c \ud1b5\ud574 ",(0,a.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ubcf8\uc744 \uc52c\uc5d0\uc11c \ubc14\ub85c \uc120\ud0dd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Weight \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc120\ud0dd\ud55c \ubcf8\uacfc \uc5f0\uacb0\ud560 \ubc84\ud14d\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubc84\ud14d\uc2a4\uac00 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"Apply Weight \uc18d\uc131 \uc870\uc808"),"\ud558\uac70\ub098 ",(0,a.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \uc6e8\uc774\ud2b8 \uac12 \ubc84\ud2bc"),"\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\uac00 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc18d\uc131"},(0,a.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,a.kt)("h3",{id:"set-weight"},"Set Weight"),(0,a.kt)("p",null,"\ud560\ub2f9\ud560 \uc6e8\uc774\ud2b8 \uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"scale-weight"},"Scale Weight"),(0,a.kt)("p",null,"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc758 \uc6e8\uc774\ud2b8\uc5d0 \uacf1\ud574\uc904 \uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"scale-weight-\uc608\uc2dc"},"Scale Weight \uc608\uc2dc"),(0,a.kt)("h3",{id:"select"},(0,a.kt)("strong",{parentName:"h3"},"Select")),(0,a.kt)("p",null,"\ubc84\ud14d\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"backface-select"},"Backface Select"),(0,a.kt)("p",null,"\ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\uace0 \uc788\ub294 \ubc84\ud14d\uc2a4\uc758 \uc120\ud0dd \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \ubc84\ud14d\uc2a4\uac00 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \ubc84\ud14d\uc2a4\ub3c4 \ud568\uaed8 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,a.kt)("p",null,"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c \ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \ubc84\ud14d\uc2a4\ub9cc \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \ubc84\ud14d\uc2a4\ub3c4 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \ubc84\ud14d\uc2a4\ub294 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"basic"},(0,a.kt)("strong",{parentName:"h3"},"Basic")),(0,a.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-handler"},"Show Handler"),(0,a.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-bones"},"Show Bones"),(0,a.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,a.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,a.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"apply-animation"},"Apply Animation"),(0,a.kt)("h3",{id:"\ubbf8\ub9ac-\uc815\ud574\uc9c4-\uc6e8\uc774\ud2b8-\ubc84\ud2bc"},"\ubbf8\ub9ac \uc815\ud574\uc9c4 \uc6e8\uc774\ud2b8 \ubc84\ud2bc"),(0,a.kt)("p",null,"\uc120\ud0dd\ub41c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"apply-weight"},"Apply Weight"),(0,a.kt)("p",null,"\ud560\ub2f9\ud560 \uc6e8\uc774\ud2b8 \uac12\uc744 \uc124\uc815\ud558\uac70\ub098 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"scale-weight-1"},"Scale Weight"),(0,a.kt)("p",null,"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc758 \uc6e8\uc774\ud2b8\uc5d0 \uac12\uc744 \uacf1\ud574\uc8fc\uac70\ub098 \uacf1\ud574\uc904 \uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,a.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")))}g.isMDXComponent=!0}}]);