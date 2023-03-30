/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/* exported CKBUILDER_CONFIG */
// build command: ./dev/builder/build.sh --leave-js-unminified --no-zip --no-tar

var CKBUILDER_CONFIG = {
	skin: 'minimalist',
	//preset: 'basic',
	ignore: [
		'bender.js',
		'.bender',
		'bender-err.log',
		'bender-out.log',
		'dev',
		'docs',
		'.DS_Store',
		'.editorconfig',
		'.gitignore',
		'.gitattributes',
		'gruntfile.js',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'less',
		'.mailmap',
		'node_modules',
		'package.json',
		'README.md',
		'tests'
	],
	plugins : {
		'clipboard' : 1,
		'confighelper' : 1,
		'entities' : 1,
		'floatingspace' : 1,
		'undo' : 1,
		'widget' : 1
	},
	languages : {
		'en' : 1
	}
};
