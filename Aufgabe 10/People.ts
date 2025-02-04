namespace Aufgabe10 {
    export class Person {
        x: number;
        y: number;
        size: number;
        dx: number;
        dy: number;
        color: string;

        moveDown(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x < 0) {
                this.x = 640;
                this.y = this.y - 645
            }
        }

        moveUp(): void {
            this.x -= -2 ;
            this.y -=  2;

            if (this.x > 640) {
                this.x = 0;
                this.y = this.y + 645
            }
        }

        drawMovingUp(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 60, this.y - 60);
            crc2.strokeStyle = "#7c5840";
            crc2.lineWidth = 6;
            crc2.arc(this.x + 50 , this.y - 70, 15, 1, 1.1 * Math.PI,true);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 90, this.y - 130);
            crc2.lineTo(this.x + 90, this.y - 90);
            crc2.lineWidth = 10;
            crc2.strokeStyle = "brown";
            crc2.stroke();
            crc2.closePath();

            
            crc2.beginPath();
            crc2.moveTo(this.x + 90, this.y - 190);
            crc2.lineTo(this.x + 90, this.y - 130);
            crc2.lineWidth = 10;
            crc2.strokeStyle = this.color;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 90, this.y - 190);
            crc2.lineTo(this.x + 70, this.y - 140);
            crc2.lineWidth = 10;
            crc2.strokeStyle = this.color;
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y - 140);
            crc2.lineTo(this.x + 50, this.y - 85);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "grey";
            crc2.stroke();
            
            crc2.beginPath();
            crc2.arc(this.x + 90, this.y - 190, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.closePath();
        }
        drawMovingDown(): void { 
        crc2.beginPath();
            crc2.moveTo(this.x - 60, this.y + 60);
            crc2.lineTo(this.x, this.y);
            crc2.strokeStyle = "#7c5840";
            crc2.lineWidth = 6;
            crc2.arc(this.x - 80, this.y + 60, 15, 1, 1.5 * Math.PI);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y + 10);
            crc2.lineTo(this.x - 60, this.y + 40);
            crc2.lineWidth = 10;
            crc2.strokeStyle = "brown";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y + 10);
            crc2.lineTo(this.x - 60, this.y - 30);
            crc2.lineWidth = 10;
            crc2.strokeStyle = this.color;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 60, this.y - 30);
            crc2.lineTo(this.x - 60, this.y + 10);
            crc2.lineWidth = 10;
            crc2.strokeStyle = this.color;
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(this.x - 70, this.y - 40, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.closePath();};
    }
} 