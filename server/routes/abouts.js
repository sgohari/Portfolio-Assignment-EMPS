let express = require('express');
let router = express.Router();

//refering to aboutMe controller
let aboutMeContoller = require('../controllers/aboutController');
//routing for about me page

router.get('/',aboutMeContoller.displayAboutMe );


module.exports = router;