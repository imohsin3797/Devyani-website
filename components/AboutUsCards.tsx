"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function AboutUsCards() {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: "#BFE3E0" // Matching the greenish/blue background color used elsewhere
      }}
    >
      <Container maxWidth="xl">
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
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center"
          }}
        >
          <Card 
            elevation={4}
            sx={{ 
              flex: '0 1 auto',
              width: { xs: '100%', md: 420 },
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
              image="/images/devyani.png"
              alt="Doctor with young patient"
              sx={{ 
                objectFit: "cover", 
                width: "100%",
                height: 480,
                minHeight: 480,
                maxHeight: 480
              }}
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
              flex: '0 1 auto',
              width: { xs: '100%', md: 420 },
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
              image="/images/provider-2.jpeg"
              alt="Pediatric Nurse Practitioner"
              sx={{ 
                objectFit: "cover", 
                width: "100%",
                height: 480,
                minHeight: 480,
                maxHeight: 480
              }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Vanesa Galley, CPNP
              </Typography>
              <Stack spacing={1.5} sx={{ textAlign: 'center' }}>
                <Typography variant="body1" component="p">
                  Vanesa Galley, CPNP joined the team at Devyani Khambete M.D., P.C. in January 2025 and is certified through the PNCB as a Pediatric Nurse Practitioner. Before earning her advanced degree, she worked as a Registered Nurse in the Emergency Department.
                </Typography>
                <Typography variant="body1" component="p">
                  She received her Master's Degree in Pediatric Primary Care from West Virginia University and completed her nursing education at the University of Cincinnati. Vanesa also holds a Bachelor of Science from Ohio State University, where she majored in neuroscience and philosophy.
                </Typography>
                <Typography variant="body1" component="p">
                  Vanesa is conversational in Spanish and values the opportunity to connect with Spanish-speaking families.
                </Typography>
                <Typography variant="body1" component="p">
                  She is dedicated to providing exceptional primary care and values the opportunity to support families throughout their child's health journey. She loves watching children grow and is honored to play a trusted role in their healthy development.
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card 
            elevation={4}
            sx={{ 
              flex: '0 1 auto',
              width: { xs: '100%', md: 420 },
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
              image="/images/jayci-johnson.jpg"
              alt="Family Nurse Practitioner"
              sx={{ 
                objectFit: "cover", 
                width: "100%",
                height: 480,
                minHeight: 480,
                maxHeight: 480
              }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Jayci Johnson, FNP-C
              </Typography>
              <Stack spacing={1.5} sx={{ textAlign: 'center' }}>
                <Typography variant="body1" component="p">
                  Jayci Johnson, FNP-C joined the team at Devyani Khambete M.D., P.C. in September 2024. She is certified by the American Academy of Nurse Practitioners as a Family Nurse Practitioner and is also a Certified Care Manager. In addition to providing primary care, she serves as the practice’s Care Manager, supporting families of children with complex medical conditions.
                </Typography>
                <Typography variant="body1" component="p">
                  Jayci is originally from Salt Lake City, Utah. She completed her undergraduate studies at Brigham Young University and earned her nursing degree from Westminster College. She later received her Nurse Practitioner degree from Oakland University. Jayci, her husband, and their Bernedoodle, Wilson, now enjoy calling the Midwest home.
                </Typography>
                <Typography variant="body1" component="p">
                  She brings a strong background in pediatric and adolescent care, having previously worked as a pediatric dental assistant, oncology nurse, and general pediatrics nurse at Corewell Health Royal Oak. Her experience as a youth church leader and assistant high school cheer coach has further shaped her commitment to supporting young people.
                </Typography>
                <Typography variant="body1" component="p">
                  Jayci is fluent in Spanish and values the opportunity to connect with and care for Spanish-speaking families. She has conducted research on eating disorders and enjoys helping children and teens develop healthy nutrition and exercise habits.
                </Typography>
                <Typography variant="body1" component="p">
                  Dedicated to delivering compassionate, high-quality care, Jayci is honored to support families throughout their child’s health and development.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}