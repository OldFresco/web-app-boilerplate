var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // The entry point for the bundle.
  entry: [
    'webpack-hot-middleware/client', './app'
  ],
  // The output of the compilation
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack
      .optimize
      .OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [
      require('postcss-import')({
        onImport: function (files) {
          files.forEach(this.addDependency)
        }.bind(this)
      }),
      require('postcss-simple-vars')(),
      require('postcss-focus')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({clearMessages: true})
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    // An array of automatically applied loaders.
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      }, {
        test: /\.css$/, // Transform all .css files required somewhere within an entry point...
        loaders: ['style-loader', 'css-loader', 'postcss-loader'] // ...with PostCSS
      }, {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
}
