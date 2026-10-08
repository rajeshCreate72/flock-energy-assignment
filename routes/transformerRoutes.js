const express = require("express");
const router = express.Router();
const transformerController = require("../controllers/transformerController");

router.get("/", transformerController.getTransformers); // GET /transformers

module.exports = router;
