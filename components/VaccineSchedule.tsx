"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { alpha } from "@mui/material/styles";

export default function VaccineSchedule() {
  return (
    <Box sx={{ py: 8, bgcolor: "#f8fafc" }}>
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            color: "common.black",
            textAlign: "center",
            mb: 6
          }}
        >
          Vaccine Schedules
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#BFE3E0",
                color: "#0f766e",
                display: "grid",
                placeItems: "center",
                mb: 2
              }}
            >
              <VaccinesIcon sx={{ fontSize: 40 }} />
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#0f766e",
                "&:hover": { bgcolor: alpha("#0f766e", 0.8) },
                px: 4,
                py: 1.5
              }}
              onClick={() => window.open("/pdfs/vaccine-schedule.pdf", "_blank")}
            >
              View Schedule
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
