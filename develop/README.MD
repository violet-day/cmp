# Development

```bash
#安装node modules
npm i

#安装bower库
cd public
bower i
```

##  gulp js
合并压缩js

##  gulp --harmony sdk
生成angular sdk

##  gulp tpl
压缩./views/**/*.html至./src/partials.js

##  gulp test --harmony
执行./server/test/**/*.js

##  gulp server --harmony
启动web服务器

##  gulp db --harmony
同步数据库

##  gulp publish --harmony
发布common/**/*.json至数据库

##  gulp init --harmony
初始化用户及用户组信息

##  gulp dev
watch ./src/**/*.js及./views/**/*.html
发生变化执行gulp js,gulp tpl


