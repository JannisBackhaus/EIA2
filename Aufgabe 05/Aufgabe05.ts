namespace Aufgabe05 {    
    
function main(): void {
    createHTML();
    createEventListener(event);
}
    
let overview: Decoration[] = []

function createHTML(): void { 
    // Baumart
    for(let i : number =0; i<tree.length ; i++){
        let ele : HTMLOptionElement = document.createElement("option");
        document.getElementById("tree_form").appendChild(ele);
        ele.classList.add("tree_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("value", "" + i)
        ele.innerHTML= tree[i].name       
    }
    // Halterung
    for(let i : number =0; i<holder.length ; i++){
        let ele : HTMLInputElement = document.createElement("input");
        document.getElementById("tree_holder").appendChild(ele);
        ele.classList.add("holder_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("type", "radio")
        ele.setAttribute("name", "Holder_Radiogroup")
        ele.setAttribute("value", "" + i)
        ele.setAttribute("id", "holder_radio" + i)

        let ele2 : HTMLLabelElement = document.createElement("label");
        document.getElementById("tree_holder").appendChild(ele2);
        ele2.classList.add("holder_form_options")
        ele2.classList.add("formlabels") 
        ele2.setAttribute("for", "holder_radio" + i)
        ele2.innerHTML= holder[i].name           
    }       
    // Kugeln
     for(let i : number =0; i<balls.length ; i++){
        let ele : HTMLInputElement = document.createElement("input");
        document.getElementById("deco_balls").appendChild(ele);
        ele.classList.add("balls_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("type", "checkbox")
        ele.setAttribute("name", "Balls_Checkbox"  + i)
        ele.setAttribute("value", "" + i)
        ele.setAttribute("id", "balls_check" + i)

        let ele2 : HTMLLabelElement = document.createElement("label");
        document.getElementById("deco_balls").appendChild(ele2);
        ele2.classList.add("balls_form_options")
        ele2.classList.add("formlabels")
        ele2.setAttribute("for", "balls_check" + i)
        ele2.innerHTML= balls[i].name       
    }
    // Lametta 
     for(let i : number =0; i<tinsel.length ; i++){
        let ele : HTMLInputElement = document.createElement("input");
        document.getElementById("deco_tinsel").appendChild(ele);
        ele.classList.add("tinsel_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("type", "checkbox")
        ele.setAttribute("name", "Tinsel_Checkbox"  + i)
        ele.setAttribute("value", "" + i)
        ele.setAttribute("id", "tinsel_check" + i)

        let ele2 : HTMLLabelElement = document.createElement("label");
        document.getElementById("deco_tinsel").appendChild(ele2);
        ele2.classList.add("tinsel_form_options")
        ele2.classList.add("formlabels")
        ele2.setAttribute("for", "tinsel_check" + i)
        ele2.innerHTML= tinsel[i].name       
    } 
    // Lichter
    for(let i : number =0; i<lights.length ; i++){
        let ele : HTMLInputElement = document.createElement("input");
        document.getElementById("deco_lights").appendChild(ele);
        ele.classList.add("lights_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("type", "radio")
        ele.setAttribute("name", "Lights_Radiogroup")
        ele.setAttribute("value", "" + i)
        ele.setAttribute("id", "lights_radio" + i)

        let ele2 : HTMLLabelElement = document.createElement("label");
        document.getElementById("deco_lights").appendChild(ele2);
        ele2.classList.add("lights_form_options")
        ele2.classList.add("formlabels")
        ele2.setAttribute("for", "lights_radio" + i) 
        ele2.innerHTML= lights[i].name      
    }
    // Baumspitze
    for(let i : number =0; i<top.length ; i++){
        let ele : HTMLInputElement = document.createElement("input");
        document.getElementById("deco_top").appendChild(ele);
        ele.classList.add("top_form_options")
        ele.classList.add("formelements")
        ele.setAttribute("type", "radio")
        ele.setAttribute("name", "Top_Radiogroup")
        ele.setAttribute("value", "" + i)
        ele.setAttribute("id", "top_radio" + i)

        let ele2 : HTMLLabelElement = document.createElement("label");
        document.getElementById("deco_top").appendChild(ele2);
        ele2.classList.add("top_form_options")
        ele2.classList.add("formlabels")
        ele2.setAttribute("for", "top_radio" + i) 
        ele2.innerHTML= top[i].name      
    }
    console.log("createHTML done");
};
    function createEventListener(_event: Event): void {
        let divs: NodeListOf<Element> = document.getElementsByClassName("deco_divs");
        for (let i: number = 0; i < divs.length; i++) 
        {   let div: Element = divs[i];
            div.addEventListener("change", generateCart);
        console.log("createEventListener done");
        }}
    
    function generateCart(_event:Event):void {
        console.log(_event); 
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        
        
        
        
        if (target.name == "Holder_Radiogroup" && target.checked == true){
            let index : number = parseInt(target.value, 10);
            let node : HTMLDivElement = <HTMLDivElement>(document.getElementById("tree_holder_cart"));
            node.innerHTML = holder[index].name;
            console.log("Holder radiobutton no."+ index + " clicked")}
            
        
        
        
        if (target.name == "Balls_Checkbox" && target.checked == true){
            let index : number = parseInt(target.value, 10);

            console.log("Balls checkbox no."+ index + " clicked")}
            
        
        
    }
    


document.addEventListener("DOMContentLoaded", main);
}  