import { useState } from "react";
import Table from "./Table";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setsortBy] = useState(null);
  const { config, data } = props;
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setsortBy(label);
    } else if (sortBy && label !== sortBy) {
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
        <th
          className="cursor-pointer"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcon(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });
  const getIcon = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div className=" text-gray-300">
          <AiFillCaretUp />
          <AiFillCaretDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return <AiFillCaretUp className="inline text-gray-300" />;
    } else {
      return <AiFillCaretDown className="inline text-gray-300" />;
    }
  };
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
      return (valueA - valueB) * setReverse;
    });
  }
  return (
    <div>
      <Table {...props} data={sortedData} config={updateConfig} />
    </div>
  );
}
export default SortableTable;
