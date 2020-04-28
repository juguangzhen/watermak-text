let path = require('path')

module.exports = {
  // 入口，是一个对象
  entry: {
    app: './src/index.js' // 相对路径
  },

  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'watermark.min.js',
    library: "watermark", // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },

  // 指定loader
  module: {
    // rules中的每一项是一个规则
    rules:[
      {
        test: /\.js$/, // 值一个正则，符合这些正则的资源会用一个loade来处理
        use: {
          loader: 'babel-loader', // 使用bable-loader来处理
          options: {  // 指定参数
            presets: [
              ['babel-preset-env', {
                targets: {
                  browsers: ['> 1%', 'last 2 version'] //具体可以去babel-preset里面查看
                }
              }]

            ] // 指定哪些语法编译
          }
        },
        exclude: '/node_module/' // 排除在外
      }
    ]
  }
}
