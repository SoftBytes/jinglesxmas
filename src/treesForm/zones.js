//placeholder data, to be updated
export const WEEKEND_SURCHARGE = 10

export const ZONES = {
    CBD : {
        name: 'CBD',
        key: 1,
        price: 15,
        availableDates: [1,2,5,6,8,9,12,13,15,16,19,20],
    },
    InnerSuburbs : {
        name: 'Inner suburbs',
        key: 2,
        price: 20,
        availableDates: [1,2,5,6,8,9],
    },
    OuterSuburbs: {
        name: 'Outer suburbs',
        key: 3,
        price: 30,
        availableDates: [13,15,16,19,20],
    },
}

export const POSTCODES = [{
    code: 3000,
    zone: ZONES.CBD
},
{
    code: 3190,
    zone: ZONES.InnerSuburbs
}]