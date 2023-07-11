import { Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabItems from "./TabItems";
import Image from "next/image";
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from "@mui/icons-material";

export default function FilterTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{ position: "relative" }}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="filter homes"
      slots={{
        StartScrollButtonIcon: KeyboardArrowLeftRounded,
        EndScrollButtonIcon: KeyboardArrowRightRounded,
      }}
      TabScrollButtonProps={{
        sx: {
          border: "1px solid lightgray",
          borderRadius: 50,
          padding: 0,
          fontWeight: 600,
          marginTop: 2.25,
          marginBottom: 2.25,
          width: 25,
          height: 25,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 2px 10px 1px lightgray",
            transform: "scale(1.1)",
          },
        },
      }}
    >
      {TabItems.map((item) => (
        <Tab
          key={item.label}
          icon={<Image src={item.image} alt={item.label} width={25} />}
          label={
            <Typography
              sx={{
                textTransform: "initial",
                fontSize: 12,
                fontWeight: 600,
                my: 0.5,
              }}
            >
              {item.label}
            </Typography>
          }
          sx={{
            px: 0,
          }}
        />
      ))}
    </Tabs>
  );
}
