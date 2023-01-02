import React, {useEffect} from "react";


const Hello : React.FC = () => {
    useEffect(()=>{
        console.log("hello mounted");
        return function() {
            console.log('component unmounted!')
        }
    }, [])
    return (
        <div>
            hello
        </div>
    )
}
export default Hello;