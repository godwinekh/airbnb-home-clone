import * as React from "react";
import { Box, Typography } from "@mui/material";
import AppLink from "../AppLink";

export default function Community() {
  return (
    <Box>
      <Typography variant="subtitle1" mb={1}>
        Community
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
            <AppLink href="#"> Airbnb.org: disaster relief housing</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Combating discrimination</AppLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
