"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[68470],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},y=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,N=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(N,g(g({ref:t},y),{},{components:n})):r.createElement(N,g({ref:t},y))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,g=new Array(l);g[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,g[1]=i;for(var o=2;o<l;o++)g[o]=n[o];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const l={id:"ipmi",title:"IPMI2 \u76d1\u63a7",sidebar_label:"Server Monitor",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90\u670d\u52a1\u5668\u76d1\u63a7","IPMI \u76d1\u63a7"]},g=void 0,i={unversionedId:"help/ipmi",id:"help/ipmi",title:"IPMI2 \u76d1\u63a7",description:"\u4f7f\u7528 IPMI2 \u534f\u8bae\u6536\u96c6\u5e76\u76d1\u63a7\u670d\u52a1\u5668\u7684\u4e00\u822c\u6027\u80fd\u6307\u6807\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/ipmi.md",sourceDirName:"help",slug:"/help/ipmi",permalink:"/zh-cn/docs/help/ipmi",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/ipmi.md",tags:[],version:"current",frontMatter:{id:"ipmi",title:"IPMI2 \u76d1\u63a7",sidebar_label:"Server Monitor",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90\u670d\u52a1\u5668\u76d1\u63a7","IPMI \u76d1\u63a7"]},sidebar:"docs",previous:{title:"\u4f7f\u7528\u811a\u672c\u76d1\u63a7 Windows \u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh-cn/docs/help/windows_script"},next:{title:"Zookeeper\u76d1\u63a7",permalink:"/zh-cn/docs/help/zookeeper"}},p={},o=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aChassis",id:"\u6307\u6807\u96c6\u5408chassis",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aSensor",id:"\u6307\u6807\u96c6\u5408sensor",level:4}],y={toc:o};function m(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 IPMI2 \u534f\u8bae\u6536\u96c6\u5e76\u76d1\u63a7\u670d\u52a1\u5668\u7684\u4e00\u822c\u6027\u80fd\u6307\u6807\u3002")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u534f\u8bae: IPMI")),(0,a.yg)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u76ee\u6807\u670d\u52a1\u5668\u652f\u6301 ",(0,a.yg)("strong",{parentName:"li"},"IPMI2 \u534f\u8bae"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"BMC"),"\uff08\u4e3b\u677f\u7ba1\u7406\u63a7\u5236\u5668\uff09\u5df2\u914d\u7f6e\u4e86\u7f51\u7edc\u63a5\u53e3\uff0c\u5141\u8bb8\u8bbf\u95ee ",(0,a.yg)("strong",{parentName:"li"},"IPMI \u7aef\u53e3"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u7528\u6237\u8d26\u6237"),"\u5df2\u914d\u7f6e\uff0c\u5e76\u4e3a\u8d26\u6237\u5206\u914d\u4e86\u9002\u5f53\u7684",(0,a.yg)("strong",{parentName:"li"},"\u6743\u9650"),"\u3002")),(0,a.yg)("p",null,"\u8fd9\u4e9b\u662f\u57fa\u672c\u68c0\u67e5\u9879\uff0c\u5173\u4e8e\u542f\u7528\u548c\u914d\u7f6e IPMI over LAN \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003\u670d\u52a1\u5668\u5236\u9020\u5546\u7684\u5177\u4f53\u4f7f\u7528\u624b\u518c\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807\u4e3b\u673a"),(0,a.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u670d\u52a1\u5668\u7684 IPv4\u3001IPv6 \u5730\u5740\u6216\u57df\u540d\u3002\u6ce8\u610f\uff1a\u65e0\u9700\u6dfb\u52a0\u534f\u8bae\u5934\uff08\u4f8b\u5982\uff0chttps://, http://\uff09\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,a.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668 IPMI over LAN \u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a 623\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,a.yg)("td",{parentName:"tr",align:null},"IPMI \u7528\u6237\u540d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,a.yg)("td",{parentName:"tr",align:null},"IPMI \u5bc6\u7801")))),(0,a.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,a.yg)("h4",{id:"\u6307\u6807\u96c6\u5408chassis"},"\u6307\u6807\u96c6\u5408\uff1aChassis"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"System Power"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7535\u6e90\u72b6\u6001\uff0c\u7535\u6e90\u5f00\u542f\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Overload"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u8fc7\u8f7d\u3002\u7cfb\u7edf\u56e0\u7535\u6e90\u8fc7\u8f7d\u72b6\u51b5\u800c\u5173\u95ed\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Interlock"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u8054\u9501\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Main Power Fault"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u6545\u969c\u3002\u5728\u4e3b\u7535\u6e90\u5b50\u7cfb\u7edf\u4e2d\u68c0\u6d4b\u5230\u6545\u969c\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Control Fault"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u63a7\u5236\u6545\u969c\u3002\u63a7\u5236\u5668\u8bd5\u56fe\u6253\u5f00\u6216\u5173\u95ed\u7cfb\u7edf\u7535\u6e90\uff0c\u4f46\u7cfb\u7edf\u672a\u8fdb\u5165\u6240\u9700\u72b6\u6001\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Restore Policy"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u6062\u590d\u7b56\u7565\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Last Power Event"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6700\u540e\u7535\u6e90\u4e8b\u4ef6\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Cooling/Fan Fault"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5230\u51b7\u5374/\u98ce\u6247\u6545\u969c\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Drive Fault"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u786c\u76d8\u6545\u969c\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Front-Panel Lockout"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u524d\u9762\u677f\u9501\u5b9a\u5df2\u6fc0\u6d3b\uff08\u901a\u8fc7\u673a\u7bb1\u6309\u94ae\u7981\u7528\u7535\u6e90\u5173\u95ed\u548c\u91cd\u7f6e\u529f\u80fd\uff09\u3002")))),(0,a.yg)("h4",{id:"\u6307\u6807\u96c6\u5408sensor"},"\u6307\u6807\u96c6\u5408\uff1aSensor"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Sensor ID"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4f20\u611f\u5668\u6807\u8bc6\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Entity ID"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6307\u793a\u4f20\u611f\u5668\u6b63\u5728\u76d1\u63a7\u6216\u4e0e\u4f20\u611f\u5668\u5173\u8054\u7684\u7269\u7406\u5b9e\u4f53\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Sensor Type"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4f20\u611f\u5668\u7c7b\u578b\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Sensor Reading"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4f20\u611f\u5668\u5f53\u524d\u8bfb\u6570\u3002")))))}m.isMDXComponent=!0}}]);