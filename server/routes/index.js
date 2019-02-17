let express = require('express');
let router = express.Router();


//refering to aboutMe controller
let indexContoller = require('../controllers/indexController');
//routing for about me page
/* GET home page. */
router.get('/',indexContoller.displayHomePage );

//routing to about page
router.get('/about', indexContoller.displayAboutPage );

router.get('/project', indexContoller.displayProjectPages );

router.get('/services', indexContoller.displayServicePage );

router.get('/contact', indexContoller.displayContactMePage);

module.exports = router;
