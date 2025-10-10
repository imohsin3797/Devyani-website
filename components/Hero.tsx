"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material/styles";

import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";

type Props = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  cardColor?: string;
};

export default function Hero({
  imageSrc = "/images/hero-new2.png",
  title = "Devyani Khambete Pediatrics",
  subtitle = "Compassionate, evidence-based care for newborns through teens.",
  cardColor = "#BFE3E0",
}: Props) {
  // same padding as Offerings to align edges perfectly
  const sectionPX = { xs: 2, md: 6 };

  return (
    <Box component="section" sx={{ bgcolor: "background.default" }}>
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 420, sm: 520, md: 620 } }}>
        <Image
          src={imageSrc}
          alt="Pediatrician caring for a child in clinic"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        {/* Gradient overlay */}
        <Box
          sx={(t) => ({
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                180deg,
                ${alpha(t.palette.common.black, 0.15)} 0%,
                ${alpha(t.palette.common.black, 0.25)} 45%,
                ${alpha(t.palette.common.black, 0.35)} 100%
              )
            `,
          })}
        />

        {/* Centered headline */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: sectionPX,
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 0.2,
                textShadow: "0 2px 18px rgba(0,0,0,0.45)",
                fontSize: { xs: 32, sm: 44, md: 56 },
                lineHeight: 1.1,
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: alpha("#fff", 0.95),
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                fontSize: { xs: 15, sm: 17, md: 18 },
                maxWidth: 860,
                mx: "auto",
                mt: 1.5,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Three boxes BELOW the image and aligned with Offerings padding */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // span entire width on all sizes
            gap: 0, // boxes touch
            width: "100%",
            // On very small screens, force a single row with scroll
            overflowX: { xs: "auto", md: "visible" },
            whiteSpace: { xs: "nowrap", md: "normal" },
          }}
        >
          <InfoCard
            title="Newborn Services"
            color={cardColor}
            icon={<ChildCareRoundedIcon sx={{ fontSize: { xs: 36, md: 42 }, color: "common.black" }} />}
          />
          <InfoCard
            title="Toddler / School-Age / Teen Health"
            color={cardColor}
            icon={<SchoolRoundedIcon sx={{ fontSize: { xs: 36, md: 42 }, color: "common.black" }} />}
          />
          <InfoCard
            title="Same-day Sick Child Visits"
            color={cardColor}
            icon={<MedicalServicesRoundedIcon sx={{ fontSize: { xs: 36, md: 42 }, color: "common.black" }} />}
          />
        </Box>
      </Box>
    </Box>
  );
}

function InfoCard({
  title,
  color,
  icon,
}: {
  title: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <Paper
      square
      elevation={0}
      sx={(t) => ({
        p: { xs: 2.5, sm: 3 },
        backgroundColor: color,
        // faint white dividers
        borderRight: `1px solid ${alpha(t.palette.common.white, 0.5)}`, // between columns
        "&:last-of-type": { borderRight: "none" }, // no divider after the last column
        textAlign: "center",
        color: t.palette.common.black,
        minWidth: { xs: 280, md: "auto" }, // helps keep readable when scrolling on xs
      })}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.25 }}>
        <Box aria-hidden sx={{ opacity: 0.95 }}>
          {icon}
        </Box>
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 16, sm: 18 },
            letterSpacing: 0.2,
            color: "inherit",
            whiteSpace: "normal",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
