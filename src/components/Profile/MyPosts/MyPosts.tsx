import React from 'react';
import {Post} from "./Post/Post";
import d from './MyPosts.module.css'

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 20}
    ]

    return (
        <div className={d.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={d.posts}>
                <Post postData={postData}/>
            </div>
        </div>
    );
};
