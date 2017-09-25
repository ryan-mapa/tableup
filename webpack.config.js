var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/tableup.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx","*" ]
  }
};
