var config;
(function (config) {
    document.addEventListener("DOMContentLoaded", main);
    function main() {
        console.log("main() triggered");
        dynamicHTML();
        createEventListener(event);
    }
    function createEventListener(_event) {
        let divs = document.getElementsByClassName("divtop");
        for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.addEventListener("change", generateCart);
            console.log("createEventListener done");
        }
    }
    function generateCart(_event) {
        console.log("generateCart triggered");
        let target = _event.target;
        console.log(target);
        if (target.className == "formselect" || target.type == "radio") {
            let index = parseInt(target.value, 10);
            console.log(index);
            let ov_amount = (document.getElementById("ov_amount"));
            let ov_items = (document.getElementById("ov_items"));
            let ov_prices = (document.getElementById("ov_prices"));
            ov_amount.innerHTML = "";
            ov_items.innerHTML = "";
            ov_prices.innerHTML = "";
            let name = document.createElement("a");
            ov_items.appendChild(name);
            name.classList.add("overview_item");
            name.innerHTML = (config.data[index].name);
            let price = document.createElement("a");
            ov_prices.appendChild(price);
            price.classList.add("overview_item");
            price.innerHTML = (tree[index].price + "");
            console.log("tree dropdown no." + index + " clicked");
        }
        document.getElementById("total").innerHTML = ("Gesamtpreis :   " + calculatePrice() + " Euro");
    }
    ;
    function dynamicHTML() {
        console.log("dynamicHTML() triggered");
        for (let i in config.data) {
            let category = i;
            console.log("Kategorie: " + category);
            let divtop = document.createElement("div");
            divtop.classList.add("divtop");
            document.getElementById("configurator").appendChild(divtop);
            let title = document.createElement("a");
            title.innerHTML = (config.data[i].title + ":");
            title.classList.add("label");
            divtop.appendChild(title);
            if (config.data[i].form_type == "dropdown") {
                let menu = document.createElement("select");
                divtop.appendChild(menu);
                menu.classList.add("formselect");
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let dropdown = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements");
                    dropdown.setAttribute("value", "" + k);
                    dropdown.setAttribute("name", config.data[i].title + "_Option");
                    dropdown.innerHTML = config.data[i].items[k].name;
                }
                createAmountHTML(i, divtop);
            }
            if (config.data[i].form_type == "radio") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let radiobutton = document.createElement("input");
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", config.data[i].title + "_Radiogroup");
                    radiobutton.innerHTML = config.data[i].items[k].name;
                    radiobutton.setAttribute("id", config.data[i].title + "_radio" + k);
                    let radiolabel = document.createElement("label");
                    divtop.appendChild(radiolabel);
                    radiolabel.classList.add("formlabels");
                    radiolabel.setAttribute("for", config.data[i].title + "_radio" + k);
                    radiolabel.innerHTML = (config.data[i].items[k].name);
                    createAmountHTML(i, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
            if (config.data[i].form_type == "checkbox") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let checkbox = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", config.data[i].title + "_Checkbox");
                    checkbox.innerHTML = config.data[i].items[k].name;
                    checkbox.setAttribute("id", config.data[i].title + "_checkbox" + k);
                    let checkboxlabel = document.createElement("label");
                    divtop.appendChild(checkboxlabel);
                    checkboxlabel.classList.add("formlabels");
                    checkboxlabel.setAttribute("for", config.data[i].title + "_checkbox" + k);
                    checkboxlabel.innerHTML = (config.data[i].items[k].name);
                    createAmountHTML(i, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
        }
    }
    function createAmountHTML(i, divtop) {
        if (config.data[i].amount_type == "slider") {
            let amount = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_slider");
            amount.setAttribute("type", "range");
            amount.setAttribute("name", "Slider");
            amount.setAttribute("min", "0");
            amount.setAttribute("max", "1");
            amount.setAttribute("step", "" + (1 / config.data[i].amount.steps.length));
            amount.setAttribute("value", "0");
        }
        ;
        if (config.data[i].amount_type == "stepper") {
            let amount = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_stepper");
            amount.setAttribute("type", "number");
            amount.setAttribute("name", "Points");
            amount.setAttribute("step", "1");
            amount.setAttribute("min", "0");
            amount.setAttribute("max", "20");
        }
    }
})(config || (config = {}));
//# sourceMappingURL=test2.js.map