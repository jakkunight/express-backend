const db = require("../db.js");
const { num_id, name_id, row_record } = require("../schemas.js");

const CRUD = {};

CRUD.read_table = async (table) => {
	try{
		const rows = await db.query("SELECT * FROM " + name_id.parse(table));
		return rows;
	}catch(error){
		console.error("[CRUD -> read_table()] FATAL ERROR!!!");
		console.error(error);
		throw new Error(error);
	}
};
CRUD.insert_row = async (table, row) => {
	try{
		const rows = await db.query("INSERT INTO " + name_id.parse(table) + " SET ?", [ row_record.parse(row) ]);
		const ok = {
			affected_rows: rows.affectedRows,
			changed_rows: rows.changedRows,
			insert_id: rows.insertId,
			message: 'QUERY OK'
		};
		return ok;
	}catch(error){
		console.error("[CRUD -> insert_row()] FATAL ERROR!!!");
		console.log(error);
		throw new Error(error);
	}
};
CRUD.update_row = async (table, row, id) => {
	try{
		const rows = await db.query("UPDATE " + name_id.parse(table) + " SET ? WHERE id = ?", [ row_record.parse(row), num_id.parse(id) ]);
		const ok = {
			affected_rows: rows.affectedRows,
			changed_rows: rows.changedRows,
			insert_id: rows.insertId,
			message: 'QUERY OK'
		};
		return ok;
	}catch(error){
		console.error("[CRUD -> update_row()] FATAL ERROR!!!");
		console.log(error);
		throw new Error(error);
	}
};
CRUD.delete_row = async (table, id) => {
	try{
		const rows = await db.query("DELETE FROM " + name_id.parse(table) + " WHERE id = ?", [ num_id.parse(id) ]);
		const ok = {
			affected_rows: rows.affectedRows,
			changed_rows: rows.changedRows,
			insert_id: rows.insertId,
			message: 'QUERY OK'
		};
		return ok;
	}catch(error){
		console.error("[CRUD -> delete_row()] FATAL ERROR!!!");
		console.log(error);
		throw new Error(error);
	}
};

module.exports = CRUD;
