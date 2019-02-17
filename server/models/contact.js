/**Name: Syed Nasir Gohary
 * Subject: COMP308 ASSIGN01
 * Date: 2019-02-16
 */
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
    