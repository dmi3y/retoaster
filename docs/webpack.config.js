var config = {
  entry: {
    simple: './examples/simple/src.js',
    easy: './examples/easy/src.js',
    nice: './examples/nice/src.js',
    startrek: './examples/startrek/src.js'
  },
  output: {
    filename: './examples/[name]/dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

module.exports = config
