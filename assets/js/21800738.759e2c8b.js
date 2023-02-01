"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(n),u=a,m=k["".concat(s,".").concat(u)]||k[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"WebSocket",slug:"websocket"},i=void 0,l={unversionedId:"reading/websocket",id:"reading/websocket",title:"WebSocket",description:"WebSocket\u662f\u4e00\u79cd\u4f20\u8f93\u534f\u8bae, \u57fa\u4e8eTCP\u5b9e\u73b0\u5168\u53cc\u5de5\u901a\u4fe1, \u5e76\u5141\u8bb8\u670d\u52a1\u7aef\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6570\u636e\u3002WebSocket\u4e0eHTTP\u90fd\u4f4d\u4e8e\u5e94\u7528\u5c42\uff0c\u4e14\u90fd\u57fa\u4e8e\u4f20\u8f93\u5c42TCP\u534f\u8bae\uff0c",source:"@site/docs/reading/websocket.md",sourceDirName:"reading",slug:"/reading/websocket",permalink:"/docs/reading/websocket",draft:!1,editUrl:"https://github.com/chriy/chriy.github.io/docs/reading/websocket.md",tags:[],version:"current",frontMatter:{title:"WebSocket",slug:"websocket"},sidebar:"tutorialSidebar",previous:{title:"Dockerfile",permalink:"/docs/docker/dockerfile"},next:{title:"\u8bbe\u8ba1\u6a21\u5f0f\u539f\u5219",permalink:"/docs/reading/design-principle"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:2}],p={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"WebSocket\u662f\u4e00\u79cd\u4f20\u8f93\u534f\u8bae, \u57fa\u4e8eTCP\u5b9e\u73b0\u5168\u53cc\u5de5\u901a\u4fe1, \u5e76\u5141\u8bb8\u670d\u52a1\u7aef\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6570\u636e\u3002WebSocket\u4e0eHTTP\u90fd\u4f4d\u4e8e\u5e94\u7528\u5c42\uff0c\u4e14\u90fd\u57fa\u4e8e\u4f20\u8f93\u5c42TCP\u534f\u8bae\uff0c\n\u4e0eHTTP\u4e00\u6837\uff0c\u4e5f\u901a\u8fc780\u7aef\u53e3\u548c443\u7aef\u53e3\u5de5\u4f5c\u3002\u4e3a\u4e86\u517c\u5bb9HTTP, WebSocket\u4f7f\u7528HTTP\nUpgradle\u8bf7\u6c42\u5934\u4eceHTTP\u534f\u8bae\u5347\u7ea7\u4e3aWebSocket\u534f\u8bae\u3002")),(0,a.kt)("p",null,"PS: ",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/WebSocket"},"\u90e8\u5206\u5185\u5bb9\u6458\u81ea\u7ef4\u57fa\u767e\u79d1")),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WebSocket \u662f\u72ec\u7acb\u7684\u3001\u521b\u5efa\u5728TCP\u4e0a\u7684\u534f\u8bae\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Websocket \u901a\u8fc7 HTTP/1.1 \u534f\u8bae\u7684 ",(0,a.kt)("strong",{parentName:"p"},"101")," \u72b6\u6001\u7801\u8fdb\u884c\u63e1\u624b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u521b\u5efaWebsocket\u8fde\u63a5\uff0c\u9700\u8981\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u51fa\u8bf7\u6c42\uff0c\u4e4b\u540e\u670d\u52a1\u5668\u8fdb\u884c\u56de\u5e94\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u79f0\u4e3a\u201c\u63e1\u624b\u201d\uff08Handshaking\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u5934"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"GET /message HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nHost: http://eample.com\nOrigin: http://eample.com\nSec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\nSec-WebSocket-Key: MDxwXAXyPD78H7BSH6sbQA==\nSec-WebSocket-Version: 13\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u54cd\u5e94\u5934"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Connection: upgrade\nDate: Wed, 25 May 2022 13:29:18 GMT\nSec-WebSocket-Accept: uoSaVIJx6lXJUFI5EuWkafo4gYE=\nSec-WebSocket-Extensions: permessage-deflate;client_max_window_bits=15\nUpgrade: websocket\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connection\u5fc5\u987b\u8bbe\u7f6eUpgrade\uff0c\u8868\u793a\u5ba2\u6237\u7aef\u5e0c\u671b\u8fde\u63a5\u5347\u7ea7\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upgrade\u5b57\u6bb5\u5fc5\u987b\u8bbe\u7f6eWebsocket\uff0c\u8868\u793a\u5e0c\u671b\u5347\u7ea7\u5230Websocket\u534f\u8bae\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Origin\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\u3002\u5982\u679c\u7f3a\u5c11origin\u5b57\u6bb5\uff0cWebSocket\u670d\u52a1\u5668\u9700\u8981\u56de\u590dHTTP 403 \u72b6\u6001\u7801\uff08\u7981\u6b62\u8bbf\u95ee\uff09\u3002"))),(0,a.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("p",null,"\u4f7f\u7528SpringBoot\u5b9e\u73b0\u4e00\u4e2a\u6848\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u524d\u7aef\u53d1\u9001\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u63a8\u9001\u6d88\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"# \u4f9d\u8d56\nimplementation 'org.springframework.boot:spring-boot-starter-websocket'\nimplementation 'org.springframework.boot:spring-boot-starter-web'\n")),(0,a.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageHandle")," \u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketHandle"),"\u7684\u5b9e\u73b0\u7c7b\u7528\u4e8e\u63a5\u53d7\u6d88\u606f\u4e0e\u4e3b\u52a8\u63a8\u9001\u6d88\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u7528\u4e8e\u5904\u7406\u6587\u672c\u6d88\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"TextWebSocketHandler"),"   "),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u7528\u4e8e\u5904\u7406\u4e8c\u8fdb\u5236\u6d88\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"BinaryWebSocketHandler")," ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class MessageHandler extends TextWebSocketHandler {\n\n    @Override\n    public void afterConnectionEstablished(WebSocketSession session) throws Exception {\n        System.out.println("connection established");\n    }\n\n    @Override\n    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {\n        // \u4e8c\u8fdb\u5236\u6d88\u606f\u53d1\u9001\u65b9\u5f0f\n        // ByteBuffer buffer = ByteBuffer.wrap("Hello".getBytes(StandardCharsets.UTF_8));\n        // session.sendMessage(new BinaryMessage(buffer));\n        \n        // \u6587\u672c\u6d88\u606f\n        session.sendMessage(new TextMessage("Hello"));\n    }\n\n    @Override\n    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {\n        System.out.println("connection closed");\n    }\n}\n')),(0,a.kt)("p",null,"WebSocket \u914d\u7f6e\u7c7b\uff0c\u7528\u4e8e\u914d\u7f6e\u6d88\u606f\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," \u548c\u5730\u5740\u53ca\u4e00\u4e9b\u89c4\u5219"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableWebSocket\npublic class WebSocketConfig implements WebSocketConfigurer {\n\n    private final MessageHandler messageHandler;\n\n    public WebSocketConfig(MessageHandler messageHandler) {\n        this.messageHandler = messageHandler;\n    }\n\n    @Override\n    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {\n        registry.addHandler(this.messageHandler, "/message")\n            // \u914d\u7f6e\u652f\u6301\u8de8\u57df\u8bbf\u95ee\n            // .setAllowedOrigins("*")\n            // \u9488\u5bf9 SockJs\n            // .withSockJS();\n    }\n\n}\n')),(0,a.kt)("p",null,"\u5199\u4e00\u4e2a\u7f51\u9875\uff0c\u7136\u540e\u5b9e\u73b0\u4e00\u6bb5 js script \u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<script type="text/javascript">\n    const socket = new WebSocket("ws://example.com/message")\n    // \u5efa\u7acb\u8fde\u63a5\n    socket.onopen = () => console.log("connect established")\n    // \u6536\u5230\u670d\u52a1\u7aef\u6d88\u606f\n    socket.onmessage = event => console.log(event.data)\n    // \u5173\u95ed\u8fde\u63a5\n    socket.onclose = () => console.log("connect closed")\n    // \u53d1\u9001\u6d88\u606f\n    socket.send("Hi")\n<\/script>\n')),(0,a.kt)("h2",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("p",null,"\u4e0d\u5fc5\u4f7f\u7528HTTP\u8bf7\u6c42\u8fdb\u884c\u8f6e\u8be2\u83b7\u53d6\u6d88\u606f\uff0c\u4f7f\u7528WebSocket\u4e4b\u540e\uff0c\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f\uff0c\u4e00\u4e9b\u573a\u666f\u4e0b\u5927\u5927\u63d0\u5347\u4e86\u901a\u4fe1\u6548\u7387"))}k.isMDXComponent=!0}}]);