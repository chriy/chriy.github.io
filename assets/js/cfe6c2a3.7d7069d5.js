"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u6469\u5c14\u6295\u7968\u6cd5",slug:"boyer-moore-vote"},a=void 0,l={unversionedId:"algorithm/\u6469\u5c14\u6295\u7968\u6cd5",id:"algorithm/\u6469\u5c14\u6295\u7968\u6cd5",title:"\u6469\u5c14\u6295\u7968\u6cd5",description:"\u6469\u5c14\u6295\u7968\u7b97\u6cd5 (Boyer\u2013Moore majority vote algorithm) \u662f\u4e00\u79cd\u7528\u6765\u5bfb\u627e\u4e00\u7ec4\u5143\u7d20\u4e2d\u5360\u591a\u6570\u5143\u7d20\u7684\u5e38\u6570\u7a7a\u95f4\u7ea7\u65f6\u95f4\u590d\u6742\u5ea6\u7b97\u6cd5\u3002",source:"@site/docs/algorithm/\u6469\u5c14\u6295\u7968\u6cd5.md",sourceDirName:"algorithm",slug:"/algorithm/boyer-moore-vote",permalink:"/docs/algorithm/boyer-moore-vote",draft:!1,editUrl:"https://github.com/chriy/chriy.github.io/docs/algorithm/\u6469\u5c14\u6295\u7968\u6cd5.md",tags:[],version:"current",frontMatter:{title:"\u6469\u5c14\u6295\u7968\u6cd5",slug:"boyer-moore-vote"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Compose",permalink:"/docs/docker/docker-compose"}},c={},p=[{value:"\u5b9e\u73b0\u601d\u8def",id:"\u5b9e\u73b0\u601d\u8def",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6469\u5c14\u6295\u7968\u7b97\u6cd5 (Boyer\u2013Moore majority vote algorithm) \u662f\u4e00\u79cd\u7528\u6765\u5bfb\u627e\u4e00\u7ec4\u5143\u7d20\u4e2d\u5360\u591a\u6570\u5143\u7d20\u7684\u5e38\u6570\u7a7a\u95f4\u7ea7\u65f6\u95f4\u590d\u6742\u5ea6\u7b97\u6cd5\u3002\n\u8fd9\u4e00\u7b97\u6cd5\u5e94\u7528\u7684\u95ee\u9898\u539f\u578b\u662f\u5728\u96c6\u5408\u4e2d\u5bfb\u627e\u53ef\u80fd\u5b58\u5728\u7684\u591a\u6570\u5143\u7d20\uff0c\u8fd9\u4e00\u5143\u7d20\u5728\u8f93\u5165\u7684\u5e8f\u5217\u91cd\u590d\u51fa\u73b0\u5e76\u5360\u5230\u4e86\u5e8f\u5217\u5143\u7d20\u7684\u4e00\u534a\u4ee5\u4e0a\uff1b\n\u5728\u7b2c\u4e00\u904d\u904d\u5386\u4e4b\u540e\u5e94\u8be5\u518d\u8fdb\u884c\u4e00\u4e2a\u904d\u5386\u4ee5\u7edf\u8ba1\u7b2c\u4e00\u6b21\u7b97\u6cd5\u904d\u5386\u7684\u7ed3\u679c\u51fa\u73b0\u6b21\u6570\uff0c\u786e\u5b9a\u5176\u662f\u5426\u4e3a\u4f17\u6570\uff1b\u5982\u679c\u4e00\u4e2a\u5e8f\u5217\u4e2d\u6ca1\u6709\u5360\u5230\u591a\u6570\u7684\u5143\u7d20\uff0c\n\u90a3\u4e48\u7b2c\u4e00\u6b21\u7684\u7ed3\u679c\u5c31\u53ef\u80fd\u662f\u65e0\u6548\u7684\u968f\u673a\u5143\u7d20\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u601d\u8def"},"\u5b9e\u73b0\u601d\u8def"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u8ba1\u6570\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"li"},"cnt = 0")," \u548c\u6700\u7ec8\u7ed3\u679c ",(0,o.kt)("inlineCode",{parentName:"li"},"ret")),(0,o.kt)("li",{parentName:"ol"},"\u904d\u5386\u6570\u636e\u5217\u8868, \u5bf9\u4e8e\u5143\u7d20 ",(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u82e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"cnt = 0 , ret = x")),(0,o.kt)("li",{parentName:"ul"},"\u82e5\u5143\u7d20 ",(0,o.kt)("inlineCode",{parentName:"li"},"x == ret")," \u5219 ",(0,o.kt)("inlineCode",{parentName:"li"},"cnt += 1")),(0,o.kt)("li",{parentName:"ul"},"\u5426\u5219 ",(0,o.kt)("inlineCode",{parentName:"li"},"cnt -= 1")," "))),(0,o.kt)("li",{parentName:"ol"},"\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"li"},"ret"))),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public int majorityElement() {\n    int[] nums = [1, 2, 3, 3, 3, 3, 4, 5];\n    int cnt = 0;\n    Integer ret = null;\n\n    for (int num : nums) {\n        if (cnt == 0) {\n            ret = num;\n        }\n        cnt += (num == ret) ? 1 : -1;\n    }\n    return ret;\n}\n")),(0,o.kt)("h3",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\u3002Boyer-Moore \u7b97\u6cd5\u53ea\u5bf9\u6570\u7ec4\u8fdb\u884c\u4e86\u4e00\u6b21\u904d\u5386\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\u3002Boyer-Moore \u7b97\u6cd5\u53ea\u9700\u8981\u5e38\u6570\u7ea7\u522b\u7684\u989d\u5916\u7a7a\u95f4\u3002")),(0,o.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zh.m.wikipedia.org/zh-hans/%E6%91%A9%E5%B0%94%E6%8A%95%E7%A5%A8%E7%AE%97%E6%B3%95"},"https://zh.m.wikipedia.org/zh-hans/\u6469\u5c14\u6295\u7968\u7b97\u6cd5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/"},"\u5251\u6307 Offer 39. \u6570\u7ec4\u4e2d\u51fa\u73b0\u6b21\u6570\u8d85\u8fc7\u4e00\u534a\u7684\u6570\u5b57"))))}m.isMDXComponent=!0}}]);