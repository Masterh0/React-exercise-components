import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal , setShowModal] = useState(false);
    const handleClick= ()=>{
        setShowModal(!showModal);
    }
    const handleClose =()=>{
        setShowModal(!showModal)
    }
    return(<div>
        <Button primary onClick={handleClick}> open modal</Button>
        {showModal &&<Modal onClose={handleClose}/>}
    </div>
    ) 
}
export default ModalPage;