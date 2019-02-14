"use strict";
const Mongo = require("mongodb");
console.log("Database starting");
//let databaseURL: string = "mongodb://localhost:27017";
//let databaseName: string = "Test";
let databaseURL = "mongodb://wbk:wbk1234@ds231987.mlab.com:31987/wbk2019jb";
let databaseName = "wbk2019jb";
let db;
let orders;
let data;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb://wbk:wbk1234@ds231987.mlab.com:31987/wbk2019jb";
    databaseName = "wbk2019jb";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);
// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e, _db) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        console.log(databaseURL);
        db = _db.db(databaseName);
        orders = db.collection("orders");
        data = db.collection("data");
    }
}
function insertOrder(_doc) {
    orders.insertOne(_doc, handleInsert);
}
exports.insertOrder = insertOrder;
function saveData(_doc) {
    data.deleteOne({});
    data.insertOne(_doc, handleInsert);
}
exports.saveData = saveData;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function getData(_callback) {
    var cursor = data.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, dataArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(dataArray));
    }
}
exports.getData = getData;
//# sourceMappingURL=WBK_Database.js.map