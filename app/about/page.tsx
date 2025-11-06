"use client";

import * as React from "react";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";
import AboutUsCards from "@/components/AboutUsCards";
import Certifications from "@/components/Certifications";
import Mission from "@/components/Mission";

export default function AboutPage() {
  return (
    <Box component="main">
      <AboutUsCards />
      <Mission />
      <Certifications />
      <Footer />
    </Box>
  );
}
