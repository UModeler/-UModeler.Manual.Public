"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[686],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var r=a.createContext({}),p=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(r.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,r=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(n),c=l,g=m["".concat(r,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[m]="string"==typeof t?t:l,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37481:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_position:4,slug:"/extension-installation"},o="Install the ControlNet extension",s={unversionedId:"ai-texturing/installation-guide/extension-installation",id:"ai-texturing/installation-guide/extension-installation",title:"Install the ControlNet extension",description:"The Stable Diffusion web UI allows you to install several add-ons called Extensions. To use UModeler X's AI texturing features, you need to install an extension of the Stable Diffusion web UI called ControlNet.",source:"@site/docs/ai-texturing/installation-guide/extension-installation.md",sourceDirName:"ai-texturing/installation-guide",slug:"/extension-installation",permalink:"/docs/extension-installation",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/installation-guide/extension-installation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/extension-installation"},sidebar:"docs",previous:{title:"Install the Stable Diffusion webUI",permalink:"/docs/stable-diffusion-web-ui-installation"},next:{title:"Usage Guide",permalink:"/docs/usage-guide"}},r={},p=[{value:"<strong>Installing ControlNet</strong>",id:"installing-controlnet",level:2},{value:"<strong>Install the ControlNet model</strong>",id:"install-the-controlnet-model",level:2},{value:"Download and apply",id:"download-and-apply",level:3},{value:"<strong>An alternative way to install ControlNet and its extensions</strong>.",id:"an-alternative-way-to-install-controlnet-and-its-extensions",level:2}],d={toc:p};function m(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-the-controlnet-extension"},"Install the ControlNet extension"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Stable Diffusion web UI")," allows you to install several add-ons called ",(0,l.kt)("strong",{parentName:"p"},"Extensions"),". To use UModeler X's AI texturing features, you need to install an extension of the Stable Diffusion web UI called ",(0,l.kt)("strong",{parentName:"p"},"ControlNet"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"installing-controlnet"},(0,l.kt)("strong",{parentName:"h2"},"Installing ControlNet")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Extensions tab"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Extensions tab")," in the web UI.\n",(0,l.kt)("img",{alt:"none",src:n(44063).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},"Install by URL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Within the ",(0,l.kt)("strong",{parentName:"li"},"Extensions tab"),", open the ",(0,l.kt)("strong",{parentName:"li"},"Install from URL tab"),".\n",(0,l.kt)("img",{alt:"none",src:n(25144).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Enter your ControlNet repository URL"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enter ",(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/Mikubill/sd-webui-controlnet.git")," in the field next to ",(0,l.kt)("strong",{parentName:"li"},"URL for extension's git repository"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Click the Install button"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," the ",(0,l.kt)("strong",{parentName:"li"},"Install button")," and wait a few seconds.\n",(0,l.kt)("img",{alt:"none",src:n(79614).Z,width:"2880",height:"1335"})),(0,l.kt)("li",{parentName:"ul"},"When you see the message ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Installed into stable-diffusion-webui\\extensions\\sd-webui-controlnet. Use Installed tab to restart")),", the installation is complete.\n",(0,l.kt)("img",{alt:"none",src:n(79986).Z,width:"2880",height:"1335"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Update and restart"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Installed tab"),".\n",(0,l.kt)("img",{alt:"none",src:n(48351).Z,width:"2880",height:"1335"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," Check for updates, then ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," Apply and restart UI.\n",(0,l.kt)("img",{alt:"none",src:n(72958).Z,width:"2880",height:"1335"}))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-the-controlnet-model"},(0,l.kt)("strong",{parentName:"h2"},"Install the ControlNet model")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ControlNet")," has several models available. ControlNet 1.1 includes 14 models that are currently in beta testing."),(0,l.kt)("h3",{id:"download-and-apply"},"Download and apply"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Access the model download link"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Access the ",(0,l.kt)("a",{parentName:"li",href:"https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main"},"ControlNet 1.1 model download page"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Download the .pth file"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"From the page, download the model files with the file extension ending in .pth.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The total capacity of the 14 models is approximately 18.8 GB, and you can download them selectively if you don't need to download all of them."),(0,l.kt)("li",{parentName:"ul"},"If the size is a concern, we recommend downloading only ",(0,l.kt)("strong",{parentName:"li"},"control_v11f1p_sd15_depth.pth"),".\n",(0,l.kt)("img",{alt:"none",src:n(15181).Z,width:"1698",height:"1604"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Move the downloaded model files"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Place the downloaded model files into the path ",(0,l.kt)("inlineCode",{parentName:"li"},"stable-diffusion-webui/extensions/sd-webui-controlnet/models")," in the folder where the Stable Diffusion web UI is installed, and the models will be applied.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"an-alternative-way-to-install-controlnet-and-its-extensions"},(0,l.kt)("strong",{parentName:"h2"},"An alternative way to install ControlNet and its extensions"),"."),(0,l.kt)("p",null,"Here is an alternative way to install ",(0,l.kt)("strong",{parentName:"p"},"ControlNet"),". This method allows you to view a list of the different extensions available in the Stable Diffusion web UI and easily install them."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Extensions tab"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Extensions tab")," and ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," ",(0,l.kt)("strong",{parentName:"li"},"Available"),".\n",(0,l.kt)("img",{alt:"none",src:n(9346).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Check the Load from button"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Verify that the address shown next to ",(0,l.kt)("strong",{parentName:"li"},"Load from:")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui-extensions/master/index.json"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It is set to the above address by default if you haven't modified it.\n",(0,l.kt)("img",{alt:"none",src:n(57162).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," the ",(0,l.kt)("strong",{parentName:"li"},"Load from: button"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You will see several extensions available for installation.\n",(0,l.kt)("img",{alt:"none",src:n(70785).Z,width:"2574",height:"1490"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Search ControlNet"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enter ",(0,l.kt)("inlineCode",{parentName:"li"},"sd-webui-controlnet")," in the ",(0,l.kt)("strong",{parentName:"li"},"Search input part"),".\n",(0,l.kt)("img",{alt:"none",src:n(90095).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Install ControlNet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Find ",(0,l.kt)("strong",{parentName:"li"},"sd-webui-controlnet manipulations")," in the list and ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Click"))," the ",(0,l.kt)("strong",{parentName:"li"},"Install button")," to the right of the description.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The image below is marked ",(0,l.kt)("strong",{parentName:"li"},"Installed")," because it was already installed above.\n",(0,l.kt)("img",{alt:"none",src:n(1394).Z,width:"2574",height:"1490"})))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Confirm installation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Once the installation is complete, return to the ",(0,l.kt)("strong",{parentName:"li"},"Installed tab")," to see the installed extensions.\n",(0,l.kt)("img",{alt:"none",src:n(92354).Z,width:"2574",height:"1490"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Apply and restart"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pressing the ",(0,l.kt)("strong",{parentName:"li"},"Apply and restart UI button")," will actually apply the installed extensions.\n",(0,l.kt)("img",{alt:"none",src:n(87983).Z,width:"2574",height:"1490"}))))),(0,l.kt)("p",null,"With this method, you can easily add not only the ControlNet extension, but many other extensions as well."))}m.isMDXComponent=!0},44063:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_1-bcc120f65e30e7d99359cdb6500f5ce5.png"},70785:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_10-935a958d0f53708f8e402f7fae4b621b.png"},90095:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_11-2eda8635d4ca3e8c220b90abe84b51ff.png"},1394:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_12-927c0abe04074b61f413854b052a1ce9.png"},92354:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_13-4104a85cf71451d4e7886fd083ed3800.png"},87983:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_14-21626ea4fa67ecb5cfaa8bdf715392df.png"},25144:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_2-8a88be2442d5d666e96a7929d4ffe83b.png"},79614:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_3-51800472062493eac032f559c63ff6f2.png"},79986:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_4-f712f7f95ed21795924a2111e56598dc.png"},48351:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_5-076effeaa53f7d5e0687edf67d064263.png"},72958:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_6-1f90a0030790121920a8d4badc247c17.png"},15181:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_7-b8c16ef021b53a0a2d2e5c7a9dbf3373.png"},9346:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_8-ce904f5d0a925e19e915e981cb7e9617.png"},57162:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Extension_Install_9-5ef32981a963ce7ae8f6ebf5359ab9c7.png"}}]);