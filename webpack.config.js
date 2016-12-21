var path = require("path");

module.exports = {
  cache: true,
   entry: './src/main.ts',
   output: {
     path: path.join(__dirname, "dist"),
     publicPath: "/assets/",
     filename: "main.js"
   },
   resolve: {
     extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
   },
   plugins: [],
   module: {
     loaders: [
       { test: /\.ts$/, loader: 'ts-loader' }
     ]
   }
}
