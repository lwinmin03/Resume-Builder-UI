import { NavLink } from "react-router-dom"
import { navs } from "../../constants/navItem"
import { getCurrentRoute } from "../../utils/getCurrentRoute"


const Navbar = () => {


  const path:string=getCurrentRoute();


  console.log(path);
  
  return (
    <nav className="w-full rounded-md shadow-2xs bg-white shadow-gray-100  h-16 flex gap-3 items-center justify-between">
        <div className="size-12 font-bold flex text-white justify-center items-center p-2 rounded-full bg-gray-900">
          RB
        </div>
        {/* <div className="flex flex-col">
          <h4 className="text-lg font-bold">Resume Builder</h4>
            <div className="text-sm">
                Professional templates for your career
            </div>
        </div> */}




        <div className="flex gap-3 items-center">
          {navs.map((link)=>(
              <NavLink to={link.path} key={link.id} className={`${path===link.path && "bg-gray-800 text white"}`}>
                  {link.label}
              </NavLink>
          ))}
        </div>
       
    </nav>
  )
}

export default Navbar