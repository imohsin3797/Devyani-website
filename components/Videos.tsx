"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

const VIDEOS = [
  { title: "Video 1", src: "https://www.youtube.com/watch?v=rIkuBhP7mQY" },
  { title: "Video 2", src: "https://www.youtube.com/watch?v=KTWkmTmv3aU" },
];

// Normalize any YouTube URL to the embeddable form
const toEmbedUrl = (url: string) => {
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    // www.youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {}
  // Fallback: pass through (may not work if not an embed URL)
  return url;
};

export default function Videos() {
  return (
    <Box sx={{ py: 8, bgcolor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            fontWeight: 800, 
            color: "common.black", 
            mb: 6 
          }}
        >
          Video Resources
        </Typography>
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {VIDEOS.map((video, index) => (
            <Box key={index} sx={{ width: { xs: "100%", md: "45%" } }}>
              <Paper
                elevation={2}
                sx={{
                  width: "fit-content",
                  mx: "auto",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: alpha("#0f766e", 0.12),
                  bgcolor: "common.white",
                  overflow: "hidden",
                  transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    borderColor: alpha("#0f766e", 0.3),
                  },
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 800, color: "common.black", mb: 2 }}>
                    {video.title}
                  </Typography>
                  
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "300px", sm: "450px", md: "560px" },
                      aspectRatio: "16 / 9",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="iframe"
                      title={video.title}
                      src={toEmbedUrl(video.src)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      loading="lazy"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
