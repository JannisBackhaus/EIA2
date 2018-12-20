var Aufgabe09;
(function (Aufgabe09) {
    var canvas;
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        canvas = document.getElementById("canvas");
        createSlope();
    }
    function createSlope() {
        var slope = canvas.getContext("2d");
        slope.beginPath();
        slope.moveTo(0, 800);
        slope.bezierCurveTo(200, 700, 300, 400, 545, 300);
        slope.lineWidth = 1;
        slope.lineTo(545, -5);
        slope.lineTo(-5, -5);
        slope.lineTo(-5, 960);
        slope.fillStyle = "#b3daff";
        slope.fill();
        slope.fill;
        slope.stroke();
    }
    function createCloud(pos_x, pos_y, size) {
        var cloud = canvas.getContext("2d");
        cloud.beginPath();
        cloud.moveTo();
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=canvas.js.map