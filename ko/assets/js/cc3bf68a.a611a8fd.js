"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>M});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),s=a(16550),p=a(91980),l=a(67392),m=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,l]=c({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),N=(()=>{const e=p??d;return k({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{N&&s(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),g(e)}),[l,g,o]),tabValues:o}}var N=a(72389);const h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:s,selectValue:p,tabValues:l}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=l[a].value;n!==s&&(d(t),p(n))},k=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:k,onClick:u},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function M(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},19958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const s={sidebar_position:1,slug:"/painting/layerMask",description:""},p="\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c",l={unversionedId:"editable-mesh/painting-mode/painting-mode-layer/layerMask",id:"editable-mesh/painting-mode/painting-mode-layer/layerMask",title:"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/painting-mode-layer/layerMask.md",sourceDirName:"editable-mesh/painting-mode/painting-mode-layer",slug:"/painting/layerMask",permalink:"/ko/docs/painting/layerMask",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/painting/layerMask",description:""},sidebar:"docs",previous:{title:"Layers \uadf8\ub8f9",permalink:"/ko/docs/painting-layers"},next:{title:"Group \ub808\uc774\uc5b4",permalink:"/ko/docs/painting/group-layer"}},m={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Add Black Mask",id:"add-black-mask",level:3},{value:"Add White Mask",id:"add-white-mask",level:3},{value:"Add AO Mask",id:"add-ao-mask",level:3},{value:"Remove Mask",id:"remove-mask",level:3},{value:"<strong>\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c Properties \uadf8\ub8f9 \uc18d\uc131</strong>",id:"\ub808\uc774\uc5b4-\ub9c8\uc2a4\ud06c-properties-\uadf8\ub8f9-\uc18d\uc131",level:2},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],u={toc:d};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ub808\uc774\uc5b4-\ub9c8\uc2a4\ud06c"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Layer Masks",src:a(28399).Z,width:"2087",height:"1230"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c"),"\ub294 \ub808\uc774\uc5b4\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \uc601\uc5ed\uc744 \ub9c8\uc2a4\ud0b9\ud558\ub294 \uc18d\uc131"),"\uc785\ub2c8\ub2e4. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c\ub97c \ucd94\uac00\ud560 \ub808\uc774\uc5b4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c \ubc84\ud2bc\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"Layer Masks",src:a(76873).Z,width:"865",height:"523"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Add Black Mask")," \ub610\ub294 ",(0,r.kt)("strong",{parentName:"li"},"Add White Mask"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \ub808\uc774\uc5b4\uc5d0 \ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,r.kt)("h3",{id:"add-black-mask"},"Add Black Mask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uac80\uc740\uc0c9 \ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c\ub97c \ucd94\uac00"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c \ud560\ub2f9\ub41c \ub808\uc774\uc5b4\uc758 \ubaa8\ub4e0 \uc7ac\uc9c8\uc774 \uc228\uaca8\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"add-white-mask"},"Add White Mask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud770\uc0c9 \ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c\ub97c \ucd94\uac00"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"add-ao-mask"},"Add AO Mask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc570\ube44\uc5b8\ud2b8 \uc624\ud074\ub8e8\uc804(AO=Ambient Occlusion) \ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c"),"\ub97c \ucd94\uac00\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"remove-mask"},"Remove Mask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c \ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c\ub97c \uc0ad\uc81c"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub808\uc774\uc5b4-\ub9c8\uc2a4\ud06c-properties-\uadf8\ub8f9-\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h2"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c Properties \uadf8\ub8f9 \uc18d\uc131")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties \uadf8\ub8f9"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ud234\uc774\ub098 \ub808\uc774\uc5b4 \ub4f1 \uc120\ud0dd\ud55c \uae30\ub2a5"),"\uc5d0 \ub530\ub77c ",(0,r.kt)("strong",{parentName:"p"},"\ub0b4\uc6a9\uc774 \ub2ec\ub77c\uc9c0\ub294 \uc601\uc5ed"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub808\uc774\uc5b4 \ub9c8\uc2a4\ud06c"),"\ub97c \uc120\ud0dd \uc2dc ",(0,r.kt)("strong",{parentName:"p"},"Properties \uadf8\ub8f9"),"\uc5d0 \ud45c\uc2dc\ub418\ub294 \uc18d\uc131\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{defaultValue:"Brush",values:[{label:"Brush",value:"Brush"},{label:"Erase",value:"Erase"},{label:"Rect Fill",value:"Rect Fill"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Brush",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"brush"},"Brush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Layer Masks Brush",src:a(903).Z,width:"1020",height:"727"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uce60\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ub9c8\uc2a4\ud06c \uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h3",{parentName:"admonition",id:"screensizebrush"},"ScreenSizeBrush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140 \uae30\uc900"),"\uc73c\ub85c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc73c\ub85c, \ud574\uc81c\ud560 \uacbd\uc6b0 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc6d4\ub4dc \uc0c1\uc758 \ud06c\uae30"),"\ub97c \uae30\uc900\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Size \uc18d\uc131"),"\uc5d0\uc11c \ud06c\uae30\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"size"},"Size"),(0,r.kt)("p",{parentName:"admonition"},"\ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uce60\ud574\uc9c0\ub294 \ub9c8\uc2a4\ud06c \uac12\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"hardness"},"Hardness"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\uc11c\ub9ac \ub610\ub837\ud55c \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"jittering"},"Jittering"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \uc785\ub825\uc73c\ub85c \uc0dd\uae30\ub294 \ub77c\uc778\uc778 \uc2a4\ud2b8\ub85c\ud06c\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc57d\uac04\uc529 \ub79c\ub364\ud558\uac8c \ubc8c\uc5b4\uc9c0\ub294 \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"spacing"},"Spacing"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc785\ub825\ub418\ub294 \ube0c\ub7ec\uc2dc \uac04\uaca9"),"\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"mask-value"},"Mask Value"),(0,r.kt)("p",{parentName:"admonition"},"\uce60\ud574\uc9c8 ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc2a4\ud06c \uac12\uc744 \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(i.Z,{value:"Erase",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"erase"},"Erase"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Layer Masks Erase",src:a(62408).Z,width:"1020",height:"727"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uce60\ud574\uc838 \uc788\ub294 \ub9c8\uc2a4\ud06c \uac12\uc744 \uc81c\uac70"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h3",{parentName:"admonition",id:"screensizebrush-1"},"ScreenSizeBrush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140 \uae30\uc900"),"\uc73c\ub85c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc73c\ub85c, \ud574\uc81c\ud560 \uacbd\uc6b0 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc6d4\ub4dc \uc0c1\uc758 \ud06c\uae30"),"\ub97c \uae30\uc900\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Size \uc18d\uc131"),"\uc5d0\uc11c \ud06c\uae30\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"size-1"},"Size"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity-1"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uc9c0\uc6cc\uc9c0\ub294 \uc815\ub3c4\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub85c \uc870\uc808"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"hardness-1"},"Hardness"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\uc11c\ub9ac \ub610\ub837\ud55c \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"jittering-1"},"Jittering"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \uc785\ub825\uc73c\ub85c \uc0dd\uae30\ub294 \ub77c\uc778\uc778 \uc2a4\ud2b8\ub85c\ud06c\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc57d\uac04\uc529 \ub79c\ub364\ud558\uac8c \ubc8c\uc5b4\uc9c0\ub294 \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"spacing-1"},"Spacing"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc785\ub825\ub418\ub294 \ube0c\ub7ec\uc2dc \uac04\uaca9"),"\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(i.Z,{value:"Rect Fill",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"rect-fill"},"Rect Fill"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Layer Masks Rect Fill",src:a(86167).Z,width:"1020",height:"727"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Mode \uc18d\uc131"),"\uc744 \ud1b5\ud574 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9c8\uc2a4\ud06c \uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h3",{parentName:"admonition",id:"mode"},"Mode"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Layer Masks Rect Fill Mode",src:a(56005).Z,width:"796",height:"306"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc791\ub3d9 \ubc29\uc2dd"),"\uc5d0 \ub300\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Polygon Fill")),(0,r.kt)("p",{parentName:"admonition"},"\ud398\uc774\uc2a4\ub97c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9c8\uc2a4\ud06c \uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill")),(0,r.kt)("p",{parentName:"admonition"},"\uc52c\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc0ac\uac01 \uc601\uc5ed"),"\uc744 \uc0dd\uc131\ud558\uc5ec, \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uc624\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9c8\uc2a4\ud06c \uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Polygonal Lasso Fill")),(0,r.kt)("p",{parentName:"admonition"},"\uc52c\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec \uaf2d\uc9c0\uc810\uc744 \ub530\ub77c ",(0,r.kt)("strong",{parentName:"p"},"\ub2e4\uac01\ud615 \uc601\uc5ed"),"\uc744 \uc0dd\uc131\ud558\uace0, \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uc624\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9c8\uc2a4\ud06c \uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Island Fill")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \ud234\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc544\uc77c\ub79c\ub4dc"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud074\ub9ad"),"\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc2a4\ud06c\uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Isolation Fill")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \ud234\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"UV \ud398\uc774\uc2a4\ub97c \ud074\ub9ad"),"\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"\uc5f0\uacb0\ub41c \uc5d8\ub9ac\uba3c\ud2b8 \uc804\uccb4"),"\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc2a4\ud06c\uac12\uc744 \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"mask-value-1"},"Mask Value"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub420 ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc2a4\ud06c \uac12\uc744 \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"camera-based-select"},"Camera Based Select"),(0,r.kt)("p",{parentName:"admonition"},"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \ud398\uc774\uc2a4"),"\ub9cc \ub9c8\uc2a4\ud06c \uac12\uc774 \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"trianglemode"},"TriangleMode"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\ub97c \uc774\ub8e8\ub294 \uc0bc\uac01\ud615 \uba54\uc2dc"),"\uc5d0 \ub9c8\uc2a4\ud06c \uac12\uc774 \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"erase-1"},"Erase"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub41c ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc2a4\ud06c \uac12\uc744 \uc0ad\uc81c"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity-2"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub418\ub294 \ub9c8\uc2a4\ud06c \uac12\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/jPiEMTvfm1A",frameborder:"0",allowfullscreen:""})))}k.isMDXComponent=!0},28399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_LayerMask-26f01fc4a6236b15e76823ca73a67304.png"},76873:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_Mask-21847331993322e884443025bf5247fb.png"},903:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_Mask_Brush-8447c0ed24dbf70d3838c65b453d288a.png"},62408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_Mask_Erase-642bff5b8ed2c4e14498dfd7b6407b36.png"},86167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_Mask_RectFill-e9edf882a76ac25c1b0c1b39b1e5b39d.png"},56005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Layers_Mask_RectFill_Mode-939ff69883922f996162063ad22e44ca.png"}}]);