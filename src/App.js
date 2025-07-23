import Accordion from "./components/Accordion";
function App(){
    const items=[
        {
            id:"gjwuer9f",
            lable:"can use react in this project",
            content:"yes you can use react as you want in any project,yes you can use react as you want in any project,yes you can use react as you want in any project,yes you can use react as you want in any project,"
        },
        {
            id:"qwepigherh9g",
            lable:"can use css in this project",
            content:"yes you can use css as you want in any project,yes you can use css as you want in any project,yes you can use css as you want in any project,yes you can use css as you want in any project,yes you can use css as you want in any project,"
        },
        {
            id:"ewrg;pkjhweg",
            lable:"can use js in this project",
            content:"yes you can use js as you want in any project,yes you can use js as you want in any project,yes you can use js as you want in any project,yes you can use js as you want in any project,yes you can use js as you want in any project,"
        },
    ]
    return <div > 
        <Accordion items={items} />
        </div>
}

export default App;