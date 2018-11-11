namespace Aufgabe04 {

    let deck: number[][] = [];
    let hand: number[][] = [];
    let tray: number[][] = [];
    let num: number = 0;



    function generateDeck(): void {
        // Zahlen (0 - 9); Aussetzen (10); Richtungswechsel (11); 2-Ziehen (12); 4-Ziehen (13); Farbwahl (14);
        // blau (0); gelb (1); grün (2); rot (3); schwarz (4);
        for (let color: number = 0; color < 5; color++) {
            switch (color) {
                case 0:
                case 1:
                case 2:
                case 3:
                    for (let typ: number = 0; typ < 13; typ++) {
                        for (let i: number = 0; i < 2; i++) {
                            deck[num] = [color, typ];
                            num++;
                            if (typ == 0)
                                break;
                        }
                    }
                    break;
                case 4:
                    for (let typ: number = 13; typ < 15; typ++) {
                        for (let i: number = 0; i < 4; i++) {
                            deck[num] = [color, typ];
                            num++;
                        }
                    }
                    break;
                default:
                    console.log("Something's wrong. -> color-Switch");
                    break;
            }
        }
    }

    function drawOne(): void {
        drawCard(1);
    }

    function drawCard(a: number) {
        for (let i: number = 0; i < a; i++) {
            let rnum: number = generateRandom(0, deck.length);
            hand.push([deck[rnum][0], deck[rnum][1]]);
            deck.splice(rnum, 1);
            console.log("Card drawn: " + hand[hand.length - 1]);
        }
        displayHand();
    }
    function keyboardDraw(_event: KeyboardEvent){
            if (_event.keyCode == 32)
                {drawCard(1);}
    }
    function initialCardDraw(): void {
        let cards = parseInt(prompt("Wie viele Karten willst du ziehen?"), 10);
        drawCard(cards);
    }

    function displayHand(): void {
        let node: HTMLElement = document.getElementById("div_hand")
        console.log(node.firstChild);
        console.log(hand);
        while (node.firstChild != null)
        { node.removeChild(node.firstChild) }

        for (let i: number = 0; i < hand.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            let para: HTMLParagraphElement = document.createElement("p");

            div.classList.add("card");
            para.classList.add("cardcontent");

            document.getElementById("div_hand").appendChild(div);
            div.appendChild(para);

            let t: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "skip", "direction", "drawtwo", "drawfour", "choose"];
            let c: string[] = ["blue", "yellow", "green", "red", "black"];
            let content: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "<=>", "+2", "+4", "?"];

            let index_c: number = hand[i][0];
            let index_t: number = hand[i][1];

            div.classList.add(t[index_t]);
            div.classList.add(c[index_c]);
            para.innerHTML = content[index_t];
            div.setAttribute("id", "card" + i);
            
            let card_count : HTMLElement = document.getElementById("p_cardcount");
            card_count.innerHTML=("" + hand.length); 
            if (hand.length == 0)
                card_count.innerHTML=("0"); 

        } 
        dynamicHand();
    }
    function dynamicHand() {
        for (let i: number = 0; i < hand.length; i++) {
            let k: number = (i * 155 + i * 15);
            document.getElementById("card" + i).style.left = k + "px";

            let div_hand_node: HTMLElement = document.getElementById("div_hand");
            let div_hand_width: number = parseInt(window.getComputedStyle(div_hand_node).getPropertyValue("width"));
            console.log("div_hand_width: " + div_hand_width);
            let div_card_node: Element = div_hand_node.firstElementChild;
            let div_card_width: number = parseInt(window.getComputedStyle(div_card_node).getPropertyValue("width"));
            console.log("div_card_width: " + div_card_width)
            if (hand.length * div_card_width * 1.1212 > div_hand_width) {
                console.log("css active")
                //document.getElementById("card" + i).style.left = (k *(1-(div_card_width/div_hand_width)))+ "px";
                document.getElementById("card" + i).style.left =  (i * 155 - i * (40 * (hand.length*(div_card_width/div_hand_width))))  + "px";
            }
            
        }
    };
    function displayTray() {
        let node: HTMLElement = document.getElementById("div_tray")
        console.log(node.firstChild);
        console.log(hand);
        while (node.firstChild != null)
        { node.removeChild(node.firstChild) }
        let div: HTMLDivElement = document.createElement("div");
        let para: HTMLParagraphElement = document.createElement("p");

        div.classList.add("card");
        para.classList.add("cardcontent");

        document.getElementById("div_tray").appendChild(div);
        div.appendChild(para);

        let t: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "skip", "direction", "drawtwo", "drawfour", "choose"];
        let c: string[] = ["blue", "yellow", "green", "red", "black"];
        let content: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "<=>", "+2", "+4", "?"];

        let index_c: number = tray[(tray.length - 1)][0];
        let index_t: number = tray[(tray.length - 1)][1];

        div.classList.add(t[index_t]);
        div.classList.add(c[index_c]);
        para.innerHTML = content[index_t];
        div.setAttribute("id", "traytop");
    }

    function generateRandom(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function playCard(_event: Event): void {
        let cardnode: any = _event.target;
        let cardindex: number = Array.from(cardnode.parentNode.children).indexOf(cardnode);
        console.log("CARDNODE: " + cardnode.id);
        if (cardnode.id != "div_hand") {
            tray.push([hand[cardindex][0], hand[cardindex][1]]);
            hand.splice(cardindex, 1);
            displayHand();
            displayTray();
        }
    }
    function sortHandByColor(): void {
        hand.sort(function(a, b) {
            var x = a[0];
            var y = b[0];
            return x - y;
        })
        displayHand();
    }
    function main(): void {
        generateDeck();
        initialCardDraw();
        document.getElementById("div_deck").addEventListener("click", drawOne)
        document.getElementById("div_hand").addEventListener("click", playCard)
        document.addEventListener("keydown", keyboardDraw)
        document.getElementById("div_sort").addEventListener("click", sortHandByColor)
        window.addEventListener('resize', dynamicHand)
    }
    
    document.addEventListener("DOMContentLoaded", main);
} 