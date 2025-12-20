import { useState } from "react"
import type { Personal } from "../../model/Personal"
import TextInput from "./TextInput";
import EnhanceButton from "./EnhanceButton";





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
    <div  className="flex flex-col gap-5">
        <h3>Personal Information</h3>
        {/* form fields */}
        <div className="flex flex-col gap-3">
    <div className="flex justify-between gap-1.5">
      
          <TextInput type="text" placeholder="Enter your name"/>
          <TextInput type="email" placeholder="Enter your email" autoComplete="email" />
    </div>


        <div className="flex justify-between gap-1.5">
      
          <TextInput type="tel" placeholder="Enter your phone number"/>
          <TextInput type="email" placeholder="Enter your address" autoComplete="email" />
    </div>

<EnhanceButton />

<TextInput className="w-full h-60" type="text" />
        </div>
    </div>
  )
}

export default PersonalInfo