"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[70624],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={id:"extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3eHTTP\u534f\u8bae\u76d1\u63a7"},p=void 0,o={unversionedId:"advanced/extend-http-example-hertzbeat",id:"advanced/extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",description:"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728 Apache HertzBeat (incubating) \u76d1\u63a7\u7cfb\u7edf\u4e0b\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-http-example-hertzbeat.md",sourceDirName:"advanced",slug:"/advanced/extend-http-example-hertzbeat",permalink:"/zh-cn/docs/advanced/extend-http-example-hertzbeat",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-http-example-hertzbeat.md",tags:[],version:"current",frontMatter:{id:"extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3eHTTP\u534f\u8bae\u76d1\u63a7"},sidebar:"docs",previous:{title:"XmlPath \u89e3\u6790\u65b9\u6cd5",permalink:"/zh-cn/docs/advanced/extend-http-xmlpath"},next:{title:"\u6559\u7a0b\u4e8c:\u83b7\u53d6TOKEN\u540e\u7eed\u8ba4\u8bc1\u4f7f\u7528",permalink:"/zh-cn/docs/advanced/extend-http-example-token"}},l={},s=[{value:"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e",id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e",level:3},{value:"\u65b0\u589e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML",id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248yml",level:3},{value:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9<code>hertzbeat</code>\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",id:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",level:3},{value:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",level:3},{value:"\u5b8c",id:"\u5b8c",level:4}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,r.yg)("wrapper",(0,a.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728 Apache HertzBeat (incubating) \u76d1\u63a7\u7cfb\u7edf\u4e0b\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002"),(0,r.yg)("p",null,"\u9605\u8bfb\u6b64\u6559\u7a0b\u524d\u6211\u4eec\u5e0c\u671b\u60a8\u5df2\u7ecf\u4ece",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u548c",(0,r.yg)("a",{parentName:"p",href:"extend-http"},"http\u534f\u8bae\u81ea\u5b9a\u4e49"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\u3002"),(0,r.yg)("h3",{id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e"},"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5f88\u591a\u573a\u666f\u6211\u4eec\u9700\u8981\u5bf9\u63d0\u4f9b\u7684 HTTP API \u63a5\u53e3\u8fdb\u884c\u76d1\u63a7\uff0c\u83b7\u53d6\u63a5\u53e3\u8fd4\u56de\u7684\u6307\u6807\u503c\u3002\u8fd9\u7bc7\u6587\u7ae0\u6211\u4eec\u901a\u8fc7http\u81ea\u5b9a\u4e49\u534f\u8bae\u6765\u89e3\u6790\u6211\u4eec\u5e38\u89c1\u7684http\u63a5\u53e3\u54cd\u5e94\u7ed3\u6784\uff0c\u83b7\u53d6\u8fd4\u56de\u4f53\u4e2d\u7684\u5b57\u6bb5\u4f5c\u4e3a\u6307\u6807\u6570\u636e\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "msg": "success",\n  "data": {}\n}\n\n')),(0,r.yg)("p",null,"\u5982\u4e0a\uff0c\u901a\u5e38\u6211\u4eec\u7684\u540e\u53f0API\u63a5\u53e3\u4f1a\u8bbe\u8ba1\u8fd9\u8fd9\u6837\u4e00\u4e2a\u901a\u7528\u8fd4\u56de\u3002hertzbeat\u7cfb\u7edf\u7684\u540e\u53f0\u4e5f\u662f\u5982\u6b64\uff0c\u6211\u4eec\u4eca\u5929\u5c31\u7528hertzbeat\u7684 API \u505a\u6837\u4f8b\uff0c\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u65b0\u7684\u76d1\u63a7\u7c7b\u578b ",(0,r.yg)("strong",{parentName:"p"},"hertzbeat"),"\uff0c\u76d1\u63a7\u91c7\u96c6\u5b83\u7684\u7cfb\u7edf\u6458\u8981\u7edf\u8ba1API\n",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157/api/summary"),", \u5176\u54cd\u5e94\u6570\u636e\u4e3a:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "msg": null,\n  "code": 0,\n  "data": {\n    "apps": [\n      {\n        "category": "service",\n        "app": "jvm",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      },\n      {\n        "category": "service",\n        "app": "website",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      }\n    ]\n  }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6211\u4eec\u8fd9\u6b21\u83b7\u53d6\u5176app\u4e0b\u7684 ",(0,r.yg)("inlineCode",{parentName:"strong"},"category"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"app"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"status"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"size"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"availableSize"),"\u7b49\u6307\u6807\u6570\u636e\u3002")),(0,r.yg)("h3",{id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248yml"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat\u9875\u9762")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u76d1\u63a7\u6a21\u7248\u83dc\u5355")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u65b0\u589e\u76d1\u63a7\u7c7b\u578b")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u70b9\u51fb\u4fdd\u5b58\u5e94\u7528")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u6a21\u7248YML\u7528\u4e8e\u5b9a\u4e49 ",(0,r.yg)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u914d\u7f6e\u81ea\u52a8\u6e32\u67d3UI), \u91c7\u96c6\u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e")," \u7b49\u3002\n\u5373\u6211\u4eec\u901a\u8fc7\u81ea\u5b9a\u4e49\u8fd9\u4e2a\u76d1\u63a7\u6a21\u7248\uff0c\u914d\u7f6e\u5b9a\u4e49\u4ec0\u4e48\u76d1\u63a7\u7c7b\u578b\uff0c\u524d\u7aef\u9875\u9762\u9700\u8981\u8f93\u5165\u4ec0\u4e48\u53c2\u6570\uff0c\u91c7\u96c6\u54ea\u4e9b\u6027\u80fd\u6307\u6807\uff0c\u901a\u8fc7\u4ec0\u4e48\u534f\u8bae\u53bb\u91c7\u96c6\u3002")),(0,r.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat"),"\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528HTTP\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"category: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: hertzbeat\nname:\n  zh-CN: HertzBeat\n  en-US: HertzBeat\n# The description and help of this monitoring type\nhelp:\n  zh-CN: Hertzbeat \u5bf9 Hertzbeat \u76d1\u63a7\u7cfb\u7edf\u7684\u901a\u7528\u6307\u6807\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u70b9\u51fb \u201c<i>\u65b0\u5efa HertzBeat\u76d1\u63a7\u7cfb\u7edf</i>\u201d \u5e76\u8fdb\u884c\u914d\u7f6e\uff0c\u6216\u8005\u9009\u62e9\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5bfc\u5165\u5df2\u6709\u914d\u7f6e\u3002\n  en-US: Hertzbeat monitors HertzBeat Monitor through general performance metric. You could click the \"<i>New HertzBeat Monitor</i>\" button and proceed with the configuration or import an existing setup through the \"<i>More Actions</i>\" menu.\n  zh-TW: Hertzbeat\u5c0dHertzbeat\u76e3\u63a7\u7cfb\u7d71\u7684\u901a\u7528\u540d\u984d\u9032\u884c\u91cf\u6e2c\u76e3\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u9ede\u64ca\u201c<i>\u65b0\u5efaHertzBeat\u76e3\u63a7\u7cfb\u7d71</i>\u201d\u4e26\u9032\u884c\u914d\u5bd8\uff0c\u6216\u8005\u9078\u64c7\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5c0e\u5165\u5df2\u6709\u914d\u5bd8\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/help/hertzbeat\n  en-US: https://hertzbeat.apache.org/docs/help/hertzbeat\nparams:\n  - field: host\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    type: host\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 1157\n  - field: ssl\n    name:\n      zh-CN: \u542f\u7528HTTPS\n      en-US: HTTPS\n    type: boolean\n    required: true\n  - field: timeout\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    type: number\n    required: false\n    hide: true\n  - field: authType\n    name:\n      zh-CN: \u8ba4\u8bc1\u65b9\u5f0f\n      en-US: Auth Type\n    type: radio\n    required: false\n    hide: true\n    options:\n      - label: Basic Auth\n        value: Basic Auth\n      - label: Digest Auth\n        value: Digest Auth\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 50\n    required: false\n    hide: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n    hide: true\nmetrics:\n  # the first metrics summary\n  # attention: Built-in monitoring metrics contains (responseTime - Response time)\n  - name: summary\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # metrics content contains field-metric name, type-metric type:0-number,1-string, instance-if is metrics, unit-metric unit('%','ms','MB')\n      - field: app\n        type: 1\n        label: true\n      - field: category\n        type: 1\n      - field: status\n        type: 0\n      - field: size\n        type: 0\n      - field: availableSize\n        type: 0\n    #  the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk, we use HTTP protocol here\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url, we don't need to enter a parameter here, just set the fixed value to /api/summary\n      url: /api/summary\n      timeout: ^_^timeout^_^\n      # http method: GET POST PUT DELETE PATCH, default fixed value is GET\n      method: GET\n      # if enabled https, default value is false\n      ssl: ^_^ssl^_^\n      # http auth\n      authorization:\n        # http auth type: Basic Auth, Digest Auth, Bearer Token\n        type: ^_^authType^_^\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n        digestAuthUsername: ^_^username^_^\n        digestAuthPassword: ^_^password^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, we use jsonpath to parse response data here\n      parseType: jsonPath\n      parseScript: '$.data.apps.*'\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u65b0\u589e\u5b8c\u6bd5\uff0c\u73b0\u5728\u6211\u4eec\u91cd\u542fhertzbeat\u7cfb\u7edf\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u9875\u9762\u5df2\u7ecf\u591a\u4e86\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"strong"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u4e86\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"HertzBeat",src:n(8393).A,width:"3840",height:"1724"})),(0,r.yg)("h3",{id:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"},"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9",(0,r.yg)("inlineCode",{parentName:"h3"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u70b9\u51fb\u65b0\u589e ",(0,r.yg)("inlineCode",{parentName:"p"},"HertzBeat\u76d1\u63a7\u7cfb\u7edf"),"\uff0c\u914d\u7f6e\u76d1\u63a7IP\uff0c\u7aef\u53e3\uff0c\u91c7\u96c6\u5468\u671f\uff0c\u9ad8\u7ea7\u8bbe\u7f6e\u91cc\u7684\u8d26\u6237\u5bc6\u7801\u7b49, \u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u76d1\u63a7\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"HertzBeat",src:n(43250).A,width:"1921",height:"860"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"HertzBeat",src:n(92251).A,width:"1922",height:"857"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8fc7\u4e00\u5b9a\u65f6\u95f4(\u53d6\u51b3\u4e8e\u91c7\u96c6\u5468\u671f)\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u76d1\u63a7\u8be6\u60c5\u770b\u5230\u5177\u4f53\u7684\u6307\u6807\u6570\u636e\u548c\u5386\u53f2\u56fe\u8868\u5566\uff01")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"HertzBeat",src:n(82308).A,width:"1922",height:"860"})),(0,r.yg)("h3",{id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"},"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u6b63\u5e38\u7684\u8bbe\u7f6e\u9608\u503c\uff0c\u544a\u8b66\u89e6\u53d1\u540e\u53ef\u4ee5\u5728\u544a\u8b66\u4e2d\u5fc3\u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u65b0\u589e\u63a5\u6536\u4eba\uff0c\u8bbe\u7f6e\u544a\u8b66\u901a\u77e5\u7b49\uff0cHave Fun!!!")),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"\u5b8c"},"\u5b8c"),(0,r.yg)("p",null,"HTTP\u534f\u8bae\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7684\u5b9e\u8df5\u5c31\u5230\u8fd9\u91cc\uff0cHTTP\u534f\u8bae\u8fd8\u5e26\u5176\u4ed6\u53c2\u6570headers,params\u7b49\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u7528postman\u4e00\u6837\u53bb\u5b9a\u4e49\u5b83\uff0c\u53ef\u73a9\u6027\u4e5f\u975e\u5e38\u9ad8\uff01"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u89c9\u5f97hertzbeat\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u4e0d\u9519\u7684\u8bdd\u6b22\u8fce\u7ed9\u6211\u4eec\u5728GitHub Gitee star\u54e6\uff0c\u7070\u5e38\u611f\u8c22\u3002\u611f\u8c22\u8001\u94c1\u4eec\u7684\u652f\u6301\u3002\u7b14\u82af\uff01"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))))}u.isMDXComponent=!0},8393:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-1-2ef7a26379015bea268420811e822d18.png"},43250:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-2-cbd473f82a666e7562d932d8eeaccc57.png"},92251:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-3-8cdb9ddf2d9e2e7b469eb4082c0f9f13.png"},82308:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-4-5e7e7c30cdfbd310c653ede5ea72f622.png"}}]);