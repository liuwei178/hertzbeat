"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[55711],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,y=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},13861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const r={id:"alert_sms",title:"Alert SMS notification",sidebar_label:"Alert SMS notification",keywords:["open source monitoring tool","open source alerter","open source SMS alert notification"]},o=void 0,l={unversionedId:"help/alert_sms",id:"help/alert_sms",title:"Alert SMS notification",description:"After the threshold is triggered send alarm information and notify the recipient by SMS.",source:"@site/docs/help/alert_sms.md",sourceDirName:"help",slug:"/help/alert_sms",permalink:"/docs/help/alert_sms",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/alert_sms.md",tags:[],version:"current",frontMatter:{id:"alert_sms",title:"Alert SMS notification",sidebar_label:"Alert SMS notification",keywords:["open source monitoring tool","open source alerter","open source SMS alert notification"]},sidebar:"docs",previous:{title:"Alert email notification",permalink:"/docs/help/alert_email"},next:{title:"Alert webHook notification",permalink:"/docs/help/alert_webhook"}},s={},p=[{value:"SMS Service Configuration",id:"sms-service-configuration",level:2},{value:"Tencent Cloud SMS Configuration",id:"tencent-cloud-sms-configuration",level:3},{value:"Alibaba Cloud SMS Configuration",id:"alibaba-cloud-sms-configuration",level:3},{value:"UniSMS Configuration",id:"unisms-configuration",level:3},{value:"Smslocal SMS Configuration",id:"smslocal-sms-configuration",level:3},{value:"Operation steps",id:"operation-steps",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.yg)("wrapper",(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by SMS.")),(0,i.yg)("h2",{id:"sms-service-configuration"},"SMS Service Configuration"),(0,i.yg)("p",null,"Only when you successfully configure your own SMS service will the alert SMS triggered within the monitoring system be sent correctly.",(0,i.yg)("br",{parentName:"p"}),"\n","HertzBeat provides two ways to configure the SMS service: modifying the ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml")," configuration file directly or configuring it through the HertzBeat frontend interface (Settings > Message Server Setting)."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0f Note: Only one method can be effective at a time. If both methods are configured and enabled, HertzBeat will prioritize the SMS service configured in the frontend interface.")),(0,i.yg)("h3",{id:"tencent-cloud-sms-configuration"},"Tencent Cloud SMS Configuration"),(0,i.yg)("p",null,"Add/Fill in the following Tencent Cloud SMS server configuration to ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml")," (replace parameters with your own SMS server configuration):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'alerter:\n  sms:\n    enable: true     # Whether to enable\n    type: tencent    # SMS provider type, supports "tencent"\n    tencent:         # Tencent Cloud SMS configuration\n      secret-id: AKIDbQ4VhdMr89wDedFrIcgU2PaaMvOuBCzY\n      secret-key: PaXGl0ziY9UcWFjUyiFlCPMr77rLkJYlyA\n      app-id: 1435441637\n      sign-name: HertzBeat\n      template-id: 1343434\n')),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a signature (sign-name) in Tencent Cloud SMS",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://github.com/apache/hertzbeat/assets/40455946/3a4c287d-b23d-4398-8562-4894296af485",alt:"image"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a message template (template-id) in Tencent Cloud SMS"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"Monitor: {1}, Alert Level: {2}. Content: {3}\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{parentName:"p",src:"https://github.com/apache/hertzbeat/assets/40455946/face71a6-46d5-452c-bed3-59d2a975afeb",alt:"image"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create an application (app-id) in Tencent Cloud SMS",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://github.com/apache/hertzbeat/assets/40455946/2732d710-37fa-4455-af64-48bba273c2f8",alt:"image"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Obtain Tencent Cloud Access Management credentials (secret-id, secret-key)",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://github.com/apache/hertzbeat/assets/40455946/36f056f0-94e7-43db-8f07-82893c98024e",alt:"image"})))),(0,i.yg)("h3",{id:"alibaba-cloud-sms-configuration"},"Alibaba Cloud SMS Configuration"),(0,i.yg)("p",null,"To activate and use Alibaba Cloud SMS service, you can refer to the official Alibaba Cloud documentation: ",(0,i.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/sms/getting-started/get-started-with-sms"},"SMS Getting Started Guide")),(0,i.yg)("p",null,"You can configure the Alibaba Cloud SMS service either through the graphical interface or in the ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml")," file.\nTo use ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml"),", add/fill in the following Alibaba Cloud SMS configuration (replace parameters with your own SMS server configuration):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'alerter:\n   sms:\n      enable: true    # Whether to enable\n      type: alibaba   # SMS provider type, supports "alibaba"\n      alibaba:        # Alibaba Cloud SMS configuration\n         access-key-id:      # Your AccessKey ID\n         access-key-secret:  # Your AccessKey Secret\n         sign-name:          # SMS signature\n         template-code:      # SMS template code\n')),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create an Alibaba Cloud account and activate SMS service"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Visit ",(0,i.yg)("a",{parentName:"li",href:"https://dysms.console.aliyun.com/"},"Alibaba Cloud SMS Console")),(0,i.yg)("li",{parentName:"ul"},"Activate SMS service"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a signature (sign-name)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Log in to ",(0,i.yg)("a",{parentName:"li",href:"https://dysms.console.aliyun.com/"},"SMS Console")),(0,i.yg)("li",{parentName:"ul"},"Select Domestic/International SMS service"),(0,i.yg)("li",{parentName:"ul"},'Go to "Signature Management" page and click "Add Signature"'),(0,i.yg)("li",{parentName:"ul"},"Fill in signature information and submit for review"),(0,i.yg)("li",{parentName:"ul"},"Wait for signature approval"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a message template (template-code)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'Go to "Template Management" page'),(0,i.yg)("li",{parentName:"ul"},'Click "Add Template"'),(0,i.yg)("li",{parentName:"ul"},"Create a template with the following format:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"Monitor: ${instance}, Alert Level: ${priority}. Content: ${content}\n")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Submit the template for review"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Obtain Access Key credentials (access-key-id, access-key-secret)"),(0,i.yg)("admonition",{parentName:"li",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Alibaba Cloud officially recommends using RAM user AccessKey with minimal permissions.")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/users"},"Go to RAM Access Control")," to manage RAM users"),(0,i.yg)("li",{parentName:"ul"},'Create user and select "Access Key for API Access"'),(0,i.yg)("li",{parentName:"ul"},"Securely save the AccessKey ID and AccessKey Secret"),(0,i.yg)("li",{parentName:"ul"},'Grant SMS service permission "AliyunDysmsFullAccess" to the user')))),(0,i.yg)("p",null,"Now you can configure this information in your hertzbeat application."),(0,i.yg)("h3",{id:"unisms-configuration"},"UniSMS Configuration"),(0,i.yg)("p",null,"UniSMS is an aggregated SMS service platform. You can refer to ",(0,i.yg)("a",{parentName:"p",href:"https://unisms.apistd.com/docs/tutorials"},"UniSMS Documentation")," for configuration."),(0,i.yg)("p",null,"Add/Fill in the following UniSMS configuration to ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml")," (replace parameters with your own SMS server configuration):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"alerter:\n  sms:\n    enable: true    # Whether to enable\n    type: unisms   # SMS provider type, set to unisms\n    unisms:        # UniSMS configuration\n       # auth-mode: simple or hmac\n       auth-mode: simple\n       access-key-id: YOUR_ACCESS_KEY_ID\n       # hmac mode need to fill in access-key-secret\n       access-key-secret: YOUR_ACCESS_KEY_SECRET\n       signature: YOUR_SMS_SIGNATURE\n       template-id: YOUR_TEMPLATE_ID\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Register UniSMS account"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Visit ",(0,i.yg)("a",{parentName:"li",href:"https://unisms.apistd.com/"},"UniSMS website")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create signature"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Log in to ",(0,i.yg)("a",{parentName:"li",href:"https://unisms.apistd.com/console/"},"UniSMS Console")),(0,i.yg)("li",{parentName:"ul"},'Go to "SMS Filing - Signature Management" page'),(0,i.yg)("li",{parentName:"ul"},'Click "Add Signature"'),(0,i.yg)("li",{parentName:"ul"},"Fill in signature information and submit for review"),(0,i.yg)("li",{parentName:"ul"},"Wait for signature approval"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create message template"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'Go to "SMS Filing - Template Management" page'),(0,i.yg)("li",{parentName:"ul"},'Click "Add Template"'),(0,i.yg)("li",{parentName:"ul"},"Create a template with the following format:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"Monitor: {instance}, Alert Level: {priority}. Content: {content}\n")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Submit the template for review"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Obtain ",(0,i.yg)("inlineCode",{parentName:"p"},"access-key-id")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"access-key-secret")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Log in to ",(0,i.yg)("a",{parentName:"li",href:"https://unisms.apistd.com/console/"},"UniSMS Console")),(0,i.yg)("li",{parentName:"ul"},'Go to "Credential Management" page'),(0,i.yg)("li",{parentName:"ul"},"Get AccessKey ID and AccessKey Secret"),(0,i.yg)("li",{parentName:"ul"},"Securely save the AccessKey ID and AccessKey Secret")),(0,i.yg)("admonition",{parentName:"li",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"UniSMS provides two authentication methods for developers to choose from, which can be set in Console - Credential Management, with Simple Mode as default."),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Simple Mode ","[Default]",": This mode only verifies AccessKey ID without request parameter signature, making it easier for developers to integrate quickly."),(0,i.yg)("li",{parentName:"ul"},"HMAC Mode: This mode requires signing request parameters with AccessKey Secret to enhance the security and authenticity of requests."))))),(0,i.yg)("p",null,"Now you can configure this information in your hertzbeat application."),(0,i.yg)("h3",{id:"smslocal-sms-configuration"},"Smslocal SMS Configuration"),(0,i.yg)("p",null,"SMSLocal is an all-in-one SMS service for businesses, with features like multi-way sending, strong security, and 24/7 support. You can refer to smslocal's ",(0,i.yg)("a",{parentName:"p",href:"https://www.smslocal.com/developer/"},"Developer Documentation")," for configuration."),(0,i.yg)("p",null,"Add/Fill in the following Smslocal configuration to ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml")," (replace parameters with your own SMS server configuration):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"alerter:\n  sms:\n    enable: true    # Whether to enable\n    type: smslocal   # SMS provider type, set to smslocal\n    smslocal:        # Smslocal configuration\n       api-key: YOUR_API_KEY_HERE\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Register smslocal account"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Visit ",(0,i.yg)("a",{parentName:"li",href:"https://www.smslocal.com/"},"Smslocal Website")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Obtain ",(0,i.yg)("inlineCode",{parentName:"p"},"api-key")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Log in to ",(0,i.yg)("a",{parentName:"li",href:"https://secure.smslocal.com/cpaas/pages/profile/settings/api-reference"},"Smslocal Api Access")),(0,i.yg)("li",{parentName:"ul"},'Go to "API Access" page'),(0,i.yg)("li",{parentName:"ul"},"Click the eye button"),(0,i.yg)("li",{parentName:"ul"},"Copy the displayed access key"),(0,i.yg)("li",{parentName:"ul"},"Then you can configure the ",(0,i.yg)("inlineCode",{parentName:"li"},"application.yml")," file")))),(0,i.yg)("p",null,"Now you can configure this information in your hertzbeat application."),(0,i.yg)("h2",{id:"operation-steps"},"Operation steps"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select SMS notification method\u3011"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."))))),(0,i.yg)("p",null,"If you have any issues, please provide feedback through the communication group or ISSUE!"))}m.isMDXComponent=!0}}]);