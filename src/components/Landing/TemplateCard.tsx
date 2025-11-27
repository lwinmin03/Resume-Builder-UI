interface cardProps{
  name:string;
  desc:string;
}


const TemplateCard = ({name,desc}:cardProps) => {
  return (
    <div className="max-w-60 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h3 className="text-lg font-semibold tracking-wide">{name}</h3>
      <p className="mt-3 text-sm text-slate-700 leading-relaxed">
        {desc}
        </p>
    </div>

  )
}

export default TemplateCard