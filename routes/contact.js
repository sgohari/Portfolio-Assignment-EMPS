let express = require('express');
let router = express.Router();

//for using mongo
let mongoose = require('mongoose');

//reference to the db schema
let myContact = require('../models/contact');

/** GET contact me list page -insert operations */
router.get('/', (req, res, next)=>{
    myContact.find((err, contactMe)=>{

        if(err){
            return console.error(err);
        }
        else{
            res.render('contacts/index', {
                title: 'Contact Me',
                contactNow: contactMe
            });
        }
    });
});
/* POST rout to inserting data */

router.post('/', (req, res, next)=>{

    //console.log(req.body);
    let newContact = myContact({

        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Email":req.body.email,
        "Message":req.body.message
    });

    //creating action
    myContact.create(newContact, (err, myContact)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //res.redirect('./views/index');
            res.redirect('aboutme');
        }
    });
});



module.exports = router;