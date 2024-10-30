"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[32840],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),h=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=h(a),d=n,u=g["".concat(i,".").concat(d)]||g[d]||s[d]||o;return a?r.createElement(u,c(c({ref:t},p),{},{components:a})):r.createElement(u,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var h=2;h<o;h++)c[h]=a[h];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=a(58168),n=(a(96540),a(15680));const o={id:"download",title:"Download Apache HertzBeat (incubating)",sidebar_label:"Download"},c=void 0,l={unversionedId:"download",id:"download",title:"Download Apache HertzBeat (incubating)",description:"Here is the Apache HertzBeat (incubating) official download page.",source:"@site/docs/download.md",sourceDirName:".",slug:"/download",permalink:"/docs/download",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/download.md",tags:[],version:"current",frontMatter:{id:"download",title:"Download Apache HertzBeat (incubating)",sidebar_label:"Download"}},i={},h=[{value:"The Latest Release",id:"the-latest-release",level:2},{value:"Release Docker Image",id:"release-docker-image",level:2},{value:"All Archived Releases",id:"all-archived-releases",level:2}],p={toc:h};function s(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Here is the Apache HertzBeat (incubating) official download page."),"\n",(0,n.yg)("strong",{parentName:"p"},"Please choose version to download from the following tables. It is recommended use the latest."))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Please verify the release with corresponding hashes(sha512), signatures and ",(0,n.yg)("a",{parentName:"li",href:"https://downloads.apache.org/incubator/hertzbeat/KEYS"},"project release KEYS"),"."),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi#verify"},"How to Verify")," for how to check the hashes and signatures."))),(0,n.yg)("h2",{id:"the-latest-release"},"The Latest Release"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Previous releases of HertzBeat may be affected by security issues, please use the latest one.")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Date"),(0,n.yg)("th",{parentName:"tr",align:null},"Download"),(0,n.yg)("th",{parentName:"tr",align:null},"Release Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.6.1"),(0,n.yg)("td",{parentName:"tr",align:null},"2024.10.29"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz"},"apache-hertzbeat-1.6.1-incubating-bin.tar.gz")," (HertzBeat) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz"},"apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz")," (HertzBeat Collector) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz"},"apache-hertzbeat-1.6.1-incubating-src.tar.gz")," (HertzBeat Source) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz.sha512"},"sha512")," )  ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz"},"apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz")," (docker-compose) ( ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz.sha512"},"sha512")," )"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hertzbeat/releases/tag/v1.6.1"},"release note"))))),(0,n.yg)("h2",{id:"release-docker-image"},"Release Docker Image"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Apache HertzBeat provides a docker image for each release. You can pull the image from the ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/hertzbeat"},"Docker Hub"),".")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"HertzBeat ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat"},"https://hub.docker.com/r/apache/hertzbeat")),(0,n.yg)("li",{parentName:"ul"},"HertzBeat Collector ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat-collector"},"https://hub.docker.com/r/apache/hertzbeat-collector"))),(0,n.yg)("h2",{id:"all-archived-releases"},"All Archived Releases"),(0,n.yg)("p",null,"For older releases, please check the ",(0,n.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/hertzbeat/"},"archive"),"."))}s.isMDXComponent=!0}}]);