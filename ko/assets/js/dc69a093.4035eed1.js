"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=o,k=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),o=n(6010),i=n(3438),a=n(9960),l=n(3919),c=n(5999);const m="cardContainer_fWXF",p="cardTitle_rnsV",s="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",m)},n)}function u(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",s),title:a},a))}function k(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},9036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),i=n(2991);const a={sidebar_position:2,slug:"/modifier"},l="\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/index",id:"editable-mesh/modeling-mode/modeling-mode-modifier/index",title:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c",description:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c\uc740 \ube44\ud30c\uad34\uc801 \ubc29\uc2dd\uc73c\ub85c \uc6d0\ubcf8 \ubaa8\ub378\uc744 \ubcc0\ud615\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc6d0\ubcf8 \ubaa8\ub378\uc744 \uadf8\ub300\ub85c \ubcf4\uc874\ud558\uba74\uc11c\ub3c4 \ubaa8\ub378\uc5d0 \ubcc0\ud615\uc744 \uac00\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud6a8\uc728\uc801\uc778 \ubaa8\ub378\ub9c1\uc744 \ud560 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-modifier/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modifier",permalink:"/ko/docs/modifier",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/modifier"},sidebar:"docs",previous:{title:"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc",permalink:"/ko/docs/modeling-mode"},next:{title:"Bend \ubaa8\ub514\ud30c\uc774\uc5b4",permalink:"/ko/docs/modeling/bend-modifier"}},m={},p=[{value:"<strong>\uc778\ud130\ud398\uc774\uc2a4</strong>",id:"\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2a4\ud0dd",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc2a4\ud0dd",level:2},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc774\ub984 \ubcc0\uacbd",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc774\ub984-\ubcc0\uacbd",level:3},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \ube44\ud65c\uc131\ud654",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ube44\ud65c\uc131\ud654",level:3},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc704\uce58 \ubcc0\uacbd",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc704\uce58-\ubcc0\uacbd",level:3},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \ud569\uce58\uae30",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ud569\uce58\uae30",level:2},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \ucd94\uac00",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ucd94\uac00",level:2},{value:"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc0ad\uc81c",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc0ad\uc81c",level:2},{value:"<strong>\ubaa8\ub514\ud30c\uc774\uc5b4 \uc885\ub958</strong>",id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc885\ub958",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc2dc\uc2a4\ud15c"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2dc\uc2a4\ud15c"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ube44\ud30c\uad34\uc801 \ubc29\uc2dd\uc73c\ub85c \uc6d0\ubcf8 \ubaa8\ub378\uc744 \ubcc0\ud615"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc6d0\ubcf8 \ubaa8\ub378\uc744 ",(0,o.kt)("strong",{parentName:"p"},"\uadf8\ub300\ub85c \ubcf4\uc874\ud558\uba74\uc11c\ub3c4 \ubaa8\ub378\uc5d0 \ubcc0\ud615"),"\uc744 \uac00\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud6a8\uc728\uc801\uc778 \ubaa8\ub378\ub9c1\uc744 \ud560 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc778\ud130\ud398\uc774\uc2a4"},(0,o.kt)("strong",{parentName:"h2"},"\uc778\ud130\ud398\uc774\uc2a4")),(0,o.kt)("p",null,"[\ubc84\ud2bc\uacfc \uad6c\uc131 \uc624\ubc84\ub808\uc774 \uc774\ubbf8\uc9c0]"),(0,o.kt)("h2",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc2a4\ud0dd"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2a4\ud0dd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub514\ud30c\uc774\uc5b4"),"\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc2a4\ud0dd"),"\uc774\ub77c\ub294 \ub204\uc801\ub41c \ub0b4\uc5ed\uc744 \ud1b5\ud574 \uc5ec\ub7ec \ubaa8\ub514\ud30c\uc774\uc5b4\uc5d0 \uc758\ud55c ",(0,o.kt)("strong",{parentName:"p"},"\ud3b8\uc9d1 \uacb0\uacfc\ub97c \ub204\uc801"),"\uc2dc\ud0ac \uc218 \uc788\uc73c\uba70, \ud2b9\uc815 \ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \ucf1c\uace0 \ub04c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc774\ub984-\ubcc0\uacbd"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc774\ub984 \ubcc0\uacbd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub514\ud30c\uc774\uc5b4\uc758 \uc774\ub984"),"\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uadf8 \uae30\ub2a5\uc5d0 \ub9de\uac8c \ub418\uc5b4 \uc788\uc73c\uba70, ",(0,o.kt)("strong",{parentName:"p"},"\ud544\uc694\uc5d0 \ub530\ub77c \ubcc0\uacbd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4\uc758 \uc774\ub984 \ubd80\ubd84\uc744 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ub354\ube14\ud074\ub9ad")),"\ud558\uc5ec \uc774\ub984\uc744 \ubcc0\uacbd\ud55c \ud6c4 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Enter")),"\ub97c \ub204\ub974\uac70\ub098, \ud14d\uc2a4\ud2b8 \uc785\ub825 \ubd80\ubd84\uc744 \uc81c\uc678\ud55c \uc601\uc5ed\uc744 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud574\uc11c \uc774\ub984 \ubcc0\uacbd\uc744 \uc644\ub8cc\ud569\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ud301",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \ucd94\uac00\ud55c \ubaa9\uc801\uc744 \uc774\ub984\uc73c\ub85c \ubcc0\uacbd\ud558\uba74, \uc791\uc5c5\ud560 \ub54c \ubaa8\ub514\ud30c\uc774\uc5b4 \uc18d\uc131\uc744 \ud655\uc778\ud560 \ud544\uc694 \uc5c6\uc774 \ubaa9\uc801\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n","[\ubbf8\ub7ec\uc758 \ucd95\uc744 \ud45c\uc2dc\ud55c \uc774\ubbf8\uc9c0][FFD \ub97c \ub123\uc740 \ubaa9\uc801\uc744 \uc368\ub123\uc740 \uc774\ubbf8\uc9c0]")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ube44\ud65c\uc131\ud654"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \ube44\ud65c\uc131\ud654"),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\uc0dd\uc131 \uc989\uc2dc \ud65c\uc131\ud654"),"\ub429\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\ube44\ud65c\uc131\ud654"),"\ub97c \ud558\ub824\uba74 \ubaa8\ub514\ud30c\uc774\uc5b4 \uc774\ub984 \uc606 ",(0,o.kt)("strong",{parentName:"p"},"\uccb4\ud06c\ubc15\uc2a4\ub97c \ud574\uc81c"),"\ud558\uc5ec \ube44\ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc704\uce58-\ubcc0\uacbd"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc704\uce58 \ubcc0\uacbd"),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \uc6d0\ud558\ub294 \uc704\uce58\ub85c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ud558\uc5ec \uc704\uce58\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ubaa8\ub514\ud30c\uc774\uc5b4\ub294 \uc6d0\ubcf8 \uba54\uc2dc \uc544\ub798\ub85c \uc774\ub3d9\uc2dc\ud0ac \uc218 \uc5c6\uace0, \uc6d0\ubcf8 \uba54\uc2dc\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud560 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ud569\uce58\uae30"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \ud569\uce58\uae30"),(0,o.kt)("p",null,"[\ubc84\ud2bc \uc774\ubbf8\uc9c0]"),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4 \ud569\uce58\uae30 \ubc84\ud2bc\uc740 \ud604\uc7ac \uc801\uc6a9\ub41c \ubaa8\ub514\ud30c\uc774\uc5b4\uc758 \uacb0\uacfc\ub97c \uc6d0\ubcf8 \uba54\uc2dc\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4. \ud569\uce60 \ub54c\ub294 \uc120\ud0dd\ub41c \ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \uae30\uc900\uc73c\ub85c, \uc544\ub798\uc5d0 \uc788\ub294 \ubaa8\ub514\ud30c\uc774\uc5b4\ub4e4\uc774 \ud569\uccd0\uc9d1\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \ud569\uce60 \uacbd\uc6b0, \uc6d0\ubcf8 \uba54\uc2dc\uc5d0 \ubc18\uc601\ub418\uba70 \ubaa8\ub514\ud30c\uc774\uc5b4\ub294 \uc81c\uac70\ub429\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\uc8fc\uc758",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\ud574\ub2f9 \uae30\ub2a5\uc740 \ub418\ub3cc\ub9ac\uae30\uac00 \uc5b4\ub824\uc6b0\uba70, \uc774\ub85c \uc778\ud574 \uc791\uc5c5 \ud6a8\uc728\uc774 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\ucd94\uac00"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \ucd94\uac00"),(0,o.kt)("p",null,"[\ubc84\ud2bc \uc774\ubbf8\uc9c0]"),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4 \ucd94\uac00 \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc0ad\uc81c"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc0ad\uc81c"),(0,o.kt)("p",null,"[\ubc84\ud2bc \uc774\ubbf8\uc9c0]"),(0,o.kt)("p",null,"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc0ad\uc81c \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc120\ud0dd\ud55c \ubaa8\ub514\ud30c\uc774\uc5b4\ub97c \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ub9cc\uc57d \uc0ad\uc81c\uac00 \uc544\ub2cc \ube44\ud65c\uc131\ud654\ub97c \uc6d0\ud55c\ub2e4\uba74, \uccb4\ud06c\ubc15\uc2a4\ub97c \ud574\uc81c\ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ubaa8\ub514\ud30c\uc774\uc5b4-\uc885\ub958"},(0,o.kt)("strong",{parentName:"h2"},"\ubaa8\ub514\ud30c\uc774\uc5b4 \uc885\ub958")),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);