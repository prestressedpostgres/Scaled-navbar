var path = require('path');
var SRC_DIR = path.join(__dirname, '/public/client/src/components'); // _dirname gives you the path of the currently running file
var DIST_DIR = path.join(__dirname, '/public/client/dist');

module.exports = {
  entry: `${SRC_DIR}/App.jsx`, // what is supposed to be the entry?
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};