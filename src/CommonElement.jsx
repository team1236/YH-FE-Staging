import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { Toaster } from "react-hot-toast";

function CommonElement() {
  return (
    <div className="app-container">
      <main className="app-main">
        <Navbar />
        <Sidenav/>
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CommonElement;
