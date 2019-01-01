namespace Aufgabe09 {
    var canvas: HTMLCanvasElement


    document.addEventListener("DOMContentLoaded", init);

    function init(): void {
        canvas = <HTMLCanvasElement>document.getElementById("canvas");
        createSlope();
        createCloud(30, 70);
        createPeople();
        createSun();
        createTrees(true, 5);
        createTrees(false, 3);
        createSnowflakes(70);
        createSleigh();
    }

    function createSlope(): void {

        let slope = canvas.getContext("2d");
        slope.beginPath();
        slope.moveTo(0, 800);
        slope.bezierCurveTo(200, 700, 300, 400, 545, 300);
        slope.lineWidth = 1;
        slope.lineTo(545, -5);
        slope.lineTo(-5, -5);
        slope.lineTo(-5, 960);
        slope.fillStyle = "#b3daff";
        slope.fill();
        slope.fill
        slope.strokeStyle = "lightgrey";
        slope.stroke();
    }

    function createSun() {
        let sun = canvas.getContext("2d");
        sun.beginPath();
        sun.arc(350, 120, 50, 0, 2 * Math.PI);
        sun.fillStyle = "yellow";
        sun.fill();
    }

    function createCloud(pos_x: number, pos_y: number): void {
        let cloud = canvas.getContext("2d");
        cloud.beginPath();
        cloud.arc(pos_x, pos_y, 30, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();

        cloud.arc(pos_x + 70, pos_x + 20, 50, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();

        cloud.arc(pos_x + 120, pos_y - 10, 40, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();

        cloud.fillRect(30, 70, 120, 30)
    }

    function createSnowflakes(amount: number): void {
        for (let i: number = 0; i < amount; i++) {
            var flake = canvas.getContext("2d");
            let x: number = Math.random() * flake.canvas.width;
            let y: number = Math.random() * flake.canvas.height;
            let size: number = (Math.random() * 5) + 2
            flake.beginPath();
            flake.arc(x, y, size, 0, 2 * Math.PI);
            flake.fillStyle = "white";
            flake.fill();
            flake.strokeStyle = "lightgrey";
            flake.stroke();
        }
    }

    function createPeople(): void {

        let x: number = 0
        let y: number = 0

        for (let i: number = 0; i < 3; i++) {

            let head = canvas.getContext("2d");

            head.beginPath();
            head.arc(420 + x, 400 + y, 10, 0, 2 * Math.PI);
            head.strokeStyle = "grey";
            head.lineWidth = 1;
            head.stroke();
            head.fillStyle = "pink";
            head.fill();
            head.closePath();

            let torso = canvas.getContext("2d");

            torso.beginPath();
            if (x == 40)
                torso.fillStyle = "lightblue";
            else if (x == 80)
                torso.fillStyle = "red";
            else
                torso.fillStyle = "green";
            torso.fillRect(410 + x, 410 + y, 20, 40);
            torso.closePath();

            let legs = canvas.getContext("2d");

            legs.beginPath();
            legs.fillStyle = "brown";
            legs.fillRect(410 + x, 450 + y, 9, 35);
            legs.fillRect(420 + x, 450 + y, 9, 35);
            legs.closePath();

            let arms = canvas.getContext("2d");

            arms.beginPath();
            if (x == 40)
                torso.fillStyle = "lightblue";
            else if (x == 80)
                torso.fillStyle = "red";
            else
                torso.fillStyle = "green";
            arms.fillRect(405 + x, 412 + y, 9, 35);
            arms.fillRect(427 + x, 412 + y, 9, 35);
            arms.closePath();

            x = x + 40;
            y = y - 20;
        }
    }

    function createTrees(type: boolean, amount: number): void {

        if (type == true) {

            for (let i: number = 0; i < amount; i++) {

                let tree = canvas.getContext("2d");

                let x: number = (Math.random() * (tree.canvas.width / 3)) + 2 * (tree.canvas.width / 3);
                let y: number = (Math.random() * (tree.canvas.height / 2)) + (tree.canvas.height / 2);
                let size: number = (Math.random() * 5) + 20

                tree.beginPath();
                tree.moveTo(x, y);
                tree.lineTo(x - 100, y);
                tree.lineTo(x - 50, y - 120);
                tree.lineTo(x, y);
                tree.fillStyle = "darkgreen";
                tree.fill();
                tree.closePath()

                let trunk = canvas.getContext("2d");

                trunk.beginPath();
                trunk.fillStyle = "#511e12";
                trunk.fillRect(x - 60, y, 20, 30);
                trunk.closePath();

            }
        }

        else {

            for (let i: number = 0; i < amount; i++) {

                let tree = canvas.getContext("2d");

                let x: number = (Math.random() * (tree.canvas.width / 3) + tree.canvas.width / 5);
                let y: number = (Math.random() * (tree.canvas.height / 5)) + 4 * (tree.canvas.height / 5);
                let size: number = (Math.random() * 5) + 20

                tree.beginPath();
                tree.moveTo(x, y);
                tree.lineTo(x - 100, y);
                tree.lineTo(x - 50, y - 120);
                tree.lineTo(x, y);
                tree.fillStyle = "darkgreen";
                tree.fill();
                tree.closePath()

                let trunk = canvas.getContext("2d");

                trunk.beginPath();
                trunk.fillStyle = "#511e12";
                trunk.fillRect(x - 60, y, 20, 30);
                trunk.closePath();


            }
        }
    }

    function createSleigh(): void {

        let sleigh = canvas.getContext("2d");

        sleigh.beginPath();
        sleigh.moveTo(300, 600);
        sleigh.lineTo(240, 660);
        sleigh.strokeStyle = "#7c5840";
        sleigh.lineWidth = 8;
        sleigh.arc(220, 660, 15, 1, 1.5 * Math.PI);
        sleigh.stroke();

        sleigh.beginPath();
        sleigh.moveTo(270, 610);
        sleigh.lineTo(240, 640);
        sleigh.lineWidth = 10;
        sleigh.strokeStyle = "brown";
        sleigh.stroke();
        sleigh.closePath();

        sleigh.beginPath();
        sleigh.moveTo(270, 610);
        sleigh.lineTo(240, 570);
        sleigh.lineWidth = 10;
        sleigh.strokeStyle = "blue";
        sleigh.stroke();

        sleigh.beginPath();
        sleigh.moveTo(240, 570);
        sleigh.lineTo(240, 610);
        sleigh.lineWidth = 10;
        sleigh.strokeStyle = "blue";
        sleigh.stroke();

        sleigh.beginPath();
        sleigh.arc(230, 560, 12, 0, 2 * Math.PI);
        sleigh.fillStyle = "pink";
        sleigh.fill();
        sleigh.strokeStyle = "grey";
        sleigh.lineWidth = 1;
        sleigh.stroke();
        sleigh.closePath();

    }
}