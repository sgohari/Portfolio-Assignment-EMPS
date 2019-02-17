/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
let express = require('express');
let router = express.Router();

//for using mongo
let mongoose = require('mongoose');

//reference to the db schema
let myContact = require('../models/contact');
let contactContoller = require('../controllers/contactController');

/** GET contact me list page -insert operations */
router.get('/', contactContoller.displayContactList);


/* POST rout to inserting data */

router.post('/', contactContoller.insertRecordToDB);



module.exports = router;