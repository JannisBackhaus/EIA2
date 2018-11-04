namespace deck {

    var deck: number[][] = [];
    var num: number = 0;

    function main() {
        // Zahlen (0 - 9); Aussetzen (10); Richtungswechsel (11); 2-Ziehen (12); 4-Ziehen (13); Farbwahl (14);
        // blau (0); gelb (1); grün (2); rot (3); schwarz (4);
        for (let color: number = 0; color < 5; color++) {
            for (let typ: number = 0; typ < 15; typ++) {
                if (color < 4) {
                    if (typ < 12 && typ != 0) {
                        for (var i: number = 0; i < 2; i++) {
                            deck[num] = [color, typ];
                            num++;
                        }
                    }
                    else if (typ = 0) {
                        deck[num] = [color, typ];
                        num++;
                    }
                }
                //                if (color=5) {
                //                    if (typ < 13)
                //                        break;
                //                    else {
                //                        for (var i: number = 0; i < 4; i++) {
                //                            deck[num] = [color, typ];
                //                            num++;
                //                        }
                //                    }
                //                }
            }
        }
        console.log(deck);
    }
    document.addEventListener('DOMContentLoaded', main);
}