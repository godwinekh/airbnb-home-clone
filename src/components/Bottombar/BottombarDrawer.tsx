import * as React from "react";
import { Box, SwipeableDrawer, IconButton, Divider } from "@mui/material";
import Wrapper from "../Wrapper";
import { CloseRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import Support from "./Support";
import Community from "./Community";
import Hosting from "./Hosting";
import Airbnb from "./Airbnb";

export default function BottombarDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          padding: 0,
          color: "#333",
          fontSize: 14,
          "&:hover": { backgroundColor: "unset", textDecoration: "underline" },
        }}
      >
        Support &amp; resources
        <KeyboardArrowUpRounded />
      </IconButton>
      <SwipeableDrawer
        anchor="bottom"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Wrapper>
          <IconButton sx={{ mt: 2 }} onClick={toggleDrawer(false)}>
            <CloseRounded />
          </IconButton>
          <Box
            width="auto"
            role="presentation"
            display="flex"
            justifyContent="left"
            pt={2}
            pb={8}
            fontSize={14}
            sx={{
              flexDirection: { sm: "column", md: "row" },
              gap: { sm: 3, md: 7 },
              px: { md: 8 },
            }}
          >
            <Support />
            <Divider />
            <Community />
            <Divider />
            <Hosting />
            <Divider />
            <Airbnb />
          </Box>
        </Wrapper>
      </SwipeableDrawer>
    </>
  );
}
