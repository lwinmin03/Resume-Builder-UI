import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-white p-2 overflow-hidden">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout