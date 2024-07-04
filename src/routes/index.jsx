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
        element: <Transport/>,
      },
    ],
  },
]);
