namespace Aufgabe10 {
    export class Snowflake {
        x: number;
        y: number;
        size: number;
        dx: number;
        dy: number;

        fall(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 960) {
                this.y = 0;
            }
            if (this.x > 540) {
                this.x = 0;
            }
        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.strokeStyle = "lightgrey";
            crc2.stroke();
            crc2.closePath;
        }
    }
} 