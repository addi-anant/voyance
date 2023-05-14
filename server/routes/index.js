const express = require("express");
const router = express.Router();

// for any route, we define the mapping here:
// router.use('/routerName', require('./routerFileName'));

router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/host", require("./host"));
router.use("/hotel", require("./hotel"));
router.use("/review", require("./review"));
router.use("/plan", require("./plan"));
router.use("/order", require("./order"));
router.use("/payment", require("./payment"));

module.exports = router;
