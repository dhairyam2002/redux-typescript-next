import {Action, State} from "./types";

export const loginReducers = (state : State | null, action : Action) : State | null=> {
    switch (action.type){
        case "login_req":
            return {isAuthenticated: false, data: action.payload}
        case "login_suc":
            return {isAuthenticated: true, data: action.payload}
        case "login_fail":
            return {isAuthenticated: false, data: action.payload}
        case "me_req":
            return {isAuthenticated: false, data: action.payload}
        case "me_suc":
            return {isAuthenticated: true, data: action.payload}
        case "me_fail":
            return {isAuthenticated: false, data: action.payload}
        default:
            return {
                isAuthenticated: false,
                data: {success: false, message: ""}
            };
    }
}