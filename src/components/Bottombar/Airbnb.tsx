import * as React from "react";
import { Box, Typography } from "@mui/material";
import AppLink from "../AppLink";

export default function Airbnb() {
  return (
    <Box>
      <Typography variant="subtitle1" mb={1}>
        Airbnb
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
            <AppLink href="#">Newsroom</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Learn about new features</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Letter from our founders</AppLink>
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
            <AppLink href="#">Careers</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Investors</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Gift cards</AppLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
