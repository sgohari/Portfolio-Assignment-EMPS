/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
let express = require('express');
let router = express.Router();

//reference to the db schema
let myContact = require('../models/contact');

module.exports.displayAboutMe = (req, res, next)=>{
    res.render('contacts/aboutme', {
        title: 'About Me'
    });
}