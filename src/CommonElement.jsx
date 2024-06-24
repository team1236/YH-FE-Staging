import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footers";

function CommonElement() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}

export default CommonElement;
