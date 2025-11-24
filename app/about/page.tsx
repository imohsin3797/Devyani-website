"use client";

import * as React from "react";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";
import AboutUsCards from "@/components/AboutUsCards";
import Certifications from "@/components/Certifications";
import Mission from "@/components/Mission";
import OurStory from "@/components/OurStory";

export default function AboutPage() {
  return (
    <Box component="main">
      <AboutUsCards />
      <Mission />
      <OurStory />
      <Certifications />
      <Footer />
    </Box>
  );
}
