import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonElement from "../CommonElement.jsx";
import Offer from "../pages/Offer.jsx";
import HomePage from "../pages/HomePage.jsx";
import Hotel from "../pages/Hotel.jsx";
import MyService from "../pages/MyService.jsx";
import HolidayPackage from "../pages/HolidayPackage.jsx";
import SupportPage from "../pages/SupportPage.jsx";
import MyTripService from "../pages/MyTrip.jsx";
import Transport from "../pages/Transport.jsx";
import YhGalleryPage from "../pages/YhGalleryPage.jsx";
import Yhhotels from "../pages/Yhhotels.jsx";
import Hotellisting from "../pages/Hotellisting.jsx";
import Hoteldetail from "../pages/Hoteldetail.jsx";
import Hotelcheckoutpage from "../pages/Hotelcheckoutpage.jsx";
import Transportlisitng from "../pages/Transportlisitng.jsx";
import Cabcheckout from "../pages/Cabcheckout.jsx";
import MyProfilePage from "../pages/MyProfile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/yhhotel",
        element: <Yhhotels />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/myService",
        element: <MyService />,
      },
      {
        path: "/holidayPackage",
        element: <HolidayPackage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/trips",
        element: <MyTripService />,
      },
      {
        path: "/transport",
        element: <Transport />,
      },
      {
        path: "/yhGallery",
        element: <YhGalleryPage />,
      },
      {
        path: "/hotellisting",
        element: <Hotellisting />,
      },
      {
        path: "/hoteldetail",
        element: <Hoteldetail />,
      },
      {
        path: "/checkout",
        element: <Hotelcheckoutpage />,
      },
      {
        path: "/transportlist",
        element: <Transportlisitng />,
      },
      {
        path: "/cabcheckout",
        element: <Cabcheckout />,
      },
      {
        path: "/MyProfile",
        element: <MyProfilePage />,
      },
    ],
  },
]);
