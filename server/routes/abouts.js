/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
let express = require('express');
let router = express.Router();

//refering to aboutMe controller
let aboutMeContoller = require('../controllers/aboutController');
//routing for about me page

router.get('/',aboutMeContoller.displayAboutMe );


module.exports = router;