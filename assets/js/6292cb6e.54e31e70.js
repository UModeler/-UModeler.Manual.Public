"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3756],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>g});var a=o(67294);function A(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){A(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,A=function(t,e){if(null==t)return{};var o,a,A={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(A[o]=t[o]);return A}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(A[o]=t[o])}return A}var i=a.createContext({}),s=function(t){var e=a.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},p=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,A=t.mdxType,n=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=s(o),d=A,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||n;return o?a.createElement(g,r(r({ref:e},p),{},{components:o})):a.createElement(g,r({ref:e},p))}));function g(t,e){var o=arguments,A=e&&e.mdxType;if("string"==typeof t||A){var n=o.length,r=new Array(n);r[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[c]="string"==typeof t?t:A,r[1]=l;for(var s=2;s<n;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},88484:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=o(87462),A=(o(67294),o(3905));const n={slug:"/modeling/hotspot-texturing-tool",sidebar_position:12,description:""},r="Hotspot Texturing Tool",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/hotspot-texturing-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/hotspot-texturing-tool",title:"Hotspot Texturing Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-surface/hotspot-texturing-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/hotspot-texturing-tool",permalink:"/docs/modeling/hotspot-texturing-tool",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/modeling/hotspot-texturing-tool",sidebar_position:12,description:""},sidebar:"docs",previous:{title:"Flip Tool",permalink:"/docs/modeling/flip-tool"},next:{title:"Painting Mode",permalink:"/docs/painting-mode"}},i={},s=[{value:"<strong>Instructions</strong>",id:"instructions",level:2},{value:"Summary",id:"summary",level:3},{value:"<strong>Example of use</strong>",id:"example-of-use",level:2},{value:"Create a Hotspot Layout",id:"create-a-hotspot-layout",level:3},{value:"Apply a Modular Texture",id:"apply-a-modular-texture",level:3},{value:"Assign the Hotspot Layout",id:"assign-the-hotspot-layout",level:3},{value:"Assign Temporary Texture",id:"assign-temporary-texture",level:3},{value:"New Layout Feature",id:"new-layout-feature",level:3},{value:"Auto Hotspot in Build",id:"auto-hotspot-in-build",level:3},{value:"Auto Hotspot Selected Faces",id:"auto-hotspot-selected-faces",level:3},{value:"Fit Selected Hotspot Faces",id:"fit-selected-hotspot-faces",level:3}],p={toc:s};function c(t){let{components:e,...n}=t;return(0,A.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"hotspot-texturing-tool"},"Hotspot Texturing Tool"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 001_002_",src:o(7686).Z,width:"2608",height:"1197"})),(0,A.kt)("p",null,"The ",(0,A.kt)("strong",{parentName:"p"},"Hotspot Texturing")," tool is a ",(0,A.kt)("strong",{parentName:"p"},"procedural tool designed for quick and efficient level"),", using ",(0,A.kt)("strong",{parentName:"p"},"designated textures"),". "),(0,A.kt)("hr",null),(0,A.kt)("h2",{id:"instructions"},(0,A.kt)("strong",{parentName:"h2"},"Instructions")),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},"Apply a ",(0,A.kt)("strong",{parentName:"li"},"Modular Texture"),".")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Drag the modular texture you want to use from the Project Panel onto a mesh to apply it.\n")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 003",src:o(42436).Z,width:"162",height:"186"})),(0,A.kt)("ol",{start:2},(0,A.kt)("li",{parentName:"ol"},"Create a ",(0,A.kt)("strong",{parentName:"li"},"Hotspot Layout"),".")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Right-click in the Project Panel and create a new Hotspot Layout."),(0,A.kt)("p",{parentName:"li"},(0,A.kt)("img",{alt:"Hotspot Image 004",src:o(98296).Z,width:"1495",height:"2125"})))),(0,A.kt)("ol",{start:3},(0,A.kt)("li",{parentName:"ol"},"Assign the ",(0,A.kt)("strong",{parentName:"li"},"Hotspot Layout"),".")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"3-1: Open the Hotspot tool.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"3-2: Assign the created Hotspot Layout to the Hotspot Object.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"3-3: Click on the target area or activate the Hotspot Editor from the Editor to enable the Hotspot Editor."),(0,A.kt)("p",{parentName:"li"},"  ",(0,A.kt)("img",{alt:"Hotspot Image 005",src:o(42166).Z,width:"833",height:"804"}),"\n",(0,A.kt)("img",{alt:"Hotspot Image 007",src:o(2736).Z,width:"403",height:"211"})))),(0,A.kt)("ol",{start:4},(0,A.kt)("li",{parentName:"ol"},"Assign ",(0,A.kt)("strong",{parentName:"li"},"Temporary Texture"),".")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Click the gear icon in the top-right corner of the Hotspot Layout Editor and assign a texture to the Temporary Texture field."),(0,A.kt)("p",{parentName:"li"},(0,A.kt)("img",{alt:"Hotspot Image 008",src:o(20472).Z,width:"759",height:"48"}),"\n",(0,A.kt)("img",{alt:"Hotspot Image 009",src:o(29095).Z,width:"1522",height:"406"})))),(0,A.kt)("ol",{start:5},(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("strong",{parentName:"li"},"Snap Type")," and ",(0,A.kt)("strong",{parentName:"li"},"Grid Snap Size"))),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"Snap Type"),": Configues the snapping behavior of the working area."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"Grid Snap Size"),": Definesthe size of the selectable area in pixel units, allowing precise adjustments for the texture."),(0,A.kt)("li",{parentName:"ul"},"For this guide, set the Snap Type to ",(0,A.kt)("strong",{parentName:"li"},"UV")," and the Grid Snap Size to ",(0,A.kt)("strong",{parentName:"li"},"1/256"),".")),(0,A.kt)("ol",{start:6},(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("strong",{parentName:"li"},"Layout Group"),".")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"New Layout"),": Divides the working area into segments.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"Edit Layout"),": Modifies the assigned segments.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"Remove Layout"),": Deletes incorrectly assigned segments."),(0,A.kt)("p",{parentName:"li"},(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(1258).Z,width:"768",height:"175"})))),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"What is DefaultMag?")),(0,A.kt)("p",null,"DefaultMag controls the scale factor between the texture size and the 3D world size."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"DefaultMag = 1:")," A 1x1 area in UV space corresponds to a 1x1 unit in the 3D world."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"DefaultMag > 1:")," The texture is enlarged."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"DefaultMag < 1:")," The texture is scaled down and applied more densely.")),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Tips for Setting DefaultMag:")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Recommended range: ",(0,A.kt)("strong",{parentName:"p"},"1~5."))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Avoid values that are too high (textures may appear blurry) or too low (textures may look overly dense).")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Adjust and test the value to find the optimal balance for your needs."),(0,A.kt)("p",{parentName:"li"}," ",(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(27764).Z,width:"352",height:"78"}),"\n",(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(85385).Z,width:"748",height:"202"})))),(0,A.kt)("ol",{start:7},(0,A.kt)("li",{parentName:"ol"},"New Layout Feature:")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Use this feature to automatically align texture areas to match the mesh's scale changes."),(0,A.kt)("p",{parentName:"li"},(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(99887).Z,width:"1013",height:"806"})))),(0,A.kt)("p",null,"Three Methods for Using Hotspot Texturing"),(0,A.kt)("p",null,"A: Auto Hotspot in Build"),(0,A.kt)("p",null,"A-1: Activate the UV Editor window."),(0,A.kt)("p",null,"A-2: In the Unwrap panel, ensure the mesh has no UVs. If UVs exist, select all and remove them by clicking the cancel icon."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(39262).Z,width:"1446",height:"735"})),(0,A.kt)("p",null,'Tip: Disable the "Auto Unwrap Shape" option in Preferences > Editable Mesh to prevent automatic UV unwrapping for new shapes.'),(0,A.kt)("p",null,"A-3: Select the mesh, then navigate to Surface > Hotspot > Auto Hotspot in Build."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(68848).Z,width:"833",height:"801"})),(0,A.kt)("p",null,"A-4: Move the face to see procedural changes based on the assigned texture."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(18723).Z,width:"1243",height:"369"})),(0,A.kt)("p",null,"B: Auto Hotspot Selected Faces"),(0,A.kt)("p",null,"B-1: Select the mesh and navigate to Surface > Hotspot > Auto Hotspot Selected Face."),(0,A.kt)("p",null,"B-2: After moving the face, textures may stretch or distort. Use Auto Hotspot Selected Faces again after each transformation. This applies only to selected faces."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(59694).Z,width:"839",height:"502"})),(0,A.kt)("p",null,"C: Fit Selected Hotspot Faces"),(0,A.kt)("p",null,'C-1: In the Hotspot Layout Editor window, select Edit Layout. Click a face, then set its Layout Name in the Tool Properties window. In this guide, we name it "test".'),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(16291).Z,width:"2020",height:"1723"})),(0,A.kt)("p",null,"C-2: In the Inspector, go to the UModeler X component and click Surface > Hotspot."),(0,A.kt)("p",null,"C-3: In Tool Properties, select the previously created layout under Selected Layout."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(90230).Z,width:"837",height:"804"})),(0,A.kt)("p",null,"C-4: Click Fit Selected Hotspot Face."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Hotspot Image 010",src:o(7616).Z,width:"802",height:"55"})),(0,A.kt)("p",null,"C-5: Confirm that the selected face displays correctly in the viewport."),(0,A.kt)("h3",{id:"summary"},"Summary"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"A. Auto Hotspot in Build"),": Automatically updates texture regions in real-time when moving mesh faces."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"B. Auto Hotspot Selected Faces"),": Manually updates texture regions for selected faces."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("strong",{parentName:"li"},"C. Fit Selected Hotspot Faces"),": Adjusts textures precisely using assigned layouts.")),(0,A.kt)("hr",null),(0,A.kt)("h2",{id:"example-of-use"},(0,A.kt)("strong",{parentName:"h2"},"Example of use")),(0,A.kt)("h3",{id:"create-a-hotspot-layout"},"Create a Hotspot Layout"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/OpqbYC4NwTQ",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"apply-a-modular-texture"},"Apply a Modular Texture"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/sYyudzwstzU",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"assign-the-hotspot-layout"},"Assign the Hotspot Layout"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/lOLgvSAk4g4",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"assign-temporary-texture"},"Assign Temporary Texture"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/NSQX-1Hk6MI",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"new-layout-feature"},"New Layout Feature"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/hao4rgIWo3c",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"auto-hotspot-in-build"},"Auto Hotspot in Build"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/TuvXFJlCJJw",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"auto-hotspot-selected-faces"},"Auto Hotspot Selected Faces"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/Mrvor0StyO4",frameborder:"0",allowfullscreen:""})),(0,A.kt)("h3",{id:"fit-selected-hotspot-faces"},"Fit Selected Hotspot Faces"),(0,A.kt)("div",{class:"video-container-4-3"},(0,A.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/rpyZ-vPWNP0",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},7686:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_001_002-7f2394e2440ecbe972fd9e96cba7843f.png"},42436:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_003-cd9cdcf1ca7e73f0f7685193e1a5e18c.png"},98296:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_004-ff7afeec272e2bb15268c4a04e785336.png"},42166:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_005-070acdc6f460f23534fd36bb31c62b3d.png"},2736:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_007-481a6dd5f1077097ba53c26360c0bc0d.png"},20472:(t,e,o)=>{o.d(e,{Z:()=>a});const a="data:image/png;base64,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"},29095:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_009-2dc4564cd1e7f2dbe166da406f3ec8de.png"},1258:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_010-7ecf167720029e578aa0170b62bcd866.png"},27764:(t,e,o)=>{o.d(e,{Z:()=>a});const a="data:image/png;base64,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"},85385:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_012-e642d1460025288a8c4a11dd30f05966.png"},99887:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_013-7b2caa6841913a9e0744cf5d0aea98cd.png"},39262:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_017_02-6c784586cd095525bab65c154d20d6a0.png"},68848:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_018-79d8676901ddea6d9302f734fc9a3981.png"},18723:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_019-e395de472f331959d0230fbc72fbbf75.png"},59694:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_020-d5e8c90ee308b88f18a9700b0cd2bc84.png"},16291:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_021-f8a32aaee9788ab66b150ba99bfdf9c6.png"},90230:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/hotspot_022-cfcd6a7b45b9f98cbc4d48643a01de2b.png"},7616:(t,e,o)=>{o.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);