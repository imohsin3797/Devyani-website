"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const GALLERY_IMAGES = [
  {
    img: "/images/office-1.png",
    title: "Reception area",
  },
  {
    img: "/images/office-2.png", 
    title: "Exam room",
  },
  {
    img: "/images/office-3.png",
    title: "Waiting room",
  },
  {
    img: "/images/office-7.png",
    title: "Play area",
  },
  {
    img: "/images/office-8.png",
    title: "Staff meeting",
  },
  {
    img: "/images/office-6.png",
    title: "Building exterior",
  }
];

export default function ContactInfo() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            gap: { xs: 6, md: 4 },
          }}
        >
          {/* Contact Form */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                fontWeight: 700,
                color: 'black',
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              Contact Us
            </Typography>
            <Paper 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ p: { xs: 2, md: 3 } }}
            >
              <Stack spacing={2.5}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                />
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  type="tel"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    height: { xs: 48, md: 56 },
                    textTransform: "none",
                    fontWeight: 700,
                    bgcolor: "#BFE3E0",
                    color: "rgba(0,0,0,0.85)",
                    "&:hover": {
                      bgcolor: "#A5D4D0"
                    }
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Box>

          {/* Divider - only show on desktop */}
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Photo Gallery */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                fontWeight: 700,
                color: 'black',
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              Our Offices
            </Typography>
            <ImageList
              sx={{ 
                width: '100%',
                height: { xs: 400, md: 500 },
                gap: { xs: 4, md: 8 }
              }}
              cols={2}
              rowHeight={150}
            >
              {GALLERY_IMAGES.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
