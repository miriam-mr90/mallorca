module.exports = {
    title: 'Mallorca',
    errors: {
        'no-results': {
            title: 'Whoops!',
            message: "Sorry, we couldn't find any result matching",
            icon: 'not-found',
        }
    },
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
                    name: 'Cala Tuent',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'cala_tuent',
                    type: 'cove',
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Es Trenc',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'es_trenc',
                    type: 'beach',
                    isFavorite: false,
                },
                {
                    name: 'Cala Figuera',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'cala_figuera',
                    type: 'cove',
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Cala Varques',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'cala_varques',
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
                    where: {
                        address: '',
                        city: 'Andratx',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'sant_elm',
                },
            ],
        },
        {
            name: 'Bars',
            label: 'bar',
            icon: 'cheers',
            items: [
                {
                    name: 'Vermutería San Jaime',
                    description: 'Lorem ipsum',
                    where: {
                        address: 'Passeig de Mallorca, 18, 07012 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'patron_lunares',
                },
            ],
        },
        {
            name: 'Restaurants',
            label: 'food',
            icon: 'food',
            filters: {
                type: ['aaa', 'mexican', 'chiringuito'],
            },
            items: [
                {
                    name: 'Patrón Lunares',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'patron_lunares',
                    type: ['aaa', 'bbb'],
                    isFavorite: true,
                },
                {
                    name: 'Buscando el norte',
                    description: 'Lorem ipsum',
                    where: {
                        address: 'Carrer de Sant Miquel, 77, 07002 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: 'https://goo.gl/maps/8xLpV8JckuE7y6QY8',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Es Vergeret',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Cala Tuent',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Bar Esperanza',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Ses Covetes',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['chiringuito'],
                    isFavorite: true,
                },
                {
                    name: 'Aquanauta',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Primo taquería',
                    description: 'Lorem ipsum',
                    where: {
                        address: 'C. de la Fàbrica, 29, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Spot',
                    description: 'Lorem ipsum',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
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
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Catedral de Palma',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Puerto de Soller',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Soller',
                        mapLocation: 'locationnnnn',
                    },
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
                    name: 'SUP',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'theatre',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
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
                    where: {
                        address: '',
                        city: 'Can Pastilla',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['SUP', 'surf', 'kayak']
                },
                {
                    name: 'El Niño',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Can Pastilla',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['SUP']
                },
                {
                    name: 'Tuent Experience',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Cala Tuent',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['SUP', 'kayak', 'diving']
                },
                {
                    name: 'Piraguas Mix',
                    description: 'Lorem ipsum',
                    where: {
                        address: '',
                        city: 'Colònia de Sant Jordi',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['kayak']
                }
            ],
        }
    ],
};
