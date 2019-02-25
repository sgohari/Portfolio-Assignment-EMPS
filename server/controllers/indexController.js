/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
let express = require('express');
let router = express.Router();

//reference to the db schema
let myContact = require('../models/contact');

//for routing to home page
module.exports.displayHomePage = (req, res, next)=> {
    res.render('index', { title: 'Home' });
  }

  //routing to about page
  module.exports.displayAboutPage =(req, res, next)=> {
    res.render('contacts/aboutme', { title: 'About' });
  }

  //routing to project page
  module.exports.displayProjectPages = (req, res, next)=> {
    res.render('project', { title: 'Projects' });
  }

  //routing to service page
  module.exports.displayServicePage= (req, res, next)=> {
    res.render('services', { title: 'Services' });
  }

  //routing to contact page
  module.exports.displayContactMePage =(req, res, next)=> {
    res.render('contacts/index', { title: 'Contact' });
  }

  module.exports.displayEducationMePage= (req, res, next)=> {
    res.render('contacts/education', { title: 'Education' });
  }