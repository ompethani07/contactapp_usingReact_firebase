import "./App.css";
import Navbar from "./components/Navbar";
import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contactcard from "./components/Contactcard";
import Addupdateanddelete from "./components/Addupdateanddelete";
import usedclose from "./hooks/usedclose";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Notfoundcontact from "./components/Notfoundcontact";
function App() {
  const [contacts, setcontacts] = useState([]);
  // const {onclose,isopen, onopen} =usedclose();
  const [isopen,setisopen]=useState(false);

  const onopen=()=>{
    setisopen(true)
  }
  
  const onclose=()=>{
    setisopen(false)
  }

  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contact");
        onSnapshot(contactsref,(snapshot)=>{
          const contactlist=snapshot.docs.map((docs)=>{
            return{
              id:docs.id,
              ...docs.data(),
            };
          });
        setcontacts(contactlist);
        return contactlist
        })
        
      } catch (error) {
        console.error(error);
      }
    };
    getcontacts();
  }, []);

  const filltercontact=(e)=>{
    // e.target.preventDefault();
    // console.log("haa bhai")
    const value=e.target.value;
    const contactsref = collection(db, "contact");
    onSnapshot(contactsref,(snapshot)=>{
      const contactlist=snapshot.docs.map((docs)=>{
        return{
          id:docs.id,
          ...docs.data(),
        };
      });

      const filltercontact=contactlist.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))
    setcontacts(filltercontact);
    return filltercontact;
    })
  }
  return (
    <>
     <Addupdateanddelete isopen={isopen} onclose={onclose}/>
      <div className="w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow  text-white">
            <IoSearch className="text-white text-2xl absolute ml-1" />
            <input
            onChange={filltercontact}
              type="text"
              className="flex-grow bg-transparent pl-8 border border-white rounded-md h-10"
            />
          </div>
          <FaPlusCircle onClick={onopen} className="text-white text-4xl cursor-pointer" />
        </div>
        

        <div>
          {contacts.length==0?<Notfoundcontact/>:contacts.map((contact) => (
            <Contactcard key={contact.id} contact={contact}/>
          ))}
        </div>
        
     
      </div>
      <ToastContainer position="bottom-center"/>

    </>
  );
}

export default App;
