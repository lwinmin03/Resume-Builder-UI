import { useNavigate } from "react-router-dom";


const Landing = () => {

const navigate=useNavigate();

const handleRoute=():void=>{
  navigate("/classic")

}

  return (
    <div className=" w-full h-full overflow-hidden flex
     justify-center items-center ">
      <div className="text-center mx-auto  p-2 h-4/6 w-9/12 flex flex-col gap-3 justify-center items-center antialiased">
        <h2 className="font-bold text-gray-800 text-7xl">
          Find Your Perfect Template
        </h2>
        <p className="text-2xl w-9/12 font-light">
          Browse through a collection of clean, modern, and professional resume
          templates designed to highlight your strengths. Pick the one that fits
          your personality and career goals—you can always switch to a different
          layout later.
        </p>

        <button onClick={handleRoute} className=" mt-1 cursor-pointer bg-gray-900 text-white p-2.5 rounded-md">Create Resume</button>
      </div>

      {/* <TemplateSection/> */}
    </div>
  );
};

export default Landing;
