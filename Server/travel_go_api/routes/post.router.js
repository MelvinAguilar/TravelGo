
const express = require("express");
const router = express.Router();
const ROLS = require("../data/roles.constant.json");

/* getting all controllers */
const userController = require("../controllers/auth.controller");
const turisticplaceController = require("../controllers/turisticplace.controller");
const bookingController = require("../controllers/booking.controller");
const shoppingcartController = require("../controllers/shoppingcart.controller");
const turisticplanController = require("../controllers/turisticplan.controller");
const wishlistController = require("../controllers/wishlist.controller");
const commentsController = require("../controllers/comments.controller");

//importing validators
const generalValidator = require("../validators/general.validators");
const bookingValidator = require("../validators/booking.validators");
const shoppingcartValidator = require("../validators/shoppingcart.validators");
const userValidator = require("../validators/user.validators");
const turisticplaceValidator = require("../validators/turisticplace.validators");
const turisticplanValidator = require("../validators/turisticplan.validators");
const wishlistValidator = require("../validators/wishlist.validators");
const commentsValidator = require("../validators/comments.validators");


//middleware
const runValidation = require("../validators/middlewares/post.middleware");
const {authentication, authorization} = require("../middleware/auth.middlewares");

//sing up user for users
router.post("/singup", 
    userValidator.registerValidator,
    runValidation,
    userController.register
);

//sing in user for users
router.post("/singin",
    userController.singin
);

//for admins only
router.post("/turisticplace",
    authentication,
    authorization(ROLS.ADMIN),
    turisticplaceValidator.createTuristicPlaceValidator,
    runValidation,
    turisticplaceController.create
    );
    
//for user 
router.post("/booking", 
    authentication,
    authorization(ROLS.USER),
    bookingValidator.createBookingValidator, 
    runValidation, 
    bookingController.create
    );
    
//for user
router.post("/shoppingcart", 
    shoppingcartValidator.createShoppingCartValidatorFirst,
    runValidation,
    shoppingcartController.create
    );
    
//function to add items on shopping cart
router.patch("/shoppingcart",
    authentication,
    authorization(ROLS.USER),
    shoppingcartValidator.createShoppingCartValidatorUser,
    runValidation,
    shoppingcartController.patchShoppingCart
);

//function to remove items bought on shopping cart
router.patch("/shoppingcart/bought",
    authentication,
    shoppingcartController.patchShoppingCartItemBought
);
//for admin only
router.post("/turisticplan", 
    authentication,
    authorization(ROLS.ADMIN),
    turisticplanValidator.createPlanValidator,
    runValidation,
    turisticplanController.create
    );
    
//for user
router.post("/wishlist", 
    wishlistValidator.createWishListValidator,
    runValidation,
    wishlistController.create
    );

//toogle wish list
router.patch("/wishlist/:identifier",
    authentication,
    authorization(ROLS.USER),
    generalValidator.findByIdValidator,
    runValidation,
    wishlistController.toogleWishList
);
    
//for user
router.post("/comment",
    authentication,
    authorization(ROLS.USER),
    commentsValidator.createCommentsValidator,
    runValidation,
    commentsController.create
);    
    module.exports = router;