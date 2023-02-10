# 项目目录

**安装：**`npm install`

**启动：**`npm run mock & npm start`

**改动程序需多次重启服务**

**项目已备份**

**[Url](https://coding.imooc.com/class/chapter/313.html#Anchor](https://coding.imooc.com/class/chapter/313.html#Anchor))**

* [X] 端口：本地(8080)，Mock(3000)
* [X] Webpack配置(开发与生产环境)
* [X] Class组件开发
* [X] 路由跳转 及 请求参数
* [X] 轮播图 | 超值特惠 | 猜你喜欢 本地图片渲染 &  远程地址(error)
* [X] import * as Name from ""

  ```
  import * as userInfoActionsFromOtherFile from'../actions/userinfo'
  asuserInfoActionsFromOtherFilefrom： {__esModule: true, update: ƒ, User: ƒ}
  导出所有as名称 可以使用所有属性方法
  ```
* [X] Redux使用

  ```
  export default connect( mapStateToProps, mapDispatchToProps )(Home)
  ```
* [X] Login页面登陆后、刷新页面、Redux数据消失 --> 解决办法  1、使用localstoreage  2、redux持久化(persist)
* [ ] Login页面父子组件传值
* [ ] User页面组件封装(订单评价)
* [ ] User页面订单列表接口 & 提交评论接口
* [ ] City页面

  ```
  Redux取值、Redux储存、localstoreage存储、history跳转
  ```
* [ ] Search页面

  ```
  window.history.back()
  hashHistory.push('/search/all/' + encodeURIComponent(value))
  /api/search/0/北京/all/UserName长
  根据城市名+文章+关键词发请求
  滚动加载 获取数据 重新渲染
  处理重新搜索：componentDidUpdate(prevProps, prevState) {
  	if (keyword === prevProps.keyword && category === prevProps.category) { return } 
  }
  节流函数、滚动加载 <LoadMore />组件   |  window.addEventListener('scroll', function () {}
  ```
* [ ] 啊
* [ ] 的
* [ ] 的
