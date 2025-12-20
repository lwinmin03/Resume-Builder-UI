import { Sparkle, SparkleIcon, SparklesIcon } from "lucide-react"

const EnhanceButton = () => {
  return (
    <button className="flex cursor-pointer 
    hover:scale-95
    hover:rotate-2
    hover:shadow-black
    hover:shadow-lg
    transition-all
    ease-initial 
    
    rounded-md border-2 border-slate-900 shadow-2xl shadow-inherit 
     w-fit items-center 
    gap-2.5 px-3 py-1">
        Enhance 
        <SparklesIcon size={14} />
    </button>
  )
}

export default EnhanceButton