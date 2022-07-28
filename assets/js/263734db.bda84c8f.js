"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=c(n),h=o,m=y["".concat(i,".").concat(h)]||y[h]||s[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Python3\u7f16\u8bd1\u5b89\u88c5"},l=void 0,p={permalink:"/blog/python-install",editUrl:"https://github.com/chriy/chriy.github.io/blog/python-install.md",source:"@site/blog/python-install.md",title:"Python3\u7f16\u8bd1\u5b89\u88c5",description:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728Linux\u5b89\u88c5\u6700\u65b0\u7248\u672cPython3",date:"2022-07-28T11:55:40.000Z",formattedDate:"July 28, 2022",tags:[],readingTime:.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Python3\u7f16\u8bd1\u5b89\u88c5"},nextItem:{title:"Samba",permalink:"/blog/samba"}},i={authorsImageUrls:[]},c=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u7f16\u8bd1 &amp; \u5b89\u88c5",id:"\u7f16\u8bd1--\u5b89\u88c5",level:3},{value:"\u521b\u5efa\u8f6f\u94fe",id:"\u521b\u5efa\u8f6f\u94fe",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728Linux\u5b89\u88c5\u6700\u65b0\u7248\u672cPython3")),(0,o.kt)("p",null,"\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/ftp/python/"},"https://www.python.org/ftp/python")),(0,o.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tgz\n# \u89e3\u538b\u6587\u4ef6\n$ tar -zxf Python-3.10.0.tgz\n")),(0,o.kt)("h3",{id:"\u7f16\u8bd1--\u5b89\u88c5"},"\u7f16\u8bd1 & \u5b89\u88c5"),(0,o.kt)("p",null,"\u540c\u65f6\u5b89\u88c5\u67092.x\u548c3.x\u7248\u672c\u914d\u7f6e \u9700\u8981\u914d\u7f6e\u4e0d\u540c\u8def\u5f84\u533a\u5206 ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/python3"),", \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u7248\u672c ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix=/usr/local/python")," \u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd Python-3.10.0 && ./configure prefix=/usr/local/python3\n$ make && make install\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u8f6f\u94fe"},"\u521b\u5efa\u8f6f\u94fe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ln -s /usr/local/python3/bin/python3 /usr/bin/python3\n$ ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3\n")),(0,o.kt)("p",null,"\u4e0d\u521b\u5efa\u8f6f\u94fe\u4e5f\u53ef\u4ee5\uff0c\u4f46\u662f\u5f97\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/python3/bin")," \u76ee\u5f55\u52a0\u5165\u73af\u5883\u53d8\u91cf"),(0,o.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ python3 --version\nPython 3.10.0\n")))}s.isMDXComponent=!0}}]);