const 
    express = require('express'),
    router = express.Router(),
    User = require('../controllers/user');


router.post('/auth', User.auth) ;
router.post('/register', User.register);

module.exports = router;

