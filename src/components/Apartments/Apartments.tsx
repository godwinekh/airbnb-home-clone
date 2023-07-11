import { Box } from "@mui/material";
import ApartmentItems from "./ApartmentItems";
import Apartment from "./Apartment";

const Apartments = () => {
  return (
    <Box display="flex" flexWrap="wrap" mt={3} mb={20} mx={3} gap={3}>
      {ApartmentItems.map((apartment, index) => (
        <Apartment
          key={index}
          images={apartment.images}
          title={apartment.title}
          rating={apartment.rating}
          views={apartment.views}
          availability={apartment.availability}
          cost={apartment.cost}
        />
      ))}
    </Box>
  );
};

export default Apartments;
