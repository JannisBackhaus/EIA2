var Aufgabe05;
(function (Aufgabe05) {
    function main() {
        createHTML();
        createEventListener(event);
    }
    let overview = [];
    function createHTML() {
        // Baumart
        for (let i = 0; i < Aufgabe05.tree.length; i++) {
            let ele = document.createElement("option");
            document.getElementById("tree_form").appendChild(ele);
            ele.classList.add("tree_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("value", "" + i);
            ele.innerHTML = Aufgabe05.tree[i].name;
        }
        // Halterung
        for (let i = 0; i < Aufgabe05.holder.length; i++) {
            let ele = document.createElement("input");
            document.getElementById("tree_holder").appendChild(ele);
            ele.classList.add("holder_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("type", "radio");
            ele.setAttribute("name", "Holder_Radiogroup");
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "holder_radio" + i);
            let ele2 = document.createElement("label");
            document.getElementById("tree_holder").appendChild(ele2);
            ele2.classList.add("holder_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "holder_radio" + i);
            ele2.innerHTML = Aufgabe05.holder[i].name;
        }
        // Kugeln
        for (let i = 0; i < Aufgabe05.balls.length; i++) {
            let ele = document.createElement("input");
            document.getElementById("deco_balls").appendChild(ele);
            ele.classList.add("balls_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("type", "checkbox");
            ele.setAttribute("name", "Balls_Checkbox" + i);
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "balls_check" + i);
            let ele2 = document.createElement("label");
            document.getElementById("deco_balls").appendChild(ele2);
            ele2.classList.add("balls_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "balls_check" + i);
            ele2.innerHTML = Aufgabe05.balls[i].name;
        }
        // Lametta 
        for (let i = 0; i < Aufgabe05.tinsel.length; i++) {
            let ele = document.createElement("input");
            document.getElementById("deco_tinsel").appendChild(ele);
            ele.classList.add("tinsel_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("type", "checkbox");
            ele.setAttribute("name", "Tinsel_Checkbox" + i);
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "tinsel_check" + i);
            let ele2 = document.createElement("label");
            document.getElementById("deco_tinsel").appendChild(ele2);
            ele2.classList.add("tinsel_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "tinsel_check" + i);
            ele2.innerHTML = Aufgabe05.tinsel[i].name;
        }
        // Lichter
        for (let i = 0; i < Aufgabe05.lights.length; i++) {
            let ele = document.createElement("input");
            document.getElementById("deco_lights").appendChild(ele);
            ele.classList.add("lights_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("type", "radio");
            ele.setAttribute("name", "Lights_Radiogroup");
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "lights_radio" + i);
            let ele2 = document.createElement("label");
            document.getElementById("deco_lights").appendChild(ele2);
            ele2.classList.add("lights_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "lights_radio" + i);
            ele2.innerHTML = Aufgabe05.lights[i].name;
        }
        // Baumspitze
        for (let i = 0; i < Aufgabe05.top.length; i++) {
            let ele = document.createElement("input");
            document.getElementById("deco_top").appendChild(ele);
            ele.classList.add("top_form_options");
            ele.classList.add("formelements");
            ele.setAttribute("type", "radio");
            ele.setAttribute("name", "Top_Radiogroup");
            ele.setAttribute("value", "" + i);
            ele.setAttribute("id", "top_radio" + i);
            let ele2 = document.createElement("label");
            document.getElementById("deco_top").appendChild(ele2);
            ele2.classList.add("top_form_options");
            ele2.classList.add("formlabels");
            ele2.setAttribute("for", "top_radio" + i);
            ele2.innerHTML = Aufgabe05.top[i].name;
        }
        console.log("createHTML done");
    }
    ;
    function createEventListener(_event) {
        let divs = document.getElementsByClassName("deco_divs");
        for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.addEventListener("change", generateCart);
            console.log("createEventListener done");
        }
    }
    function generateCart(_event) {
        console.log(_event);
        let target = _event.target;
        if (target.name == "Holder_Radiogroup" && target.checked == true) {
            let index = parseInt(target.value, 10);
            let node = (document.getElementById("tree_holder_cart"));
            node.innerHTML = Aufgabe05.holder[index].name;
            console.log("Holder radiobutton no." + index + " clicked");
        }
        if (target.name == "Balls_Checkbox" && target.checked == true) {
            let index = parseInt(target.value, 10);
            console.log("Balls checkbox no." + index + " clicked");
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=Aufgabe05.js.map