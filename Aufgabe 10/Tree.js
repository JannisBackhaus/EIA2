var Aufgabe10;
(function (Aufgabe10) {
    class Tree {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 100, this.y);
            Aufgabe10.crc2.lineTo(this.x - 50, this.y - 120);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.fillStyle = "darkgreen";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#511e12";
            Aufgabe10.crc2.fillRect(this.x - 60, this.y, 20, 30);
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.Tree = Tree;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Tree.js.map