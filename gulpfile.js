var gulp = require('gulp'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	pngquant = require('imagemin-pngquant'),
	uglify = require('gulp-uglify'),
	cache = require('gulp-cache'),
	twig = require('gulp-twig'),
	debug = require('gulp-debug'),
	browserSync = require('browser-sync').create(),
	combiner = require('stream-combiner2').obj;



// ========= ========= T A S K S ========= =========

//Compile Stylus files to min.css + vendor + uncss
gulp.task('styl', function() {
	return combiner(
		gulp.src('./src/styl/main.styl').pipe(stylus({
			'include css': true
		})),
		debug({title:'SRC'}),
		stylus({linenos: false}),	
		debug({title:'STYLUS'}),
		autoprefixer([
			'Android 2.3',
			'Android >= 4',
			'Chrome >= 20',
			'Firefox >= 24',
			'Explorer >= 8',
			'iOS >= 6',
			'Opera >= 12',
			'Safari >= 6'
		]),
		debug({title:'AUTOPREFIXER'}),
		cssmin(),
		debug({title:'CSSMIN'}),
		rename({
			suffix: '.min'
		}),
		debug({title:'RENAME'}),
		gulp.dest('./src/css/'),
		debug({title:'DESTINATION'}),
		browserSync.reload({stream: true})
	).on('error', function(err) {
		console.log(err.message);
		this.end();
	});
	
		
});

// Html

gulp.task('twig', function () {
  gulp.src('./src/templates/pages/*.html')
      .pipe(twig())
      .pipe(gulp.dest('./src/'))
      .pipe(browserSync.reload({stream: true}));
});


// Concat + compress + rename css LIBS files
gulp.task('cssLibs', function () {
	return gulp.src('./src/css/libs/*.css')
		.pipe(concatCss('libs.css'))
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./src/css/'))
		.pipe(browserSync.reload({stream: true}));
})

// Concat + compress +rename js files
gulp.task('jsLibs', function () {
    return gulp.src('./src/js/libs/*.js')
    	.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./src/js/'))
		.pipe(browserSync.reload({stream: true}));
});

// Common js file
gulp.task('jsCommon', function () {
	return combiner (
		gulp.src('./src/js/common.js'),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest('./src/js'),
		browserSync.reload({stream: true})
	).on('error', function(err) {
		console.log(err.message);
		this.end();
	});	
});

// Concat all libs css files and libs js files
gulp.task('buildLibs', ['cssLibs', 'jsLibs']);


// Browsersync
gulp.task('serve', function() {
	browserSync.init({ 
		server: { 
			baseDir: "src" 
		}, 
		notify: false
		// online: true, 
		// tunnel: true, 
		// tunnel: "projectmane" //Demonstration page: http://projectmane.localtunnel.me 
	}); 
	
});

// Watch task
gulp.task('watch', ['serve'], function() {
	gulp.watch('./src/templates/pages/**/*.html', ['twig']);
	gulp.watch('./src/templates/parts/**/*.html', ['twig']);
	gulp.watch('./src/*.html', browserSync.reload);
	gulp.watch("./src/styl/**/*.styl", ['styl']);
	gulp.watch("./src/js/common.js", ['jsCommon']);
	gulp.watch('./src/css/libs/*.css', ['cssLibs']);
});

	

// ========= ========= ========= ========= ========= 

// ========= ========= B U I L D   O F   T H E   P R O J E C T  ========= =========

// Moves html file from src folder to APP folder
gulp.task('htmlBuild', function () {
	return gulp.src('./src/[^templates]*.html')
		.pipe(gulp.dest('./app/'));
});

// Moves main css file from src/CSS folder to APP/CSS folder
gulp.task('cssBuild', function () {
	return gulp.src('./src/css/**/*')
		.pipe(gulp.dest('./app/css/'));
});

// Moves js files from src/JS folder to APP/JS folder
gulp.task('jsBuild', function () {
	return gulp.src('./src/js/**/*.min.js')
		.pipe(gulp.dest('./app/js/'));
});

// Moves + 'minificate' images from src/IMG folder to APP/IMG
gulp.task('imgBuild', function () {
	return gulp.src('./src/img/**/*')
		.pipe(cache(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imageminJpegRecompress({
			loops: 5,
			min: 75,
			max: 85,
			quality:'high'
		}),
		imagemin.svgo(),
		imagemin.optipng({optimizationLevel: 3}),
		pngquant({quality: '75-85', speed: 5})
		],{
		verbose: true
		})))
		.pipe(gulp.dest('./app/img/'));
});

// Clearing the cache
gulp.task('clear', function (done) {
	return cache.clearAll(done);
});

gulp.task('fontsBuild', function() {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('./app/fonts/'));
});

// Start of building
gulp.task('build', ['htmlBuild', 'jsBuild', 'cssBuild','imgBuild', 'fontsBuild']);
// ========= ========= ========= ========= ========= 