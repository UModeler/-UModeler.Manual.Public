"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1790],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||s;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<s;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2877:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const s={slug:"/rigging/reset-poses-tool",sidebar_position:3},i="Reset Poses Tool",a={unversionedId:"editable-mesh/rigging-mode/reset-poses-tool",id:"editable-mesh/rigging-mode/reset-poses-tool",title:"Reset Poses Tool",description:"The Reset Poses tool resets the position and rotation of a moved bone, returning it to its original default pose.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/reset-poses-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/reset-poses-tool",permalink:"/docs/rigging/reset-poses-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/rigging/reset-poses-tool",sidebar_position:3},sidebar:"docs",previous:{title:"Weight Brush Tool",permalink:"/docs/rigging/weight-brush-tool"},next:{title:"Rebind Poses Tool",permalink:"/docs/rigging/rebind-poses-tool"}},l={},p=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reset-poses-tool"},"Reset Poses Tool"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Reset Poses tool")," resets the position and rotation of a moved bone, returning it to its original default pose."),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the desired bone in the ",(0,n.kt)("strong",{parentName:"p"},"Scene")," or ",(0,n.kt)("strong",{parentName:"p"},"Bone Tree area, Bind Bone List"),"."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},"Shortcut ",(0,n.kt)("strong",{parentName:"h2"},(0,n.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,n.kt)("p",{parentName:"admonition"},"You can use the shortcut to ",(0,n.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the selected bone's gizmo to move or rotate the bone.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the Reset Poses tool."))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"You will see that the positions and rotations of the bones have been reset.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")))}u.isMDXComponent=!0}}]);