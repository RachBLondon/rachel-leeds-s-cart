
var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/getLocation', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
      console.log("doc", docs)
        res.json(docs);
    });
});

module.exports = router;
