import { useState } from "react";
function Accordion({items}){
    const [expendedIndex , setExpendedIndex] = useState(2)
    const renderedAccordion= items.map((item , index)=>{
        const isExpended = index === expendedIndex
        return <div key={item.id}>
            <div className="m-2">{item.lable}</div>
            {isExpended && <div>{item.content}</div>}
        </div>
    })
    return <div>
        {renderedAccordion}
    </div>
}

export default Accordion;