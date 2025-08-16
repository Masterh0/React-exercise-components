import SortableTable from "../components/sortableTable";
import sortableTable from "../components/sortableTable";
import Table from "../components/Table";
const data = [
  { name: "red apple", color: "bg-red-500", score: 3 },
  { name: "banana", color: "bg-yellow-500", score: 5 },
  { name: "orange", color: "bg-orange-500", score: 2 },
  { name: "grape", color: "bg-purple-500", score: 4 },
];
const config = [
  {
    label: "name",
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },

  {
    label: "color",
    render: (fruit) => <div className={`m-2 p-3 ${fruit.color}`}></div>,
  },
  {
    label: "score",
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
];
const keyFn = (fruit) => {
  return fruit.name;
};
function TablePage() {
  return <SortableTable data={data} config={config} keyFn={keyFn} />;
  
}
export default TablePage;
