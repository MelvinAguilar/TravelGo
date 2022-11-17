const express = require('express');

const router = express.Router();

const dataRouter = require("./data.router");
const postGeneralController = require("./post.router");


//get directions 
router.use("/", dataRouter);
//post direction 
router.use("/", postGeneralController);


module.exports = router;
