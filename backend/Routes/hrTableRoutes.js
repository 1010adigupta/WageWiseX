const express = require("express");
const hrtableController = require("../Controller/hrtableController");

const router = express.Router();

router
    .get("/", hrtableController.getHRtable)
    .get("/:id", hrtableController.getEntry)

module.exports = router;