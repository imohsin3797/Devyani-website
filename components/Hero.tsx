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
  title = "Devyani Khambete MDPC",
  subtitle = "Compassionate, evidence-based care for newborns through teens.",
  cardColor = "#BFE3E0",
}: Props) {
  // same padding as Offerings to align edges perfectly
  const sectionPX = { xs: 2, md: 6 };

  return (
    <Box component="section" sx={{ bgcolor: "background.default" }}>
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 300, sm: 420, md: 520 } }}>
        <Image
          src={imageSrc}
          alt="Pediatrician caring for a child in clinic"
          priority
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
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
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "90%", md: "80%" } }}>
            <Typography
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 0.2,
                textShadow: "0 2px 18px rgba(0,0,0,0.45)",
                fontSize: { xs: 28, sm: 40, md: 56 },
                lineHeight: { xs: 1.2, sm: 1.1 },
                wordBreak: "break-word",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: alpha("#fff", 0.95),
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                fontSize: { xs: 14, sm: 16, md: 18 },
                maxWidth: { xs: 300, sm: 500, md: 860 },
                mx: "auto",
                mt: { xs: 1, sm: 1.5 },
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
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 1, sm: 0 },
            width: "100%",
            p: { xs: 1, sm: 0 },
          }}
        >
          <InfoCard
            title="Newborn Services"
            color={cardColor}
            icon={<ChildCareRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "common.black" }} />}
          />
          <InfoCard
            title="Toddler / School-Age / Teen Health"
            color={cardColor}
            icon={<SchoolRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "common.black" }} />}
          />
          <InfoCard
            title="Same-day Sick Child Visits"
            color={cardColor}
            icon={<MedicalServicesRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "common.black" }} />}
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
        p: { xs: 2, sm: 2.5, md: 3 },
        backgroundColor: color,
        borderRight: { xs: "none", sm: `1px solid ${alpha(t.palette.common.white, 0.5)}` },
        "&:last-of-type": { borderRight: "none" },
        textAlign: "center",
        color: t.palette.common.black,
        borderRadius: { xs: 1, sm: 0 },
      })}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: 1, sm: 1.25 } }}>
        <Box aria-hidden sx={{ opacity: 0.95 }}>
          {icon}
        </Box>
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 15, sm: 16, md: 18 },
            letterSpacing: 0.2,
            color: "inherit",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
