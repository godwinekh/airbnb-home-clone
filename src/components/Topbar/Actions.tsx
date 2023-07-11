import { Box, Button, IconButton } from "@mui/material";
import AppButton from "../AppButton";
import {
  AccountCircle,
  LanguageOutlined,
  MenuOutlined,
} from "@mui/icons-material";

export default function Actions() {
  return (
    <Box alignItems="center" sx={{display: { xs: "none", sm: "flex"}}}>
      <AppButton variant="text">Airbnb your home</AppButton>

      <IconButton size="small" sx={{ p: 1.5 }}>
        <LanguageOutlined />
      </IconButton>

      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 1,
          padding: 0.25,
          paddingLeft: 1.25,
          gap: 0.75,
          color: "#333",
          border: "1px solid lightgray",
          borderRadius: 20,
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "0px 1px 3px 1px lightgray",
          },
        }}
      >
        <MenuOutlined fontSize="small" />
        <AccountCircle fontSize="large" sx={{ color: "gray" }} />
      </Button>
    </Box>
  );
}
