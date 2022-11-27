const express = require("express");

const router = express.Router();

/** general controller imported and all controllers create*/
const generalController = require("../controllers/generalData.controller");
const userController = require("../controllers/auth.controller");
const turisticPlaceController = require("../controllers/turisticplace.controller");
const commentsController = require("../controllers/comments.controller");

/*general validators*/
const generalValidator = require("../validators/general.validators");

/*middleware*/
const runValidator = require("../validators/middlewares/post.middleware");
const {authentication, authorization} = require("../middleware/auth.middlewares");

//Roles
const ROLS = require("../data/roles.constant.json");

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

//find view (admin administration) data
router.get("/adm/:dataSchema", generalController.findAllPlaces);

//find users data (user actions in client)
router.get("/user_adm/:dataSchema", generalController.findAll);

//Get all places
// router.get("/places", turisticPlaceController.findAll);
router.get("/places/:id", turisticPlaceController.findOne);
router.get("/places_info", turisticPlaceController.findAllPlaces);

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

//find one by id (in all collections)
router.get("/specific/:dataSchema/:identifier", 
    generalValidator.findByIdValidator, 
    runValidator,  
    generalController.findOneById
);


//delete one by id for admins only
router.delete("/delete/:dataSchema/:identifier",
    authentication,
    authorization(ROLS.ADMIN),
    generalValidator.findByIdValidator,
    runValidator,
    generalController.deleteById
);

//update one by given id for admins only
router.put("/update/:dataSchema/:identifier",
    authentication,
    authorization(ROLS.ADMIN),
    generalValidator.findByIdValidator,
    runValidator,
    generalController.updateById
);

module.exports = router;
