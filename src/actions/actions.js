import { CHANGE_SEARCH_FIELD, CATS_LIST } from "./constants"

export const setSearchField = (text) => ({ 
    type: CHANGE_SEARCH_FIELD, 
    payload: text
})

export const setCatsList = (list) => ({ 
    type: CATS_LIST, 
    payload: list
})
