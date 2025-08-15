import Table from "../components/Table";
const data = [
  { name: "red apple", color: "bg-red-500", score: 3 },
  { name: "banana", color: "bg-yellow-500", score: 5 },
  { name: "orange", color: "bg-orange-500", score: 2 },
  { name: "grape", color: "bg-purpule-500", score: 4 },
];
function TablePage() {
  return <Table date={data}/>;
}
export default TablePage;
