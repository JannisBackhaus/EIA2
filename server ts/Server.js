"use strict";
const Http = require("http"); //importiert den gesamten Inhalt eines Moduls als HTTP-Object
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsoleneintrag
    let port = process.env.PORT; // Variable mit Wert des mitgelieferten Ports
    if (port == undefined)
        port = 8100; //  soll die Variable port auf 8100 gesetzt werden
    let server = Http.createServer(); // Auf Grundlage des HTTP-Moduls wird ein server erstellt und mit der Variable server gespeichert
    server.addListener("request", handleRequest); // Listener auf request-Anfragen mit "handleRequest" als Handler
    server.addListener("listening", handleListen); // Listener auf Serververbindung mit "handleListen" als Handler
    server.listen(port); // Server sucht nach Verbindung mit bestimmtem port
    function handleListen() {
        console.log("Listening"); // Konsoleneintrag "Listening"
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsoleneintrag
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Header der HTML Client Datei wird ver�ndert
        _response.setHeader("Access-Control-Allow-Origin", "*"); // erlaubt dem Server Zugriff auf das Modul
        _response.write(_request.url); // schreibt Serverantwort als Daten in die URL
        _response.end(); // beendet Serverantwort
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map