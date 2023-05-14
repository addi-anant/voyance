const express = require("express");
const router = express.Router();
const { verifyToken } = require("../config/JWT_auth");
const user_controller = require("../controllers/user_controller");

/* update user: */
router.post("/updateInfo/:id", verifyToken, user_controller.updateInfo);

/* save wishlist: */
router.post("/saveWishlist", verifyToken, user_controller.saveWishlist);

module.exports = router;
