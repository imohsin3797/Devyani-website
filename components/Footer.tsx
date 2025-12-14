"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { Place, AccessTime, Phone, Facebook } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FBF6E8",
        color: "rgba(0,0,0,0.85)",
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 }
        }}>
          {/* Contact panel (left) */}
          <Box sx={{ 
            flex: 1,
            width: '100%'
          }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                letterSpacing: 0.2,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              Visit Us!
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
                <Place fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Waterford Office
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  2561 Elizabeth Lake Rd
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  Waterford, MI 48328
                </Typography>
                <Stack direction="row" spacing={2} mt={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography variant="body2">(248) 682-3300</Typography>
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
                <Place fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Lake Orion Office
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  1408 S. Lapeer Rd
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  Lake Orion, MI 48360
                </Typography>
                <Stack direction="row" spacing={2} mt={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography variant="body2">(248) 690-9285</Typography>
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
                <AccessTime fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Office Hours (Both Locations)
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  <strong>Monday – Friday:</strong>&nbsp;8:45AM – 4:30PM
                </Typography>
              </Box>
            </Stack>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <IconButton
                component="a"
                href="https://www.facebook.com/dkmdpc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  color: "black",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <Facebook />
              </IconButton>
            </Stack>
          </Box>

          {/* Maps Container */}
          <Box sx={{ 
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            {/* Waterford Map */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                width: '100%',
                height: { xs: 200, sm: 250, md: 300 },
                bgcolor: "#eee",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.8146670045483!2d-83.3866492!3d42.6615293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a3b859453acb%3A0x71923ed5999e3f65!2s2561%20Elizabeth%20Lake%20Rd%2C%20Waterford%20Twp%2C%20MI%2048328!5e0!3m2!1sen!2sus!4v1629308075561!5m2!1sen!2sus"
                title="Map to Waterford Office"
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

            {/* Lake Orion Map */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                width: '100%',
                height: { xs: 200, sm: 250, md: 300 },
                bgcolor: "#eee",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.8146670045483!2d-83.2416565!3d42.7827183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ea0a6c6c1c63%3A0x9f5b5a5c76c87a9a!2s1408%20S%20Lapeer%20Rd%2C%20Lake%20Orion%2C%20MI%2048360!5e0!3m2!1sen!2sus!4v1629308075561!5m2!1sen!2sus"
                title="Map to Lake Orion Office"
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
          <Typography variant="caption" sx={{ opacity: 0.7, textAlign: { xs: 'center', sm: 'left' } }}>
            © {new Date().getFullYear()} Devyani Khambete, MD, PC
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7, textAlign: { xs: 'center', sm: 'right' } }}>
            Waterford & Lake Orion, MI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}