"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1790],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=p(o),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||s;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[g]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},32877:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const s={slug:"/rigging/reset-poses-tool",sidebar_position:3},i="Reset Poses Tool",a={unversionedId:"editable-mesh/rigging-mode/reset-poses-tool",id:"editable-mesh/rigging-mode/reset-poses-tool",title:"Reset Poses Tool",description:"Reset Poses Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/reset-poses-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/reset-poses-tool",permalink:"/docs/rigging/reset-poses-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/rigging/reset-poses-tool",sidebar_position:3},sidebar:"docs",previous:{title:"Weight Brush Tool",permalink:"/docs/rigging/weight-brush-tool"},next:{title:"Rebind Poses Tool",permalink:"/docs/rigging/rebind-poses-tool"}},l={},p=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:p};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reset-poses-tool"},"Reset Poses Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reset Poses Tool",src:o(23783).Z,width:"1566",height:"630"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Reset Poses Tool")," resets the position and rotation of a moved bone, returning it to its original default pose."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the desired bone in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," or ",(0,r.kt)("strong",{parentName:"p"},"Bone Tree area, Bind Bone List"),".\n",(0,r.kt)("img",{alt:"Bone Select",src:o(4321).Z,width:"684",height:"384"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},(0,r.kt)("strong",{parentName:"h2"},"shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,r.kt)("p",{parentName:"admonition"},"This shortcut allows you to ",(0,r.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the selected bone's gizmo to move or rotate the bone.\n",(0,r.kt)("img",{alt:"Rotate Bone",src:o(49105).Z,width:"814",height:"587"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("strong",{parentName:"p"},"Reset Poses Tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see that the positions and rotations of the bones have been reset.\n",(0,r.kt)("img",{alt:"Reset Poses Tool Result",src:o(54009).Z,width:"814",height:"587"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")))}g.isMDXComponent=!0},23783:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Rigging_ResetPoses-2afe83852f2cc07ce0b2113e1e3e3e80.png"},54009:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Rigging_ResetPoses_Result-889e7734058b7a7ed7fe1f5e5270013f.png"},49105:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Rigging_ResetPoses_RotationBone-3c9d415d95aa0b7cda1ebdb80c68df25.png"},4321:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Rigging_SelectBone-a08f217a2da7ae53b487bedbe3bd0c4e.png"}}]);