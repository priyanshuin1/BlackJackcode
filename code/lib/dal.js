var config = require('./../config');
var databaseUrl;
// var config = JSON.parse(process.env.APP_CONFIG);
if (config.database.mode==='BlackjackDB'){
	databaseUrl ="BlackjackDB"; 
} else {
	databaseUrl = "mongodb://" + config.database.username + ":"+  config.database.password +"@" + config.database.host + ":" + config.database.port + "/" + config.database.dbname;
}
var collections = ["users", "tables","sessions"];
var db = require("mongojs")(databaseUrl, collections);



var DAL={db:db};


module.exports = DAL;