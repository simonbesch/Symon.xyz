const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const skillsRouter = require("./skills/router");
router.use("/skills", skillsRouter);

const parkourRouter = require("./parkour/router");
router.use("/parkour", parkourRouter);

const projetsRouter = require("./projets/router");
router.use("/projets", projetsRouter);

const authRouter = require("./auth/router");
router.use("/auth", authRouter);

const allInfosRouter = require("./allInfos/router");
router.use("/allInfos", allInfosRouter);

/* ************************************************************************* */

module.exports = router;
