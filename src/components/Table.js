function Table({ data }) {
  const rendereFruit = data.map((fruit) => {
    
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`m-2 p-3 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2" >
      <thead>
        <tr className="border-b-2">
          <th className="p-3">fruits</th>
          <th className="p-3">color</th>
          <th className="p-3">score</th>
        </tr>
      </thead>
      <tbody>{rendereFruit}</tbody>
    </table>
  );
}
export default Table;
