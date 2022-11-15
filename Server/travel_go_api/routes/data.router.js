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

router.post("/post/user", user.create);
router.post("/post/turisticplace", turisticplace.create);
router.post("/post/booking", booking.create);
router.post("/post/shoppingcart", shoppingcart.create);
router.post("/post/turisticplan", turisticplan.create);
router.post("/post/wishlist", wishlist.create);


module.exports = router;
