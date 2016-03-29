var Q       = require('q');

var express = require('express');
var app     = express();

var router  = require('./lib/promise-router')(app);

router.get('/', function(req) {
  // create and defer a promise
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.resolve('Hello, World.');
  }, 3000);

  // now promises can be chained and
  // the last resolved promise data
  // will be sent do response
  return deferred.promise;
});

app.set('port', 3000);
app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
