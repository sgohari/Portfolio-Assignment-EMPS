/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
let express = require('express');
let router = express.Router();

//reference to the db schema
let myContact = require('../models/contact');

//displaying the contact pages 
module.exports.displayContactList = (req, res, next)=>{
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
}

//inserting user input into mLab database
module.exports.insertRecordToDB = (req, res, next)=>{

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
            res.redirect('/');
        }
    });
}
