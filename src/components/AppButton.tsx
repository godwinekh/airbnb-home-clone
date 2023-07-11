import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const AppButton = styled(Button)({
  boxShadow: "none",
  textTransform: "initial",
  fontSize: 14,
  padding: "10px 14px",
  lineHeight: 1.5,
  color: "#333",
  borderRadius: "50px",
  backgroundColor: "none",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#eee",
    boxShadow: "none",
    outline: 0,
  },
});

export default AppButton;
