const express = require("express");
const { verifyToken } = require("../../../services/verifToken");

const router = express.Router();

const {
  browse,
  read,
  edit,
  destroy,
  add,
} = require("../../../controllers/projetsActions");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", verifyToken, edit);

router.delete("/:id", verifyToken, destroy);

router.post("/", verifyToken, add);

module.exports = router;
