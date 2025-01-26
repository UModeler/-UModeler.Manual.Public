"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=g(n),c=i,u=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var g=2;g<a;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(67294),i=n(86010),a=n(53438),o=n(39960),l=n(13919),s=n(95999);const g="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",g)},n)}function c(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function u(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(c,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(c,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},10536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(52991);const o={slug:"/rigging/guide",sidebar_position:1},l="\ub9ac\uae45 \ubaa8\ub4dc \uac00\uc774\ub4dc",s={unversionedId:"editable-mesh/rigging-mode/rigging-guide",id:"editable-mesh/rigging-mode/rigging-guide",title:"\ub9ac\uae45 \ubaa8\ub4dc \uac00\uc774\ub4dc",description:"Rigging Mode Guide",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/rigging-guide.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/guide",permalink:"/ko/docs/rigging/guide",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/rigging-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/rigging/guide",sidebar_position:1},sidebar:"docs",previous:{title:"\ub9ac\uae45 \ubaa8\ub4dc",permalink:"/ko/docs/rigging-mode"},next:{title:"Weight \ud234",permalink:"/ko/docs/rigging/weight-tool"}},g={},p=[{value:"<strong>\ub9ac\uae45(Rigging)\uc774\ub780?</strong>",id:"\ub9ac\uae45rigging\uc774\ub780",level:2},{value:"<strong>\uc65c \ub9ac\uae45\uc774 \ud544\uc694\ud55c\uac00?</strong>",id:"\uc65c-\ub9ac\uae45\uc774-\ud544\uc694\ud55c\uac00",level:2},{value:"<strong>\ub9ac\uae45\uc744 \uc9c4\ud589\ud558\ub294 \uc21c\uc11c</strong>",id:"\ub9ac\uae45\uc744-\uc9c4\ud589\ud558\ub294-\uc21c\uc11c",level:2},{value:"1. \ubaa8\ub378\ub9c1\uacfc UV \uc5b8\ub7a9\uc774 \ub05d\ub09c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc900\ube44",id:"1-\ubaa8\ub378\ub9c1\uacfc-uv-\uc5b8\ub7a9\uc774-\ub05d\ub09c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc900\ube44",level:3},{value:"2. \ub9ac\uae45 \ubaa8\ub4dc \uc9c4\uc785",id:"2-\ub9ac\uae45-\ubaa8\ub4dc-\uc9c4\uc785",level:3},{value:"3. \ubcf8 \uc0dd\uc131",id:"3-\ubcf8-\uc0dd\uc131",level:3},{value:"4. \uc2a4\ud0a4\ub2dd \uc9c4\ud589",id:"4-\uc2a4\ud0a4\ub2dd-\uc9c4\ud589",level:3},{value:"5. \uacb0\uacfc \ud655\uc778",id:"5-\uacb0\uacfc-\ud655\uc778",level:3}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ub9ac\uae45-\ubaa8\ub4dc-\uac00\uc774\ub4dc"},"\ub9ac\uae45 \ubaa8\ub4dc \uac00\uc774\ub4dc"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rigging Mode Guide",src:n(87466).Z,width:"2447",height:"887"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UModeler X"),"\uc758 ",(0,i.kt)("strong",{parentName:"p"},"\ub9ac\uae45 \ubaa8\ub4dc"),"\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc704\ud55c \ubcf8 \ucd94\uac00, \ud3b8\uc9d1 \ubc0f \uc2a4\ud0a4\ub2dd\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \ubaa8\ub4dc\uc785\ub2c8\ub2e4.\n\uc774 \ubaa8\ub4dc\uc5d0\uc11c\ub294 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\uace0 \uc6e8\uc774\ud2b8 \ud3b8\uc9d1\uc744 \ud1b5\ud574 \ubaa8\ub378\uc758 \uc6c0\uc9c1\uc784\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\ub9ac\uae45rigging\uc774\ub780"},(0,i.kt)("strong",{parentName:"h2"},"\ub9ac\uae45(Rigging)\uc774\ub780?")),(0,i.kt)("p",null,"\ub9ac\uae45\uc740 3D \ubaa8\ub378\uc5d0 ",(0,i.kt)("strong",{parentName:"p"},"\uace8\uaca9(\ubf08\ub300)"),"\uc744 \uc0dd\uc131\ud558\uace0, \ubaa8\ub378\uc774 \uace8\uaca9 \uc6c0\uc9c1\uc784\uc5d0 \ub530\ub77c ",(0,i.kt)("strong",{parentName:"p"},"\uc5b4\ub5bb\uac8c \ubcc0\ud615"),"\ub418\ub294\uc9c0 ",(0,i.kt)("strong",{parentName:"p"},"\uc124\uc815\ud558\ub294 \uacfc\uc815"),"\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8(Weight)"),"\ub77c\ub294 \uac00\uc911\uce58 \uac1c\ub150\uc774 \uc0ac\uc6a9\ub418\uba70, \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc744 \ubc84\ud14d\uc2a4\uc5d0 \uc5bc\ub9c8\ub098 \ubc18\uc601\ud558\uc5ec \uc6c0\uc9c1\uc774\uac8c \ud560\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac04\ub2e8\ud788 \ub9d0\ud558\uba74, \ub9ac\uae45\uc740 3D \ubaa8\ub378\uc5d0\uac8c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \ubf08\ub300\ub97c \ub9cc\ub4e4\uace0, \ubf08\ub300\uac00 \uc6c0\uc9c1\uc77c \ub54c \ubc84\ud14d\uc2a4\uac00 \uc6e8\uc774\ud2b8 \uac12\uc744 \uae30\ubc18\uc73c\ub85c \ud568\uaed8 \uc6c0\uc9c1\uc774\ub3c4\ub85d \uc5f0\uacb0\uc2dc\ud0a4\ub294 \uacfc\uc815\uc774\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"\uc6e8\uc774\ud2b8weight"},(0,i.kt)("strong",{parentName:"h2"},"\uc6e8\uc774\ud2b8(Weight)")),(0,i.kt)("p",{parentName:"admonition"},"\ub9ac\uae45 \ubaa8\ub4dc\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"\uc6e8\uc774\ud2b8(Weight)"),"\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uac00\uc911\uce58"),"\ub97c \uc758\ubbf8\ud558\uba70, \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc744 \ubc84\ud14d\uc2a4\uc5d0 \uc5bc\ub9c8\ub098 \ubc18\uc601\ud560\uc9c0 \uacb0\uc815\ud558\ub294 \uac00\uc911\uce58 \uac12\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Rigging Mode Weight",src:n(76651).Z,width:"2379",height:"1015"})),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\uc67c\ucabd\ubd80\ud130 \uc6e8\uc774\ud2b8 \uac12\uc774 0.0, 0.5, 1.0")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\uac12\uc758 \ubc94\uc704\ub294 0.0 ~ 1.0"),"\uc73c\ub85c, 0.0\uc77c \uacbd\uc6b0 \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc774 \ud574\ub2f9 \ubc84\ud14d\uc2a4\uc5d0 \uc804\ud600 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc73c\uba70, 1.0\uc77c \uacbd\uc6b0 \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc774 \ud574\ub2f9 \ubc84\ud14d\uc2a4\uc5d0 \uc644\uc804\ud788 \uc601\ud5a5\uc744 \uc90d\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 3D \ubaa8\ub378\uc758 \uc6c0\uc9c1\uc784\uc744 \uc870\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc65c-\ub9ac\uae45\uc774-\ud544\uc694\ud55c\uac00"},(0,i.kt)("strong",{parentName:"h2"},"\uc65c \ub9ac\uae45\uc774 \ud544\uc694\ud55c\uac00?")),(0,i.kt)("p",null,"\ub9ac\uae45 \uc5c6\uc774\ub294 3D \ubaa8\ub378\uc740 \uc6c0\uc9c1\uc774\uc9c0 \uc54a\ub294 \uc0c1\ud0dc\ub85c\ub9cc \uc874\uc7ac\ud558\uac8c \ub429\ub2c8\ub2e4. \uc989, \uc6c0\uc9c1\uc774\uc9c0 \uc54a\ub294 \uc870\uac01\uc0c1 \uac19\uc740 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9ac\uae45\uc744 \ud1b5\ud574 \uce90\ub9ad\ud130\ub098 \uc6c0\uc9c1\uc5ec\uc57c \ud558\ub294 \uc624\ube0c\uc81d\ud2b8\ub97c \uc720\uc5f0\ud558\uac8c \uc6c0\uc9c1\uc77c \uc218 \uc788\uac8c \ud558\uc5ec \uc560\ub2c8\uba54\uc774\uc158\uc744 \ub9cc\ub4e4 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"\uc2a4\ud0dc\ud2f1-\uba54\uc2dc\uc640-\uc2a4\ud0a8\ub4dc-\uba54\uc2dc"},(0,i.kt)("strong",{parentName:"h2"},"\uc2a4\ud0dc\ud2f1 \uba54\uc2dc\uc640 \uc2a4\ud0a8\ub4dc \uba54\uc2dc")),(0,i.kt)("p",{parentName:"admonition"},"\uc720\ub2c8\ud2f0\uc5d0\uc11c 3D \ubaa8\ub378\uc744 \uc81c\uc791\ud558\uc5ec \uc0ac\uc6a9\ud560 \ub54c, \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \uba54\uc2dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\uc2a4\ud0dc\ud2f1 \uba54\uc2dc(Static Mesh):"),"\n",(0,i.kt)("strong",{parentName:"p"},"\uc2a4\ud0dc\ud2f1 \uba54\uc2dc"),"\ub294 \ubcc0\ud615\ub418\uc9c0 \uc54a\ub294 \uc624\ube0c\uc81d\ud2b8\ub85c, \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc801\uc6a9\ud558\uc9c0 \uc54a\ub294 \uba54\uc2dc\uc785\ub2c8\ub2e4. \uc8fc\ub85c \ubc30\uacbd, \uac74\ubb3c, \uac00\uad6c \ub4f1 \uc6c0\uc9c1\uc774\uc9c0 \uc54a\ub294 \uac1d\uccb4\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\ubb3c\ub860 '\ubcf4\ud3b8\uc801'\uc73c\ub85c \uc2a4\ud0dc\ud2f1 \uba54\uc2dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uace0, \uac00\uad6c\uc640 \uac74\ubb3c\uc774\ub77c\ub3c4 \uc624\ube0c\uc81d\ud2b8\ub0b4\uc5d0\uc11c \ubcc0\ud615\uc774 \ud544\uc694\ud558\ub2e4\uba74 \uc2a4\ud0a8\ub4dc \uba54\uc2dc\ub85c \uc81c\uc791\ud569\ub2c8\ub2e4. ")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\uc2a4\ud0a8\ub4dc \uba54\uc2dc(Skinned Mesh):"),"\n\uc2a4\ud0a8\ub4dc \uba54\uc2dc\ub294 \ub9ac\uae45 \uacfc\uc815\uc744 \uac70\uccd0 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\ub294 3D \ubaa8\ub378\uc785\ub2c8\ub2e4. \uce90\ub9ad\ud130\ub098 \ub3d9\ubb3c \ub4f1 \uc6c0\uc9c1\uc774\ub294 \uac1d\uccb4\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc2a4\ud0a8\ub4dc \uba54\uc2dc\ub294 \ubcf8\uacfc \uc6e8\uc774\ud2b8 \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc84\ud14d\uc2a4\uac00 \uc6c0\uc9c1\uc774\ub3c4\ub85d \uc5f0\uacb0\ub418\uc5b4 \uc788\uc5b4, \uc560\ub2c8\uba54\uc774\uc158\uc744 \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{parentName:"admonition",title:"\ud301",type:"tip"},(0,i.kt)("h2",{parentName:"admonition",id:"\uc720\ub2c8\ud2f0\uc5d0\uc11c-\uc2a4\ud0dc\ud2f1-\uba54\uc2dc\uc640-\uc2a4\ud0a8\ub4dc-\uba54\uc2dc\ub97c-\ud655\uc778\ud558\ub294-\ubc29\ubc95"},(0,i.kt)("strong",{parentName:"h2"},"\uc720\ub2c8\ud2f0\uc5d0\uc11c \uc2a4\ud0dc\ud2f1 \uba54\uc2dc\uc640 \uc2a4\ud0a8\ub4dc \uba54\uc2dc\ub97c \ud655\uc778\ud558\ub294 \ubc29\ubc95")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"3D \ubaa8\ub378\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud558\uba74, \uc778\uc2a4\ud399\ud130 \ucc3d\uc5d0 \ubaa8\ub378\uc758 \uc815\ubcf4\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mesh Filter \ucef4\ud3ec\ub10c\ud2b8"),"\uc640 ",(0,i.kt)("strong",{parentName:"li"},"Mesh Renderer \ucef4\ud3ec\ub10c\ud2b8"),"\uac00 \uc788\ub294 \uacbd\uc6b0:\n",(0,i.kt)("img",{alt:"Static Mesh",src:n(1970).Z,width:"977",height:"483"}),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\uc2a4\ud0dc\ud2f1 \uba54\uc2dc\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc774 \ub450 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uba54\uc2dc\uc758 \uc815\ubcf4\uc640 \ub80c\ub354\ub9c1\uc5d0 \uad00\ud55c \uc124\uc815\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skinned Mesh Renderer \ucef4\ud3ec\ub10c\ud2b8"),"\uac00 \uc788\ub294 \uacbd\uc6b0:\n",(0,i.kt)("img",{alt:"Skinned Mesh",src:n(74494).Z,width:"967",height:"580"}),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\uc2a4\ud0a8\ub4dc \uba54\uc2dc\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc9c0\uc6d0\ud558\uba70, \ubcf8\uacfc \uc6e8\uc774\ud2b8 \uac12\uc5d0 \ub530\ub77c \uba54\uc2dc\ub97c \ubcc0\ud615\uc2dc\ud0a4\ub294 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")))))),(0,i.kt)("p",{parentName:"admonition"},"\uc774\ub7ec\ud55c \ubc29\ubc95\uc73c\ub85c \uc720\ub2c8\ud2f0\uc5d0\uc11c \uc2a4\ud0dc\ud2f1 \uba54\uc2dc\uc640 \uc2a4\ud0a8\ub4dc \uba54\uc2dc\ub97c \uad6c\ubd84\ud558\uace0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\ub9ac\uae45\uc744-\uc9c4\ud589\ud558\ub294-\uc21c\uc11c"},(0,i.kt)("strong",{parentName:"h2"},"\ub9ac\uae45\uc744 \uc9c4\ud589\ud558\ub294 \uc21c\uc11c")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\ubaa8\ub378\ub9c1"),"\uacfc ",(0,i.kt)("strong",{parentName:"li"},"UV \uc5b8\ub7a9"),"\uc774 \ub05d\ub09c ",(0,i.kt)("strong",{parentName:"li"},"UModeler X \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc900\ube44\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\ub9ac\uae45 \ubaa8\ub4dc"),"\uc5d0 \uc9c4\uc785\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\ubcf8\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},"\uc6e8\uc774\ud2b8 \uad00\ub828 \ud234\uc744 \uc774\uc6a9\ud574 ",(0,i.kt)("strong",{parentName:"li"},"\uc2a4\ud0a4\ub2dd\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},"\ubcf8\uc744 \uc6c0\uc9c1\uc774\uac70\ub098 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc801\uc6a9\ud558\uc5ec ",(0,i.kt)("strong",{parentName:"li"},"\uacb0\uacfc\ub97c \ud655\uc778"),"\ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uc544\ub798\ub294 \uac01 \uc21c\uc11c\uc5d0 \ub300\ud55c \uc124\uba85\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"1-\ubaa8\ub378\ub9c1\uacfc-uv-\uc5b8\ub7a9\uc774-\ub05d\ub09c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc900\ube44"},"1. \ubaa8\ub378\ub9c1\uacfc UV \uc5b8\ub7a9\uc774 \ub05d\ub09c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc900\ube44"),(0,i.kt)("p",null,"\ubaa8\ub378\ub9c1\uacfc UV \uc5b8\ub7a9\uc740 \ub9ac\uae45 \uc791\uc5c5\uc5d0 \uc55e\uc11c \ud544\uc218\uc801\uc73c\ub85c \uc644\ub8cc\ud574\uc57c \ud558\ub294 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \ubaa8\ub378\ub9c1\uc740 3D \ubaa8\ub378\uc758 \ud615\ud0dc\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc774\uba70, UV \uc5b8\ub7a9\uc740 3D \ubaa8\ub378\uc758 \ud45c\uba74\uc5d0 \ud14d\uc2a4\ucc98\ub97c \uc62c\ubc14\ub974\uac8c \ub9e4\ud551\ud558\uae30 \uc704\ud55c \uacfc\uc815\uc785\ub2c8\ub2e4. \uc774 \ub450 \uacfc\uc815\uc774 \uc644\ub8cc\ub41c \ubaa8\ub378\ub9cc\uc774 \ub9ac\uae45 \uc791\uc5c5\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798 \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc5ec \ubaa8\ub378\ub9c1 \ubaa8\ub4dc\uc640 UV \uc5d0\ub514\ud130\uc5d0 \ub300\ud574 \ud655\uc778\ud574\ubcf4\uc138\uc694.")),(0,i.kt)(a.Z,{items:[{type:"link",label:"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc",href:"/docs/modeling-mode"},{type:"link",label:"UV \uc5d0\ub514\ud130",href:"/docs/uv-editor"}],mdxType:"DocCardList"}),(0,i.kt)("h3",{id:"2-\ub9ac\uae45-\ubaa8\ub4dc-\uc9c4\uc785"},"2. \ub9ac\uae45 \ubaa8\ub4dc \uc9c4\uc785"),(0,i.kt)("p",null,"\ubaa8\ub378\ub9c1\uacfc UV \uc5b8\ub7a9\uc774 \uc644\ub8cc\ub418\uc5c8\ub2e4\uba74 \ub9ac\uae45 \ubaa8\ub4dc\uc5d0 \uc9c4\uc785\ud569\ub2c8\ub2e4. \ub9ac\uae45 \ubaa8\ub4dc\ub294 \ubcf8 \uc0dd\uc131, \uc6e8\uc774\ud2b8 \ud3b8\uc9d1 \ub4f1 \ub9ac\uae45\uc5d0 \ud544\uc694\ud55c \ub2e4\uc591\ud55c \ud234\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"3-\ubcf8-\uc0dd\uc131"},"3. \ubcf8 \uc0dd\uc131"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ubcf8"),"\uc740 3D \ubaa8\ub378\uc758 \uc6c0\uc9c1\uc784\uc744 \uc81c\uc5b4\ud558\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ubf08\ub300 \uc5ed\ud560"),"\uc744 \ud569\ub2c8\ub2e4. \ubcf8\uc744 \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc5d0\uc11c\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ubcf8\uc758 \uc704\uce58"),"\uc640 ",(0,i.kt)("strong",{parentName:"p"},"\ubcf8 \uac04\uc758 \uc5f0\uacb0 \uad6c\uc870"),"\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UModeler X"),"\ub294 \uc774\ub7ec\ud55c \uacfc\uc815\uc744 \uc27d\uac8c \uc9c4\ud589\ud558\uac8c \ub3c4\uc640\uc8fc\ub294 ",(0,i.kt)("strong",{parentName:"p"},"Build Bones \ud234"),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ud234\uc744 \uc0ac\uc6a9\ud558\uba74 \uc6d0\ud558\ub294 \ud615\ud0dc\uc758 \ubcf8\uc758 \uc5f0\uacb0 \uad6c\uc870\ub97c \ube60\ub974\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(a.Z,{items:[{type:"link",label:"Build Bones \ud234",href:"/docs/rigging/build-bones-tool"}],mdxType:"DocCardList"}),(0,i.kt)("p",null,"\ub610\ud55c, \uc774\ubbf8 \uc0dd\uc131\ub41c \ubcf8\uc744 \uc218\uc815\ud558\uac70\ub098 \ucd94\uac00\ud558\ub294 \ub4f1\uc758 \ud3b8\uc9d1\uc744 \ud560 \uc218 \uc788\ub294 ",(0,i.kt)("strong",{parentName:"p"},"Edit Bones \ud234"),"\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)(a.Z,{items:[{type:"link",label:"Edit Bones \ud234",href:"/docs/rigging/edit-bones-tool"}],mdxType:"DocCardList"}),(0,i.kt)("h3",{id:"4-\uc2a4\ud0a4\ub2dd-\uc9c4\ud589"},"4. \uc2a4\ud0a4\ub2dd \uc9c4\ud589"),(0,i.kt)("p",null,"\uc2a4\ud0a4\ub2dd\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\ubcf8\uacfc \ubc84\ud14d\uc2a4\ub97c \uc5f0\uacb0\ud558\ub294 \uacfc\uc815"),"\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c\ub294 \uac01 \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\uc5ec, \ubcf8\uc758 \uc6c0\uc9c1\uc784\uc774 \ud574\ub2f9 \ubc84\ud14d\uc2a4\uc5d0 \uc5bc\ub9c8\ub098 \uc601\ud5a5\uc744 \ubbf8\uce60\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc6e8\uc774\ud2b8 \ud3b8\uc9d1 \ud234\uc744 \uc774\uc6a9\ud558\uba74 \uc774 \uacfc\uc815\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6e8\uc774\ud2b8\ub97c \ud3b8\uc9d1\ud560 \uc218 \uc788\ub294 \ud234\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.")),(0,i.kt)(a.Z,{items:[{type:"link",label:"Weight \ud234",href:"/docs/rigging/weight-tool"},{type:"link",label:"Weight Brush \ud234",href:"/docs/rigging/weight-brush-tool"}],mdxType:"DocCardList"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc6e8\uc774\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \ud560\ub2f9\ud558\uac70\ub098 \ube60\ub974\uace0 \ud3b8\ud558\uac8c \ud560\ub2f9\ud560 \uc218 \uc788\ub294 \ud234\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.")),(0,i.kt)(a.Z,{items:[{type:"link",label:"Weight Transfer \ud234",href:"/docs/rigging/weight-transfer-tool"},{type:"link",label:"Auto Weight \ud234",href:"/docs/rigging/auto-weight-tool"},{type:"link",label:"Envelope \ud234",href:"/docs/rigging/envelope-tool"}],mdxType:"DocCardList"}),(0,i.kt)("h3",{id:"5-\uacb0\uacfc-\ud655\uc778"},"5. \uacb0\uacfc \ud655\uc778"),(0,i.kt)("p",null,"\ub9ac\uae45 \uc791\uc5c5\uc758 \ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\ub294 \ubcf8\uc744 \uc6c0\uc9c1\uc774\uac70\ub098 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc801\uc6a9\ud558\uc5ec \uacb0\uacfc\ub97c \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub9ac\uae45 \uc791\uc5c5\uc774 \uc62c\ubc14\ub974\uac8c \uc218\ud589\ub418\uc5c8\ub294\uc9c0, \uc6d0\ud558\ub294 \uc6c0\uc9c1\uc784\uc774 \uc798 \uad6c\ud604\ub418\uc5c8\ub294\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9cc\uc57d \uc6d0\ud558\ub294 \uacb0\uacfc\uac00 \ub098\uc624\uc9c0 \uc54a\uc558\ub2e4\uba74, \ubcf8\uc758 \uad6c\uc870\ub098 \uc6e8\uc774\ud2b8\ub97c \uc218\uc815\ud558\uc5ec \uc6d0\ud558\ub294 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/OBA2s1qbEV4",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},87466:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_Guide-b7d550fec1e13e826875b4155741e9d5.png"},74494:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_Guide_Skinned-9ee141a032c571b5f0c2ba4e5eae55df.png"},1970:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_Guide_Static-63b3f19aadaa63fd2a3eac4e9fcf4982.png"},76651:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_Guide_Weight-e61f74c27392a08e5b50dc18bd34bae3.png"}}]);