
var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    // console.log(">>>", req)
    var userIdFromCookie = req.rawHeaders[17];
    var userId = userIdFromCookie.split("=")[1];
    console.log(userId)
    // var userIDBe =
    var db = req.db;
    var collection = db.get('userlist');

    collection.find({"userId" : userId},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
