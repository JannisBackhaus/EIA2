var Aufgabe05;
(function (Aufgabe05) {
    function main() {
        createHTML();
        createEventListener(event);
    }
    function dynamicHTML() {
        for (let i = 0; i < Aufgabe05.data.length; i++) {
            let div1 = document.createElement("div");
            div1.classList.add("div1");
            let title = document.createElement("a");
            title.innerHTML = (categories[i].categ_name);
            title.classList.add("label");
            let div = document.createElement("div");
        }
        function createHTML() {
            // Baumart
            for (let i = 0; i < Aufgabe05.data.tree.item.length; i++) {
                let ele = document.createElement("option");
                document.getElementById("tree_form").appendChild(ele);
                ele.classList.add("tree_form_options");
                ele.classList.add("formelements");
                ele.setAttribute("value", "" + i);
                ele.setAttribute("name", "Tree_Option");
                ele.innerHTML = tree[i].name;
            }
            // Halterung
            for (let i = 0; i < holder.length; i++) {
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
                ele2.innerHTML = holder[i].name;
            }
            // Kugeln
            for (let i = 0; i < balls.length; i++) {
                let ele = document.createElement("input");
                document.getElementById("deco_balls").appendChild(ele);
                ele.classList.add("balls_form_options");
                ele.classList.add("formelements");
                ele.setAttribute("type", "checkbox");
                ele.setAttribute("name", "Balls_Checkbox");
                ele.setAttribute("value", "" + i);
                ele.setAttribute("id", "balls_check" + i);
                let ele2 = document.createElement("label");
                document.getElementById("deco_balls").appendChild(ele2);
                ele2.classList.add("balls_form_options");
                ele2.classList.add("formlabels");
                ele2.setAttribute("for", "balls_check" + i);
                ele2.innerHTML = balls[i].name;
            }
            // Lametta 
            for (let i = 0; i < tinsel.length; i++) {
                let ele = document.createElement("input");
                document.getElementById("deco_tinsel").appendChild(ele);
                ele.classList.add("tinsel_form_options");
                ele.classList.add("formelements");
                ele.setAttribute("type", "checkbox");
                ele.setAttribute("name", "Tinsel_Checkbox");
                ele.setAttribute("value", "" + i);
                ele.setAttribute("id", "tinsel_check" + i);
                let ele2 = document.createElement("label");
                document.getElementById("deco_tinsel").appendChild(ele2);
                ele2.classList.add("tinsel_form_options");
                ele2.classList.add("formlabels");
                ele2.setAttribute("for", "tinsel_check" + i);
                ele2.innerHTML = tinsel[i].name;
            }
            // Lichter
            for (let i = 0; i < lights.length; i++) {
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
                ele2.innerHTML = lights[i].name;
            }
            // Baumspitze
            for (let i = 0; i < top.length; i++) {
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
                ele2.innerHTML = top[i].name;
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
            let target_else = _event.target;
            if (target_else.id == "tree_form") {
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("tree_type_cart"));
                let node2 = (document.getElementById("tree_type_cart_price"));
                node.innerHTML = "";
                node2.innerHTML = "";
                let name = document.createElement("a");
                node.appendChild(name);
                name.classList.add("overview_item");
                name.innerHTML = (tree[index].name);
                let price = document.createElement("a");
                node2.appendChild(price);
                price.classList.add("overview_item");
                price.innerHTML = (tree[index].price + "");
                console.log("tree dropdown no." + index + " clicked");
            }
            else if (target.name == "Holder_Radiogroup" && target.checked == true) {
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("tree_holder_cart"));
                let node2 = (document.getElementById("tree_holder_cart_price"));
                node.innerHTML = "";
                node2.innerHTML = "";
                let name = document.createElement("a");
                node.appendChild(name);
                name.classList.add("overview_item");
                name.innerHTML = (holder[index].name);
                let price = document.createElement("a");
                node2.appendChild(price);
                price.classList.add("overview_item");
                price.innerHTML = (holder[index].price + "");
                console.log("Holder radiobutton no." + index + " clicked");
            }
            else if (target.name == "Balls_Checkbox") {
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("deco_balls_cart"));
                node.innerHTML = "";
                let node2 = (document.getElementById("deco_balls_cart_price"));
                node2.innerHTML = "";
                for (let i = 0; i < balls.length; i++) {
                    let checkbox = document.getElementById("balls_check" + i);
                    if (checkbox.checked == true) {
                        let name = document.createElement("a");
                        node.appendChild(name);
                        name.classList.add("overview_item");
                        name.innerHTML = (balls[i].name);
                        let price = document.createElement("a");
                        node2.appendChild(price);
                        price.classList.add("overview_item");
                        price.innerHTML = (balls[i].price + "");
                    }
                }
                console.log("Balls checkbox no." + index + " clicked");
            }
            else if (target.name == "Tinsel_Checkbox") {
                console.log("tinsel");
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("deco_tinsel_cart"));
                node.innerHTML = "";
                let node2 = (document.getElementById("deco_tinsel_cart_price"));
                node2.innerHTML = "";
                for (let i = 0; i < tinsel.length; i++) {
                    let checkbox = document.getElementById("tinsel_check" + i);
                    if (checkbox.checked == true) {
                        let name = document.createElement("a");
                        node.appendChild(name);
                        name.classList.add("overview_item");
                        name.innerHTML = (tinsel[i].name);
                        let price = document.createElement("a");
                        node2.appendChild(price);
                        price.classList.add("overview_item");
                        price.innerHTML = (tinsel[i].price + "");
                    }
                }
                console.log("tinsel checkbox no." + index + " clicked");
            }
            else if (target.name == "Lights_Radiogroup" && target.checked == true) {
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("deco_lights_cart"));
                let node2 = (document.getElementById("deco_lights_cart_price"));
                node.innerHTML = "";
                node2.innerHTML = "";
                let name = document.createElement("a");
                node.appendChild(name);
                name.classList.add("overview_item");
                name.innerHTML = (lights[index].name);
                let price = document.createElement("a");
                node2.appendChild(price);
                price.classList.add("overview_item");
                price.innerHTML = (lights[index].price + "");
                console.log("lights radiobutton no." + index + " clicked");
            }
            else if (target.name == "Top_Radiogroup" && target.checked == true) {
                let index = parseInt(target.value, 10);
                let node = (document.getElementById("deco_top_cart"));
                let node2 = (document.getElementById("deco_top_cart_price"));
                node.innerHTML = "";
                node2.innerHTML = "";
                let name = document.createElement("a");
                node.appendChild(name);
                name.classList.add("overview_item");
                name.innerHTML = (top[index].name);
                let price = document.createElement("a");
                node2.appendChild(price);
                price.classList.add("overview_item");
                price.innerHTML = (top[index].price + "");
                console.log("top radiobutton no." + index + " clicked");
            }
            document.getElementById("total").innerHTML = ("Gesamtpreis :   " + calculatePrice() + " Euro");
        }
        ;
        function calculatePrice() {
            let node = Array.from(document.getElementById("ov_prices").children);
            let calculate = 0;
            for (let i = 0; i < node.length; i++)
                if (node[i].firstChild != null) {
                    let innernode = Array.from(node[i].children);
                    console.log(node[i].firstElementChild.innerHTML);
                    for (let k = 0; k < innernode.length; k++) {
                        calculate += parseFloat(node[i].firstElementChild.innerHTML);
                    }
                }
            let total = calculate.toFixed(2);
            console.log(total);
            return total;
        }
        document.addEventListener("DOMContentLoaded", main);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=Aufgabe05.js.map