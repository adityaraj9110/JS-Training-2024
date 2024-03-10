import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { MenuIconList } from "../../components/SideBar/MenuIcon";

const MenuList = () => {
  return (
    <>
      {MenuIconList.map((item) => (
        <ListItem key={item.primary} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.primary} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default MenuList;
