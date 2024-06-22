import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { Toaster } from "react-hot-toast";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footers";
import WhyChooseUs from "./components/WhyChooseUs";
// import OfferCard from "./components/OfferCard";
import Populardestination from "./components/Populardestination";
import Recentsearch from "./components/Recentsearch";
import Flightbanner from "./components/Flightbanner";
import Flightsoffer from "./components/Flightsoffer";
import Newsletter from "./components/NewsLetter";

function CommonElement() {
  return (
    <div className="app-container">
      <main className="app-main">
        <Navbar />
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-2">
              <Sidenav />
            </div>
            <div className="col-lg-10">
              <Searchbar />
              <Recentsearch />
              <Populardestination />
              <Flightsoffer />
              <Flightbanner />
              <WhyChooseUs />
              <Newsletter/>
            </div>
          </div>
        </div>
        <Outlet />
        <Footer />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CommonElement;
