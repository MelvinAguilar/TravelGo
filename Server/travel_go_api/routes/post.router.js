const express = require("express");
const router = express.Router();

/* getting all controllers */
const user = require("../controllers/user.controller");
const turisticplace = require("../controllers/turisticplace.controller");
const booking = require("../controllers/booking.controller");
const shoppingcart = require("../controllers/shoppingcart.controller");
const turisticplan = require("../controllers/turisticplan.controller");
const wishlist = require("../controllers/wishlist.controller");

//importing validators
const bookingValidator = require("../validators/booking.validators");
const shoppingcartValidator = require("../validators/shoppingcart.validators");
const userValidator = require("../validators/user.validators");
const turisticplaceValidator = require("../validators/turisticplace.validators");
const turisticplanValidator = require("../validators/turisticplan.validators");
const wishlistValidator = require("../validators/wishlist.validators");


//middleware
const runValidation = require("../validators/middlewares/post.middleware");

router.post("/singup", 
    userValidator.registerValidator,
    runValidation,
    user.register
);

router.post("/turisticplace",
    turisticplaceValidator.createTuristicPlaceValidator,
    runValidation,
    turisticplace.create
);

router.post("/booking", 
    bookingValidator.createBookingValidator, 
    runValidation, 
    booking.create
);

router.post("/shoppingcart", 
    shoppingcartValidator.createShoppingCartValidator,
    runValidation,
    shoppingcart.create
);

router.post("/turisticplan", 
    turisticplanValidator.createPlanValidator,
    runValidation,
    turisticplan.create
);
router.post("/wishlist", 
    wishlistValidator.createWishListValidator,
    runValidation,
    wishlist.create
);


module.exports = router;