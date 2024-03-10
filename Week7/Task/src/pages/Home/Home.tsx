import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Stack, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useSelector } from "react-redux";
import SideBar from "../../shared/components/SideBar/SideBar";
import Feeds from "../../shared/components/Feeds/Feed";
import RightBar from "../../shared/components/RightBar/RightBar";
import { modeSelector } from "../../redux/reducers/ModeReducers";

const Home = () => {
  const modeChange = useSelector(modeSelector);
  // const lightTheme = theme;

  const darkTheme = createTheme({
    // ...theme,
    palette: {
      // ...theme.palette,
      mode: modeChange.mode,
      primary: {
        main: blue[600],
        light: blue[500],
        dark: blue[900],
      },
    },
  });

  console.log(modeChange);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar />
            <Feeds />
            <RightBar />
          </Stack>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Home;
