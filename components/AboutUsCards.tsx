"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function AboutUsCards() {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: "#BFE3E0" // Matching the greenish/blue background color used elsewhere
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
          Our Team
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center"
          }}
        >
          <Card 
            elevation={4}
            sx={{ 
              flex: 1,
              maxWidth: 500,
              bgcolor: "common.white",
              color: "common.black",
              borderRadius: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image="/images/devyani.png"
              alt="Doctor with young patient"
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Devyani Khambete, MD
              </Typography>
              <Typography variant="body1">
                
Dr. Khambete obtained her medical degree from Seth GS Medical College and completed her Pediatric Residency at Henry Ford Hospital. She is board certified in Pediatrics.
              </Typography>
            </CardContent>
          </Card>

          <Card 
            elevation={4}
            sx={{ 
              flex: 1,
              maxWidth: 500,
              bgcolor: "common.white",
              color: "common.black",
              borderRadius: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image="/images/pavarthi.png"
              alt="Doctor consulting with family"
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Parvathi Sivaram, MD
              </Typography>
              <Typography variant="body1">
              Dr. Sivaram obtained her medical degree from University of Coimatore Medical College and completed her Pediatric Residency at Henry Ford Hospital and is board certified in pediatrics. She is also board certified in Allergy and Immunology which she completed at Henry Ford Hospital as well.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}