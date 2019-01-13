namespace Aufgabe10 {
    export class Tree {
        x: number;
        y: number;

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 100, this.y);
            crc2.lineTo(this.x - 50, this.y - 120);
            crc2.lineTo(this.x, this.y);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath()
            
            crc2.beginPath();
            crc2.fillStyle = "#511e12";
            crc2.fillRect(this.x - 60, this.y, 20, 30);
            crc2.closePath();
        }
    }
} 