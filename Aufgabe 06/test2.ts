namespace config {
    
    document.addEventListener("DOMContentLoaded", main);

    function main(): void {
        console.log("main() triggered");
        dynamicHTML();
    } 

    function dynamicHTML(): void {
        console.log("dynamicHTML() triggered");
        for (let i: number = 0; i < data.length  ; i++) {
            
            console.log("data.length = " + data.length);
            console.log("data[i][0].form_type = " + data[i]["tree"].form_type); 
            
            let divtop: HTMLDivElement = document.createElement("div");
            divtop.classList.add("divtop");
            document.getElementById("configurator").appendChild(divtop);

            let title: HTMLAnchorElement = document.createElement("a");
            title.innerHTML = (data[i][0].form_type);
            title.classList.add("label");
            divtop.appendChild(title);
   

            if (data[i].amount_type == "slider") { 
                let amount: HTMLInputElement = document.createElement("input");
                amount.classList.add("amount_counter");
                amount.setAttribute("type", "range");
                amount.setAttribute("name", "Slider");
                amount.setAttribute("min", "0"); 
                amount.setAttribute("max", "1");
                amount.setAttribute("step", "" +(1 / data[i].amount.steps.length));
                amount.setAttribute("value", "0"); 
            };
            if (data[i].amount_type == "stepper") {
                let amount: HTMLInputElement = document.createElement("input");
                amount.classList.add("amount_counter");
                amount.setAttribute("type", "number");
                amount.setAttribute("name", "Points");
                amount.setAttribute("step", "5");
                amount.setAttribute("max", "1");
            }
            if (data[i].form_type == "dropdown") {
                let menu: HTMLSelectElement = document.createElement("select");
                divtop.appendChild(menu);

                for (let k: number = 0; k < data[i].items.length; k++) {
                    let dropdown: HTMLOptionElement = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements")
                    dropdown.setAttribute("value", "" + k)
                    dropdown.setAttribute("name", data[i].form_type + "_Option")
                    dropdown.innerHTML = data[i].items[k].name
                }
            }
            if (data[i].form_type == "radio") { 
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let radiobutton: HTMLInputElement = document.createElement("input"); 
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", data[i].form_type + "_Radiogroup")
                    radiobutton.innerHTML = data[i].items[k].name;
                    radiobutton.setAttribute("id", data[i].form_type + "_radio" + i)

                    let radiolabel: HTMLLabelElement = document.createElement("label");
                    divtop.appendChild(radiobutton);
                    radiolabel.classList.add("formelements");
                    radiolabel.setAttribute("for", data[i].form_type + "_radio" + i)
                    radiolabel.innerHTML = (data[i].items[k].name);
                }
            }
            if (data[i].form_type == "checkbox") {
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let checkbox: HTMLInputElement = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", data[i].form_type + "_Checkbox")
                    checkbox.innerHTML = data[i].items[k].name;
                    checkbox.setAttribute("id", data[i].form_type + "_checkbox" + i)

                    let checkboxlabel: HTMLLabelElement = document.createElement("label");
                    divtop.appendChild(checkbox);
                    checkboxlabel.classList.add("formelements");
                    checkboxlabel.setAttribute("for", data[i].form_type + "_checkbox" + i)
                    checkboxlabel.innerHTML = (data[i].items[k].name);
                }
            }
        }
    }
} 