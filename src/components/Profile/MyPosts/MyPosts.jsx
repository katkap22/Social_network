import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p =>
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.myPosts}>
                <h2>My posts</h2>
                <textarea
                    value={props.newPostText}
                    onChange={ onPostChange }
                    className={s.myPostsInput}
                    placeholder="your news"
                    required
                />
                <button onClick={addPost} className={s.myPostsBtn}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
