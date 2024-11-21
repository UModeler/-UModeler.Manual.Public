"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1757],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},98433:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:1,slug:"/um-to-umx-conversion",description:""},i="UModeler to UModeler X Mesh",l={unversionedId:"getting-started/data-conversion/um-to-umx-conversion",id:"getting-started/data-conversion/um-to-umx-conversion",title:"UModeler to UModeler X Mesh",description:"",source:"@site/docs/getting-started/data-conversion/um-to-umx-conversion.md",sourceDirName:"getting-started/data-conversion",slug:"/um-to-umx-conversion",permalink:"/docs/um-to-umx-conversion",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/um-to-umx-conversion",description:""},sidebar:"docs",previous:{title:"General Mesh to UModeler X Mesh",permalink:"/docs/umodelerize"},next:{title:"Export",permalink:"/docs/export"}},s={},d=[{value:"<strong>Conversion Process</strong>",id:"conversion-process",level:2},{value:"<strong>Convert individual UModeler objects</strong>",id:"convert-individual-umodeler-objects",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"<strong>Batch convert UModeler objects in a project</strong>",id:"batch-convert-umodeler-objects-in-a-project",level:2},{value:"How to use",id:"how-to-use-1",level:3},{value:"<strong>Data lost during conversion</strong>",id:"data-lost-during-conversion",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"umodeler-to-umodeler-x-mesh"},"UModeler to UModeler X Mesh"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UModelerize End",src:o(88041).Z,width:"2440",height:"1480"})),(0,r.kt)("p",null,"To use the model you worked on in UModeler in UModeler X, you need to go through the polygon ",(0,r.kt)("strong",{parentName:"p"},"data conversion process"),"."),(0,r.kt)("h2",{id:"conversion-process"},(0,r.kt)("strong",{parentName:"h2"},"Conversion Process")),(0,r.kt)("p",null,"To use an object created with UModeler in UModeler X, you need to use the ",(0,r.kt)("strong",{parentName:"p"},"UModelerize function"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UModelerize Select Menu",src:o(19246).Z,width:"984",height:"212"})),(0,r.kt)("p",null,"This feature ",(0,r.kt)("strong",{parentName:"p"},"does the same thing as UModelerize in UModeler"),", but it ",(0,r.kt)("strong",{parentName:"p"},"keeps the polygonal structure of the model intact")," when converting objects worked on with UModeler to UModeler X."),(0,r.kt)("p",null,"This means that you can preserve the details of the original model, but turn it into an ",(0,r.kt)("strong",{parentName:"p"},"editable form in UModeler X"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("h2",{parentName:"admonition",id:"the-conversion-process-may-produce-different-results-depending-on-the-shape-of-the-polygons"},"The conversion process may produce different results depending on the shape of the polygons."),(0,r.kt)("p",{parentName:"admonition"},"Polygons with a ",(0,r.kt)("strong",{parentName:"p"},"Convex Hull")," will have no problem with their shape as the interior triangles align, but polygons with a ",(0,r.kt)("strong",{parentName:"p"},"Concave Hull")," may create triangles or change shape."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"UModelerize End",src:o(44168).Z,width:"1585",height:"982"}))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("h2",{parentName:"admonition",id:"do-not-use-umodelerize-within-a-prefab"},"Do not use UModelerize within a Prefab."),(0,r.kt)("p",{parentName:"admonition"},"Using UModelerize in a Prefab state is currently disabled due to issues with Unity meshes and related components. It will be available after these issues are resolved in the future.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"convert-individual-umodeler-objects"},(0,r.kt)("strong",{parentName:"h2"},"Convert individual UModeler objects")),(0,r.kt)("p",null,"This is a way to ",(0,r.kt)("strong",{parentName:"p"},"convert only")," the objects you worked on in ",(0,r.kt)("strong",{parentName:"p"},"UModeler")," to UModeler X. This is useful when using UModeler and UModeler X together."),(0,r.kt)("p",null,"For example, you can use UModeler to quickly create a model, and then convert those objects to UModeler X for more detailed modeling and to take advantage of the rigging and painting features."),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the model you want to convert from the Hierarchy tab in the Unity Editor.\n",(0,r.kt)("img",{alt:"Migrate to UModeler X",src:o(30140).Z,width:"1241",height:"536"})),(0,r.kt)("li",{parentName:"ol"},"Right-click on the selected model."),(0,r.kt)("li",{parentName:"ol"},"From the right-clicked menu, select ",(0,r.kt)("strong",{parentName:"li"},"UModeler X > UModelerize"),".\n",(0,r.kt)("img",{alt:"UModelerize Select Menu",src:o(19246).Z,width:"984",height:"212"})),(0,r.kt)("li",{parentName:"ol"},"The selected model is ",(0,r.kt)("strong",{parentName:"li"},"converted to editable state in UModeler X"),".\n",(0,r.kt)("img",{alt:"UModelerize End",src:o(88041).Z,width:"2440",height:"1480"}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"umodelerize-merge-vertices"},"UModelerize Merge Vertices"),(0,r.kt)("p",{parentName:"admonition"},"Depending on the model, this may cause polygons in the mesh to become separated."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"UModelerize End",src:o(36023).Z,width:"891",height:"964"})),(0,r.kt)("p",{parentName:"admonition"},"This can be fixed by using ",(0,r.kt)("strong",{parentName:"p"},"UModeler X > UModelerize Merge Vertices")," to merge vertices that are in the same location."),(0,r.kt)("div",{class:"video-container"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/bYFkE5hJXUM",frameborder:"0",allowfullscreen:""}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"batch-convert-umodeler-objects-in-a-project"},(0,r.kt)("strong",{parentName:"h2"},"Batch convert UModeler objects in a project")),(0,r.kt)("p",null,"This is how to ",(0,r.kt)("strong",{parentName:"p"},"batch convert")," all objects worked with ",(0,r.kt)("strong",{parentName:"p"},"UModeler")," to UModeler X."),(0,r.kt)("h3",{id:"how-to-use-1"},"How to use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"select ",(0,r.kt)("strong",{parentName:"li"},"Tool > UModeler X > Migrate to UModeler X")," from the top menu to start the conversion.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"This process involves changes to your project, so backups are strongly recommended.")),(0,r.kt)("img",{alt:"Migrate to UModeler X",src:o(46146).Z,width:"870",height:"505"})))),(0,r.kt)("li",{parentName:"ol"},"the conversion process will start, and it will load."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"All UModeler objects")," in your project will be converted to editable state in UModeler X.\n",(0,r.kt)("img",{alt:"Migrate to UModeler X Result",src:o(56924).Z,width:"2625",height:"1188"}))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"project-wide")," and will be difficult to reverse, as it will convert ",(0,r.kt)("strong",{parentName:"p"},"all UModeler objects")," within the project."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"It is recommended that you make a ",(0,r.kt)("strong",{parentName:"li"},"backup")," of your project before starting the conversion operation."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data-lost-during-conversion"},(0,r.kt)("strong",{parentName:"h2"},"Data lost during conversion")),(0,r.kt)("p",null,"Due to the different data structures in ",(0,r.kt)("strong",{parentName:"p"},"UModeler X")," and ",(0,r.kt)("strong",{parentName:"p"},"UModeler"),", the following data may be lost during the conversion to ",(0,r.kt)("strong",{parentName:"p"},"UModeler X"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hole information:")," Hole information defined in UModeler is lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vertex colors:")," Color information applied to vertices is lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hotspot Data:")," Hotspot data defined in UModeler will be lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Polygon Group ID:")," The group ID assigned to the polygon will be lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backface Options:")," The polygon's backface options will be lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Individual polygon's instance ID:")," The instance ID assigned to the polygon will be lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Normals:")," The polygon's normal information will be lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UV islands:")," UV island information will be replaced with structure-based information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AssetPath:")," The object's assetPath information is lost.")),(0,r.kt)("p",null,"These data losses are caused by d",(0,r.kt)("strong",{parentName:"p"},"ifferences in data structure between UModeler and UModeler X")," and are not bugs."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"UModeler team")," is aware of this data loss issue and is ",(0,r.kt)("strong",{parentName:"p"},"working on an ongoing update")," to address it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data that is currently being lost will also be made applicable in UModeler X in a future update.")))}p.isMDXComponent=!0},19246:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UModelerize_SelectMenu-8c105aad116cf5f0b3e4894b5647ff44.png"},36023:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UModelerize_tip1-17b5ccf5c784287476c7c97bf4d939d8.png"},88041:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/for-um-users_ConvertUModelerObject-e0349266379118221df10532835a915a.png"},44168:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/for-um-users_ConvexConcave-5eed88c120f45c959327633819f8dc60.png"},46146:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/for-um-users_MigratetoUModelerX-3e8dbac9ddf47cdb1ead6f096c84adc7.png"},56924:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/for-um-users_MigratetoUModelerX_Result-d6fa789c3cb1881fc8e4bbd7326b5852.png"},30140:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/for-um-users_MigratetoUModelerX_SelectObject-efa929afcffc09db0cb732018814942e.png"}}]);