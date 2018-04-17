# cd-vue-pro

> 基于Vue的中后台解决方案

### 内容

* 目录结构示例
* 登录登出功能示例
* Api封装及拦截器使用示例
* Vuex的使用示例
* Mock数据模拟示例
* 公用组件示例
* 过滤器示例
* 工具类示例
* 表格、panel、分页、图表等组件示例
* loading效果示例
* 用户权限示例

### 目录结构说明

* doc
* static
* src
    * api
    * assets
    * components
    * containers
    * directives
    * filters
    * mixins
    * router
    * store
    * utils
* build
* config

**doc目录**

存放关于本项目的文档，包括但不限于API接口说明文档、其他说明文档等

**build目录**

存放基于webpack的构架方案

**config目录**

存放配置文件，包括环境变量、构架方案配置项、代理等

**static目录**

存放静态文件，包括简单调用的静态资源，如样式文件、图片等

**src目录**

存放开发源码，大部分的开发工作都在这里进行

* api - 存放api接口、mock数据、数据转换等
* components - 存放全局的组件，全局注入
* containers - 存放具体的页面文件
* directives - 存放自定义指令
* filters - 存放过滤器
* mixins - 存放混合方法
* plugins - 存放插件，包括UI组件
* store - 存放vuex的整合流程
* utils - 存放工具方法

### 终端命令

``` bash
# 安装依赖包
yarn

# 添加依赖包
yarn add [package]

# 开启开发服务
npm run dev

# 编译打包
npm run build
```

### 参考文档

* vue [文档](https://cn.vuejs.org/v2/guide/syntax.html)
* vue-router [文档](https://router.vuejs.org/zh-cn/)
* vuex [文档](https://vuex.vuejs.org/zh-cn/)
* axios（ajax）[文档](https://github.com/mzabriskie/axios)
* mock（数据模拟）[文档](http://mockjs.com/)
* element-ui（组件库）[文档](http://element.eleme.io/#/zh-CN)
* g2（图表）[文档](https://g2.alipay.com/)
