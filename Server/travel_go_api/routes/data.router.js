const express = require("express");

const router = express.Router();

/** general controller imported and all controllers create*/
const generalController = require("../controllers/generalData.controller");

const user = require("../controllers/user.controller");
const turisticplace = require("../controllers/turisticplace.controller");
const booking = require("../controllers/booking.controller");
const shoppingcart = require("../controllers/shoppingcart.controller");
const turisticplan = require("../controllers/turisticplan.controller");
const wishlist = require("../controllers/wishlist.controller");

router.get("/:dataSchema", generalController.findAll);

router.get("/:dataSchema/:identifier", generalController.findOneById);

//post direction routs

router.post("/user", user.create);
router.post("/turisticplace", turisticplace.create);
router.post("/booking", booking.create);
router.post("/shoppingcart", shoppingcart.create);
router.post("/turisticplan", turisticplan.create);
router.post("/wishlist", wishlist.create);


module.exports = router;
