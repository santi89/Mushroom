var express = require("express");
var users = require("../models/users");

var router = express.Router();
/* GET users listing. */
router.get("/get", async function (req, res, next) {
  await users
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
