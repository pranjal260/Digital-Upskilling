const express = require("express");
const router = express.Router();

// ✅ Test route to confirm backend connection
router.get("/test", (req, res) => {
  res.json({ message: "Backend connected successfully ✅" });
});

// (Optional) — you can add more routes below later, like:
// router.post("/register", (req, res) => { ... });
// router.get("/all", (req, res) => { ... });

module.exports = router;
