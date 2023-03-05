"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[8906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(k,a(a({ref:n},l),{},{components:t})):o.createElement(k,a({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const i={slug:"docker-compose",title:"Compose",tags:["docker"]},a=void 0,c={unversionedId:"containerization/docker-compose",id:"containerization/docker-compose",title:"Compose",description:"Compose\u662f\u4e00\u4e2a\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668Docker\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002\u4f7f\u7528Compose\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2aYAML\u6587\u4ef6\u6765\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u670d\u52a1\u3002\u7136\u540e\uff0c\u53ea\u9700\u4e00\u6761\u547d\u4ee4\uff0c",source:"@site/docs/containerization/docker-compose.md",sourceDirName:"containerization",slug:"/containerization/docker-compose",permalink:"/docs/containerization/docker-compose",draft:!1,editUrl:"https://github.com/chriy/chriy.github.io/docs/containerization/docker-compose.md",tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{slug:"docker-compose",title:"Compose",tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u6392\u5e8f",permalink:"/docs/algorithm/selection-sort"},next:{title:"\u4e8c\u8fdb\u5236\u5b89\u88c5Docker",permalink:"/docs/containerization/install"}},s={},p=[{value:"\u4f7f\u7528Compose\u7684\u4e09\u4e2a\u6b65\u9aa4",id:"\u4f7f\u7528compose\u7684\u4e09\u4e2a\u6b65\u9aa4",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u66f4\u591a",id:"\u66f4\u591a",level:3}],l={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Compose\u662f\u4e00\u4e2a\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668Docker\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002\u4f7f\u7528Compose\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2aYAML\u6587\u4ef6\u6765\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u670d\u52a1\u3002\u7136\u540e\uff0c\u53ea\u9700\u4e00\u6761\u547d\u4ee4\uff0c\n\u4f60\u5c31\u53ef\u4ee5\u521b\u5efa\u5e76\u542f\u52a8\u914d\u7f6e\u4e2d\u7684\u6240\u6709\u670d\u52a1\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"https://docs.docker.com/compose/"))),(0,r.kt)("h3",{id:"\u4f7f\u7528compose\u7684\u4e09\u4e2a\u6b65\u9aa4"},"\u4f7f\u7528Compose\u7684\u4e09\u4e2a\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Dockerfile \u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u7684\u73af\u5883\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u590d\u5236\u5b83\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 docker-compose.yml \u4e2d\u5b9a\u4e49\u6784\u6210\u5e94\u7528\u7a0b\u5e8f\u7684\u670d\u52a1\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u5728\u9694\u79bb\u73af\u5883\u4e2d\u4e00\u8d77\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up")," \u547d\u4ee4\u542f\u52a8\u5e76\u8fd0\u884c\u60a8\u7684\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker-compose.yml")," \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"  # optional since v1.27.0\nservices:\n  nginx:\n    restart: unless-stopped #\u91cd\u542f\u7b56\u7565\n    image: nginx:latest # \u955c\u50cf\u540d\u79f0\n    container_name: nginx #\u5bb9\u5668\u540d\u79f0\n    build: .\n    ports:\n      - "443:443"  # \u7aef\u53e3\u6620\u5c04\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\n    volumes: # \u5bb9\u5668\u5185\u6570\u636e\u5377\u6302\u8f7d\n      - ./nginx/conf.d:/etc/nginx/conf.d\n      - ./nginx/html:/usr/share/nginx/html\n      - ./nginx/logs:/var/log/nginx\n      - ./nginx/ssl:/ssl:ro\n    network_mode: prod  # \u7f51\u7edc\u6a21\u5f0f\n')),(0,r.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("p",null,"\u6309\u7167\u7ea6\u5b9a\u683c\u5f0f\u7f16\u5199\u597d compose \u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6279\u91cf\u8fd0\u884c\u914d\u7f6e\u7684\u6240\u6709\u5bb9\u5668\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," \u4ee3\u8868\u5728\u540e\u53f0\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u542f\u52a8\u6240\u6709\u5bb9\u5668\n$ docker-compose up -d\n\n# \u542f\u52a8\u6307\u5b9a\u5bb9\u5668\n$ docker-compose up -d nginx\n\n# \u505c\u6b62\u5bb9\u5668\n$ docker-compose stop nginx\n")),(0,r.kt)("h3",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker-compose --help\n\nCommands:\n  build       Build or rebuild services\n  convert     Converts the compose file to platform's canonical format\n  cp          Copy files/folders between a service container and the local filesystem\n  create      Creates containers for a service.\n  down        Stop and remove containers, networks\n  events      Receive real time events from containers.\n  exec        Execute a command in a running container.\n  images      List images used by the created containers\n  kill        Force stop service containers.\n  logs        View output from containers\n  ls          List running compose projects\n  pause       Pause services\n  port        Print the public port for a port binding.\n  ps          List containers\n  pull        Pull service images\n  push        Push service images\n  restart     Restart containers\n  rm          Removes stopped service containers\n  run         Run a one-off command on a service.\n  start       Start services\n  stop        Stop services\n  top         Display the running processes\n  unpause     Unpause services\n  up          Create and start containers\n  version     Show the Docker Compose version information\n")))}u.isMDXComponent=!0}}]);