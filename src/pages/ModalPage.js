import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal , setShowModal] = useState(false);
    const handleClick= ()=>{
        setShowModal(true);
    }
    const handleClose =()=>{
        setShowModal(false)
    }
    const actionBar = <Button primary onClick={handleClose}> click me</Button>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <div>
            this a content to accept it or warning error or something
        </div>
    </Modal>;
    return(<div>
        <Button primary onClick={handleClick}> open modal</Button>
        {showModal && modal}
    </div>
    ) 
}
export default ModalPage;