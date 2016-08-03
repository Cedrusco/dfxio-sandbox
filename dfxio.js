var router = require('express').Router();

router.get('/dfxio/:component/:data', function(req, res, next) {
  var component = req.params.component;
  var data = req.params.data;
  res.send(data);
});

module.exports = router;
