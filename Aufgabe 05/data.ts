namespace Aufgabe05 {

    export interface Decoration {
        name: string;
        price: number;
    }

    export let tree: Decoration[] =
        [
            {
                name: "Nordmanntanne",
                price: 39.99
            },
            {
                name: "Blaufichte",
                price: 31.99
            },
            {
                name: "Plastiktanne",
                price: 9.99
            },
            {
                name: "Palme",
                price: 59.99
            }
        ]

    export let treeheight: number[] = [0.8, 0.9, 1, 1.1, 1.2];

    export let holder: Decoration[] =
        [
            {
                name: "Plastik-Halterung",
                price: 14.99
            },
            {
                name: "Edelstahl-Halterung",
                price: 24.99
            },
            {
                name: "'Iced-Out'-Diamant-Halterung",
                price: 9.99
            },
            {
                name: "Keramik-Blumentopf",
                price: 5.99
            }
        ]

    export let balls: Decoration[] =
        [
            {
                name: "Goldene Kugeln",
                price: 15
            },
            {
                name: "Rote Kugeln",
                price: 12
            },
            {
                name: "Gruene Kugeln",
                price: 12
            },
            {
                name: "Mercedes-Sterne",
                price: 0
            },
            {
                name: "Gucci-Kugeln",
                price: 99
            }
        ];
    export let tinsel: Decoration[] =
        [
            {
                name: "Silber Lametta",
                price: 4.99
            },
            {
                name: "Rotes Lametta",
                price: 4.99
            },
            {
                name: "Kunstschnee",
                price: 11.99
            }
        ]
    export let lights: Decoration[] =
        [
            {
                name: "Wachskerzen",
                price: 15
            },
            {
                name: "Lichterkette elektrisch",
                price: 12
            },
            {
                name: "LED-Lichterkette",
                price: 18
            }
        ]
    export let top: Decoration[] =
        [
            {
                name: "Engel",
                price: 7.99
            },
            {
                name: "Stern",
                price: 15.99
            },
            {
                name: "Supreme-Logo",
                price: 49.99
            }
        ]
}