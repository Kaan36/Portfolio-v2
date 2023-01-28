import "@/styles/globals.css";
import { Inter } from "@next/font/google";

import { createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 940,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h3: {
      marginTop: "20px",
      marginBottom: "10px",
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 700,
    },
    p: {
      fontSize: "14px",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
