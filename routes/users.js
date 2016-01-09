
var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var userId = req.cookies.userId;
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({"userId" : userId},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
