import PersonalInfo from "../../components/common/PersonalInfo"


const ClassicPage = () => {
  return (
    <div className="w-full flex justify-around h-full ">
        {/* input fields */}
      <div className="w-3/5">
        <div >
          Resume Score
        </div>
          <div>
            <PersonalInfo />

          </div>
          <div>
            <button className="bg-amber-200">NEXT</button>
          </div>

      </div>

      {/* preview */}
      <div className="w-2/5 bg-amber-200">
2
      </div>
      
    </div>
  )
}

export default ClassicPage