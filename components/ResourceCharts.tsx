"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function ResourceCharts() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "common.white" }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ width: "100%" }}
        >
          <Card
            elevation={8}
            sx={{
              flex: 1,
              minWidth: { md: 400 },
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 12,
              },
              height: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ 
                fontWeight: 700,
                py: 2,
                color: "common.black"
              }}
            >
              Motrin (ibuprofen) Dosage
            </Typography>
            <CardMedia
              component="img"
              height="300"
              image="/images/ibuprofen.avif"
              alt="Motrin (ibuprofen) Dosage"
              sx={{ objectFit: "cover" }}
            />
          </Card>

          <Card
            elevation={8}
            sx={{
              flex: 1,
              minWidth: { md: 400 },
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 12,
              },
              height: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: 700,
                py: 2,
                color: "common.black"
              }}
            >
              Diphenhydramine (Benadryl) Dosing
            </Typography>
            <CardMedia
              component="img"
              height="300"
              image="/images/benadryl.avif"
              alt="Vaccination schedule"
              sx={{ objectFit: "cover" }}
            />
          </Card>

          <Card
            elevation={8}
            sx={{
              flex: 1,
              minWidth: { md: 400 },
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 12,
              },
              height: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: 700,
                py: 2,
                color: "common.black"
              }}
            >
              Tylenol (Acetaminophen) Dosage
            </Typography>
            <CardMedia
              component="img"
              height="300"
              image="/images/tylenol.avif" 
              alt="Development milestones"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}