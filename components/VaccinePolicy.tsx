"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function VaccinePolicy() {
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
              height="500"
              image="/images/vaccine-policy.jpg"
              alt="Vaccine policy information"
              sx={{ objectFit: "cover" }}
            />
          </Card>

          <Box sx={{ flex: 1, textAlign: "left", order: { xs: 2, md: 2 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: "common.black"
              }}
            >
              Vaccine Policy
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8
                }}
              >
                Our practice firmly believes that immunizations are one of the most effective ways to protect children and our community from serious, preventable diseases. We follow the immunization schedules recommended by the American Academy of Pediatrics (AAP).
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mt: 2
                }}
              >
                We recognize that some families may have questions or hesitations about vaccines. Our team is always available to discuss vaccine safety, timing, and any concerns you may have. While we strongly encourage full vaccination, we continue to provide care for families who choose to delay or decline vaccines.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mt: 2
                }}
              >
                To ensure clear communication and proper documentation, families who decline or delay vaccines are required to review and sign a vaccine discussion/declination waiver at each visit as part of our office policy.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mt: 2
                }}
              >
                Our goal is to provide a safe, supportive environment for every child while maintaining open, respectful dialogue about your child's health.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

