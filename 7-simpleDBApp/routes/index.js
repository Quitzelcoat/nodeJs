const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsernames);
router.get("/new", userController.newUserForm);
router.post("/new", userController.saveUser);

router.get("/delete", userController.deleteUsernames);

module.exports = router;
