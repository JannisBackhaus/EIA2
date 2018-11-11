var deck;
(function (deck_1) {
    let deck = [];
    let hand = [];
    let num = 0;
    function generateDeck() {
        // Zahlen (0 - 9); Aussetzen (10); Richtungswechsel (11); 2-Ziehen (12); 4-Ziehen (13); Farbwahl (14);
        // blau (0); gelb (1); gr�n (2); rot (3); schwarz (4);
        for (let color = 0; color < 5; color++) {
            switch (color) {
                case 0:
                case 1:
                case 2:
                case 3:
                    for (let typ = 0; typ < 13; typ++) {
                        for (let i = 0; i < 2; i++) {
                            deck[num] = [color, typ];
                            num++;
                            if (typ == 0)
                                break;
                        }
                    }
                    break;
                case 4:
                    for (let typ = 13; typ < 15; typ++) {
                        for (let i = 0; i < 4; i++) {
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
    function createHTMLgeneral() {
        let div_board = document.createElement("div");
        let div_stack = document.createElement("div");
        let div_hand = document.createElement("div");
        let div_deck = document.createElement("div");
        let div_tray = document.createElement("div");
        div_hand.classList.add("div_hand");
        div_board.classList.add("div_board");
        div_stack.classList.add("div_stack");
        div_deck.classList.add("div_deck");
        div_tray.classList.add("div_tray");
        document.body.appendChild(div_board);
        div_board.appendChild(div_hand);
        div_board.appendChild(div_stack);
        div_board.appendChild(div_deck);
        div_board.appendChild(div_tray);
        div_stack.id = ("div_stack");
        let uno_img = document.createElement("img");
        uno_img.setAttribute("src", "img/UNO.png");
        uno_img.setAttribute("height", "208px");
        uno_img.setAttribute("width", "155px");
        uno_img.setAttribute("alt", "uno");
        document.getElementById("div_stack").appendChild(uno_img);
    }
    function drawCards() {
        let cards = parseInt(prompt("Wie viele Karten willst du ziehen?"), 10);
        for (let i = 0; i < cards; i++) {
            let div = document.createElement("div");
            div_hand.appendChild(div);
            let a = generateRandom(0, deck.length);
            console.log(a);
            hand[i] = deck[a];
            console.log(hand);
            deck.splice(a, 1);
            console.log(deck);
            let c = (hand[i][0]);
            let t = (hand[i][1]);
            console.log("hand-Array: " + hand[i]);
            console.log("c: " + c);
            console.log("t: " + t);
            switch (c) {
                case 0:
                    div.classList.add("blue", "card");
                    break;
                case 1:
                    div.classList.add("yellow", "card");
                    break;
                case 2:
                    div.classList.add("green", "card");
                    break;
                case 3:
                    div.classList.add("red", "card");
                    break;
                case 4:
                    div.classList.add("black", "card");
                    break;
            }
            switch (t) {
                case 0:
                    div.classList.add("zero");
                    div.innerHTML = "0";
                    break;
                case 1:
                    div.classList.add("one");
                    div.innerHTML = "1";
                    break;
                case 2:
                    div.classList.add("two");
                    div.innerHTML = "2";
                    break;
                case 3:
                    div.classList.add("three");
                    div.innerHTML = "3";
                    break;
                case 4:
                    div.classList.add("four");
                    div.innerHTML = "4";
                    break;
                case 5:
                    div.classList.add("five");
                    div.innerHTML = "5";
                    break;
                case 6:
                    div.classList.add("six");
                    div.innerHTML = "6";
                    break;
                case 7:
                    div.classList.add("seven");
                    div.innerHTML = "7";
                    break;
                case 8:
                    div.classList.add("eight");
                    div.innerHTML = "8";
                    break;
                case 9:
                    div.classList.add("nine");
                    div.innerHTML = "9";
                    break;
                case 10:
                    div.classList.add("skip");
                    div.innerHTML = "skip";
                    break;
                case 11:
                    div.classList.add("direction");
                    div.innerHTML = "<->";
                    break;
                case 12:
                    div.classList.add("drawtwo");
                    div.innerHTML = "+2";
                    break;
                case 13:
                    div.classList.add("drawfour");
                    div.innerHTML = "+4";
                    break;
                case 14:
                    div.classList.add("choose");
                    div.innerHTML = "choose";
                    break;
            }
        }
        function generateRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        console.log(deck);
        document.addEventListener('DOMContentLoaded', generateDeck);
    }
})(deck || (deck = {}));
//# sourceMappingURL=test2.js.map