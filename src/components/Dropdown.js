import { useState , useEffect , useRef } from "react"
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";
function Dropdown({options ,onChange ,value}){
    const [isOpen , setIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(()=>{
        const handler= (event)=>{
            console.log(divEl.current)
            if (!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener("click", handler , true);
        return ()=>{
            document.removeEventListener("click", handler);
        }
    },[])
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
    
    return <div ref={divEl} className="w-48 relative" onClick={handleSubmit}>
        <Panel className="flex justify-between items-center cursor-pointer ">
        {value?.label || "select ..."}
        <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
       
        
    </div>
}   
export default Dropdown;