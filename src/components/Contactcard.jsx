import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { FaRegUserCircle, FaTrash, FaUserEdit } from 'react-icons/fa'
import { db } from '../config/firebase'
import Addupdateanddelete from './Addupdateanddelete'
import usedclose from '../hooks/usedclose'
import { toast } from 'react-toastify'
import { LuUserSquare2 } from "react-icons/lu";

const Contactcard = ({contact}) => {
  // const {onclose,isopen, onopen} =usedclose();
  const [isopen,setisopen]=useState(false);

  const onopen=()=>{
    setisopen(true)
  }
  
  const onclose=()=>{
    setisopen(false)
  }
  
  const deletecontact=async(id)=>{
    try {
      await deleteDoc(doc(db,"contact",id))
      toast.success("contact deleted succsessfully");
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
    <div
    className="rounded-lg mt-3 justify-between flex p-2 items-center bg-yellow"
    key={contact.id}
  >
  <div className='flex items-center gap-2'>
    <LuUserSquare2 className="text-orange text-4xl" />
    <div className="leading-0">
      <h2 className="font-bold text-[20px]">{contact.name}</h2>
      <p className="text-sm">{contact.email}</p>
    </div>
  </div>
    <div className="flex gap-2 ml-4 text-3xl cursor-pointer">
      <FaUserEdit onClick={onopen} className='cursor-pointer' />
      <FaTrash onClick={()=>deletecontact(contact.id)} className="text-orange" />
    </div>
  </div>
  <Addupdateanddelete isupdate contact={contact} isopen={isopen} onclose={onclose}/>
  </>
  )
}

export default Contactcard
