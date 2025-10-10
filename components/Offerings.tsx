// app/components/Offerings.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { alpha, darken } from "@mui/material/styles";

type Offering = {
  title: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type OfferingsProps = {
  /** Match this to the info-card color from your Hero (e.g. "#BFE3E0") */
  accentColor?: string;
  items?: Offering[];
  /** Controls for consistent sizing across cards */
  imageHeight?: { xs: number; md: number };
  contentMinH?: { xs: number; md: number };
  actionsH?: { xs: number; md: number };
};

const DEFAULT_ITEMS: Offering[] = [
  {
    title: "Services",
    body:
      "Well-child visits, vaccines, developmental screenings, and care plans tailored to each stage—from newborn to teen.",
    href: "/services",
    imageSrc: "/images/services.png",
    imageAlt: "Pediatrician listening to a child's heartbeat",
  },
  {
    title: "Certifications",
    body:
      "Board-certified pediatrics with current BLS/ACLS/PALS credentials and continuous professional education.",
    href: "/about",
    imageSrc: "/images/certifications.jpg",
    imageAlt: "Framed medical certificates on a clinic wall",
  },
  {
    title: "Resources",
    body:
      "Parent guides, dosing charts, vaccine schedules, and after-hours advice curated by our clinical team.",
    href: "/resources",
    imageSrc: "/images/resources.png",
    imageAlt: "Parent reviewing pediatric health resources on a tablet",
  },
];

export default function Offerings({
  accentColor = "#BFE3E0", // same as your info boxes
  items = DEFAULT_ITEMS,
  imageHeight = { xs: 200, md: 240 }, // equal image heights
  contentMinH = { xs: 160, md: 180 }, // equal text area heights
  actionsH = { xs: 64, md: 68 }, // equal button row heights
}: OfferingsProps) {
  // shared horizontal padding to align with Hero info cards
  const sectionPX = { xs: 2, md: 6 };

  return (
    <Box component="section" sx={{ bgcolor: "common.white" }}>
      <Container maxWidth={false} disableGutters sx={{ py: { xs: 6, md: 8 } }}>
        {/* Full-width, same side padding as Hero; single-row flex with scroll on tiny screens */}
        <Box sx={{ px: sectionPX }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 4 }, // Increased gap between cards
              width: "100%",
              overflowX: "auto",
              pb: 1,
              whiteSpace: "normal", // Allow text wrapping
              justifyContent: "center",
            }}
          >
            {items.map((item) => (
              <Box
                key={item.title}
                sx={{
                  flex: "0 0 75%", // Increased from 70% to 75%
                  minWidth: 420, // Increased from 400 to 420
                  maxWidth: 420, // Increased from 400 to 420
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    backgroundColor: "common.white",
                    width: "100%",
                    boxShadow: (t) => `0 4px 14px ${alpha(t.palette.common.black, 0.08)}`,
                    transition: "box-shadow 120ms ease",
                    "&:hover": {
                      boxShadow: (t) => `0 8px 20px ${alpha(t.palette.common.black, 0.12)}`,
                    },
                  }}
                >
                  {/* Fixed-height image block for equal images */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: imageHeight.xs, md: imageHeight.md },
                      overflow: "hidden",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      flex: "0 0 auto",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={(t) => ({
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(180deg, ${alpha(
                          t.palette.common.black,
                          0
                        )} 50%, ${alpha(t.palette.common.black, 0.12)} 100%)`,
                      })}
                    />
                  </Box>

                  {/* Fixed-min-height content for equal text areas */}
                  <CardContent
                    sx={{
                      flex: "1 1 auto",
                      minHeight: { xs: contentMinH.xs, md: contentMinH.md },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center", // Center content horizontally
                      px: 3, // Increased horizontal padding
                      py: 2.5, // Increased vertical padding
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1.5, 
                        letterSpacing: 0.2,
                        textAlign: "center" // Center title text
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: "text.secondary", 
                        lineHeight: 1.6,
                        whiteSpace: "normal", // Ensure text wraps
                        wordWrap: "break-word",
                        textAlign: "center" // Center body text
                      }}
                    >
                      {item.body}
                    </Typography>
                  </CardContent>

                  {/* Fixed-height actions for equal button rows */}
                  <CardActions
                    sx={{
                      p: 3, // Increased padding
                      pt: 0,
                      height: { xs: actionsH.xs, md: actionsH.md },
                      boxSizing: "border-box",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        height: { xs: actionsH.xs - 16, md: actionsH.md - 16 },
                        textTransform: "none",
                        fontWeight: 800,
                        backgroundColor: accentColor,
                        color: "rgba(0,0,0,0.85)",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: darken(accentColor, 0.08),
                          boxShadow: "none",
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
