import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import {
  Icons,
  Search,
  StylesToolbar,
  UserBox,
} from "../../customStyles/CustomStyles";
import { useDispatch, useSelector } from "react-redux";
import { modeSelector } from "../../../redux/reducers/ModeReducers";
import { LOGOUT } from "../../../redux/Constants";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../../redux/reducers/AuthReducer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useSelector(modeSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(authSelector);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/login");
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: mode === "light" ? "primary.main" : "primary.dark",
      }}
    >
      <StylesToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Baat Karo
        </Typography>

        <FacebookIcon
          sx={{
            display: { xs: "block", sm: "none" },
            width: "30px",
            height: "30px",
          }}
        />

        {user?.email && (
          <>
            <Search>
              <InputBase placeholder="search..." sx={{ color: "black" }} />
            </Search>

            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>

              <Avatar
                sx={{ width: "30px", height: "30px" }}
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                onClick={() => setOpen(true)}
              />
            </Icons>

            <UserBox>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Typography
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
                sx={{textTransform: "capitalize"}}
              >
                {user ? user?.email?.split("@")[0] : ""}
              </Typography>
            </UserBox>
          </>
        )}
      </StylesToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
