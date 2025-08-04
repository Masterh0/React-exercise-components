import Link from "./Link";

function Sidebar() {
  const linkes = [
    { lable: "Accordion", path: "/" },
    { lable: "Button", path: "/button" },
    { lable: "Drop down", path: "/dropdown" },
    { lable: "Modal", path: "/modal" },
  ];
  const renderedLink = linkes.map((link) => {
    return (
      <Link key={link.lable} to={link.path} className= "mb-3 " activeClassName="border-l-2 border-blue-500 font-bold pl-2">
        {link.lable}
      </Link>
    );
  });
  return <div className="sticky top-0 left-0  flex flex-col items-start">{renderedLink}</div>;
}
export default Sidebar;
