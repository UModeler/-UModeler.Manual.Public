"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={slug:"/modeling/subdivide-modifier",sidebar_position:1},a="Subdivide Modifier",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier",id:"editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier",title:"Subdivide Modifier",description:"The Subdivide modifier is a modifier that divides the current pace into quarters while simultaneously smoothing out bends.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/subdivide-modifier",permalink:"/docs/modeling/subdivide-modifier",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/subdivide-modifier",sidebar_position:1},sidebar:"docs",previous:{title:"Shell Modifier",permalink:"/docs/modeling/shell-modifier"},next:{title:"Element Group",permalink:"/docs/modeling-element"}},s={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Subdivision Level",id:"subdivision-level",level:3},{value:"Subdivision Level Example",id:"subdivision-level-example",level:3},{value:"<strong>Interpolation</strong>",id:"interpolation",level:3},{value:"None",id:"none",level:4},{value:"Edge Only",id:"edge-only",level:4},{value:"Edge And Corner",id:"edge-and-corner",level:4},{value:"<strong>UV Interpolation</strong>",id:"uv-interpolation",level:3},{value:"Auto Smoothing Group",id:"auto-smoothing-group",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subdivide-modifier"},"Subdivide Modifier"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Subdivide modifier")," is a modifier that divides the current pace into quarters while simultaneously smoothing out bends."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"The "),"Smoothing Groups property",(0,i.kt)("strong",{parentName:"p"}," of the "),"Face Element Group",(0,i.kt)("strong",{parentName:"p"}," increases the actual number of faces, rather than just "),"making it look like the faces are connected**.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-use"},(0,i.kt)("strong",{parentName:"h2"},"How to Use")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Press the ",(0,i.kt)("strong",{parentName:"p"},"Add Modifier button"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Subdivide modifier.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Subdivision Level properties"),", select the ",(0,i.kt)("strong",{parentName:"p"},"Button for the desired step"),"."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Since this will divide the entire face into 4 parts per step, it is recommended that you start with a lower step, as the number of steps in the Subdivision Level property can cause optimization issues with 3D objects due to the large number of steps, as well as momentary editor slowdowns.")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"faces are added and bends are smoothed out.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"properties"},(0,i.kt)("strong",{parentName:"h2"},"Properties")),(0,i.kt)("h3",{id:"subdivision-level"},"Subdivision Level"),(0,i.kt)("p",null,"Property for the ",(0,i.kt)("strong",{parentName:"p"},"Subdivide Level"),"."),(0,i.kt)("p",null,"For each ",(0,i.kt)("strong",{parentName:"p"},"step"),", the number of faces is ",(0,i.kt)("strong",{parentName:"p"},"quadrupled")," and the bends are smoothed."),(0,i.kt)("h3",{id:"subdivision-level-example"},"Subdivision Level Example"),(0,i.kt)("p",null,"Example Subdivision Level 0"),(0,i.kt)("p",null,"Example Subdivision Level 1"),(0,i.kt)("p",null,"Example Subdivision Level 2"),(0,i.kt)("p",null,"Example Subdivision Level 3"),(0,i.kt)("h3",{id:"interpolation"},(0,i.kt)("strong",{parentName:"h3"},"Interpolation")),(0,i.kt)("h4",{id:"none"},"None"),(0,i.kt)("h4",{id:"edge-only"},"Edge Only"),(0,i.kt)("p",null,"This property determines the bend without distinguishing between corners and edges."),(0,i.kt)("p",null,"As a result, ",(0,i.kt)("strong",{parentName:"p"},"all vertices are smoothly represented"),"."),(0,i.kt)("h4",{id:"edge-and-corner"},"Edge And Corner"),(0,i.kt)("p",null,"This property determines the bend by distinguishing between vertices and edges."),(0,i.kt)("h3",{id:"uv-interpolation"},(0,i.kt)("strong",{parentName:"h3"},"UV Interpolation")),(0,i.kt)("p",null,"This property sets the bending method for stretched UVs."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This does not work if the UV is not unfolded."),(0,i.kt)("admonition",{parentName:"admonition",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Even if the ",(0,i.kt)("strong",{parentName:"p"},"UV is not stretched"),", it will have ",(0,i.kt)("strong",{parentName:"p"},"automatically generated UV texture coordinates")," based on the object's ",(0,i.kt)("strong",{parentName:"p"},"spatial coordinates"),", ",(0,i.kt)("strong",{parentName:"p"},"normal orientation"),"."))),(0,i.kt)("p",null,"The image below is an ",(0,i.kt)("strong",{parentName:"p"},"example of how the UV changes based on each property"),"."),(0,i.kt)("h3",{id:"auto-smoothing-group"},"Auto Smoothing Group"),(0,i.kt)("p",null,"A property that automatically applies a ",(0,i.kt)("strong",{parentName:"p"},"Smoothing Group")," to faces added by the ",(0,i.kt)("strong",{parentName:"p"},"Subdivision Level"),", making the surface appear smoother."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Since increasing the value of "),"Subdivision Level",(0,i.kt)("strong",{parentName:"p"}," results in more polygons, it is a good idea to optimize by looking at the representation level with the "),"Auto Smoothing Group property enabled and increasing the value of ",(0,i.kt)("strong",{parentName:"p"},"Subdivision Level"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"example-usage"},(0,i.kt)("strong",{parentName:"h2"},"Example Usage")))}m.isMDXComponent=!0}}]);