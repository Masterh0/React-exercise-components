import { useState } from "react"
import { GoChevronDown } from 'react-icons/go';
function Dropdown({options ,onChange ,value}){
    const [isOpen , setIsOpen] = useState(false)
    const handleSubmit=()=>{
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option)=>{
        setIsOpen(false);
        onChange(option)
    }
    const renderedOptions = options.map((option)=>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                 onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })
    
    return <div className="w-48 relative" onClick={handleSubmit}>
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full">
        {value?.label || "select ..."}
        <GoChevronDown className="text-lg" />
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
        </div>
        
    </div>
}   
export default Dropdown;