import { combineReducers } from "redux";
import { partyReducer, connectionReducer, electionReducer, userReducer } from "./admin/adminReducer";

let rootReducer = combineReducers({
    partyReducer,
    userReducer,
    electionReducer,
    connectionReducer
})

export default rootReducer