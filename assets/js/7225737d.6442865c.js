"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(86010),o=n(53438),i=n(39960),l=n(13919),s=n(95999);const p="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function c(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",p)},n)}function m(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",u),title:i},i))}function h(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:e})))))}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),p=n(67392),d=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var k=n(72389);const f="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==l&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},43671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(52991),i=n(74866),l=n(85162);const s={slug:"/uveditor/settings-interface",sidebar_position:2,description:""},p="Settings and Interface",d={unversionedId:"editable-mesh/uv-editor/uv-editor-settings-interface",id:"editable-mesh/uv-editor/uv-editor-settings-interface",title:"Settings and Interface",description:"",source:"@site/docs/editable-mesh/uv-editor/uv-editor-settings-interface.md",sourceDirName:"editable-mesh/uv-editor",slug:"/uveditor/settings-interface",permalink:"/docs/uveditor/settings-interface",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/uveditor/settings-interface",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"UV Editor Guide",permalink:"/docs/uveditor/guide"},next:{title:"Alignment Group",permalink:"/docs/uveditor-alignment"}},u={},c=[{value:"<strong>1. Toolbar</strong>",id:"1-toolbar",level:2},{value:"The Pan and Transform Gizmos",id:"the-pan-and-transform-gizmos",level:3},{value:"Hand Tool",id:"hand-tool",level:3},{value:"Move Tool",id:"move-tool",level:3},{value:"Rotation Tool",id:"rotation-tool",level:3},{value:"Scale Tool",id:"scale-tool",level:3},{value:"Rectangle Tool",id:"rectangle-tool",level:3},{value:"<strong>Selecting a UV Element</strong>",id:"selecting-a-uv-element",level:3},{value:"Select UV Vertex",id:"select-uv-vertex",level:3},{value:"Select UV Edge",id:"select-uv-edge",level:3},{value:"Select UV Face",id:"select-uv-face",level:3},{value:"Select UV Island",id:"select-uv-island",level:3},{value:"<strong>UV Channel</strong>",id:"uv-channel",level:3},{value:"Create Channel",id:"create-channel",level:3},{value:"Remove Channel",id:"remove-channel",level:3},{value:"<strong>Settings and Pivots</strong>",id:"settings-and-pivots",level:3},{value:"Cursor Tool",id:"cursor-tool",level:3},{value:"Gizmo Transition Tool",id:"gizmo-transition-tool",level:3},{value:"Settings",id:"settings",level:3},{value:"<strong>2. Settings Area</strong>",id:"2-settings-area",level:2},{value:"Snap Type",id:"snap-type",level:3},{value:"ShowIslandBoundary",id:"showislandboundary",level:3},{value:"FillPolygons",id:"fillpolygons",level:3},{value:"ShowGrid",id:"showgrid",level:3},{value:"ShowAxes",id:"showaxes",level:3},{value:"ShowTexture",id:"showtexture",level:3},{value:"EnableAlphaChannel",id:"enablealphachannel",level:3},{value:"TexXNum",id:"texxnum",level:3},{value:"TexYNum",id:"texynum",level:3},{value:"Material",id:"material",level:3},{value:"All",id:"all",level:4},{value:"<strong>3. Workspace</strong>",id:"3-workspace",level:2},{value:"<strong>4. UV Tool Area</strong>",id:"4-uv-tool-area",level:2},{value:"Unwrap Group",id:"unwrap-group",level:3},{value:"Selection group",id:"selection-group",level:3},{value:"Quick Transform group",id:"quick-transform-group",level:3},{value:"Alignment group",id:"alignment-group",level:3},{value:"Weld And Break group",id:"weld-and-break-group",level:3},{value:"Arrange group",id:"arrange-group",level:3},{value:"Misc group",id:"misc-group",level:3}],m={toc:c};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings-and-interface"},"Settings and Interface"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UV Editor Interface",src:n(18079).Z,width:"2110",height:"1292"})),(0,r.kt)("h2",{id:"1-toolbar"},(0,r.kt)("strong",{parentName:"h2"},"1. Toolbar")),(0,r.kt)("p",null,"Screen Pan, Transform Gizmo, UV Element Selector, Cursor, and Pivot Toggle are listed in this order."),(0,r.kt)("h3",{id:"the-pan-and-transform-gizmos"},"The Pan and Transform Gizmos"),(0,r.kt)("p",null,"It consists of the Hand tool and the Transform Gizmo."),(0,r.kt)("p",null,"You can transform the selected UV element by first selecting the desired UV element and then pressing one of the gizmos to manipulate the resulting ",(0,r.kt)("strong",{parentName:"p"},"Gizmo"),"."),(0,r.kt)("h3",{id:"hand-tool"},"Hand Tool"),(0,r.kt)("p",null,"This tool is used to move around the screen. After launching the ",(0,r.kt)("strong",{parentName:"p"},"Hand Tool"),", you can move the screen by ",(0,r.kt)("strong",{parentName:"p"},"click-dragging")," around the ",(0,r.kt)("strong",{parentName:"p"},"UV Editor workspace"),". ",(0,r.kt)("strong",{parentName:"p"},"The keyboard shortcut is ",(0,r.kt)("inlineCode",{parentName:"strong"},"Q"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"keyboard-shortcut-middle-click-drag"},(0,r.kt)("strong",{parentName:"h2"},"Keyboard shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"middle-click-drag"))),(0,r.kt)("p",{parentName:"admonition"},"We recommend using ",(0,r.kt)("strong",{parentName:"p"},"Middle-click-drag")," to move the screen even when using the ",(0,r.kt)("strong",{parentName:"p"},"Transform Gizmo")," tool, as it allows you to move the screen ",(0,r.kt)("strong",{parentName:"p"},"without switching tools"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"keyboard-shortcuts-for-screen-manipulation"},"Keyboard shortcuts for screen manipulation."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"To pan the screen: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Q(Hand tool)+click-drag")," , ",(0,r.kt)("inlineCode",{parentName:"strong"},"Center-click-drag"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zoom in and out of the screen: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Wheel rotation"))))),(0,r.kt)("h3",{id:"move-tool"},"Move Tool"),(0,r.kt)("p",null,"This tool is used to move selected UV elements. ",(0,r.kt)("strong",{parentName:"p"},"The keyboard shortcut is ",(0,r.kt)("inlineCode",{parentName:"strong"},"W"))),(0,r.kt)("h3",{id:"rotation-tool"},"Rotation Tool"),(0,r.kt)("p",null,"This tool is used to rotate the selected UV element. ",(0,r.kt)("strong",{parentName:"p"},"The hotkey is ",(0,r.kt)("inlineCode",{parentName:"strong"},"E"))),(0,r.kt)("h3",{id:"scale-tool"},"Scale Tool"),(0,r.kt)("p",null,"This tool is used to scale the selected UV element. ",(0,r.kt)("strong",{parentName:"p"},"Keyboard shortcut is ",(0,r.kt)("inlineCode",{parentName:"strong"},"R"))),(0,r.kt)("h3",{id:"rectangle-tool"},"Rectangle Tool"),(0,r.kt)("p",null,"This tool is used to resize the selected UV element. ",(0,r.kt)("strong",{parentName:"p"},"Keyboard shortcut is ",(0,r.kt)("inlineCode",{parentName:"strong"},"T"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"differences-from-the-scale-tool"},"Differences from the Scale tool"),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Rectangle tool")," differs from the ",(0,r.kt)("strong",{parentName:"p"},"Scale tool")," in that it manipulates points in an imaginary rectangle, allowing for resizing on a different basis.")),(0,r.kt)("h3",{id:"selecting-a-uv-element"},(0,r.kt)("strong",{parentName:"h3"},"Selecting a UV Element")),(0,r.kt)("p",null,"Tools for selecting UV elements for editing."),(0,r.kt)("p",null,"You must ",(0,r.kt)("strong",{parentName:"p"},"select a UV element")," before you can use the ",(0,r.kt)("strong",{parentName:"p"},"Transform Gizmo Tool")," and the ",(0,r.kt)("strong",{parentName:"p"},"Tools that work on specific UV elements"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"to-select-a-uv-element"},"To ",(0,r.kt)("strong",{parentName:"h2"},"select a UV element")),(0,r.kt)("p",{parentName:"admonition"},"To select a UV element, make sure that the desired ",(0,r.kt)("strong",{parentName:"p"},"UV element selection tool")," is ",(0,r.kt)("strong",{parentName:"p"},"enabled"),", and then click and drag to create a selection.\nYou can only select UV elements that are either within the selection or span the selection.")),(0,r.kt)("h3",{id:"select-uv-vertex"},"Select UV Vertex"),(0,r.kt)("p",null,"This tool selects a UV vertex."),(0,r.kt)("h3",{id:"select-uv-edge"},"Select UV Edge"),(0,r.kt)("p",null,"This tool selects a UV edge."),(0,r.kt)("h3",{id:"select-uv-face"},"Select UV Face"),(0,r.kt)("p",null,"This tool selects a UV face."),(0,r.kt)("h3",{id:"select-uv-island"},"Select UV Island"),(0,r.kt)("p",null,"This tool selects a UV island."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"uv-island"},"UV Island"),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("strong",{parentName:"p"},"UV island")," is a group of ",(0,r.kt)("strong",{parentName:"p"},"UV elements that are connected to each other"),".")),(0,r.kt)("h3",{id:"uv-channel"},(0,r.kt)("strong",{parentName:"h3"},"UV Channel")),(0,r.kt)("p",null,"Select the UV Channel to edit. Channel 0 always exists."),(0,r.kt)("p",null,"Generated UV channels are displayed in bright blue, while non-generated channels are shown in dark red."),(0,r.kt)("h3",{id:"create-channel"},"Create Channel"),(0,r.kt)("p",null,"Activates the selected UV channel."),(0,r.kt)("h3",{id:"remove-channel"},"Remove Channel"),(0,r.kt)("p",null,"Deactivates the selected UV channel."),(0,r.kt)("h3",{id:"settings-and-pivots"},(0,r.kt)("strong",{parentName:"h3"},"Settings and Pivots")),(0,r.kt)("h3",{id:"cursor-tool"},"Cursor Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Cursor tool")," is a point-like cursor used in the UV Editor when you want to use a tool relative to a specific location."),(0,r.kt)("p",null,"It is most commonly used as the location of gizmos in the Rotation tool, Scale tool, and other tools related to UVs. You can move the ",(0,r.kt)("strong",{parentName:"p"},"center point of the cursor")," by ",(0,r.kt)("strong",{parentName:"p"},"clicking and dragging")," it."),(0,r.kt)("h3",{id:"gizmo-transition-tool"},"Gizmo Transition Tool"),(0,r.kt)("p",null,"This is a tool to ",(0,r.kt)("strong",{parentName:"p"},"switch")," the base of the ",(0,r.kt)("strong",{parentName:"p"},"gizmo position"),", which switches the ",(0,r.kt)("strong",{parentName:"p"},"Pivot property")," and ",(0,r.kt)("strong",{parentName:"p"},"Center property")," each time it is pressed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("strong",{parentName:"p"},"Cursor tool")," is active, the gizmo position will be fixed to the cursor position.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pivot")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Pivot property")," is a property that uses the ",(0,r.kt)("strong",{parentName:"p"},"position of the last selected UV element")," as the position of the gizmo."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to change the position of the gizmo to the position of a ",(0,r.kt)("strong",{parentName:"p"},"specific UV element"),", simply ",(0,r.kt)("strong",{parentName:"p"},"deselect")," that UV element and then ",(0,r.kt)("strong",{parentName:"p"},"reselect")," it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Center")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Center property")," uses the center of the selected UV element as the position of the gizmo."),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"multiple UV elements")," are selected, the average position of the selected UV elements will be used as the gizmo position."),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Buttons to display the settings area of the UV Editor."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-settings-area"},(0,r.kt)("strong",{parentName:"h2"},"2. Settings Area")),(0,r.kt)("p",null,"This is the area where you can make settings related to the UV Editor."),(0,r.kt)("h3",{id:"snap-type"},"Snap Type"),(0,r.kt)("p",null,"When manipulating the movement, rotation, and size of a UV element, the position of the element is snapped according to the ",(0,r.kt)("strong",{parentName:"p"},"SnapType property")," and other ",(0,r.kt)("strong",{parentName:"p"},"properties related to snapping"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"snap"},(0,r.kt)("strong",{parentName:"h2"},"Snap")),(0,r.kt)("p",{parentName:"admonition"},"Snapping is a feature for ",(0,r.kt)("strong",{parentName:"p"},"placing an element in a precise location"),". Using a number of ",(0,r.kt)("strong",{parentName:"p"},"properties")," and ",(0,r.kt)("strong",{parentName:"p"},"predefined values"),", you can edit elements in a ",(0,r.kt)("strong",{parentName:"p"},"precise and efficient manner"),", such as moving them to a ",(0,r.kt)("strong",{parentName:"p"},"specific location")," or rotating them by a ",(0,r.kt)("strong",{parentName:"p"},"specific angle"),".")),(0,r.kt)(i.Z,{defaultValue:"None",values:[{label:"None",value:"None"},{label:"World",value:"World"},{label:"Increment",value:"Increment"},{label:"Pixel",value:"Pixel"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"None",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Properties Tab",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-none"},"SnapType: None"),(0,r.kt)("p",{parentName:"admonition"},"Properties when no snapping is applied."))),(0,r.kt)(l.Z,{value:"World",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Properties Tab",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-world"},"SnapType: World"),(0,r.kt)("p",{parentName:"admonition"},"Property by which UV vertices are snapped to the grid in the UV Editor workspace."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"gridsnapsize-property"},(0,r.kt)("strong",{parentName:"h4"},"GridSnapSize Property")),(0,r.kt)("p",{parentName:"admonition"},"Property that sets the spacing of the grid that UV vertices are ",(0,r.kt)("strong",{parentName:"p"},"snapped to")," when the UV element is ",(0,r.kt)("strong",{parentName:"p"},"moved, rotated, or scaled"),"."))),(0,r.kt)(l.Z,{value:"Increment",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Properties Tab",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-increment"},"SnapType: Increment"),(0,r.kt)("p",{parentName:"admonition"},"A property that causes the selected UV element to be moved and rotated ",(0,r.kt)("strong",{parentName:"p"},"without snapping the UV vertices")," by the value set in the SnapSize property."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"gridsnapsize-property-1"},(0,r.kt)("strong",{parentName:"h4"},"GridSnapSize Property")),(0,r.kt)("p",{parentName:"admonition"},"Property that sets the snap size to be applied when moving UV elements."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"rotationsnapsize-property"},(0,r.kt)("strong",{parentName:"h4"},"RotationSnapSize Property")),(0,r.kt)("p",{parentName:"admonition"},"Property that sets the snap angle to be applied when rotating the UV element."))),(0,r.kt)(l.Z,{value:"Pixel",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Properties Tab",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-pixel"},"SnapType: Pixel"),(0,r.kt)("p",{parentName:"admonition"},"This property causes UV vertices to snap to the ",(0,r.kt)("strong",{parentName:"p"},"pixels")," of the applied texture."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"pixelcenter"},(0,r.kt)("strong",{parentName:"h4"},"PixelCenter")),(0,r.kt)("p",{parentName:"admonition"},"This property causes the vertices to snap to the center of the pixels in the texture."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If disabled, it will snap to the ",(0,r.kt)("strong",{parentName:"li"},"pixel edge")," of the texture.")),(0,r.kt)("admonition",{parentName:"admonition",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Pixel property")," is primarily useful when creating ",(0,r.kt)("strong",{parentName:"p"},"pixel art style models"),"."),(0,r.kt)("admonition",{parentName:"admonition",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("strong",{parentName:"p"},"Pixel property"),", the snapping interval follows the ",(0,r.kt)("strong",{parentName:"p"},"resolution of the texture")," representing the pixel art, so the represented pixel size should not be different from the actual resolution of the texture.")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"showislandboundary"},"ShowIslandBoundary"),(0,r.kt)("p",null,"Property to ",(0,r.kt)("strong",{parentName:"p"},"show the bounding box")," of the UV island."),(0,r.kt)("h3",{id:"fillpolygons"},"FillPolygons"),(0,r.kt)("p",null,"Property that ",(0,r.kt)("strong",{parentName:"p"},"makes the UV faces translucent"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By ",(0,r.kt)("strong",{parentName:"p"},"making the UV faces translucent"),", you can easily see the overlapping UV faces by their ",(0,r.kt)("strong",{parentName:"p"},"translucent concentration difference"),".")),(0,r.kt)("h3",{id:"showgrid"},"ShowGrid"),(0,r.kt)("p",null,"Property that ",(0,r.kt)("strong",{parentName:"p"},"displays a grid")," in the UV Editor workspace."),(0,r.kt)("h3",{id:"showaxes"},"ShowAxes"),(0,r.kt)("p",null,"Property that ",(0,r.kt)("strong",{parentName:"p"},"shows the U and V axes")," corresponding to the X and Y axes in the UV Editor workspace."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"the-texture-space"},"The ",(0,r.kt)("strong",{parentName:"h2"},"texture space")),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"texture space")," is from the ",(0,r.kt)("strong",{parentName:"p"},"start point of the UV axis")," to the point where a widely spaced ",(0,r.kt)("strong",{parentName:"p"},"Fixed Grid Line")," coincides with the UV axis. Unless you are representing a texture that is largely ",(0,r.kt)("strong",{parentName:"p"},"tiled"),", all UV elements should be ",(0,r.kt)("strong",{parentName:"p"},"placed")," within the texture space.")),(0,r.kt)("h3",{id:"showtexture"},"ShowTexture"),(0,r.kt)("p",null,"Property that displays the material's texture, as set in the UV Editor's ",(0,r.kt)("strong",{parentName:"p"},"Material property"),"."),(0,r.kt)("h3",{id:"enablealphachannel"},"EnableAlphaChannel"),(0,r.kt)("p",null,"This property displays the material's texture alpha channel, excluding the portion set in the UV Editor's Material properties."),(0,r.kt)("h3",{id:"texxnum"},"TexXNum"),(0,r.kt)("p",null,"Property to display the material's texture as a left-right repeat, as set in the UV Editor's Material properties."),(0,r.kt)("h3",{id:"texynum"},"TexYNum"),(0,r.kt)("p",null,"Property that displays the material's texture, as set in the UV Editor's Material property, as an up and down repeat."),(0,r.kt)("h3",{id:"material"},"Material"),(0,r.kt)("p",null,"A property that shows the materials applied with the ",(0,r.kt)("strong",{parentName:"p"},"Material tool"),", displaying only the UV elements that have that material assigned to them."),(0,r.kt)("h4",{id:"all"},"All"),(0,r.kt)("p",null,"A property that shows all UV elements ",(0,r.kt)("strong",{parentName:"p"},"regardless of material assignment"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-workspace"},(0,r.kt)("strong",{parentName:"h2"},"3. Workspace")),(0,r.kt)("p",null,"The area where you ",(0,r.kt)("strong",{parentName:"p"},"edit UV elements"),", allowing you to see the texture along with the grid."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-uv-tool-area"},(0,r.kt)("strong",{parentName:"h2"},"4. UV Tool Area")),(0,r.kt)("p",null,"This is a collection of tools for editing UV elements, such as expanding, selecting, and placing UV elements."),(0,r.kt)("h3",{id:"unwrap-group"},"Unwrap Group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unwrap Group",src:n(90920).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools for unwrapping UV elements."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Unwrap Group",href:"/docs/uveditor-unwrap"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"selection-group"},"Selection group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selection Group",src:n(42206).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools for selecting UV elements."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Selection Group",href:"/docs/uveditor-selection"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"quick-transform-group"},"Quick Transform group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Quick Transform Group",src:n(24802).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools that allow you to easily flip and rotate the position of UV elements."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Quick Transform Group",href:"/docs/uveditor-quick-transform"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"alignment-group"},"Alignment group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alignment Group",src:n(71430).Z,width:"1012",height:"391"})),(0,r.kt)("p",null,"This group contains tools for aligning the position of UV elements."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Alignment Group",href:"/docs/uveditor-alignment"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"weld-and-break-group"},"Weld And Break group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weld And Break Group",src:n(93261).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools used to break and weld UV elements together."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Weld And Break Group",href:"/docs/uveditor-weld-and-break"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"arrange-group"},"Arrange group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arrange Group",src:n(48025).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools for placing UV elements in texture space in bulk."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Arrange Group",href:"/docs/uveditor-arrange"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"misc-group"},"Misc group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Misc Group",src:n(63933).Z,width:"1012",height:"247"})),(0,r.kt)("p",null,"This group contains tools that do not belong in any other group."),(0,r.kt)(o.Z,{items:[{type:"link",label:"Misc Group",href:"/docs/uveditor-misc"}],mdxType:"DocCardList"}))}h.isMDXComponent=!0},71430:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_Alignment-e3bca1e00de2d6142d769b21c1a3fc56.png"},48025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_Arrange-524afa39db81b9123be5dfbcbc737c47.png"},63933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_Misc-585970c25a79403d8728865286703b49.png"},24802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_QuickTransform-aaf6e0880a4f486e0331dc2c11b9aea6.png"},42206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_Selection-131ce021b8f3a02631fe9e4572a2b21b.png"},90920:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_Unwrap-3d6a163b72ffba3ce12a0b002ba14154.png"},93261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_Icon_WeldAndBreak-b940253e0cf2b9481f315ce4e131609c.png"},18079:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UVEditor_UVEditorInterface-b1064ea1626d81a0fbcdc86790684bbb.png"}}]);