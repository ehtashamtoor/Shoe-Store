
const constants = {
    ADD_ITEM: "ADD_ITEM",
}

export const ADD_ITEM = (id) => {
    return (dispatch) =>{
        dispatch({
            type: constants.ADD_ITEM,
            id,
        })
    }
}

export default constants;