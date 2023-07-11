import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Wrapper from "./Wrapper";

// fill="${encodeURIComponent(
//         "#000"
//       )}"

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 48,
  height: 32,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#000",
        opacity: 1,
        border: 0,
      },
      "& .MuiSwitch-thumb:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 2.5,
        top: 2.5,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#000"
        )}" d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z"/></svg>')`,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 28,
    height: 28,
    "&:before": {
      backgroundImage: "none",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 32 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ComputeFees() {
  return (
    <Wrapper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          border: "1px solid lightgray",
          borderRadius: 3,
          px: 2,
          py: 2,
          width: { lg: 1 / 2 },
          mx: { lg: "auto" },
        }}
      >
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "left", sm: "center" },
            alignItems: { xs: "left", sm: "center" },
            gap: { xs: 0, sm: 2 },
          }}
        >
          <Typography fontSize={15} fontWeight={600}>
            Display total price
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography fontSize={15} color={"GrayText"}>
            Include all fees, before taxes
          </Typography>
        </Box>

        <IOSSwitch sx={{ my: 1 }} defaultChecked />
      </Box>
    </Wrapper>
  );
}
