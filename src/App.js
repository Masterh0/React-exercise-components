import { BiChevronRightSquare,BiCross,BiDna  } from "react-icons/bi";
import Button from "./Button";
function App(){
    return <div> 
        <div>
            <Button primary outline>
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
            <Button success>awergdvbrth</Button>
        </div>
        </div>
}

export default App;