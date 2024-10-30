"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[98088],{15680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>o});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),i=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},d=function(t){var e=i(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=y(t,["components","mdxType","originalType","parentName"]),u=i(a),o=r,N=u["".concat(m,".").concat(o)]||u[o]||p[o]||l;return a?n.createElement(N,g(g({ref:e},d),{},{components:a})):n.createElement(N,g({ref:e},d))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var y={};for(var m in e)hasOwnProperty.call(e,m)&&(y[m]=e[m]);y.originalType=t,y.mdxType="string"==typeof t?t:r,g[1]=y;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49572:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>g,default:()=>p,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"rabbitmq",title:"\u76d1\u63a7 RabbitMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",sidebar_label:"RabbitMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","RabbitMQ\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7"]},g=void 0,y={unversionedId:"help/rabbitmq",id:"help/rabbitmq",title:"\u76d1\u63a7 RabbitMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",description:"\u5bf9 RabbitMQ \u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u8282\u70b9\uff0c\u961f\u5217\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/rabbitmq.md",sourceDirName:"help",slug:"/help/rabbitmq",permalink:"/zh-cn/docs/help/rabbitmq",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/rabbitmq.md",tags:[],version:"current",frontMatter:{id:"rabbitmq",title:"\u76d1\u63a7 RabbitMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",sidebar_label:"RabbitMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","RabbitMQ\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Nacos\u5206\u5e03\u5f0f",permalink:"/zh-cn/docs/help/nacos"},next:{title:"RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",permalink:"/zh-cn/docs/help/rocketmq"}},m={},i=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aoverview",id:"\u6307\u6807\u96c6\u5408overview",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aobject_totals",id:"\u6307\u6807\u96c6\u5408object_totals",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1anodes",id:"\u6307\u6807\u96c6\u5408nodes",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aqueues",id:"\u6307\u6807\u96c6\u5408queues",level:4}],d={toc:i};function p(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9 RabbitMQ \u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u8282\u70b9\uff0c\u961f\u5217\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002")),(0,r.yg)("h3",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"HertzBeat \u4f7f\u7528 RabbitMQ Management \u7684 Rest Api \u5bf9 RabbitMQ \u8fdb\u884c\u6307\u6807\u6570\u636e\u91c7\u96c6\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u6545\u9700\u8981\u60a8\u7684 RabbitMQ \u73af\u5883\u5f00\u542f Management \u63d2\u4ef6")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5f00\u542f Management \u63d2\u4ef6\uff0c\u6216\u4f7f\u7528\u81ea\u5f00\u542f\u7248\u672c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"rabbitmq-plugins enable rabbitmq_management \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.yg)("a",{parentName:"p",href:"http://ip:15672/"},"http://ip:15672/")," \uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 ",(0,r.yg)("inlineCode",{parentName:"p"},"guest/guest"),". \u6210\u529f\u767b\u5f55\u5373\u5f00\u542f\u6210\u529f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728 HertzBeat \u6dfb\u52a0\u5bf9\u5e94 RabbitMQ \u76d1\u63a7\u5373\u53ef\uff0c\u53c2\u6570\u4f7f\u7528 Management \u7684 IP \u7aef\u53e3\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801\u3002"))),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"RabbitMQ Management \u5bf9\u5916\u63d0\u4f9b\u7684HTTP\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a15672\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP\u8bf7\u6c42\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408overview"},"\u6307\u6807\u96c6\u5408\uff1aoverview"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"product_version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ea7\u54c1\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"product_name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ea7\u54c1\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rabbitmq_version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"rabbitmq \u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"management_version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"rabbitmq management \u63d2\u4ef6\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"erlang_version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"erlang \u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cluster_name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rates_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"rates\u6a21\u5f0f")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408object_totals"},"\u6307\u6807\u96c6\u5408\uff1aobject_totals"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"channels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"channels\u7684\u603b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connections"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"connections\u7684\u603b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"consumers\u7684\u603b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exchanges"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"exchanges\u7684\u603b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queues"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"queues\u7684\u603b\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408nodes"},"\u6307\u6807\u96c6\u5408\uff1anodes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"The node name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"The node type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Running state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"os_pid"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Pid in OS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mem_limit"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory usage high watermark")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mem_used"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"Total amount of memory used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fd_total"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"File descriptors available")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fd_used"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"File descriptors used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sockets_total"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Sockets available")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sockets_used"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Sockets used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proc_total"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Erlang process limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proc_used"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Erlang processes used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"disk_free_limit"),(0,r.yg)("td",{parentName:"tr",align:null},"GB"),(0,r.yg)("td",{parentName:"tr",align:null},"Free disk space low watermark")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"disk_free"),(0,r.yg)("td",{parentName:"tr",align:null},"GB"),(0,r.yg)("td",{parentName:"tr",align:null},"Free disk space")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gc_num"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"GC runs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gc_bytes_reclaimed"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"Bytes reclaimed by GC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"context_switches"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Context_switches num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_read_count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u5171\u8bfb\u64cd\u4f5c\u7684\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_read_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"KB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u5171\u8bfb\u5165\u78c1\u76d8\u6570\u636e\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_read_avg_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bfb\u64cd\u4f5c\u5e73\u5747\u65f6\u95f4\uff0c\u6beb\u79d2\u4e3a\u5355\u4f4d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_write_count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u5199\u64cd\u4f5c\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_write_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"KB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5199\u5165\u78c1\u76d8\u6570\u636e\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_write_avg_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u78c1\u76d8\u5199\u64cd\u4f5c\u7684\u5e73\u5747\u65f6\u95f4\uff0c\u6beb\u79d2\u4e3a\u5355\u4f4d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_seek_count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"seek\u64cd\u4f5c\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_seek_avg_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"seek\u64cd\u4f5c\u7684\u5e73\u5747\u65f6\u95f4\uff0c\u6beb\u79d2\u5355\u4f4d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_sync_count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"fsync\u64cd\u4f5c\u7684\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io_sync_avg_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"fsync\u64cd\u4f5c\u7684\u5e73\u5747\u65f6\u95f4\uff0c\u6beb\u79d2\u4e3a\u5355\u4f4d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_created"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"connection created num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_closed"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"connection closed num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"channel_created"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"channel created num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"channel_closed"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"channel closed num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_declared"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"queue declared num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_created"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"queue created num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_deleted"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"queue deleted num")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_closed"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"connection closed num")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408queues"},"\u6307\u6807\u96c6\u5408\uff1aqueues"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the queue with non-ASCII characters escaped as in C.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"The queue on the node name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},'The state of the queue. Normally "running", but may be "{syncing, message_count}" if the queue is synchronising.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Queue type, one of: quorum, stream, classic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"vhost"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"vhost path")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto_delete"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the queue will be deleted automatically when no longer used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"policy"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Effective policy name for the queue.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"memory"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Bytes of memory allocated by the runtime for the queue, including stack, heap and internal structures.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messages_ready"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages ready to be delivered to clients")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messages_unacknowledged"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages delivered to clients but not yet acknowledged")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messages"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Sum of ready and unacknowledged messages (queue depth)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messages_ready_ram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages from messages_ready which are resident in ram")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messages_persistent"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of persistent messages in the queue (will always be 0 for transient queues)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Sum of the size of all message bodies in the queue. This does not include the message properties (including headers) or any overhead")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message_bytes_ready"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Like message_bytes but counting only those messages ready to be delivered to clients")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message_bytes_unacknowledged"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Like message_bytes but counting only those messages delivered to clients but not yet acknowledged")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message_bytes_ram"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Like message_bytes but counting only those messages which are currently held in RAM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message_bytes_persistent"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Like message_bytes but counting only those messages which are persistent")))))}p.isMDXComponent=!0}}]);