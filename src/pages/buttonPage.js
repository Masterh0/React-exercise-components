import { BiChevronRightSquare,BiCross,BiDna  } from "react-icons/bi";
import Button from "../components/Button";
function ButtonPage(){
    const handleSubmit=()=>{
        console.log("click!!!!")
    };
    return <div > 
        <div>
            <Button primary outline onClick={handleSubmit}>
                <BiChevronRightSquare/>
                click me!</Button>
        </div>
        <div>
            <Button danger >
                <BiCross/>
                 No!!!!</Button>
        </div>
        <div>
            <Button secondary>
                <BiDna />
                asd</Button>
        </div>
        <div>
            <Button warning>awrfgsfg</Button>
        </div>
        <div>
            <Button success className={"mt-12"}>awergdvbrth</Button>
        </div>
        </div>
}

export default ButtonPage;