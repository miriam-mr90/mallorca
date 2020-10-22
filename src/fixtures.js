module.exports = {
    title: 'Mallorca',
    categories: [
        {
            name: 'Beaches & Coves',
            label: 'beach',
            icon: 'beach',
            filters: {
                type: ['beach', 'cove'],
                features: ['family', 'accessible', 'snorkel'],
            },
            items: [
                {
                    name: 'Es Trenc',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: 'beach',
                    isFavorite: true,
                },
                {
                    name: 'Cala Tuent',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: 'cove',
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Cala Figuera',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: 'cove',
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Cala Varques',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: 'cove',
                    isFavorite: false,
                }
            ],
        },
        {
            name: 'Hiking routes',
            label: 'routes',
            icon: 'hiking',
            items: [
                {
                    name: 'Sant Elm',
                    description: 'Lorem ipsum',
                    where: 'Andratx',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
            ],
        },
        {
            name: 'Food & Drinks',
            label: 'food',
            icon: 'food',
            filters: {
                type: ['aaa', 'mexican', 'chiringuito'],
            },
            items: [
                {
                    name: 'Patrón Lunares',
                    description: 'Lorem ipsum',
                    where: 'Palma',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa', 'bbb'],
                    isFavorite: true,
                },
                {
                    name: 'Buscando el norte',
                    description: 'Lorem ipsum',
                    where: 'Palma',
                    mapLocation: 'Carrer de Sant Miquel, 77, 07002 Palma, Illes Balears',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Es Vergeret',
                    description: 'Lorem ipsum',
                    where: 'Cala Tuent',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Bar Esperanza',
                    description: 'Lorem ipsum',
                    where: 'Ses Covetes',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['chiringuito'],
                    isFavorite: true,
                },
                {
                    name: 'Aquanauta',
                    description: 'Lorem ipsum',
                    where: 'Palma',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Primo taquería',
                    description: 'Lorem ipsum',
                    where: 'Palma',
                    mapLocation: 'C. de la Fàbrica, 29, 07013 Palma, Illes Balears',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Spot',
                    description: 'Lorem ipsum',
                    where: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                    mapLocation: 'C. de la Fàbrica, 29, 07013 Palma, Illes Balears',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa'],
                },
            ],
        },
        {
            name: 'Tourist Attractions',
            label: 'attractions',
            icon: 'camera-photos',
            items: [
                {
                    name: 'Cap de Formentor',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Catedral de Palma',
                    description: 'Lorem ipsum',
                    where: 'Palma',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Puerto de Soller',
                    description: 'Lorem ipsum',
                    where: 'Soller',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
            ],
        },
        {
            name: 'Boat Rental',
            label: 'other',
            icon: 'boat',
            items: [
                {
                    name: 'Boats',
                    description: 'Lorem ipsum',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'SUP',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'theatre',
                    description: 'Lorem ipsum',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                }
            ],
        },
        {
            name: 'SUP, Kayak & Surf',
            label: 'sup-kayak-surf',
            icon: 'surf',
            filters: {
                features: ['surf', 'kayak', 'SUP'],
            },
            items: [
                {
                    name: 'Bonaona',
                    description: 'Lorem ipsum',
                    where: 'Can Pastilla',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['SUP', 'surf', 'kayak']
                },
                {
                    name: 'Tuent Experience',
                    description: 'Lorem ipsum',
                    where: 'Cala Tuent',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['SUP', 'kayak', 'diving']
                },
                {
                    name: 'Piraguas Mix',
                    description: 'Lorem ipsum',
                    where: 'Colònia de Sant Jordi',
                    mapLocation: 'locationnnnn',
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['kayak']
                }
            ],
        }
    ],
};
