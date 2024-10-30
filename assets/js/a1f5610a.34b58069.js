"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[62500],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(r),g=n,u=y["".concat(m,".").concat(g)]||y[g]||c[g]||o;return r?a.createElement(u,l(l({ref:t},p),{},{components:r})):a.createElement(u,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={id:"pulsar",title:"Monitoring Pulsar Monitoring",sidebar_label:"Apache Pulsar",keywords:["open-source monitoring system","open-source database monitoring","HbaseMaster monitoring"]},l=void 0,i={unversionedId:"help/pulsar",id:"help/pulsar",title:"Monitoring Pulsar Monitoring",description:"Collecting and monitoring general performance metrics of Pulsar",source:"@site/docs/help/pulsar.md",sourceDirName:"help",slug:"/help/pulsar",permalink:"/docs/help/pulsar",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/pulsar.md",tags:[],version:"current",frontMatter:{id:"pulsar",title:"Monitoring Pulsar Monitoring",sidebar_label:"Apache Pulsar",keywords:["open-source monitoring system","open-source database monitoring","HbaseMaster monitoring"]},sidebar:"docs",previous:{title:"Kafka Monitoring (Client-based)",permalink:"/docs/help/kafka_client"},next:{title:"Nacos Server",permalink:"/docs/help/nacos"}},m={},s=[{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Metric Set: Version Information",id:"metric-set-version-information",level:4},{value:"Metric Set: process_start_time_seconds",id:"metric-set-process_start_time_seconds",level:4},{value:"Metric Set: process_open_fds",id:"metric-set-process_open_fds",level:4},{value:"Metric Set: process_max_fds",id:"metric-set-process_max_fds",level:4},{value:"Metric Set: jvm_memory_pool_allocated_bytes",id:"metric-set-jvm_memory_pool_allocated_bytes",level:4},{value:"Metric Set: jvm_memory_pool_used_bytes",id:"metric-set-jvm_memory_pool_used_bytes",level:4},{value:"Metric Set: jvm_memory_pool_committed_bytes",id:"metric-set-jvm_memory_pool_committed_bytes",level:4},{value:"Metric Set: jvm_memory_pool_max_bytes",id:"metric-set-jvm_memory_pool_max_bytes",level:4},{value:"Metric Set: pulsar_broker_publish_latency",id:"metric-set-pulsar_broker_publish_latency",level:4},{value:"Metric Set: pulsar_metadata_store_ops_latency_ms",id:"metric-set-pulsar_metadata_store_ops_latency_ms",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.yg)("wrapper",(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Collecting and monitoring general performance metrics of Pulsar")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Protocol Used: HTTP")),(0,n.yg)("h2",{id:"configuration-parameters"},"Configuration Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Target Host"),(0,n.yg)("td",{parentName:"tr",align:null},"The monitored endpoint's IPV4, IPV6, or domain name. Note\u26a0\ufe0f: Do not include the protocol header (e.g., https://, http://).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Port"),(0,n.yg)("td",{parentName:"tr",align:null},"The webServicePort value of Pulsar, default is 8080.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Task Name"),(0,n.yg)("td",{parentName:"tr",align:null},"The name identifying this monitoring task, must be unique.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Query Timeout"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the connection timeout in milliseconds, default is 3000 milliseconds.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Monitoring Interval"),(0,n.yg)("td",{parentName:"tr",align:null},"Interval time for periodic data collection, in seconds, minimum interval is 30 seconds.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Binding Tags"),(0,n.yg)("td",{parentName:"tr",align:null},"Used for categorizing monitoring resources.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Description/Remarks"),(0,n.yg)("td",{parentName:"tr",align:null},"Additional notes and descriptions for this monitoring task. Users can add more information here.")))),(0,n.yg)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.yg)("h4",{id:"metric-set-version-information"},"Metric Set: Version Information"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Version Info"),(0,n.yg)("td",{parentName:"tr",align:null},"NONE"),(0,n.yg)("td",{parentName:"tr",align:null},"Version Information")))),(0,n.yg)("h4",{id:"metric-set-process_start_time_seconds"},"Metric Set: process_start_time_seconds"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Process Start Time"),(0,n.yg)("td",{parentName:"tr",align:null},"NONE"),(0,n.yg)("td",{parentName:"tr",align:null},"Process Start Time")))),(0,n.yg)("h4",{id:"metric-set-process_open_fds"},"Metric Set: process_open_fds"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Open File Descriptors"),(0,n.yg)("td",{parentName:"tr",align:null},"NONE"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of Open File Descriptors")))),(0,n.yg)("h4",{id:"metric-set-process_max_fds"},"Metric Set: process_max_fds"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Max File Descriptors"),(0,n.yg)("td",{parentName:"tr",align:null},"NONE"),(0,n.yg)("td",{parentName:"tr",align:null},"Maximum Number of File Descriptors")))),(0,n.yg)("h4",{id:"metric-set-jvm_memory_pool_allocated_bytes"},"Metric Set: jvm_memory_pool_allocated_bytes"),(0,n.yg)("p",null,"Number of bytes of memory allocated in a specific memory pool in the Java Virtual Machine (JVM). In Pulsar, this typically refers to the amount of memory allocated for various purposes in the JVM (such as heap memory, non-heap memory, etc.)."),(0,n.yg)("h4",{id:"metric-set-jvm_memory_pool_used_bytes"},"Metric Set: jvm_memory_pool_used_bytes"),(0,n.yg)("p",null,"Unlike allocated_bytes, this metric shows the actual used memory, not just the allocated memory."),(0,n.yg)("h4",{id:"metric-set-jvm_memory_pool_committed_bytes"},"Metric Set: jvm_memory_pool_committed_bytes"),(0,n.yg)("p",null,"Number of bytes of memory committed in a specific memory pool in the JVM. In the JVM, committed memory is the amount of memory guaranteed to be available for the application to use. This portion of memory is typically locked by the operating system to reduce swapping or garbage collection."),(0,n.yg)("h4",{id:"metric-set-jvm_memory_pool_max_bytes"},"Metric Set: jvm_memory_pool_max_bytes"),(0,n.yg)("p",null,"Maximum number of bytes of memory that can be allocated in a specific memory pool in the JVM. This is the upper limit on memory usage for that memory pool and helps in setting the memory usage cap."),(0,n.yg)("h4",{id:"metric-set-pulsar_broker_publish_latency"},"Metric Set: pulsar_broker_publish_latency"),(0,n.yg)("p",null,"Message publishing latency on the broker side."),(0,n.yg)("h4",{id:"metric-set-pulsar_metadata_store_ops_latency_ms"},"Metric Set: pulsar_metadata_store_ops_latency_ms"),(0,n.yg)("p",null,"Latency of metadata store operations on the broker side."))}c.isMDXComponent=!0}}]);