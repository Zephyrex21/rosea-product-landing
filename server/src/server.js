require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const healthRoute = require("./routes/health");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoute);

app.get("/", (req, res) => {
  res.json({ message: "Roséa API is running. Try /api/health." });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[server] Roséa API listening on http://localhost:${PORT}`);
  });
}

start();
