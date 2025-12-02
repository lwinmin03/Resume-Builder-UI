import FooterButton from "./FooterButton"
const Footer = () => {
  return (
    <div className="w-full p-2 h-32">
        <div className="grid grid-cols-3 p-1 mx-auto text-center w-12/12 ">
           {/* contact */}
            <div className=" rounded-sm text-start w-8/12">
            <h3 className="text-light text-lg text-gray-900/90 uppercase">Contact:</h3>
            <div className="text-sm font-mono uppercase">
                Reach Out For Freelance AND Collaborations
                or just to say HI :)
            </div>

            <FooterButton/>
                
            
          
            </div>


            {/* social */}
            <div>
                Social
            </div>


            {/* others */}
            <div>
        Others
            </div>


        </div>
    </div>
  )
}

export default Footer