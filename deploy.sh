#!/usr/bin/env bash

chmod -R 777 .

composer install

npm install gulp
npm install gulp-sass
npm install gulp-sass-glob

gulp sass
php core/console --generate
