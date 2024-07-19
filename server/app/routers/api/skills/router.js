const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  destroy,
  add,
} = require("../../../controllers/skillsActions");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", edit);

router.delete("/:id", destroy);

router.post("/", add);

// router.post("/", add);

module.exports = router;
