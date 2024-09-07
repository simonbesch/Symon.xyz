const express = require("express");
const { verifyToken } = require("../../../services/verifToken");

const router = express.Router();

const {
  browse,
  read,
  edit,
  destroy,
  add,
} = require("../../../controllers/skillsActions");

router.get("/", browse);

router.get("/:id", verifyToken, read);

router.put("/:id", verifyToken, edit);

router.delete("/:id", verifyToken, destroy);

router.post("/", verifyToken, add);

// router.post("/", add);

module.exports = router;
