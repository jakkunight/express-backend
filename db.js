const mysql = require("mysql");
const { promisify } = require("util");

const db = mysql.createPool({
	database: "db_test", // "test"
	host: "127.0.0.1", // "i36l79tdjaxk.us-east-4.psdb.cloud"
	user: "root", // "poj6vpdtekt4"
	password: "", // "pscale_pw_qdfrzh5qV6zEaZs6hQuTENrkmrTKCzm4a3szS4vTfWo"
});

db.getConnection((error, connection) => {
	if(error){
		console.error("DATABASE NOT CONNECTED!!!");
		console.error(error);
	}else{
		console.log("DATABASE CONNECTED!!!");
	}
});

db.query = promisify(db.query);

module.exports = db;
