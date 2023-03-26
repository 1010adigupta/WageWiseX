const express = require("express");
const emptableController = require("../Controller/emptableController");

const router = express.Router();

router
    .get("/", emptableController.getEMPtable)
    .get("/:id", emptableController.getEntry)

module.exports = router;