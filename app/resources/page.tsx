import * as React from "react";
import ResourceCharts from "@/components/ResourceCharts";
import VaccineSchedule from "@/components/VaccineSchedule";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";

export default function ResourcesPage() {
  return (
    <Box component="main">
      <ResourceCharts />
      <VaccineSchedule />
      <Videos />
      <Footer />
    </Box>
  );
}
