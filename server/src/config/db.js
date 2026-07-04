const mongoose = require("mongoose");

let connectionAttempted = false;

async function connectDB() {
  connectionAttempted = true;
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "[db] MONGODB_URI not set — starting without a database connection. " +
        "Set MONGODB_URI in .env to enable it."
    );
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("[db] MongoDB connected");
  } catch (err) {
    console.error("[db] MongoDB connection failed:", err.message);
  }
}

/**
 * Maps mongoose.connection.readyState to a human string.
 * 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
 */
function getDBStatus() {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  return {
    attempted: connectionAttempted,
    state: states[mongoose.connection.readyState] ?? "unknown",
  };
}

module.exports = { connectDB, getDBStatus };
