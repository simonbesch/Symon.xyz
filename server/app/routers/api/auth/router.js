const express = require("express");
const { verifyToken } = require("../../../services/verifToken");

const router = express.Router();

const {
  login,
  editmdp,
  editmail,
} = require("../../../controllers/authActions");

router.post("/", login);

router.put("/", verifyToken, (req, res) => {
  const action = req.body.action;

  if (action === "editmdp") {
    return editmdp(req, res);
  } else if (action === "editmail") {
    return editmail(req, res);
  } else {
    return res.status(400).send("Action non valide");
  }
});

module.exports = router;
