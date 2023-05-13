import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = '';
    }

    return (
        <div>
            <div className={s.myPosts}>
                <h2>My posts</h2>
                <textarea ref={newPostElement}
                    onChange={() => {}}
                    className={s.myPostsInput}
                    placeholder="your news"
                    required
                ></textarea>
                <button onClick={addPost} className={s.myPostsBtn}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
