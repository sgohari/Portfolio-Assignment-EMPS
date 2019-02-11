let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/contact', function(req, res,next) {
  let messages = "<ul><li>Nasir</li><li>Manizha</li><li>Sepeher</li></ul>";
  //res.send(block);
  res.render('index', { title: 'Contact', block: messages });
  
});

module.exports = router;
