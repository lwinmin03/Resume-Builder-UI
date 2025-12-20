import PersonalInfo from "../../components/common/PersonalInfo"


const ClassicPage = () => {
  return (
    <div className="w-full flex justify-around h-full relative ">
        {/* input fields */}
      <div className="w-2/5">
        <div >
          <h2 className="text-xl font-bold uppercase">Resume Score</h2>
        </div>
          <div>
            <PersonalInfo />

          </div
          >
          <div className="absolute left-0 bottom-0">

            <button className="bg-slate-900 px-3 antialiased py-2 text-white
             rounded-sm">NEXT</button>
          </div>

      </div>

      {/* preview */}
      <div className="w-3/5 bg-amber-200">

      </div>
      
    </div>
  )
}

export default ClassicPage