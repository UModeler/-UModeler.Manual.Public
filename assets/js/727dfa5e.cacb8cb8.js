"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={slug:"/modeling/cylinder-tool",sidebar_position:2},l="Cylinder Tool",a={unversionedId:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/cylinder-tool",id:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/cylinder-tool",title:"Cylinder Tool",description:"The Cylinder tool is a tool for creating basic shapes of cylinders.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/cylinder-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes",slug:"/modeling/cylinder-tool",permalink:"/docs/modeling/cylinder-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/cylinder-tool",sidebar_position:2},sidebar:"docs",previous:{title:"Box Tool",permalink:"/docs/modeling/box-tool"},next:{title:"Sphere Tool",permalink:"/docs/modeling/sphere-tool"}},s={},d=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"Create and edit by clicking and dragging",id:"create-and-edit-by-clicking-and-dragging",level:3},{value:"One Click Build and Edit via Properties",id:"one-click-build-and-edit-via-properties",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Disk Segments",id:"disk-segments",level:3},{value:"Height Segments",id:"height-segments",level:3},{value:"Radius",id:"radius",level:3},{value:"Height",id:"height",level:3},{value:"<strong>Examples of use</strong>",id:"examples-of-use",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cylinder-tool"},"Cylinder Tool"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Cylinder tool")," is a tool for creating basic shapes of cylinders."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use"},(0,o.kt)("strong",{parentName:"h2"},"How to use")),(0,o.kt)("p",null,"The basic shape creation tools in the ",(0,o.kt)("strong",{parentName:"p"},"Primitive Shapes group")," can create shapes in ",(0,o.kt)("strong",{parentName:"p"},"two ways"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"click-drag to create, edit"),(0,o.kt)("li",{parentName:"ol"},"Create and edit using One Click Build")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-and-edit-by-clicking-and-dragging"},"Create and edit by clicking and dragging"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Cylinder tool"),"."),(0,o.kt)("li",{parentName:"ol"},"Click and drag the mouse on the scene to create a base of the desired size."),(0,o.kt)("li",{parentName:"ol"},"Once the base is created at the desired size, release the click and move the mouse up to create a mesh at the desired height."),(0,o.kt)("li",{parentName:"ol"},"When the desired height is reached, ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Click"))," again to finish creating the mesh."),(0,o.kt)("li",{parentName:"ol"},"Adjust the properties of the Cylinder tool and select the element, or press another tool to finish.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can continue fine-tuning with the Cylinder tool's properties until you select an element or press another tool to finalize.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"one-click-build-and-edit-via-properties"},"One Click Build and Edit via Properties"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Cylinder tool."),(0,o.kt)("li",{parentName:"ol"},"Enter the desired values in the Cylinder tool's properties."),(0,o.kt)("li",{parentName:"ol"},"Press the One Click Build button to add the shape to the scene."),(0,o.kt)("li",{parentName:"ol"},"Make any additional adjustments to the Cylinder tool's properties and select the element, or use another tool to finish.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can continue to tweak the properties of the Cylinder tool until you select an element or press another tool to finalize.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"properties"},(0,o.kt)("strong",{parentName:"h2"},"Properties")),(0,o.kt)("h3",{id:"disk-segments"},"Disk Segments"),(0,o.kt)("p",null,"This property sets the number of ",(0,o.kt)("strong",{parentName:"p"},"perimeter segments")," of the generated shape."),(0,o.kt)("h3",{id:"height-segments"},"Height Segments"),(0,o.kt)("p",null,"Property that sets the number of segments for the height of the generated shape."),(0,o.kt)("h3",{id:"radius"},"Radius"),(0,o.kt)("p",null,"Property that sets the radius size of the generated shape, in meters."),(0,o.kt)("h3",{id:"height"},"Height"),(0,o.kt)("p",null,"This property sets the height of the generated shape."),(0,o.kt)("p",null,"This is the direction along the ",(0,o.kt)("strong",{parentName:"p"},"Y axis")," relative to the object, in meters."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples-of-use"},(0,o.kt)("strong",{parentName:"h2"},"Examples of use")))}c.isMDXComponent=!0}}]);