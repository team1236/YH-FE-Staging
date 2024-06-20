import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { Toaster } from "react-hot-toast";
import Searchbar from "./components/Searchbar";

function CommonElement() {
  return (
    <div className="app-container">
      <main className="app-main">
        <Navbar />
        <div className="container mt-4">
          <div className="row">
          <div className="col-lg-2">
          <Sidenav/>
          </div>
          <div className="col-lg-10">
            <Searchbar/>
          </div>
          </div>
        </div>
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CommonElement;
