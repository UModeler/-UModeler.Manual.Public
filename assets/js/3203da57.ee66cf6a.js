"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),g=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=g(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=g(n),h=o,p=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return n?i.createElement(p,a(a({ref:t},d),{},{components:n})):i.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var g=2;g<r;g++)a[g]=n[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(67294),o=n(86010),r=n(53438),a=n(39960),s=n(13919),l=n(95999);const g="cardContainer_fWXF",d="cardTitle_rnsV",c="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",g)},n)}function h(e){let{href:t,icon:n,title:r,description:a}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:r},n," ",r),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",c),title:a},a))}function p(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return i.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return i.createElement(f,e);const a=(0,r.MN)(t);return i.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(k,{item:e})))))}},88627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905)),r=n(52991);const a={slug:"/rigging/guide",sidebar_position:1},s="Rigging Mode Guide",l={unversionedId:"editable-mesh/rigging-mode/rigging-guide",id:"editable-mesh/rigging-mode/rigging-guide",title:"Rigging Mode Guide",description:"Rigging Mode Guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/rigging-guide.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/guide",permalink:"/docs/rigging/guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/rigging/guide",sidebar_position:1},sidebar:"docs",previous:{title:"Rigging Mode",permalink:"/docs/rigging-mode"},next:{title:"Weight Tool",permalink:"/docs/rigging/weight-tool"}},g={},d=[{value:"<strong>What is Rigging?</strong>",id:"what-is-rigging",level:2},{value:"<strong>Why is rigging necessary?</strong>",id:"why-is-rigging-necessary",level:2},{value:"<strong>Step-by-step rigging process</strong>",id:"step-by-step-rigging-process",level:2},{value:"1. Prepare a UModeler X object that has completed modeling and UV unwrapping.",id:"1-prepare-a-umodeler-x-object-that-has-completed-modeling-and-uv-unwrapping",level:3},{value:"2. Enter Rigging Mode.",id:"2-enter-rigging-mode",level:3},{value:"3. Create Bones.",id:"3-create-bones",level:3},{value:"4. Proceed with Skinning",id:"4-proceed-with-skinning",level:3},{value:"5. Checking the Results",id:"5-checking-the-results",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rigging-mode-guide"},"Rigging Mode Guide"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rigging Mode Guide",src:n(28222).Z,width:"2447",height:"887"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Rigging Mode")," in ",(0,o.kt)("strong",{parentName:"p"},"UModeler X")," is a mode where you can add, edit, and skin bones for animation.\nIn this mode, you can assign weights to vertices and implement the model's movement through weight editing."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-rigging"},(0,o.kt)("strong",{parentName:"h2"},"What is Rigging?")),(0,o.kt)("p",null,"Rigging is the process of creating a ",(0,o.kt)("strong",{parentName:"p"},"skeleton")," (bones) for a 3D model and setting how the model ",(0,o.kt)("strong",{parentName:"p"},"deforms")," according to the movement of the skeleton. In this process, the concept of ",(0,o.kt)("strong",{parentName:"p"},"Weights")," is used, which determines how much of the bone's movement is reflected and applied to the vertices."),(0,o.kt)("p",null,"In a nutshell, rigging is the process of creating a skeleton that enables animation for a 3D model and connecting the vertices to move together based on weight values when the skeleton moves."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h2",{parentName:"admonition",id:"weights"},(0,o.kt)("strong",{parentName:"h2"},"Weights")),(0,o.kt)("p",{parentName:"admonition"},'In Rigging Mode, "Weight" refers to the influence value, and it determines how much a bone\'s movement is reflected in the vertices.\n',(0,o.kt)("img",{alt:"Rigging Mode Weight",src:n(13178).Z,width:"2379",height:"1015"})),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"From left, weight values are 0.0, 0.5, 1.0")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The range of the value is from 0.0 to 1.0"),", where 0.0 means the bone's movement has no influence on the vertex, and 1.0 means the bone's movement fully influences the vertex. Through this, the movement of the 3D model can be controlled.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"why-is-rigging-necessary"},(0,o.kt)("strong",{parentName:"h2"},"Why is rigging necessary?")),(0,o.kt)("p",null,"Without rigging, a 3D model exists only in a static, unmoving state, similar to a motionless statue."),(0,o.kt)("p",null,"Through rigging, characters or objects that need to move can be made flexible, allowing for the creation of animations."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h2",{parentName:"admonition",id:"static-mesh-and-skinned-mesh"},(0,o.kt)("strong",{parentName:"h2"},"Static Mesh and Skinned Mesh")),(0,o.kt)("p",{parentName:"admonition"},"When creating and using 3D models in Unity, two types of meshes are used."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Static Meshes:"),"\nA ",(0,o.kt)("strong",{parentName:"p"},"static mesh")," is an object that does not transform and does not apply animation. It is primarily used for objects that do not move, such as backgrounds, buildings, and furniture."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"While static meshes are 'typically' used, if transformations are needed within objects like furniture and buildings, they are made as skinned meshes.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Skinned Meshes:"),"\nA ",(0,o.kt)("strong",{parentName:"p"},"skinned mesh")," is a 3D model that can be animated through the rigging process. It is used for moving objects like characters and animals. Skinned meshes are connected so that vertices move using bones and weight values, allowing for the representation of animation."),(0,o.kt)("admonition",{parentName:"admonition",type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"how-to-check-static-mesh-and-skinned-mesh-in-unity"},(0,o.kt)("strong",{parentName:"h2"},"How to check Static Mesh and Skinned Mesh in Unity")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"select your 3D model."),(0,o.kt)("li",{parentName:"ol"},"When selected, the Inspector window displays the model's information.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have a ",(0,o.kt)("strong",{parentName:"li"},"Mesh Filter component")," and a ",(0,o.kt)("strong",{parentName:"li"},"Mesh Renderer component"),":\n",(0,o.kt)("img",{alt:"Static Mesh",src:n(96600).Z,width:"977",height:"483"}),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"This is a Static Mesh."),(0,o.kt)("li",{parentName:"ol"},"These two components are responsible for the mesh's information and settings for rendering."))),(0,o.kt)("li",{parentName:"ul"},"If you have a ",(0,o.kt)("strong",{parentName:"li"},"Skinned Mesh Renderer component"),":\n",(0,o.kt)("img",{alt:"Skinned Mesh",src:n(91451).Z,width:"967",height:"580"}),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"This is a Skinned Mesh."),(0,o.kt)("li",{parentName:"ol"},"This component supports animation and has the ability to deform the mesh based on bone and weight values.")))))),(0,o.kt)("p",{parentName:"admonition"},"You can distinguish and check Static Mesh and Skinned Mesh in Unity using these methods."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-by-step-rigging-process"},(0,o.kt)("strong",{parentName:"h2"},"Step-by-step rigging process")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare a UModeler X object that has completed ",(0,o.kt)("strong",{parentName:"li"},"modeling")," and ",(0,o.kt)("strong",{parentName:"li"},"UV unwrapping"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Rigging Mode"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create bones"),"."),(0,o.kt)("li",{parentName:"ol"},"Skinning them using the weight-related tools."),(0,o.kt)("li",{parentName:"ol"},"Move or animate the bones to ",(0,o.kt)("strong",{parentName:"li"},"see the results"),".")),(0,o.kt)("p",null,"Below are explanations for each step."),(0,o.kt)("h3",{id:"1-prepare-a-umodeler-x-object-that-has-completed-modeling-and-uv-unwrapping"},"1. Prepare a UModeler X object that has completed modeling and UV unwrapping."),(0,o.kt)("p",null,"Modeling and UV unwrapping are essential steps that must be completed before proceeding with rigging work. Modeling is the process of creating the shape of a 3D model, and UV unwrapping is the process needed to correctly map textures to the surface of a 3D model. Only models that have completed these two processes can undergo rigging work."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check the following document for information on Modeling Mode and the UV Editor.")),(0,o.kt)(r.Z,{items:[{type:"link",label:"Modeling Mode",href:"/docs/modeling-mode"},{type:"link",label:"UV Editor",href:"/docs/uv-editor"}],mdxType:"DocCardList"}),(0,o.kt)("h3",{id:"2-enter-rigging-mode"},"2. Enter Rigging Mode."),(0,o.kt)("p",null,"If modeling and UV unwrapping are completed, enter Rigging Mode. Rigging Mode provides various tools needed for rigging, such as bone creation and weight editing."),(0,o.kt)("h3",{id:"3-create-bones"},"3. Create Bones."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bones")," act as the skeleton that controls the movement of a 3D model. In the process of creating bones, it is necessary to set the position of the bones and the connection structure between them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UModeler X")," provides the ",(0,o.kt)("strong",{parentName:"p"},"Build Bones tool")," to facilitate this process easily. Using this tool, you can quickly construct the desired connection structure of the bones."),(0,o.kt)(r.Z,{items:[{type:"link",label:"Build Bones Tool",href:"/docs/rigging/build-bones-tool"}],mdxType:"DocCardList"}),(0,o.kt)("p",null,"Additionally, it offers the ",(0,o.kt)("strong",{parentName:"p"},"Edit Bones tool"),", which allows for modifications such as editing or adding to already created bones."),(0,o.kt)(r.Z,{items:[{type:"link",label:"Edit Bones Tool",href:"/docs/rigging/edit-bones-tool"}],mdxType:"DocCardList"}),(0,o.kt)("h3",{id:"4-proceed-with-skinning"},"4. Proceed with Skinning"),(0,o.kt)("p",null,"Skinning is the ",(0,o.kt)("strong",{parentName:"p"},"process of linking bones to vertices"),". During this process, weights are assigned to each vertex to determine how much a bone's movement will affect that vertex."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The weight editing tool can be used to perform this process. The tools available for editing weights are as follows:")),(0,o.kt)(r.Z,{items:[{type:"link",label:"Weight Tool",href:"/docs/rigging/weight-tool"},{type:"link",label:"Weight Brush Tool",href:"/docs/rigging/weight-brush-tool"}],mdxType:"DocCardList"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tools that allow for the automatic or quick and convenient assignment of weights are as follows:")),(0,o.kt)(r.Z,{items:[{type:"link",label:"Weight Transfer Tool",href:"/docs/rigging/weight-transfer-tool"},{type:"link",label:"Auto Weight Tool",href:"/docs/rigging/auto-weight-tool"},{type:"link",label:"Envelope Tool",href:"/docs/rigging/envelope-tool"}],mdxType:"DocCardList"}),(0,o.kt)("h3",{id:"5-checking-the-results"},"5. Checking the Results"),(0,o.kt)("p",null,"The final step in the rigging process is to move the bones or apply animation to check the results. At this stage, you can verify whether the rigging work has been performed correctly and whether the desired movements have been implemented successfully."),(0,o.kt)("p",null,"If the desired results are not achieved, you can modify the structure of the bones or the weights to obtain the desired outcome."),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/OBA2s1qbEV4",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},28222:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Guide-b7d550fec1e13e826875b4155741e9d5.png"},91451:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Guide_Skinned-9ee141a032c571b5f0c2ba4e5eae55df.png"},96600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Guide_Static-63b3f19aadaa63fd2a3eac4e9fcf4982.png"},13178:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Guide_Weight-e61f74c27392a08e5b50dc18bd34bae3.png"}}]);