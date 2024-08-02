import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { myServiceAPI } from "../store/api/myService";
import { MyService } from "./Shimmer";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  const [ServiceCard, setServiceCard] = useState([]);
  const getService = async () => {
    const getData = await myServiceAPI();
    setServiceCard(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getService()]);
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Grid container spacing={2}>
        {ServiceCard.length > 0
          ? ServiceCard.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Link to={`/my-service?_id=${item._id}`} style={{textDecoration:"none"}}>
                  <Card sx={{ maxWidth: 300, margin: "auto" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="110"
                        image={item.img}
                        alt={item.title}
                      />
                      <CardContent
                        sx={{
                          height: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          align="center"
                        >
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))
          : Array.from({ length: 20 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ maxWidth: 300, margin: "auto" }}>
                  <CardActionArea>
                    <MyService key={index} />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
