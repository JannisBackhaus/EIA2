var Aufgabe0_EIA2;
(function (Aufgabe0_EIA2) {
    function main() {
        var name = prompt("Wie darf ich dich nennen?");
        var node = document.getElementById("htmlcontent");
        var content = "";
        content += "Moin ";
        content += name;
        content += ", hier geht's zu meiner Javascript Datei:";
        console.log(content);
        node.innerHTML = content;
    }
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe0_EIA2 || (Aufgabe0_EIA2 = {}));
//# sourceMappingURL=Aufgabe_0.js.map