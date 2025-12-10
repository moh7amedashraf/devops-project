const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect /api/ to /api/hello
app.get("/api/", (req, res) => {
  res.redirect("/api/hello");
});

// API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
