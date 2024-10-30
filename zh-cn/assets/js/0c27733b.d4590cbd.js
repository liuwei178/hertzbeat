"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[31204],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),o=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=o(e.components);return r.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,c=d["".concat(g,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(c,i(i({ref:t},y),{},{components:n})):r.createElement(c,i({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const l={id:"flink",title:"\u76d1\u63a7\uff1aFlink",sidebar_label:"Flink \u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90 Flink \u76d1\u63a7"]},i=void 0,p={unversionedId:"help/flink",id:"help/flink",title:"\u76d1\u63a7\uff1aFlink",description:"\u5bf9 Flink \u6d41\u5f15\u64ce\u7684\u901a\u7528\u6307\u6807\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/flink.md",sourceDirName:"help",slug:"/help/flink",permalink:"/zh-cn/docs/help/flink",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/flink.md",tags:[],version:"current",frontMatter:{id:"flink",title:"\u76d1\u63a7\uff1aFlink",sidebar_label:"Flink \u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90 Flink \u76d1\u63a7"]},sidebar:"docs",previous:{title:"ElasticSearch",permalink:"/zh-cn/docs/help/elasticsearch"},next:{title:"Flink On Yarn \u76d1\u63a7",permalink:"/zh-cn/docs/help/flink_on_yarn"}},g={},o=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aoverview",id:"\u6307\u6807\u96c6\u5408overview",level:4}],y={toc:o};function u(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5bf9 Flink \u6d41\u5f15\u64ce\u7684\u901a\u7528\u6307\u6807\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002")),(0,a.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,a.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u7684\u7aef\u53e3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eJVM\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SSL"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fSSL\uff08\u9ed8\u8ba4\u5173\u95ed\uff09")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u7528\u6237\u540d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5bc6\u7801")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,a.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,a.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,a.yg)("h4",{id:"\u6307\u6807\u96c6\u5408overview"},"\u6307\u6807\u96c6\u5408\uff1aoverview"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"slots_total"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u63d2\u69fd\u603b\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"slots_used"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5df2\u7528\u63d2\u69fd\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"task_total"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u603b\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jobs_running"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jobs_failed"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u5931\u8d25\u7684\u4efb\u52a1\u6570")))))}u.isMDXComponent=!0}}]);