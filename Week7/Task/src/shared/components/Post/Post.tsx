// import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
// import {
//   Avatar,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Checkbox,
//   IconButton,
//   Typography,
// } from "@mui/material";
import { PostData } from "../../common/PostData";
import PostCard from "./PostCard";
// import { useSelector } from "react-redux";
// import { modeSelector } from "../../../redux/reducers/ModeReducers";

const Post = () => {
  

  return (
    <>
      {PostData.map((item) => (
          <PostCard avatarName={item.avatarName} content={item.content} imageUrl={item.imageUrl} subHeader={item.subHeader} title={item.title} key={item.avatarName}/>
      ))}
    </>
  );
};

export default Post;
