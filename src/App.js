import Dropdown from "./components/Dropdown";
function App(){
    const options=[
        {lable:"Red" ,value:"red"},
        {lable:"Blue" ,value:"blue"},
        {lable:"Green" ,value:"green"},
    ]
    return <Dropdown options={options}/>
}

export default App;