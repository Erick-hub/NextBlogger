import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react/cjs/react.development";

export default function Button(){
  
  const object= {
    "location":{
      "country":'Taiwan',
      "city":'Taipei',
    },
    "name":{
      'first':'John',
      'last':'Doe'
    },
    "age":'21',
    "gender":'M'};

  
  
  const [counter, setCounter]= useState(0)
  useEffect(()=>{
   console.log(Object.keys(object))
  },[])

  return <>

  <button onClick={() => {

    setCounter(counter+1)
    
  
  }}>Run</button>

  </>
}