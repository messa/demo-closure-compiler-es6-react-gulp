import babel from 'gulp-babel';
import closureCompiler from 'gulp-closure-compiler';
import del from 'del';
import gulp from 'gulp';


gulp.task('clean', callback => {
  del('build', callback);
});


gulp.task('babel', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      whitelist: ['react']
    }))
    .pipe(gulp.dest('build/babel'));
});


gulp.task('closure-compiler', ['babel'], () => {
  return gulp.src('build/babel/**/*.js')
    .pipe(closureCompiler({
      compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
      fileName: 'app.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        language_in: 'ES6_STRICT',
        language_out: 'ES5_STRICT',
        warning_level: 'VERBOSE',
        externs: [
          //'node_modules/google-closure-compiler/contrib/externs/es6.js',
          'node_modules/react-externs/externs.js'
        ]
      }
    }))
    .pipe(gulp.dest('build/closure-compiled'));
});


gulp.task('default', ['closure-compiler']);
