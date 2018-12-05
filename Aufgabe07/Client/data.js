var configserver;
(function (configserver) {
    configserver.data = {
        "tree": {
            title: "Baum",
            amount_type: "slider",
            amount: {
                steps: [0.8, 0.9, 1.0, 1.1, 1.2],
                display: ["Sehr klein", "Klein", "Normal", "Gross", "Gigantisch"]
            },
            form_type: "dropdown",
            items: [
                {
                    name: "",
                    price: 0,
                },
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
        "holder": {
            title: "Halterung",
            amount_type: "",
            amount: {
                steps: [],
                display: []
            },
            form_type: "radio",
            items: [
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
        "balls": {
            title: "Kugeln",
            amount_type: "stepper",
            amount: {
                steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                display: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
            },
            form_type: "checkbox",
            items: [
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
        "tinsel": {
            title: "Lametta",
            amount_type: "stepper",
            amount: {
                steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                display: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
            },
            form_type: "checkbox",
            items: [
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
        "lights": {
            title: "Lichter",
            amount_type: "stepper",
            amount: {
                steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                display: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
            },
            form_type: "checkbox",
            items: [
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
        "top": {
            title: "Spitze",
            amount_type: "",
            amount: {
                steps: [],
                display: []
            },
            form_type: "radio",
            items: [
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
    };
})(configserver || (configserver = {}));
//# sourceMappingURL=data.js.map