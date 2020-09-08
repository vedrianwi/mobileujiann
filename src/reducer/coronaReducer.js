import { GET_DATA} from "../action"

const INITIAL_STATE = {
    global: [],
}

const coronaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, global: action.payload}
        default : 
            return state
    }
}

export default coronaReducer