import { Box, IconButton, Typography } from "@mui/material";
import FilterTabs from "./FilterTabs";
import SettingsSlider from "@/icons/setting-slider.png";
import Image from "next/image";

export default function Filter() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pr={3} py={2} gap={2} sx={{pl: {xs: 2, sm: 2}}}>
      <FilterTabs />
      <IconButton sx={{ display: {xs: "none", sm:"flex"}, gap: 1, p: 2, borderRadius: 2, border: "1px solid lightgray", "&:hover": {backgroundColor: "unset"} }}>
        <Image src={SettingsSlider} alt="slider" width={15} />
        <Typography fontSize={12} fontWeight={600}>Filters</Typography>
      </IconButton>
    </Box>
  );
}
