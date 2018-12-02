namespace config {

    function main(): void {
        dynamicHTML();
        createEventListener(event);
    }

    function dynamicHTML(): void {
        for (let i: number = 0; i < data.length; i++) {
            let divtop: HTMLDivElement = document.createElement("div");
            div1.classList.add("div1");
            document.getElementById("configurator").appendChild(div1);

            let title: HTMLAnchorElement = document.createElement("a");
            title.innerHTML = (categories[i].categ_name);
            title.classList.add("label");
            div1.appendChild("title");


            if (data[i].amount_type == "slider") {
                let amount: HTMLInputElement = document.createElement("input");
                amount.classList.add("amount_counter");
                amount.setAttribute("type", "range");
                amount.setAttribute("name", "Slider");
                amount.setAttribute("min", "0");
                amount.setAttribute("max", "1");
                amount.setAttribute("step", (1 / data[i].amount.steps.length));
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
                div1.appendChild(menu);

                for (let k: number = 0; k < data[i].items.length; k++) {
                    let dropdown: HTMLOptionElement = document.createElement("option");
                    menu.appendChild(dropdown);
                    dropdown.classList.add("formelements")
                    dropdown.setAttribute("value", "" + k)
                    dropdown.setAttribute("name", data[i].categ_name + "_Option")
                    dropdown.innerHTML = data[i].items[k].name
                }
            }
            if (data[i].form_type == "radio") {
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let radiobutton: HTMLInputElement = document.createElement("input");
                    div1.appendChild(radiobutton);
                    radiobutton.classList.add("formelements");
                    radiobutton.setAttribute("value", "" + k);
                    radiobutton.setAttribute("type", "radio");
                    radiobutton.setAttribute("name", data[i].categ_name + "_Radiogroup")
                    radiobutton.innerHTML = data[i].items[k].name;
                    radiobutton.setAttribute("id", data[i].categ_name + "_radio" + i)

                    let radiolabel: HTMLLabelElement = document.createElement("label");
                    div1.appendChild(radiobutton);
                    radiolabel.classList.add("formelements");
                    radiolabel.setAttribute("for", data[i].categ_name + "_radio" + i)
                    radiolabel.innerHTML = (data[i].items[k].name);
                }
            }
            if (data[i].form_type == "checkbox") {
                for (let k: number = 0; k < data[i].items.length; k++) {
                    let checkbox: HTMLInputElement = document.createElement("input");
                    div1.appendChild(checkbox);
                    checkbox.classList.add("formelements");
                    checkbox.setAttribute("value", "" + k);
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("name", data[i].categ_name + "_Checkbox")
                    checkbox.innerHTML = data[i].items[k].name;
                    checkbox.setAttribute("id", data[i].categ_name + "_checkbox" + i)

                    let checkboxlabel: HTMLLabelElement = document.createElement("label");
                    div1.appendChild(checkbox);
                    checkboxlabel.classList.add("formelements");
                    checkboxlabel.setAttribute("for", data[i].categ_name + "_checkbox" + i)
                    checkboxlabel.innerHTML = (data[i].items[k].name);
                }
            }
        }

//        function createHTML(): void {
//            // Baumart
//            for (let i: number = 0; i < data.tree.item.length; i++) {
//                let ele: HTMLOptionElement = document.createElement("option");
//                document.getElementById("tree_form").appendChild(ele);
//                ele.classList.add("tree_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("name", "Tree_Option")
//                ele.innerHTML = tree[i].name
//            }
//            // Halterung
//            for (let i: number = 0; i < holder.length; i++) {
//                let ele: HTMLInputElement = document.createElement("input");
//                document.getElementById("tree_holder").appendChild(ele);
//                ele.classList.add("holder_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("type", "radio")
//                ele.setAttribute("name", "Holder_Radiogroup")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("id", "holder_radio" + i)
//
//                let ele2: HTMLLabelElement = document.createElement("label");
//                document.getElementById("tree_holder").appendChild(ele2);
//                ele2.classList.add("holder_form_options")
//                ele2.classList.add("formlabels")
//                ele2.setAttribute("for", "holder_radio" + i)
//                ele2.innerHTML = holder[i].name
//            }
//            // Kugeln
//            for (let i: number = 0; i < balls.length; i++) {
//                let ele: HTMLInputElement = document.createElement("input");
//                document.getElementById("deco_balls").appendChild(ele);
//                ele.classList.add("balls_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("type", "checkbox")
//                ele.setAttribute("name", "Balls_Checkbox")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("id", "balls_check" + i)
//
//                let ele2: HTMLLabelElement = document.createElement("label");
//                document.getElementById("deco_balls").appendChild(ele2);
//                ele2.classList.add("balls_form_options")
//                ele2.classList.add("formlabels")
//                ele2.setAttribute("for", "balls_check" + i)
//                ele2.innerHTML = balls[i].name
//            }
//            // Lametta 
//            for (let i: number = 0; i < tinsel.length; i++) {
//                let ele: HTMLInputElement = document.createElement("input");
//                document.getElementById("deco_tinsel").appendChild(ele);
//                ele.classList.add("tinsel_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("type", "checkbox")
//                ele.setAttribute("name", "Tinsel_Checkbox")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("id", "tinsel_check" + i)
//
//                let ele2: HTMLLabelElement = document.createElement("label");
//                document.getElementById("deco_tinsel").appendChild(ele2);
//                ele2.classList.add("tinsel_form_options")
//                ele2.classList.add("formlabels")
//                ele2.setAttribute("for", "tinsel_check" + i)
//                ele2.innerHTML = tinsel[i].name
//            }
//            // Lichter
//            for (let i: number = 0; i < lights.length; i++) {
//                let ele: HTMLInputElement = document.createElement("input");
//                document.getElementById("deco_lights").appendChild(ele);
//                ele.classList.add("lights_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("type", "radio")
//                ele.setAttribute("name", "Lights_Radiogroup")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("id", "lights_radio" + i)
//
//                let ele2: HTMLLabelElement = document.createElement("label");
//                document.getElementById("deco_lights").appendChild(ele2);
//                ele2.classList.add("lights_form_options")
//                ele2.classList.add("formlabels")
//                ele2.setAttribute("for", "lights_radio" + i)
//                ele2.innerHTML = lights[i].name
//            }
//            // Baumspitze
//            for (let i: number = 0; i < top.length; i++) {
//                let ele: HTMLInputElement = document.createElement("input");
//                document.getElementById("deco_top").appendChild(ele);
//                ele.classList.add("top_form_options")
//                ele.classList.add("formelements")
//                ele.setAttribute("type", "radio")
//                ele.setAttribute("name", "Top_Radiogroup")
//                ele.setAttribute("value", "" + i)
//                ele.setAttribute("id", "top_radio" + i)
//
//                let ele2: HTMLLabelElement = document.createElement("label");
//                document.getElementById("deco_top").appendChild(ele2);
//                ele2.classList.add("top_form_options")
//                ele2.classList.add("formlabels")
//                ele2.setAttribute("for", "top_radio" + i)
//                ele2.innerHTML = top[i].name
//            }
//            console.log("createHTML done");
//        };
//        function createEventListener(_event: Event): void {
//            let divs: NodeListOf<Element> = document.getElementsByClassName("deco_divs");
//            for (let i: number = 0; i < divs.length; i++) {
//                let div: Element = divs[i];
//                div.addEventListener("change", generateCart);
//                console.log("createEventListener done");
//            }
//        }
//
//        function generateCart(_event: Event): void {
//            console.log(_event);
//
//            let target: HTMLInputElement = <HTMLInputElement>_event.target;
//            let target_else: HTMLElement = <HTMLElement>_event.target;
//
//            if (target_else.id == "tree_form") {
//                let index: number = parseInt(target.value, 10);
//
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("tree_type_cart"));
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("tree_type_cart_price"));
//                node.innerHTML = "";
//                node2.innerHTML = "";
//                let name: HTMLAnchorElement = document.createElement("a");
//                node.appendChild(name);
//                name.classList.add("overview_item");
//                name.innerHTML = (tree[index].name);
//                let price: HTMLAnchorElement = document.createElement("a");
//                node2.appendChild(price);
//                price.classList.add("overview_item");
//                price.innerHTML = (tree[index].price + "")
//                console.log("tree dropdown no." + index + " clicked")
//            }
//
//
//            else if (target.name == "Holder_Radiogroup" && target.checked == true) {
//                let index: number = parseInt(target.value, 10);
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("tree_holder_cart"));
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("tree_holder_cart_price"));
//                node.innerHTML = "";
//                node2.innerHTML = "";
//                let name: HTMLAnchorElement = document.createElement("a");
//                node.appendChild(name);
//                name.classList.add("overview_item");
//                name.innerHTML = (holder[index].name);
//                let price: HTMLAnchorElement = document.createElement("a");
//                node2.appendChild(price);
//                price.classList.add("overview_item");
//                price.innerHTML = (holder[index].price + "")
//                console.log("Holder radiobutton no." + index + " clicked")
//            }
//
//            else if (target.name == "Balls_Checkbox") {
//                let index: number = parseInt(target.value, 10);
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_balls_cart"));
//                node.innerHTML = "";
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_balls_cart_price"));
//                node2.innerHTML = "";
//                for (let i: number = 0; i < balls.length; i++) {
//                    let checkbox: HTMLInputElement = <HTMLInputElement>document.getElementById("balls_check" + i);
//                    if (checkbox.checked == true) {
//                        let name: HTMLAnchorElement = document.createElement("a");
//                        node.appendChild(name);
//                        name.classList.add("overview_item");
//                        name.innerHTML = (balls[i].name);
//                        let price: HTMLAnchorElement = document.createElement("a");
//                        node2.appendChild(price);
//                        price.classList.add("overview_item");
//                        price.innerHTML = (balls[i].price + "");
//                    }
//
//                }
//                console.log("Balls checkbox no." + index + " clicked")
//            }
//
//
//            else if (target.name == "Tinsel_Checkbox") {
//                console.log("tinsel")
//                let index: number = parseInt(target.value, 10);
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_tinsel_cart"));
//                node.innerHTML = "";
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_tinsel_cart_price"));
//                node2.innerHTML = "";
//                for (let i: number = 0; i < tinsel.length; i++) {
//                    let checkbox: HTMLInputElement = <HTMLInputElement>document.getElementById("tinsel_check" + i);
//                    if (checkbox.checked == true) {
//                        let name: HTMLAnchorElement = document.createElement("a");
//                        node.appendChild(name);
//                        name.classList.add("overview_item");
//                        name.innerHTML = (tinsel[i].name);
//                        let price: HTMLAnchorElement = document.createElement("a");
//                        node2.appendChild(price);
//                        price.classList.add("overview_item");
//                        price.innerHTML = (tinsel[i].price + "");
//                    }
//
//                }
//                console.log("tinsel checkbox no." + index + " clicked")
//            }
//
//            else if (target.name == "Lights_Radiogroup" && target.checked == true) {
//                let index: number = parseInt(target.value, 10);
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_lights_cart"));
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_lights_cart_price"));
//                node.innerHTML = "";
//                node2.innerHTML = "";
//                let name: HTMLAnchorElement = document.createElement("a");
//                node.appendChild(name);
//                name.classList.add("overview_item");
//                name.innerHTML = (lights[index].name);
//                let price: HTMLAnchorElement = document.createElement("a");
//                node2.appendChild(price);
//                price.classList.add("overview_item");
//                price.innerHTML = (lights[index].price + "")
//                console.log("lights radiobutton no." + index + " clicked")
//            }
//
//            else if (target.name == "Top_Radiogroup" && target.checked == true) {
//                let index: number = parseInt(target.value, 10);
//                let node: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_top_cart"));
//                let node2: HTMLDivElement = <HTMLDivElement>(document.getElementById("deco_top_cart_price"));
//                node.innerHTML = "";
//                node2.innerHTML = "";
//                let name: HTMLAnchorElement = document.createElement("a");
//                node.appendChild(name);
//                name.classList.add("overview_item");
//                name.innerHTML = (top[index].name);
//                let price: HTMLAnchorElement = document.createElement("a");
//                node2.appendChild(price);
//                price.classList.add("overview_item");
//                price.innerHTML = (top[index].price + "")
//                console.log("top radiobutton no." + index + " clicked")
//            }
//
//
//            document.getElementById("total").innerHTML = ("Gesamtpreis :   " + calculatePrice() + " Euro");
//        };
//
//        function calculatePrice(): string {
//            let node: any = Array.from(document.getElementById("ov_prices").children);
//            let calculate: number = 0;
//            for (let i: number = 0; i < node.length; i++)
//                if (node[i].firstChild != null) {
//                    let innernode = Array.from(node[i].children);
//                    console.log(node[i].firstElementChild.innerHTML);
//                    for (let k: number = 0; k < innernode.length; k++)
//                    { calculate += parseFloat(node[i].firstElementChild.innerHTML); }
//                }
//            let total: string = calculate.toFixed(2)
//            console.log(total)
//            return total;
//        }

        document.addEventListener("DOMContentLoaded", main);
    }  