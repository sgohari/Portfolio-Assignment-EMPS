let express = require('express');
let router = express.Router();

//reference to the db schema
let myContact = require('../models/contact');

module.exports.displayHomePage = (req, res, next)=> {
    res.render('index', { title: 'Home' });
  }

  module.exports.displayAboutPage =(req, res, next)=> {
    res.render('index', { title: 'About' });
  }

  module.exports.displayProjectPages = (req, res, next)=> {
    res.render('project', { title: 'Projects' });
  }

  module.exports.displayServicePage= (req, res, next)=> {
    res.render('services', { title: 'Services' });
  }

  module.exports.displayContactMePage =(req, res, next)=> {
    res.render('index', { title: 'Contact' });
  }