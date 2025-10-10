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

type PediatricianInfo = {
  title: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const INFO_ITEMS: PediatricianInfo[] = [
  {
    title: "Dr. Devyani Khambete",
    body: "Board-certified pediatrician with over 15 years of experience providing comprehensive care from newborns through adolescents. Dedicated to building lasting relationships with families through personalized, evidence-based medicine.",
    href: "/about",
    imageSrc: "/images/devyani.png",
    imageAlt: "Dr. Devyani Khambete in her office",
  },
  {
    title: "Our Practice Philosophy",
    body: "We believe in partnering with parents to provide compassionate, thorough care that addresses the physical, developmental, and emotional needs of each child. Our practice emphasizes preventive care and open communication.",
    href: "/about",
    imageSrc: "/images/practice.jpg",
    imageAlt: "Welcoming pediatric office environment",
  },
];

export default function Pediatrician() {
  const sectionPX = { xs: 2, md: 6 };
  const accentColor = "#BFE3E0";
  const imageHeight = { xs: 280, md: 320 };
  const contentMinH = { xs: 200, md: 240 };
  const actionsH = { xs: 72, md: 80 };

  return (
    <Box 
      component="section" 
      sx={{ 
        bgcolor: "#BFE3E0",
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ px: sectionPX }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {INFO_ITEMS.map((item) => (
              <Box key={item.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: (t) =>
                      `0 8px 24px ${alpha(t.palette.common.black, 0.1)}`,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: imageHeight.xs, md: imageHeight.md },
                      bgcolor: "grey.100",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      p: 3,
                      minHeight: { xs: contentMinH.xs, md: contentMinH.md },
                      boxSizing: "border-box",
                      textAlign: "center"
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        whiteSpace: "normal",
                        wordWrap: "break-word"
                      }}
                    >
                      {item.body}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      p: 3,
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
