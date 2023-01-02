import {GetServerSideProps, GetStaticProps} from "next";
import {useEffect, useState} from "react";
import Hello from "../components/Hello";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {bindActionCreators} from "redux";
import actions from "../actions";
import allActions from "../actions";


export default function Home(){

    const [show, setShow] = useState(true);
    const {isAuthenticated} = useSelector((state : State)=> state.user)
    console.log(isAuthenticated);
    const dispatch = useDispatch();
    const {loginAction, getMe} = bindActionCreators(allActions, dispatch);
    useEffect(()=> {
        getMe();
    }, [])


    function handleTap() {
        setShow(prevState => !prevState);
    }

    return (
      <>
        <div>next app</div>
          <Link href={'/accounts'}>Accounts</Link>
          <br></br>
          <Link href={'/secret'}>Secret</Link>
      </>
  )
}