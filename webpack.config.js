var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src');

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: APP_DIR+'/app.jsx',
  output: {
    filename:'./bundle1.js',
    path: BUILD_DIR
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.
  plugins: [
    new CopyWebpackPlugin([{
      from: 'build/bundle1.js',
      to: '//chinar-svr/transfer/anbajpai/bundle1.js',
      toType: 'file'
    }])
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.

  ],
  node: {
    fs: "empty"
  },
  resolve : {
    extensions: ['.js', '.jsx']}
}
