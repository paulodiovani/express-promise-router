module.exports = function(app) {
  this.get = function(route, cb) {
    // forward call to app
    app.get(route, function(req, res) {
      // the callback expects a returning promise
      cb(req)
      .then(function(data) {
        // send promise data to response
        res.send(data);
      });
    });
  };

  return this;
};
