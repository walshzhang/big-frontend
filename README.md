# big-frontend

* 以`Todo-App`为例，体验前后端各种框架和库。
* 服务器的地址为`http://localhost:8080`
* 前后端的接口为：
  * 获取所有的TODO：`{path: '/api/todo', method: 'GET', status: 200, return: [{action: 'todo1', done: false}]`
  * 添加新的TODO: `{path: '/api/todo', method: 'POST', status: 201, return: ''}`
  * 完成或关闭指定TODO: `{path: '/api/todo/toggle/{index}', method: 'POST', status: 200, return: ''}`
  * 删除指定的TODO: `{path: '/api/todo/{index}', method: 'DELETE', status: 200, return: ''}`

## 目前已经完成的后端
* `{tech: 'spring-boot', tag: 'springboot-backend'}`

## 目前完成的前端
* `{tech: 'vuejs', tag: 'use-vue-frontend' }`
* `{tech: 'vuejs-vuex', tag: 'use-vuex'}`
* `{tech: 'react', tag: 'use-react'} `
* `{tech: ['react', 'redux'], tag: 'use-react-redux'} `
* `{tech: ['react', 'hooks'], tag: 'use-react-hooks'}`
* `{tech: 'jquery', tag: 'use-jquery-ajax-to-read/write-from/to-server'}`

## 可独立运行的前端
* `{tech: 'jquery', tag: 'use-jquery-in-static-veb' }`


## 目的

- 了解前端、后端的含义
- 了解多种前端的差别与联系
- 了解大前端的意义
- 体验大前端主流的技术框架

## 前端、后端

- 前端：设计并实现系统中关于人机交互的界面
  - 命令行：控制台程序。通常使用 C、C#、Java 等语言进行实现。通过命令和参数，以及 scanf 和 printf 进行输入和输出
  - 桌面：利用窗口、菜单、表单等多种图形控件，使用键盘和鼠标等多种设备完成输入和输出。常用的技术包括 MFC、Java Swing、Qt、WPF 等
  - Web(H5)：与桌面类似，但运行在浏览器中。采用的技术主要有 HTML5，CSS3，Javascript
  - 移动端：以手机为载体，常见的移动端包含 Android 和 iOS
  - 小程序：无需要安装和部署，运行在微信等应用内，在国内比较流行。如微信小程序、QQ 小程序、百度小程序、支付宝小程序、快应用......
- 后端：也称服务器端。一般用于提供数据和服务。
  - 常见的处理流程
    - 数据存储在数据库中
    - 服务器接收来自前端的请求，一般为 HTTP 请求
    - 根据请求，调用相关的业务逻辑，返回计算结果
    - 根据计算结果，返回响应，一般为 HTTP 响应。响应可以有多种表示，如 JSON，HTML 等
  - 常用的技术和框架
    - Java EE，ASP .Net，PHP
    - Spring，Hibernate
    - ...
- 传统应用的开发特点
  - 前端、后端采用的技术栈不统一
  - 多种前端采用的技术栈也不统一
  - 前后端开发方式与思路不统一
  - 很难有同时精通前后端的工程师

## 大前端、全栈

- 2009 年，[Nodejs](https://nodejs.org)诞生

  - 将 Javascript 的运行环境从浏览器中独立出来
  - Javascript 成为一门宿主语言
  - 当前最新版本为 10.16.0
  - 借鉴了后端的工程思想，产生了众多的以 Nodejs 为基础的库，框架和工具
    - MVC：Angular/Vue/React（前端三大框架）
    - Maven/Gradle：NPM/Yarn
    - 依赖注入：Angular Inject/Vue Inject
    - 单元测试：Jest/Jasmine/AVA
    - 单页应用（SPA）：ES6/Babel/Webpack
    - Spring：nestjs
    - 响应式框架：RxJS
    - 模块化：import/export
    - ...
  - 开创了许多新的开发思想和实践
    - 状态管理：Redux
    - 组件化 UI：便于代码重用
    - 函数式编程：如，React Hooks
    - 前后端的边界逐渐模糊，大前端的趋势正在形成

- 大前端、全栈
  - **以 Nodejs 为基础，Javascript 语言开始实现后端功能**
  - 全栈：[MEAN](https://meanjs.org/)
    - [Mongodb](https://www.mongodb.com/)：以 JSON 格式存储数据的 NoSQL 数据库
    - [Express](http://expressjs.com/)：用于开发服务器后端的框架，能够处理 HTTP 请求
    - [Angular](https://angular.io/)：采用 MVVM 的前端 UI 框架
    - [Node](https://nodejs.org/en/)：使用 Node 开发模块
  - **以 Javascript 语言为开发语言，以一种框架为开发框架，同时适配多个前端**
    - H5 端：基础 [React 框架](https://reactjs.org)
    - 移动端：基于 React 框架的 React Native 框架，可同时支持 iOS 和 Android
    - 桌面端：[React Native for Windows](https://github.com/Microsoft/react-native-windows)，微软官方开发，2019 年 5 月份开源，目前还没有稳定版本
    - 小程序，快应用等：由京东开发的基于 React 的[Taro 框架](https://github.com/NervJS/taro)
    - 命令行：基于 React 框架的[ink 框架](https://github.com/vadimdemedes/ink)