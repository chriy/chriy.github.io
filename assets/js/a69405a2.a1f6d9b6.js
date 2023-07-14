"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[1318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"ssh-port-forward",title:"SSH\u7aef\u53e3\u8f6c\u53d1"},l=void 0,i={permalink:"/blog/ssh-port-forward",editUrl:"https://github.com/chriy/chriy.github.io/blog/2023-07-10-SSH\u7aef\u53e3\u8f6c\u53d1.md",source:"@site/blog/2023-07-10-SSH\u7aef\u53e3\u8f6c\u53d1.md",title:"SSH\u7aef\u53e3\u8f6c\u53d1",description:"\u5728\u7f51\u7edc\u5f00\u53d1\u548c\u670d\u52a1\u5668\u7ba1\u7406\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u8bbf\u95ee\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\u6216\u5e94\u7528\u7a0b\u5e8f\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"July 10, 2023",tags:[],readingTime:2.475,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"ssh-port-forward",title:"SSH\u7aef\u53e3\u8f6c\u53d1"},nextItem:{title:"SQL\u7a97\u53e3\u51fd\u6570",permalink:"/blog/sql-partition-by"}},p={authorsImageUrls:[]},c=[{value:"\u547d\u4ee4\u683c\u5f0f",id:"\u547d\u4ee4\u683c\u5f0f",level:4},{value:"\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u53ef\u7528",id:"\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u53ef\u7528",level:4},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u7f51\u7edc\u5f00\u53d1\u548c\u670d\u52a1\u5668\u7ba1\u7406\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u8bbf\u95ee\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\u6216\u5e94\u7528\u7a0b\u5e8f\u3002\nSSH\u7aef\u53e3\u8f6c\u53d1\uff08ssh -L\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5c06\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7aef\u53e3\u66b4\u9732\u5230\u672c\u673a\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u672c\u5730\u4f7f\u7528\u8fd9\u4e9b\u670d\u52a1")),(0,a.kt)("h4",{id:"\u547d\u4ee4\u683c\u5f0f"},"\u547d\u4ee4\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -L <\u672c\u5730\u7aef\u53e3>:<\u76ee\u6807\u670d\u52a1\u5668\u5730\u5740>:<\u76ee\u6807\u670d\u52a1\u5668\u7aef\u53e3> <SSH\u7528\u6237\u540d>@<SSH\u670d\u52a1\u5668\u5730\u5740>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," <\u672c\u5730\u7aef\u53e3>\u5fc5\u987b\u662f\u672a\u88ab\u4f7f\u7528\u7684\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"<\u672c\u5730\u7aef\u53e3>\uff1a\u60a8\u5e0c\u671b\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},"<\u76ee\u6807\u670d\u52a1\u5668\u5730\u5740>\uff1a\u8fdc\u7a0b\u670d\u52a1\u5668\u7684IP\u5730\u5740\u6216\u4e3b\u673a\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"<\u76ee\u6807\u670d\u52a1\u5668\u7aef\u53e3>\uff1a\u60a8\u5e0c\u671b\u8bbf\u95ee\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u7aef\u53e3\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},"<SSH\u7528\u6237\u540d>\uff1a\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684SSH\u7528\u6237\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"<SSH\u670d\u52a1\u5668\u5730\u5740>\uff1a\u8fdc\u7a0b\u670d\u52a1\u5668\u7684IP\u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,a.kt)("h4",{id:"\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u53ef\u7528"},"\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u53ef\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows \u68c0\u67e5\u7aef\u53e3\u662f\u5426\u53ef\u7528\nnetstat -ano | findstr <\u7aef\u53e3\u53f7>\n# Linux\nnetstat -ano | grep <\u7aef\u53e3\u53f7>\n")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a\u6211\u4eec\u53ef\u4ee5\u628a\u8fdc\u7a0b\u670d\u52a1\u5668\u76849000\u7aef\u53e3\u6620\u5c04\u5230\u672c\u5730\u76849000\u7aef\u53e3\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8bbf\u95eelocalhost:9000 \u8ddf\u8bbf\u95ee\u8fdc\u7a0b\u670d\u52a1\u4e00\u6837\n",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u7528\u8003\u8651\u4e3a\u8fdc\u7a0b\u670d\u52a1\u5668\u53bb\u5f00\u653e\u7aef\u53e3\u4e86")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -L 9000:localhost:9000 user@10.0.0.2\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u4f7f\u7528localhost:9000\u6765\u8bbf\u95ee\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\u6216\u5e94\u7528\u7a0b\u5e8f\u3002\n\u4efb\u4f55\u53d1\u9001\u5230\u672c\u5730\u8ba1\u7b97\u673a\u76849000\u7aef\u53e3\u7684\u8bf7\u6c42\u90fd\u5c06\u901a\u8fc7SSH\u901a\u9053\u8f6c\u53d1\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\uff0c\u5e76\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u76849000\u7aef\u53e3\u8fd4\u56de\u54cd\u5e94\u3002"),(0,a.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528SSH\u7aef\u53e3\u8f6c\u53d1\uff0c\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u4f7f\u7528\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u8fd9\u4e3a\u5f00\u53d1\u4eba\u5458\u548c\u7cfb\u7edf\u7ba1\u7406\u5458\u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u548c\u5b89\u5168\u7684\u8fdc\u7a0b\u8bbf\u95ee\u65b9\u5f0f"))}m.isMDXComponent=!0}}]);