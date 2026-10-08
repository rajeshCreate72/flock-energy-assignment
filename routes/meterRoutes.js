const express = require("express");
const router = express.Router();
const meterController = require("../controllers/meterController");

router.get("/", meterController.getMeters); // Get all 403 - meteres
router.get("/filter-meters", meterController.getFilterMeters); // GET /meters?status=&make=&phase=

module.exports = router;
