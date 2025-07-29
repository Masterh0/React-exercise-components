import { useState } from "react"
function Dropdown({options}){
    const [isOpen , setIsOpen] = useState(false)
    const handleSubmit=()=>{
        setIsOpen(!isOpen)
    }
    const renderedOptions = options.map((option)=>{
        return <div key={option.value}>
            {option.lable}
        </div>
    })
    return <div onClick={handleSubmit}>drop down .....
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}   
export default Dropdown;