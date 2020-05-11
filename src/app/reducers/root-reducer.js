import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";

const rootReducer =combineReducers({
    //test: testReducer
    events: eventReducer
})
export default rootReducer