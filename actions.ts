import {Dispatch} from "redux";
import {Action} from "./types";
import axios from "axios";

axios.defaults.withCredentials = true;
const loginAction = () => {
    return async (dispatch : Dispatch<Action>) => {
        dispatch({
            type: "login_req",
            payload: {success: false, message: ""}
        })

        const response = await fetch('/api/login');
        const data = await response.json();
        console.log(data);
        if(data.success == true){
            dispatch({
                type: "login_suc",
                payload: data
            })
        }
        else{
            dispatch({
                type: "login_fail",
                payload: data
            })
        }
    }
}

export const getMe = () => {
    return async (dispatch : Dispatch<Action>) => {
        dispatch({
            type: "me_req",
            payload: {success: false, message: ""}
        })
        const response = await fetch('/api/me');
        const data = await response.json();
        if(data.success){
            dispatch({
                type: "me_suc",
                payload: {success: true, message: data.message}
            })
        }
        else{
            dispatch({
                type: "me_fail",
                payload: {success: false, message: ""}
            })
        }
    }
}
const allActions = {
    loginAction,
    getMe
}
export default allActions;