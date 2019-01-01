var Aufgabe09;
(function (Aufgabe09) {
    var canvas;
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        canvas = document.getElementById("canvas");
        createSlope();
        createCloud(30, 70, 30);
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
        cloud.arc(pos_x, pos_y, size, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();
        cloud.arc(pos_x + 70, pos_x + 20, size + 20, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();
        cloud.arc(pos_x + 120, pos_y - 10, size + 10, 0, 2 * Math.PI);
        cloud.fillStyle = "white";
        cloud.fill();
        cloud.fillRect(30, 70, 120, size);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=canvas.js.map