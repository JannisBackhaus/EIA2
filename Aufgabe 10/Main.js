var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let trees = [];
    let people = [];
    let colors = ["green", "blue", "red", "yellow", "purple", "black", "grey", "lightblue", "lightgreen"];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        for (let i = 0; i < 150; i++) {
            let snowflake = new Aufgabe10.Snowflake();
            snowflake.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snowflake.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snowflake.dx = Math.random() * 2 - 1;
            snowflake.dy = Math.random() * 2 + 1;
            snowflake.size = (Math.random() * 5) + 2;
            snowflakes.push(snowflake);
        }
        for (let i = 0; i < 12; i++) {
            let tree = new Aufgabe10.Tree();
            tree.x = Math.random() * Aufgabe10.crc2.canvas.width;
            tree.y = Math.random() * Aufgabe10.crc2.canvas.height;
            if (tree.y > (canvas.height - tree.x * 1.08)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 10; i++) {
            let person = new Aufgabe10.Person();
            person.x = Math.random() * Aufgabe10.crc2.canvas.width;
            person.y = Math.random() * Aufgabe10.crc2.canvas.height;
            person.dy = Math.random() * 8 + 4;
            person.dx = -person.dy;
            person.color = colors[i];
            if (person.y > (canvas.height - person.x * 1.08)) {
                people.push(person);
            }
            else {
                i--;
            }
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe10.crc2.clearRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        Aufgabe10.createSlope();
        Aufgabe10.createSun();
        Aufgabe10.createCloud(30, 70);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.fall();
            snowflake.draw();
        }
        for (let i = 0; i < people.length; i++) {
            let person = people[i];
            if ((i % 2) == 0) {
                person.drawMovingDown();
                person.moveDown();
            }
            else {
                person.drawMovingUp();
                person.moveUp();
            }
        }
        for (let i = 0; i < trees.length; i++) {
            let tree = trees[i];
            tree.draw();
        }
        console.log("Update");
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Main.js.map