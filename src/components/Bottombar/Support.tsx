import * as React from "react";
import { Box, Typography } from "@mui/material";
import AppLink from "../AppLink";

export default function Support() {
  return (
    <Box>
      <Typography variant="subtitle1" mb={1}>
        Support
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
            <AppLink href="#">Help Center</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">AirCover</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Supporting people with disabilities</AppLink>
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
            <AppLink href="#">Cancellation options</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Our COVID-19 Response</AppLink>
          </Box>
          <Box sx={{ flexBasis: { sm: "33.3%" } }}>
            <AppLink href="#">Report a neighborhood concern</AppLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
