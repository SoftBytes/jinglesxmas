import * as postcodes_json from './zones.json'

export const WEEKEND_SURCHARGE = 25
export const AREA_SURCHARGE = 25

/*
CITY	Thursday	3,5,6,10,12,13,17,19,20
NORTH	Wednesday	2,5,6,9,12,13,16,19,20
WEST	Thursday	3,5,6,10,12,13,17,19,20
WEST/NORTH	Wednesday, Thursday	2,3,5,6,8,9,12,13,16,17,19,20
SOUTH/EAST	Monday, Tuesday	5,6,7,8,12,13,14,15,19,20
SOUTH	Monday, Tuesday, Friday	4,5,6,7,8,11,12,13,14,15,18,19,20
*/
export const ZONES = {
    C1 : {
        name: 'C1',
        areaSurcharge: true,
        availableDates: [3,5,6,10,12,13,17,19,20],
    },
    E : {
        name: 'E',
        areaSurcharge: false,
        availableDates: [5,6,7,8,12,13,14,15,19,20],
    },
    E1 : {
        name: 'E1',
        areaSurcharge: true,
        availableDates: [5,6,7,8,12,13,14,15,19,20],
    },
    N : {
        name: 'N',
        areaSurcharge: false,
        availableDates: [2,5,6,9,12,13,16,19,20],
    },
    N1 : {
        name: 'N1',
        areaSurcharge: true,
        availableDates: [2,5,6,9,12,13,16,19,20],
    },
    S : {
        name: 'S',
        areaSurcharge: false,
        availableDates: [4,5,6,7,8,11,12,13,14,15,18,19,20],
    },
    S1 : {
        name: 'S1',
        areaSurcharge: true,
        availableDates: [4,5,6,7,8,11,12,13,14,15,18,19,20],
    },
    W : {
        name: 'W',
        areaSurcharge: false,
        availableDates: [3,5,6,10,12,13,17,19,20],
    },
    W1 : {
        name: 'W1',
        areaSurcharge: true,
        availableDates: [3,5,6,10,12,13,17,19,20],
    },
}


/**
 * reads postcodes from a Json file.
 * returns an array of postcodes, each element is in form
 * {
    code: 3000,
    zone: ZONES.C1
}
 */
export const fetchPostCodesFromJson = () => {
    if (!postcodes_json) {
        return
    }
    const postcodes = postcodes_json.default.map((p) => {
        return {
            code: p.postcode,
            zone: ZONES[`${p.Zone}${!!p.surcharge ? p.surcharge : ''}`]
        }
    })
    // console.dir(postcodes)
    return postcodes
}