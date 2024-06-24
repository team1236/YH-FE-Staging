import Sidenav from "../components/Sidenav";
import Searchbar from "../components/Searchbar";
import WhyChooseUs from "../components/WhyChooseUs";
// import OfferCard from "../components/OfferCard";
import Populardestination from "../components/Populardestination";
import Recentsearch from "../components/Recentsearch";
import Flightbanner from "../components/Flightbanner";
import Flightsoffer from "../components/Flightsoffer";
// import Newsletter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="app-container">
      <main className="app-main">
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
              <Testimonials />
              <WhyChooseUs />
              {/* <Newsletter/> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
