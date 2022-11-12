
const constants = {
    ADD_ITEM: "ADD_ITEM",
    INC_ITEM: "INC_ITEM",
    DEC_ITEM: "DEC_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    DISMANTLE_ITEM: "DISMANTLE_ITEM",
}

export const ADD_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.ADD_ITEM,
            id,
        })
    }
}
export const INC_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.INC_ITEM,
            id,
        })
    }
}
export const DEC_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.DEC_ITEM,
            id,
        })
    }
}
export const REMOVE_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.REMOVE_ITEM,
            id,
        })
    }
}
export const DISMANTLE_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.DISMANTLE_ITEM,
            id,
        })
    }
}

export default constants;