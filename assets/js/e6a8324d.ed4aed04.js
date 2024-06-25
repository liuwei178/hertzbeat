"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[98050],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const i={id:"greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",sidebar_label:"Metrics Store GreptimeDB"},o=void 0,l={unversionedId:"start/greptime-init",id:"start/greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",description:"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/docs/start/greptime-init.md",sourceDirName:"start",slug:"/start/greptime-init",permalink:"/docs/start/greptime-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/start/greptime-init.md",tags:[],version:"current",frontMatter:{id:"greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",sidebar_label:"Metrics Store GreptimeDB"}},c={},s=[{value:"Install GreptimeDB via Docker",id:"install-greptimedb-via-docker",level:3},{value:"Configure the database connection in hertzbeat <code>application.yml</code> configuration file",id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"It is recommended to use VictoriaMetrics as metrics storage.")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/GreptimeTeam/greptimedb"},"GreptimeDB")," is an open-source time-series database with a special focus on scalability, analytical capabilities and efficiency."),(0,n.yg)("p",null,"It's designed to work on infrastructure of the cloud era, and users benefit from its elasticity and commodity storage."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained."),"  "),(0,n.yg)("h3",{id:"install-greptimedb-via-docker"},"Install GreptimeDB via Docker"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,n.yg)("a",{parentName:"p",href:"https://docs.greptime.com/getting-started/overview"},"installation tutorial"),"  "),(0,n.yg)("ol",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ol"},"Download and install Docker environment",(0,n.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,n.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".",(0,n.yg)("br",{parentName:"li"}),"After the installation you can check if the Docker version normally output at the terminal.",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.yg)("li",{parentName:"ol"},"Install GreptimeDB with Docker   "))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'$ docker run -p 127.0.0.1:4000-4003:4000-4003 \\\n  -v "$(pwd)/greptimedb:/tmp/greptimedb" \\\n  --name greptime --rm \\\n  greptime/greptimedb:latest standalone start \\\n  --http-addr 0.0.0.0:4000 \\\n  --rpc-addr 0.0.0.0:4001 \\\n  --mysql-addr 0.0.0.0:4002 \\\n  --postgres-addr 0.0.0.0:4003\n')),(0,n.yg)("p",null,"   ",(0,n.yg)("inlineCode",{parentName:"p"},'-v "$(pwd)/greptimedb:/tmp/greptimedb"')," is local persistent mount of greptimedb data directory. ",(0,n.yg)("inlineCode",{parentName:"p"},"$(pwd)/greptimedb")," should be replaced with the actual local directory, default is the ",(0,n.yg)("inlineCode",{parentName:"p"},"greptimedb")," directory under the current directory.\nuse",(0,n.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully"),(0,n.yg)("h3",{id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file"},"Configure the database connection in hertzbeat ",(0,n.yg)("inlineCode",{parentName:"h3"},"application.yml")," configuration file"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Configure HertzBeat's configuration file",(0,n.yg)("br",{parentName:"li"}),"Modify ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," configuration file ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),"\nNote\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml"),"\nReplace ",(0,n.yg)("inlineCode",{parentName:"li"},"warehouse.store.greptime")," data source parameters, URL account and password.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # disable jpa\n      jpa:\n         enabled: false\n      # enable greptime   \n      greptime:\n         enabled: true\n         grpc-endpoints: localhost:4001\n         url: jdbc:mysql://localhost:4002/hertzbeat?connectionTimeZone=Asia/Shanghai&forceConnectionTimeZoneToSession=true\n         driver-class-name: com.mysql.cj.jdbc.Driver\n         username: greptime\n         password: greptime\n         expire-time: 30d\n")),(0,n.yg)("p",null,"The default database is ",(0,n.yg)("inlineCode",{parentName:"p"},"hertzbeat")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"url"),", and it will be created automatically. The ",(0,n.yg)("inlineCode",{parentName:"p"},"expire-time")," specifies the TTL(time-to-live) of the auto-created database, it's 30 days by default."),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Restart HertzBeat")),(0,n.yg)("h3",{id:"faq"},"FAQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Do both the time series databases Greptime, IoTDB or TDengine need to be configured? Can they both be used?")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which only affects the historical chart data.")))}d.isMDXComponent=!0}}]);