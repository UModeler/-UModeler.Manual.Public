"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={slug:"/rigging/edit-bones-tool",sidebar_position:10},i="Edit Bones Tool",s={unversionedId:"editable-mesh/rigging-mode/edit-bones-tool",id:"editable-mesh/rigging-mode/edit-bones-tool",title:"Edit Bones Tool",description:"Rigging Mode Edit Bones",source:"@site/docs/editable-mesh/rigging-mode/edit-bones-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/edit-bones-tool",permalink:"/docs/rigging/edit-bones-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/edit-bones-tool.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/rigging/edit-bones-tool",sidebar_position:10},sidebar:"docs",previous:{title:"Envelope Tool",permalink:"/docs/rigging/envelope-tool"},next:{title:"Human Avatar Tool",permalink:"/docs/rigging/human-avatar-tool"}},l={},d=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"<strong>BoneName</strong>",id:"bonename",level:3},{value:"<strong>Add</strong>",id:"add",level:3},{value:"<strong>Parent</strong>",id:"parent",level:3},{value:"<strong>Delete</strong>",id:"delete",level:3},{value:"<strong>Remove</strong>",id:"remove",level:3},{value:"<strong>Connect</strong>",id:"connect",level:3},{value:"<strong>Separate</strong>",id:"separate",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edit-bones-tool"},"Edit Bones Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rigging Mode Edit Bones",src:n(30618).Z,width:"1840",height:"1222"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Edit Bones Tool")," is a tool that allows you to edit bones, including adding, deleting, separating, etc."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch the ",(0,r.kt)("strong",{parentName:"p"},"Edit Bones tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the bone you want to edit in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," or ",(0,r.kt)("strong",{parentName:"p"},"Bone Tree area"),".\n",(0,r.kt)("img",{alt:"Edit Bones select Bone",src:n(66800).Z,width:"1653",height:"1127"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},(0,r.kt)("strong",{parentName:"h2"},"Shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,r.kt)("p",{parentName:"admonition"},"You can use this shortcut to ",(0,r.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the selected bone, use the buttons in the Properties area to edit the bone.\n",(0,r.kt)("img",{alt:"Edit Bones Properties",src:n(9320).Z,width:"1103",height:"723"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The bones have been edited.\n",(0,r.kt)("img",{alt:"Edit Bones End",src:n(79358).Z,width:"1675",height:"1107"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Bones Properties",src:n(9320).Z,width:"1103",height:"723"})),(0,r.kt)("h3",{id:"basic"},(0,r.kt)("strong",{parentName:"h3"},"Basic")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Properties Basic",src:n(55397).Z,width:"800",height:"400"})),(0,r.kt)("p",null,"Properties for rigging convenience."),(0,r.kt)("h3",{id:"show-handler"},"Show Handler"),(0,r.kt)("p",null,"Show or hide handlers for moving or rotating bones."),(0,r.kt)("h3",{id:"show-bones"},"Show Bones"),(0,r.kt)("p",null,"This property shows the bones."),(0,r.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,r.kt)("p",null,"This property shows the names of the bones."),(0,r.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,r.kt)("p",null,"Property that allows you to set whether or not to enable selecting bones via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click")),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bonename"},(0,r.kt)("strong",{parentName:"h3"},"BoneName")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"BoneName property")," is a property that specifies the name to use when creating a bone."),(0,r.kt)("h3",{id:"add"},(0,r.kt)("strong",{parentName:"h3"},"Add")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Add")," button adds a new child bone at the location of the currently selected bone with the name specified in the ",(0,r.kt)("strong",{parentName:"p"},"BoneName property"),"."),(0,r.kt)("h3",{id:"parent"},(0,r.kt)("strong",{parentName:"h3"},"Parent")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Parent")," button sets the selected bone as a child bone of another bone. To use this, select the bone that you want to be the child bone first, then click the ",(0,r.kt)("strong",{parentName:"p"},"Parent button")," and select the parent bone."),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("strong",{parentName:"h3"},"Delete")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button will ",(0,r.kt)("strong",{parentName:"p"},"completely delete")," the selected Bone."),(0,r.kt)("p",null,"The child bones of the deleted bone will be moved to the location of the deleted bone's parent and will be associated with the parent."),(0,r.kt)("h3",{id:"remove"},(0,r.kt)("strong",{parentName:"h3"},"Remove")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Remove")," button deletes the selected Bone."),(0,r.kt)("p",null,"The child bones of the deleted bones will be connected to the parent bones of the deleted bones, and their positions will remain the same."),(0,r.kt)("h3",{id:"connect"},(0,r.kt)("strong",{parentName:"h3"},"Connect")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button creates a new Bone between the selected Bone and another Bone, connecting them together.\nTo use it, first select one of the bones you want to connect and ",(0,r.kt)("strong",{parentName:"p"},"click")," the ",(0,r.kt)("strong",{parentName:"p"},"Connect button"),", then select the other bone and a new bone will be created between the two bones to connect them."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"differences-from-parent"},"Differences from Parent."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"differences")," from ",(0,r.kt)("strong",{parentName:"p"},"Parent")," are as follows."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Parent establishes a hierarchical relationship between bones while maintaining the existing bone structure without adding any bones."),(0,r.kt)("li",{parentName:"ul"},"Connect connects bones by adding ",(0,r.kt)("strong",{parentName:"li"},"new bones")," to the bone structure."))),(0,r.kt)("h3",{id:"separate"},(0,r.kt)("strong",{parentName:"h3"},"Separate")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Separate")," button detaches the selected Bone from its parent Bone."),(0,r.kt)("p",null,"The selected Bone will disconnect from its parent Bone and become independent; however, any child Bones connected to the selected Bone will still be connected to the selected Bone."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/-_f5CTehPOY",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},30618:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_EditBones-45ef355b5c426275023fb432dec0f227.png"},9320:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_EditBones_Properties-00165eff7cd87ca8c239674dd60ad55c.png"},79358:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_EditBones_end-1fd8a8abfe6cfc12f6523842096ab3a7.png"},66800:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_EditBones_selectBone-ffe673b385df493972958d21f9ed276c.png"},55397:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_WeightTransfer_Properties_Basic-1142aec9d536ec23ba6664b969ce6f8d.png"}}]);