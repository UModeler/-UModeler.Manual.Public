"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4013],{39058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(67294),n=a(86010),r=a(70179),s=a(87524),c=a(39960),m=a(95999);const i="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",E="sidebarItemLinkActive_I1ZP";function b(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:E},e.title)))))))}var p=a(13102);function _(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return l.createElement(p.Zo,{component:_,props:e})}function k(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(h,{sidebar:t}):l.createElement(b,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,m=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(k,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},24524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),n=a(86010),r=a(35155),s=a(1944),c=a(35281),m=a(39058),i=a(26090),o=a(90197);function u(e){let{tags:t,sidebar:a}=e;const u=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:u}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("h1",null,u),l.createElement(i.Z,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",m="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,i?m:c)},a,i&&l.createElement("span",null,i))}},26090:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(35155),r=a(13008);const s="tag_Nnez";function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},35155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(95999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);