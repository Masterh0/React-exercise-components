import Link from "./Link";

function Sidebar() {
  const linkes = [
    { lable: "accordion", path: "/" },
    { lable: "button", path: "/button" },
    { lable: "drop down", path: "/dropdown" },
  ];
  const renderedLink = linkes.map((link) => {
    return (
      <Link key={link.lable} to={link.path} className= "mb-3 " activeClassName="border-l-2 border-blue-500 font-bold pl-2">
        {link.lable}
      </Link>
    );
  });
  return <div className="sticky top-0  flex flex-col">{renderedLink}</div>;
}
export default Sidebar;
