import { combineReducers } from "redux";
import user from "./user";
import search_users from "./searchUser";
import notifications from "./notifications";
import listrooms from "./listrooms";

const rootReducer = combineReducers({
    user,
    search_users,
    notifications,
    listrooms,
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;