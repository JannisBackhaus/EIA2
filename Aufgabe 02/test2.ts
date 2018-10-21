namespace deck {

    let deck: number[][] = [];
    let hand: number[][] = [];
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
                                for (let i: number = 0; i < 2; i++) {
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
        let div_board: HTMLDivElement = document.createElement("div");
        let div_hand: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div_board);
        div_board.appendChild(div_hand);

        let cards = parseInt(prompt("Wie viele Karten willst du ziehen?"), 10);
        let content: string;
        for (let i: number = 0; i < cards; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div_hand.appendChild(div);
            let a: number= generateRandom(0,deck.length);
            console.log(a);
            let t: number = (deck[a][1]);
            let c: number = (deck[a][0]);
            if (t=0)
                div.classList.add("blue")
            else if (t=1)
                div.classList.add("yellow")
            else if (t=2)
                div.classList.add("green")
            else if (t=3)
                div.classList.add("red")
            else if (t=4)
                div.classList.add("black")
            
        }
    }

    //generateRandom(0,deck.length)
    function generateRandom(min: number, max: number) {
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
//                div.classList.add("grün")
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
}
