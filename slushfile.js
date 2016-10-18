/*
 * initPro - Initial webproject boilerplate
 * https://github.com/seu-nome/webproject-boilerplate
 * Credits to http://diogo.nu/
 * Copyright (c) 2016, Filipe Cezar
 * License: GPL v3
 */
'use strict';

var gulp     = require('gulp'),
    install  = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename   = require('gulp-rename'),
    _        = require('underscore.string'),
    inquirer = require('inquirer');
gulp.task('default', function(done) {
    //Answers
    var prompts = [{
        name: 'appName',
        message: 'What the name of project?',
        default: 'my project'
    }, {
        name: 'appDescription',
        message: 'What the description?',
        default: 'My project using initpro'
    }, {
        name: 'appVersion',
        message: 'What the version?',
        default: '0.0.1'
    }, {
        name: 'appAuthor',
        message: 'Name of author?'
    }, {
        name: 'appEmail',
        message: 'Author e-mail?'
    }];

    //Ask
    inquirer.prompt(prompts,
        function(answers) {
            if (!answers.appName) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName)
            answers.appAuthorSlug = _.slugify(answers.appAuthor)
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function() {
                    done();
                });
        });
});
