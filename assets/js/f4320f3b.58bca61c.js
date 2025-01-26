"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[89109],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(i),p=o,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return i?n.createElement(f,a(a({ref:t},c),{},{components:i})):n.createElement(f,a({ref:t},c))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},52991:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(67294),o=i(86010),r=i(53438),a=i(39960),l=i(13919),d=i(95999);const s="cardContainer_fWXF",c="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},i)}function p(e){let{href:t,icon:i,title:r,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",c),title:r},i," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const i=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(v,{items:i.items,className:t})}function v(e){const{items:t,className:i}=e;if(!t)return n.createElement(b,e);const a=(0,r.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",i)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},69769:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=i(87462),o=(i(67294),i(3905)),r=i(52991);const a={slug:"/modeling/subdivide-tool",sidebar_position:7,description:""},l="Subdivide Tool",d={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",id:"version-basic/editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",title:"Subdivide Tool",description:"",source:"@site/versioned_docs/version-basic/editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/subdivide-tool",permalink:"/docs/basic/modeling/subdivide-tool",draft:!1,tags:[],version:"basic",sidebarPosition:7,frontMatter:{slug:"/modeling/subdivide-tool",sidebar_position:7,description:""},sidebar:"docs",previous:{title:"Bridge Tool",permalink:"/docs/basic/modeling/bridge-tool"},next:{title:"Loop Cut Tool",permalink:"/docs/basic/modeling/loopcut-tool"}},s={},c=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"Quarter the entire face while transforming the bend",id:"quarter-the-entire-face-while-transforming-the-bend",level:3},{value:"Quarter a Face without Bending Deformation",id:"quarter-a-face-without-bending-deformation",level:3},{value:"<strong>Example of usage</strong>",id:"example-of-usage",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subdivide-tool"},"Subdivide Tool"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Subdivide Tool",src:i(7538).Z,width:"1576",height:"562"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Subdivide Tool")," is a tool for quartering faces. If no faces are selected, it will quarter all faces to smooth out bends, and if specific faces are selected, it will quarter only the selected faces without deformation."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Running the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide Tool")," will ",(0,o.kt)("strong",{parentName:"p"},"divide the entire face of the selected object into quarters"),", so be careful when running it as it may cause ",(0,o.kt)("strong",{parentName:"p"},"optimization issues with 3D objects due to the large number of faces, momentary editor slowdowns, etc."),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"subdivide-modifier"},"Subdivide Modifier"),(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide Tool")," can lead to inefficient modeling because it is applied directly to the underlying mesh."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Subdivide Modifier",src:i(22361).Z,width:"1584",height:"578"})),(0,o.kt)("p",{parentName:"admonition"},"Working through the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide modifier (not a tool)")," allows you to model more efficiently because it allows you to apply deformations to the model while ",(0,o.kt)("strong",{parentName:"p"},"preserving the original mesh"),"."),(0,o.kt)(r.Z,{items:[{type:"link",label:"Subdivide Modifier",href:"/docs/modeling/subdivide-modifier"}],mdxType:"DocCardList"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use-it"},(0,o.kt)("strong",{parentName:"h2"},"How to use it")),(0,o.kt)("h3",{id:"quarter-the-entire-face-while-transforming-the-bend"},"Quarter the entire face while transforming the bend"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("strong",{parentName:"li"},"Subdivide Tool"),"."),(0,o.kt)("li",{parentName:"ol"},"the entire face will be quartered and additional faces will be created.\n",(0,o.kt)("img",{alt:"Subdivide Tool",src:i(7538).Z,width:"1576",height:"562"}))),(0,o.kt)("h3",{id:"quarter-a-face-without-bending-deformation"},"Quarter a Face without Bending Deformation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the face."),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("strong",{parentName:"li"},"Subdivide Tool"),"."),(0,o.kt)("li",{parentName:"ol"},"The selected face is quartered and an additional face is created.\n",(0,o.kt)("img",{alt:"Subdivide Tool",src:i(74487).Z,width:"1576",height:"562"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-of-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example of usage")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/SXkmgeHeNBA",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},7538:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Modeling_Add_Subdivide_1-00ffadd2c875c572c2169781513bd8e1.png"},74487:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Modeling_Add_Subdivide_2-e996ba99542810bdd0b08d3c7d39de43.png"},22361:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Modeling_Modifier_Subdivide-f545980ba8f9e2e9239edfa4f8c690ee.png"}}]);