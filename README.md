# box-office-mojo-movie

> Get the data of a Box Office Mojo's movie

[![npm version](https://img.shields.io/npm/v/box-office-mojo-movie.svg)](https://npmjs.org/package/box-office-mojo-movie)
[![Build Status](https://travis-ci.org/alebelcor/box-office-mojo-movie.svg)](https://travis-ci.org/alebelcor/box-office-mojo-movie)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/box-office-mojo-movie/master.svg)](https://coveralls.io/github/alebelcor/box-office-mojo-movie)

## Install

```bash
npm install --save box-office-mojo-movie
```

## Usage

```js
var boxOfficeMojoMovie = require('box-office-mojo-movie');

boxOfficeMojoMovie('pulpfiction.htm'); // { title: 'Pulp Fiction', domesticGross: 107928762 }
```

## API

### boxOfficeMojoMovie(movieID)

Returns a promise that will resolve to an object with the data of the Box Office Mojo's movie.

#### movieID

Type: `string`

The ID of a movie as presented in [Box Office Mojo](http://www.boxofficemojo.com/).

Example: The ID for [Pulp Fiction](http://www.boxofficemojo.com/movies/?id=pulpfiction.htm) would be `pulpfiction.htm`.

## License

MIT © Alejandro Beltrán
