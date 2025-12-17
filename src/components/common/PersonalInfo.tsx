import { useState } from "react"
import type { Personal } from "../../model/Personal"
import TextInput from "./TextInput";





const PersonalInfo = () => {


    const [user,setUser]=useState<Personal>({
    name:"",
    email:"",
    location:"",
    ph:null,
    summary:""
})

 console.log(user.name);



  return (
    <div  >
        <h3>Personal Information</h3>
        {/* form fields */}
        <div>
        {/* <input
        className="border-0 border-gray-900/45 outline-1 p-2 rounded-sm"
         value={user.name} 
          onChange={(e)=>setUser((prev)=>({...prev,name:e.target.value}))}/> */}

          <TextInput type="text" placeholder="Enter yourr name"/>
        </div>
    </div>
  )
}

export default PersonalInfo