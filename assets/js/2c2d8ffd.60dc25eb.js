"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=h(r),d=i,c=g["".concat(l,".").concat(d)]||g[d]||u[d]||s;return r?n.createElement(c,a(a({ref:t},p),{},{components:r})):n.createElement(c,a({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:i,a[1]=o;for(var h=2;h<s;h++)a[h]=r[h];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=r(87462),i=(r(67294),r(3905));const s={slug:"/rigging/weight-brush-tool",sidebar_position:3,description:""},a="Weight Brush Tool",o={unversionedId:"editable-mesh/rigging-mode/weight-brush-tool",id:"editable-mesh/rigging-mode/weight-brush-tool",title:"Weight Brush Tool",description:"",source:"@site/docs/editable-mesh/rigging-mode/weight-brush-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-brush-tool",permalink:"/docs/rigging/weight-brush-tool",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/rigging-mode/weight-brush-tool.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/rigging/weight-brush-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Weight Tool",permalink:"/docs/rigging/weight-tool"},next:{title:"Reset Poses Tool",permalink:"/docs/rigging/reset-poses-tool"}},l={},h=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Weight Brush Type",id:"weight-brush-type",level:3},{value:"Weight",id:"weight",level:3},{value:"<strong>Brush</strong>",id:"brush",level:3},{value:"Size Type",id:"size-type",level:3},{value:"Brush Radius Distance",id:"brush-radius-distance",level:3},{value:"Brush Radius Pixel",id:"brush-radius-pixel",level:3},{value:"Brush Strength",id:"brush-strength",level:3},{value:"Fall Off",id:"fall-off",level:3},{value:"Fall Off Shape Example",id:"fall-off-shape-example",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:h};function g(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"weight-brush-tool"},"Weight Brush Tool"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Brush Tool",src:r(73715).Z,width:"1542",height:"640"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Weight Brush Tool")," allows you to assign vertex weights to selected bones by brushing them."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-use"},(0,i.kt)("strong",{parentName:"h2"},"How to Use")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the desired bones in the ",(0,i.kt)("strong",{parentName:"p"},"Scene")," or ",(0,i.kt)("strong",{parentName:"p"},"Bone Tree area"),".\n",(0,i.kt)("img",{alt:"Bone Select",src:r(47128).Z,width:"684",height:"384"})),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},(0,i.kt)("strong",{parentName:"h2"},"shortcut ",(0,i.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,i.kt)("p",{parentName:"admonition"},"This shortcut allows you to ",(0,i.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch the ",(0,i.kt)("strong",{parentName:"p"},"Weight Brush Tool"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the weight value to be assigned in the ",(0,i.kt)("strong",{parentName:"p"},"Weight property"),".\n",(0,i.kt)("img",{alt:"Weight Brush Tool Propertie",src:r(39066).Z,width:"941",height:"135"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Click-Drag"))," the surface.\n",(0,i.kt)("img",{alt:"Weight Brush Tool Drag",src:r(51345).Z,width:"814",height:"587"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Weights have been applied to the vertices.\n",(0,i.kt)("img",{alt:"Weight Brush Tool Result",src:r(25456).Z,width:"814",height:"587"})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"properties"},(0,i.kt)("strong",{parentName:"h2"},"Properties")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Brush Tool Properties",src:r(47090).Z,width:"800",height:"700"})),(0,i.kt)("h3",{id:"weight-brush-type"},"Weight Brush Type"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mix")),(0,i.kt)("p",null,"   This option blends the current weight with the weight being applied by the brush."),(0,i.kt)("p",null,"   The new value is gradually added to the existing weight, and both values are mixed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Add")),(0,i.kt)("p",null,"   This option adds weight to the selected area. The new weight value is added to the area where the brush is applied."),(0,i.kt)("p",null,"   The weight keeps increasing based on the strength set by the user. If you continue brushing, the weight will be applied more intensely."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subtract")),(0,i.kt)("p",null,"   This option decreases the current weight."),(0,i.kt)("p",null,"   It is used to reduce weight in certain areas, gradually decreasing the weight value as the brush is applied."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Blur")),(0,i.kt)("p",null,"   This option softens the weight distribution, blending sharp edges into smoother transitions."),(0,i.kt)("p",null,"   It is typically used to evenly distribute weight across vertices influenced by adjacent bones, creating a more natural connection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lighten")),(0,i.kt)("p",null,"   This option brightens (increases) the weight. It adds a slightly higher value to areas with lower weights."),(0,i.kt)("p",null,"   The weight only increases gradually when it is low and is restricted from exceeding a certain limit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Darken")),(0,i.kt)("p",null,"   This option darkens (decreases) the weight, gradually lowering it in areas with higher weights."),(0,i.kt)("p",null,"   It is mainly used to reduce the influence of a bone that is affecting an area too strongly."),(0,i.kt)("h3",{id:"weight"},"Weight"),(0,i.kt)("p",null,"This property allows you to set the weight value to be painted."),(0,i.kt)("p",null,"It can range from 0 to 1."),(0,i.kt)("h3",{id:"brush"},(0,i.kt)("strong",{parentName:"h3"},"Brush")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Brush Tool Properties Brush",src:r(20144).Z,width:"853",height:"368"})),(0,i.kt)("p",null,"This property allows you to adjust the size and strength of the brush."),(0,i.kt)("h3",{id:"size-type"},"Size Type"),(0,i.kt)("p",null,"This property selects the base for the brush size."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pixel")),(0,i.kt)("p",null,"This property determines the size of the brush in pixels."),(0,i.kt)("p",null,"You can set the size in the ",(0,i.kt)("strong",{parentName:"p"},"Brush Radius Pixel property"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Distance")),(0,i.kt)("p",null,"This property determines the size of the brush relative to its size in the world."),(0,i.kt)("p",null,"You can set the size in the Brush Radius Distance property."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Distance Centimeter")),(0,i.kt)("p",null,"Determines the size of the brush relative to its size on the world. The unit is ",(0,i.kt)("strong",{parentName:"p"},"centimeters"),"."),(0,i.kt)("p",null,"You can set the size in the **Brush Radius Distance property."),(0,i.kt)("h3",{id:"brush-radius-distance"},"Brush Radius Distance"),(0,i.kt)("p",null,"This property sets the size of the brush relative to its ",(0,i.kt)("strong",{parentName:"p"},"worldly size"),"."),(0,i.kt)("p",null,"Available only when the ",(0,i.kt)("strong",{parentName:"p"},"Size Type property")," is set to ",(0,i.kt)("strong",{parentName:"p"},"Distance, Distance Centimeter"),"."),(0,i.kt)("h3",{id:"brush-radius-pixel"},"Brush Radius Pixel"),(0,i.kt)("p",null,"This property sets the size of the brush in pixels."),(0,i.kt)("p",null,"This property is only available when the ",(0,i.kt)("strong",{parentName:"p"},"Size Type property")," is set to ",(0,i.kt)("strong",{parentName:"p"},"Pixel"),"."),(0,i.kt)("h3",{id:"brush-strength"},"Brush Strength"),(0,i.kt)("p",null,"Property for brush strength."),(0,i.kt)("h3",{id:"fall-off"},"Fall Off"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Graph Type property")," that determines the shape of the brush. It can be edited by ",(0,i.kt)("strong",{parentName:"p"},"clicking")," on the graph next to ",(0,i.kt)("strong",{parentName:"p"},"Fall Off"),"."),(0,i.kt)("h3",{id:"fall-off-shape-example"},"Fall Off Shape Example"),(0,i.kt)("p",null,"This is an example of how the Fall Off shape changes the appearance of the selection."),(0,i.kt)("h3",{id:"basic"},(0,i.kt)("strong",{parentName:"h3"},"Basic")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Brush Tool Properties Basic",src:r(58287).Z,width:"853",height:"324"})),(0,i.kt)("p",null,"Properties for rigging convenience."),(0,i.kt)("h3",{id:"show-handler"},"Show Handler"),(0,i.kt)("p",null,"Show or hide handlers for moving or rotating bones."),(0,i.kt)("h3",{id:"show-bones"},"Show Bones"),(0,i.kt)("p",null,"Property to show bones."),(0,i.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,i.kt)("p",null,"This property shows the names of the bones."),(0,i.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,i.kt)("p",null,"Property that allows you to set whether or not to enable selecting bones via ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Shift+Click")),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"example-usage"},(0,i.kt)("strong",{parentName:"h2"},"Example Usage")),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/jdz7VO8aZEI",frameborder:"0",allowfullscreen:""})))}g.isMDXComponent=!0},47128:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_SelectBone-a08f217a2da7ae53b487bedbe3bd0c4e.png"},73715:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush-8affa804c152e58abfe9fda2198654a4.png"},51345:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Drag-d8caa38fd9c1a9f3f3ef27cc1333233a.png"},47090:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Properties-847e9459a8f49b3ec4da642da12ce0ce.png"},58287:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Properties_Basic-673835b8412dee8a5a082c2edefe20c7.png"},20144:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Properties_Brush-f8c129c75b4507e4ecd0446e2fde4940.png"},39066:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Properties_Weight-bd23ec52245cfc0accd3df783bfc148c.png"},25456:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Rigging_WeightBrush_Result-b08eb65a0b5f09edc39d0655c80d64b3.png"}}]);