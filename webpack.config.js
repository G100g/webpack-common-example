var path = require('path');
var webpack = require('webpack');
var glob = require('globby');
// var entry = getEntries(path.join(__dirname, 'src'));

var base_src = path.join(__dirname, 'src');
var globPath = ['**/*.js', '!modules/**/*.js'];
console.log(globPath);
var entry = glob
              .sync(globPath, {
                cwd: base_src
              })
.map((e) => {
  console.log(e)
  return e;
})
              // Create entry object using glob array
              .reduce((result, entry) => {

                // Create entry name using file path
                var name = entry;

                // Remove file extension
                name = name.substr(0, name.lastIndexOf('.'));

                result[name] = path.join(base_src, entry);

                return result;

              }, {})
console.log(entry);
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
