var Aufgabe10;
(function (Aufgabe10) {
    class Snowflake {
        fall() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 960) {
                this.y = 0;
            }
            if (this.x > 540) {
                this.x = 0;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "white";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "lightgrey";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath;
        }
    }
    Aufgabe10.Snowflake = Snowflake;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Snowflake.js.map