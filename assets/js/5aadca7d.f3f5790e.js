"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9798],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),d=p(n),h=o,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||a;return n?i.createElement(u,l(l({ref:e},c),{},{components:n})):i.createElement(u,l({ref:e},c))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:o,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96608:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,slug:"/git-installation"},l="Git Installation",r={unversionedId:"ai-texturing/installation-guide/git-installation",id:"ai-texturing/installation-guide/git-installation",title:"Git Installation",description:"Git is an essential distributed version control system for software development. As part of the installation process for the Stable Diffusion web UI, it is necessary to use Git Clone, which requires the installation of Git.",source:"@site/docs/ai-texturing/installation-guide/git-installation.md",sourceDirName:"ai-texturing/installation-guide",slug:"/git-installation",permalink:"/docs/git-installation",draft:!1,editUrl:"https://github.com/UModelerX/documentation/tree/main/docs/ai-texturing/installation-guide/git-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/git-installation"},sidebar:"docs",previous:{title:"Installation Guide",permalink:"/docs/installation-guide"},next:{title:"Python Install",permalink:"/docs/python-installation"}},s={},p=[{value:"<strong>Download the Git installation file</strong>",id:"download-the-git-installation-file",level:2},{value:"<strong>Git Installation</strong>",id:"git-installation-1",level:2},{value:"Installation Options",id:"installation-options",level:3},{value:"<strong>Check Git installation</strong>",id:"check-git-installation",level:2},{value:"Using Git Bash",id:"using-git-bash",level:3},{value:"Checking with PowerShell",id:"checking-with-powershell",level:3}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-installation"},"Git Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Git")," is an essential distributed version control system for software development. As part of the installation process for the ",(0,o.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),", it is necessary to use Git Clone, which requires the ",(0,o.kt)("strong",{parentName:"p"},"installation of Git"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"git clone")," command is used to copy project repository files from the web to your computer."),(0,o.kt)("li",{parentName:"ul"},"This document describes the process of installing Git based on ",(0,o.kt)("strong",{parentName:"li"},"Windows"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"download-the-git-installation-file"},(0,o.kt)("strong",{parentName:"h2"},"Download the Git installation file")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"go to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git official download page"),".\n",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"select the desired operating system. Here we will select ",(0,o.kt)("strong",{parentName:"p"},"Windows"),".\n",(0,o.kt)("img",{alt:"none",src:n(42430).Z,width:"1998",height:"1618"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Click here to download'")," part to download the Git installation file.\n",(0,o.kt)("img",{alt:"none",src:n(9851).Z,width:"1998",height:"1208"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you want to install a specific version of Git, or choose a version that matches your computer's architecture (32-bit or 64-bit), scroll down on the webpage and click on the desired option: '32-bit Git for Windows Setup' or '64-bit Git for Windows Setup'."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Typically, since most computers currently support 64-bit, you should select '64-bit Git for Windows Setup'."))),(0,o.kt)("p",null,"Now, you can install Git by running the downloaded installation file."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"git-installation-1"},(0,o.kt)("strong",{parentName:"h2"},"Git Installation")),(0,o.kt)("p",null,"When installing Git on Windows, you can proceed with the default installation settings, but some options require manual selection. Please check the installation options below as you proceed with the installation. For other screens, you can simply continue by clicking 'Next' without making any special changes."),(0,o.kt)("h3",{id:"installation-options"},"Installation Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select Components"),(0,o.kt)("img",{alt:"none",src:n(8551).Z,width:"1260",height:"967"})," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows Explorer integration"),": Right-click in Explorer to display a shortcut menu for Git commands."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Git Bash Here"),": Make sure this is checked. This option will enable the ",(0,o.kt)("strong",{parentName:"li"},"'Git Bash Here'")," command on right-click in Explorer."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Adjusting your PATH environment"),".\n",(0,o.kt)("img",{alt:"none",src:n(57288).Z,width:"1260",height:"967"}),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Git from the command line and also from 3rd-party software"),": This option adds Git to the PATH environment variable, allowing Git commands to be used in the command prompt or other 3rd-party software.")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"check-git-installation"},(0,o.kt)("strong",{parentName:"h2"},"Check Git installation")),(0,o.kt)("p",null,"To verify that Git has been installed correctly, you should follow the steps below. You can check using either of the two methods provided below, depending on your preference."),(0,o.kt)("h3",{id:"using-git-bash"},"Using Git Bash"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Right-click"))," on your desktop or file explorer at a location of your choice."),(0,o.kt)("li",{parentName:"ol"},"select 'Open git bash here' from the dropdown menu that appears.\n",(0,o.kt)("img",{alt:"none",src:n(54485).Z,width:"1162",height:"951"})),(0,o.kt)("li",{parentName:"ol"},"In the newly opened Git Bash window, enter the command below.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git --version"),(0,o.kt)("img",{alt:"none",src:n(11630).Z,width:"1162",height:"715"})))),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Enter"))," and if the screen displays the correct version information: ",(0,o.kt)("strong",{parentName:"li"},"'git version x.x.x'"),", the installation of Git has been successfully completed.\n",(0,o.kt)("img",{alt:"none",src:n(20832).Z,width:"1162",height:"715"}))),(0,o.kt)("h3",{id:"checking-with-powershell"},"Checking with PowerShell"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+Right-click"))," on the desktop or in a file explorer of your choice."),(0,o.kt)("li",{parentName:"ol"},"select '",(0,o.kt)("strong",{parentName:"li"},"Open PowerShell window here"),"' from the drop-down menu."),(0,o.kt)("li",{parentName:"ol"},"In the newly opened PowerShell window, type ",(0,o.kt)("inlineCode",{parentName:"li"},"git --version")," and press ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Enter")),"."),(0,o.kt)("li",{parentName:"ol"},"If the screen displays the version information ",(0,o.kt)("strong",{parentName:"li"},"'git version x.x.x'"),", the Git installation completed successfully.")),(0,o.kt)("p",null,"If no Git-related information appears at all, there may have been an issue during the installation process. In this case, you should review the installation steps or consider reinstalling Git from the beginning."))}d.isMDXComponent=!0},42430:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Download_1-c48e79157df0d48efb446c68a2bb3422.png"},9851:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Download_2-cf896a87902e3d5db138d5a290623e30.png"},54485:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Install_20-ef1da436189c9ec4b54031d1afd9ede0.png"},11630:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Install_22-84e8867e7cf5e73d117aecdd1238ba53.png"},20832:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Install_23-67f3f426580f3f79fb580361a697b720.png"},8551:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Install_3-b0c99c70a8bdedc3bc8572be50288e46.png"},57288:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Git_Install_8-82d3ab76d16ec3290a146341c2af2957.png"}}]);