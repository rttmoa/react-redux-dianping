import * as actionTypes from '../constants/store'
// console.log(actionTypes) // {STORE_UPDATE: 'STORE_UPDATE', STORE_ADD: 'STORE_ADD', STORE_RM: 'STORE_RM', __esModule: true}





export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function rm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}