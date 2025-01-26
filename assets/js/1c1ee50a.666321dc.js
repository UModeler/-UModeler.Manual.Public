"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[646],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:0,slug:"/painting-guide",description:""},o="Painting Mode Guide",s={unversionedId:"editable-mesh/painting-mode/painting-guide",id:"editable-mesh/painting-mode/painting-guide",title:"Painting Mode Guide",description:"",source:"@site/docs/editable-mesh/painting-mode/painting-guide.md",sourceDirName:"editable-mesh/painting-mode",slug:"/painting-guide",permalink:"/docs/painting-guide",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/editable-mesh/painting-mode/painting-guide.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/painting-guide",description:""},sidebar:"docs",previous:{title:"Painting Mode",permalink:"/docs/painting-mode"},next:{title:"Painting 2D",permalink:"/docs/painting/painting-2d"}},l={},p=[{value:"Key Features",id:"key-features",level:2},{value:"Supports both 3D Scene View and 2D Editor",id:"supports-both-3d-scene-view-and-2d-editor",level:3},{value:"Layer-Based Painting",id:"layer-based-painting",level:3},{value:"Supports Paint, Fill, Sticker, and Mask Layers",id:"supports-paint-fill-sticker-and-mask-layers",level:3},{value:"Supports Various Material Expressions",id:"supports-various-material-expressions",level:3},{value:"Color Channel Customizing Feature",id:"color-channel-customizing-feature",level:3},{value:"AI Texturing Feature",id:"ai-texturing-feature",level:3},{value:"Starting Painting Mode",id:"starting-painting-mode",level:2},{value:"Apply the texture worked on in painting mode.",id:"apply-the-texture-worked-on-in-painting-mode",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"painting-mode-guide"},"Painting Mode Guide"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Painting-Guide",src:a(42123).Z,width:"2277",height:"1403"})),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"UModeler X's Painting Mode"),", you can experience near-perfect painting features, from ",(0,r.kt)("strong",{parentName:"p"},"adjusting brush properties")," to ",(0,r.kt)("strong",{parentName:"p"},"editing layers")," and even ",(0,r.kt)("strong",{parentName:"p"},"mask effects"),". Paint directly on 3D models and check the results in ",(0,r.kt)("strong",{parentName:"p"},"real time"),". Now, you can also create textures directly in Unity."),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("p",null,"A texture is an image used to express the details of a 3D model's surface. Textures can be applied to the whole or specific parts of a model through materials, and they are assigned to the model through the process of allocating materials."),(0,r.kt)("p",null,"UModeler X allows you to create such textures directly through its built-in paint mode, and the key features are as follows"),(0,r.kt)("h3",{id:"supports-both-3d-scene-view-and-2d-editor"},"Supports both 3D Scene View and 2D Editor"),(0,r.kt)("p",null,"The painting mode of UModeler X is specially designed to help quickly and easily edit textures in both the 2D editor and 3D scene view."),(0,r.kt)("h3",{id:"layer-based-painting"},"Layer-Based Painting"),(0,r.kt)("p",null,"When painting colors, ",(0,r.kt)("strong",{parentName:"p"},"you can proceed by dividing the process into layers, such as sketching and coloring"),". There are transparent layers and layers that are already painted. Layers cannot affect other layers, but they influence the color of the model as they overlap. When layers overlap, you can set how they will overlap. You can set modes such as becoming brighter as they overlap and becoming darker as they overlap, which are called ",(0,r.kt)("strong",{parentName:"p"},"layer blending modes"),"."),(0,r.kt)("h3",{id:"supports-paint-fill-sticker-and-mask-layers"},"Supports Paint, Fill, Sticker, and Mask Layers"),(0,r.kt)("p",null,"It supports the ",(0,r.kt)("strong",{parentName:"p"},"Paint layer")," for direct coloring with a brush, the ",(0,r.kt)("strong",{parentName:"p"},"Fill layer")," for covering the entire model, the ",(0,r.kt)("strong",{parentName:"p"},"Sticker layer")," for attaching images like stickers to the surface, and the ",(0,r.kt)("strong",{parentName:"p"},"Mask layer")," that can be used with these layers, allowing for a rich painting effect."),(0,r.kt)("h3",{id:"supports-various-material-expressions"},"Supports Various Material Expressions"),(0,r.kt)("p",null,"Through the ",(0,r.kt)("strong",{parentName:"p"},"Map Source"),", it is possible to paint not only colors but also various materials such as ",(0,r.kt)("strong",{parentName:"p"},"metallicity"),", ",(0,r.kt)("strong",{parentName:"p"},"shading"),", and ",(0,r.kt)("strong",{parentName:"p"},"roughness")," etc,. This allows you to paint the smoothness and roughness, and you can make it shine by painting glowing colors."),(0,r.kt)("h3",{id:"color-channel-customizing-feature"},"Color Channel Customizing Feature"),(0,r.kt)("p",null,"Textures use RGB channels to represent colors, with an additional value (Alpha) for transparency. Various colors are created by the intensity of each channel and combined into a single texture. The created texture is applied to the material and used as the model's color through the shader. The painting mode of UModeler X also supports the ability to edit these color values separately by channel, allowing for a variety of effects with a smaller number of textures."),(0,r.kt)("h3",{id:"ai-texturing-feature"},"AI Texturing Feature"),(0,r.kt)("p",null,"If you connect UModeler X with a computer where Stable Diffusion WebUI is installed, you can directly map AI-generated images onto 3D models placed in the scene view based on prompts, the depth map and the input image created in the scene view. Moreover, you can easily and quickly obtain the desired results by incorporating AI-generated images with the layers in the painting mode."),(0,r.kt)("h2",{id:"starting-painting-mode"},"Starting Painting Mode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prepare an Editable Mesh model.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a 3D model through the modeling mode of ",(0,r.kt)("strong",{parentName:"li"},"UModeler X"),", or convert an already created 3D mesh into an Editable Mesh using ",(0,r.kt)("strong",{parentName:"li"},"UModelerize"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Select the Painting 3D tab."),"\n",(0,r.kt)("img",{alt:"Painting Mode Start",src:a(20587).Z,width:"949",height:"457"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If it is not unwrapped, perform unwrapping to generate UV coordinates.")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"UV Coordinates")),(0,r.kt)("p",{parentName:"admonition"},"In 3D modeling, ",(0,r.kt)("strong",{parentName:"p"},"UV coordinates")," are used to map a 2D texture onto the surface of a 3D object. Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"U")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"V")," represent the axes of the 2D texture space, linking each point of the 3D model to a specific location on the texture. Through this mapping, detailed images, patterns, or colors can be accurately applied to the surface of the 3D model. Since UV coordinates align every point of the 3D model with the correct position on the texture, it is necessary to generate UV coordinates in advance through the unwrapping function so that the colors painted in painting mode are recorded on the texture.")),(0,r.kt)("p",{parentName:"li"},"To start painting, at least one of the model's faces must be unfolded into UV coordinates using the tools in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.umodeler.com/docs/uveditor-unwrap/"},"unwrap group")," within the UV Editor.\n",(0,r.kt)("img",{alt:"Unwrap Group",src:a(88208).Z,width:"2000",height:"1210"}),"\nAlso, for basic shapes, please check if the ",(0,r.kt)("strong",{parentName:"p"},"Auto Unwrap Shape")," property is activated in the ",(0,r.kt)("strong",{parentName:"p"},"Preference")," window. If this property is activated, UVs are already created when the basic shape is generated, allowing you to start painting immediately without the need for separate unwrapping work.\n",(0,r.kt)("img",{alt:"Preference-AutoUnwrapShape",src:a(65436).Z,width:"2000",height:"1153"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify the properties for the material to be painted on."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Resolution")," : This property allows you to select the texture resolution for painting. It can be changed during painting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Material Template")," :  This property sets the predefined map source that will be used for painting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startup Background Color")," : This property sets the background color that will be the base during painting. It can be changed during painting."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Start Painting")," and begin painting"))),(0,r.kt)("h2",{id:"apply-the-texture-worked-on-in-painting-mode"},"Apply the texture worked on in painting mode."),(0,r.kt)("p",null,"The painting mode of UModeler X uses a separate material designed for painting mode, allowing you to paint directly on the model you are currently working on. Therefore, to apply the image created in painting mode to the actual model, the following steps are necessary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Export All")," button at the bottom of the Map Source group to export the results drawn on the selected Map Source as a ",(0,r.kt)("strong",{parentName:"li"},".png")," file. In the image below, you can see the result colored on the Albedo map source being exported.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MapSource-ExportAll",src:a(17819).Z,width:"660",height:"472"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the exported texture in the appropriate slots such as ",(0,r.kt)("strong",{parentName:"li"},"Albedo"),", ",(0,r.kt)("strong",{parentName:"li"},"Metallic"),", ",(0,r.kt)("strong",{parentName:"li"},"Normal"),", etc., of the material used in modeling mode. In the image below, it shows assigning the texture exported from painting mode to the ",(0,r.kt)("strong",{parentName:"li"},"Albedo")," map of the material.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Assign-map-source",src:a(45041).Z,width:"603",height:"410"})))}u.isMDXComponent=!0},45041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Assign-Texture-albedo-80f33f7d47acdcfb7eb90661a3d1c433.png"},17819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Exporting-MapSource-6c50c46fa9f2bdcd992c12a471dec4b4.png"},42123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Painting-guide-8d3ff3ba4f5faa546bf06ca60090fc7d.png"},20587:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PaintingMode_Start-e99f1e23015423c0c949aa45f9bdd764.png"},88208:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/UVUnwrapping-d4003b01168b9da648cee00a4112f780.png"},65436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preference-autounwrap-2-2bf2f4629828c17361a5089b3ce36077.png"}}]);