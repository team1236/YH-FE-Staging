import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";

const Flight_Recent_Searches = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: isMobile ? "45vw" : "unset",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  );
};

const Flight_Top_Visited = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        height: isMobile ? "20vh" : "23vh",
      }}
    >
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

const Flight_Offers = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: "100%",
        height: isMobile ? "20vh" : "23vh",
      }}
    >
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

const Flight_Banner = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: "100%",
        height: isMobile ? "20vh" : "23vh",
      }}
    >
      <Skeleton variant="rounded" height={100} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

const Flight_Testimonial = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: "100%",
        height: isMobile ? "20vh" : "23vh",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" height={100} />
    </Stack>
  );
};

const Why_Choose_Us = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: "100%",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" height={100} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" height={100} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

const Hotel_Coupon = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#eef2ff",
        padding: "10px",
        width: "100%",
        height: isMobile ? "20vh" : "23vh",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

export {
  Flight_Recent_Searches,
  Flight_Top_Visited,
  Flight_Offers,
  Flight_Banner,
  Flight_Testimonial,
  Why_Choose_Us,
  Hotel_Coupon,
};
