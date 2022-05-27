const express = require("express");
const router = express.Router();
const API = require("../lib/api.js");

router.get("/products/", async (req, res) => {
	try{
		const product = {
			name: "Test de F\u00EDsica",
			description: "Cuestionarios especiales para estudiar f\u00EDsica pre-universitaria.",
			cost: 0,
			sell_price: 0,
			quantity: 1
		};
		const data = await API.read_products();
		res.json(await JSON.stringify(data));
	}catch(error){
		console.error("FATAL ERROR!!!");
		console.error(error);
		res.sendStatus(400);
	}
});

module.exports = router;
