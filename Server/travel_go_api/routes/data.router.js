const express = require("express");

const router = express.Router();

/** general controller imported and all controllers create*/
const generalController = require("../controllers/generalData.controller");
const userController = require("../controllers/auth.controller");
const turisticPlaceController = require("../controllers/turisticplace.controller");
const commentsController = require("../controllers/comments.controller");

/*general validators*/
const generalValidator = require("../validators/general.validators");
const {authentication} = require("../middleware/auth.middlewares");

/*middleware*/
const runValidator = require("../validators/middlewares/post.middleware");

//find user role by token
router.get("/user/rol/", 
    authentication,
    userController.findRoleByToken
);

//find user by token
router.get("/user/profile/", 
    authentication,
    userController.findUserByToken
);

//find client data 
router.get("/adm/:dataSchema", generalController.findAllPlaces);

//find users all data
router.get("/user_adm/:dataSchema", generalController.findAll);

//find places per targs and name
router.get("/place_tag/:tag", turisticPlaceController.findByTag);
router.get("/place_name/:name", turisticPlaceController.findByName);

//find comments by place
router.get("/place_comment/:place", commentsController.findByPlace);

//find data per user
router.get("/own/:Schema", 
    authentication,
    generalController.findOwn
);

//find one by id 
router.get("/:dataSchema/:identifier", 
    generalValidator.findByIdValidator, 
    runValidator,  
    generalController.findOneById
);



module.exports = router;
