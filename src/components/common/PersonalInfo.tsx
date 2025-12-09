import { useState } from "react"
import type { Personal } from "../../model/Personal"





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
        <input value={user.name}  onChange={(e)=>setUser((prev)=>({...prev,name:e.target.value}))}/>
        </div>
    </div>
  )
}

export default PersonalInfo