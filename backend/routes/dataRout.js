const express = require("express");
router = express.Router();
dataRoute = require("../controlors/dataController");

router.get("/", dataRoute.dataController);

module.exports = router;
