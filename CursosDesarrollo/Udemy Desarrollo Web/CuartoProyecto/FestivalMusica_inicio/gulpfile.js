const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
    scss: 'src/scss/**/*.scss',
    imagen: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

//Funcion que compila SASS

function css() {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function minificarCss() {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

function imagen() {
    return src(paths.imagen)
        .pipe( imagemin() )
        .pipe(notify({message: 'Imagen Minificada'}))
        .pipe( dest( './build/img' ) )
}

function javaScript() {
    return src(paths.js)
        .pipe( concat('bundle.js'))
        .pipe( dest('./build/js'))
}

function versionWebp() {
    return src(paths.imagen)
        .pipe( webp())
        .pipe( notify({message: 'Version Webp Lista'}))
        .pipe( dest( './build/img' ) )
}

function watchArchivos() {
    watch(paths.scss, css); // * = la carpeta actual -- ** = Todos los archivos con esa extension
    watch(paths.js, javaScript);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagen = imagen;
exports.watchArchivos = watchArchivos;
exports.versionWebp = versionWebp;
exports.javaScript = javaScript;

exports.default = series( css, javaScript, imagen, versionWebp, watchArchivos);