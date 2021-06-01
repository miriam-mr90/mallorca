module.exports = {
    title: 'Mallorca',
    welcomePage: {
      title: '',
      text: 'A place of idyllic landscapes where the mountains are just a step away from the beach, and the inspiration for generations of writers, musicians and painters.',
      linkTo: '#',
      linkCopy: 'Dummy button',
    },
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://mk0abcmallorca71dgvy.kinstacdn.com/wp-content/uploads/2017/08/cala-tuent-02.jpg',
                    type: ['cove'],
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Es Trenc',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['beach'],
                    features: [],
                    isFavorite: false,
                },
                {
                    name: 'Cala Figuera',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'cala_figuera',
                    type: ['cove'],
                    features: ['snorkel'],
                    isFavorite: true,
                },
                {
                    name: 'Cala Varques',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Cala_Varques_09.jpg',
                    type: ['cove'],
                    features: [],
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                type: ['aaa', 'mexican', 'chiringuito', 'llonguets'],
            },
            items: [
                {
                    name: 'Patrón Lunares',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.hola.com/imagenes/cocina/noticiaslibros/20210303182100/raquel-sanchez-silva-restaurante-patron-lunares/0-912-395/cocacolasanchezsilva-2z-z.jpg',
                    type: ['bbb'],
                    isFavorite: true,
                },
                {
                    name: 'Buscando el norte',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Carrer de Sant Miquel, 77, 07002 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: 'https://goo.gl/maps/8xLpV8JckuE7y6QY8',
                    },
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NKkDCvDz15G5I6qpw0UqHEwVP0nqzlQu_w&usqp=CAU',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Es Vergeret',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Cala Tuent',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.esvergeret.com/userFiles/restaurant/teaser/mobile/slide-2.jpg',
                    type: ['aaa', 'ccc'],
                    isFavorite: false,
                },
                {
                    name: 'Bar Esperanza',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Ses Covetes',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.mallorca-momente.com/wp-content/uploads/2016/09/Bar-Espereanza-Mallorca-Momente-Blog-Travel-Mallorca-Momente-Blog-Travel0461.jpg',
                    type: ['chiringuito'],
                    isFavorite: true,
                },
                {
                    name: 'Aquanauta',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://gastronomicament.cat/wp-content/uploads/2016/06/restaurant-el-aquanauta-palma-1024x768.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Primo taquería',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'C. de la Fàbrica, 29, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:mexicana-3.jpg/v1/es/restaurants/38623.jpg',
                    type: ['mexican'],
                },
                {
                    name: 'Spot',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://tarruellainterioristas.com/wp-content/uploads/SPOT-1.jpg',
                    type: ['aaa'],
                },
                {
                    name: 'Es Vaixell',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Portixol',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['Llonguets'],
                },
                {
                    name: 'La vieja de  Jonay',
                    description: 'La vieja de  Jonay (canario) en casco antiguo',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['canario'],
                },
                {
                    name: '5illes EAT&DRINK',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Colonia de Sant Jordi',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa'],
                },
                {
                    name: 'Wasabi',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['japonés'],
                },
                {
                    name: 'Naan',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: 'Plaça de la Verge del Miracle, 3, 07013 Palma, Illes Balears',
                        city: 'Palma',
                        mapLocation: '',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    type: ['aaa'],
                }
            ],
        },
        {
            name: 'Tourist Attractions',
            label: 'attractions',
            icon: 'camera-photos',
            items: [
                {
                    name: 'Cap de Formentor',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: '',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Catedral de “La Seu“',
                    description: 'Catedral de “La Seu“ (Catedral de Palma) y el Parc de la Mar',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Real Palacio de la Almudaina',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Soller',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Puerto de Soller',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Soller',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Castillo Bellver',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Museo de Arte Contemporáneo de Es Baluard',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Palma',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                }
            ],
        },
        {
            name: 'Boat Rental',
            label: 'other',
            icon: 'boat',
            items: [
                {
                    name: 'Aqua Xtrem',
                    description: 'Puerto Deportivo Marina Cala D’or (160€/4 horas)',
                    where: {
                        address: '',
                        city: 'Puerto Deportivo Marina Cala D’or',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                    name: 'Alize boats',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Mallorca',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                },
                {
                  name: 'Mistral Nautic',
                  description: 'Mistral Nautic (IG: @mistralnautic): en Portocolom (190€/4 horas) ',
                  where: {
                      address: '',
                      city: 'Portocolom',
                      mapLocation: 'locationnnnn',
                  },
                  photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
              },
                {
                    name: 'Alquiler barcos Palma',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Palma de Mallorca',
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
                features: ['surf', 'kayak', 'SUP', 'diving'],
            },
            items: [
                {
                    name: 'Bonaona',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Colònia de Sant Jordi',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['kayak']
                },
                {
                    name: 'La Ola surfschool',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    where: {
                        address: '',
                        city: 'Son Ferriol',
                        mapLocation: 'locationnnnn',
                    },
                    photo: 'https://www.fincallorca.com/img/beaches/18/Es_Trenc-1_1160x654_80.jpg',
                    features: ['surf', 'kayak', 'SUP']
                }
            ],
        }
    ],
};
