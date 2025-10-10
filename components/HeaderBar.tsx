"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, alpha } from "@mui/material/styles";

/**
 * HeaderBar component
 *
 * - Built for Next.js (App Router) with TypeScript and Material UI
 * - Left: practice name (acts as Home link)
 * - Center: nav items with thin vertical dividers between them
 * - Right: Call button with phone icon and number (click-to-call)
 * - Responsive: collapses to hamburger on small screens
 * - Styling aims to match the provided screenshot: light header, bold nav, ample spacing
 *
 * Font: Uses `Playfair Display` for the logo-like practice name if available.
 * Add this to your root layout to load the font (optional):
 *   import { Playfair_Display } from "next/font/google";
 *   const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600","700","800"] });
 *   <body className={playfair.className}>...</body>
 */

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (pathname === "/") {
      // If already on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home and then scroll to contact
      router.push("/");
      // Use setTimeout to ensure the page loads before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const NavButtons = (
    <Stack direction="row" spacing={0} alignItems="center" sx={{ height: 48 }}>
      {NAV_LINKS.map((item, idx) => {
        const active = pathname === item.href;
        return (
          <React.Fragment key={item.href}>
            {idx !== 0 && (
              <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 0, borderColor: (t) => alpha(t.palette.text.primary, 0.15) }} />
            )}
            <Button
              component={Link}
              href={item.href}
              onClick={item.label === "Contact" ? handleContactClick : undefined}
              disableRipple
              sx={{
                textTransform: "none",
                fontWeight: 700,
                letterSpacing: 0.2,
                fontSize: 16,
                px: 1,
                color: active ? "text.primary" : (t) => alpha(t.palette.text.primary, 0.85),
                "&:hover": { backgroundColor: "transparent", color: "text.primary" },
              }}
            >
              {item.label}
            </Button>
          </React.Fragment>
        );
      })}
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: (t) => `1px solid ${alpha(t.palette.text.primary, 0.08)}`,
      }}
    >
      <Toolbar sx={{ minHeight: 84, gap: 2, px: { xs: 2, sm: 3, md: 6 } }}>
        {/* Left: Practice name */}
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Typography
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              fontWeight: 800,
              fontSize: { xs: 18, sm: 22, md: 26 },
              lineHeight: 1.1,
              letterSpacing: 0.2,
              color: "inherit",
              fontFamily: `'Playfair Display', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
            }}
          >
            Devyani Khambete Pediatrics
          </Typography>
        </Box>

        {/* Center: Nav with dividers (hidden on small) */}
        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          {NavButtons}
        </Box>

        {/* Right: Phone */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
          <PhoneLink />
        </Box>

        {/* Mobile: Hamburger + Drawer */}
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
          <IconButton aria-label="menu" onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 300, p: 2 }} role="presentation" onClick={() => setOpen(false)}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                Menu
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <List>
                {NAV_LINKS.map((item) => (
                  <ListItem key={item.href} disablePadding>
                    <ListItemButton 
                      component={Link} 
                      href={item.href}
                      onClick={item.label === "Contact" ? handleContactClick : undefined}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontWeight: pathname === item.href ? 700 : 600 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <PhoneLink />
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function PhoneLink() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton
        aria-label="call"
        component={Link}
        href="tel:+12486823300"
        sx={{
          border: (t) => `1px solid ${alpha(t.palette.text.primary, 0.2)}`,
          mr: -0.5,
        }}
      >
        <PhoneRoundedIcon />
      </IconButton>
      <Button
        component={Link}
        href="tel:+12486823300"
        disableRipple
        sx={{
          textTransform: "none",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 0.3,
          color: "text.primary",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        (248) 682-3300
      </Button>
    </Stack>
  );
}
