const mysql = require("mysql");
const { promisify } = require("util");

const db = mysql.createPool({
	database: "test",
	host: "i36l79tdjaxk.us-east-4.psdb.cloud",
	user: "poj6vpdtekt4",
	password: "pscale_pw_qdfrzh5qV6zEaZs6hQuTENrkmrTKCzm4a3szS4vTfWo",
});

db.getConnection((error, connection) => {
	if(error){
		console.error("DATABASE NOT CONNECTED!!!");
		console.error(error);
	}else{
		console.log("DATABASE CONNECTED!!!");
		console.log(connection);
	}
});

db.query = promisify(db.query);

module.exports = db;
