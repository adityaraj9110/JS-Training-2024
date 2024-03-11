import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { PostDataType } from "../../common/PostData";
import { modeSelector } from "../../../redux/reducers/ModeReducers";
import { useSelector } from "react-redux";

const PostCard = ({
  avatarName,
  content,
  imageUrl,
  subHeader,
  title,
}: PostDataType) => {
  const { mode } = useSelector(modeSelector);

  return (
    <Card sx={{ mb: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {avatarName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert
              sx={{
                color:
                  mode === "light" ? "custom.iconColor" : "custom.customText",
              }}
            />
          </IconButton>
        }
        title={title}
        subheader={subHeader}
        subheaderTypographyProps={{
          sx: {
            color: mode === "light" ? "custom.iconColor" : "custom.customText",
          },
        }}
        sx={{
          bgcolor:
            mode === "light" ? "custom.customText" : "custom.darkCardHeader",
          color: mode === "light" ? "custom.iconColor" : "custom.customText",
        }}
      />
      <CardMedia
        component="img"
        height="20%"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
