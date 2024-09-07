const express = require("express");
const { verifyToken } = require("../../../services/verifToken");
const router = express.Router();

const { read, edit } = require("../../../controllers/allInfosActions");

router.get("/:id", read);

router.put("/:id", verifyToken, edit);

module.exports = router;
