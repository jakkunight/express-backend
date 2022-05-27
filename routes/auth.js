const express = require("express");
const router = express.Router();

/*
	HTTP (most common) METHODS:
	 * GET
	 * POST
	 * PUT
	 * DELETE
	 * OPTIONS
*/

router.get("/auth/login/", (req, res) => {
	const answer = {
		msg: "Logged in."
	};
	res.json(JSON.stringify(answer));
});

router.post("/auth/login/", (req, res) => {
	res.sendStatus(200);
});

module.exports = router;
