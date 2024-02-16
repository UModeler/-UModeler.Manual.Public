"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[69],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const l={title:"Starting the UModeler blog",description:"This is the first post on UModeler.",slug:"hello-umodeler",authors:"jaesik",tags:["hello","welcome","first","UModeler-X","UModeler","UModelerX","Unity","Unity3D"],image:"https://docs.umodeler.com/img/512_umodeler_only_alpha.png",hide_table_of_contents:!1},a=void 0,i={permalink:"/blog/hello-umodeler",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024-02-16-hello-umodeler/2024-02-16-hello-umodeler.md",title:"Starting the UModeler blog",description:"This is the first post on UModeler.",date:"2024-02-16T00:00:00.000Z",formattedDate:"February 16, 2024",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"welcome",permalink:"/blog/tags/welcome"},{label:"first",permalink:"/blog/tags/first"},{label:"UModeler-X",permalink:"/blog/tags/u-modeler-x"},{label:"UModeler",permalink:"/blog/tags/u-modeler"},{label:"Unity",permalink:"/blog/tags/unity"},{label:"Unity3D",permalink:"/blog/tags/unity-3-d"}],readingTime:8.935,hasTruncateMarker:!0,authors:[{name:"Jaesik Hwang",title:"Head of UModeler Development",email:"Jaesik.H@umodeler.com",imageURL:"https://static.wixstatic.com/media/250891_b2b0d03187384b15b524e4b7fab08915~mv2.png",key:"jaesik"}],frontMatter:{title:"Starting the UModeler blog",description:"This is the first post on UModeler.",slug:"hello-umodeler",authors:"jaesik",tags:["hello","welcome","first","UModeler-X","UModeler","UModelerX","Unity","Unity3D"],image:"https://docs.umodeler.com/img/512_umodeler_only_alpha.png",hide_table_of_contents:!1}},s={authorsImageUrls:[void 0]},d=[{value:"UModeler X Development Story",id:"umodeler-x-development-story",level:2}],c={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(51234).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"Hello! I'm very excited to start a blog like this. I was thinking about what to write for my first blog post, and I decided it would be interesting to talk about why we started developing UModeler X, the process we went through, and how we plan to develop it further, as this is something we haven't had many chances to discuss."),(0,n.kt)("p",null,"The reason I started developing UModeler X while the existing UModeler was receiving a lot of love from Unity developers is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To allow for smooth editing of high-poly 3D data within the Unity editor."),(0,n.kt)("li",{parentName:"ol"},"To integrate all functions needed for 3D data creation, including modeling, rigging, painting, and sculpting, so that games can be made 100% within Unity."),(0,n.kt)("li",{parentName:"ol"},"To lay the groundwork for runtime solution development as well as editor solutions, aiming to develop new products for more 3D creators outside of Unity."),(0,n.kt)("li",{parentName:"ol"},"To allow creators to make various contents such as 3D worlds, games, items, and characters with UModeler X, and to support more creators' creative activities with the results produced from here.")),(0,n.kt)("h2",{id:"umodeler-x-development-story"},"UModeler X Development Story"))}p.isMDXComponent=!0},51234:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/SpaceShip_Render_02-8100c3b92081675d7bdaf44ceb0035a4.png"}}]);