import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function CommonElement() {
  return (
    <div className="app-container">
      <main className="app-main">
        <Navbar />
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CommonElement;
