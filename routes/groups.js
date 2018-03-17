var express = require('express');
var groupRouter = express.Router();

/* GET home page. */
groupRouter.get('/:groupid', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.redirect('../group.html');
  res.render('group.ejs', {title: 'group', user: 'Gopi', groupname: req.params.groupid});
});

module.exports = groupRouter;
