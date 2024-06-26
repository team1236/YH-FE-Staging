import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonElement from "../CommonElement.jsx";
import Offer from "../pages/Offer.jsx";
import HomePage from "../pages/HomePage.jsx";
import Hotel from "../pages/Hotel.jsx";
import MyService from "../pages/MyService.jsx";

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
    ],
  },
]);
