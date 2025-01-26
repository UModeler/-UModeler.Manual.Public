"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[37969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(d,a(a({ref:t},g),{},{components:n})):o.createElement(d,a({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={slug:"/rigging/root-bone-settings",sidebar_position:12},a="Root Bone Settings",s={unversionedId:"editable-mesh/rigging-mode/root-bone-settings",id:"version-basic/editable-mesh/rigging-mode/root-bone-settings",title:"Root Bone Settings",description:"Overview",source:"@site/versioned_docs/version-basic/editable-mesh/rigging-mode/root-bone-settings.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/root-bone-settings",permalink:"/docs/basic/rigging/root-bone-settings",draft:!1,tags:[],version:"basic",sidebarPosition:12,frontMatter:{slug:"/rigging/root-bone-settings",sidebar_position:12},sidebar:"docs",previous:{title:"Human Avatar Tool",permalink:"/docs/basic/rigging/human-avatar-tool"},next:{title:"UV Editor",permalink:"/docs/basic/uv-editor"}},l={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>How to use</strong>",id:"how-to-use",level:2}],g={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"root-bone-settings"},"Root Bone Settings"),(0,r.kt)("h2",{id:"overview"},(0,r.kt)("strong",{parentName:"h2"},"Overview")),(0,r.kt)("p",null,"Root motion refers to the movement of a character based on the animation of the skeleton's root bone."),(0,r.kt)("p",null,"Applying root motion allows for smooth movement regardless of the input values, enabling more natural animations."),(0,r.kt)("p",null,"One important point for proper use of root motion is that the character's root bone must be at the origin point (0,0,0) without any rotation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an empty object using the following naming format, positioned at the origin (0,0,0) with no rotation.\n",(0,r.kt)("img",{alt:"Edit Bones select Bone",src:n(18785).Z,width:"1009",height:"235"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'In the Animation Root field, enter the created AnimationRoot, and in the Skinned Mesh Renderer Root field, enter Character_root.\nBy clicking "Start Rigging," stable rigging becomes possible.\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Bones Properties",src:n(80499).Z,width:"361",height:"241"})),(0,r.kt)("hr",null))}p.isMDXComponent=!0},18785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/RootBoneSettings_1-2881eaa503c17159ef46fe602a17cb0f.png"},80499:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/RootBoneSettings_2-ed80a6b6d466a7d032205bde4a43fbfc.png"}}]);