var WBKreloadedUser;
(function (WBKreloadedUser) {
    document.addEventListener("DOMContentLoaded", main);
    let address = "https://treeconfigurator.herokuapp.com/";
    //let address: string = "http://localhost:8100/";
    let order = "";
    let data;
    function main() {
        console.log("main() triggered");
        getDataFromServer();
        //dynamicHTML();
        //createEventListener();
    }
    function getDataFromServer() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?getData0", true);
        xhr.addEventListener("readystatechange", handleStateChangeGetData);
        xhr.send();
    }
    function handleStateChangeGetData(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("%cServer Response (getData):", "color: white; background-color: blue");
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            let temp = JSON.parse(xhr.response);
            let datajson;
            for (let key in temp) {
                //  console.log(temp[key].datastring)
                let datastring = decodeURI(temp[key].datastring);
                //  console.log(datastring)
                datajson = JSON.parse(datastring);
            }
            let tempData = [];
            for (let i in datajson) {
                tempData[parseInt(i)] = {
                    title: datajson[i]["title"],
                    amount_type: datajson[i]["amount_type"],
                    amount: null,
                    form_type: datajson[i]["form_type"],
                    items: [{ name: null, price: null }, { name: null, price: null }],
                };
                for (let k = 0; k < datajson[i]["items"].length; k++) {
                    tempData[parseInt(i)]["items"][k] =
                        {
                            name: datajson[i]["items"][k]["name"],
                            price: datajson[i]["items"][k]["price"],
                        };
                }
            }
            console.log(tempData);
            data = tempData;
            console.log("%cConverted Server-Response (getData):", "color: white; background-color: green");
            console.log(data);
            dynamicHTML();
            createEventListener();
        }
    }
    function createEventListener() {
        let divs = document.getElementsByClassName("divtop");
        console.log("HIER");
        console.log(divs);
        console.log(divs.length);
        for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.addEventListener("input", generateCart);
            console.log("div" + i + " got Eventlistener");
        }
        document.getElementById("orderbutton").addEventListener("click", checkOrderAndSendData);
        console.log("createEventListener done");
    }
    function generateCart(_event) {
        console.log("change registered");
        order = "";
        let ov_amount = (document.getElementById("ov_amount"));
        let ov_items = (document.getElementById("ov_items"));
        let ov_prices = (document.getElementById("ov_prices"));
        ov_amount.innerHTML = ("");
        ov_items.innerHTML = ("");
        ov_prices.innerHTML = ("");
        let listindex = 0;
        for (let k in data) {
            let div = document.getElementById("divtop" + k);
            let form_list = div.getElementsByClassName("formelements");
            let option_list = div.getElementsByClassName("option");
            let amount = document.getElementById("amount_slider" + k);
            for (let i = 0; i < form_list.length; i++) {
                let form_element = form_list.item(i);
                let option_element = form_element;
                let select_element = option_element.parentElement;
                console.log(form_element);
                if (option_element.selected == true && option_element.innerHTML != "") {
                    order += data[k].title + "=" + option_element.innerHTML + "&";
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
                    a2.innerHTML = (data[k].items[i].name);
                    if (data[k].amount_type == "slider") {
                        let amount = item.parentElement.nextElementSibling;
                        console.log(amount);
                        console.log(amount.value);
                        let a3 = document.createElement("a");
                        ov_prices.appendChild(a3);
                        a3.setAttribute("id", "pricelistentry" + listindex);
                        a3.classList.add("ov_entry" + listindex);
                        a3.classList.add("ov_entry");
                        a3.classList.add("ov_price_entry");
                        a3.innerHTML = ((data[k].items[i].price * data[k].amount.steps[amount.valueAsNumber]).toFixed(2) + "");
                        a2.innerHTML += (" (" + data[k].amount.display[amount.valueAsNumber] + ")");
                        let display = document.getElementById("slider_display" + 0 + k);
                        console.log("-----------------------------------------");
                        console.log("id =" + "slider_display" + i + k);
                        console.log(display);
                        console.log("-----------------------------------------");
                        display.innerHTML = (data[k].amount.display[amount.valueAsNumber]);
                        order += data[k].title + "_Menge=" + display.innerHTML + "&";
                    }
                    else {
                        let a3 = document.createElement("a");
                        ov_prices.appendChild(a3);
                        a3.setAttribute("id", "pricelistentry" + listindex);
                        a3.classList.add("ov_entry" + listindex);
                        a3.classList.add("ov_entry");
                        a3.classList.add("ov_price_entry");
                        a3.innerHTML = (data[k].items[i].price.toFixed(2) + "");
                    }
                }
                if (form_element.classList.contains("radio") == true || form_element.classList.contains("checkbox") == true) {
                    let item = form_list.item(i);
                    let amount = item.nextElementSibling.nextElementSibling;
                    if (item.type == "checkbox") {
                        let target = _event.target;
                        if (target.type == "number" && amount.value != "") {
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
                        a2.innerHTML = (data[k].items[i].name);
                        if (item.type == "checkbox") {
                            let a3 = document.createElement("a");
                            ov_prices.appendChild(a3);
                            a3.setAttribute("id", "pricelistentry" + listindex);
                            a3.classList.add("ov_entry" + listindex);
                            a3.classList.add("ov_entry");
                            a3.classList.add("ov_price_entry");
                            a3.innerHTML = ((data[k].items[i].price * amount.valueAsNumber).toFixed(2) + "");
                        }
                        else {
                            let a3 = document.createElement("a");
                            ov_prices.appendChild(a3);
                            a3.setAttribute("id", "pricelistentry" + listindex);
                            a3.classList.add("ov_entry" + listindex);
                            a3.classList.add("ov_entry");
                            a3.classList.add("ov_price_entry");
                            a3.innerHTML = (data[k].items[i].price.toFixed(2) + "");
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
        for (let i in data) {
            let category = i;
            console.log("Kategorie: " + category);
            let divtop = document.createElement("div");
            divtop.classList.add("divtop");
            divtop.setAttribute("id", "divtop" + i);
            document.getElementById("configurator").appendChild(divtop);
            let title = document.createElement("a");
            title.innerHTML = (data[i].title + ":");
            title.classList.add("label");
            title.setAttribute("id", "label" + i);
            divtop.appendChild(title);
            if (data[i].form_type == "dropdown") {
                let menu = document.createElement("select");
                divtop.appendChild(menu);
                menu.classList.add("formselect");
                menu.setAttribute("name", data[i].title + "");
                for (let k = 0; k < data[i].items.length; k++) {
                    let dropdown = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements");
                    dropdown.classList.add("option");
                    dropdown.setAttribute("value", "" + k);
                    dropdown.setAttribute("name", data[i].title + "_Option");
                    dropdown.innerHTML = data[i].items[k].name;
                }
                createAmountHTML(i, 0, divtop);
            }
            if (data[i].form_type == "radio") {
                for (let k = 0; k < data[i].items.length; k++) {
                    let radiobutton = document.createElement("input");
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.classList.add("radio");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", data[i].title + "_Radiogroup");
                    radiobutton.innerHTML = data[i].items[k].name;
                    radiobutton.setAttribute("id", data[i].title + "_radio" + k);
                    let radiolabel = document.createElement("label");
                    divtop.appendChild(radiolabel);
                    radiolabel.classList.add("formlabels");
                    radiolabel.setAttribute("for", data[i].title + "_radio" + k);
                    radiolabel.innerHTML = (data[i].items[k].name);
                    createAmountHTML(i, k, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
            if (data[i].form_type == "checkbox") {
                for (let k = 0; k < data[i].items.length; k++) {
                    let checkbox = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.classList.add("checkbox");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", data[i].title + "_Checkbox");
                    checkbox.innerHTML = data[i].items[k].name;
                    checkbox.setAttribute("id", data[i].title + "_checkbox" + k);
                    let checkboxlabel = document.createElement("label");
                    divtop.appendChild(checkboxlabel);
                    checkboxlabel.classList.add("formlabels");
                    checkboxlabel.setAttribute("for", data[i].title + "_checkbox" + k);
                    checkboxlabel.innerHTML = (data[i].items[k].name);
                    createAmountHTML(i, k, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
        }
    }
    function createAmountHTML(i, k, divtop) {
        if (data[parseInt(i)].amount_type == "slider") {
            let amount = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_slider");
            amount.setAttribute("id", "amount_slider" + i);
            amount.setAttribute("type", "range");
            amount.setAttribute("name", data[parseInt(i)].title + "_amount");
            amount.setAttribute("min", "0");
            amount.setAttribute("max", "15");
            amount.setAttribute("step", "1");
            amount.setAttribute("value", "3");
            let display = document.createElement("a");
            divtop.appendChild(display);
            display.classList.add("slider_display");
            display.setAttribute("id", "slider_display" + k + i);
        }
        ;
        if (data[parseInt(i)].amount_type == "stepper") {
            let amount = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_stepper");
            amount.setAttribute("type", "number");
            amount.setAttribute("name", data[parseInt(i)].items[k].name + "_amount");
            amount.setAttribute("step", "1");
            amount.setAttribute("min", "0");
        }
    }
    function handleStateChangeOrder(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            orderConfirmation(xhr.response);
        }
    }
    function checkOrderAndSendData(_event) {
        let xhr = new XMLHttpRequest();
        let query = generateJSONString();
        xhr.open("GET", address + "?newOrder" + generateJSONString(), true);
        xhr.addEventListener("readystatechange", handleStateChangeOrder);
        xhr.send();
        //        let messagelist: NodeList = document.getElementsByClassName("errormessage");
        //        for (let i: number = 0; i < messagelist.length; i++) {
        //            messagelist.item(i).parentElement.removeChild(messagelist.item(i))
        //        }
        //
        //        for (let k in data) {
        //            let check: boolean;
        //            let div: HTMLDivElement = <HTMLDivElement>document.getElementById("divtop" + k);
        //            let form_list: NodeListOf<Element> = div.getElementsByClassName("formelements");
        //            let option_list: NodeListOf<Element> = div.getElementsByClassName("option");
        //            let label: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("label" + k);
        //
        //            for (let i: number = 0; i < form_list.length; i++) {
        //
        //                let form_element: Element = form_list.item(i);
        //                let option_element: HTMLOptionElement = <HTMLOptionElement>form_element
        //
        //                console.log(form_element)
        //                if (option_element.selected == true) {
        //                    if (option_element.innerHTML != "") { }
        //                    else {
        //                        let errormessage: HTMLAnchorElement = document.createElement("a");
        //                        errormessage.innerHTML = ("Hier fehlt noch etwas.")
        //                        errormessage.classList.add("errormessage");
        //                        // errormessage.setAttribute("id", "errormessage");
        //                        errormessage.addEventListener("click", deleteErrorMessage)
        //
        //                        label.parentNode.insertBefore(errormessage, label.nextSibling);
        //                        console.log("createdmessage");
        //                    }
        //                }
        //
        //                if (form_element.classList.contains("radio") == true || form_element.classList.contains("checkbox") == true) {
        //
        //                    let item: HTMLInputElement = <HTMLInputElement>form_list.item(i);
        //                    let item_last: HTMLInputElement = <HTMLInputElement>form_list.item(form_list.length - 1);
        //                    let check: boolean = false;
        //
        //                    if (item.checked == true) {
        //                        check = true;
        //                    }
        //                    else if (item_last.checked == false && check == false && label.nextElementSibling.classList.contains("errormessage") == false) {
        //                        let errormessage: HTMLAnchorElement = document.createElement("a");
        //                        errormessage.innerHTML = ("Hier fehlt noch etwas.")
        //                        errormessage.classList.add("errormessage");
        //                        // errormessage.setAttributeerge");
        //                        errormessage.addEventListener("click", deleteErrorMessage)
        //                        label.parentNode.insertBefore(errormessage, label.nextSibling);
        //                        console.log("createdmessage");
        //                    }
        //                    else { }
        //                }
        //            }
        //        }
    }
    function generateJSONString() {
        let jsonarray = [];
        let amountlist = document.getElementById("ov_amount").children;
        let itemlist = document.getElementById("ov_items").children;
        let pricelist = document.getElementById("ov_prices").children;
        for (let i = 0; i < itemlist.length; i++) {
            jsonarray.push({
                amount: amountlist.item(i).innerHTML,
                item: itemlist.item(i).innerHTML,
                price: pricelist.item(i).innerHTML,
            });
        }
        let query = JSON.stringify(jsonarray);
        console.log(jsonarray);
        console.log(query);
        console.log(encodeURIComponent(query));
        return query;
    }
    function decodeData(_response) {
        let json = JSON.parse(_response);
    }
    ;
    function orderConfirmation(response) {
        let confirmwindow = document.getElementById("confirmwindow");
        if (confirmwindow != null) {
            confirmwindow.parentNode.removeChild(confirmwindow);
        }
        console.log("%cRaw Server Response:", "color: white; background-color: blue");
        console.log(response);
        let json = JSON.parse(response);
        console.log("%cParsed Response to JSON-Object:", "color: white; background-color: green");
        console.log(json);
        confirmwindow = document.createElement("div");
        confirmwindow.setAttribute("id", "confirmwindow");
        document.body.appendChild(confirmwindow);
        let total = 0;
        let text = document.createElement("a");
        let contentwindow = document.createElement("div");
        let amount_column = document.createElement("div");
        let item_column = document.createElement("div");
        let price_column = document.createElement("div");
        confirmwindow.appendChild(text);
        confirmwindow.appendChild(contentwindow);
        contentwindow.appendChild(amount_column);
        contentwindow.appendChild(item_column);
        contentwindow.appendChild(price_column);
        contentwindow.setAttribute("id", "confirmcontent");
        text.innerHTML = ("Ihre Bestellung wurde abgeschickt!");
        text.classList.add("label");
        text.setAttribute("id", "confirmtext");
        for (let i = 0; i < json.length; i++) {
            let amount_entry = document.createElement("a");
            let item_entry = document.createElement("a");
            let price_entry = document.createElement("a");
            amount_column.setAttribute("id", "confirm_amount_column");
            item_column.setAttribute("id", "confirm_item_column");
            price_column.setAttribute("id", "confirm_price_column");
            amount_entry.classList.add("confirmentries");
            item_entry.classList.add("confirmentries");
            price_entry.classList.add("confirmentries");
            amount_column.appendChild(amount_entry);
            item_column.appendChild(item_entry);
            price_column.appendChild(price_entry);
            amount_entry.innerHTML = (json[i]["amount"]);
            item_entry.innerHTML = (json[i]["item"]);
            price_entry.innerHTML = (json[i]["price"] + " Euro");
            total = total + parseFloat(json[i]["price"]);
        }
        let totaldisplay = document.createElement("a");
        confirmwindow.appendChild(totaldisplay);
        totaldisplay.innerHTML = ("Gesamtpreis: " + total.toFixed(2) + " Euro");
        totaldisplay.setAttribute("id", "confirmtotal");
        let exit = document.createElement("img");
        confirmwindow.appendChild(exit);
        exit.setAttribute("src", "img/checkmark-flat.png");
        exit.setAttribute("width", "50px");
        exit.setAttribute("height", "50px");
        exit.setAttribute("id", "confirmexit");
        exit.addEventListener("mouseleave", function normal() {
            exit.setAttribute("src", "img/checkmark-flat.png");
        });
        exit.addEventListener("mouseover", function hover() {
            exit.setAttribute("src", "img/checkmark-flat-hover.png");
        });
        exit.addEventListener("mousedown", function hover() {
            exit.setAttribute("src", "img/checkmark-flat-keydown.png");
        });
        exit.addEventListener("mouseup", function hover() {
            exit.setAttribute("src", "img/checkmark-flat.png");
            confirmwindow.parentNode.removeChild(confirmwindow);
        });
    }
    function deleteErrorMessage(_event) {
        let target = event.target;
        target.parentNode.removeChild(target);
        console.log("deleted");
    }
})(WBKreloadedUser || (WBKreloadedUser = {}));
//# sourceMappingURL=config.js.map