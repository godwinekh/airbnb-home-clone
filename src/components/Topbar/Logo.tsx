import { Box, Typography } from "@mui/material";
import Airbnb from "@/icons/Airbnb";
import AppButton from "../AppButton";

export default function Logo() {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <AppButton
        href="#"
        sx={{
          display: { sm: "block", lg: "flex" },
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          "&:hover": {
            backgroundColor: "unset",
          },
        }}
      >
        <Airbnb />
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            display: { sm: "none", lg: "inline" },
            color: "#FF385C",
            alignSelf: "center",
          }}
        >
          airbnb
        </Typography>
      </AppButton>
    </Box>
  );
}
