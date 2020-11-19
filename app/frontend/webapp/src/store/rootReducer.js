import {SET_SPORT} from "./actionTypes";

const initialState = {
    selected_sport: null
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPORT:
            return {...state, selected_sport: action.payload}
            break;
        default:
            return state
            break;
    }
}


export default rootReducer