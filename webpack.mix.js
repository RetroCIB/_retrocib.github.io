let mix = require('laravel-mix');

mix.options({
		processCssUrls: false
	})
	.js('src/js/app.js', 'app.js')
    .sass('src/sass/app.scss', 'app.css');