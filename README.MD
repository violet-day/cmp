# Development

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

* 具体可以参照/views/demo/New.html
* div.row>div.col-sm-12>div.form-group
* form-group单列情况下比列为3:9
* 注意label标签的for属性

