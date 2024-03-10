import {
  LightMode,
  ModeNight,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import MenuList from "../../common/ListItem/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_MODE } from "../../../redux/Constants";
import { modeSelector } from "../../../redux/reducers/ModeReducers";



const SideBar = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector(modeSelector);
  const handleMode = () => {

    dispatch({
      type:TOGGLE_MODE
    })

  };


  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          
          <MenuList />

          <ListItem disablePadding>
            <ListItemButton onClick={handleMode}>
              <ListItemIcon>
                {mode === "dark" ? <ModeNight /> : <LightMode />}
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
