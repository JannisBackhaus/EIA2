
import * as Mongo from "mongodb";
console.log("Database starting");

interface Order {
    [key: number]: Entrypoints;
}

interface Entrypoints {
    amount: string,
    item: string,
    price: string,
}


interface Categories {
    [key: string]: Category;
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

let databaseURL: string
let databaseName: string
let db: Mongo.Db;
let orders: Mongo.Collection;
let data: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb://access:safepassword1234@ds231987.mlab.com:31987/wbk2019jb";
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
        db = _db.db(databaseName);
        orders = db.collection("orders");
        data = db.collection("data");
    }
}

export function insertOrder(_doc: Order): void {
    orders.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

function saveData(_doc: Categories): void {
    data.remove(_doc);
    data.insertOne(_doc, handleInsert);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = orders.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, orderArray: Entrypoints[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(orderArray));
    }
}
