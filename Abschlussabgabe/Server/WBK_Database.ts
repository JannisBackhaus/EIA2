
import * as Mongo from "mongodb";
console.log("Database starting");

interface OrderData {
    [key: string]: string;
}

interface Entrypoints {
    amount: string,
    item: string,
    price: string,
}

export interface StoredData {
    datatype: string;
    datastring: string;
}



interface Categories {
    [key: number]: Category;
}
interface Category {
    title: string;
    amount_type: string;
    amount: Amount;
    form_type: string;
    items: Item[];
}
interface Item {
    name: string;
    price: number;
}
interface Amount {
    steps: number[],
    display: string[],
}

//let databaseURL: string = "mongodb://localhost:27017";
//let databaseName: string = "Test";
let databaseURL: string = "mongodb://wbk:wbk1234@ds231987.mlab.com:31987/wbk2019jb";
let databaseName: string = "wbk2019jb";
let db: Mongo.Db;
let orders: Mongo.Collection;
let data: Mongo.Collection;

if (process.env.NODE_ENV == "production") {

    databaseURL = "mongodb://wbk:wbk1234@ds231987.mlab.com:31987/wbk2019jb";
    databaseName = "wbk2019jb";

}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
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

export function insertOrder(_doc: StoredData): void {
    orders.insertOne(_doc, handleInsert);
}

export function saveData(_doc: StoredData): void {
    data.deleteOne({});
    data.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function getData(_callback: Function): void {
    var cursor: Mongo.Cursor = data.find();

    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, dataArray: StoredData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(dataArray));
    }
}

