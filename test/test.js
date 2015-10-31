'use strict';

var isPLainObj = require('is-plain-obj');
var test = require('ava');
var boxOfficeMojoMovie = require('../');

test('it should take a movie ID as a string for the first parameter', function (t) {
  t.throws(function () { return boxOfficeMojoMovie(); });
  t.end();
});

test('it should return a promise', function (t) {
  t.same('function', typeof boxOfficeMojoMovie('pulpfiction.htm').then);
  t.end();
});

test('it should return a promise with the movie data', function (t) {
  return boxOfficeMojoMovie('pulpfiction.htm').then(function (movie) {
    var movieKeys = Object.keys(movie);

    t.same(['title', 'domesticGross'], movieKeys);
    t.same(2, movieKeys.length);

    t.true(isPLainObj(movie));
    t.same('string', typeof movie.title);
    t.same('number', typeof movie.domesticGross);
  });
});
