import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '5'},
        {id: 2, message: "It's my first post", likesCount: 25},
    ]*/

    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <div className={s.myPosts}>
                <h2>My posts</h2>
                <textarea
                    className={s.myPostsInput}
                    placeholder="your news"
                    required
                ></textarea>
                <button className={s.myPostsBtn}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
