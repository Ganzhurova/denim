const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("css", () => {
  return gulp
    .src(["source/sass/style.scss"])
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest("source/css"))
    .pipe(browserSync.stream());
});

gulp.task("serve", () => {
  browserSync.init({
    server: "./source",
    notify: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", browserSync.reload);
});

gulp.task("start", gulp.series("css", "serve"));
