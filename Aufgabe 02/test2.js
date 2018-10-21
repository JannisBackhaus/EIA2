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
                        switch (typ) {
                            case 0:
                                deck[num] = [color, typ];
                                num++;
                                break;
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                                for (let i = 0; i < 2; i++) {
                                    deck[num] = [color, typ];
                                    num++;
                                }
                                break;
                            default:
                                console.log("Something's wrong. -> typ-Switch");
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
        let div_board = document.createElement("div");
        div_board.classList.add("div_board");
        let div_hand = document.createElement("div");
        div_hand.classList.add("div_hand");
        document.body.appendChild(div_board);
        div_board.appendChild(div_hand);
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
            let t = (hand[i][1]);
            let c = (hand[i][0]);
            if (t = 0)
                div.classList.add("blue", "card");
            else if (t = 1)
                div.classList.add("yellow", "card");
            else if (t = 2)
                div.classList.add("green", "card");
            else if (t = 3)
                div.classList.add("red", "card");
            else if (t = 4)
                div.classList.add("black", "card");
            if (c = 0) {
                div.classList.add("zero");
                div.innerHTML = "0";
            }
            else if (c = 1) {
                div.classList.add("one");
                div.innerHTML = "1";
            }
            else if (c = 2) {
                div.classList.add("two");
                div.innerHTML = "2";
            }
            else if (c = 3) {
                div.classList.add("three");
                div.innerHTML = "3";
            }
            else if (c = 4) {
                div.classList.add("four");
                div.innerHTML = "4";
            }
            else if (c = 5) {
                div.classList.add("five");
                div.innerHTML = "5";
            }
            else if (c = 6) {
                div.classList.add("six");
                div.innerHTML = "6";
            }
            else if (c = 7) {
                div.classList.add("seven");
                div.innerHTML = "7";
            }
            else if (c = 8) {
                div.classList.add("eight");
                div.innerHTML = "8";
            }
            else if (c = 9) {
                div.classList.add("nine");
                div.innerHTML = "9";
            }
            else if (c = 10) {
                div.classList.add("skip");
                div.innerHTML = "Aussetzen";
            }
            else if (c = 11) {
                div.classList.add("direction");
                div.innerHTML = "Richtungswechsel";
            }
            else if (c = 12) {
                div.classList.add("drawtwo");
                div.innerHTML = "+2";
            }
            else if (c = 13) {
                div.classList.add("drawfour");
                div.innerHTML = "+4";
            }
            else if (c = 14) {
                div.classList.add("choose");
                div.innerHTML = "Farbwahl";
            }
        }
    }
    //generateRandom(0,deck.length)
    function generateRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //    function createHTML() {
    //
    //        let div_board: HTMLDivElement = document.createElement("div");
    //        let div_hand: HTMLDivElement = document.createElement("div");
    //        document.body.appendChild(div_board);
    //        div_board.appendChild(div_hand);
    //
    //        let cards = parseInt(prompt("Wie viele Karten willst du ziehen?"), 10);
    //        let content: string;
    //        for (let i: number = 0; i < cards; i++) {
    //            let div: HTMLDivElement = document.createElement("div");
    //            div_hand.appendChild(div);
    //            let t: number = deck[generateRandom(0,deck.length)][1];
    //            let c: number = deck[generateRandom(0,deck.length)][0];
    //            if (t=0)
    //                div.classList.add("blue")
    //            else if (t=1)
    //                div.classList.add("gelb")
    //            else if (t=2)
    //                div.classList.add("gr�n")
    //            else if (t=3)
    //                div.classList.add("rot")
    //            else if (t=4)
    //                div.classList.add("schwarz")
    //            
    //        }
    //
    //    } 
    console.log(deck);
    document.addEventListener('DOMContentLoaded', generateDeck);
})(deck || (deck = {}));
//# sourceMappingURL=test2.js.map