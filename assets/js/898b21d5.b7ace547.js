"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[619],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return k},metadata:function(){return w},toc:function(){return T}});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),s=n(2389),l=n(7392),u=n(7094),p=n(2466),c=n(6010),d="tabList_uSqn",m="tabItem_LplD";function g(e){var t,n,a,o=e.lazy,s=e.block,g=e.defaultValue,f=e.values,b=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===g?g:null!=(t=null!=g?g:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),T=N.tabGroupChoices,x=N.setTabGroupChoices,O=(0,i.useState)(w),I=O[0],A=O[1],C=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=T[b];null!=E&&E!==I&&k.some((function(e){return e.value===E}))&&A(E)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==I&&(j(t),A(r),null!=b&&x(b,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,c.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},h)},k.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:D,onClick:D},a,{className:(0,c.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function f(e){var t=(0,s.Z)();return i.createElement(g,(0,r.Z)({key:String(t)},e))}var b="tabItem_OmH5";function h(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,c.Z)(b,r),hidden:n},t)}var v=["components"],k={},y="Setup",w={unversionedId:"getting-started/installation/index",id:"getting-started/installation/index",title:"Setup",description:"This guide assumes you have followed the install guides from the previous",source:"@site/guides/getting-started/installation/index.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/",permalink:"/guides/getting-started/installation/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/guides/getting-started/prerequisites/react-native/android"},next:{title:"Concepts",permalink:"/guides/concepts/"}},N={},T=[{value:"Installing the required dependencies",id:"installing-the-required-dependencies",level:3},{value:"Additional setup",id:"additional-setup",level:3},{value:"Setting up the agent",id:"setting-up-the-agent",level:3},{value:"Setting up the transports",id:"setting-up-the-transports",level:3},{value:"Initializing the agent",id:"initializing-the-agent",level:3},{value:"Full code snippet",id:"full-code-snippet",level:3},{value:"Useful resources",id:"useful-resources",level:3}],x={toc:T};function O(e){var t=e.components,n=(0,a.Z)(e,v);return(0,o.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide assumes you have followed the install guides from the previous\nsection for your platform and a valid ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," or ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React\nNative")," project setup.")),(0,o.kt)("h3",{id:"installing-the-required-dependencies"},"Installing the required dependencies"),(0,o.kt)("p",null,"First we have to install the minimal amount of dependencies that are required\nfor using the Aries Ecosystem."),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/core @aries-framework/node express\n"))),(0,o.kt)(h,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/core @aries-framework/react-native react-native-fs react-native-get-random-values\n")))),(0,o.kt)("h3",{id:"additional-setup"},"Additional setup"),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,o.kt)("p",null,"no additional setup is required")),(0,o.kt)(h,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,o.kt)("p",null,"Since ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React Native")," does not have an implementation\nfor\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"},(0,o.kt)("inlineCode",{parentName:"a"},"crypto.getRandomValues()")),"\nwe have to setup a polyfill for this. We have to do this at the entrypoint of\nthe application. This could is most likely ",(0,o.kt)("inlineCode",{parentName:"p"},"index.(js|ts|jsx|tsx)")," at the root\nof your application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="index.tsx" showLineNumbers',title:'"index.tsx"',showLineNumbers:!0},"+ import 'react-native-get-random-values'\n")))),(0,o.kt)("h3",{id:"setting-up-the-agent"},"Setting up the agent"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"this section does not assume any knowledge of the agent configuration.\n",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/agent-config"},"Here")," we will discuss in-depth what every\nfield in the configuration does and when to set it.")),(0,o.kt)("p",null,"In order to use the agent in the application we have to configure and\ninitialize it. This following configuration is quite generic and possibly not\nenough for your specific use cases. Please refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/index"},"tutorials")," for a more use-case-specific agent setup."),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import type { InitConfig } from "@aries-framework/core"\nimport { Agent } from "@aries-framework/core"\nimport { AgentDependencies } from "@aries-framework/node"\n\nconst config: InitConfig = {\n  label: "docs-nodejs-agent",\n  walletConfig: {\n    id: "wallet-id",\n    key: "testkey0000000000000000000000000",\n  },\n}\n\nconst agent = new Agent(config, AgentDependencies)\n'))),(0,o.kt)(h,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import type { InitConfig } from "@aries-framework/core"\nimport { Agent } from "@aries-framework/core"\nimport { AgentDependencies } from "@aries-framework/react-native"\n\nconst config: InitConfig = {\n  label: "docs-rn-agent",\n  walletConfig: {\n    id: "wallet-id",\n    key: "testkey0000000000000000000000000",\n  },\n}\n\nconst agent = new Agent(config, AgentDependencies)\n')))),(0,o.kt)("h3",{id:"setting-up-the-transports"},"Setting up the transports"),(0,o.kt)("p",null,"After creating an ",(0,o.kt)("inlineCode",{parentName:"p"},"Agent")," instance, we have to set an outbound transport that\nwill handle traffic from the agent. It is also possible to set an inbound\ntransport in the same way as the outbound transport, but it is built-in, so not\nrequired."),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,o.kt)("p",null,"Sets up an HTTP outbound and inbound transport."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import { HttpOutboundTransport, WsOutboundTransport, HttpInboundTransport } from "@aries-framework/core"\nimport express from "express"\n\nconst app = express()\n\nagent.registerOutboundTransport(new HttpOuboundTransport())\nagent.registerInboundtransport(new HttpInboundTransport({ app, port: 3000 }))\n'))),(0,o.kt)(h,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,o.kt)("p",null,"For mobile agents the WebSocket transport is often required. We will go into\nmore depth about the reasons for this in the mediation section ",(0,o.kt)("a",{parentName:"p",href:"https://example.org"},"TODO: mediator\nsection")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import { WsOutboundTransport } from "@aries-framework/core"\n\nagent.registerOutboundTransport(new WsOutboundTransport())\n')))),(0,o.kt)("h3",{id:"initializing-the-agent"},"Initializing the agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},"// ...\n\nconst agent = new Agent(config, AgentDependencies)\n\nconst initialize = async () => await agent.initialize().catch(console.error)\n")),(0,o.kt)("h3",{id:"full-code-snippet"},"Full code snippet"),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import type { InitConfig } from "@aries-framework/core"\nimport { Agent } from "@aries-framework/core"\nimport { AgentDependencies } from "@aries-framework/node"\nimport express from "express"\n\n// Simple express app required for the inbound transport\nconst app = express()\n\n// The agent initialization configuration\nconst config: InitConfig = {\n  label: "docs-nodejs-agent",\n  walletConfig: {\n    id: "wallet-id",\n    key: "testkey0000000000000000000000000",\n  },\n}\n\n// Creating an agent instance\nconst agent = new Agent(config, AgentDependencies)\n\n// Registering the required in- and outbound transports\nagent.registerOutboundTransport(new HttpOuboundTransport())\nagent.registerInboundtransport(new HttpInboundTransport({ app, port: 3000 }))\n\n// Function to initialize the agent\nconst initialize = async () => await agent.initialize().catch(console.error)\n'))),(0,o.kt)(h,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},'import type { InitConfig } from "@aries-framework/core"\nimport { Agent, WsOutboundTransport } from "@aries-framework/core"\nimport { AgentDependencies } from "@aries-framework/react-native"\n\n// The agent initialization configuration\nconst config: InitConfig = {\n  label: "docs-rn-agent",\n  walletConfig: {\n    id: "wallet-id",\n    key: "testkey0000000000000000000000000",\n  },\n}\n\n// Creating an agent instance\nconst agent = new Agent(config, AgentDependencies)\n\n// Registering the required outbound transport\nagent.registerOutboundTransport(new WsOutboundTransport())\n\n// Function to initialize the agent\nconst initialize = async () => await agent.initialize().catch(console.error)\n')))),(0,o.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0004-agents/README.md"},"Hyperledger Aries RFC - 004:\nAgents"))))}O.isMDXComponent=!0}}]);