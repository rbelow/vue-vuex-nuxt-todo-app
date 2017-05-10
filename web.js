var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// import express from 'express';
// const app = express(); // it could be that `const app` makes the app fail on Heroku
//
// // ES5 to ES6 by https://lebab.io/try-it
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(`${__dirname}/dist`));
//
// app.listen(app.get('port'), () => {
//   console.log('Node app is running on port', app.get('port'));
// });
