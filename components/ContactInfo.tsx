"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import { Place, AccessTime, Email, Phone, Fax } from "@mui/icons-material";

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
          {/* Contact Information */}
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

            {/* Waterford Location */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={3}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "#E4F2F0",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <Place fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' }, color: "black" }}>
                  Waterford Office
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: "black" }}>
                  2561 Elizabeth Lake Rd
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: "black" }}>
                  Waterford, MI 48328
                </Typography>
                <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" sx={{ color: "black" }} />
                    <Link href="tel:+12486823300" sx={{ color: "black", textDecoration: "none" }}>
                      <Typography variant="body2" sx={{ color: "black" }}>(248) 682-3300</Typography>
                    </Link>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Fax fontSize="small" sx={{ color: "black" }} />
                    <Typography variant="body2" sx={{ color: "black" }}>(248) 682-0026</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            {/* Lake Orion Location */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={3}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "#E4F2F0",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <Place fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' }, color: "black" }}>
                  Lake Orion Office
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: "black" }}>
                  1408 S. Lapeer Rd
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: "black" }}>
                  Lake Orion, MI 48360
                </Typography>
                <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" sx={{ color: "black" }} />
                    <Link href="tel:+12486909285" sx={{ color: "black", textDecoration: "none" }}>
                      <Typography variant="body2" sx={{ color: "black" }}>(248) 690-9285</Typography>
                    </Link>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Fax fontSize="small" sx={{ color: "black" }} />
                    <Typography variant="body2" sx={{ color: "black" }}>(248) 690-9603</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            {/* Hours */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={3}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "#E4F2F0",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <AccessTime fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' }, color: "black" }}>
                  Office Hours (Both Locations)
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: "black" }}>
                  <strong>Monday – Friday:</strong>&nbsp;8:45AM – 4:30PM
                </Typography>
              </Box>
            </Stack>

            {/* Email */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "#E4F2F0",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <Email fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' }, color: "black" }}>
                  Email Us
                </Typography>
                <Link
                  href="mailto:info@devyani-pediatrics.com"
                  underline="hover"
                  sx={{ color: "black" }}
                >
                  info@devyani-pediatrics.com
                </Link>
              </Box>
            </Stack>
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
