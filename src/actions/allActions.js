
const constants = {
    ADD_ITEM: "ADD_ITEM",
    INC_ITEM: "INC_ITEM"
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

export default constants;