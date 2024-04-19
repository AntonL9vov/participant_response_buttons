const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller.js");

// Create a new Tutorial
router.post("/", user.create);

// Retrieve all Tutorials
router.get("/", user.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", user.findOne);

router.put("/enter-room/:id", user.enterTheRoom);

router.get("/users-in-room/:roomId", user.findAllUsersInRoom);

router.put("/change-name/:id", user.changeName);

module.exports = router;
