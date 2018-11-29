import * as Http from "http";                        //importiert den gesamten Inhalt eines Moduls als HTTP-Object

namespace L06_SendData {                            // selber namespace wie in SendData.ts
    console.log("Starting server");                 // Konsoleneintrag
    let port: number = process.env.PORT;            // Variable mit Wert des mitgelieferten Ports
    if (port == undefined)                          //  Falls der Port nicht definiert war,
        port = 8100;                                //  soll die Variable port auf 8100 gesetzt werden

    let server: Http.Server = Http.createServer();  // Auf Grundlage des HTTP-Moduls wird ein server erstellt und mit der Variable server gespeichert
    server.addListener("request", handleRequest);   // Listener auf request-Anfragen mit "handleRequest" als Handler
    server.addListener("listening", handleListen);  // Listener auf Serververbindung mit "handleListen" als Handler
    server.listen(port);                            // Server sucht nach Verbindung mit bestimmtem port

    function handleListen(): void {                 // wenn Funktion angesteuert
        console.log("Listening");                   // Konsoleneintrag "Listening"
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  // Serveranfrage mit eingehenden Http-Daten aus Modul, Serverantwort als ausgende Http-Daten
        console.log("I hear voices!");              // Konsoleneintrag

        _response.setHeader("content-type", "text/html; charset=utf-8");        // Header der HTML Client Datei wird verändert
        _response.setHeader("Access-Control-Allow-Origin", "*");                // erlaubt dem Server Zugriff auf das Modul

        _response.write(_request.url);                                          // schreibt Serverantwort als Daten in die URL
        
        _response.end();                                                        // beendet Serverantwort
    }
}