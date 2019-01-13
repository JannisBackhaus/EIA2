namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snowflake[] = [];
    let trees: Tree[] = [];
    let people: Person[] = [];
    let colors: string[] = ["green", "blue", "red", "yellow", "purple", "black", "grey", "lightblue", "lightgreen"]
    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        for (let i: number = 0; i < 150; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * crc2.canvas.height;
            snowflake.dx = Math.random() * 2 - 1;
            snowflake.dy = Math.random() * 2 + 1;
            snowflake.size = (Math.random() * 5) + 2;
            snowflakes.push(snowflake);
        }

        for (let i: number = 0; i < 12; i++) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;
            if (tree.y > (canvas.height - tree.x * 1.08)) {
                trees.push(tree);
            }
            else { i-- }
        }

        for (let i: number = 0; i < 6; i++) {
            let person: Person = new Person();

            person.x = Math.random() * crc2.canvas.width;
            person.y = Math.random() * crc2.canvas.height;
            person.dy = Math.random() * 8 + 4
            person.dx = -person.dy;
            person.color = colors[i]
            if (person.y > (canvas.height - person.x * 1.08)) {
                people.push(person);
            }
            else { i-- }
        }
        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        createSlope();
        createSun();
        createCloud(30, 70);

        for (let i: number = 0; i < snowflakes.length; i++) {
            let snowflake: Snowflake = snowflakes[i];
            snowflake.fall();
            snowflake.draw();
        }
        for (let i: number = 0; i < people.length; i++) {
            let person: Person = people[i];
            if ((i % 2) == 0) {
                person.drawMovingDown();
                person.moveDown()
            }
            else 
                { person.drawMovingUp();
                person.moveUp();
                }
        }
        for (let i: number = 0; i < trees.length; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }
        console.log("Update");
    }
}