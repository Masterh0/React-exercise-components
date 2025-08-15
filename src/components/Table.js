function Table({ data, config }) {
  const renderedHeaderCol = config.map((th) => {
    return (
      <th key={th.label} className="p-3">
        {th.label}
      </th>
    );
  });
  const renderedFruit = data.map((fruit) => {
   const renderedCell = config.map((column)=>{
    return <td className="p-3">{column.render(fruit)}</td>
    })
    return <tr className="border-b" key={fruit.name}>
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
