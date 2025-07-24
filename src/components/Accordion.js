import { useState } from "react";
import { FaAngleDown ,FaAngleLeft  } from "react-icons/fa";
function Accordion({items}){
    const [expendedIndex , setExpendedIndex] = useState(-1)
    const handleSubmit=(nextIndex)=>{
        if (expendedIndex===nextIndex){
            setExpendedIndex(-1);
        }
        else{
            setExpendedIndex(nextIndex);
        }
    }
    const renderedAccordion= items.map((item , index)=>{
        const isExpended = index === expendedIndex
        const icon = <span className="text-3xl">
            
            {isExpended ? <FaAngleDown/> : <FaAngleLeft />}
        </span>
        return <div key={item.id}>
            <div onClick={()=>handleSubmit(index)} className="cursor-pointer flex items-center justify-between p-3 bg-gray-50 border-b ">
                {item.lable}
                {icon}
                </div>
            {isExpended && <div className="border-b p-5">{item.content}</div>}
        </div>
    })
    return <div className="border-x border-t rounded">
        {renderedAccordion}
    </div>
}

export default Accordion;