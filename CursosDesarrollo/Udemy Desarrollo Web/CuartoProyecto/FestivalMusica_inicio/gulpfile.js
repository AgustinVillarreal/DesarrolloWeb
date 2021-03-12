const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
//Funcion que compila SASS

function css() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function minificarCss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

function imagen() {
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe(notify({message: 'Imagen Minificada'}))
        .pipe( dest( './build/img' ) )
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * = la carpeta actual -- ** = Todos los archivos con esa extension
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagen = imagen;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagen, watchArchivos);