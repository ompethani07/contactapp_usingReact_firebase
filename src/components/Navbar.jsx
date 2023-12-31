import React from 'react'
import {FaRegUserCircle} from "react-icons/fa";
import {googleprovider} from "../config/firebase";
import auth from "../config/firebase";
import {signInWithPopup,signOut} from "firebase/auth"
import {useState} from "react";
const Navbar = () => {

  const [islogin,setislogin]=useState(false);

  const signinwithgoogle=async()=>{
    try{
        await signInWithPopup(auth,googleprovider);
        setislogin(true)
    }
    catch(error){
        console.error(error);
    }
}

const Logout=async()=>{
  try{
      await signOut(auth,googleprovider);
      console.log("logout");
      setislogin(false);
  }
  catch(error){
      console.error(error);
  }
}
  // const userimg=(auth?.currentUser?.photoURL)
  // console.log(userimg)

  return (
    <div className='h-[60px] mb-6 text-[20px] font-semibold bg-white gap-2 my-4 rounded-lg flex items-center justify-center'>
      {islogin ? <span className="text-sm rounded"><img src={auth?.currentUser?.photoURL} alt="somethig went wrong"/></span>:<FaRegUserCircle onClick={signinwithgoogle} className="text-4xl cursor-pointer"/>}
      <img src='firebase.svg' alt='firebaselogo'/>
      <h1>Firebase Contact App</h1>
      <button className="bg-red-500 text-sm text-white rounded cursor-pointer" onClick={Logout}>Logout</button>
    </div>
  )
}

export default Navbar
