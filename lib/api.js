const CRUD = require("./crud.js");
const { num_id, name_id, email, product } = require("../schemas.js");
const API = {};

API.insert_new_product = async (new_product) => {
	try{
		const result = await CRUD.insert_row("products", product.omit({ id: true }).parse(new_product));
		return result;
	}catch(error){
		console.error("[API -> insert_product()] FATAL ERROR!!!");
		console.error(error);
		throw new Error(error);
	}
};
API.read_products = async () => {
	try{
		const products = await CRUD.read_table("products");
		return products;
	}catch(error){
		console.error("[API -> read_products()] FATAL ERROR!!!");
		console.error(error);
		throw new Error(error);
	}
};
API.update_product_details = async (product_id, new_deatils) => {
	try{
		const product_details = product.pick({ name: true, description: true }).partial();
		const result = await CRUD.update_row("products", product_details.parse(new_details), num_id.parse(product_id));
		return result;
	}catch(error){
		console.error("[API -> update_product_details()] FATAL ERROR!!!");
		console.error(error);
		throw new Error(error);
	}
};
API.update_product_price = async (product_id, new_price) => {
	try{
		const result = await CRUD.update_row("products", product.pick({ sell_price: true }).parse(new_price), num_id.parse(product_id));
	}catch(error){
		console.error("[API -> update_product_price()] FATAL ERROR!!!");
		console.error(error);
		throw new Error(error);
	}
};
API.insert_existing_products = async (product_id, quantity) => {
};
API.delete_product = async (product_id) => {
};

module.exports = API;
