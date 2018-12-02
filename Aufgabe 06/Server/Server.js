"use strict";
const Http = require("http"); // importiert ein Modul als HTTP-Object
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsoleneintrag
    let port = process.env.PORT; // erstellt eine Nummer-Variable mit der Portummer die der Client mitgibt als Wert
    if (port == undefined)
        port = 8100; // soll der Wert gleich 8100 sein
    let server = Http.createServer(); // erstellt eine Variable vom Typ Http.Server. Als Wert wird auf Basis des HTTP Objects ein Server erstellt
    server.addListener("request", handleRequest); // die "server"-Variable bekommt einen Listener der auf "request" h�rt. Handler ist die Funktion handleRequest
    server.addListener("listening", handleListen); // die "server"-Variable bekommt einen Listener der auf "listening" h�rt. Handler ist die Funktion handleListen
    server.listen(port); // der Server h�rt darauf welcher Port benutzt wird, und akzeptiert Eing�nge von diesem Port
    function handleListen() {
        console.log("Listening"); // Konsoleneintrag
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsoleneintrag
        _response.setHeader("content-type", "text/html; charset=utf-8"); // als Antwort wird der Header der HTML Datei ver�ndert
        _response.setHeader("Access-Control-Allow-Origin", "*"); // erlaubt Zugriff auf den Access Client sodass die Antwort des Servers an den Nutzer weitergeleitet werden kann
        _response.write(_request.url); // schreibt Antwort in die URL des Clients
        console.log(_request.url);
        _response.end(); // beendet die Antwort des Servers
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map