const express = require("express");
const router = express.Router();
const room = require("../controllers/room.controller.js");

// Create a new Tutorial
router.post("/", room.create);

// Retrieve all Tutorials
router.get("/", room.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", room.findOne);

module.exports = router;
