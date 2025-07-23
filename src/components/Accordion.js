import { useState } from "react";
import { FaAngleDown ,FaAngleLeft  } from "react-icons/fa";
function Accordion({items}){
    const [expendedIndex , setExpendedIndex] = useState(5)
    const renderedAccordion= items.map((item , index)=>{
        const isExpended = index === expendedIndex
        const icon = <span>
            {isExpended ? <FaAngleDown/> : <FaAngleLeft />}
        </span>
        return <div key={item.id}>
            <div onClick={()=>setExpendedIndex(index)} className="m-2 cursor-pointer">
                {item.lable}
                {icon}
                </div>
            {isExpended && <div>{item.content}</div>}
        </div>
    })
    return <div>
        {renderedAccordion}
    </div>
}

export default Accordion;