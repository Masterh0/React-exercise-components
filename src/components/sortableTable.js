import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setsortBy] = useState(null);
  const { config, data } = props;
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setsortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setsortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setsortBy(null);
    }
  };
  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} is sortable
        </th>
      ),
    };
  });
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const setReverse = sortOrder === "desc" ? -1 : 1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * setReverse;
      } 
      return (valueA - valueB ) * setReverse
    });
  }
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updateConfig}  />
    </div>
  );
}
export default SortableTable;
