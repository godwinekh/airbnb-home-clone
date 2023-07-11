"use client";
import BottomBar from "@/components/Bottombar/BottomBar";
import Filter from "@/components/Filter/Filter";
import ComputeFees from "@/components/ComputeFees";
import Topbar from "@/components/Topbar/Topbar";
import { Container, Divider } from "@mui/material";
import dynamic from "next/dynamic";

const Apartments = dynamic(() => import("@/components/Apartments/Apartments"), {
  ssr: false,
});

export default function Home() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Topbar />
      <Divider />
      <Filter />
      <ComputeFees />
      <Apartments />
      <BottomBar />
    </Container>
  );
}
