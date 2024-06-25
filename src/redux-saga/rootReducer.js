import { combineReducers } from "redux";
import { partyReducer, connectionReducer, electionReducer, userReducer , voteReducer } from "./admin/adminReducer";

let rootReducer = combineReducers({
    partyReducer,
    userReducer,
    electionReducer,
    connectionReducer,
    voteReducer
})

export default rootReducer