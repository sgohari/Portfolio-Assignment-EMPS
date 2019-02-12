let mongoose = require('mongoose');

//create a model class
let myContactDB = mongoose.Schema({
    FirstName: String,
    LastName:String,
    Email:String,
    Message:String
         
    },

    {
        collection:"feedbacktable"
    });

    module.exports=mongoose.model('contactModel', myContactDB);
    