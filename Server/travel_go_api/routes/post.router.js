const express = require("express");
const router = express.Router();

/* getting all controllers */
const userController = require("../controllers/auth.controller");
const turisticplaceController = require("../controllers/turisticplace.controller");
const bookingController = require("../controllers/booking.controller");
const shoppingcartController = require("../controllers/shoppingcart.controller");
const turisticplanController = require("../controllers/turisticplan.controller");
const wishlistController = require("../controllers/wishlist.controller");

//importing validators
const bookingValidator = require("../validators/booking.validators");
const shoppingcartValidator = require("../validators/shoppingcart.validators");
const userValidator = require("../validators/user.validators");
const turisticplaceValidator = require("../validators/turisticplace.validators");
const turisticplanValidator = require("../validators/turisticplan.validators");
const wishlistValidator = require("../validators/wishlist.validators");


//middleware
const runValidation = require("../validators/middlewares/post.middleware");

//sing up user
router.post("/singup", 
    userValidator.registerValidator,
    runValidation,
    userController.register
);

//sing in user
router.post("/singin",
    userController.singin
);

router.post("/turisticplace",
    turisticplaceValidator.createTuristicPlaceValidator,
    runValidation,
    turisticplaceController.create
);

router.post("/booking", 
    bookingValidator.createBookingValidator, 
    runValidation, 
    bookingController.create
);

router.post("/shoppingcart", 
    shoppingcartValidator.createShoppingCartValidator,
    runValidation,
    shoppingcartController.create
);

router.post("/turisticplan", 
    turisticplanValidator.createPlanValidator,
    runValidation,
    turisticplanController.create
);
router.post("/wishlist", 
    wishlistValidator.createWishListValidator,
    runValidation,
    wishlistController.create
);


module.exports = router;