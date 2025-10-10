"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Staff() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "common.white"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Box>
            <MedicalInformationIcon
              sx={{
                fontSize: 80,
                color: "#BFE3E0",
                mb: 2
              }}
            />
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "common.black" }}
            >
              Nurse Practitioners
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 400, color: "common.black" }}>
              Our experienced nurse practitioners work closely with Dr. Khambete
              to provide comprehensive care for your children. They are highly trained
              professionals dedicated to your family's health and well-being.
            </Typography>
          </Box>

          <Box>
            <SupportAgentIcon
              sx={{
                fontSize: 80,
                color: "#BFE3E0",
                mb: 2
              }}
            />
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "common.black" }}
            >
              Office Staff
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 400, color: "common.black" }}>
              Our friendly office staff is here to help with scheduling,
              insurance questions, and making sure your visit goes smoothly.
              We strive to provide excellent service and support to all our families.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
