"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[81165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:r,a[1]=d;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(67294),r=n(86010),o=n(53438),a=n(39960),d=n(13919),l=n(95999);const c="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function p(e){let{href:t,icon:n,title:o,description:a}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",s),title:o},n," ",o),a&&i.createElement("p",{className:(0,r.Z)("text--truncate",m),title:a},a))}function g(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,d.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(b,{item:t});case"category":return i.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,o.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(v,e);const a=(0,o.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},49913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905)),o=n(52991);const a={slug:"/modeling/subdivide-tool",sidebar_position:7,description:""},d="Subdivide \ud234",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",title:"Subdivide \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-basic/editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/subdivide-tool",permalink:"/ko/docs/basic/modeling/subdivide-tool",draft:!1,tags:[],version:"basic",sidebarPosition:7,frontMatter:{slug:"/modeling/subdivide-tool",sidebar_position:7,description:""},sidebar:"docs",previous:{title:"Bridge \ud234",permalink:"/ko/docs/basic/modeling/bridge-tool"},next:{title:"Loop Cut \ud234",permalink:"/ko/docs/basic/modeling/loopcut-tool"}},c={},s=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\uad74\uace1\uc744 \ubcc0\ud615\ud558\uba74\uc11c \uc804\uccb4 \ud398\uc774\uc2a4 4\ub4f1\ubd84",id:"\uad74\uace1\uc744-\ubcc0\ud615\ud558\uba74\uc11c-\uc804\uccb4-\ud398\uc774\uc2a4-4\ub4f1\ubd84",level:3},{value:"\uad74\uace1 \ubcc0\ud615 \uc5c6\uc774 \ud398\uc774\uc2a4 4\ub4f1\ubd84",id:"\uad74\uace1-\ubcc0\ud615-\uc5c6\uc774-\ud398\uc774\uc2a4-4\ub4f1\ubd84",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subdivide-\ud234"},"Subdivide \ud234"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subdivide Tool",src:n(36708).Z,width:"1576",height:"562"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subdivide \ud234"),"\uc740 \ud398\uc774\uc2a4\ub97c 4\ub4f1\ubd84\ud558\ub294 \ud234\uc785\ub2c8\ub2e4. \ud398\uc774\uc2a4\uac00 \uc120\ud0dd\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \ubaa8\ub4e0 \ud398\uc774\uc2a4\ub97c 4\ub4f1\ubd84\ud558\uba74\uc11c \uad74\uace1\uc744 \ubd80\ub4dc\ub7fd\uac8c \ub9cc\ub4e4\uba70, \ud2b9\uc815 \ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud55c \uacbd\uc6b0\ub294 \uc120\ud0dd\ud55c \ud398\uc774\uc2a4\ub9cc\uc744 \ubcc0\ud615 \uc5c6\uc774 4\ub4f1\ubd84\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc8fc\uc758",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Subdivide \ud234"),"\uc744 \uc2e4\ud589\ud558\uba74 \uc120\ud0dd\ub41c \uc624\ube0c\uc81d\ud2b8\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc804\uccb4 \ud398\uc774\uc2a4\ub97c 4\ub4f1\ubd84"),"\ud558\ubbc0\ub85c, \ub9ce\uc740 \ud398\uc774\uc2a4\ub85c \uc778\ud55c 3D \uc624\ube0c\uc81d\ud2b8\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ucd5c\uc801\ud654 \ubb38\uc81c, \uc21c\uac04\uc801\uc778 \uc5d0\ub514\ud130 \uc18d\ub3c4 \uc800\ud558 \ub4f1"),"\uc774 \ub098\ud0c0\ub0a0 \uc218 \uc788\uc73c\ubbc0\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."))),(0,r.kt)("admonition",{title:"\ud301",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"subdivide-\ubaa8\ub514\ud30c\uc774\uc5b4"},"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Subdivide \ud234"),"\uc744 \uc774\uc6a9\ud55c \ubc29\uc2dd\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc6d0\ubcf8 \uba54\uc2dc\uc5d0 \ubc14\ub85c \uc801\uc6a9"),"\ub418\uae30 \ub54c\ubb38\uc5d0 \uc790\uce6b \ube44\ud6a8\uc728\uc801\uc73c\ub85c \ubaa8\ub378\ub9c1\uc774 \uc9c4\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Subdivide Modifier",src:n(40339).Z,width:"1584",height:"578"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4(\ud234\uc774 \uc544\ub2d9\ub2c8\ub2e4.)"),"\ub97c \ud1b5\ud574 \uc791\uc5c5\ud55c\ub2e4\uba74, ",(0,r.kt)("strong",{parentName:"p"},"\uc6d0\ubcf8 \uba54\uc2dc\ub97c \uadf8\ub300\ub85c \ubcf4\uc874"),"\ud558\uba74\uc11c\ub3c4 \ubaa8\ub378\uc5d0 \ubcc0\ud615\uc744 \uac00\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud6a8\uc728\uc801\uc73c\ub85c \ubaa8\ub378\ub9c1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4",href:"/docs/modeling/subdivide-modifier"}],mdxType:"DocCardList"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,r.kt)("h3",{id:"\uad74\uace1\uc744-\ubcc0\ud615\ud558\uba74\uc11c-\uc804\uccb4-\ud398\uc774\uc2a4-4\ub4f1\ubd84"},"\uad74\uace1\uc744 \ubcc0\ud615\ud558\uba74\uc11c \uc804\uccb4 \ud398\uc774\uc2a4 4\ub4f1\ubd84"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Subdivide \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc804\uccb4 \ud398\uc774\uc2a4\uac00 4\ub4f1\ubd84 \ub418\uba70 \ud398\uc774\uc2a4\uac00 \ucd94\uac00\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Subdivide Tool",src:n(36708).Z,width:"1576",height:"562"}))),(0,r.kt)("h3",{id:"\uad74\uace1-\ubcc0\ud615-\uc5c6\uc774-\ud398\uc774\uc2a4-4\ub4f1\ubd84"},"\uad74\uace1 \ubcc0\ud615 \uc5c6\uc774 \ud398\uc774\uc2a4 4\ub4f1\ubd84"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Subdivide \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \ud398\uc774\uc2a4\uac00 4\ub4f1\ubd84 \ub418\uba70 \ud398\uc774\uc2a4\uac00 \ucd94\uac00\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Subdivide Tool",src:n(62441).Z,width:"1576",height:"562"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/SXkmgeHeNBA",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},36708:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Modeling_Add_Subdivide_1-00ffadd2c875c572c2169781513bd8e1.png"},62441:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Modeling_Add_Subdivide_2-e996ba99542810bdd0b08d3c7d39de43.png"},40339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Modeling_Modifier_Subdivide-f545980ba8f9e2e9239edfa4f8c690ee.png"}}]);