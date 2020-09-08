import {combineReducers} from 'redux'

import userReducer from "./userReducer"
import coronaReducer from "./coronaReducer"


const allReducers = combineReducers({userReducer, coronaReducer })

export default allReducers