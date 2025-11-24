"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function HospitalInsurance() {
  const hospitals = [
    "Corewell Health William Beaumont University Hospital (formerly Beaumont Royal Oak)",
    "Trinity Health Oakland Hospital (formerly St. Joseph Mercy Oakland)"
  ];


  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#F7FAF9"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 }
          }}
        >
          {/* Hospital Affiliation - Left Side */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: "common.black"
              }}
            >
              Our Hospital Affiliation
            </Typography>
            <Stack spacing={2} alignItems="center">
              {hospitals.map((hospital, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    color: "common.black",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    textAlign: "center"
                  }}
                >
                  {hospital}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Divider - only show on desktop */}
          <Divider 
            orientation="vertical" 
            flexItem 
            sx={{ display: { xs: "none", md: "block" } }} 
          />

          {/* Accepted Insurance - Right Side */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: "common.black"
              }}
            >
              Accepted Insurance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "common.black",
                fontSize: "1rem",
                lineHeight: 1.6,
                textAlign: "center"
              }}
            >
              We take most all commercial and state health plan insurances, call or contact to inquire.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

