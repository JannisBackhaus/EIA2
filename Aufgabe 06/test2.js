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
            div.addEventListener("input", generateCart);
        }
        console.log("createEventListener done");
    }
    function generateCart(_event) {
        let ov_amount = (document.getElementById("ov_amount"));
        let ov_items = (document.getElementById("ov_items"));
        let ov_prices = (document.getElementById("ov_prices"));
        ov_amount.innerHTML = ("");
        ov_items.innerHTML = ("");
        ov_prices.innerHTML = ("");
        let listindex = 0;
        for (let k in config.data) {
            let div = document.getElementById("divtop" + k);
            let form_list = div.getElementsByClassName("formelements");
            let option_list = div.getElementsByClassName("option");
            let amount = document.getElementById("amount_slider" + k);
            //            console.log(k)
            //            console.log(form_list)
            for (let i = 0; i < form_list.length; i++) {
                let form_element = form_list.item(i);
                let option_element = form_element;
                console.log(form_element);
                if (option_element.selected == true && option_element.innerHTML != "") {
                    let a1 = document.createElement("a");
                    ov_amount.appendChild(a1);
                    a1.setAttribute("id", "amountlistentry" + listindex);
                    a1.classList.add("ov_entry" + listindex);
                    a1.classList.add("ov_entry");
                    a1.innerHTML = ("1");
                    console.log("option");
                    let item = form_list.item(i);
                    let a2 = document.createElement("a");
                    ov_items.appendChild(a2);
                    a2.setAttribute("id", "itemlistentry" + listindex);
                    a2.classList.add("ov_entry" + listindex);
                    a2.classList.add("ov_entry");
                    a2.innerHTML = (config.data[k].items[i].name);
                    if (config.data[k].amount_type == "slider") {
                        let amount = item.parentElement.nextElementSibling;
                        console.log(amount);
                        console.log(amount.value);
                        let a3 = document.createElement("a");
                        ov_prices.appendChild(a3);
                        a3.setAttribute("id", "pricelistentry" + listindex);
                        a3.classList.add("ov_entry" + listindex);
                        a3.classList.add("ov_entry");
                        a3.classList.add("ov_price_entry");
                        a3.innerHTML = ((config.data[k].items[i].price * config.data[k].amount.steps[amount.valueAsNumber]).toFixed(2) + "");
                        let display = document.getElementById("slider_display" + 0 + k);
                        console.log("-----------------------------------------");
                        console.log("id =" + "slider_display" + i + k);
                        console.log(display);
                        console.log("-----------------------------------------");
                        display.innerHTML = (config.data[k].amount.display[amount.valueAsNumber]);
                    }
                    else {
                        let a3 = document.createElement("a");
                        ov_prices.appendChild(a3);
                        a3.setAttribute("id", "pricelistentry" + listindex);
                        a3.classList.add("ov_entry" + listindex);
                        a3.classList.add("ov_entry");
                        a3.classList.add("ov_price_entry");
                        a3.innerHTML = (config.data[k].items[i].price.toFixed(2) + "");
                    }
                }
                if (form_element.classList.contains("radio") == true || form_element.classList.contains("checkbox") == true) {
                    let item = form_list.item(i);
                    let amount = item.nextElementSibling.nextElementSibling;
                    if (item.type == "checkbox") {
                        if (amount.value != "") {
                            item.checked = true;
                        }
                    }
                    if (item.checked == true) {
                        if (item.type == "checkbox") {
                            let a1 = document.createElement("a");
                            ov_amount.appendChild(a1);
                            a1.setAttribute("id", "amountlistentry" + listindex);
                            a1.classList.add("ov_entry" + listindex);
                            a1.classList.add("ov_entry");
                            if (amount.value == "") {
                                amount.value = "1";
                            }
                            a1.innerHTML = (amount.value + "");
                        }
                        else {
                            let a1 = document.createElement("a");
                            ov_amount.appendChild(a1);
                            a1.setAttribute("id", "amountlistentry" + listindex);
                            a1.classList.add("ov_entry" + listindex);
                            a1.classList.add("ov_entry");
                            a1.innerHTML = ("1");
                        }
                        let a2 = document.createElement("a");
                        ov_items.appendChild(a2);
                        a2.setAttribute("id", "itemlistentry" + listindex);
                        a2.classList.add("ov_entry" + listindex);
                        a2.classList.add("ov_entry");
                        a2.innerHTML = (config.data[k].items[i].name);
                        if (item.type == "checkbox") {
                            let a3 = document.createElement("a");
                            ov_prices.appendChild(a3);
                            a3.setAttribute("id", "pricelistentry" + listindex);
                            a3.classList.add("ov_entry" + listindex);
                            a3.classList.add("ov_entry");
                            a3.classList.add("ov_price_entry");
                            a3.innerHTML = ((config.data[k].items[i].price * amount.valueAsNumber).toFixed(2) + "");
                        }
                        else {
                            let a3 = document.createElement("a");
                            ov_prices.appendChild(a3);
                            a3.setAttribute("id", "pricelistentry" + listindex);
                            a3.classList.add("ov_entry" + listindex);
                            a3.classList.add("ov_entry");
                            a3.classList.add("ov_price_entry");
                            a3.innerHTML = (config.data[k].items[i].price.toFixed(2) + "");
                        }
                    }
                }
            }
        }
        calculateTotal();
    }
    function calculateTotal() {
        let ov_prices = (document.getElementById("ov_prices"));
        let price_list = ov_prices.children;
        let total = 0;
        for (let i = 0; i < price_list.length; i++) {
            total += parseFloat(price_list.item(i).innerHTML);
        }
        document.getElementById("total").innerHTML = ("Gesamtpreis: " + total.toFixed(2) + " Euro");
    }
    function dynamicHTML() {
        console.log("dynamicHTML() triggered");
        for (let i in config.data) {
            let category = i;
            console.log("Kategorie: " + category);
            let divtop = document.createElement("div");
            divtop.classList.add("divtop");
            divtop.setAttribute("id", "divtop" + i);
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
                    dropdown.classList.add("option");
                    dropdown.setAttribute("value", "" + k);
                    dropdown.setAttribute("name", config.data[i].title + "_Option");
                    dropdown.innerHTML = config.data[i].items[k].name;
                }
                createAmountHTML(i, 0, divtop);
            }
            if (config.data[i].form_type == "radio") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let radiobutton = document.createElement("input");
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.classList.add("radio");
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
                    createAmountHTML(i, k, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
            if (config.data[i].form_type == "checkbox") {
                for (let k = 0; k < config.data[i].items.length; k++) {
                    let checkbox = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.classList.add("checkbox");
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
                    createAmountHTML(i, k, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
        }
        function createAmountHTML(i, k, divtop) {
            if (config.data[i].amount_type == "slider") {
                let amount = document.createElement("input");
                divtop.appendChild(amount);
                amount.classList.add("amount_slider");
                amount.setAttribute("id", "amount_slider" + i);
                amount.setAttribute("type", "range");
                amount.setAttribute("name", "Slider");
                amount.setAttribute("min", "0");
                amount.setAttribute("max", (config.data[i].amount.steps.length - 1) + "");
                amount.setAttribute("step", "1");
                amount.setAttribute("value", "3");
                let display = document.createElement("a");
                divtop.appendChild(display);
                display.classList.add("slider_display");
                display.setAttribute("id", "slider_display" + k + i);
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
                amount.setAttribute("max", "" + config.data[i].amount.steps.length);
            }
        }
    }
})(config || (config = {}));
//# sourceMappingURL=test2.js.map