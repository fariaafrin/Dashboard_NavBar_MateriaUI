const mix = require("laravel-mix");

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

mix.react("resources/js/app.js", "public/js")
    // .extract()
    /**
     *
     * NOTE !! No need to use lazy-loading this project
     *
     * How to lazy-loading components in react
     * https://reactjs.org/docs/code-splitting.html
     *
     * example : const OtherComponent = React.lazy(() => import('./OtherComponent'));
     */
    .webpackConfig({
        output: {
            chunkFilename: "public/js/chunks/react-[name].js?id=[chunkhash]"
        }
    });

mix.sass("resources/sass/app.scss", "public/css");  