"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function OurStory() {
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
            gap: 6,
            alignItems: "center"
          }}
        >
          <Card
            elevation={4}
            sx={{
              flex: 1,
              borderRadius: 4,
              overflow: "hidden",
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
              order: { xs: 1, md: 1 }
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image="/images/our-story.jpg"
              alt="Pediatric practice serving the community"
              sx={{ objectFit: "cover" }}
            />
          </Card>

          <Box sx={{ flex: 1, textAlign: "center", order: { xs: 2, md: 2 } }}>
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
              Our Story
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8
                }}
              >
                For more than 60 years, we've had the joy of helping kids grow up healthy, happy, and thriving right here in our community. From our two locations, we care for families from all walks of life with the same warmth, expertise, and commitment to excellence that have guided us for generations.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mt: 2
                }}
              >
                Our team is so proud to be part of this community! Many of us have cared for multiple generations of the same families. We celebrate the diversity of the families we serve and are honored to be trusted partners in your child's health journey.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

