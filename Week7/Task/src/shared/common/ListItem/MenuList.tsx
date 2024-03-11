import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { MenuIconList } from "../../components/SideBar/MenuIcon";
import { useSelector } from "react-redux";
import { modeSelector } from "../../../redux/reducers/ModeReducers";

const MenuList = () => {
  
  const { mode } = useSelector(modeSelector);

  return (
    <>
      {MenuIconList.map((item) => (
        <ListItem key={item.primary} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <item.icon
                sx={{
                  color:
                    mode === "dark" ? "custom.customText" : "custom.iconColor",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item.primary} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default MenuList;
