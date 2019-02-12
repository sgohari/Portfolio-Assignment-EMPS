let express = require('express');
let router = express.Router();



//routing for about me page
router.get('/', (req, res, next)=>{
    res.render('contacts/aboutme', {
        title: 'About Me Details '
    });
});


module.exports = router;