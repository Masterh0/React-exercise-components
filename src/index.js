import react from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavigationContex from "./contex/Navigation";
const el = document.getElementById("root");
const root = reactDOM.createRoot(el);

root.render(<NavigationContex> <App/> </NavigationContex>)
