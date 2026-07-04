const express = require("express");
const { getDBStatus } = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  const db = getDBStatus();
  res.json({
    status: "ok",
    service: "rosea-kool-server",
    timestamp: new Date().toISOString(),
    db,
  });
});

module.exports = router;
