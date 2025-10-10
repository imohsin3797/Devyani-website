"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Certifications() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#BFE3E0" // Changed to match the greenish/blue background
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 6,
            color: "common.black"
          }}
        >
          Our Certifications
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            width: "100%"
          }}
        >
          <Card
            elevation={4}
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: 3,
              bgcolor: "common.white",
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="/images/certification-1.png"
              alt="Medical certification"
              sx={{ objectFit: "contain", width: "100%" }}
            />
          </Card>

          <Card
            elevation={4}
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: 3,
              bgcolor: "common.white",
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="/images/certification-2.png"
              alt="Medical certification"
              sx={{ objectFit: "contain", width: "100%" }}
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
}


