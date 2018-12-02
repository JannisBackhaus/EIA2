import * as Http from "http";                           // importiert ein Modul als HTTP-Object

namespace L06_SendData {                                // erstellt ein Namespace mit dem gleichen Namen wie in SendData.ts
    console.log("Starting server");                     // Konsoleneintrag
    let port: number = process.env.PORT;                // erstellt eine Nummer-Variable mit der Portummer die der Client mitgibt als Wert
    if (port == undefined)                              // falls die Variable nicht definiert ist
        port = 8100;                                    // soll der Wert gleich 8100 sein

    let server: Http.Server = Http.createServer();      // erstellt eine Variable vom Typ Http.Server. Als Wert wird auf Basis des HTTP Objects ein Server erstellt
    server.addListener("request", handleRequest);       // die "server"-Variable bekommt einen Listener der auf "request" hört. Handler ist die Funktion handleRequest
    server.addListener("listening", handleListen);      // die "server"-Variable bekommt einen Listener der auf "listening" hört. Handler ist die Funktion handleListen
    server.listen(port);                                // der Server hört darauf welcher Port benutzt wird, und akzeptiert Eingänge von diesem Port

    function handleListen(): void {                     // Funktionsdeklaration
        console.log("Listening");                       // Konsoleneintrag
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {      // Funktionsdeklaration. Übergabeparameter sind die gesendeten Daten des HTTP Clients und die Server-Antwort darauf
        console.log("I hear voices!");                                                                  // Konsoleneintrag

        _response.setHeader("content-type", "text/html; charset=utf-8");                                // als Antwort wird der Header der HTML Datei verändert
        _response.setHeader("Access-Control-Allow-Origin", "*");                                        // erlaubt Zugriff auf den Access Client sodass die Antwort des Servers an den Nutzer weitergeleitet werden kann

        _response.write(_request.url);                                                                  // schreibt Antwort in die URL des Clients
        console.log(_request.url);
        _response.end();                                                                                // beendet die Antwort des Servers
    }
     
}  