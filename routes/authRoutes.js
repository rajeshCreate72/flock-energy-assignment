const express = require("express");
const router = express.Router();
const auth = require("../portal/auth");

router.post("/", async (req, res) => {
  try {
    await auth.login();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
}); // POST login credentials

module.exports = router;
