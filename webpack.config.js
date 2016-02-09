var path = require('path')

module.exports = {
  entry: {
      'app': path.join(__dirname, 'src', './app.js'),
  }
, module: {
    loaders: [
      {
        test: /\.js$/
      , exclude: /(node_modules|bower_components)/
      , loader: 'babel-loader'
      , query: {
          plugins: ['transform-decorators-legacy', "transform-class-properties"]
        , presets: ['react', 'es2015', 'stage-0']
        }
      }
    , {
        test: /\.json$/
      , loader: 'json'
      }
    ]
  }
, output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
, node: {
    console: false,
    global: true
  }
, target: "web"
, watch: "true"
}
