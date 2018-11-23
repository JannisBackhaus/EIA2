namespace config {
    export interface Categories {
        [key: string]: Category;
    }
    export interface Category {
        amount_type: string;
        amount: Amount;
        form_type: string;
        items: Item[];
    }
    export interface Item {
        name: string;
        price: number;
    }
    export interface Amount {
        steps: number[],
        display: string[],
    }

    export let data: Categories[] =

        [
            {
                "tree":
                {
                    amount_type: "slider",
                    amount:
                    {
                        steps: [0.8, 0.9, 1.0, 1.1, 1.2],
                        display: ["Sehr klein", "Klein", "Normal", "Groﬂ", "GIGANTISCH"]
                    },
                    form_type: "dropdown",
                    items:
                    [
                        {
                            name: "Nordmanntanne",
                            price: 39.99,
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
                    ],

                },
            },
            {
                "holder":
                {
                    amount_type: "",
                    amount:
                    {
                        steps: [],
                        display: []
                    },
                    form_type: "radio",
                    items:
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
                            name: "'Iced-Out'-VVS-Halterung",
                            price: 9.99
                        },
                        {
                            name: "Keramik-Blumentopf",
                            price: 5.99
                        }
                    ]
                },
            },
            {
                "balls":
                {
                    amount_type: "stepper",
                    amount:
                    {
                        steps: [5, 10, 15, 20, 25],
                        display: ["5", "10", "15", "20", "25"]
                    },
                    form_type: "checkbox",
                    items:
                    [
                        {
                            name: "Goldene Kugeln",
                            price: 15.99
                        },
                        {
                            name: "Rote Kugeln",
                            price: 12.99
                        },
                        {
                            name: "Gruene Kugeln",
                            price: 12.99
                        },
                        {
                            name: "Mercedes-Sterne",
                            price: 0
                        },
                        {
                            name: "Gucci-Kugeln",
                            price: 99.99
                        }
                    ],

                },
            },
            {
                "tinsel":
                {
                    amount_type: "stepper",
                    amount:
                    {
                        steps: [5, 10, 15, 20, 25],
                        display: ["5", "10", "15", "20", "25"]
                    },
                    form_type: "checkbox",
                    items:
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
                },
            },
            {
                "lights":
                {
                    amount_type: "stepper",
                    amount:
                    {
                        steps: [5, 10, 15, 20, 25],
                        display: ["5", "10", "15", "20", "25"]
                    },
                    form_type: "checkbox",
                    items:
                    [
                        {
                            name: "Wachskerzen",
                            price: 15.99
                        },
                        {
                            name: "Lichterkette elektrisch",
                            price: 12.99
                        },
                        {
                            name: "LED-Lichterkette",
                            price: 18.99
                        }
                    ]
                },
            },
            {
                "top":
                {
                    amount_type: "",
                    amount:
                    {
                        steps: [5, 10, 15, 20, 25],
                        display: ["5", "10", "15", "20", "25"]
                    },
                    form_type: "radio",
                    items:
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
                },
            }



        ]
}