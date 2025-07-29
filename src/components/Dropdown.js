import { useState } from "react"
function Dropdown({options ,onSelect ,selection}){
    const [isOpen , setIsOpen] = useState(false)
    const handleSubmit=()=>{
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option)=>{
        setIsOpen(false);
        onSelect(option)
    }
    const renderedOptions = options.map((option)=>{
        return <div onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })
    
    return <div onClick={handleSubmit}>{selection?.label || "select ..."}
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}   
export default Dropdown;