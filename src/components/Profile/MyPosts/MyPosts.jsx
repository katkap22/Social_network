import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.myPosts}>
        <h2>My posts</h2>
        <input
          className={s.myPostsInput}
          type="text"
          placeholder="your news"
          required
        />
        <button className={s.myPostsBtn}>Send</button>
      </div>
      <div>New post</div>
      <div className={s.posts}>
      <Post />  
      <Post />  
      <Post />  
      <Post />  
      <Post />  
      </div>
    </div>
  );
};

export default MyPosts;
