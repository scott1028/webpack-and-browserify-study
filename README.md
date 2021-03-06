#### Conception

- Babel 把 ES6 寫法轉換成 CommonJS 的寫法(ex: `require` syntax) + Webpack 把 CommonJS 寫法轉換成可以給 Browser 執行的相容語法！(例如 CommnadJS Require → AMD)
- Ref: https://medium.com/daily-js-tips/configuring-webpack-to-write-js-with-es6-es2015-on-browser-cd089a79ecea
- gulp/grunt 是一个工具，而 webpack/browserify 等等是模块化方案。gulp 也可以配置 seajs、requirejs 甚至 webpack 的插件(吃 npm install 的 frontend package 而非 bower)
- webpack/browserify 簡單來說就是 AMD(or ES6 Module 模式, NodeJS Style) 模組化開發的架構工具！(詳情請看 tests 內的 Demo)
- AMD 實現基礎為 NodeJS 的 Require 是該檔案的相對位置，所以可以 Module Require Module 這點跟 Python 不同。

```
Browserify 是一个供浏览器环境使用的模块打包工具，像在node环境一样，也是通过require('modules')来组织模块之间的引用和依赖，既可以引用npm中的模块，也可以引用自己写的模块，然后打包成js文件，再在页面中通<script>标签加载。当然对于很多NodeJS模块，比如涉及到io操作的模块，就算通过browserify打包后肯定也无法运行在浏览器环境中，这种情况下就会用到为它们重写的支持浏览器端的分支模块，可以在browserify search搜索到这些模块。
```

![Alt text](https://raw.githubusercontent.com/scott1028/webpack-and-browserify-study/master/browserify_usage.png "browserify_usage.png")
![Alt text](https://raw.githubusercontent.com/scott1028/webpack-and-browserify-study/master/webpack_usage.png "webpack.png")
![Alt text](https://raw.githubusercontent.com/scott1028/webpack-and-browserify-study/master/webpack_with_gulp_usage.png "webpack_with_gulp_usage.png")
