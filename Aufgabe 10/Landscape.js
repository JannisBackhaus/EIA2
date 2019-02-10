var Aufgabe10;
(function (Aufgabe10) {
    function createSlope() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 800);
        Aufgabe10.crc2.bezierCurveTo(200, 700, 300, 400, 545, 300);
        Aufgabe10.crc2.lineWidth = 1;
        Aufgabe10.crc2.lineTo(545, -5);
        Aufgabe10.crc2.lineTo(-5, -5);
        Aufgabe10.crc2.lineTo(-5, 960);
        Aufgabe10.crc2.fillStyle = "#b3daff";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.fill;
        Aufgabe10.crc2.strokeStyle = "lightgrey";
        Aufgabe10.crc2.stroke();
    }
    Aufgabe10.createSlope = createSlope;
    function createSun() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(350, 120, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "yellow";
        Aufgabe10.crc2.fill();
    }
    Aufgabe10.createSun = createSun;
    function createCloud(pos_x, pos_y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(pos_x, pos_y, 30, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "white";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.arc(pos_x + 70, pos_x + 20, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "white";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.arc(pos_x + 120, pos_y - 10, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "white";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.fillRect(30, 70, 120, 30);
    }
    Aufgabe10.createCloud = createCloud;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Landscape.js.map