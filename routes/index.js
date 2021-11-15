var express = require('express');
var router = express.Router();
const moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  var day1 = moment('2021-11-14', 'YYYY-MM-DD');
  var today = moment();
  var diff = today.diff(day1, 'days');
  console.log(diff);
  const param = {
    dayDiff: diff,
  };

  res.render('index', {dayDiff: diff});
});

router.get('/intro', function(req, res, next) {
  res.render('intro');
});

module.exports = router;
