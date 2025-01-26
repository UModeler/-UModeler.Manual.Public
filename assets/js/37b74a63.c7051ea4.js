"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[24466],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>u});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,h=r(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(u,i(i({ref:e},h),{},{components:n})):o.createElement(u,i({ref:e},h))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28679:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2,slug:"/python-installation"},i="Python Install",r={unversionedId:"ai-texturing/installation-guide/python-installation",id:"ai-texturing/installation-guide/python-installation",title:"Python Install",description:"In order to run the Stable Diffusion web UI, you need to install Python.",source:"@site/docs/ai-texturing/installation-guide/python-installation.md",sourceDirName:"ai-texturing/installation-guide",slug:"/python-installation",permalink:"/docs/python-installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/python-installation"},sidebar:"docs",previous:{title:"Git Installation",permalink:"/docs/git-installation"},next:{title:"Install the Stable Diffusion webUI",permalink:"/docs/stable-diffusion-web-ui-installation"}},s={},p=[{value:"Download the <strong>Python installation file</strong>.",id:"download-the-python-installation-file",level:2},{value:"<strong>Install Python</strong>",id:"install-python",level:2},{value:"<strong>Verify the Python installation</strong>",id:"verify-the-python-installation",level:2}],h={toc:p};function d(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,o.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-install"},"Python Install"),(0,a.kt)("p",null,"In order to run the ",(0,a.kt)("strong",{parentName:"p"},"Stable Diffusion web UI"),", you need to install ",(0,a.kt)("strong",{parentName:"p"},"Python"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"download-the-python-installation-file"},"Download the ",(0,a.kt)("strong",{parentName:"h2"},"Python installation file"),"."),(0,a.kt)("p",null,"You will need to install ",(0,a.kt)("strong",{parentName:"p"},"Python 3.10.6"),". The link below will take you to a page where you can download that version."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.python.org/downloads/release/python-3106/"},"Python 3.10.6 download page")))),(0,a.kt)("p",null,"Once you're on that webpage, scroll down and you'll find a section labeled \"",(0,a.kt)("strong",{parentName:"p"},"Files"),'" in bold.\n',(0,a.kt)("img",{alt:"none",src:n(99502).Z,width:"2049",height:"1129"})),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"'Files'")," section, you'll find several versions of the Python installation files listed, which you'll download by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"'Windows installer (64-bit)'")," link."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"install-python"},(0,a.kt)("strong",{parentName:"h2"},"Install Python")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the installation by ",(0,a.kt)("strong",{parentName:"li"},"running")," the downloaded ",(0,a.kt)("strong",{parentName:"li"},"Python installation file"),"."),(0,a.kt)("li",{parentName:"ol"},"When the installation screen opens, make sure to check the '",(0,a.kt)("strong",{parentName:"li"},"Add Python 3.10 to PATH"),"' option.\n",(0,a.kt)("img",{alt:"none",src:n(29491).Z,width:"1668",height:"1001"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This option will add Python to your system's PATH environment variable, and you will then be able to run the command ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"python"))," directly from a command prompt or terminal."))),(0,a.kt)("li",{parentName:"ol"},"Follow the on-screen instructions for the rest of the installation process.\n",(0,a.kt)("img",{alt:"none",src:n(51369).Z,width:"1668",height:"1001"})),(0,a.kt)("li",{parentName:"ol"},"Once the installation is complete, click the '",(0,a.kt)("strong",{parentName:"li"},"Disable path length limit"),"' button.\n",(0,a.kt)("img",{alt:"none",src:n(21026).Z,width:"1668",height:"1001"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This option turns off Windows' file path length limit.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By default, Windows limits the full path of a file (including directories) to no more than ",(0,a.kt)("strong",{parentName:"li"},"260 characters"),"."),(0,a.kt)("li",{parentName:"ul"},"Python projects often need to use long paths that exceed this limit, so it's a good idea to turn off this restriction.")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"verify-the-python-installation"},(0,a.kt)("strong",{parentName:"h2"},"Verify the Python installation")),(0,a.kt)("p",null,"We need to verify that the Python installation completed successfully. This is the same way we verified the ",(0,a.kt)("strong",{parentName:"p"},"Git installation")," earlier, only this time we need to type '",(0,a.kt)("inlineCode",{parentName:"p"},"python"),"' instead of '",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"' at the command prompt."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open an input window")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select the desired location on your desktop or file explorer and right-click."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"'Open git bash here'")," from the drop-down menu that appears.\n",(0,a.kt)("img",{alt:"Alt text",src:n(54485).Z,width:"1162",height:"951"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PowerShell"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Shift+Right-click"))," on the desktop or file explorer in a desired location."),(0,a.kt)("li",{parentName:"ol"},"select '",(0,a.kt)("strong",{parentName:"li"},"Open PowerShell window here"),"' from the drop-down menu."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the newly opened console or terminal window, type ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"python --version"))," and press ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Enter")),".\n",(0,a.kt)("img",{alt:"none",src:n(79056).Z,width:"1239",height:"771"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you see the correct version information on the screen: '",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"python 3.10.6")),"', the installation of Python has been successfully completed.\n",(0,a.kt)("img",{alt:"none",src:n(46921).Z,width:"1239",height:"771"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you get different version information, or no information about Python at all, something may have gone wrong during the installation process and you should try to install it again.")))))}d.isMDXComponent=!0},54485:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Git_Install_20-ef1da436189c9ec4b54031d1afd9ede0.png"},99502:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_1-e216db2b506a346347e9258aab410101.png"},29491:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_2-9e77597157d8f1c0f5b93b0e47f11289.png"},51369:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_3-306051a90888db4c7292964617b7ff75.png"},21026:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_5-e9776be6e0d9c6bcf39d115c5934f287.png"},79056:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_7-b16c3e61cf056306c01bf1261a6e16e2.png"},46921:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Python_Install_8-fb473d58d314b97ffd41fa44a73131ef.png"}}]);