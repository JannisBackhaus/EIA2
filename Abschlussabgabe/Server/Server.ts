import * as Http from "http";
import * as Url from "url";

namespace WBKreloaded {
    console.log("Starting server");
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;


    interface Data { [key: string]: string; }

    let order: Data = {};

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        let url_object = Url.parse(_request.url, true);
        let query = url_object.query;
        if (url_object.pathname != "/favicon.ico") {
            console.log(query);
            order = query;
            console.log(order);
        }
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _request.url;

        for (let i in order) {

            _response.write(i);
        }
        console.log();
        _response.end();
    }

}  