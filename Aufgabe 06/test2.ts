namespace config {

    document.addEventListener("DOMContentLoaded", main);

    function main(): void {
        console.log("main() triggered");
        dynamicHTML();
        createEventListener(event);
    }

    function createEventListener(_event: Event): void {
        let divs: NodeListOf<Element> = document.getElementsByClassName("divtop");
        for (let i: number = 0; i < divs.length; i++) {
            let div: Element = divs[i];
            div.addEventListener("change", generateCart);
            console.log("createEventListener done");
        }
    }

    function generateCart(_event: Event): void {

        console.log("generateCart triggered");

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target);

        if (target.className == "formselect" || target.type == "radio") {



            let index: number = parseInt(target.value, 10);
            console.log(index);

            let ov_amount: HTMLDivElement = <HTMLDivElement>(document.getElementById("ov_amount"));
            let ov_items: HTMLDivElement = <HTMLDivElement>(document.getElementById("ov_items"));
            let ov_prices: HTMLDivElement = <HTMLDivElement>(document.getElementById("ov_prices"));

            ov_amount.innerHTML = "";
            ov_items.innerHTML = "";
            ov_prices.innerHTML = "";


            let name: HTMLAnchorElement = document.createElement("a");
            ov_items.appendChild(name);
            name.classList.add("overview_item");
            name.innerHTML = (data[index].name);

            let price: HTMLAnchorElement = document.createElement("a");
            ov_prices.appendChild(price);
            price.classList.add("overview_item");
            price.innerHTML = (tree[index].price + "")
            console.log("tree dropdown no." + index + " clicked")

        }




        document.getElementById("total").innerHTML = ("Gesamtpreis :   " + calculatePrice() + " Euro");
    };


    function dynamicHTML(): void {

        console.log("dynamicHTML() triggered");

        for (let i in data) {
            let category = i

            console.log("Kategorie: " + category);



            let divtop: HTMLDivElement = document.createElement("div");
            divtop.classList.add("divtop");
            document.getElementById("configurator").appendChild(divtop);

            let title: HTMLAnchorElement = document.createElement("a");
            title.innerHTML = (data[i].title + ":");
            title.classList.add("label");
            divtop.appendChild(title);

            if (data[i].form_type == "dropdown") {
                let menu: HTMLSelectElement = document.createElement("select");
                divtop.appendChild(menu);
                menu.classList.add("formselect");

                for (let k: number = 0; k < data[i].items.length; k++) {
                    let dropdown: HTMLOptionElement = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements")
                    dropdown.setAttribute("value", "" + k)
                    dropdown.setAttribute("name", data[i].title + "_Option")
                    dropdown.innerHTML = data[i].items[k].name
                }
                createAmountHTML(i, divtop);
            }
            if (data[i].form_type == "radio") {
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let radiobutton: HTMLInputElement = document.createElement("input");
                    divtop.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", data[i].title + "_Radiogroup")
                    radiobutton.innerHTML = data[i].items[k].name;
                    radiobutton.setAttribute("id", data[i].title + "_radio" + k)

                    let radiolabel: HTMLLabelElement = document.createElement("label");
                    divtop.appendChild(radiolabel);
                    radiolabel.classList.add("formlabels");
                    radiolabel.setAttribute("for", data[i].title + "_radio" + k)
                    radiolabel.innerHTML = (data[i].items[k].name);
                    createAmountHTML(i, divtop);
                    divtop.appendChild(document.createElement("br"));
                }
            }
            if (data[i].form_type == "checkbox") {
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let checkbox: HTMLInputElement = document.createElement("input");
                    divtop.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", data[i].title + "_Checkbox")
                    checkbox.innerHTML = data[i].items[k].name;
                    checkbox.setAttribute("id", data[i].title + "_checkbox" + k)

                    let checkboxlabel: HTMLLabelElement = document.createElement("label");
                    divtop.appendChild(checkboxlabel);
                    checkboxlabel.classList.add("formlabels");
                    checkboxlabel.setAttribute("for", data[i].title + "_checkbox" + k)
                    checkboxlabel.innerHTML = (data[i].items[k].name);
                    createAmountHTML(i, divtop);
                    divtop.appendChild(document.createElement("br"));

                }
            }


        }
    }

    function createAmountHTML(i: string, divtop: HTMLDivElement): void {

        if (data[i].amount_type == "slider") {
            let amount: HTMLInputElement = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_slider");
            amount.setAttribute("type", "range");
            amount.setAttribute("name", "Slider");
            amount.setAttribute("min", "0");
            amount.setAttribute("max", "1");
            amount.setAttribute("step", "" + (1 / data[i].amount.steps.length));
            amount.setAttribute("value", "0");
        };

        if (data[i].amount_type == "stepper") {
            let amount: HTMLInputElement = document.createElement("input");
            divtop.appendChild(amount);
            amount.classList.add("amount_stepper");
            amount.setAttribute("type", "number");
            amount.setAttribute("name", "Points");
            amount.setAttribute("step", "1");
            amount.setAttribute("min", "0");
            amount.setAttribute("max", "20");
        }
    }
} 