"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2250],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>u});var o=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function d(e,i){if(null==e)return{};var t,o,r=function(e,i){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var i=o.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},c=function(e){var i=l(e.components);return o.createElement(s.Provider,{value:i},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return o.createElement(o.Fragment,{},i)}},f=o.forwardRef((function(e,i){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,u=m["".concat(s,".").concat(f)]||m[f]||p[f]||n;return t?o.createElement(u,a(a({ref:i},c),{},{components:t})):o.createElement(u,a({ref:i},c))}));function u(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var n=t.length,a=new Array(n);a[0]=f;var d={};for(var s in i)hasOwnProperty.call(i,s)&&(d[s]=i[s]);d.originalType=e,d[m]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<n;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23022:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const n={slug:"/zepeto-item-guidebook-basics-of-modeling-modifier",sidebar_position:5,description:""},a="Modifier",d={unversionedId:"the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-modifier",id:"the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-modifier",title:"Modifier",description:"",source:"@site/docs/the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-modifier.md",sourceDirName:"the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling",slug:"/zepeto-item-guidebook-basics-of-modeling-modifier",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-modifier",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/the-use-of-umodelerx/zepeto-item-guidebook/basics-of-modeling/zepeto-item-guidebook-basics-of-modeling-modifier.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/zepeto-item-guidebook-basics-of-modeling-modifier",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Deform",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-deform"},next:{title:"Misc",permalink:"/docs/zepeto-item-guidebook-basics-of-modeling-misc"}},s={},l=[{value:"Bend",id:"bend",level:2},{value:"Subdivide",id:"subdivide",level:2},{value:"Shell",id:"shell",level:2},{value:"Mirror",id:"mirror",level:2},{value:"FFD",id:"ffd",level:2},{value:"Push",id:"push",level:2},{value:"Decimate",id:"decimate",level:2}],c=(m="P",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const p={toc:l};function f(e){let{components:i,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modifier"},"Modifier"),(0,r.kt)("div",{class:"video-container"},(0,r.kt)("iframe",{src:"https://www.youtube.com/embed/6TjCtmFJj-I?start=384",frameborder:"0",allowfullscreen:""})),(0,r.kt)("p",null,"Modifiers provide a ",(0,r.kt)("strong",{parentName:"p"},"non-destructive")," way to modify the original model."),(0,r.kt)("p",null,"You can accumulate edits using the modifier ",(0,r.kt)("strong",{parentName:"p"},"stack")," or ",(0,r.kt)("strong",{parentName:"p"},"toggle")," specific modifiers on and off for editing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_ModifierSystem",src:t(18281).Z,width:"1068",height:"640"})),(0,r.kt)("p",null,"You can add modifiers with the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," icon, delete them with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," icon, or merge them with the Source Mesh. Be cautious when merging, as it may make modifying the original mesh difficult."),(0,r.kt)("p",null,"You can rearrange modifiers, rename them, or toggle their activation freely."),(0,r.kt)("h2",{id:"bend"},"Bend"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Bend")," modifier bends objects along a specified ",(0,r.kt)("strong",{parentName:"p"},"axis")," and ",(0,r.kt)("strong",{parentName:"p"},"angle"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Bend",src:t(260).Z,width:"1430",height:"564"})),(0,r.kt)("h2",{id:"subdivide"},"Subdivide"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Subdivide")," modifier smooths surfaces by subdividing faces. You can adjust the level of subdivision."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Subdivide",src:t(19544).Z,width:"1584",height:"578"})),(0,r.kt)("h2",{id:"shell"},"Shell"),(0,r.kt)("p",null,"The Shell modifier adds ",(0,r.kt)("strong",{parentName:"p"},"thickness")," to objects based on the source mesh."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Shell",src:t(96246).Z,width:"1270",height:"499"})),(0,r.kt)("h2",{id:"mirror"},"Mirror"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Mirror")," modifier creates a mirrored object based on a specified axis."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Mirror_Axis_X",src:t(63924).Z,width:"1406",height:"640"})),(0,r.kt)("h2",{id:"ffd"},"FFD"),(0,r.kt)("p",null,"The FFD modifier provides a ",(0,r.kt)("strong",{parentName:"p"},"grid-based box for manipulating")," meshes. The vertices of the grid move along with nearby vertices of the source mesh."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_FFD",src:t(44799).Z,width:"1920",height:"640"})),(0,r.kt)("h2",{id:"push"},"Push"),(0,r.kt)("p",null,"The Push modifier ",(0,r.kt)("strong",{parentName:"p"},"moves faces")," along or against their normals."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Push",src:t(29720).Z,width:"1394",height:"588"})),(0,r.kt)("h2",{id:"decimate"},"Decimate"),(0,r.kt)("p",null,"The Decimate modifier ",(0,r.kt)("strong",{parentName:"p"},"reduces the polygon count")," of models. Be mindful of how it may alter the model's shape based on options."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic_Modeling_Modifier_Decimate",src:t(29552).Z,width:"1824",height:"640"})),(0,r.kt)("div",{class:"card-container"},(0,r.kt)("div",{class:"card"},(0,r.kt)("h3",{class:"card-title"},"Modifier"),(0,r.kt)(c,{mdxType:"P"},"For more detailed information, please check the following link"),(0,r.kt)("a",{href:"/docs/modifier",class:"card-link"},"Check"))))}f.isMDXComponent=!0},260:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Bend-029ff5326e0156716d670a78d201b70e.png"},29552:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Decimate-2744140ae49f81e895dfa633a6f6e236.png"},44799:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_FFD-00d6d2f403c15d0b050b451c182d78e2.png"},63924:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Mirror_Axis_X-2b75acab1dcc5c91c2e2c9bade59a7a9.png"},18281:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_ModifierSystem-732d889fef36af84adce7a183f34a56b.png"},29720:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Push-4065521a7121076542ced828a764c2a3.png"},96246:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Shell-dbd639641e16b4a5c0c74eeb14b44fb7.png"},19544:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/Modeling_Modifier_Subdivide-f545980ba8f9e2e9239edfa4f8c690ee.png"}}]);