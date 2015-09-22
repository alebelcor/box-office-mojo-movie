'use strict';

var got = require('got');
var movieTitle = require('box-office-mojo-movie-title');
var movieGross = require('box-office-mojo-movie-gross');

function getMovieURL(movieID) {
  if (typeof movieID !== 'string' || movieID.length === 0) {
    throw new Error('Movie ID must be a valid string');
  }

  return 'http://boxofficemojo.com/movies/?id=' + movieID;
}

module.exports = function (movieID) {
  var boxOfficeMojoMovieURL;

  if (typeof movieID !== 'string' || movieID.length === 0) {
    throw new Error('Movie ID must be a valid string');
  }

  boxOfficeMojoMovieURL = getMovieURL(movieID);

  return got(getMovieURL(movieID)).then(function (response) {
    var title = movieTitle(response.body);
    var gross = movieGross(response.body);

    return {
      title: title,
      domesticGross: gross
    };
  });

};
