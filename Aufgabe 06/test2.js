var config;
(function (config) {
    document.addEventListener("DOMContentLoaded", main);
    function main() {
        console.log("main() triggered");
        dynamicHTML();
    }
    function dynamicHTML() {
        console.log("dynamicHTML() triggered");
        for (let i = 0; i < config.data.length; i++) {
            console.log("data.length = " + config.data.length);
            console.log("data[i][0].form_type = " + config.data[i]["tree"].form_type);
            let divtop = document.createElement("div");
            divtop.classList.add("divtop");
            document.getElementById("configurator").appendChild(divtop);
            let title = document.createElement("a");
            title.innerHTML = (config.data[i][0].form_type);
            title.classList.add("label");
            divtop.appendChild(title);
            if (config.data[i].amount_type == "slider") {
                let amount = document.createElement("input");
                amount.classList.add("amount_counter");
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
                amount.classList.add("amount_counter");
                amount.setAttribute("type", "number");
                amount.setAttribute("name", "Points");
                amount.setAttribute("step", "5");
                amount.setAttribute("max", "1");
            }
            if (config.data[i].form_type == "dropdown") {
                let menu = document.createElement("select");
                divtop.appendChild(menu);
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let dropdown = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements");
                    dropdown.setAttribute("value", "" + k);
                    dropdown.setAttribute("name", config.data[i].form_type + "_Option");
                    dropdown.innerHTML = config.data[i].items[k].name;
                }
            }
            if (config.data[i].form_type == "radio") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let radiobutton = document.createElement("input");
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", config.data[i].form_type + "_Radiogroup");
                    radiobutton.innerHTML = config.data[i].items[k].name;
                    radiobutton.setAttribute("id", config.data[i].form_type + "_radio" + i);
                    let radiolabel = document.createElement("label");
                    divtop.appendChild(radiobutton);
                    radiolabel.classList.add("formelements");
                    radiolabel.setAttribute("for", config.data[i].form_type + "_radio" + i);
                    radiolabel.innerHTML = (config.data[i].items[k].name);
                }
            }
            if (config.data[i].form_type == "checkbox") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let checkbox = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", config.data[i].form_type + "_Checkbox");
                    checkbox.innerHTML = config.data[i].items[k].name;
                    checkbox.setAttribute("id", config.data[i].form_type + "_checkbox" + i);
                    let checkboxlabel = document.createElement("label");
                    divtop.appendChild(checkbox);
                    checkboxlabel.classList.add("formelements");
                    checkboxlabel.setAttribute("for", config.data[i].form_type + "_checkbox" + i);
                    checkboxlabel.innerHTML = (config.data[i].items[k].name);
                }
            }
        }
    }
})(config || (config = {}));
//# sourceMappingURL=test2.js.map