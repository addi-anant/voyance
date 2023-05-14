const express = require("express");
const router = express.Router();
const hotel_controller = require("../controllers/hotel_controller");

// Get individual hotel detail:
router.get("/info/:id", hotel_controller.info);

// Get featured hotel detail:
router.get("/featured-hotel", hotel_controller.featured_hotel);

// Get hotel by search:
router.get("/search", hotel_controller.search);

module.exports = router;
