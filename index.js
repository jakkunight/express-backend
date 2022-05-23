const express = require("express");
const path = require("path");
const db = require("./db.js");
const fileupload = require("express-fileupload");

// Setup:
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));

// Midlewares:
app.use(fileupload());
app.use((req, res, next) => {
	console.log(`[${req.method.toUpperCase()}] ${req.protocol.toLowerCase()}://localhost:${app.get("port")}${req.url}`);
	next();
});

// Routes:


// Startup:
app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`);
});
