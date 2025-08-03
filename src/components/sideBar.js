import Link from "./Link";

function Sidebar() {
  const linkes = [
    { lable: "accordion", path: "/" },
    { lable: "button", path: "/button" },
    { lable: "drop down", path: "/dropdown" },
  ];
  const renderedLink = linkes.map((link) => {
    return (
      <Link key={link.lable} to={link.path}>
        {link.lable}
      </Link>
    );
  });
  return <div>{renderedLink}</div>;
}
export default Sidebar;
