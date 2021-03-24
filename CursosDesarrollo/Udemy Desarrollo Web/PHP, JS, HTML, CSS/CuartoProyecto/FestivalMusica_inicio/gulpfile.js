const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//  Utilidades CSS

const autoprefixer = require('autoprefixer'); // Nos permite agregar prefijos
const postcss = require('gulp-postcss'); // Nos va a agregar procesamiento a nuestro css 
const cssnano = require('cssnano'); //cssnano crea una version optimizada del css
const sourcemaps = require('gulp-sourcemaps'); //sirve para poder localizar la linea de css en el navegador luego de optimizar el archivo css

// Utilidades JS

const terser = require('gulp-terser-js'); //Minifica el codigo de JS
const rename = require('gulp-rename');

const paths = {
    scss: 'src/scss/**/*.scss',
    imagen: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

//Funcion que compila SASS

function css() {
    return src(paths.scss)
        .pipe( sourcemaps.init()) //inicia el sourcemaps y localiza donde queda los archivos originales antes de que se optimice y quede inentendible
        .pipe( sass())
        .pipe( postcss([ autoprefixer(), cssnano()]))
        .pipe( sourcemaps.write('.')) //escribe los cambios
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
        .pipe( sourcemaps.init() )
        .pipe( concat('bundle.js'))
        .pipe( terser() )
        .pipe( sourcemaps.write('.'))
        .pipe( rename({ suffix: '.min'})) //Le agrega un .min de minificado
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
exports.imagen = imagen;
exports.watchArchivos = watchArchivos;
exports.versionWebp = versionWebp;
exports.javaScript = javaScript;

exports.default = series( css, javaScript, imagen, versionWebp, watchArchivos);