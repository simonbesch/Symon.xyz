const express = require("express");
const { verifyToken } = require("../../../services/verifToken");

const router = express.Router();

const { login } = require("../../../controllers/authActions");

router.post("/", login);

module.exports = router;
