import { CHANGE_SEARCH_FIELD, CATS_LIST } from "../actions/constants"

const initialState = {
    searchField: '',
    catsList: [],
}

export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload }
        case CATS_LIST:
            return { ...state, catsList: action.payload }
        default:
            return state
    }
}