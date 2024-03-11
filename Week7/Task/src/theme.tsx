/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaletteColor,  createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    custom: PaletteColor;
  }
  interface PaletteOptions {
    custom?: any;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue[600],
      light: blue[200],
      dark: blue[900],
    },
    custom: {
      main: "#000", 
      customText: "#fff",
      iconColor: "#707070", 
      darkCardHeader:"#1E1E1E"
    },
  },
});

export default theme;

// #1E1E1E
//  for card nav
