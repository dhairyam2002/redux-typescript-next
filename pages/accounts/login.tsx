import React from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../actions";
import {bindActionCreators} from "redux";
import {State} from '../../store';

export default function Login() {
    const dispatch = useDispatch();
    const {loginAction} = bindActionCreators(allActions, dispatch);
    function handleClick(){
        loginAction();
    }

    const user = useSelector((state: State) => state.user)

    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
