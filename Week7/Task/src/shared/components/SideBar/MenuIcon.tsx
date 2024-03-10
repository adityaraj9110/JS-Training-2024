import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
  SvgIconComponent,
} from "@mui/icons-material";

type MenuListType = {
  primary: string;
  icon: SvgIconComponent;
};

export const MenuIconList: MenuListType[] = [
  {
    primary: "Home",
    icon: Home,
  },
  {
    primary: "Pages",
    icon: Article,
  },
  {
    primary: "Groups",
    icon: Group,
  },
  {
    primary: "MarketPlace",
    icon: Storefront,
  },
  {
    primary: "personal",
    icon: Person,
  },
  {
    primary: "Settings",
    icon: Settings,
  },
  {
    primary: "Profile",
    icon: AccountBox,
  },
] ;
