"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7332],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var i=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,o=function(e,r){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return i.createElement(s.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return t?i.createElement(f,a(a({ref:r},p),{},{components:t})):i.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,a=new Array(n);a[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<n;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1272:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));const n={slug:"/modeling/mirror-modifier",sidebar_position:1},a="Mirror Modifier",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier",id:"editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier",title:"Mirror Modifier",description:"The Mirror Modifier is a modifier that duplicates a symmetrical mesh along an axis.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-modifier/mirror-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/mirror-modifier",permalink:"/docs/modeling/mirror-modifier",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/mirror-modifier",sidebar_position:1},sidebar:"docs",previous:{title:"FFD Modifier",permalink:"/docs/modeling/ffd-modifier"},next:{title:"Push Modifier",permalink:"/docs/modeling/push-modifier"}},s={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Mirror Axis</strong>",id:"mirror-axis",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"Flip",id:"flip",level:3},{value:"Display Overlay In Source Mesh",id:"display-overlay-in-source-mesh",level:3},{value:"Angle along Y",id:"angle-along-y",level:3},{value:"Distance",id:"distance",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:d};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mirror-modifier"},"Mirror Modifier"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Mirror Modifier")," is a modifier that ",(0,o.kt)("strong",{parentName:"p"},"duplicates a symmetrical mesh")," along an axis."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to Use")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press the Add Modifier button."),(0,o.kt)("li",{parentName:"ol"},"Select the Mirror Modifier."),(0,o.kt)("li",{parentName:"ol"},"In the Mirror Axis property, select the desired axis."),(0,o.kt)("li",{parentName:"ol"},"A symmetrical mesh will be duplicated along the selected axis.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("h3",{id:"mirror-axis"},(0,o.kt)("strong",{parentName:"h3"},"Mirror Axis")),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"Property that sets the ",(0,o.kt)("strong",{parentName:"p"},"X Axis")," as the symmetry reference."),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"Property that sets the ",(0,o.kt)("strong",{parentName:"p"},"Y Axis")," as the symmetry reference."),(0,o.kt)("h3",{id:"z"},"Z"),(0,o.kt)("p",null,"This property sets the ",(0,o.kt)("strong",{parentName:"p"},"Z axis")," as the symmetry reference."),(0,o.kt)("h3",{id:"flip"},"Flip"),(0,o.kt)("p",null,"This property reverses the direction of the axis being duplicated."),(0,o.kt)("h3",{id:"display-overlay-in-source-mesh"},"Display Overlay In Source Mesh"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Property that allows you to see the axis of the selected Mirror Modifier in the "),"Source Mesh**."),(0,o.kt)("h3",{id:"angle-along-y"},"Angle along Y"),(0,o.kt)("p",null,"This property rotates the axis along the Y axis."),(0,o.kt)("h3",{id:"distance"},"Distance"),(0,o.kt)("p",null,"Property for the distance from the pivot to the axis."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can also change the ",(0,o.kt)("strong",{parentName:"p"},"Distance property")," by moving the gizmo displayed on the axis.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example Usage")))}m.isMDXComponent=!0}}]);