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
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography variant="body1">
                We are dedicated to providing comprehensive, compassionate pediatric care 
                that focuses on the whole child. Our evidence-based approach combines 
                with a warm, welcoming environment to ensure the best possible healthcare 
                experience for your family.
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
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Our Approach
              </Typography>
              <Typography variant="body1">
                We believe in building lasting relationships with our patients and their 
                families. By taking the time to truly listen and understand each child's 
                unique needs, we can provide personalized care that supports their 
                health and development at every stage.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}