function Table({ data }) {
  const rendereFruit = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>fruits</th>
          <th>color</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>{rendereFruit}</tbody>
    </table>
  );
}
export default Table;
