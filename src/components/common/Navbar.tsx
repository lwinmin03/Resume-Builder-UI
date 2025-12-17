import { NavLink } from "react-router-dom";
import { navs } from "../../constants/navItem";
import { getCurrentRoute } from "../../utils/getCurrentRoute";
import { LOGO } from "../../assets";

const Navbar = () => {
  const path: string = getCurrentRoute();

  return (
    <nav className="w-full px-2  py-1 rounded-md shadow-2xs bg-white shadow-gray-100  h-20 flex gap-3 items-center justify-between">
      <div className="w-24  h-12 cursor-pointer bg-gray-800 font-bold flex text-white justify-center items-center px-2 py-1 rounded-sm">
        <img  className=" text-4xl" src={LOGO} />
          
      </div>
     

      <div className="flex gap-3 items-center">
        {navs.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className={`${path === link.path && "bg-gray-800 text white"}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
