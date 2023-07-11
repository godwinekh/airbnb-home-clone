import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { Star } from "@mui/icons-material";
import { StaticImageData } from "next/image";

interface ApartmentProps {
  images: StaticImageData[],
  title: string;
  rating: string;
  views: string;
  availability: string;
  cost: number;
}

const Apartment: React.FC<ApartmentProps> = ({ images, title, rating, views, availability, cost }) => {
  return (
    <Box display="flex" flexDirection="column" mb={0}>
      <Carousel images={images} />

      <Box display="flex" justifyContent="space-between" mt={1.5}>
        <Typography fontSize={15} fontWeight={600}>
          {title}
        </Typography>
        <Typography fontSize={15} display="flex" alignItems="center" gap={.25}>
          <Star htmlColor="#000" fontSize="inherit" />
          {rating}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" mb={0.5}>
        <Typography fontSize={15} color="GrayText">
          {views}
        </Typography>
        <Typography fontSize={15} color="GrayText">
          {availability}
        </Typography>
      </Box>
      <Typography fontSize={15}>
        <span style={{ fontWeight: 600 }}>${cost} </span>
        night
      </Typography>
    </Box>
  );
};

export default Apartment;
