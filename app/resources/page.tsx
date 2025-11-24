import * as React from "react";
import ResourceCharts from "@/components/ResourceCharts";
import VaccinePolicy from "@/components/VaccinePolicy";
import VaccineSchedule from "@/components/VaccineSchedule";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";

export default function ResourcesPage() {
  return (
    <Box component="main">
      <ResourceCharts />
      <VaccinePolicy />
      <VaccineSchedule />
      <Videos />
      <Footer />
    </Box>
  );
}
