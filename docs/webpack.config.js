var config = {
  entry: {
    simple: './simple-src.js',
    easy: './easy-src.js'
  },
  output: {
    filename: './[name]-dist.js'
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
