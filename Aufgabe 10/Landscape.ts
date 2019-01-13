namespace Aufgabe10 {
    export function createSlope(): void {

        crc2.beginPath();
        crc2.moveTo(0, 800);
        crc2.bezierCurveTo(200, 700, 300, 400, 545, 300);
        crc2.lineWidth = 1;
        crc2.lineTo(545, -5);
        crc2.lineTo(-5, -5);
        crc2.lineTo(-5, 960);
        crc2.fillStyle = "#b3daff";
        crc2.fill();
        crc2.fill
        crc2.strokeStyle = "lightgrey";
        crc2.stroke();
    }  

    export function createSun() {
        crc2.beginPath();
        crc2.arc(350, 120, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
    }

   export function createCloud(pos_x: number, pos_y: number): void {
       
        crc2.beginPath();
        crc2.arc(pos_x, pos_y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.arc(pos_x + 70, pos_x + 20, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.arc(pos_x + 120, pos_y - 10, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.fillRect(30, 70, 120, 30)
    }
} 