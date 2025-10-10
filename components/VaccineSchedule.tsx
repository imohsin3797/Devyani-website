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
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: { xs: "100%", sm: "45%" }
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
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "common.black" }}>
              Birth-6 Years
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0f766e",
                "&:hover": { bgcolor: alpha("#0f766e", 0.8) }
              }}
              onClick={() => window.open("/pdfs/vaccine-schedule-birth-6.pdf", "_blank")}
            >
              View Schedule
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: { xs: "100%", sm: "45%" }
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
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "common.black" }}>
              7-18 Years
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0f766e",
                "&:hover": { bgcolor: alpha("#0f766e", 0.8) }
              }}
              onClick={() => window.open("/pdfs/vaccine-schedule-7-18.pdf", "_blank")}
            >
              View Schedule
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
