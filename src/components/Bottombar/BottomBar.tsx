import { AccountCircleOutlined, FavoriteBorderOutlined, LanguageOutlined, SearchRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import BottombarDrawer from "./BottombarDrawer";
import AppLink from "../AppLink";

export default function BottomBar() {
  return (
    <>
      {/* Mobile screen */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        py={1}
        fontSize={14}
        width="100vw"
        overflow="hidden"
        zIndex={100}
        sx={{
          display: { xs: "flex", sm: "none" },
          gap: 2,
          borderTop: "1px solid lightgray",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <IconButton sx={{ display: "flex", flexDirection: "column" }}>
          <SearchRounded />
          <Typography fontSize={11} fontWeight={600}>
            Explore
          </Typography>
        </IconButton>

        <IconButton sx={{ display: "flex", flexDirection: "column" }}>
          <FavoriteBorderOutlined />
          <Typography fontSize={11} fontWeight={600}>
            Wishlists
          </Typography>
        </IconButton>

        <IconButton sx={{ display: "flex", flexDirection: "column" }}>
          <AccountCircleOutlined />
          <Typography fontSize={11} fontWeight={600}>
            Log in
          </Typography>
        </IconButton>
      </Box>

      {/* Other screens */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        py={2}
        fontSize={14}
        width="100vw"
        overflow="hidden"
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 3,
          borderTop: "1px solid lightgray",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <Box
          display="flex"
          alignContent="center"
          flexWrap="wrap"
          flexBasis={"50%"}
          pl={5}
        >
          <Box display="flex" alignItems="center">
            <Typography fontSize={14}>
              &copy; {new Date().getFullYear()} Airbnb, Inc.
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography mx={1}>.</Typography>
            <AppLink href="#">Terms</AppLink>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography mx={1}>.</Typography>
            <AppLink href="#">Sitemap</AppLink>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography mx={1}>.</Typography>
            <AppLink href="#">Privacy</AppLink>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography mx={1}>.</Typography>
            <AppLink href="#">Your Privacy Choices</AppLink>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography mx={1}>.</Typography>
            <AppLink href="#">Destinations</AppLink>
          </Box>
        </Box>

        <Box
          display="flex"
          alignContent="center"
          justifyContent="end"
          flexBasis={"50%"}
          gap={2}
          pr={5}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <LanguageOutlined fontSize="small" />
            <AppLink href="#">English (US)</AppLink>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography>$</Typography>
            <AppLink href="#">USD</AppLink>
          </Box>

          <BottombarDrawer />
        </Box>
      </Box>
    </>
  );
}
