"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4874],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>c});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(l),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||a;return l?n.createElement(c,o(o({ref:t},m),{},{components:l})):n.createElement(c,o({ref:t},m))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<a;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},580:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=l(7462),r=(l(7294),l(3905));const a={slug:"/modeling/bevel-tool",sidebar_position:2},o="Bevel \ud234",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/bevel-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/bevel-tool",title:"Bevel \ud234",description:"Bevel \ud234\uc740 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ube44\uc2a4\ub4ec\ud558\uac8c \uae4e\uc544\uc8fc\ub294 \ud234\uc785\ub2c8\ub2e4.",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-add/bevel-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/bevel-tool",permalink:"/ko/docs/modeling/bevel-tool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/modeling-mode/modeling-mode-add/bevel-tool.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/bevel-tool",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Duplicate \ud234",permalink:"/ko/docs/modeling/duplicate-tool"},next:{title:"Connect \ud234",permalink:"/ko/docs/modeling/connect-tool"}},p={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\ubc84\ud14d\uc2a4",id:"\ubc84\ud14d\uc2a4",level:3},{value:"\uc5e3\uc9c0",id:"\uc5e3\uc9c0",level:3},{value:"\ud398\uc774\uc2a4",id:"\ud398\uc774\uc2a4",level:3},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Bevel Type",id:"bevel-type",level:2},{value:"Vertex",id:"vertex",level:3},{value:"Edge",id:"edge",level:3},{value:"Width",id:"width",level:3},{value:"Segments",id:"segments",level:3},{value:"Profile",id:"profile",level:3},{value:"Display",id:"display",level:2},{value:"XRay Mode",id:"xray-mode",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2},{value:"\ubc84\ud14d\uc2a4",id:"\ubc84\ud14d\uc2a4-1",level:3},{value:"\uc5e3\uc9c0",id:"\uc5e3\uc9c0-1",level:3},{value:"\ud398\uc774\uc2a4",id:"\ud398\uc774\uc2a4-1",level:3}],m={toc:d};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bevel-\ud234"},"Bevel \ud234"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bevel \ud234"),"\uc740 \uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ube44\uc2a4\ub4ec\ud558\uac8c \uae4e\uc544\uc8fc\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,r.kt)("h3",{id:"\ubc84\ud14d\uc2a4"},"\ubc84\ud14d\uc2a4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubc84\ud14d\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bevel \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.    ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bevel Type")," \uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Vertex")," \ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{parentName:"li",title:"\ucc38\uace0",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ubc84\ud14d\uc2a4\uc758 \uacbd\uc6b0 Vertex \ud0c0\uc785\ub9cc \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc801\uc808\ud55c \uc218\uce58\ub85c \uc18d\uc131\uc744 \uc870\uc808\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc18d\uc131"),"\ub4e4\uc744 \uc870\uc808\ud55c \ud6c4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098, \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4."))),(0,r.kt)("h3",{id:"\uc5e3\uc9c0"},"\uc5e3\uc9c0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc5e3\uc9c0\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bevel \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bevel Type")," \uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Vertex")," \ub610\ub294 ",(0,r.kt)("strong",{parentName:"li"},"Edge"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc801\uc808\ud55c \uc218\uce58\ub85c \uc870\uc808\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc18d\uc131"),"\ub4e4\uc744 \uc870\uc808\ud55c \ud6c4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098, \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ud398\uc774\uc2a4"},"\ud398\uc774\uc2a4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bevel \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bevel Type \uc18d\uc131")," \uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Vertex")," \ub610\ub294 ",(0,r.kt)("strong",{parentName:"li"},"Edge"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc801\uc808\ud55c \uc218\uce58\ub85c \uc870\uc808\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc18d\uc131"),"\ub4e4\uc744 \uc870\uc808\ud55c \ud6c4 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud558\uac70\ub098, \ub2e4\ub978 \ud234\uc744 \ub20c\ub7ec \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,r.kt)("h2",{id:"bevel-type"},"Bevel Type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bevel \ud234"),"\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc744 \uc5d8\ub9ac\uba3c\ud2b8 \uc885\ub958\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4"),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ubc84\ud14d\uc2a4\uc758 \uacbd\uc6b0 ",(0,r.kt)("strong",{parentName:"p"},"Vertex \ud0c0\uc785"),"\ub9cc \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"vertex"},"Vertex"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc18d\ud55c \ubc84\ud14d\uc2a4\uc5d0\ub9cc \uc601\ud5a5\uc744 \uc8fc\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"edge"},"Edge"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc18d\ud55c \uc5e3\uc9c0\uc5d0\ub9cc \uc601\ud5a5\uc744 \uc8fc\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"width"},"Width"),(0,r.kt)("p",null,"\uae4e\uc774\uac8c \ub418\ub294 \uae38\uc774\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"segments"},"Segments"),(0,r.kt)("p",null,"\uae4e\uc77c \ub54c \ucabc\uac1c\uc9c0\ub294 \uc870\uac01 \uc218\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"profile"},"Profile"),(0,r.kt)("p",null,"\uae4e\uc778 \ubd80\ubd84\uc758 \ud280\uc5b4\ub098\uc628 \uc815\ub3c4\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"display"},"Display"),(0,r.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,r.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,r.kt)("h3",{id:"\ubc84\ud14d\uc2a4-1"},"\ubc84\ud14d\uc2a4"),(0,r.kt)("h3",{id:"\uc5e3\uc9c0-1"},"\uc5e3\uc9c0"),(0,r.kt)("h3",{id:"\ud398\uc774\uc2a4-1"},"\ud398\uc774\uc2a4"))}s.isMDXComponent=!0}}]);