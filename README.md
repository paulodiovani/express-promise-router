# Promise Router for Express.js

This is a simple experiment and _proof of concept_ on how
promises could be used in express routers.

The idea is to return a promise to be resolved on router
methods instead of using the `response` object.

## :warning: Warning

This project is not suitable for use, anywhere.

**Seriously.**

## Usage

```javascript
var express = require('express');
var app     = express();

// Mongoose model
var Tag = require('./models/tag');

// pass app as argument to the router
// note that, currently, the module is under lib/
var router  = require('./lib/promise-router')(app);

// now you can return promises directly
router.get('/tags/:id', function(req) {
  return Tag.findOne({_id: req.params.id});
});
```
