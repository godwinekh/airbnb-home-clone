import { Box } from "@mui/material";
import Search from "./Search";
import Logo from "./Logo";
import Actions from "./Actions";

export default function Topbar() {
  return (
    <Box
      py={1}
      mb={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={0}
      sx={{px: {xs: 1, sm: 3}}}
    >
      <Logo />
      <Search />
      <Actions />
    </Box>
  );
}
