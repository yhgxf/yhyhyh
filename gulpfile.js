var gulp = require("gulp");
var uglify = require("gulp-uglify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var mincss = require("gulp-minify-css");
var webserver = require("gulp-webserver");
//压缩js文件
gulp.task("minjs", function() {
        gulp.src(["js1.js", "js2.js"]).pipe(uglify()).pipe(gulp.dest("./dist"));
    })
    //合并js文件
gulp.task("concatModule", function() {
        browserify({
                entries: ["js1.js", "js2.js"]
            }).bundle().pipe(source("./concat.js"))
            .pipe(buffer()).pipe(gulp.dest("./dist"));
    })
    //压缩css文件
gulp.task("mincss", function() {
        gulp.src("./css/style.css").pipe(mincss()).pipe(gulp.dest("./dist"));
    })
    //启动服务
gulp.task("webserver", function() {
    gulp.src("./").pipe(webserver({
        port: 8080,
        host: "localhost"
    }))
})