var Aufgabe10;
(function (Aufgabe10) {
    class Person {
        moveDown() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 640;
                this.y = this.y - 645;
            }
        }
        moveUp() {
            this.x -= -2;
            this.y -= 2;
            if (this.x > 640) {
                this.x = 0;
                this.y = this.y + 645;
            }
        }
        drawMovingUp() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 60, this.y - 60);
            Aufgabe10.crc2.strokeStyle = "#7c5840";
            Aufgabe10.crc2.lineWidth = 6;
            Aufgabe10.crc2.arc(this.x + 50, this.y - 70, 15, 1, 1.1 * Math.PI, true);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 90, this.y - 130);
            Aufgabe10.crc2.lineTo(this.x + 90, this.y - 90);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = "brown";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 90, this.y - 190);
            Aufgabe10.crc2.lineTo(this.x + 90, this.y - 130);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 90, this.y - 190);
            Aufgabe10.crc2.lineTo(this.x + 70, this.y - 140);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 70, this.y - 140);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 85);
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.strokeStyle = "grey";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 90, this.y - 190, 12, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "pink";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "grey";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
        }
        drawMovingDown() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 60, this.y + 60);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.strokeStyle = "#7c5840";
            Aufgabe10.crc2.lineWidth = 6;
            Aufgabe10.crc2.arc(this.x - 80, this.y + 60, 15, 1, 1.5 * Math.PI);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 30, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x - 60, this.y + 40);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = "brown";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 30, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x - 60, this.y - 30);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 60, this.y - 30);
            Aufgabe10.crc2.lineTo(this.x - 60, this.y + 10);
            Aufgabe10.crc2.lineWidth = 10;
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x - 70, this.y - 40, 12, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "pink";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "grey";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
        }
        ;
    }
    Aufgabe10.Person = Person;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=People.js.map