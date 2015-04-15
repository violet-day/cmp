/**
 * Created by Administrator on 2014/11/19.
 */
var gulp = require('gulp'),
  pkg = require('./package.json');

var concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jshint = require("gulp-jshint"),
  rename = require('gulp-rename'),
  htmlmin = require('gulp-htmlmin'),
  mocha = require('gulp-mocha'),
  blanket = require('gulp-blanket-mocha'),
  supervisor = require('gulp-supervisor'),
  templateCache = require('gulp-angular-templatecache'),
  loopbackAngular = require('gulp-loopback-sdk-angular'),
  gulpDocs = require('gulp-ngdocs');

var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var connect = require('gulp-connect');
var gulpSequence = require('gulp-sequence');

var argv = require('minimist')(process.argv.slice(2));

gulp.task('default', ['sdk', 'js', 'dev'], function () {

});

gulp.task('js', function () {
  var dist = './public/assets/scripts/cmp';
  gulp.src([
    'src/server.js', 'src/partials.js', 'src/app.js', 'src/**/*.js'
  ]).pipe(concat('cmp.js'))
    .pipe(gulp.dest(dist))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(dist))
    .pipe(connect.reload());
});

gulp.task('sdk', function () {
  return gulp.src('./server/server.js')
    .pipe(loopbackAngular({apiUrl: 'http://127.0.0.1:3000/api'}))
    //.pipe(gulp.dest('./src'))
    .pipe(gulp.dest('/Users/Nemo/Workspace/javis/src/components/services'));
});

gulp.task('tpl', function () {
  return gulp.src('views/**/*.html')
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true, // Only if you don't use comment directives!
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }))
    .pipe(templateCache({
      filename: 'partials.js',
      module: 'cmp.tpl',
      standalone: true,
      root: 'views',
      base: function (file) {
        return file.path
          .replace(file.base, '')
          .replace('core', '')
          .replace('workflow-task', '')
          .replace('demo', '')
      }
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('build', function () {
  return gulp.src('./public/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      //html: [minifyHtml({empty: true})],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('hint', function () {
  gulp.src(['src/**/*.js']) // path to your files
    .pipe(jshint({globals: ['angular', '_']}))
    .pipe(jshint.reporter()); // Dump results
});

gulp.task('test', function () {
  return gulp.src('./server/test/**/*.js')
    .pipe(mocha({
      globals: {
        app: require('./server/server')
      },
      require: {
        app: require('./server/server')
      }
    }));
});

gulp.task('server', function () {
  supervisor("server/server.js", {
    watch: ['./server', './common'],
    ignore: ['./server/test'],
    harmony: true
  });
});

gulp.task('updateDB', function (cb) {
  var app = require('./server/server');
  app.datasources.local.autoupdate(cb);
});

gulp.task('restDB', function (cb) {
  var app = require('./server/server');
  app.datasources.local.automigrate(cb);
});

gulp.task('publish', [], function () {
  return require('./server/init/publish')
});

gulp.task('init', function () {
  return require('./server/init/init')()
});

gulp.task('dev', function (cb) {
  connect.server({
    root: ['public'],
    port: 8888,
    livereload: true
  });
  gulpSequence('sdk', 'tpl', 'js', function () {
    gulp.watch('views/**/*.html', ['tpl']);
    gulp.watch('src/**/*.js', ['js']);
    cb();
  });
});

gulp.task('doc', ['sdk'], function () {
  return gulp.src(['./src/server.js'])
    .pipe(gulpDocs.process({
      //scripts:['./src/service.js']
    }))
    .pipe(gulp.dest('./docs'));
});

/**
 * @usage
 *  gulp --harmony cols --model Post
 */
gulp.task('cols', function () {
  var helper = require('./server/util/ModelHelper');
  helper.buildColumns(argv.model)
});

/**
 * @usage
 *  gulp --harmony form --model Post
 */
gulp.task('form', function () {
  var helper = require('./server/util/ModelHelper');
  helper.form(argv.model);
});

gulp.task('ctrl', function () {
  var helper = require('./server/util/ModelHelper');
  helper.ctrl(argv.model);
});
