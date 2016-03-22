#!/bin/bash
bundle
echo '++++++++++++++++++++'
echo '++++++++++++++++++++'
echo 'Bundle installed.'
echo '++++++++++++++++++++'
echo '++++++++++++++++++++'
bower install
cp ./app/_bower_components/jquery/dist/jquery.js ./app/_assets/javascripts/foot
cp ./app/_bower_components/modernizr/modernizr.js ./app/_assets/javascripts/head
cp ./app/_bower_components/normalize-css/normalize.css ./app/_assets/scss/_normalize.scss
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
echo 'Bower programs installed.'
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
npm install
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
echo 'npm dependencies installed.'
echo 'The Script ends here.'
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
