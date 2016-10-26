var path = require('path');
var webpack = require('webpack');
var glob = require('globby');

var base_src = path.join(__dirname, 'src');
var globPath = ['**/*.js', '!modules/**/*.js'];

var entry = glob
              .sync(globPath, {
                cwd: base_src
              })
              // Create entry object using glob array
              .reduce((result, filepath) => {

                console.log(filepath);

                // Create entry name using file path
                var name = filepath.substr(0, filepath.lastIndexOf('.'));

                result[name] = path.join(base_src, filepath);

                return result;

              }, {})

console.log();
console.log(JSON.stringify(entry, null, 4));
console.log();

module.exports = {

  entry: entry,
  output: {
      path: './dest/scripts/',
      filename: '[name].js',
  },
  externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    module: {
      loaders: [
        {
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'site',
      filename: 'site.js',
      // children: true,
      // minChunks: Infinity,
    })
  ]
}
