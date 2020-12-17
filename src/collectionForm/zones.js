import moment from 'moment'
import * as postcodes_json from './zones.json'

export const ZONES = {
    C : {
        name: 'C',
        availableDates: [3, 9],
    },
    SE : {
        name: 'SE',
        availableDates: [3, 9],
    },
    N : {
        name: 'N',
        availableDates: [2, 10],
    },
    WN : {
        name: 'WN',
        availableDates: [2, 10],
    },
    S : {
        name: 'S',
        availableDates: [3, 9],
    },
    W : {
        name: 'W',
        availableDates: [2, 10],
    }, 
}

/**
 * Checks todays date. 
 * If it's Jan, returns a new array with only days after today.
 * Else returns the initial array without modifying.
 */
const getFutureDays = (availableDates) => {
    const todayMonth = moment().month()
    //jan=0
    if (todayMonth !== 0) { 
        return availableDates
    }
    const todayDay = moment().date()
    const futureAvailableDates = availableDates.filter(d => d > todayDay)
    return futureAvailableDates
}
/**
 * reads postcodes from a Json file.
 * returns an array of postcodes, each element is in form
 * {
    code: 3000,
    zone: ZONES.C
}
 */
export const fetchPostCodesFromJson = () => {
    if (!postcodes_json) {
        return
    }
    
    const postcodes = postcodes_json.default.map(p => {
        const zone = ZONES[`${p.zone}`]
        return {
            code: p.postcode,
            zone: {
                ...zone,
                availableDates: getFutureDays(zone.availableDates),
            }
        }
    })
    return postcodes
}