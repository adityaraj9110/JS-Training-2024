import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { AvatarData, ImageListData, LatestPostData } from "./ImageList";
import { useSelector } from "react-redux";
import { modeSelector } from "../../../redux/reducers/ModeReducers";

const RightBar = () => {
  const { mode } = useSelector(modeSelector);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7} sx={{ marginRight: "50px" }}>
          {AvatarData.map((item) => (
            <Avatar key={item.alt} alt={item.alt} src={item.imgUrl} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          {ImageListData.map((item) => (
            <ImageListItem key={item.imgUrl}>
              <img src={item.imgUrl} alt={item.alt} />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: mode === "light" ? "custom.customText" : "custom.main",
          }}
        >
          {LatestPostData.map((item) => (
            <React.Fragment key={item.alt}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.alt} src={item.imgUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color= {mode === "light" ? "custom.main" : "custom.customText"}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color= {mode === "light" ? "custom.main" : "custom.customText"}
                      >
                        {item.message}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
