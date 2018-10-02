var express = require('express');
var router = express.Router();
var poi = require('../models/poi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
  next();
});

router.get('/hotpoint', function(req, res, next) {
  res.render('hotpoint', { title: '热点' });
  next();
});

router.get('/poi', function(req, res, next) {
  return res.render('poi', { title: 'POI' });
});

router.get('/topic', function(req, res, next) {
  return res.render('topic', { title: '话题' });
});

router.get('/predict', function(req, res, next) {
  return res.render('predict', { title: '预测' });
});

router.get('/poiData', function(req, res, next) {
  poi.prototype.find('poi', function(callback) {
    res.send(callback);
  });
});

router.get('/topicData', function(req, res, next) {
  poi.prototype.find('sina', function(callback) {
    res.send(callback);
  });
});

module.exports = router;
