"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(m,a(a({ref:t},g),{},{components:n})):i.createElement(m,a({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(67294),r=n(86010),o=n(53438),a=n(39960),l=n(13919),s=n(95999);const c="cardContainer_fWXF",g="cardTitle_rnsV",p="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function d(e){let{href:t,icon:n,title:o,description:a}=e;return i.createElement(h,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",g),title:o},n," ",o),a&&i.createElement("p",{className:(0,r.Z)("text--truncate",p),title:a},a))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?i.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,o.jA)();return i.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return i.createElement(k,e);const a=(0,o.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},36559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var i=n(87462),r=(n(67294),n(3905)),o=n(52991);const a={slug:"/rigging/weight-tool",sidebar_position:2,description:""},l="Weight Tool",s={unversionedId:"editable-mesh/rigging-mode/weight-tool",id:"editable-mesh/rigging-mode/weight-tool",title:"Weight Tool",description:"",source:"@site/docs/editable-mesh/rigging-mode/weight-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-tool",permalink:"/docs/rigging/weight-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/rigging/weight-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Rigging Mode Guide",permalink:"/docs/rigging/guide"},next:{title:"Weight Brush Tool",permalink:"/docs/rigging/weight-brush-tool"}},c={},g=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Apply Weight",id:"apply-weight",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Animation",id:"apply-animation",level:3},{value:"Predetermined Weight Button",id:"predetermined-weight-button",level:3},{value:"Apply Weight",id:"apply-weight-1",level:3},{value:"Scale Weight",id:"scale-weight",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:g};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"weight-tool"},"Weight Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weight Tool",src:n(4309).Z,width:"1624",height:"603"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Weight Tool")," is a tool that allows you to ",(0,r.kt)("strong",{parentName:"p"},"assign weights to selected vertices"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the desired bone in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," or ",(0,r.kt)("strong",{parentName:"p"},"Bone Tree area"),".\n",(0,r.kt)("img",{alt:"Weight Tool Bone Select",src:n(47128).Z,width:"684",height:"384"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},(0,r.kt)("strong",{parentName:"h2"},"shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,r.kt)("p",{parentName:"admonition"},"This shortcut allows you to ",(0,r.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"launch the ",(0,r.kt)("strong",{parentName:"p"},"Weight Tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the vertices you want to associate with the selected bones.\n",(0,r.kt)("img",{alt:"Weight Tool Select Vertex",src:n(42251).Z,width:"776",height:"575"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the vertex selected, either ",(0,r.kt)("strong",{parentName:"p"},"adjust the Apply Weight property")," or press the desired weight value button.\n",(0,r.kt)("img",{alt:"Weight Tool Select Vertex",src:n(89012).Z,width:"941",height:"245"}),"\n",(0,r.kt)("img",{alt:"Weight Tool Select Weight",src:n(83058).Z,width:"776",height:"575"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A weight has been applied to the vertex.\n",(0,r.kt)("img",{alt:"Weight Tool Result",src:n(46247).Z,width:"776",height:"575"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weight Tool Properties",src:n(88600).Z,width:"920",height:"568"})),(0,r.kt)("h3",{id:"apply-weight"},"Apply Weight"),(0,r.kt)("p",null,"Set the weight value to be assigned."),(0,r.kt)("h3",{id:"select"},(0,r.kt)("strong",{parentName:"h3"},"Select")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weight Tool Properties Select",src:n(6723).Z,width:"920",height:"190"})),(0,r.kt)("p",null,"This property allows you to set how the vertices are selected."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Backface Select",href:"/docs/vertex-element#backface-select"},{type:"link",label:"Camera Based Select",href:"/docs/vertex-element#camera-based-select"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"basic"},(0,r.kt)("strong",{parentName:"h3"},"Basic")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weight Tool Properties Basic",src:n(45730).Z,width:"800",height:"400"})),(0,r.kt)("p",null,"This property is for rigging convenience."),(0,r.kt)("h3",{id:"show-handler"},"Show Handler"),(0,r.kt)("p",null,"Shows or hides handlers for moving or rotating bones."),(0,r.kt)("h3",{id:"show-bones"},"Show Bones"),(0,r.kt)("p",null,"Property to show bones."),(0,r.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,r.kt)("p",null,"This property shows the names of the bones."),(0,r.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,r.kt)("p",null,"Property that allows you to set whether or not to enable selecting bones via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,r.kt)("h3",{id:"apply-animation"},"Apply Animation"),(0,r.kt)("h3",{id:"predetermined-weight-button"},"Predetermined Weight Button"),(0,r.kt)("p",null,"Button to assign a weight to selected vertices."),(0,r.kt)("h3",{id:"apply-weight-1"},"Apply Weight"),(0,r.kt)("p",null,"Allows you to set a weight value to assign or assign a weight."),(0,r.kt)("h3",{id:"scale-weight"},"Scale Weight"),(0,r.kt)("p",null,"Allows you to multiply the weight of the selected vertices by a value, or set a value to multiply by."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/-PEKtEOW9zU",frameborder:"0",allowfullscreen:""})))}h.isMDXComponent=!0},47128:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_SelectBone-a08f217a2da7ae53b487bedbe3bd0c4e.png"},4309:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight-c127fcccb4486c4099b20bdd9e56cd67.png"},88600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_Properties-9de664c14c02e703b599cc6506b4d38f.png"},45730:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_Properties_Basic-1142aec9d536ec23ba6664b969ce6f8d.png"},46247:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_Result-9ecebe7488fb28af4367b34cd0e1ea12.png"},6723:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_Select-9ff0a1b97267fcbff63fb3665c03bfa0.png"},42251:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_SelectVertex-64d642b0fd1e914d248cfbd65fde87f5.png"},83058:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_SetWeight-f941b71b0c6c8cd75345bf4fc4c85ae3.png"},89012:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rigging_Weight_WeightSet1-2b7b423b59e83af86ad7288abc84f522.png"}}]);