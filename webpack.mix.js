const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.styles(['resources/css/app.css', 'resources/css/bootstrap.css', 'resources/css/style.css'], 'public/css/app.css');

mix.js(['resources/js/app.js', 'resources/js/htmlTemplate/easing.js', 'resources/js/htmlTemplate/move-top.js', 'resources/js/htmlTemplate/snapMenu.js'], 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
