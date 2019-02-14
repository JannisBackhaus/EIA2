var WBKreloadedSeller;
(function (WBKreloadedSeller) {
    document.addEventListener("DOMContentLoaded", main);
    // let address: string = "https://treeconfigurator.herokuapp.com/";
    let address = "http://localhost:8100/";
    let newData;
    let reconstruct;
    let query;
    function main() {
        console.log("main() triggered");
        getDataFromServer();
        dynamicHTML();
        createEventListener();
    }
    function createEventListener() {
        let divs = document.getElementsByClassName("categorystripe");
        //    for (let i: number = 0; i < divs.length; i++) {
        //        let div: Element = divs[i];
        //        div.addEventListener("input", generateCart);
        //    }
        document.getElementById("savebutton").addEventListener("click", clickHandlerSave);
        document.getElementById("deleteOrders").addEventListener("click", getDataFromServer);
        document.getElementById("resetData").addEventListener("click", resetData);
        console.log("createEventListener done");
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
            newData = tempData;
            console.log("%cConverted Server-Response (getData):", "color: white; background-color: green");
            console.log(newData);
            dynamicHTML();
        }
    }
    function dynamicHTML() {
        console.log("dynamicHTML() triggered");
        document.getElementById("categories").innerHTML = "";
        let index = 0;
        for (let i in newData) {
            let category = i;
            let divall = document.createElement("div");
            divall.classList.add("divall");
            divall.setAttribute("id", "divall" + i);
            document.getElementById("categories").appendChild(divall);
            let categorystripe = document.createElement("div");
            categorystripe.classList.add("categorystripe");
            categorystripe.setAttribute("id", "categorystripe" + i);
            divall.appendChild(categorystripe);
            let title = document.createElement("a");
            categorystripe.appendChild(title);
            title.innerHTML = ("Kategorie " + (index + 1) + ":");
            title.classList.add("label");
            title.setAttribute("id", "label" + i);
            let ctgName = document.createElement("input"); // Kategorie-Name
            categorystripe.appendChild(ctgName);
            ctgName.setAttribute("type", "text");
            ctgName.setAttribute("placeholder", "Bezeichnung");
            ctgName.setAttribute("value", "" + newData[i].title);
            ctgName.setAttribute("name", "ctgName" + index);
            ctgName.classList.add("ctgnames");
            ctgName.classList.add("formelements");
            let ctgType = document.createElement("select"); // Kategorie-Typ
            categorystripe.appendChild(ctgType);
            ctgType.setAttribute("name", "ctgType" + index);
            ctgType.classList.add("ctgtypes");
            ctgType.classList.add("formelements");
            let optionCheck = document.createElement("option"); // Checkbox Option
            ctgType.appendChild(optionCheck);
            optionCheck.classList.add("formelements");
            optionCheck.classList.add("option");
            optionCheck.setAttribute("value", "checkbox");
            optionCheck.setAttribute("name", "ctgType" + index + "CheckboxOption");
            optionCheck.innerHTML = "Checkbox";
            let optionRadio = document.createElement("option"); // Radio Option        
            ctgType.appendChild(optionRadio);
            optionRadio.classList.add("formelements");
            optionRadio.classList.add("option");
            optionRadio.setAttribute("value", "radio");
            optionRadio.setAttribute("name", "ctgType" + index + "RadioOption");
            optionRadio.innerHTML = "Radiobuttons";
            let optionDropdown = document.createElement("option"); // Dropdown Option
            ctgType.appendChild(optionDropdown);
            optionDropdown.classList.add("formelements");
            optionDropdown.classList.add("option");
            optionDropdown.setAttribute("value", "dropdown");
            optionDropdown.setAttribute("name", "ctgType" + index + "DropdownOption");
            optionDropdown.innerHTML = "Dropdown-Menue";
            ctgType.value = newData[i].form_type;
            let ctgAmountType = document.createElement("select"); // Kategorie-Mengentyp
            categorystripe.appendChild(ctgAmountType);
            ctgAmountType.setAttribute("name", "ctgAmountType" + index);
            ctgAmountType.classList.add("ctgamounttypes");
            ctgAmountType.classList.add("formelements");
            let optionStepper = document.createElement("option"); // Radio Option        
            ctgAmountType.appendChild(optionStepper);
            optionStepper.classList.add("formelements");
            optionStepper.classList.add("option");
            optionStepper.setAttribute("value", "stepper");
            optionStepper.setAttribute("name", "ctgType" + index + "StepperOption");
            optionStepper.innerHTML = "Stepper";
            let optionSlider = document.createElement("option"); // Dropdown Option
            ctgAmountType.appendChild(optionSlider);
            optionSlider.classList.add("formelements");
            optionSlider.classList.add("option");
            optionSlider.setAttribute("value", "slider");
            optionSlider.setAttribute("name", "ctgAmountType" + index + "SliderOption");
            optionSlider.innerHTML = "Slider";
            ctgAmountType.value = newData[i].amount_type;
            let ctgRemoveButton = document.createElement("button");
            categorystripe.appendChild(ctgRemoveButton);
            ctgRemoveButton.classList.add("ctgremovebutton");
            ctgRemoveButton.classList.add("removebutton");
            ctgRemoveButton.classList.add("formelements");
            ctgRemoveButton.innerHTML = "-";
            ctgRemoveButton.style.backgroundColor = "red";
            ctgRemoveButton.style.color = "white";
            ctgRemoveButton.style.borderRadius = "10px";
            ctgRemoveButton.addEventListener("click", handleRemoveCtg);
            let divitems = document.createElement("div");
            divitems.classList.add("divitems");
            divitems.setAttribute("id", +i + "divitems");
            divall.appendChild(divitems);
            //            if (ctgType.value == "radio") {
            //                ctgAmountType.setAttribute("disabled", "true");
            //            }
            // ---------- ITEMS ----------        
            for (let k = 0; k < newData[i].items.length; k++) {
                let itemstripe = document.createElement("div");
                divitems.classList.add("itemstripes");
                divitems.setAttribute("id", i + "itemstripe" + k);
                divitems.appendChild(itemstripe);
                let subtitle = document.createElement("a");
                itemstripe.appendChild(subtitle);
                subtitle.innerHTML = ("Item " + (k + 1) + ":");
                subtitle.classList.add("label");
                subtitle.setAttribute("id", "label" + i);
                let itemName = document.createElement("input"); // Item-Name
                itemstripe.appendChild(itemName);
                itemName.setAttribute("type", "text");
                itemName.setAttribute("value", "" + newData[i].items[k].name);
                itemName.setAttribute("placeholder", "Bezeichnung");
                itemName.setAttribute("name", "itemName" + k);
                itemName.classList.add("itemnames");
                itemName.classList.add("formelements");
                let itemPrice = document.createElement("input"); // Item-Preis
                itemstripe.appendChild(itemPrice);
                itemPrice.setAttribute("type", "number");
                itemPrice.setAttribute("step", "1.0");
                itemPrice.setAttribute("min", "0");
                itemPrice.setAttribute("placeholder", "Preis");
                itemPrice.setAttribute("value", "" + newData[i].items[k].price);
                itemPrice.setAttribute("name", "itemName" + k);
                itemPrice.classList.add("itemprices");
                itemPrice.classList.add("formelements");
                let itemRemoveButton = document.createElement("button");
                itemstripe.appendChild(itemRemoveButton);
                itemRemoveButton.classList.add("itemremovebutton");
                itemRemoveButton.classList.add("removebutton");
                itemRemoveButton.classList.add("formelements");
                itemRemoveButton.innerHTML = "-";
                itemRemoveButton.style.backgroundColor = "red";
                itemRemoveButton.style.color = "white";
                itemRemoveButton.style.borderRadius = "10px";
                itemRemoveButton.addEventListener("click", handleRemoveItem);
            }
            let itemAddButton = document.createElement("button");
            divitems.appendChild(itemAddButton);
            itemAddButton.classList.add("itemaddbutton");
            itemAddButton.classList.add("addbutton");
            itemAddButton.classList.add("formelements");
            itemAddButton.innerHTML = "+";
            itemAddButton.style.backgroundColor = "#0DFF6E";
            itemAddButton.style.color = "white";
            itemAddButton.style.borderRadius = "10px";
            itemAddButton.addEventListener("click", handleAddItem);
            index++;
        }
        let ctgAddButton = document.createElement("button");
        document.getElementById("categories").appendChild(ctgAddButton);
        ctgAddButton.setAttribute("id", "ctgaddbutton");
        ctgAddButton.classList.add("addbutton");
        ctgAddButton.classList.add("formelements");
        ctgAddButton.innerHTML = "+";
        ctgAddButton.style.backgroundColor = "#0DFF6E";
        ctgAddButton.style.color = "white";
        ctgAddButton.style.borderRadius = "10px";
        ctgAddButton.addEventListener("click", handleAddCtg);
    }
    function handleRemoveCtg(_event) {
        let target = _event.target;
        let divall = target.parentElement.parentElement;
        divall.parentNode.removeChild(divall);
        saveData();
        dynamicHTML();
    }
    function handleAddCtg(_event) {
        let target = _event.target;
        let index = 0;
        for (let key in newData) {
            index++;
        }
        console.log(index);
        newData[index] = {
            title: "",
            amount_type: "",
            amount: null,
            form_type: "",
            items: [{ name: "", price: null }],
        };
        dynamicHTML();
        saveData();
    }
    function handleRemoveItem(_event) {
        let target = _event.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
        saveData();
        dynamicHTML();
    }
    function handleAddItem(_event) {
        let target = _event.target;
        let divall = target.parentElement.parentElement;
        let categoryId = divall.id.slice(6, 7);
        let index = parseInt(categoryId);
        console.log(index);
        let newItemIndex = newData[index].items.length;
        newData[index].items[newItemIndex] = { name: "", price: null };
        dynamicHTML();
        saveData();
    }
    function clickHandlerSave() {
        saveData();
        sendData();
    }
    function resetData() {
        newData = WBKreloadedSeller.data;
        dynamicHTML();
    }
    function saveData() {
        newData = [];
        let divs = document.getElementById("categories").childNodes;
        for (let i = 0; i < divs.length; i++) {
            if (i == divs.length - 1) {
                continue;
            }
            let ctgStripe = divs[i].childNodes[0];
            let itemDiv = divs[i].childNodes[1];
            let ctgName = ctgStripe.children[1];
            // console.log("CategName " + (i + 1) + ": " + ctgName.value)
            let ctgType = ctgStripe.children[2];
            //console.log("CategType " + (i + 1) + ": " + ctgType.value)
            let ctgAmountType = ctgStripe.children[3];
            //console.log("CategAmountType " + (i + 1) + ": " + ctgAmountType.value)
            newData[i] =
                {
                    title: ctgName.value,
                    amount_type: ctgAmountType.value,
                    amount: null,
                    form_type: ctgType.value,
                    items: [{ name: null, price: null }],
                };
            for (let k = 0; k < itemDiv.childNodes.length; k++) {
                if (k == itemDiv.childNodes.length - 1)
                    continue;
                let itemStripe = itemDiv.children[k];
                let itemName = itemStripe.children[1];
                //console.log("ItemName " + (i + 1) + "." + (k + 1) + ": " + itemName.value)
                let itemPrice = itemStripe.children[2];
                //console.log("ItemPrice " + (i + 1) + "." + (k + 1) + ": " + itemPrice.value)
                newData[i].items[k] = {
                    name: itemName.value,
                    price: parseFloat(itemPrice.value),
                };
            }
        }
        console.log(newData);
    }
    function sendData() {
        let xhr = new XMLHttpRequest();
        query = convertDataToQuery(newData, query);
        xhr.open("GET", address + "?saveData" + query, true);
        xhr.addEventListener("readystatechange", handleStateChangeSaveData);
        xhr.send();
    }
    function handleStateChangeSaveData(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("%cServer Response:", "color: white; background-color: blue");
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            newData = JSON.parse(xhr.response);
            console.log("%cConverted Server-Response:", "color: white; background-color: green");
            console.log(newData);
            dynamicHTML();
        }
    }
    function convertDataToQuery(_data, _query) {
        _query = JSON.stringify(_data);
        return _query;
    }
})(WBKreloadedSeller || (WBKreloadedSeller = {}));
//# sourceMappingURL=seller2.js.map