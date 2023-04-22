import React from "react";
import s from "./Post.module.css";

const   Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt="UserAva"
        src="https://i.pinimg.com/736x/8e/c7/12/8ec71239f4ce15385ca13bb17d968070.jpg"
      />
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
