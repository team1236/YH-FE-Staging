import React, { useState, useEffect } from "react";
import { whyYHChoose } from "../store/api/flightPage";
// import { Grid, Typography } from "@mui/material";

const WhyChooseUs = () => {
  const [description, setDescription] = useState("");
  const getDescription = async () => {
    const getData = await whyYHChoose();
    setDescription(getData.data.topDestination[0]);
  };

  useEffect(() => {
    Promise.allSettled([getDescription()]);
  }, []);
  
  return <div
  className="why-us-section pt-5"
  dangerouslySetInnerHTML={{ __html: description.data }}
/>;
};

export default WhyChooseUs;
