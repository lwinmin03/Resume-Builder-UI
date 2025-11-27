
const Navbar = () => {
  return (
    <nav className="w-full  h-16 flex gap-3 items-center">
        <div className="size-12 font-bold flex text-white justify-center items-center p-2 rounded-full bg-gray-900">
          RB
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Resume Builder</h4>
            <div className="text-sm">
                Professional templates for your career
            </div>
        </div>
       
    </nav>
  )
}

export default Navbar