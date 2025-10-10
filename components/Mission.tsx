"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Mission() {
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
            gap: 6,
            alignItems: "center"
          }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: "common.black"
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "common.black",
                fontSize: "1.1rem",
                lineHeight: 1.8
              }}
            >
              At Khambete Pediatrics, we are committed to providing exceptional healthcare 
              for children from birth through adolescence. We believe in creating a 
              nurturing environment where families feel supported and children receive 
              the highest quality medical care. Our practice combines modern medical 
              expertise with a compassionate, personalized approach to ensure every 
              child's optimal health and development. We strive to be your trusted 
              partner in your child's healthcare journey, offering comprehensive 
              services and guidance at every stage of growth.
            </Typography>
          </Box>

          <Card
            elevation={4}
            sx={{
              flex: 1,
              borderRadius: 4,
              overflow: "hidden",
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image="/images/mission.jpg"
              alt="Doctor caring for young patient"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

