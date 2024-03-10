import { Box, Toolbar, styled } from "@mui/material";

export const StylesToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
export const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  
export const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    //  up means sm ho ya ussee upr ho tb ye style apply hoga
  }));
  
export const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
}));