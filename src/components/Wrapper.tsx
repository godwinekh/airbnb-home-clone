import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <Box px={3}>{children}</Box>;
};
