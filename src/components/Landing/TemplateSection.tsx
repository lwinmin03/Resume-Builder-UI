import TemplateCard from "./TemplateCard"
import cards from "../../constants/card"


const TemplateSection = () => {


    console.log(cards);
    
  return (
    <div className="grid grid-col-4 gap-2">

        {cards.map((card,idx)=>(
            <TemplateCard key={idx} name={card.name} desc={card.desc} />
        ))}

    </div>
  )
}

export default TemplateSection