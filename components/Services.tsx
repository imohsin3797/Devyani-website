"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";

// Icons
import ChildCare from "@mui/icons-material/ChildCare";
import SportsSoccer from "@mui/icons-material/SportsSoccer";
import Psychology from "@mui/icons-material/Psychology";
import Healing from "@mui/icons-material/Healing";
import MedicalServices from "@mui/icons-material/MedicalServices";
import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import Vaccines from "@mui/icons-material/Vaccines";
import SupportAgent from "@mui/icons-material/SupportAgent";

type Service = {
  title: string;
  desc: string;
  Icon: typeof ChildCare;
  imageSrc?: string;
};

const SERVICES: Service[] = [
  {
    title: "Free New Parent Consults",
    desc:
      "We offer new parent visits prior to birth to help families feel comfortable with our practice and providers, and to answer any questions expecting parents may have.",
    Icon: ChildCare,
    imageSrc: "/images/new-parent.jpg",
  },
  {
    title: "Care Management",
    desc:
      "Personalized management for children with special needs. We have an embedded care manager in-house to coordinate care, connect families with resources, and ensure comprehensive support for your child's unique healthcare needs.",
    Icon: SupportAgent,
    imageSrc: "/images/care-management.jpg",
  },
  {
    title: "Vaccine Hesitancy Support",
    desc:
      "We provide compassionate, non-judgmental support for families with vaccine hesitancy. Our providers take time to listen to your concerns, answer questions with evidence-based information, and work collaboratively to create a vaccination plan that feels right for your family.",
    Icon: Vaccines,
    imageSrc: "/images/vaccine-hesitancy.jpg.webp",
  },
  {
    title: "Sports/Activity Physicals",
    desc:
      "Sports and activity physicals (camp, scouts, school activities) in accordance with MHSAA and other organizations to keep your child safe and active.",
    Icon: SportsSoccer,
    imageSrc: "/images/sport-physical.jpg",
  },
  {
    title: "ADHD Management",
    desc:
      "Medication initiation and ongoing management with careful follow-up and adjustments to achieve the desired outcomes for your child.",
    Icon: Psychology,
    imageSrc: "/images/adhd.jpg",
  },
  {
    title: "Asthma Management",
    desc:
      "Comprehensive care including medication initiation, creating an asthma action plan, and adjustment of therapies to improve control and quality of life.",
    Icon: Healing,
    imageSrc: "/images/asthma-treatment.jpg.webp",
  },
  {
    title: "Child Dental",
    desc:
      "Fluoride varnish application for all children up to age three with referrals to local dentists for further dental evaluation when needed.",
    Icon: MedicalServices,
    imageSrc: "/images/child-dental.jpg",
  },
  {
    title: "ER/Urgent Care Follow Up",
    desc:
      "Post-ER or urgent care follow-up to ensure your child's care is transitioning appropriately and concerns are addressed promptly.",
    Icon: HealthAndSafety,
    imageSrc: "/images/er-checkup.jpg",
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#F7FAF9",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, color: "text.secondary" }}
          >
            What We Do
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, textAlign: "center", lineHeight: 1.2, color: "common.black" }}
          >
            Compassionate Pediatric Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 720, textAlign: "center" }}
          >
            Evidence-based care for infants, children, and adolescents—delivered
            with patience, clarity, and a whole-family approach.
          </Typography>
        </Stack>

        {/* Cards */}
        <Stack spacing={4}>
          {SERVICES.map(({ title, desc, Icon, imageSrc }, index) => (
            <Paper
              key={title}
              elevation={2}
              sx={{
                width: "100%",
                borderRadius: 3,
                border: "1px solid",
                borderColor: alpha("#0f766e", 0.12),
                bgcolor: "common.white",
                transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  borderColor: alpha("#0f766e", 0.3),
                },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: { xs: "auto", md: 300 },
                overflow: "hidden",
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: { xs: 200, md: "auto" },
                      backgroundImage: `url(${imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "#BFE3E0",
                        color: "#0f766e",
                        display: "grid",
                        placeItems: "center",
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "common.black", mb: 2 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {desc}
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      order: { xs: 2, md: 1 }
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "#BFE3E0",
                        color: "#0f766e",
                        display: "grid",
                        placeItems: "center",
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "common.black", mb: 2 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: { xs: 200, md: "auto" },
                      backgroundImage: `url(${imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      order: { xs: 1, md: 2 }
                    }}
                  />
                </>
              )}
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
