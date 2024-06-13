import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function CommonElement() {
  return (
    <div className="app-container">
      <main className="app-main">
        <Navbar/>
        <Outlet />
      </main>
    </div>
  );
}

export default CommonElement;
