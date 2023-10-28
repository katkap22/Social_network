import React from "react";
// import s from "./Post.module.css";
import {Avatar, Stack} from "@mui/material";

const   Post = (props) => {
  return (
    <Stack direction='column' sx={{mb: '15px'}}>
      <Avatar
          alt="UserAva"
          src="https://i.pinimg.com/736x/8e/c7/12/8ec71239f4ce15385ca13bb17d968070.jpg"
          sx={{ width: 50, height: 50 }}
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </Stack>
  );
};

export default Post;
