"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[725],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),s=l,f=d["".concat(c,".").concat(s)]||d[s]||k[s]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6100:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const o={title:"Dockerfile",slug:"dockerfile",tags:["docker"]},a=void 0,i={unversionedId:"docker/dockerfile",id:"docker/dockerfile",title:"Dockerfile",description:"Dockerfile \u662f\u955c\u50cf\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u7528\u6765\u6784\u5efa\u6253\u5305\u4e00\u4e2a\u955c\u50cf\uff0c\u5b98\u65b9\u5efa\u8bae\u547d\u540d\u662f Dockerfile , \u4f7f\u7528\u6b64\u547d\u540d\uff0cdocker build \u7684\u65f6\u5019\u53ef\u4ee5\u7701\u7565 -f \u6307\u5b9a\u6587\u4ef6\u4f4d\u7f6e\uff0c\u4f1a\u81ea\u52a8\u5bfb\u627e\u540d\u4e3a Dockfile \u7684\u6587\u4ef6",source:"@site/docs/docker/dockerfile.md",sourceDirName:"docker",slug:"/docker/dockerfile",permalink:"/docs/docker/dockerfile",draft:!1,editUrl:"https://github.com/chriy/chriy.github.io/docs/docker/dockerfile.md",tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{title:"Dockerfile",slug:"dockerfile",tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u8fdb\u5236\u5b89\u88c5Docker",permalink:"/docs/docker/install"},next:{title:"WebSocket",permalink:"/docs/reading/websocket"}},c={},p=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:3},{value:"\u6784\u5efa\u8fc7\u7a0b",id:"\u6784\u5efa\u8fc7\u7a0b",level:3},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:3},{value:"ADD \u548c COPY\u7684\u533a\u522b",id:"add-\u548c-copy\u7684\u533a\u522b",level:3},{value:"CMD \u548c ENTRYPOINT \u7684\u533a\u522b",id:"cmd-\u548c-entrypoint-\u7684\u533a\u522b",level:3},{value:"\u6784\u5efa\u81ea\u5df1\u7684\u955c\u50cf",id:"\u6784\u5efa\u81ea\u5df1\u7684\u955c\u50cf",level:3},{value:"\u6253\u5305\u955c\u50cf",id:"\u6253\u5305\u955c\u50cf",level:3}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Dockerfile \u662f\u955c\u50cf\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u7528\u6765\u6784\u5efa\u6253\u5305\u4e00\u4e2a\u955c\u50cf\uff0c\u5b98\u65b9\u5efa\u8bae\u547d\u540d\u662f ",(0,l.kt)("strong",{parentName:"p"},"Dockerfile")," , \u4f7f\u7528\u6b64\u547d\u540d\uff0cdocker build \u7684\u65f6\u5019\u53ef\u4ee5\u7701\u7565 -f \u6307\u5b9a\u6587\u4ef6\u4f4d\u7f6e\uff0c\u4f1a\u81ea\u52a8\u5bfb\u627e\u540d\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"Dockfile")," \u7684\u6587\u4ef6")),(0,l.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u5199\u4e00\u4e2a Dockerfile \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e66\u5199\u811a\u672c"),(0,l.kt)("li",{parentName:"ul"},"docker build \u6784\u5efa\u6210\u4e00\u4e2a\u955c\u50cf"),(0,l.kt)("li",{parentName:"ul"},"docker run  \u901a\u8fc7\u955c\u50cf\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668")),(0,l.kt)("h3",{id:"\u6784\u5efa\u8fc7\u7a0b"},"\u6784\u5efa\u8fc7\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6307\u4ee4\u5173\u952e\u5b57\u90fd\u5fc5\u987b\u5927\u5199"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u4e0a\u5f80\u4e0b\uff0c \u9010\u884c\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"#"," \u4ee3\u8868\u7684\u662f\u6ce8\u91ca"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u6307\u4ee4\u6267\u884c\u90fd\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\u5c42")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Dockerfile \u6587\u4ef6\u662f\u9762\u5411\u5f00\u53d1\u7684\uff0c\u53d1\u5e03\u9879\u76ee\uff0c\u5236\u4f5c\u955c\u50cf\uff0c\u5c31\u9700\u8981\u5199\u8fd9\u4e2a\u6587\u4ef6")),(0,l.kt)("h3",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"FROM             # \u57fa\u7840\u955c\u50cf\uff0c\u4e00\u5207\u4ece\u8fd9\u91cc\u5f00\u59cb\u6784\u5efa\nMAINTAINER       # \u955c\u50cf\u4f5c\u8005, \u59d3\u540d + \u90ae\u7bb1\nRUN              # \u6784\u5efa\u955c\u50cf\u65f6\u9700\u8981\u8fd0\u884c\u7684\u547d\u4ee4\nADD              # \u6dfb\u52a0\u5185\u5bb9\nWORKDIR          # \u5de5\u4f5c\u76ee\u5f55\nVOLUME           # \u5bb9\u5668\u5185\u6570\u636e\u5377\u6302\u8f7d\u76ee\u5f55\nEXPOSE           # \u66b4\u9732\u7aef\u53e3\nCMD              # \u8fd0\u884c\u5bb9\u5668\u65f6\u6267\u884c, \u591a\u4e2a\u547d\u4ee4, \u6700\u540e\u4e00\u4e2a\u751f\u6548\nENTRYPOINT       # \u8fd0\u884c\u5bb9\u5668\u65f6\u6267\u884c, \u591a\u4e2a\u547d\u4ee4, \u6700\u540e\u4e00\u4e2a\u751f\u6548\nONBUILD          # \u5f53\u6784\u5efa\u4e00\u4e2a\u88ab\u7ee7\u627f Dockerfile \u7684\u65f6\u5019\u5c31\u4f1a\u8fd0\u884c\nCOPY             # \u62f7\u8d1d\u6587\u4ef6\u5230\u955c\u50cf\u4e2d\nENV              # \u6784\u5efa\u7684\u65f6\u5019\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\n")),(0,l.kt)("h3",{id:"add-\u548c-copy\u7684\u533a\u522b"},"ADD \u548c COPY\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u540c\u6837\u662f\u62f7\u8d1d\u548c\u590d\u5236\u64cd\u4f5c, \u4f46\u662fADD\u4f1a\u5728\u62f7\u8d1d\u7684\u8fc7\u7a0b\u4e2d\u5c06\u538b\u7f29\u5305\u8fdb\u884c\u89e3\u538b, COPY\u5219\u4e0d\u4f1a"),(0,l.kt)("h3",{id:"cmd-\u548c-entrypoint-\u7684\u533a\u522b"},"CMD \u548c ENTRYPOINT \u7684\u533a\u522b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'CMD ["ls","-a"]\nENTRYPOINT ["ls","-a"]\n')),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u547d\u4ee4\u4f1a\u5728\u5bb9\u5668\u542f\u52a8\u540e\u6267\u884c\u4e00\u6761\u547d\u4ee4\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u5728\u8fd9\u4e8c\u8005\u4e4b\u95f4\u9009\u4e00\u4e2a\u4f7f\u7528\u5373\u53ef\u3002\u5927\u90e8\u5206Linux\u53d1\u884c\u7248\u7684\u57fa\u7840\u955c\u50cf\u91cc\u9762\u8c03\u7528CMD\u547d\u4ee4,\n\u6307\u5b9a\u5bb9\u5668\u542f\u52a8\u540e\u6267\u884c/bin/sh\u6216/bin/bash\u3002\u8fd9\u6837\u955c\u50cf\u542f\u52a8\u9ed8\u8ba4\u8fdb\u5165\u4ea4\u4e92\u5f0f\u7684shell\u3002CMD\u53ef\u4ee5\u88ab docker run xxx ls -l \u76f4\u63a5\u62fc\u63a5\u547d\u4ee4\u8986\u76d6\u3002\n\u5982\u679c\u4f60\u5e0c\u671b\u4f60\u7684docker\u955c\u50cf\u53ea\u6267\u884c\u4e00\u4e2a\u5177\u4f53\u7a0b\u5e8f, \u4e0d\u5e0c\u671b\u7528\u6237\u5728\u6267\u884cdocker run\u7684\u65f6\u5019\u968f\u610f\u8986\u76d6\u9ed8\u8ba4\u7a0b\u5e8f. \u5efa\u8bae\u7528ENTRYPOINT"),(0,l.kt)("h3",{id:"\u6784\u5efa\u81ea\u5df1\u7684\u955c\u50cf"},"\u6784\u5efa\u81ea\u5df1\u7684\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'FROM openjdk:17-jdk-alpine\nEXPOSE 8080\nADD app.jar app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\n')),(0,l.kt)("h3",{id:"\u6253\u5305\u955c\u50cf"},"\u6253\u5305\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -f Dockerfile -t user/test:1 .\n# -f \u6307\u5b9a Dockerfile\u7684\u6587\u4ef6\u8def\u5f84\n# -t \u6307\u5b9a\u955c\u50cf\u540d\u5b57\u548c tag\n# .  \u6307\u5b9a\u5f53\u524d\u76ee\u5f55\n")))}d.isMDXComponent=!0}}]);