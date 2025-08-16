import { Fragment } from "react/jsx-runtime";

function Table({ data, config ,keyFn }) {
  const renderedHeaderCol = config.map((th) => {
    if(th.header){
      return <Fragment key={th.label}>{th.header()}</Fragment>
    }
    return (
      <th key={th.label} className="p-3">
        {th.label}
      </th>
    );
  });
  const renderedFruit = data.map((row) => {
   const renderedCell = config.map((column)=>{
    return <td className="p-3">{column.render(row)}</td>
    })
    return <tr className="border-b" key={keyFn(row.name)}>
      {renderedCell}
    </tr>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaderCol}</tr>
      </thead>
      <tbody>{renderedFruit}</tbody>
    </table>
  );
}
export default Table;
