function Accordion({items}){
    const renderedAccordion= items.map((item)=>{
        return <div key={item.id}>
            <div className="m-2">{item.lable}</div>
            <div>{item.content}</div>
        </div>
    })
    return <div>
        {renderedAccordion}
    </div>
}

export default Accordion;