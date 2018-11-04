namespace deck {

    let deck: number[][] = [];
    let hand: number[][] = [];
    let tray: number[][] = [];
    let num: number = 0;


    function generateDeck() {
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
    function drawCard(cards: number) {
        for (let i: number = 0; i < cards; i++) {

            let divouter: HTMLDivElement = document.createElement("div");
            document.getElementById("div_hand").appendChild(divouter);
            let divinner: HTMLDivElement = document.createElement("div");
            divouter.appendChild(divinner);
            divouter.classList.add("divouter");
            let para: HTMLParagraphElement = document.createElement("p");
            para.classList.add("cardcontent");
            divinner.appendChild(para);

            let a: number = generateRandom(0, deck.length);
            console.log(a);
            hand[i] = deck[a];
            console.log(hand);
            deck.splice(a, 1);
            console.log(deck);
            let c: number = (hand[i][0]);
            let t: number = (hand[i][1]);
            console.log("hand-Array: " + hand[i]);
            console.log("c: " + c);
            console.log("t: " + t);
            switch (c) {
                case 0:
                    divinner.classList.add("blue", "divinner");
                    break;
                case 1:
                    divinner.classList.add("yellow", "divinner");
                    break;
                case 2:
                    divinner.classList.add("green", "divinner");
                    break;
                case 3:
                    divinner.classList.add("red", "divinner");
                    break;
                case 4:
                    divinner.classList.add("black", "divinner");
                    break;
            }
            switch (t) {
                case 0:
                    divinner.classList.add("zero");
                    para.innerHTML = "0";
                    break;
                case 1:
                    divinner.classList.add("one");
                    para.innerHTML = "1";
                    break;

                case 2:
                    divinner.classList.add("two")
                    para.innerHTML = "2";
                    break;

                case 3:
                    divinner.classList.add("three")
                    para.innerHTML = "3";
                    break;

                case 4:
                    divinner.classList.add("four")
                    para.innerHTML = "4";
                    break;

                case 5:
                    divinner.classList.add("five")
                    para.innerHTML = "5";
                    break;

                case 6:
                    divinner.classList.add("six")
                    para.innerHTML = "6";
                    break;

                case 7:
                    divinner.classList.add("seven")
                    para.innerHTML = "7";
                    break;

                case 8:
                    divinner.classList.add("eight")
                    para.innerHTML = "8";
                    break;

                case 9:
                    divinner.classList.add("nine")
                    para.innerHTML = "9";
                    break;

                case 10:
                    divinner.classList.add("skip")
                    para.innerHTML = "skip";
                    break;

                case 11:
                    divinner.classList.add("direction")
                    para.innerHTML = "<->";
                    break;

                case 12:
                    divinner.classList.add("drawtwo")
                    para.innerHTML = "+2";
                    break;

                case 13:
                    divinner.classList.add("drawfour")
                    para.innerHTML = "+4";
                    break;

                case 14:
                    divinner.classList.add("choose");
                    para.innerHTML = "choose";
                    break;
            }


        }
    }

    function drawCardInitial() {
        generateDeck();
        let cards = parseInt(prompt("Wie viele Karten willst du ziehen?"), 10);
        drawCard(cards);
        console.log("Handkarten: " + document.getElementById("div_hand").children.length);

    }

    function generateRandom(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    function clickHandler(_event: Event): void {
        console.log(_event);
        let cardnode : any = _event.target;
        let cardindex = Array.from(cardnode.parentNode.children).indexOf(cardnode);
        console.log("cardindex =" + cardindex);

    }
    function sortHand() {
        hand.sort()
        console.log(hand)    
    }
    

    document.addEventListener('DOMContentLoaded', generateDeck);
    document.addEventListener('DOMContentLoaded', drawCardInitial);
    //document.addEventListener('click', clickHandler);
    let button = document.getElementById("sort");
    button.addEventListener('click', sortHand);
    console.log(deck);


}
