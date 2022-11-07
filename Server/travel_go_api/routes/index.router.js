const express = require('express');

const router = express.Router();

const dataRouter = require("./data.router");

//rutas para api
router.use("/", dataRouter);

module.exports = router;
