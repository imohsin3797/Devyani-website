"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { Place, AccessTime, Email, Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FBF6E8", // soft cream background
        color: "rgba(0,0,0,0.85)",
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Contact panel (left) */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                letterSpacing: 0.2,
                mb: 2,
              }}
            >
              Visit Us!
            </Typography>

            {/* Address */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
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
                <Place fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Our Address
                </Typography>
                <Typography variant="body1">71 E. Long Lake Rd.</Typography>
                <Typography variant="body1">
                  Bloomfield Hills, MI 48304
                </Typography>
              </Box>
            </Stack>

            {/* Hours */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
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
                <AccessTime fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Office Hours
                </Typography>
                <Typography variant="body2">
                  <strong>Monday – Thursday:</strong>&nbsp;8:00AM – 5:00PM
                </Typography>
                <Typography variant="body2">
                  <strong>After Hours:</strong>&nbsp;5:00PM – 6:00PM
                </Typography>
                <Typography variant="body2">
                  <strong>Friday:</strong>&nbsp;8:00AM – 5:00PM
                </Typography>
                <Typography variant="body2">
                  <strong>Saturday After Hours:</strong>&nbsp;8:00AM – 12:00PM
                </Typography>
              </Box>
            </Stack>

            {/* Email */}
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
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
                <Email fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Email Us
                </Typography>
                <Link
                  href="mailto:info@serenitypeds.com"
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  info@serenitypeds.com
                </Link>
              </Box>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* COVID note + phone */}
            <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1.5 }}>
              Due to the COVID-19 pandemic, we are not currently offering office
              tours for new patients.
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Phone fontSize="small" />
              <Typography variant="h6" sx={{ m: 0 }}>
                (248)-533-0000
              </Typography>
            </Stack>
          </Box>

          {/* Vertical Divider */}
          <Divider orientation="vertical" flexItem sx={{ mx: 4, display: { xs: 'none', md: 'block' } }} />

          {/* Map (right) */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                aspectRatio: "16 / 9",
                height: 400,
                bgcolor: "#eee",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.080982848303!2d-83.24463548453686!3d42.55419997917392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c46b06b3f0c1%3A0x9f9c49f74c4e2739!2s71%20E%20Long%20Lake%20Rd%2C%20Bloomfield%20Hills%2C%20MI%2048304!5e0!3m2!1sen!2sus!4v1629308075561!5m2!1sen!2sus"
                title="Map to Serenity Pediatrics"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* Mobile Map */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%', mt: 4 }}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                aspectRatio: "16 / 9",
                height: 300,
                bgcolor: "#eee",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.080982848303!2d-83.24463548453686!3d42.55419997917392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c46b06b3f0c1%3A0x9f9c49f74c4e2739!2s71%20E%20Long%20Lake%20Rd%2C%20Bloomfield%20Hills%2C%20MI%2048304!5e0!3m2!1sen!2sus!4v1629308075561!5m2!1sen!2sus"
                title="Map to Serenity Pediatrics"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom border and copyright */}
        <Divider sx={{ mt: 4, mb: 2, borderColor: "rgba(0,0,0,0.08)" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Serenity Pediatrics
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            71 E. Long Lake Rd, Bloomfield Hills, MI 48304
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}