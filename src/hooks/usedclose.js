import { useState } from "react";

const usedclose = () => {
    const [isopen,setisopen]=useState(false);

  const onopen=()=>{
    setisopen(true)
  }
  
  const onclose=()=>{
    setisopen(false)
  }
  return {onclose,isopen,onopen}
}

export default usedclose
