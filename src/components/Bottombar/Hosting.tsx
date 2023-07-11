import * as React from "react";
import { Box, Typography } from "@mui/material";
import AppLink from "../AppLink";

export default function Hosting() {
  return (
    <Box>
      <Typography variant="subtitle1" mb={1}>
        Hosting
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        sx={{ flexDirection: { sm: "row", md: "column" } }}
      >
        <Box
          display="flex"
          width="100%"
          sx={{
            flexDirection: { sm: "row", md: "column" },
            gap: { md: 2 },
          }}
        >
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Airbnb your home</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">AirCover for Hosts</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Explore hosting resources</AppLink>
          </Box>
        </Box>
        <Box
          display="flex"
          width="100%"
          sx={{
            flexDirection: { sm: "row", md: "column" },
            gap: { md: 2 },
          }}
        >
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Visit our community forum</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">How to host responsibly</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Airbnb-friendly apartments</AppLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
