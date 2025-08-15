import Table from "../components/Table";
const data = [
  { name: "red apple", color: "bg-red-500", score: 3 },
  { name: "banana", color: "bg-yellow-500", score: 5 },
  { name: "orange", color: "bg-orange-500", score: 2 },
  { name: "grape", color: "bg-purple-500", score: 4 },
];
const config = [{ label: "fruite"}, {label: "color"}, {label: "score" }];
function TablePage() {
  return <Table data={data} config={config} />;
}
export default TablePage;
