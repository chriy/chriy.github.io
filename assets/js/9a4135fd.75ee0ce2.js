"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[6322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"SQL\u8fde\u63a5\u67e5\u8be2",slug:"sql-join"},l=void 0,i={permalink:"/blog/sql-join",editUrl:"https://github.com/chriy/chriy.github.io/blog/2022-09-01-SQL\u8fde\u63a5\u67e5\u8be2.md",source:"@site/blog/2022-09-01-SQL\u8fde\u63a5\u67e5\u8be2.md",title:"SQL\u8fde\u63a5\u67e5\u8be2",description:"\u5185\u8fde\u63a5 (inner join)",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[],readingTime:2.87,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SQL\u8fde\u63a5\u67e5\u8be2",slug:"sql-join"},prevItem:{title:"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66",permalink:"/blog/openssl"},nextItem:{title:"Samba",permalink:"/blog/samba"}},p={authorsImageUrls:[]},u=[{value:"\u5185\u8fde\u63a5 (inner join)",id:"\u5185\u8fde\u63a5-inner-join",level:3},{value:"\u5916\u8fde\u63a5 (outer join)",id:"\u5916\u8fde\u63a5-outer-join",level:3},{value:"\u81ea\u7136\u8fde\u63a5 (natural join)",id:"\u81ea\u7136\u8fde\u63a5-natural-join",level:3},{value:"\u4ea4\u53c9\u8fde\u63a5 (cross join)",id:"\u4ea4\u53c9\u8fde\u63a5-cross-join",level:3},{value:"\u8fde\u63a5\u67e5\u8be2\u6ce8\u610f\u70b9",id:"\u8fde\u63a5\u67e5\u8be2\u6ce8\u610f\u70b9",level:3}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5185\u8fde\u63a5-inner-join"},"\u5185\u8fde\u63a5 (inner join)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u8fde\u63a5\uff08INNER JOIN\uff09\u4f7f\u7528\u6bd4\u8f83\u8fd0\u7b97\u7b26\u8fdb\u884c\u8868\u95f4\u67d0\uff08\u4e9b\uff09\u5217\u6570\u636e\u7684\u6bd4\u8f83\u64cd\u4f5c\uff0c\u5e76\u5217\u51fa\u8fd9\u4e9b\u8868\u4e2d\u4e0e\u8fde\u63a5\u6761\u4ef6\u76f8\u5339\u914d\u7684\u6570\u636e\u884c\uff0c\u7ec4\u5408\u6210\u65b0\u7684\u8bb0\u5f55\u3002\n\u5728\u5185\u8fde\u63a5\u67e5\u8be2\u4e2d\uff0c\u53ea\u6709",(0,a.kt)("strong",{parentName:"p"},"\u6ee1\u8db3\u6761\u4ef6"),"\u7684\u8bb0\u5f55\u624d\u80fd\u51fa\u73b0\u5728\u7ed3\u679c\u5173\u7cfb\u4e2d")),(0,a.kt)("p",null,"\u5982\u679c\u5728\u4e00\u4e2a\u8fde\u63a5\u67e5\u8be2\u4e2d\uff0c\u6d89\u53ca\u7684\u4e24\u4e2a\u8868\u90fd\u662f\u540c\u4e00\u4e2a\u8868\uff0c\u8fd9\u79cd\u67e5\u8be2\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u8fde\u63a5\u67e5\u8be2"),"\u3002\u81ea\u8fde\u63a5\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5185\u8fde\u63a5\uff0c\u5b83\u662f\u6307\u76f8\u4e92\u8fde\u63a5\u7684\u8868\u5728\u7269\u7406\u4e0a\u4e3a\u540c\u4e00\u5f20\u8868\uff0c\u4f46\u53ef\u4ee5\u5728\u903b\u8f91\u4e0a\u5206\u4e3a\u4e24\u5f20\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a inner join b on a.x = b.x;\n")),(0,a.kt)("h3",{id:"\u5916\u8fde\u63a5-outer-join"},"\u5916\u8fde\u63a5 (outer join)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5916\u8fde\u63a5\u67e5\u8be2\u5c06\u67e5\u8be2\u591a\u4e2a\u8868\u4e2d\u76f8\u5173\u8054\u7684\u884c\uff0c\u5185\u8fde\u63a5\u65f6\uff0c\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u96c6\u5408\u4e2d\u4ec5\u662f\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u548c\u8fde\u63a5\u6761\u4ef6\u7684\u884c")),(0,a.kt)("p",null,"\u5916\u8fde\u63a5\u5206\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5de6\u8fde\u63a5"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u53f3\u8fde\u63a5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de6\u8fde\u63a5(left join): \u8fd4\u56de\u5305\u62ec\u5de6\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\u548c\u53f3\u8868\u4e2d\u8fde\u63a5\u5b57\u6bb5\u76f8\u7b49\u7684\u8bb0\u5f55\u3002\u5de6\u8868\u6ca1\u6709\u53f3\u8868\u4e2d\u7684\u503c\u5219\u7528null\u586b\u5145"),(0,a.kt)("li",{parentName:"ul"},"\u53f3\u8fde\u63a5(right join): \u8fd4\u56de\u5305\u62ec\u53f3\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\u548c\u5de6\u8868\u4e2d\u8fde\u63a5\u5b57\u6bb5\u76f8\u7b49\u7684\u8bb0\u5f55\u3002\u53f3\u8868\u6ca1\u6709\u5de6\u8868\u4e2d\u7684\u503c\u5219\u7528null\u586b\u5145")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# \u5de6\u8fde\u63a5\nselect * from a left join b on a.x = b.x;\n# \u53f3\u8fde\u63a5\nselect * from a right join b on a.x = b.x;\n")),(0,a.kt)("h3",{id:"\u81ea\u7136\u8fde\u63a5-natural-join"},"\u81ea\u7136\u8fde\u63a5 (natural join)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea\u7136\u8fde\u63a5\u662f\u7279\u6b8a\u7684\u7b49\u503c\u8fde\u63a5\uff0c\u4e0d\u9700\u8981\u6307\u5b9a\u8fde\u63a5\u7684\u6761\u4ef6\uff0c\u4f1a\u6839\u636e\u5de6\u53f3\u8fde\u63a5\u8868\u4e2d\u76f8\u540c\u7684\u5b57\u6bb5\u4f5c\u4e3a\u8fde\u63a5\u6761\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a natural join b;\n")),(0,a.kt)("h3",{id:"\u4ea4\u53c9\u8fde\u63a5-cross-join"},"\u4ea4\u53c9\u8fde\u63a5 (cross join)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ea4\u53c9\u8fde\u63a5\u4e3b\u8981\u7528\u4e8e\u751f\u6210\u7b1b\u5361\u5c14\u79ef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a natural join b;\n")),(0,a.kt)("h3",{id:"\u8fde\u63a5\u67e5\u8be2\u6ce8\u610f\u70b9"},"\u8fde\u63a5\u67e5\u8be2\u6ce8\u610f\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e\u5c3d\u53ef\u80fd\u7684\u52a0\u5165\u6761\u4ef6\uff0c\u51cf\u5c11join\u540e\u7684\u6570\u636e\u96c6\u5927\u5c0f "),(0,a.kt)("li",{parentName:"ul"},"join\u65f6\u8981\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u5c0f\u8868\u9a71\u52a8\u5927\u8868")," (\u5927\u8868\u9a71\u52a8\u5c0f\u8868\u4f1a\u5bfc\u81f4\u5916\u5c42\u5faa\u73af\u8fc7\u591a\uff0c\u6d6a\u8d39\u8d44\u6e90)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"for (\u5927\u8868) {\n    for (\u5c0f\u8868) { }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5224\u65ad\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"left join\u5de6\u8fb9\u8868\u662f\u9a71\u52a8\u8868"),(0,a.kt)("li",{parentName:"ol"},"right join\u53f3\u8fb9\u8868\u662f\u9a71\u52a8\u8868"),(0,a.kt)("li",{parentName:"ol"},"inner join\u4f1a\u81ea\u52a8\u9009\u62e9\u6570\u636e\u91cf\u5c11\u7684\u4f5c\u4e3a\u9a71\u52a8\u8868"),(0,a.kt)("li",{parentName:"ol"},"\u67e5\u8be2 explain \u6267\u884c\u8ba1\u5212\uff0c\u7b2c\u4e00\u4e2a\u8868\u5373\u9a71\u52a8\u8868")))}m.isMDXComponent=!0}}]);