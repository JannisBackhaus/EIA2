var Boxes;
(function (Boxes) {
    function main() {
        let n = 5;
        let c;
        let x = 0;
        let y = 0;
        for (let i = 0; i < n; i++) {
            console.log("wieder oben | i = " + i);
            y += (i == 2) ? 20 : 50;
            x = (x + 170) % 400;
            switch (i) {
                case 0:
                    c = "#ff0000";
                    break;
                case 1:
                case 4:
                    c = "#00ff00";
                    break;
                case 3:
                    console.log("vor continue i = " + i);
                    continue;
                default:
                    c = "#0000ff";
            }
            console.log("for schleife 2 | i = " + i);
            for (let a = 50; a > 0; a -= 20) {
                placeDiv(c, x, y, a, a);
                if (i == 4)
                    break;
            }
        }
        function placeDiv(_color, _x, _y, _width, _height) {
            let div = document.createElement("div"); // Variable div deklariert / vom Typ HTMLDivElement / div-Container wird dynamisch im HTML erzeugt 
            document.body.appendChild(div); // an den HTML-body wird der div-Container angeh�ngt
            var a = 0;
            let s = div.style; // Variable s deklariert / vom Typ CSS-Deklaration / .style bearbeitet den CSS-Style von Variable div //
            s.border = "thin solid black"; // border wird bearbeitet
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = _width + "px";
            s.height = _height + "px";
            s.left = _x + "px";
            s.top = _y + "px";
        }
    }
    document.addEventListener('DOMContentLoaded', main);
})(Boxes || (Boxes = {}));
//# sourceMappingURL=boxes.js.map