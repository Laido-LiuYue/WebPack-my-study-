# WebPack-my-study-
刘冠军老师所教课程关于webpack的部分内容
>webpack是什么？是一个模块打包机，打包所有的资源，脚本，图片，样式表，自动刷新，代码校验

### 项目初始化
- 新建一个webpack文件夹
- 在终端npm内切换至该目录下 ```cd webpack``` 然后执行```yarn init -y```
- 创建src文件夹，在src下创建index.js

### 安装webpack
- 本地安装，-D代表是开发依赖，上线的话不需要，不加默认是项目依赖
```
yarn add webpack webpack-cli -D（注意-D与前面有空格）
```
- 创建.gitignore文件并书写
- webpack可以进行0配置，直接执行```npx webpack```

### 配置webpack
- 创建一个webpack.config.js文件
```
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
- 配置package.json，设置npm脚本,加上以下代码
```
"scripts":{
    "build":"webpack"
},
```
- 再执行npm run build
- 接下来设定HtmlWebpackPlugin，安装插件```yarn add html-webpack-plugin -D```
- 配置HtmlWebpackPlugin插件
```
plugins: [// 插件
    new HtmlWebpackPlugin({ //自动生成HTML并引入js
        title: 'webpack',
        template:'./src/index.html',
        hash:true,
        minify:{
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeAttributeQuotes:true
        }
    })
]
```
- 设置clean-webpack-plugin插件，清除原来生成的文件
```
yarn add clean-webpack-plugin -D
```
- 设置webpack-dev-server,执行 ```npx webpack-dev-server```
- 生成内存中的index.html,并执行```yarn add webpack-dev-server -D```
- 可配置webpack.config.js
```
devServer:{
    port:3000
},
```
- 设置package.json
```
"scripts": {
    "build": "webpack",
    "start":"webpack-dev-server --open"
},
```
### loader
- style-loader css-loader
- 安装```yarn add style-loader css-loader -D```
- 配置：
```
module: {
    rules:[
        {
            test:/\.css$/,
            use:[//loader匹配的顺序是从右往左
                'style-loader',
                'css-loader'
            ]
        }
    ]
}
loader 带参数
module: {
    rules:[
        {
            test:/\.css$/,
            use:[//loader匹配的顺序是从右往左
                {
                    loader:'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                },
                'css-loader'
            ]
        }
    ]
}
```
- less-loader
- 安装```yarn add less less-loader -D```

- mini-css-extract-plugin插件抽取css
- 安装```yarn add mini-css-extract-plugin -D```
- 详情见网站https://github.com/webpack-contrib/mini-css-extract-plugin
- 配置代码
```loader里{
    test:/\.css$/,
    use:[
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
    ]
},
plugin中
new MiniCssExtractPlugin({
    filename: 'index.css',
}),
```

- babel https://www.webpackjs.com/loaders/babel-loader/
```安装yarn add babel-loader @babel/core @babel/preset-env -D```
```配置
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env',"@babel/preset-react"],
            "plugins": [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties"
            ]
        }
    }
}
```

- ```yarn add @babel/plugin-transform-runtime -D``` 加上-D是开发依赖
- ```yarn add @babel/runtime```默认什么都不加就是项目依赖
- ```yarn add @babel/plugin-proposal-class-properties -D```
- ```yarn add @babel/preset-react -D```
- ```yarn add react```
- ```yarn add react-dom```
