var gulp = require("gulp"),
  tsc = require("gulp-typescript"),
  maps = require('gulp-sourcemaps'),
  exec = require("child_process").exec,
  gutil = require("gulp-util"),
  tslint = require("gulp-tslint"),
  webpack = require('webpack'),
  server = require("webpack-dev-server"),
  config = require("./webpack.config.js");

/*
 This task will transpile the solution suing src/main.ts as the entry point
*/
gulp.task("build", function () {

  var src = ["src/**/*.ts"];

  var project = tsc.createProject("tsconfig.json");
  return gulp.src(src)
    .pipe(maps.init())
    .pipe(project()).js
    .pipe(maps.write(".", { sourceRoot: "../src" }))
    .pipe(gulp.dest("build"));
});

/*
 This task will "run" the app using src/main.ts as the entry point
*/
gulp.task("run", ["build"], function (cb) {

  exec('node build/main.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

/*
 Provide linting support
*/
gulp.task("lint", () => {
  return gulp.src("./src/**/*.ts")
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report());
});

/*
 Provide a default action, in this case serve
*/
gulp.task("default", ["serve"]);

/*
 This task will bundle the project using webpack
*/
gulp.task("bundle", ["lint", "webpack:build"]);

/*
 This task does the actual webpack bundling of the solution
*/
gulp.task("webpack:build", function (callback) {
  // modify some webpack config options
  var buildConfig = Object.create(config);
  buildConfig.plugins = buildConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(buildConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// modify some webpack config options
var devConfig = Object.create(config);
devConfig.devtool = "sourcemap";
devConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(devConfig);

gulp.task("webpack:build-dev", function (callback) {
  // run webpack
  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

/**
 * Run a web server which watches files and rebuils your app when it changes
 */
gulp.task("serve", function (callback) {
  // modify some webpack config options
  var serveConfig = Object.create(config);
  serveConfig.devtool = "sourcemap";
  serveConfig.debug = true;

  // Start a webpack-dev-server
  new server(webpack(serveConfig), {
    publicPath: serveConfig.output.publicPath,
    stats: {
      colors: true
    },
    contentBase: "dist"
  }).listen(8080, "localhost", function (err) {
    if (err) throw new gutil.PluginError("serve", err);
    gutil.log("[serve]", "http://localhost:8080/assets/main.js");
  });
});
