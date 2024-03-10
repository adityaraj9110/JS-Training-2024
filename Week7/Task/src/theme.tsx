import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

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
      light:blue[200],
      dark:blue[900]
    },
    custom:{
      backgroundColor:"#000",
      color:"#fff"
    }
  },
});


export default theme;
