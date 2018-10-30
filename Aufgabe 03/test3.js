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
    function drawCard(cards) {
        for (let i = 0; i < cards; i++) {
            let divouter = document.createElement("div");
            document.getElementById("div_hand").appendChild(divouter);
            let divinner = document.createElement("div");
            divouter.appendChild(divinner);
            divouter.classList.add("divouter");
            let para = document.createElement("p");
            para.classList.add("cardcontent");
            divinner.appendChild(para);
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
                    divouter.classList.add("blue", "divinner");
                    break;
                case 1:
                    divouter.classList.add("yellow", "divinner");
                    break;
                case 2:
                    divouter.classList.add("green", "divinner");
                    break;
                case 3:
                    divouter.classList.add("red", "divinner");
                    break;
                case 4:
                    divouter.classList.add("black", "divinner");
                    break;
            }
            switch (t) {
                case 0:
                    divinner.classList.add("zero");
                    para.innerHTML = "0";
                    let image_a = document.createElement("img");
                    image_a.setAttribute("src", "img/0.png");
                    image_a.setAttribute("alt", "zero");
                    divouter.appendChild(image_a);
                    break;
                case 1:
                    divinner.classList.add("one");
                    para.innerHTML = "1";
                    let image_b = document.createElement("img");
                    image_b.setAttribute("src", "img/1.png");
                    image_b.setAttribute("alt", "one");
                    divouter.appendChild(image_b);
                    break;
                case 2:
                    divinner.classList.add("two");
                    para.innerHTML = "2";
                    let image_c = document.createElement("img");
                    image_c.setAttribute("src", "img/2.png");
                    image_c.setAttribute("alt", "two");
                    divouter.appendChild(image_c);
                    break;
                case 3:
                    divinner.classList.add("three");
                    para.innerHTML = "3";
                    break;
                case 4:
                    divinner.classList.add("four");
                    para.innerHTML = "4";
                    break;
                case 5:
                    divinner.classList.add("five");
                    para.innerHTML = "5";
                    break;
                case 6:
                    divinner.classList.add("six");
                    para.innerHTML = "6";
                    break;
                case 7:
                    divinner.classList.add("seven");
                    para.innerHTML = "7";
                    break;
                case 8:
                    divinner.classList.add("eight");
                    para.innerHTML = "8";
                    break;
                case 9:
                    divinner.classList.add("nine");
                    para.innerHTML = "9";
                    break;
                case 10:
                    divinner.classList.add("skip");
                    para.innerHTML = "skip";
                    break;
                case 11:
                    divinner.classList.add("direction");
                    para.innerHTML = "<->";
                    break;
                case 12:
                    divinner.classList.add("drawtwo");
                    para.innerHTML = "+2";
                    break;
                case 13:
                    divinner.classList.add("drawfour");
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
    }
    function generateRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(deck);
    document.addEventListener('DOMContentLoaded', drawCardInitial);
})(deck || (deck = {}));
//# sourceMappingURL=test3.js.map