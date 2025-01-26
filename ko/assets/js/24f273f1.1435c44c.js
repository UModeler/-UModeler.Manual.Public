"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[49331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),p=n(13919),l=n(95999);const s="cardContainer_fWXF",c="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,p.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},53741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const o={slug:"/painting-mode",description:""},p="\ud398\uc778\ud305 \ubaa8\ub4dc",l={unversionedId:"editable-mesh/painting-mode/index",id:"editable-mesh/painting-mode/index",title:"\ud398\uc778\ud305 \ubaa8\ub4dc",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/index.md",sourceDirName:"editable-mesh/painting-mode",slug:"/painting-mode",permalink:"/ko/docs/painting-mode",draft:!1,tags:[],version:"current",frontMatter:{slug:"/painting-mode",description:""},sidebar:"docs",previous:{title:"Hotspot Texturing \ud234",permalink:"/ko/docs/modeling/hotspot-texturing-tool"},next:{title:"\ud398\uc778\ud305 \ubaa8\ub4dc \uac00\uc774\ub4dc",permalink:"/ko/docs/painting-guide"}},s={},c=[{value:"<strong>\uc778\ud130\ud398\uc774\uc2a4</strong>",id:"\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"Painting 2D",id:"painting-2d",level:3},{value:"Material \uadf8\ub8f9",id:"material-\uadf8\ub8f9",level:3},{value:"Layer \uadf8\ub8f9",id:"layer-\uadf8\ub8f9",level:3},{value:"Properties \uadf8\ub8f9",id:"properties-\uadf8\ub8f9",level:3},{value:"Map Source \uadf8\ub8f9",id:"map-source-\uadf8\ub8f9",level:3}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ud398\uc778\ud305-\ubaa8\ub4dc"},"\ud398\uc778\ud305 \ubaa8\ub4dc"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Painting Mode",src:n(30360).Z,width:"2161",height:"1540"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud398\uc778\ud305(Painting)\ubaa8\ub4dc"),"\ub294 \ubaa8\ub378\uc5d0 \uc0c9\uc0c1\uc744 \uce60\ud558\ub294 \ubaa8\ub4dc\ub85c, ",(0,a.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4\uc640 \ube0c\ub7ec\uc2dc")," \ub4f1\uc744 \uc774\uc6a9\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"p"},"\uc0c9\uc0c1\uc744 \ud45c\ud604\ud558\uace0 \ud14d\uc2a4\ucc98\ub97c \uc0dd\uc131"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\uc138\ud55c \ud398\uc778\ud305 \ubaa8\ub4dc \uc0ac\uc6a9 \ubc29\ubc95\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud398\uc778\ud305 \ubaa8\ub4dc \uac00\uc774\ub4dc")," \ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,a.kt)(i.Z,{items:[{type:"link",label:"\ud398\uc778\ud305 \ubaa8\ub4dc \uac00\uc774\ub4dc",href:"/docs/painting-guide"}],mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc778\ud130\ud398\uc774\uc2a4"},(0,a.kt)("strong",{parentName:"h2"},"\uc778\ud130\ud398\uc774\uc2a4")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Painting Mode Interface",src:n(3060).Z,width:"2170",height:"2051"})),(0,a.kt)("h3",{id:"painting-2d"},"Painting 2D"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Painting 2D \ud234"),"\ub294 \ud398\uc778\ud305 \ubaa8\ub4dc\uc640 \ub3d9\uae30\ud654 \ub418\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc5d0\ub514\ud130 \ud615\ud0dc\uc758 \ud234"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Painting 2D",src:n(63298).Z,width:"1622",height:"1268"})),(0,a.kt)("h3",{id:"material-\uadf8\ub8f9"},"Material \uadf8\ub8f9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud398\uc778\ud305 \ubaa8\ub4dc"),"\uc758 ",(0,a.kt)("strong",{parentName:"p"},"Material \uadf8\ub8f9"),"\uc740 \ud398\uc778\ud305\uc744 \uc9c4\ud589\ud560 \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc120\ud0dd\ud558\uac70\ub098 \uc52c\uc5d0\uc11c\uc758 \ud45c\ud604\uc5d0 \uad00\ub828\ud55c \uc18d\uc131\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Material Group",src:n(89380).Z,width:"1365",height:"330"})),(0,a.kt)("h3",{id:"layer-\uadf8\ub8f9"},"Layer \uadf8\ub8f9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud398\uc778\ud305 \ubaa8\ub4dc"),"\uc758 ",(0,a.kt)("strong",{parentName:"p"},"Layer \uadf8\ub8f9"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4\ub97c \uad00\ub9ac"),"\ud558\uace0 ",(0,a.kt)("strong",{parentName:"p"},"\ud3b8\uc9d1"),"\ud560 \uc218 \uc788\ub294 \ud234\uacfc ",(0,a.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4\uac00 \ud45c\uc2dc"),"\ub41c \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Layers Group",src:n(695).Z,width:"1365",height:"549"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c")," : \ub808\uc774\uc5b4\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \uc601\uc5ed\uc744 \ub9c8\uc2a4\ud0b9\ud558\ub294 \uc18d\uc131"),"\uc785\ub2c8\ub2e4. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Group \ub808\uc774\uc5b4")," : \ub808\uc774\uc5b4\ub97c ",(0,a.kt)("strong",{parentName:"p"},"\uacc4\uce35 \uad6c\uc870\ub85c \ud1b5\ud569\ud574\uc11c \uad00\ub9ac"),"\ud558\ub294 \uc18d\uc131\uc758 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Paint \ub808\uc774\uc5b4")," : ",(0,a.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4"),"\uc5d0 \uc0c9 \ud639\uc740 \uc774\ubbf8\uc9c0\uac00 \uc801\uc6a9\ub41c \ube0c\ub7ec\uc2dc\ub85c \ucc44\uc0c9\ud560 \uc218 \uc788\ub294 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fill \ub808\uc774\uc5b4")," : \uc774\ubbf8\uc9c0\ub97c \ub9f5\uc18c\uc2a4\uc5d0 \uc804\uccb4\uc5d0 \uc801\uc6a9\ud574\uc11c 3D \ubaa8\ub378 \uc804\uccb4\ub97c \ub36e\ub294 \ubc29\uc2dd\uc758 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sticker \ub808\uc774\uc5b4")," : \uc774\ubbf8\uc9c0\ub97c ",(0,a.kt)("strong",{parentName:"p"},"\ud45c\uba74\uc5d0 \ubd99\uc774\ub4ef\uc774 \ud45c\ud604"),"\ud558\ub294 \uc18d\uc131\uc758 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4."))),(0,a.kt)("h3",{id:"properties-\uadf8\ub8f9"},"Properties \uadf8\ub8f9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties \uadf8\ub8f9"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c \ud234\uc774\ub098 \ub808\uc774\uc5b4 \ub4f1"),"\uc5d0 \ub530\ub77c ",(0,a.kt)("strong",{parentName:"p"},"\ub0b4\uc6a9\uc774 \ub2ec\ub77c\uc9c0\ub294 \uc601\uc5ed"),"\uc73c\ub85c \uc120\ud0dd\ud55c ",(0,a.kt)("strong",{parentName:"p"},"\uae30\ub2a5\uc5d0 \ub300\ud55c \uc18d\uc131\uc774 \ud45c\uc2dc"),"\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Properties Group",src:n(38347).Z,width:"1365",height:"658"})),(0,a.kt)("h3",{id:"map-source-\uadf8\ub8f9"},"Map Source \uadf8\ub8f9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Map Source \uadf8\ub8f9"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\ucc98\uc758 \ud574\uc0c1\ub3c4"),", ",(0,a.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\uc758 \ud3ec\ub9f7")," \ub4f1\uc744 \uc124\uc815\ud558\uba70, \ub9f5\uc18c\uc2a4 \ucd94\uac00/\uc0ad\uc81c\uc640 \uac19\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4 \uad00\ub9ac"),"\uc5d0 \ub300\ud55c \uc18d\uc131\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Map Source Group",src:n(22075).Z,width:"1365",height:"610"})))}d.isMDXComponent=!0},3060:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Interface-8fa33243eb61b0e7b2e71a4c0cf6762b.png"},695:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Layers-7340823684b0d4e49b2c054dc0a9d5cb.png"},30360:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Main-a22b47c45a79fbe29f238b45665f71dd.png"},22075:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_MapSource-71bf63ac17adf5afcd047da47116ea7c.png"},89380:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Materials-26ca569594b9789cb4b6e5db1e0b1ba3.png"},63298:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Painting2D_Interface-5eb558c37d5c5e13722ea17402708c86.png"},38347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Properties-95c348b0f7735c4ad9e6355e79c6747e.png"}}]);