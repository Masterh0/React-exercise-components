import Dropdown from "./components/Dropdown";
import { useState } from "react";
function App(){
    const [selection , setSelected] = useState(null);
    const handleSelect =(option)=>{
        setSelected(option)
    }
    const options=[
        {label:"Red" ,value:"red"},
        {label:"Blue" ,value:"blue"},
        {label:"Green" ,value:"green"},
    ]
    return <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
}

export default App;