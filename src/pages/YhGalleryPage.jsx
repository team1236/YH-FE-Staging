import Sidenav from "../components/Sidenav";
import WhyChooseUs from "../components/WhyChooseUs";
// import Newsletter from "../components/NewsLetter";
import HolidayPackageCard from "../components/HolidayPackageCard";
import GalleryCarausel from "../components/YhGallery";
import OurPartners from "../components/Ourpartners";

const YhGalleryPage = () => {
  return (
    <div className="app-container">
      <main className="app-main">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-2">
              <Sidenav />
            </div>
            <div className="col-lg-10">
              <GalleryCarausel />
              {/* <HolidayPackageCard /> */}
              <WhyChooseUs />
              {/* <Newsletter/> */}
              <OurPartners/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YhGalleryPage;
