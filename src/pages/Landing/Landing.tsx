import TemplateSection from "../../components/Landing/TemplateSection"

const Landing = () => {
  return (
    <div className=" w-full h-full overflow-hidden">

    <div className="text-lg bg-red-200 text-center" >
        <h2 className="font-bold text-gray-800 text-3xl">Choose Your Template</h2>
          <p className="">Select a professional template and start building your resume. You can always change it later.</p>  
    </div>


<TemplateSection/>

    </div>
  )
}

export default Landing