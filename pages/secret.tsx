import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { State } from "../store";
import {useRouter} from "next/router";

const Secret = () => {
    const {isAuthenticated} = useSelector((state : State)=> state.user);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        if(isAuthenticated){
            setLoading(false);
        }
        else{
            router.push("/");
        }
    }, [isAuthenticated])
    return (
        <div>
            {loading ? "loading" :  <img src={"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"}/>}
        </div>
    )
}

export default Secret;