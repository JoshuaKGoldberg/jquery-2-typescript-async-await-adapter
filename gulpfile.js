const gulp = require("gulp");
const merge = require("merge2");
const mochaPhantomJS = require("gulp-mocha-phantomjs");
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

gulp.task("tsc", () => {
    const tsProject = ts.createProject("tsconfig.json");
    const tsResult = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("test")),
        tsResult.dts.pipe(gulp.dest("test"))
    ]);
});

gulp.task("tsc:watch", ["tsc"], () => {
    gulp.watch("test/*.ts", ["tsc"]);
});

gulp.task("test", () => {
    return gulp
        .src("test/index.html")
        .pipe(mochaPhantomJS({
            phantomjs: {
                useColors: true
            }
        }));
});
