import { SearchRounded } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import AppButton from "../AppButton";
import Image from "next/image";
import SettingsSlider from "@/icons/setting-slider.png";

export default function Search() {
  return (
    <Box
      display="flex"
      pr={1}
      py={0.8}
      border="1px solid lightgray"
      borderRadius={50}
      boxShadow={2}
      sx={{
        backgroundColor: "#fff",
        width: { xs: "100%", sm: "auto" },
        flexDirection: { xs: "row-reverse", sm: "row" },
        gap: { xs: 1, sm: 1 },
        pl: { xs: 1, sm: 3 },
      }}
    >
      <IconButton
        size="medium"
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          color: "black",
        }}
      >
        <Image src={SettingsSlider} alt="slider" width={15} />
      </IconButton>

      <Box
        display="flex"
        sx={{
          width: { xs: "100%", sm: "auto" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 0, sm: 1 },
        }}
      >
        <AppButton
          sx={{
            padding: { xs: 0, sm: 1 },
            "&:hover": { backgroundColor: "unset" },
          }}
          disableRipple
        >
          Anywhere
        </AppButton>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ display: { xs: "none", sm: "flex" } }}
        />

        <Box
          display="flex"
          gap={1}
          sx={{
            width: { xs: "100%", sm: "auto" },
            flexDirection: "row",
            justifyContent: { xs: "left", sm: "center" },
            alignItems: { xs: "left", sm: "center" },
            mx: { xs: -.5, sm: "auto" },
          }}
        >
          <AppButton
            sx={{
              padding: { xs: 0, sm: 1 },
              "&:hover": { backgroundColor: "unset" },
              fontSize: { xs: 12, sm: "inherit" },
              color: { xs: "GrayText", sm: "inherit" },
            }}
            disableRipple
          >
            Any week
          </AppButton>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ display: { xs: "none", sm: "flex" } }}
          />
          <AppButton
            sx={{
              padding: { xs: 0, sm: 1 },
              "&:hover": { backgroundColor: "unset" },
              fontSize: { xs: 12, sm: "inherit" },
              color: { xs: "GrayText", sm: "inherit" },
            }}
            disableRipple
          >
            Add guests
          </AppButton>
        </Box>
      </Box>

      <IconButton
        size="medium"
        sx={{
          backgroundColor: { xs: "unset", sm: "#FF385C" },
          display: "flex",
          justifyContent: "center",
          color: { xs: "black", sm: "white" },
        }}
      >
        <SearchRounded fontSize="small" />
      </IconButton>
    </Box>
  );
}
