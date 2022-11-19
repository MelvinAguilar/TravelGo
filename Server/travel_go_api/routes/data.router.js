const express = require("express");

const router = express.Router();

/** general controller imported and all controllers create*/
const generalController = require("../controllers/generalData.controller");
const findUserByToken = require("../controllers/auth.controller");

/*general validators*/
const generalValidator = require("../validators/general.validators");

/*middleware*/
const runValidator = require("../validators/middlewares/post.middleware");

router.get("/:dataSchema", generalController.findAll);

router.get("/user/rol/:tokenIdentifier", findUserByToken.findByToken);

router.get("/:dataSchema/:identifier", 
generalValidator.findByIdValidator, 
runValidator,  
generalController.findOneById);


module.exports = router;
