const express = require("express");
const router = express.Router();

const { read, edit } = require("../../../controllers/allInfosActions");

router.get("/:id", read);

router.put("/:id", edit);

module.exports = router;
