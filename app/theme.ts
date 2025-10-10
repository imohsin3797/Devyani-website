// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#fff", paper: "#fff" },
  },
  typography: {
    // Use Geist as your base body font (you already load it in layout)
    fontFamily: "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
  },
});

export default theme;
